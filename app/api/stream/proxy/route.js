import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

function toAbsoluteUrl(value, baseUrl) {
  try {
    return new URL(value, baseUrl).toString();
  } catch {
    return null;
  }
}

function proxiedUrl(absoluteUrl) {
  return `/api/stream/proxy?url=${encodeURIComponent(absoluteUrl)}`;
}

function rewriteAttributeUri(line, baseUrl) {
  return line.replace(/URI="([^"]+)"/g, (_, rawUri) => {
    const absolute = toAbsoluteUrl(rawUri, baseUrl);
    if (!absolute) return `URI="${rawUri}"`;
    return `URI="${proxiedUrl(absolute)}"`;
  });
}

function isManifestByContentType(contentType) {
  const type = (contentType || '').toLowerCase();
  return (
    type.includes('mpegurl') ||
    type.includes('application/vnd.apple.mpegurl') ||
    type.includes('application/x-mpegurl')
  );
}

function isManifestByPath(urlString) {
  return urlString.toLowerCase().includes('.m3u8');
}

function rewriteManifest(content, baseUrl) {
  const lines = content.split(/\r?\n/);

  const rewritten = lines.map((line) => {
    const trimmed = line.trim();
    if (!trimmed) return line;

    if (trimmed.startsWith('#')) {
      if (
        trimmed.startsWith('#EXT-X-KEY') ||
        trimmed.startsWith('#EXT-X-MAP') ||
        trimmed.startsWith('#EXT-X-I-FRAME-STREAM-INF') ||
        trimmed.startsWith('#EXT-X-MEDIA')
      ) {
        return rewriteAttributeUri(line, baseUrl);
      }

      if (trimmed.startsWith('#EXT-X-STREAM-INF')) {
        return line;
      }

      return line;
    }

    const absolute = toAbsoluteUrl(trimmed, baseUrl);
    if (!absolute) return line;

    return proxiedUrl(absolute);
  });

  return rewritten.join('\n');
}

function looksLikeManifest(contentType, urlString, bodyText) {
  if (isManifestByContentType(contentType)) {
    return true;
  }

  if (isManifestByPath(urlString)) {
    return true;
  }

  return bodyText.startsWith('#EXTM3U');
}

function buildForwardHeaders(target) {
  return {
    Accept: '*/*',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    Referer: `${target.origin}/`,
    Origin: target.origin,
  };
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const urlParam = searchParams.get('url');

  if (!urlParam) {
    return NextResponse.json({ error: 'Missing url query parameter' }, { status: 400 });
  }

  let target;
  try {
    target = new URL(urlParam);
    if (!['http:', 'https:'].includes(target.protocol)) {
      throw new Error('Invalid protocol');
    }
  } catch {
    return NextResponse.json({ error: 'Invalid target url' }, { status: 400 });
  }

  try {
    const upstream = await fetch(target.toString(), {
      method: 'GET',
      cache: 'no-store',
      headers: buildForwardHeaders(target),
      redirect: 'follow',
    });

    if (!upstream.ok) {
      return NextResponse.json(
        { error: `Upstream request failed (${upstream.status})` },
        { status: upstream.status }
      );
    }

    const contentType = upstream.headers.get('content-type') || '';

    if (isManifestByPath(target.toString()) || isManifestByContentType(contentType)) {
      const body = await upstream.text();
      const manifest = rewriteManifest(body, target.toString());

      return new Response(manifest, {
        status: 200,
        headers: {
          'Content-Type': 'application/vnd.apple.mpegurl; charset=utf-8',
          'Cache-Control': 'no-store',
        },
      });
    }

    const bytes = await upstream.arrayBuffer();
    const preview = new TextDecoder('utf-8', { fatal: false }).decode(bytes.slice(0, 2048));

    if (looksLikeManifest(contentType, target.toString(), preview)) {
      const text = new TextDecoder('utf-8', { fatal: false }).decode(bytes);
      const manifest = rewriteManifest(text, target.toString());

      return new Response(manifest, {
        status: 200,
        headers: {
          'Content-Type': 'application/vnd.apple.mpegurl; charset=utf-8',
          'Cache-Control': 'no-store',
        },
      });
    }

    const passthroughHeaders = {
      'Content-Type': contentType || 'application/octet-stream',
      'Cache-Control': 'no-store',
    };

    const contentLength = upstream.headers.get('content-length');
    const contentRange = upstream.headers.get('content-range');
    const acceptRanges = upstream.headers.get('accept-ranges');

    if (contentLength) passthroughHeaders['Content-Length'] = contentLength;
    if (contentRange) passthroughHeaders['Content-Range'] = contentRange;
    if (acceptRanges) passthroughHeaders['Accept-Ranges'] = acceptRanges;

    return new Response(bytes, {
      status: upstream.status,
      headers: passthroughHeaders,
    });
  } catch (error) {
    return NextResponse.json(
      { error: `Proxy fetch failed: ${error?.message || 'unknown error'}` },
      { status: 502 }
    );
  }
}

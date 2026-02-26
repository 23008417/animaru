import { NextResponse } from 'next/server';
import path from 'path';

let hiAnimeModulePromise;

function applyThreadStreamOverride() {
  const workerPath = path.resolve(process.cwd(), 'node_modules', 'thread-stream', 'lib', 'worker.js');
  const existingOverrides = globalThis.__bundlerPathsOverrides || {};

  globalThis.__bundlerPathsOverrides = {
    ...existingOverrides,
    'thread-stream-worker': workerPath,
  };
}

async function getHiAnimeModule() {
  applyThreadStreamOverride();
  if (!hiAnimeModulePromise) {
    hiAnimeModulePromise = import('aniwatch');
  }

  return hiAnimeModulePromise;
}

const sourceCache = new Map();
const CACHE_TTL_MS = 10 * 60 * 1000;

function getCacheKey(id, server, category) {
  return `${id}::${server}::${category}`;
}

function getFallbackCacheKey(id, category) {
  return `${id}::any::${category}`;
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const server = searchParams.get('server');
  const category = searchParams.get('category'); // This will be passed as "type" to aniwatch

  if (!id || !server || !category) {
    return NextResponse.json({ error: 'Missing query parameters' }, { status: 400 });
  }

  const cacheKey = getCacheKey(id, server, category);
  const fallbackCacheKey = getFallbackCacheKey(id, category);
  const cached = sourceCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
    return NextResponse.json(cached.data);
  }

  const fallbackCached = sourceCache.get(fallbackCacheKey);
  if (fallbackCached && Date.now() - fallbackCached.timestamp < CACHE_TTL_MS) {
    return NextResponse.json(fallbackCached.data);
  }

  try {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const { HiAnime } = await getHiAnimeModule();
        const hianime = new HiAnime.Scraper();
        const data = await hianime.getEpisodeSources(id, server, category);

        if (data?.sources?.length) {
          sourceCache.set(cacheKey, {
            data,
            timestamp: Date.now(),
          });

          sourceCache.set(fallbackCacheKey, {
            data,
            timestamp: Date.now(),
          });
        }

        return NextResponse.json(data);
      } catch (innerError) {
        if (attempt === 2) {
          throw innerError;
        }
      }
    }

    return NextResponse.json({ error: 'Failed to fetch episode sources' }, { status: 500 });
  } catch (error) {
    console.error("Failed to get episode sources:", error);

    if (cached?.data || fallbackCached?.data) {
      return NextResponse.json(cached?.data || fallbackCached?.data);
    }

    return NextResponse.json({ error: "Failed to fetch episode sources" }, { status: 500 });
  }
}

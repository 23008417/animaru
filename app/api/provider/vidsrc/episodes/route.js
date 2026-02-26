import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs';

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const OVERRIDES_FILE = path.join(process.cwd(), 'config', 'vidsrc-overrides.json');

const ANILIST_API = 'https://graphql.anilist.co';

const ANILIST_QUERY = `
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
      episodes
      externalLinks {
        id
        site
        url
      }
    }
  }
`;

const extractTmdbId = (text) => {
  if (!text) return null;
  const value = String(text);
  const fromUrl = value.match(/themoviedb\.org\/(?:tv|movie)\/(\d+)/i)?.[1];
  if (fromUrl) return fromUrl;
  const numeric = value.match(/\b(\d{2,})\b/)?.[1];
  return numeric || null;
};

const extractImdbId = (text) => {
  if (!text) return null;
  const value = String(text);
  const fromUrl = value.match(/imdb\.com\/title\/(tt\d+)/i)?.[1];
  if (fromUrl) return fromUrl;
  const match = value.match(/\btt\d+\b/i)?.[0];
  return match || null;
};

const readEnvOverrides = () => {
  const raw = process.env.NEXT_PUBLIC_VIDSRC_ID_OVERRIDES;
  if (!raw) return {};

  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
};

const readFileOverrides = async () => {
  try {
    const raw = await fs.readFile(OVERRIDES_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
};

const readOverrides = async () => {
  const [fileOverrides, envOverrides] = await Promise.all([
    readFileOverrides(),
    Promise.resolve(readEnvOverrides()),
  ]);

  return {
    ...fileOverrides,
    ...envOverrides,
  };
};

const resolveExternalIds = async (anilistId) => {
  let response = null;

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    response = await fetch(ANILIST_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      cache: 'no-store',
      body: JSON.stringify({
        query: ANILIST_QUERY,
        variables: { id: Number(anilistId) },
      }),
    });

    if (response.ok) {
      break;
    }

    if (response.status !== 429 || attempt === 3) {
      throw new Error(`AniList metadata request failed: ${response.status}`);
    }

    await sleep(500 * attempt);
  }

  if (!response || !response.ok) {
    throw new Error('AniList metadata request failed');
  }

  const payload = await response.json();
  const media = payload?.data?.Media;
  const links = Array.isArray(media?.externalLinks) ? media.externalLinks : [];

  let tmdb = null;
  let imdb = null;

  for (const link of links) {
    const site = String(link?.site || '').toLowerCase();
    const url = String(link?.url || '');
    const id = String(link?.id || '');

    if (!tmdb && (site.includes('tmdb') || site.includes('themoviedb'))) {
      tmdb = extractTmdbId(url) || extractTmdbId(id);
    }

    if (!imdb && site.includes('imdb')) {
      imdb = extractImdbId(url) || extractImdbId(id);
    }
  }

  return {
    tmdb,
    imdb,
    totalEpisodes: Number(media?.episodes) > 0 ? Number(media.episodes) : null,
  };
};

const buildVidSrcUrl = ({ template, anilistId, episodeNumber }) => {
  const safeAnilist = String(anilistId || '').trim();
  const safeEpisode = String(episodeNumber || '').trim();

  return template
    .replaceAll('{id}', encodeURIComponent(`vidsrc-${safeAnilist}`))
    .replaceAll('{episodeId}', encodeURIComponent(safeEpisode))
    .replaceAll('{ep}', encodeURIComponent(safeEpisode))
    .replaceAll('{server}', encodeURIComponent(''))
    .replaceAll('{category}', encodeURIComponent(''))
    .replaceAll('{anilist}', encodeURIComponent(safeAnilist))
    .replaceAll('{tmdb}', encodeURIComponent(''))
    .replaceAll('{imdb}', encodeURIComponent(''))
    .replaceAll('{season}', encodeURIComponent('1'));
};

const buildDefaultVidSrcUrl = ({ tmdb, imdb, season, episodeNumber }) => {
  if (tmdb) {
    return `https://vidsrc-embed.ru/embed/tv?tmdb=${encodeURIComponent(tmdb)}&season=${encodeURIComponent(String(season))}&episode=${encodeURIComponent(String(episodeNumber))}`;
  }

  if (imdb) {
    return `https://vidsrc-embed.ru/embed/tv?imdb=${encodeURIComponent(imdb)}&season=${encodeURIComponent(String(season))}&episode=${encodeURIComponent(String(episodeNumber))}`;
  }

  return null;
};

const checkEpisodeUrl = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
      headers: {
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    });

    return response.ok;
  } catch {
    return false;
  }
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const anilistId = searchParams.get('anilistId');
  const totalEpisodesRaw = Number(searchParams.get('totalEpisodes') || 0);
  const seasonRaw = Number(searchParams.get('season') || 1);
  const template = process.env.NEXT_PUBLIC_VIDSRC_URL;

  if (!anilistId) {
    return NextResponse.json({ error: 'Missing anilistId parameter' }, { status: 400 });
  }

  const season = clamp(Number.isFinite(seasonRaw) && seasonRaw > 0 ? seasonRaw : 1, 1, 99);
  const overrides = await readOverrides();
  const entry = overrides?.[String(anilistId)] || null;

  const overrideTmdb = typeof entry?.tmdb === 'string' || typeof entry?.tmdb === 'number'
    ? String(entry.tmdb)
    : null;
  const overrideImdb = typeof entry?.imdb === 'string' || typeof entry?.imdb === 'number'
    ? String(entry.imdb)
    : null;
  const overrideSeason = Number(entry?.season) > 0 ? Number(entry.season) : null;
  const overrideEpisodes = Number(entry?.episodes) > 0 ? Number(entry.episodes) : null;
  const overrideEpisodeMap = entry?.episodeMap && typeof entry.episodeMap === 'object'
    ? entry.episodeMap
    : null;

  let ids = { tmdb: null, imdb: null, totalEpisodes: null };
  const hasOverrideId = Boolean(overrideTmdb || overrideImdb);

  if (!hasOverrideId) {
    try {
      ids = await resolveExternalIds(anilistId);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to resolve external IDs';

      if (String(message).includes('429')) {
        return NextResponse.json(
          {
            episodes: [],
            tmdb: null,
            imdb: null,
            season: overrideSeason || season,
            warning: 'AniList is rate-limited right now (429). Please retry in a minute, or set NEXT_PUBLIC_VIDSRC_ID_OVERRIDES for this AniList ID.',
          },
          { status: 200 }
        );
      }

      return NextResponse.json(
        {
          episodes: [],
          tmdb: null,
          imdb: null,
          season: overrideSeason || season,
          warning: message,
        },
        { status: 200 }
      );
    }
  }

  const tmdb = overrideTmdb || ids.tmdb || null;
  const imdb = overrideImdb || ids.imdb || null;
  const effectiveSeason = overrideSeason || season;

  if (!tmdb && !imdb) {
    return NextResponse.json(
      {
        episodes: [],
        tmdb: null,
        imdb: null,
        season: effectiveSeason,
        warning: 'No TMDB/IMDb mapping found. Add NEXT_PUBLIC_VIDSRC_ID_OVERRIDES for this AniList ID.',
      },
      { status: 200 }
    );
  }

  const resolvedTotalEpisodes = Number.isFinite(totalEpisodesRaw) && totalEpisodesRaw > 0
    ? totalEpisodesRaw
    : (ids?.totalEpisodes || 24);

  const maxEpisodes = clamp(overrideEpisodes || resolvedTotalEpisodes, 1, 60);
  const episodes = [];
  let missesAfterFirstHit = 0;

  const mapProviderEpisode = (episodeNumber) => {
    if (!overrideEpisodeMap) return episodeNumber;
    const mapped = Number(overrideEpisodeMap[String(episodeNumber)]);
    return Number.isFinite(mapped) && mapped > 0 ? mapped : episodeNumber;
  };

  for (let episodeNumber = 1; episodeNumber <= maxEpisodes; episodeNumber += 1) {
    const providerEpisode = mapProviderEpisode(episodeNumber);
    const url = template
      ? template
          .replaceAll('{id}', encodeURIComponent(`vidsrc-${anilistId}`))
          .replaceAll('{episodeId}', encodeURIComponent(String(providerEpisode)))
          .replaceAll('{ep}', encodeURIComponent(String(providerEpisode)))
          .replaceAll('{server}', encodeURIComponent(''))
          .replaceAll('{category}', encodeURIComponent(''))
          .replaceAll('{anilist}', encodeURIComponent(String(anilistId)))
          .replaceAll('{tmdb}', encodeURIComponent(tmdb || ''))
          .replaceAll('{imdb}', encodeURIComponent(imdb || ''))
            .replaceAll('{season}', encodeURIComponent(String(effectiveSeason)))
      : buildDefaultVidSrcUrl({ tmdb, imdb, season: effectiveSeason, episodeNumber: providerEpisode });

    if (!url) continue;

    const available = await checkEpisodeUrl(url);

    if (!available) {
      if (episodes.length > 0) {
        missesAfterFirstHit += 1;
        if (missesAfterFirstHit >= 6) break;
      }
      continue;
    }

    missesAfterFirstHit = 0;

    episodes.push({
      id: `vidsrc-${anilistId}-${episodeNumber}`,
      number: episodeNumber,
      providerEpisode,
      title: `Episode ${episodeNumber}`,
      image: null,
    });
  }

  if (episodes.length === 0 && hasOverrideId) {
    for (let episodeNumber = 1; episodeNumber <= maxEpisodes; episodeNumber += 1) {
      const providerEpisode = mapProviderEpisode(episodeNumber);
      episodes.push({
        id: `vidsrc-${anilistId}-${episodeNumber}`,
        number: episodeNumber,
        providerEpisode,
        title: `Episode ${episodeNumber}`,
        image: null,
      });
    }

    return NextResponse.json(
      {
        episodes,
        tmdb,
        imdb,
        season: effectiveSeason,
        warning: 'VidSrc availability could not be pre-verified from server, showing episode list from override mapping.',
      },
      { status: 200 }
    );
  }

  return NextResponse.json({ episodes, tmdb, imdb, season: effectiveSeason }, { status: 200 });
}

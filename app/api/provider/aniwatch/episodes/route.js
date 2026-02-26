import { NextResponse } from "next/server";
import path from "path";

export const runtime = 'nodejs';

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

function dedupeEpisodes(items) {
  const seen = new Set();
  const unique = [];

  for (const item of items || []) {
    const rawId = item?.episodeId ?? item?.id;
    if (!rawId) {
      unique.push(item);
      continue;
    }

    const episodeId = String(rawId);
    if (seen.has(episodeId)) {
      continue;
    }

    seen.add(episodeId);
    unique.push(item);
  }

  return unique;
}

function normalizeEpisodeId(value) {
  if (!value) return '';
  const raw = String(value);

  try {
    if (raw.startsWith('http://') || raw.startsWith('https://')) {
      const urlObj = new URL(raw);
      return `${urlObj.pathname.replace('/watch/', '')}${urlObj.search}`;
    }

    if (raw.includes('$episode$')) {
      const [slug, episodePart] = raw.split('$episode$');
      return `${slug}?ep=${episodePart}`;
    }

    return raw;
  } catch {
    return raw;
  }
}

function normalizeTitle(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function extractSeasonFromText(value) {
  if (!value) return null;
  const text = String(value).toLowerCase();

  let match = text.match(/(\d+)(?:st|nd|rd|th)\s*season/);
  if (match) return Number(match[1]);

  match = text.match(/season\s*(\d+)/);
  if (match) return Number(match[1]);

  match = text.match(/\bs\s*(\d{1,2})\b/);
  if (match) return Number(match[1]);

  return null;
}

function hasSeasonHint(value, seasonNumber) {
  if (!value || !Number.isFinite(seasonNumber) || seasonNumber <= 0) return false;
  const text = String(value).toLowerCase();

  const patterns = [
    new RegExp(`\\bseason\\s*${seasonNumber}\\b`),
    new RegExp(`\\b${seasonNumber}(?:st|nd|rd|th)\\s*season\\b`),
    new RegExp(`\\bs\\s*${seasonNumber}\\b`),
    new RegExp(`\\bseason-${seasonNumber}\\b`),
    new RegExp(`\\bseason_${seasonNumber}\\b`),
  ];

  return patterns.some((pattern) => pattern.test(text));
}

function getPreferredSeasonNumber(titles) {
  for (const title of titles) {
    const season = extractSeasonFromText(title);
    if (Number.isFinite(season) && season > 0) {
      return season;
    }
  }

  return null;
}

function getCandidateTitles(api2Data) {
  const titles = api2Data?.titles || {};
  const rawTitles = [
    titles.en,
    titles['x-jat'],
    titles.ja,
    titles['zh-Hans'],
    titles['zh-Hant'],
  ].filter(Boolean);

  const unique = [];
  const seen = new Set();

  for (const title of rawTitles) {
    const key = normalizeTitle(title);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    unique.push(String(title));
  }

  return unique.sort((a, b) => {
    const aHasSeason = extractSeasonFromText(a) ? 1 : 0;
    const bHasSeason = extractSeasonFromText(b) ? 1 : 0;
    return bHasSeason - aHasSeason;
  });
}

function pickBestAnimeResult(results, title, preferredSeasonNumber) {
  if (!Array.isArray(results) || !results.length) return null;
  const normalizedQuery = normalizeTitle(title);

  const ranked = results.map((item, index) => {
    const name = String(item?.name || '');
    const id = String(item?.id || '');
    const normalizedName = normalizeTitle(name);
    const normalizedId = normalizeTitle(id);
    let score = 0;

    if (normalizedName === normalizedQuery) {
      score += 200;
    }

    if (normalizedName.includes(normalizedQuery) || normalizedQuery.includes(normalizedName)) {
      score += 80;
    }

    if (normalizedId.includes(normalizedQuery) || normalizedQuery.includes(normalizedId)) {
      score += 40;
    }

    const candidateSeason = extractSeasonFromText(`${name} ${id}`);
    if (Number.isFinite(preferredSeasonNumber) && preferredSeasonNumber > 0) {
      if (hasSeasonHint(name, preferredSeasonNumber) || hasSeasonHint(id, preferredSeasonNumber)) {
        score += 220;
      } else if (Number.isFinite(candidateSeason) && candidateSeason > 0 && candidateSeason !== preferredSeasonNumber) {
        score -= 120;
      }
    }

    if (normalizedName.includes('special') || normalizedId.includes('special')) {
      score -= 120;
    }

    return {
      item,
      score,
      index,
    };
  });

  ranked.sort((a, b) => b.score - a.score || a.index - b.index);
  return ranked[0]?.item || results[0];
}

async function fetchAniwatchEpisodes(api2Data) {
  const titles = getCandidateTitles(api2Data);
  if (!titles.length) return null;
  const preferredSeasonNumber = getPreferredSeasonNumber(titles);

  try {
    const { HiAnime } = await getHiAnimeModule();
    const hianime = new HiAnime.Scraper();

    for (const title of titles) {
      const search = await hianime.search(title, 1, {});
      const result = pickBestAnimeResult(search?.animes, title, preferredSeasonNumber);
      if (!result?.id) continue;

      const episodesResponse = await hianime.getEpisodes(result.id);
      const episodes = episodesResponse?.episodes;
      if (!Array.isArray(episodes) || !episodes.length) continue;

      return episodes;
    }
  } catch {
    return null;
  }

  return null;
}

async function fetchPrimaryEpisodes(animeId) {
  const candidates = [
    `https://no-drab.vercel.app/meta/anilist/info/${animeId}`,
    `https://api.consumet.org/meta/anilist/info/${animeId}`,
  ];

  for (const url of candidates) {
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      const data = await res.json();
      if (Array.isArray(data?.episodes) && data.episodes.length > 0) {
        return data.episodes;
      }
    } catch {
      continue;
    }
  }

  return null;
}

function resolveMapperBaseUrl() {
  const raw = process.env.NEXT_PUBLIC_HIANIME_MAPPER_URL;
  const defaultBase = "https://hianime-mapper-iv3g.vercel.app";

  if (!raw) {
    return defaultBase;
  }

  const normalized = raw.trim().replace(/\/+$/, '');
  if (normalized.endsWith('.json')) {
    return defaultBase;
  }

  return normalized;
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const animeId = searchParams.get("animeId");

  if (!animeId) {
    return NextResponse.json({ error: "Missing animeId" }, { status: 400 });
  }

  try {
    // Fetch the mappings from Ani.zip
    const api2Res = await fetch(`https://api.ani.zip/mappings?anilist_id=${animeId}`);
    const api2Data = await api2Res.json();

    if (!api2Data?.episodes) {
      return NextResponse.json({ error: "Invalid response from API 2" }, { status: 500 });
    }

    const buildMergedEpisodes = (episodes) => {
      return episodes.map((ep) => {
        const number = Number(ep?.number) > 0 ? Number(ep.number) : 0;
        const detailsFromApi2 = api2Data.episodes[number] || {};

        return {
          episodeId: normalizeEpisodeId(ep?.url || ep?.episodeId || ep?.id),
          title: ep?.title || detailsFromApi2.title?.en || `Episode ${number || '?'}`,
          synopsis: detailsFromApi2.summary || detailsFromApi2.overview || "No synopsis available.",
          image: detailsFromApi2.image || ep?.image || "/placeholder.jpg",
          airDate: ep?.createdAt || detailsFromApi2.airDate || "Unknown Air Date",
          number,
        };
      }).filter((item) => item.episodeId);
    };

    const primaryEpisodes = await fetchPrimaryEpisodes(animeId);
    if (primaryEpisodes) {
      const mergedData = buildMergedEpisodes(primaryEpisodes);
      if (mergedData.length) {
        return NextResponse.json({ episodes: dedupeEpisodes(mergedData) });
      }
    }

    const aniwatchEpisodes = await fetchAniwatchEpisodes(api2Data);
    if (aniwatchEpisodes) {
      const mergedData = buildMergedEpisodes(aniwatchEpisodes);
      if (mergedData.length) {
        return NextResponse.json({ episodes: dedupeEpisodes(mergedData) });
      }
    }

    // Fetch from mapper API and merge with Ani.zip episode metadata
    const mapperBase = resolveMapperBaseUrl();
    if (!mapperBase) {
      return NextResponse.json({ error: "Episode provider fallback is not configured" }, { status: 500 });
    }

    const res1 = await fetch(`${mapperBase}/anime/info/${animeId}`);
    const api1Data = await res1.json();

    if (!Array.isArray(api1Data?.data?.episodesList)) {
      return NextResponse.json({ error: "Invalid response from API 1" }, { status: 500 });
    }

    const mergedData = api1Data.data.episodesList.map((episode) => {
      const detailsFromApi2 = api2Data.episodes[episode.number] || {};

      return {
        episodeId: normalizeEpisodeId(episode.id),
        title: detailsFromApi2.title?.en || `Episode ${episode.number}`,
        synopsis: detailsFromApi2.summary || "No synopsis available.",
        image: detailsFromApi2.image || "/placeholder.jpg",
        airDate: detailsFromApi2.airDate || "Unknown Air Date",
        number: episode.number,
      };
    }).filter((item) => item.episodeId);

    return NextResponse.json({ episodes: dedupeEpisodes(mergedData) });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch episode data" }, { status: 500 });
  }
}

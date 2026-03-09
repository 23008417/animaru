import { NextResponse } from "next/server";

const ANILIST_API_URL = "https://graphql.anilist.co";

function isRecentEpisodesPath(pathSegments) {
  return (
    pathSegments.length === 3 &&
    pathSegments[0] === "meta" &&
    pathSegments[1] === "anilist" &&
    pathSegments[2] === "recent-episodes"
  );
}

async function fetchAniListRecentEpisodes(searchParams) {
  const page = Number(searchParams.get("page")) || 1;
  const perPage = Number(searchParams.get("perPage")) || 20;

  const response = await fetch(ANILIST_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `
        query ($page: Int, $perPage: Int) {
          Page(page: $page, perPage: $perPage) {
            pageInfo {
              currentPage
              hasNextPage
            }
            airingSchedules(notYetAired: false, sort: TIME_DESC) {
              episode
              airingAt
              media {
                id
                episodes
                averageScore
                status
                title {
                  romaji
                  english
                  native
                  userPreferred
                }
                coverImage {
                  large
                }
              }
            }
          }
        }
      `,
      variables: { page, perPage },
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`AniList recent episodes fallback failed: ${response.status}`);
  }

  const payload = await response.json();
  const pageData = payload?.data?.Page;
  const schedules = pageData?.airingSchedules || [];
  const deduped = [];
  const seen = new Set();

  for (const schedule of schedules) {
    const media = schedule?.media;
    const mediaId = media?.id;

    if (!mediaId || seen.has(mediaId)) {
      continue;
    }

    seen.add(mediaId);
    deduped.push({
      id: String(mediaId),
      title: media.title,
      image: media.coverImage?.large || null,
      status: media.status || "RELEASING",
      releaseDate: schedule?.airingAt
        ? new Date(schedule.airingAt * 1000).getUTCFullYear()
        : null,
      episodes: media.episodes || schedule?.episode || null,
      rating: media.averageScore || null,
      episodeNumber: schedule?.episode || null,
    });
  }

  return {
    currentPage: pageData?.pageInfo?.currentPage || page,
    hasNextPage: Boolean(pageData?.pageInfo?.hasNextPage),
    results: deduped,
  };
}

function normalizeBase(baseUrl) {
  return (baseUrl || "").trim().replace(/\/+$/, "");
}

function getBaseUrls() {
  const configured = normalizeBase(process.env.NEXT_PUBLIC_CONSUMET_BASE_URL);
  const fallbacks = ["https://no-drab.vercel.app", "https://api.consumet.org"];
  const candidates = [configured, ...fallbacks].filter(Boolean);
  return [...new Set(candidates)];
}

function isInvalidApiPayload(data) {
  if (!data || typeof data !== "object") {
    return true;
  }

  if (typeof data?.meta?.title === "string" && data.meta.title.startsWith("GitHub -")) {
    return true;
  }

  if (
    data?.payload?.repo ||
    data?.payload?.allShortcutsEnabled ||
    data?.payload?.codeViewRepoRoute ||
    data?.payload?.blob ||
    data?.payload?.currentUser
  ) {
    return true;
  }

  return false;
}

export async function GET(req, context) {
  const params = await context.params;
  const pathSegments = params?.path || [];

  if (!pathSegments.length) {
    return NextResponse.json({ error: "Missing Consumet path" }, { status: 400 });
  }

  const url = new URL(req.url);
  const search = url.search || "";
  const bases = getBaseUrls();
  const recentEpisodesPath = isRecentEpisodesPath(pathSegments);

  for (const base of bases) {
    const target = `${base}/${pathSegments.join("/")}${search}`;

    try {
      const upstream = await fetch(target, {
        cache: "no-store",
        headers: {
          Accept: "application/json",
        },
      });

      if (!upstream.ok) {
        continue;
      }

      const body = await upstream.text();
      let parsed;

      try {
        parsed = JSON.parse(body);
      } catch {
        continue;
      }

      if (isInvalidApiPayload(parsed)) {
        continue;
      }

      return NextResponse.json(parsed, { status: 200 });
    } catch {
      continue;
    }
  }

  if (recentEpisodesPath) {
    try {
      const fallbackData = await fetchAniListRecentEpisodes(url.searchParams);
      return NextResponse.json(fallbackData, { status: 200 });
    } catch {
      // fall through to the shared error response below
    }
  }

  return NextResponse.json({ error: "Failed to fetch from Consumet upstreams" }, { status: 502 });
}
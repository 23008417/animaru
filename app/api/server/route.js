
import { NextResponse } from "next/server";
import path from "path";

let hiAnimeModulePromise;

function applyThreadStreamOverride() {
  const workerPath = path.resolve(process.cwd(), "node_modules", "thread-stream", "lib", "worker.js");
  const existingOverrides = globalThis.__bundlerPathsOverrides || {};

  globalThis.__bundlerPathsOverrides = {
    ...existingOverrides,
    "thread-stream-worker": workerPath,
  };
}

async function getHiAnimeModule() {
  applyThreadStreamOverride();
  if (!hiAnimeModulePromise) {
    hiAnimeModulePromise = import("aniwatch");
  }

  return hiAnimeModulePromise;
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const episodeId = searchParams.get("episodeId");

  if (!episodeId) {
    return NextResponse.json({ error: "Missing episodeId parameter" }, { status: 400 });
  }

  try {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const { HiAnime } = await getHiAnimeModule();
        const hianime = new HiAnime.Scraper();
        const data = await hianime.getEpisodeServers(episodeId);
        return NextResponse.json(data, { status: 200 });
      } catch (innerError) {
        if (attempt === 2) {
          throw innerError;
        }
      }
    }

    return NextResponse.json(
      {
        status: 500,
        scraper: "getEpisodeServers",
        message: "getEpisodeServers: fetchError: Something went wrong",
      },
      { status: 500 }
    );
  } catch (error) {
    console.error("Error in getEpisodeServers:", error);
    return NextResponse.json(
      {
        status: 500,
        scraper: "getEpisodeServers",
        message: "getEpisodeServers: fetchError: Something went wrong",
      },
      { status: 500 }
    );
  }
}

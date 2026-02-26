import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { PlayIcon } from "@heroicons/react/24/solid";

const EpisodeGuide = ({ animeId, activeEpisodeId, source = 'aniwatch', tmdb = '', imdb = '', season = '1' }) => {
  const [episodeData, setEpisodeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentEpisodeIdentifier, setCurrentEpisodeIdentifier] = useState("");
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const pathname = url.pathname.replace("/watch/", "");
      const searchParams = url.search;
      setCurrentEpisodeIdentifier(decodeURIComponent(`${pathname}${searchParams}`));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/consumet/meta/anilist/info/${animeId}`);
        const apiData = await response.json();

        if (Array.isArray(apiData?.episodes)) {
          const mappedEpisodes = apiData.episodes.map((episode) => {
              let cleanId = "";

              // Try using episode.url first
              try {
                const urlObj = new URL(episode.url);
                cleanId = `${urlObj.pathname.replace("/watch/", "")}${urlObj.search}`;
              } catch {
                // Fallback: try to parse from episode.id
                const idParts = episode.id.split("$");
                const animeSlug = idParts[0];
                const epNumericPart = idParts.find((part) => /^\d+$/.test(part));
                cleanId = epNumericPart ? `${animeSlug}?ep=${epNumericPart}` : episode.id;
              }

              return {
                id: cleanId,
                title: episode.title || `Episode ${episode.number}`,
              };
            });

          const uniqueEpisodes = mappedEpisodes.filter((episode, index, self) =>
            self.findIndex((item) => item.id === episode.id) === index
          );

          setEpisodeData(uniqueEpisodes);
        } else if (apiData?.totalEpisodes && Number.isInteger(apiData.totalEpisodes)) {
          const fallbackEpisodes = Array.from({ length: apiData.totalEpisodes }, (_, index) => ({
            id: `${animeId}?ep=${index + 1}`,
            title: `Episode ${index + 1}`,
          }));
          setEpisodeData(fallbackEpisodes);
        } else {
          setError("No episode data available.");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch episode data.");
      }
      setLoading(false);
    };

    fetchData();
  }, [animeId]);

  if (loading) {
    return (
      <div className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 p-3 space-y-2">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="animate-pulse h-12 bg-zinc-800 rounded-lg w-full"></div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-20 rounded-xl border border-zinc-800 bg-zinc-900/60">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/80">
        <h3 className="text-sm font-semibold text-zinc-100 tracking-wide">Episodes</h3>
        <span className="text-xs text-zinc-400">{episodeData.length}</span>
      </div>
      <section
        ref={scrollContainerRef}
        className="max-h-[72vh] overflow-y-auto space-y-2 p-3 scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-700"
      >
        {episodeData.map((episode, index) => {
          const isCurrent =
            activeEpisodeId
              ? activeEpisodeId === episode.id
              : currentEpisodeIdentifier === episode.id;

          return (
            <Link
              key={`${episode.id}-${index}`}
              href={`/watch/${encodeURIComponent(episode.id)}?anilist=${animeId}&source=${encodeURIComponent(source)}${tmdb ? `&tmdb=${encodeURIComponent(tmdb)}` : ''}${imdb ? `&imdb=${encodeURIComponent(imdb)}` : ''}${source === 'vidsrc' ? `&season=${encodeURIComponent(season)}` : ''}`}
              className={`group flex items-center gap-3 rounded-lg border px-3 py-3 transition-all duration-200 ${
                isCurrent
                  ? "border-purple-500 bg-purple-500/10"
                  : "border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-zinc-700"
              }`}
            >
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xs font-semibold ${
                isCurrent ? "bg-purple-500 text-white" : "bg-zinc-800 text-zinc-300"
              }`}>
                {index + 1}
              </span>
              <span className={`truncate text-sm ${isCurrent ? "font-semibold text-white" : "text-zinc-200"}`}>
                {episode.title}
              </span>
              {isCurrent && (
                <span className="ml-auto w-6 h-6 flex items-center justify-center rounded-full bg-purple-500 text-white">
                  <PlayIcon className="w-4 h-4" />
                </span>
              )}
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default EpisodeGuide;

'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const OnAir = () => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOnAirAnime = async () => {
      try {
        const res = await fetch('/api/onair', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await res.json();
        setAnimeList(data);
      } catch (error) {
        console.error('Error fetching on-air anime:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOnAirAnime();
  }, []);

  const getAirStatus = (airingAt) => {
    const now = new Date();
    const airDate = new Date(airingAt * 1000);
    return airDate > now ? 'unaired' : 'aired';
  };

  if (loading) {
    return (
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
        <div className="h-6 w-52 rounded bg-zinc-800 animate-pulse" />
        <div className="mt-4 space-y-3 animate-pulse">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex justify-between items-center px-3 py-3 bg-zinc-800/70 rounded-lg h-12 w-full" />
          ))}
        </div>
      </div>
    );
  }

  const sortedAnime = [...animeList].sort((a, b) => {
    return getAirStatus(a.airingAt) === 'unaired' ? -1 : 1;
  });

  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 md:p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl md:text-2xl font-bold">Currently Airing Today</h2>
          <p className="text-xs md:text-sm text-zinc-400 mt-1">Latest schedule split by upcoming and already aired episodes</p>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold">
          {sortedAnime.length} entries
        </span>
      </div>

      <div className="space-y-2 mt-4">
        {sortedAnime.map((item, index) => {
          const { media, airingAt, episode } = item;
          const airStatus = getAirStatus(airingAt);
          const timeLabel = new Date(airingAt * 1000).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });

          const isFirstAired =
            airStatus === 'aired' &&
            index > 0 &&
            getAirStatus(sortedAnime[index - 1].airingAt) === 'unaired';

          return (
            <div key={item.id}>
              {isFirstAired && (
                <div className="flex items-center gap-2 my-4">
                  <div className="h-px flex-1 bg-purple-500/50" />
                  <span className="text-[10px] uppercase tracking-wider text-purple-300">Already Aired</span>
                  <div className="h-px flex-1 bg-purple-500/50" />
                </div>
              )}

              <div
                className={`group flex justify-between items-center gap-3 px-3 py-3 rounded-lg border transition-all duration-200 ${
                  airStatus === 'aired'
                    ? 'border-zinc-800 bg-zinc-900/50 text-zinc-400'
                    : 'border-purple-500/60 bg-purple-500/10 text-white hover:bg-purple-500/15'
                }`}
              >
                <Link
                  href={`/anime/${media.id}`}
                  className="truncate max-w-[65%] font-medium hover:underline"
                >
                  {media.title.english || media.title.romaji}
                </Link>
                <span className={`text-xs sm:text-sm truncate px-2 py-1 rounded-full ${
                  airStatus === 'aired' ? 'bg-zinc-800 text-zinc-300' : 'bg-purple-500/20 text-purple-200'
                }`}>
                  {airStatus === 'aired'
                    ? `Aired ${timeLabel}`
                    : `Ep ${episode} • ${timeLabel}`}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OnAir;

import React, { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard"; 
import AnimeCardSkeleton from "./AnimeCardSkeleton";  

const Top = () => {
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/consumet/meta/anilist/top`);
        const data = await response.json();
        const transformedData = data.results.map((anime) => ({
          id: anime.id,
          image: anime.image,
          title: {
            english: anime.title.english,
            romaji: anime.title.romaji,
          },
          status: anime.status,
          releaseDate: anime.releaseDate,
          totalEpisodes: anime.totalEpisodes,
          rating: anime.rating / 10,
        }));
        setAnimeData(transformedData);
      } catch (error) {
        console.error("Error fetching top anime data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="p-4 mt-2 rounded-xl border border-zinc-800 bg-zinc-900/60">
      <div className="flex items-end justify-between gap-3 mb-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold">Top Anime</h2>
          <p className="text-xs md:text-sm text-zinc-400 mt-1">Highest-ranked picks from AniList</p>
        </div>
        {!loading && (
          <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold">
            {animeData.length} titles
          </span>
        )}
      </div>
      <div className="pb-8 mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 auto-rows-[1fr] 2xl:grid-cols-7 3xl:grid-cols-8">
        {loading
          ? Array.from({ length: 10 }).map((_, index) => <AnimeCardSkeleton key={index} />)
          : animeData.map((anime) => <AnimeCard key={anime.id} data={anime} />)}
      </div>
    </section>
  );
};

export default Top;

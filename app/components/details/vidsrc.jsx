import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function VidSrc({ anilistId }) {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [warning, setWarning] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [providerMeta, setProviderMeta] = useState({ tmdb: null, imdb: null, season: 1 });

  useEffect(() => {
    async function fetchEpisodes() {
      try {
        setError(null);
        setWarning(null);

        let totalEpisodes = 24;
        let fallbackImage = null;

        try {
          const infoRes = await fetch(`/api/consumet/meta/anilist/info/${anilistId}`);
          if (infoRes.ok) {
            const infoData = await infoRes.json();
            const normalized = infoData?.data || infoData;
            if (Number(normalized?.totalEpisodes) > 0) {
              totalEpisodes = Number(normalized.totalEpisodes);
            }
            fallbackImage = normalized?.image || null;
          }
        } catch {
          // keep defaults
        }

        setCoverImage(fallbackImage);

        const res = await fetch(`/api/provider/vidsrc/episodes?anilistId=${anilistId}&totalEpisodes=${totalEpisodes}`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data?.error || 'Failed to fetch VidSrc episodes');
        }

        setEpisodes(data?.episodes || []);
        if (data?.warning) {
          setWarning(data.warning);
        }
        setProviderMeta({
          tmdb: data?.tmdb || null,
          imdb: data?.imdb || null,
          season: Number(data?.season) > 0 ? Number(data.season) : 1,
        });
      } catch (err) {
        console.error("VidSrc episodes fetch failed:", err);
        setError(err.message || 'Failed to fetch VidSrc episodes');
      } finally {
        setLoading(false);
      }
    }

    if (anilistId) fetchEpisodes();
  }, [anilistId]);

  if (loading) return <div className="p-4 text-white">Loading episodes...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;
  if (!episodes.length) {
    return (
      <div className="p-4 text-white space-y-2">
        <p>No episodes found.</p>
        {warning && <p className="text-yellow-400 text-sm">{warning}</p>}
        <p className="text-xs text-zinc-400">
          You can set NEXT_PUBLIC_VIDSRC_ID_OVERRIDES in .env, example:
          {' '}
          {`{"184951":{"tmdb":"12345","season":1}}`}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
      {episodes.map((ep, index) => (
        <Link
          key={`${ep.id}-${index}`}
          href={`/watch/${encodeURIComponent(ep.id)}?anilist=${anilistId}&ep=${ep.providerEpisode || ep.number}&source=vidsrc${providerMeta.tmdb ? `&tmdb=${encodeURIComponent(providerMeta.tmdb)}` : ''}${providerMeta.imdb ? `&imdb=${encodeURIComponent(providerMeta.imdb)}` : ''}&season=${providerMeta.season}`}
          className="relative group rounded-2xl overflow-hidden shadow-lg border border-zinc-700 bg-zinc-900 transition-transform duration-300 hover:scale-[1.05] hover:shadow-2xl"
        >
          <div className="relative w-full h-32">
            <img
              src={ep.image || coverImage || '/default-cover.jpg'}
              alt={`Episode ${ep.number}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 w-full p-3 bg-gradient-to-t from-black/90 to-transparent text-white">
              <div className="text-sm font-bold leading-tight">Episode {ep.number}</div>
              <div className="text-xs truncate">{ep.title || `Episode ${ep.number}`}</div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
          </div>
        </Link>
      ))}
    </div>
  );
}

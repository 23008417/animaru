'use client';

import { useState } from 'react';
import { useSearchParams, useParams } from 'next/navigation';
import Script from 'next/script';
import ServerSelector from './server';
import EpisodeGuide from '@components/watch/EpisodeGuide';
import VideoPlayer from '@components/watch/player/VideoPlayer';

const WatchPage = () => {
  const { id: animeSlug } = useParams();
  const searchParams = useSearchParams();

  const episodeId = searchParams.get('ep');
  const anilistId = Number(searchParams.get('anilist'));
  const sourceParam = (searchParams.get('source') || '').toLowerCase();
  const tmdbId = searchParams.get('tmdb') || '';
  const imdbId = searchParams.get('imdb') || '';
  const seasonParam = searchParams.get('season') || '1';

  const [selectedServer, setSelectedServer] = useState(null);
  const [category, setCategory] = useState(null);
  const [playerType, setPlayerType] = useState('default');
  const selectedSource = sourceParam === 'vidsrc' ? 'vidsrc' : 'aniwatch';

  const decodedAnimeSlug = animeSlug ? decodeURIComponent(animeSlug) : '';
  const formattedId = animeSlug
    ? (episodeId ? `${animeSlug}?ep=${episodeId}` : decodedAnimeSlug)
    : '';
  const externalPlayerBase = process.env.NEXT_PUBLIC_PLAYER;
  const hasExternalPlayer = Boolean(externalPlayerBase);
  const vidSrcTemplate = process.env.NEXT_PUBLIC_VIDSRC_URL;
  const hasVidSrc = Boolean(vidSrcTemplate);

  const currentEpisodeNumber = episodeId
    ? (String(episodeId).match(/(?:ep(?:isode)?(?:-|_|\s)?)?(\d+)$/i)?.[1] || '')
    : '';

  const buildVidSrcUrl = () => {
    if (vidSrcTemplate) {
      return vidSrcTemplate
        .replaceAll('{id}', encodeURIComponent(formattedId))
        .replaceAll('{episodeId}', encodeURIComponent(episodeId || ''))
        .replaceAll('{ep}', encodeURIComponent(currentEpisodeNumber || ''))
        .replaceAll('{server}', encodeURIComponent(selectedServer || ''))
        .replaceAll('{category}', encodeURIComponent(category || ''))
        .replaceAll('{anilist}', encodeURIComponent(String(anilistId || '')))
        .replaceAll('{tmdb}', encodeURIComponent(tmdbId))
        .replaceAll('{imdb}', encodeURIComponent(imdbId))
        .replaceAll('{season}', encodeURIComponent(seasonParam));
    }

    if (tmdbId) {
      return `https://vidsrc-embed.ru/embed/tv?tmdb=${encodeURIComponent(tmdbId)}&season=${encodeURIComponent(seasonParam)}&episode=${encodeURIComponent(currentEpisodeNumber || '')}`;
    }

    if (imdbId) {
      return `https://vidsrc-embed.ru/embed/tv?imdb=${encodeURIComponent(imdbId)}&season=${encodeURIComponent(seasonParam)}&episode=${encodeURIComponent(currentEpisodeNumber || '')}`;
    }

    return '';
  };

  const vidSrcUrl = buildVidSrcUrl();

  const playerTypes = hasExternalPlayer
    ? [
        { id: 'artplayer', label: 'ArtPlayer' },
        { id: 'plyr', label: 'Plyr' },
      ]
    : [];

  return (
    <div className="flex flex-col lg:flex-row bg-black pt-20 text-white min-h-screen">

      {/* Main Content */}
      <div className="lg:w-3/4 w-full p-4 mt-6 flex flex-col gap-8">

        {/* Player Display */}
        {selectedSource === 'vidsrc' && (
          <>
            {hasVidSrc && vidSrcUrl ? (
              <>
                <iframe
                  src={vidSrcUrl}
                  className="w-full aspect-video rounded-md border border-gray-700"
                  allowFullScreen
                />
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <span>If embed is blocked by provider, open directly:</span>
                  <a
                    href={vidSrcUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 text-white"
                  >
                    Open VidSrc
                  </a>
                </div>
              </>
            ) : (
              <div className="w-full aspect-video rounded-md border border-gray-700 bg-gray-900 flex items-center justify-center text-center px-4">
                <p className="text-sm text-gray-300">
                  VidSrc URL could not be built for this episode. Missing VidSrc TMDB/IMDb mapping or invalid template.
                </p>
              </div>
            )}
          </>
        )}

        {selectedSource !== 'vidsrc' && formattedId && selectedServer && category && (
          <>
            {(playerType === 'default' || !hasExternalPlayer) && (
              <VideoPlayer
                id={formattedId}
                server={selectedServer}
                category={category}
                anilistId={anilistId}
              />
            )}

            {playerType === 'artplayer' && (
              <iframe
                src={`${externalPlayerBase}?id=${formattedId}&server=${selectedServer}&category=${category}`}
                className="w-full aspect-video rounded-md border border-gray-700"
                allowFullScreen
              />
            )}

            {playerType === 'plyr' && (
              <iframe
                src={`${externalPlayerBase}/plyr?id=${formattedId}&server=${selectedServer}&category=${category}`}
                className="w-full aspect-video rounded-md border border-gray-700"
                allowFullScreen
              />
            )}
                  
            
      

            {/* Player Switcher Toolbar */}
            {playerTypes.length > 0 && (
              <div className="mt-4 flex gap-2 border border-gray-700 bg-gray-900 rounded-md p-2 w-fit">
                {playerTypes.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setPlayerType(id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors duration-200 ${
                      playerType === id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </>
        )}

        {/* Server Selector */}
        {selectedSource !== 'vidsrc' && (
          <ServerSelector
            episodeId={formattedId}
            setSelectedServer={setSelectedServer}
            setCategory={setCategory}
          />
        )}

      </div>

      {/* Sidebar (Episode Guide) */}
      <div className="lg:w-1/4 w-full p-4 border-l border-gray-700">
        {anilistId && (
          <EpisodeGuide
            animeId={anilistId}
            activeEpisodeId={formattedId}
            source={selectedSource}
            tmdb={tmdbId}
            imdb={imdbId}
            season={seasonParam}
          />
        )}
      </div>

      {/* Eruda for debugging */}
      <Script
        src="https://cdn.jsdelivr.net/npm/eruda"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.eruda && !window.eruda._isInit) {
            window.eruda.init();
            window.eruda._isInit = true;
          }
        }}
      />
    </div>
  );
};

export default WatchPage;

'use client';

import {
  MediaPlayer,
  MediaProvider,
  Track,
} from '@vidstack/react';
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';
import { useEffect, useMemo, useRef, useState } from 'react';
import Cookies from 'js-cookie';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

const formatTime = (seconds) => {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec.toString().padStart(2, '0')}`;
};

function SkipSVGButton({ onClick, label }) {
  return (
    <motion.div
      className="skip-button-container"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="skip-button-svg"
        viewBox="0 0 200 60"
      >
        <rect className="skip-button-rect" width="200" height="60" />
        <text x="50%" y="50%" className="skip-button-text">
          {label}
        </text>
      </svg>
    </motion.div>
  );
}

function SkipButtons({ intro, outro, currentTime, onSkipTo }) {
  const handleSkip = (to) => {
    if (typeof onSkipTo === 'function') onSkipTo(to);
  };

  const showIntro = intro && currentTime >= intro.start && currentTime <= intro.end;
  const showOutro = outro && currentTime >= outro.start && currentTime <= outro.end;

  return (
    <AnimatePresence>
      {showIntro && <SkipSVGButton label="Skip Intro" onClick={() => handleSkip(intro.end)} />}
      {showOutro && <SkipSVGButton label="Skip Outro" onClick={() => handleSkip(outro.end)} />}
    </AnimatePresence>
  );
}

export default function VideoPlayer({ id, server, category, anilistId }) {
  const [sourceData, setSourceData] = useState(null);
  const [playerError, setPlayerError] = useState(null);
  const [romajiTitle, setRomajiTitle] = useState('ANIMARU');
  const [resumeTime, setResumeTime] = useState(0);
  const [initialResumeTime, setInitialResumeTime] = useState(null);
  const [bannerImage, setBannerImage] = useState(undefined);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeSourceIndex, setActiveSourceIndex] = useState(0);
  const lastSavedRef = useRef(0);
  const saveIntervalRef = useRef(null);
  const playerRef = useRef(null);
  const canPlayRef = useRef(false);

  useEffect(() => {
    const fetchSource = async () => {
      try {
        setPlayerError(null);

        const isSourceReachable = async (sourceUrl) => {
          if (!sourceUrl) return false;

          try {
            const response = await axios.get('/api/stream/proxy', {
              params: { url: sourceUrl },
              timeout: 10000,
            });

            return response.status >= 200 && response.status < 300;
          } catch {
            return false;
          }
        };

        const requestSource = async (serverName, categoryName) => {
          const response = await axios.get('/api/provider/aniwatch/player', {
            params: { id, server: serverName, category: categoryName },
            timeout: 20000,
          });

          const payload = response?.data;
          if (!payload?.sources?.length) {
            throw new Error('No playable sources returned');
          }

          const firstSourceUrl = payload.sources?.[0]?.url;
          const reachable = await isSourceReachable(firstSourceUrl);
          if (!reachable) {
            throw new Error('Source manifest is unreachable for this server');
          }

          return payload;
        };

        let data;

        try {
          data = await requestSource(server, category);
        } catch (primaryError) {
          const serversRes = await axios.get('/api/server', {
            params: { episodeId: id },
            timeout: 20000,
          });

          const serverGroups = serversRes?.data || {};
          const allCandidates = [
            ...(serverGroups?.[category] || []),
            ...(serverGroups?.sub || []),
            ...(serverGroups?.dub || []),
            ...(serverGroups?.raw || []),
          ];

          const uniqueCandidates = allCandidates
            .map((candidate) => ({
              serverName: candidate?.serverName,
              categoryName: candidate?.category || category,
            }))
            .filter((candidate) => Boolean(candidate.serverName))
            .filter((candidate, index, self) =>
              self.findIndex(
                (item) => item.serverName === candidate.serverName && item.categoryName === candidate.categoryName
              ) === index
            );

          let lastError = primaryError;
          for (const candidate of uniqueCandidates) {
            try {
              data = await requestSource(candidate.serverName, candidate.categoryName);
              break;
            } catch (candidateError) {
              lastError = candidateError;
            }
          }

          if (!data) {
            throw lastError;
          }
        }

        setSourceData(data);
        setRomajiTitle(data.title || 'SemicolonAnime Player');

        const uid = Cookies.get('uid');
        if (uid && anilistId) {
          const { data: resumeRes } = await axios.post('/api/resume', {
            uid,
            animeId: id,
            anilistId,
            time: 0,
            duration: 0,
          });

          if (resumeRes?.time) {
            setResumeTime(resumeRes.time);
            setInitialResumeTime(resumeRes.time);
          }
        } else {
          const local = localStorage.getItem(`resume-${id}`);
          if (local) {
            const localTime = parseFloat(local);
            setResumeTime(localTime);
            setInitialResumeTime(localTime);
          }
        }
      } catch (err) {
        const message = err?.response?.data?.error || err?.message || 'Failed to load player source';
        console.error('Player error:', message);
        setPlayerError(message);
        setSourceData(null);
      }
    };

    fetchSource();
  }, [id, server, category, anilistId]);

  useEffect(() => {
    const fetchBanner = async () => {
      if (!anilistId) {
        setBannerImage(null);
        return;
      }
      try {
        const res = await axios.post(
          'https://graphql.anilist.co',
          {
            query: `
              query ($id: Int) {
                Media(id: $id) {
                  bannerImage
                }
              }
            `,
            variables: { id: parseInt(anilistId) },
          },
          {
            headers: { 'Content-Type': 'application/json' },
          }
        );

        const banner = res.data?.data?.Media?.bannerImage;
        setBannerImage(banner || null);
      } catch (err) {
        console.error('Banner fetch error:', err.message);
        setBannerImage(null);
      }
    };

    fetchBanner();
  }, [anilistId]);

  const getDOMDurationInSeconds = () => {
    try {
      const text = document.querySelector('.vds-time[data-type="duration"]')?.textContent;
      if (!text) return 0;
      const [min, sec] = text.split(':').map(Number);
      return min * 60 + sec;
    } catch {
      return 0;
    }
  };

  const handleTimeUpdate = (e) => {
    const currentTime = e.currentTime || playerRef.current?.currentTime || 0;
    const duration = e.duration || playerRef.current?.duration || getDOMDurationInSeconds() || 0;

    setCurrentTime(currentTime);

    const now = Date.now();
    if (now - lastSavedRef.current < 30000) return;
    lastSavedRef.current = now;

    const uid = Cookies.get('uid');
    if (!uid) {
      localStorage.setItem(`resume-${id}`, currentTime.toString());
    } else if (anilistId && currentTime > 0 && duration > 0) {
      axios.put('/api/resume', {
        uid,
        animeId: id,
        anilistId,
        time: currentTime,
        duration,
      });
    }
  };

  const handleSkipTo = (to) => {
    if (playerRef.current) {
      playerRef.current.currentTime = to;
      setCurrentTime(to);
    }
  };

  const handlePlayerCanPlay = () => {
    canPlayRef.current = true;

    if (initialResumeTime && playerRef.current) {
      playerRef.current.currentTime = initialResumeTime;
    }

    if (saveIntervalRef.current) clearInterval(saveIntervalRef.current);

    saveIntervalRef.current = setInterval(() => {
      const currentTime = playerRef.current?.currentTime || 0;
      const duration = playerRef.current?.duration || 0;
      const uid = Cookies.get('uid');

      if (!uid) {
        localStorage.setItem(`resume-${id}`, currentTime.toString());
      } else if (anilistId && currentTime > 0 && duration > 0) {
        axios.put('/api/resume', {
          uid,
          animeId: id,
          anilistId,
          time: currentTime,
          duration,
        });
      }
    }, 30000);
  };

  useEffect(() => {
    return () => {
      if (saveIntervalRef.current) {
        clearInterval(saveIntervalRef.current);
      }
    };
  }, []);

  const sourceCandidates = useMemo(() => {
    if (!sourceData?.sources?.length) {
      return [];
    }

    const candidateUrls = [];

    for (const source of sourceData.sources) {
      const directUrl = source?.url;
      if (!directUrl) continue;

      const internalProxy = `/api/stream/proxy?url=${encodeURIComponent(directUrl)}`;
      const proxy = `https://gogoanime-and-hianime-proxy-mu.vercel.app/m3u8-proxy?url=${encodeURIComponent(directUrl)}`;
      candidateUrls.push(internalProxy, proxy, directUrl);
    }

    return [...new Set(candidateUrls)];
  }, [sourceData]);

  useEffect(() => {
    setActiveSourceIndex(0);
  }, [id, server, category, sourceData]);

  useEffect(() => {
    if (!sourceCandidates.length) {
      return;
    }

    canPlayRef.current = false;

    const timeoutId = setTimeout(() => {
      if (!canPlayRef.current) {
        handleMediaError();
      }
    }, 12000);

    return () => clearTimeout(timeoutId);
  }, [activeSourceIndex, sourceCandidates.length]);

  const handleMediaError = () => {
    if (activeSourceIndex < sourceCandidates.length - 1) {
      setActiveSourceIndex((prev) => prev + 1);
      return;
    }

    setPlayerError('No playable stream source is available for this episode.');
  };

  if (!sourceData) {
    return (
      <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden z-10">
        {bannerImage === undefined ? (
          <div className="w-full h-full bg-black" />
        ) : bannerImage ? (
          <img
            src={bannerImage}
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-800" />
        )}
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          {playerError ? (
            <div className="text-center text-white px-4">
              <p className="text-sm md:text-base">Player source unavailable.</p>
              <p className="text-xs md:text-sm text-gray-300 mt-1">{playerError}</p>
            </div>
          ) : (
            <svg width="48" height="48" viewBox="0 0 24 24">
              <style>
                {`
                  .spinner_nOfF { animation: spinner_qtyZ 2s cubic-bezier(0.36, .6, .31, 1) infinite }
                  .spinner_fVhf { animation-delay: -0.5s }
                  .spinner_piVe { animation-delay: -1s }
                  .spinner_MSNs { animation-delay: -1.5s }
                  @keyframes spinner_qtyZ {
                    0% { r: 0 }
                    25% { r: 3px; cx: 4px }
                    50% { r: 3px; cx: 12px }
                    75% { r: 3px; cx: 20px }
                    100% { r: 0; cx: 20px }
                  }
                `}
              </style>
              <circle className="spinner_nOfF" cx="4" cy="12" r="3" fill="white" />
              <circle className="spinner_nOfF spinner_fVhf" cx="4" cy="12" r="3" fill="white" />
              <circle className="spinner_nOfF spinner_piVe" cx="4" cy="12" r="3" fill="white" />
              <circle className="spinner_nOfF spinner_MSNs" cx="4" cy="12" r="3" fill="white" />
            </svg>
          )}
        </div>
      </div>
    );
  }

  const { tracks = [], intro, outro } = sourceData;
  const activeSourceUrl = sourceCandidates[activeSourceIndex];
  const thumbnailTrack = tracks.find(t => t.lang === 'thumbnails')?.url;
  const subtitleTracks = tracks.filter(t => t.lang !== 'thumbnails');

  if (!activeSourceUrl) {
    return (
      <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden z-10">
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="text-center text-white px-4">
            <p className="text-sm md:text-base">Player source unavailable.</p>
            <p className="text-xs md:text-sm text-gray-300 mt-1">No source URLs were returned for this episode.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden z-10">
      <style jsx global>{`
        ::cue {
          line-height: 1.4;
          font-size: 1.1rem;
          bottom: 20%;
        }
      `}</style>

      <MediaPlayer
        key={activeSourceUrl}
        ref={playerRef}
        title={romajiTitle}
        src={{ src: activeSourceUrl, type: 'application/x-mpegurl' }}
        crossorigin
        playsInline
        autoplay
        currentTime={resumeTime}
        onTimeUpdate={handleTimeUpdate}
        onCanPlay={handlePlayerCanPlay}
        onError={handleMediaError}
        className="text-white"
        fullscreenOrientation="landscape"
      >
        <MediaProvider playsInline disableRemotePlayback disablePictureInPicture />

        {subtitleTracks.map((track, index) => (
          <Track
            key={index}
            src={track.url}
            kind="subtitles"
            label={track.lang.toUpperCase()}
            lang={track.lang}
            default={track.lang === 'en'}
          />
        ))}

        {thumbnailTrack && (
          <Track
            src={thumbnailTrack}
            kind="metadata"
            label="Thumbnails"
          />
        )}

        <SkipButtons
          intro={intro}
          outro={outro}
          currentTime={currentTime}
          onSkipTo={handleSkipTo}
        />

        <DefaultVideoLayout
          thumbnails={thumbnailTrack}
          icons={defaultLayoutIcons}
          style={{ '--media-brand': '#9333ea' }}
        />
      </MediaPlayer>
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  InformationCircleIcon,
  CalendarIcon,
  FilmIcon,
  TvIcon,
  PlayIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Hero() {
  const [randomAnime, setRandomAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [muted, setMuted] = useState(true);
  const [ytReady, setYtReady] = useState(false);
  const [trailerFailed, setTrailerFailed] = useState(false);
  const playerRef = useRef(null);

  const createYouTubePlayer = (videoId, mutedByDefault) => {
    if (typeof window === "undefined" || !window.YT?.Player) return null;

    return new window.YT.Player("yt-player", {
      videoId,
      playerVars: {
        autoplay: 1,
        mute: mutedByDefault ? 1 : 0,
        controls: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        loop: 1,
        playlist: videoId,
      },
      events: {
        onReady: (event) => {
          if (mutedByDefault) {
            event.target.mute();
          } else {
            event.target.unMute();
            event.target.playVideo();
          }
        },
        onError: () => {
          setTrailerFailed(true);
        },
      },
    });
  };

  useEffect(() => {
    async function fetchAnime() {
      try {
        const response = await fetch("/api/consumet/meta/anilist/trending");
        if (!response.ok) throw new Error("Network error.");
        const data = await response.json();

        const withTrailer = (data.results || []).filter((anime) => anime?.trailer?.id);
        const pool = withTrailer.length ? withTrailer : data.results || [];

        if (!pool.length) {
          throw new Error("No anime data available.");
        }

        setRandomAnime(pool[Math.floor(Math.random() * pool.length)]);
      } catch (err) {
        console.error("Error fetching anime:", err);
        setError("Failed to load anime.");
      } finally {
        setLoading(false);
      }
    }

    fetchAnime();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.YT?.Player) {
      setYtReady(true);
      return;
    }

    const scriptId = "youtube-iframe-api";
    if (!document.getElementById(scriptId)) {
      const tag = document.createElement("script");
      tag.id = scriptId;
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    const previousHandler = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof previousHandler === "function") {
        previousHandler();
      }
      setYtReady(true);
    };

    return () => {
      if (window.onYouTubeIframeAPIReady === previousHandler) {
        return;
      }
      window.onYouTubeIframeAPIReady = previousHandler;
    };
  }, []);

  useEffect(() => {
    setTrailerFailed(false);
  }, [randomAnime?.id, randomAnime?.trailer?.id]);

  useEffect(() => {
    if (!ytReady || !randomAnime?.trailer?.id || typeof window === "undefined" || !window.YT?.Player) {
      return;
    }

    if (trailerFailed) {
      if (playerRef.current && typeof playerRef.current.destroy === "function") {
        playerRef.current.destroy();
      }
      playerRef.current = null;
      return;
    }

    if (!playerRef.current) {
      playerRef.current = createYouTubePlayer(randomAnime.trailer.id, muted);
      return;
    }

    if (typeof playerRef.current.loadVideoById !== "function") {
      if (typeof playerRef.current.destroy === "function") {
        playerRef.current.destroy();
      }
      playerRef.current = createYouTubePlayer(randomAnime.trailer.id, muted);
      return;
    }

    playerRef.current.loadVideoById(randomAnime.trailer.id);
    if (muted) {
      playerRef.current.mute();
    } else {
      playerRef.current.unMute();
      playerRef.current.playVideo();
    }
  }, [ytReady, randomAnime, muted, trailerFailed]);

  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  const handleToggle = () => {
    setMuted((prev) => {
      const newMuted = !prev;
      if (playerRef.current) {
        if (newMuted) {
          playerRef.current.mute();
        } else {
          playerRef.current.unMute();
          playerRef.current.playVideo();
        }
      }
      return newMuted;
    });
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {loading ? (
        <div className="relative w-full h-full bg-gray-900 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-transparent h-full w-2/5" />
          <div className="absolute top-0 left-0 w-full h-1/6 bg-gradient-to-b from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-5 left-5 w-3/4 space-y-4 z-10">
            <div className="h-8 w-2/3 bg-gray-700 rounded" />
            <div className="h-6 w-1/3 bg-gray-700 rounded" />
            <div className="h-4 w-1/2 bg-gray-600 rounded" />
            <div className="h-8 w-32 bg-gray-800 rounded-full" />
          </div>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center h-full text-red-500">
          {error}
        </div>
      ) : (
        randomAnime && (
          <div className="relative w-full h-full">
            {randomAnime.trailer?.id && randomAnime.trailer?.site?.toLowerCase() === "youtube" && !trailerFailed ? (
              <div className="absolute inset-0 w-full h-[115%]">
                <div id="yt-player" className="w-full h-full" />
              </div>
            ) : (
              <Image
                src={randomAnime.image}
                alt={randomAnime.title.userPreferred}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-700 ease-in-out"
                unoptimized
              />
            )}

            {/* Gradient overlays */}
            <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute top-0 left-0 w-full h-1/6 bg-gradient-to-b from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/90 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black/40 to-transparent" />

            {/* Info Overlay */}
            <div className="absolute bottom-5 left-5 text-white z-20 max-w-lg space-y-3">
              <h1 className="text-lg md:text-xl font-bold whitespace-normal break-words">
                {randomAnime.title.userPreferred}
              </h1>

              <div className="flex items-center space-x-3 text-sm md:text-base">
                <span className="flex items-center space-x-1">
                  {randomAnime.type === "TV" ? (
                    <TvIcon className="h-5 w-5" />
                  ) : (
                    <FilmIcon className="h-5 w-5" />
                  )}
                  <span className="font-semibold">{randomAnime.type.toUpperCase()}</span>
                </span>
                <span className="font-semibold">{randomAnime.status.toUpperCase()}</span>
                {randomAnime.totalEpisodes && (
                  <span className="flex items-center space-x-1">
                    <PlayIcon className="h-5 w-5" />
                    <span>{randomAnime.totalEpisodes} Episodes</span>
                  </span>
                )}
              </div>

              <p className="hidden md:block text-sm line-clamp-3 text-gray-300">
                {randomAnime.description
                  .replace(/<br\s*\/?>/g, "")
                  .split(" ")
                  .slice(0, 10)
                  .join(" ")}
                ...
              </p>

              <div className="mt-2 flex items-center space-x-2 text-xs text-gray-400">
                <CalendarIcon className="h-4 w-4" />
                <span>{randomAnime.releaseDate}</span>
              </div>

              <div className="mt-3 flex items-center space-x-3">
                <Link
                  href={`/anime/${randomAnime.id}`}
                  className="rounded-full bg-purple-700 px-4 py-2 flex items-center gap-2 hover:bg-purple-600 transition text-sm"
                >
                  <InformationCircleIcon className="h-5 w-5" />
                  More Info
                </Link>

               <button
  onClick={handleToggle}
  className="rounded-full bg-transparent text-white p-2 hover:scale-110 transition border border-white"
>
  {muted ? (
    <SpeakerXMarkIcon className="h-5 w-5" />
  ) : (
    <SpeakerWaveIcon className="h-5 w-5" />
  )}
</button>

              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

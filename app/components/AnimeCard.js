import Link from "next/link";
import { FaCalendar, FaBook, FaStar, FaPlay } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Status from "./ui/status";

function AnimeCard({ data }) {
  if (!data || !data.id) {
    return null; // Prevent rendering if data is missing
  }

  return (
    <Link href={`/anime/${data.id}`} className="block h-full">
      <article className="group h-full rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden transition-all duration-300 hover:border-purple-500/60 hover:bg-zinc-900/80 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
        <div className="overflow-hidden relative aspect-[5/7]">
          <div className="absolute inset-0">
            <div className="transition-all transform duration-300 group-hover:scale-105 group-hover:brightness-75">
              <LazyLoadImage
                effect="blur"
                className="w-full h-full aspect-[5/7] object-cover"
                src={data.image || "/placeholder.jpg"}
                alt="Anime Cover"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="w-12 h-12 rounded-full bg-black/65 border border-white/25 flex items-center justify-center">
              <FaPlay className="text-xl text-white" />
            </span>
          </div>
        </div>

        <div className="p-3">
          <div className="rounded-md flex items-center gap-2">
            <Status status={data.status || "Unknown"} />
            <p
              title={data?.title?.english || data?.title?.romaji || "Unknown"}
              className="font-semibold line-clamp-1 text-sm text-zinc-100"
            >
              {data?.title?.english || data?.title?.romaji || "Unknown"}
            </p>
          </div>
          <div className="text-xs flex flex-wrap gap-2 mt-2.5 select-none">
            {data.releaseDate && (
              <p title={`Released: ${data.releaseDate}`} className="text-zinc-300 flex items-center gap-1.5 px-2 py-1 rounded-md bg-zinc-800/90">
                <FaCalendar className="text-[11px]" />
                <span className="ml-1">{data.releaseDate}</span>
              </p>
            )}
            {data.totalEpisodes && data.totalEpisodes !== 1 && (
              <p title={`Episodes: ${data.totalEpisodes}`} className="text-zinc-300 flex items-center gap-1.5 px-2 py-1 rounded-md bg-zinc-800/90">
                <FaBook className="text-[11px]" />
                <span className="ml-1">{data.totalEpisodes}</span>
              </p>
            )}
            {data.rating && (
              <p title={`Rating: ${data.rating}`} className="text-zinc-300 flex items-center gap-1.5 px-2 py-1 rounded-md bg-zinc-800/90">
                <FaStar className="text-[11px] text-yellow-400" />
                <span className="ml-1">{data.rating}</span>
              </p>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}

export default AnimeCard;
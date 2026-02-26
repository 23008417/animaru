import { FaCalendar, FaBook, FaStar } from "react-icons/fa";

function AnimeCardSkeleton() {
  return (
    <div className="w-full h-full rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
      <div className="relative aspect-[5/7] bg-zinc-800 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-zinc-700 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="p-3">
        <div className="rounded-md flex items-center space-x-2 animate-pulse">
          <div className="w-3 h-3 bg-zinc-700 rounded-full"></div>
          <div className="w-36 h-4 bg-zinc-700 rounded"></div>
        </div>
        <div className="text-xs flex flex-wrap gap-2 mt-2.5 select-none">
          <p className="text-zinc-300 flex items-center gap-1.5 px-2 py-1 rounded-md bg-zinc-800/90">
            <FaCalendar />
            <span className="bg-zinc-700 w-12 h-3 rounded animate-pulse"></span>
          </p>
          <p className="text-zinc-300 flex items-center gap-1.5 px-2 py-1 rounded-md bg-zinc-800/90">
            <FaBook />
            <span className="bg-zinc-700 w-12 h-3 rounded animate-pulse"></span>
          </p>
          <p className="text-zinc-300 flex items-center gap-1.5 px-2 py-1 rounded-md bg-zinc-800/90">
            <FaStar />
            <span className="bg-zinc-700 w-12 h-3 rounded animate-pulse"></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AnimeCardSkeleton;
function SongLoading() {
    return (
      <div className="shadow rounded-md p-4 w-full mx-auto">
        {/* Table Header Skeleton */}
        <div className="animate-pulse flex flex-col space-y-4">
          <div className="flex justify-between text-left px-4">
            <div className="w-8 h-4 bg-slate-700 rounded"></div> {/* # */}
            <div className="w-32 h-4 bg-slate-700 rounded"></div> {/* Title */}
            <div className="w-40 h-4 bg-slate-700 rounded"></div> {/* Artist(s) */}
            <div className="w-32 h-4 bg-slate-700 rounded"></div> {/* Release Date */}
          </div>
  
          {/* Skeleton Rows */}
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-4 py-2"
            >
              <div className="w-6 h-4 bg-slate-700 rounded"></div> {/* Row Number */}
              <div className="w-32 h-4 bg-slate-700 rounded"></div> {/* Title */}
              <div className="w-40 h-4 bg-slate-700 rounded"></div> {/* Artist(s) */}
              <div className="w-32 h-4 bg-slate-700 rounded"></div> {/* Release Date */}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default SongLoading;
  
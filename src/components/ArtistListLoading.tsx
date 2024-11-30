function ArtistLoading() {
    return (
      <div className="shadow rounded-md p-4 w-full mx-auto">
        {/* Skeleton Header */}
        <div className="animate-pulse flex flex-col space-y-4">
          <div className="text-center">
            <div className="w-48 h-6 bg-slate-700 rounded mx-auto"></div> {/* Header */}
          </div>
  
          {/* Skeleton Artist Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="w-32 h-12 bg-slate-700 rounded-full"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default ArtistLoading;
  
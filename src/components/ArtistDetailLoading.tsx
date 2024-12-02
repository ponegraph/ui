const ArtistDetailLoading: React.FC = () => {
    return (
      <div className="bg-black text-white min-h-screen">
        {/* Header Skeleton */}
        <div className="pt-4 pb-8 px-8 bg-gradient-to-b from-green-950 to-green-800 animate-pulse">
          <div className="mb-2">
            <div className="w-32 h-8 bg-slate-700 rounded"></div> {/* Back Button */}
          </div>
          <div className="h-6 w-20 bg-slate-700 rounded mb-2"></div> {/* Artist Header */}
          <div className="h-12 w-64 bg-slate-700 rounded"></div> {/* Artist Name */}
        </div>
  
        <div className="px-8 py-4 animate-pulse">
          <div className="flex gap-8 p-4">
            {/* Left Section Skeleton */}
            <div className="w-full">
              {/* About Section */}
              <div className="mb-8">
                <div className="w-32 h-6 bg-slate-700 rounded mb-4"></div> {/* "About" Header */}
                <div className="h-4 w-full bg-slate-700 rounded mb-2"></div>
                <div className="h-4 w-3/4 bg-slate-700 rounded mb-2"></div>
                <div className="h-4 w-2/4 bg-slate-700 rounded"></div>
              </div>
  
              {/* Songs Section */}
              <div>
                <div className="w-32 h-6 bg-slate-700 rounded mb-4"></div> {/* "Songs" Header */}
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="w-full h-6 bg-slate-700 rounded mb-2"
                  ></div>
                ))}
              </div>
            </div>
  
            {/* Right Section Skeleton */}
            <div className="w-1/5">
              {/* Image Placeholder */}
              <div className="mb-4 w-full h-48 bg-slate-700 rounded-lg"></div>
  
              {/* Details Placeholder */}
              <div className="mb-4">
                <div className="h-4 w-32 bg-slate-700 rounded mb-2"></div> {/* Country */}
                <div className="h-4 w-48 bg-slate-700 rounded mb-2"></div> {/* Last.FM Listeners */}
                <div className="h-4 w-48 bg-slate-700 rounded mb-2"></div> {/* Last.FM Scrobbles */}
              </div>
  
              {/* Tags Section */}
              <div>
                <div className="w-20 h-4 bg-slate-700 rounded mb-2"></div> {/* Tags Header */}
                <div className="flex flex-wrap gap-2">
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className="w-16 h-6 bg-slate-700 rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ArtistDetailLoading;
  
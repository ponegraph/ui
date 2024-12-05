const SongDetailsLoading: React.FC = () => {
  return (
    <div className="min-h-screen text-white bg-black">
      {/* Header Section */}
      <div className="p-6 bg-gradient-to-b from-green-950 to-green-800">
        <div className="mb-6">
          <div className="w-10 h-10 bg-gray-700 rounded-full animate-pulse"></div>
        </div>
        <div className="flex flex-col md:flex-row">
          {/* Left Section: Skeleton for Song Title and Artists */}
          <div className="w-3/4">
            <div className="h-8 mb-4 bg-gray-700 rounded animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-6 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-6 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-6 bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Right Section: Skeleton for Streaming Stats */}
          <div className="flex flex-col mt-4 text-left md:mt-0">
            <div className="h-6 mb-2 bg-gray-700 rounded animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-6 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-6 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-6 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-6 bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 gap-16 px-6 py-10 md:grid-cols-2">
        {/* Left Column: Skeleton for Stats Bars */}
        <div>
          <div className="h-8 mb-4 bg-gray-700 rounded animate-pulse"></div>
          <div className="space-y-4">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm">
                    <div className="w-20 h-4 bg-gray-700 rounded animate-pulse"></div>
                    <div className="w-12 h-4 bg-gray-700 rounded animate-pulse"></div>
                  </div>
                  <div className="w-full h-3 mt-2 bg-gray-700 rounded-full animate-pulse"></div>
                </div>
              ))}
          </div>
        </div>

        {/* Right Column: Skeleton for Chart Stats */}
        <div>
          <div className="h-8 mb-4 bg-gray-700 rounded animate-pulse"></div>
          <div className="space-y-4">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="flex justify-between">
                  <div className="w-20 h-4 bg-gray-700 rounded animate-pulse"></div>
                  <div className="w-12 h-4 bg-gray-700 rounded animate-pulse"></div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Recommended Songs Section */}
      <div className="px-6">
        <div className="h-8 mb-4 bg-gray-700 rounded animate-pulse"></div>
        <div className="space-y-4">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded animate-pulse"
              >
                <div className="w-1/12 h-6 bg-gray-700 rounded"></div>
                <div className="w-4/12 h-6 bg-gray-700 rounded"></div>
                <div className="w-4/12 h-6 bg-gray-700 rounded"></div>
                <div className="w-3/12 h-6 bg-gray-700 rounded"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SongDetailsLoading;

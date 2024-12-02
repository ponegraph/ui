function ArtistListLoading() {
  return (
    <div className="shadow rounded-md p-4 w-full mx-auto">
      {/* Skeleton Artist Buttons */}
      <div className="flex flex-wrap justify-center gap-6">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="w-40 h-16 bg-slate-700 rounded-full"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ArtistListLoading;

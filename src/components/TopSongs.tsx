import React from "react";
import { useTopSongs } from "../hooks/useTopSongs";
import PulseLoading from "./PulseLoading";
import { SongTable } from "./SongTable";

const TopSongs: React.FC = () => {
  const { data, loading, error } = useTopSongs();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No top songs data available.</p>;

  const { songs } = data.data;

  return (
    <div className="p-8 bg-black text-white min-h-screen">
      <h1 className="text-5xl font-bold mb-8">Top Spotify Songs</h1>
      {loading ? (
        <div className="flex flex-col">
          {Array.from({ length: 3 }).map((_, index) => (
            <PulseLoading key={index} />
          ))}
        </div>
      ) : (
        <SongTable songs={songs} />
      )}
    </div>
  );
};

export default TopSongs;

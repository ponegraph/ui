import React from "react";
import { useTopSongs } from "../hooks/useTopSongs";
import { SongTable } from "./SongTable";
import SongListLoading from "./SongListLoading";

const TopSongs: React.FC = () => {
  const { data, loading, error } = useTopSongs();

  if (loading) {
    return <div className="flex flex-col">
              <h1 className="text-4xl text-center font-bold mb-10">Top Spotify Songs</h1>
              <SongListLoading />
          </div>
  };
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No top songs data available.</p>;

  const { songs } = data.data;

  return (
    <div className="p-8 bg-black text-white min-h-screen">
      <h1 className="text-4xl text-center font-bold mb-10">Top Spotify Songs</h1>
      <SongTable songs={songs} />
    </div>
  );
};

export default TopSongs;

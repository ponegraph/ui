import React, { useState } from "react";
import useTopSongs from "../hooks/useTopSongs";
import SearchBar from "./SearchBar";
import SongTable from "./SongTable";

const TopSongs: React.FC = () => {
  const { songs, loading } = useTopSongs();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-8 bg-black text-white min-h-screen">
      <h1 className="text-5xl font-bold mb-8">Top Spotify Songs</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading ? (
        <p className="text-center text-gray-400">Loading songs...</p>
      ) : (
        <SongTable songs={filteredSongs} />
      )}
    </div>
  );
};

export default TopSongs;

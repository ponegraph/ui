import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import TopSongs from "../components/TopSongs";


const SongListPage : React.FC  = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/songs/search?query=${encodeURIComponent(searchTerm)}`); // Navigasi ke halaman pencarian
    }
  };
  
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="flex flex-col justify-self-center">
        <h1 className="font-bold text-center">Song List</h1>
        <div className="flex justify-center">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />
        </div>
        <TopSongs/>
        <h1>
          Kemungkinan Top Song List bakal diapus, jadi bakalan nampilin semua list song aja yang diurutin berdasarkan popularitas
        </h1>
      </div>
    </div>
  );
};
  

export default SongListPage;
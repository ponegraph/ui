import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import TopSongs from "../components/TopSongs";


const SongListPage : React.FC  = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="flex flex-col justify-items-center  justify-self-center">
        <h1 className="font-bold text-center">Song List</h1>
        <div className="flex justify-center">
          <SearchBar placeholder="Enter Song Name here"  searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";


const ArtistListPage : React.FC  = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="flex flex-col justify-items-center  justify-self-center">
        <h1 className="font-bold text-center">Artist List</h1>
        <SearchBar placeholder="Enter Artist Name or Tag here" searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </div>
  );
};
  

export default ArtistListPage;
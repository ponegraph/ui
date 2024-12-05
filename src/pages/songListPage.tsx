import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import {useSongSearch} from "../hooks/useSongSearch"
import { SongTable } from "../components/SongTable";
import SongListLoading from "../components/SongListLoading";
import BackButton from "../components/BackButton";


const SongListPage : React.FC  = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const queryParam = searchParams.get("query");
    setSearchTerm(queryParam || "");
  }, [searchParams]);

  const { data, loading, error } = useSongSearch(searchParams.get("query") || "");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/songs/search?query=${encodeURIComponent(searchTerm)}`); // Navigasi ke halaman pencarian
    }
  };

  if (loading) {
    return <div className="bg-black text-white min-h-screen">
              <div className="flex flex-col items-center w-full p-4">
                <h1 className="font-bold text-center">Song List</h1>
                  <div className="flex p-4 w-1/3 justify-self-center mb-4">
                    <BackButton to={"/artists"} />
                    <SearchBar
                      searchTerm={searchTerm}
                      setSearchTerm={setSearchTerm}
                      onSearch={handleSearch}
                    />
                  </div>
              </div>
              <SongListLoading />
            </div>
  };
  const { songs } = data?.data || {};

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="flex flex-col items-center w-full p-4">
      <h1 className="font-bold text-center">Song List</h1>
        <div className="flex p-4 w-1/3 justify-self-center mb-4">
          <BackButton to={"/songs"} />
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={handleSearch}
          />
        </div>
        
        {songs && !error ? (
          <SongTable songs={songs} />
        ) : (
          <div className="flex justify-center items-center w-full h-full mt-5">
            <p className="text-center text-md font-semibold">No results found.</p>
          </div>
        )}
      </div>
    </div>
  );
};
  

export default SongListPage;
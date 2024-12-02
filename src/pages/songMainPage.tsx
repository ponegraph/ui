import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const SongMainPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(""); 
  const navigate = useNavigate(); 

  const handleSearch = () => {
    if (searchTerm.trim()) {
        navigate(`/songs/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleReturnHome = () => {
    navigate("/"); // Navigasi ke halaman utama (Home)
  };

  return (
    <div className="flex flex-col justify-center bg-black text-white min-h-screen">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-4xl font-bold mb-4">Find Your Favorite Songs</h1>
        <p className="text-gray-400 text-center max-w-md">
          Search your favorite songs title.
        </p>
      </div>

      <div className="flex justify-center">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
        />
      </div>

      {/* Tombol "Return to Home" di bagian bawah */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handleReturnHome}
          className="w-16 h-16  flex items-center justify-center p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition duration-300"
        >
            <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
                className="w-8 h-8 text-white"
            >
                <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
            </svg>
        </button>
      </div>
    </div>
  );
};

export default SongMainPage;

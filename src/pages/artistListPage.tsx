import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ArtistUnit from "../components/ArtistUnit";
import BackButton from "../components/BackButton";
import SearchBar from "../components/SearchBar";
import { useArtistSearch } from "../hooks/useArtistSearch";
import ArtistListLoading from "../components/ArtistListLoading";

const ArtistListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const queryParam = searchParams.get("query");
    setSearchTerm(queryParam || "");
  }, [searchParams]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/artists/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  const { data, loading, error } = useArtistSearch(searchParams.get("query") || "");

  if (loading) {
    return <div className="bg-black text-white min-h-screen w-full">
              <div className="flex flex-col items-center w-full p-4">
                <div className="flex p-4 w-1/3 justify-self-center mb-4">
                    <BackButton to={"/artists"} />
                    <SearchBar
                      searchTerm={searchTerm}
                      setSearchTerm={setSearchTerm}
                      onSearch={handleSearch}
                    />  
                </div>
                <ArtistListLoading />
              </div>

            </div>
  };
  const { artists } = data?.data || {};


  return (
    <div className="bg-black text-white min-h-screen w-full">
      <div className="flex flex-col items-center w-full p-4">
        <div className="flex p-4 w-1/3 justify-self-center mb-4">
          <BackButton to={"/artists"} />
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={handleSearch}
          />
        </div>

        {artists && artists.length > 0 && !error ? (
          <div className="flex justify-center gap-8 w-full px-8 flex-wrap">
          {artists.map((artist, index) => (
            <ArtistUnit key={index} artistName={artist.artistName} artistId={artist.artistId} />
          ))}
        </div>
        ) : (
          <p>No results found.</p>
        )}

      </div>
    </div>
  );
};

export default ArtistListPage;

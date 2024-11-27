import React from "react";
import { useTopArtists } from "../hooks/useTopArtists";
import ArtistUnit from "./ArtistUnit";

const TopArtists: React.FC = () => {
  const { data, loading, error } = useTopArtists();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No top artists data available.</p>;

  const { artists } = data.data;

  return (
    <div className="p-8 bg-black text-white min-h-screen">
      <h1 className="text-4xl text-center font-bold mb-10">Top Popular Artists</h1>
      <div className="flex justify-center gap-8 w-full flex-wrap">
        {artists.map((artist, index) => (
          <ArtistUnit key={index} artistName={artist.artistName} artistId={artist.artistId} />
        ))}
      </div>

    </div>
  );
};

export default TopArtists;

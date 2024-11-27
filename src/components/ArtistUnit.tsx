import React from "react";
import { Link } from "react-router-dom";

interface ArtistUnitProps {
  artistName: string;
  artistId: string;
}

const ArtistUnit: React.FC<ArtistUnitProps> = ({ artistName, artistId }) => {
  return (
    <Link
      to={`/artists/id/${artistId}`} // Use Link component to navigate
      className="text-center p-6 px-8 border-2 border-gray-800 rounded-full hover:bg-gray-800 transition duration-300"
    >
      <h3 className="text-xl font-semibold">{artistName}</h3>
    </Link>
  );
};

export default ArtistUnit;

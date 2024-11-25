import React from "react";
import { Link } from "react-router-dom";
import { SongUnit } from "../types/songTypes";
import parseIsoDate from "../utils/dateFormatter";

type Song = {
  id: number;
  title: string;
  artists: string;
  releaseDate: string;
};

interface SongTableProps {
  songs: Song[];
}

const SongTable: React.FC<SongTableProps> = ({ songs }) => {
  return (
    <table className="w-full text-left text-gray-400">
      <thead>
        <tr className="border-b border-gray-700">
          <th className="py-2 px-4 w-1/12">#</th>
          <th className="py-2 px-4 w-4/12">Title</th>
          <th className="py-2 px-4 w-4/12">Artist(s)</th>
          <th className="py-2 px-4 w-3/12">Release Date</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => (
          <tr key={song.id} className="hover:bg-gray-800">
            <td className="py-2 px-4">{song.id}</td>
            <td className="py-2 px-4">{song.title}</td>
            <td className="py-2 px-4">
              <Link
                to={`/artists/id/${"artistId"}`}
                className="text-blue-500 hover:underline"
              >
              {song.artists}
              </Link>
            </td>
            <td className="py-2 px-4">{song.releaseDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


interface ArtistSongTableProps {
  songs: SongUnit[];
}

const ArtistSongTable: React.FC<ArtistSongTableProps> = ({ songs }) => {
  return (
    <table className="w-full text-left text-gray-400 ">
      <thead>
        <tr className="border-b border-gray-700">
          <th className="py-2  w-1/12">#</th>
          <th className="py-2  w-4/12">Title</th>
          <th className="py-2  w-3/12">Release Date</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => (
          <tr key={song.songId} className="hover:bg-gray-800">
            <td className="py-2 ">{song.songId}</td>
            <td className="py-2 ">{song.songName}</td>
            <td className="py-2 ">{parseIsoDate(song.releaseDate)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { ArtistSongTable, SongTable };


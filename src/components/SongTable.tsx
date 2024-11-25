import React from "react";
import { Link } from "react-router-dom";
import { SongListItem, SongUnit } from "../types/songTypes";
import parseIsoDate from "../utils/dateFormatter";


interface SongTableProps {
  songs: SongListItem[];
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
        {songs.map((song, index) => (
          <tr key={index} className="hover:bg-gray-800">
            <td className="py-2 px-4">{index}</td>
            <td className="py-2 px-4">
              <Link
                  to={`/songs/id/${song.songId}`}
                  className="text-blue-500 hover:underline"
              >
              {song.songName}
              </Link>
            </td>
            <td className="py-2 px-4">
              {song.artists.map((artist, artistIndex) => (
                <span key={artist.artistId}>
                  <Link
                    to={`/artists/id/${artist.artistId}`}
                    className="text-blue-500 hover:underline"
                  >
                    {artist.artistName}
                  </Link>
                  {/* Menambahkan koma sebagai pemisah jika bukan artis terakhir */}
                  {artistIndex < song.artists.length - 1 && ", "}
                </span>
              ))}
            </td>
            <td className="py-2 ">{parseIsoDate(song.releaseDate)}</td>
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
      {songs.map((song, index) => (
          <tr key={index} className="hover:bg-gray-800">
            <td className="py-2 px-4">{index}</td>
            <td className="py-2 px-4">{song.songName}</td>
            <td className="py-2 ">{parseIsoDate(song.releaseDate)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { ArtistSongTable, SongTable };


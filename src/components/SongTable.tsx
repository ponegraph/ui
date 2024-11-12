import React from "react";

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
          <th className="py-2 px-4">#</th>
          <th className="py-2 px-4">Title</th>
          <th className="py-2 px-4">Artist(s)</th>
          <th className="py-2 px-4">Release Date</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => (
          <tr key={song.id} className="hover:bg-gray-800">
            <td className="py-2 px-4">{song.id}</td>
            <td className="py-2 px-4">{song.title}</td>
            <td className="py-2 px-4">{song.artists}</td>
            <td className="py-2 px-4">{song.releaseDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SongTable;

import { SongListItem } from "../types/songTypes";

type RecommendedSongsTableProps = {
  recommendedSongs: SongListItem[];
};

const RecommendedSongsTable: React.FC<RecommendedSongsTableProps> = ({
  recommendedSongs,
}) => {
  return (
    <table className="w-full text-sm border border-collapse border-gray-300 table-auto">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-left border border-gray-300">#</th>
          <th className="px-4 py-2 text-left border border-gray-300">Title</th>
          <th className="px-4 py-2 text-left border border-gray-300">
            Artist(s)
          </th>
          <th className="px-4 py-2 text-left border border-gray-300">
            Release Date
          </th>
        </tr>
      </thead>
      <tbody>
        {recommendedSongs.map((song, index) => (
          <tr key={song.songId} className="hover:bg-gray-50">
            <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
            <td className="px-4 py-2 border border-gray-300">
              {song.songName}
            </td>
            <td className="px-4 py-2 border border-gray-300">
              {song.artists.map((artist) => artist.artistName).join(", ")}
            </td>
            <td className="px-4 py-2 border border-gray-300">
              {new Date(song.releaseDate).toLocaleDateString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecommendedSongsTable;

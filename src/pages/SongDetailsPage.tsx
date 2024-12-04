import { useParams } from "react-router-dom";
import { SongDetailsResponse } from "../types/songDetailTypes";
import SongStatsBar from "../components/SongStatsBar";
import { useFetch } from "../hooks/useFetch";
import { SongTable } from "../components/SongTable";

const SongDetailsPage: React.FC = () => {
  const { songId } = useParams<{ songId: string }>();

  console.log(songId);
  const { data, loading, error } = useFetch<SongDetailsResponse>(
    `${import.meta.env.VITE_API_BASE_URL}/songs/id/${songId}`
  );

  if (loading) return <div className="mt-10 text-center">Loading...</div>;
  if (error) return <div className="mt-10 text-center">Error: {error}</div>;
  const { song, artists, recommendedSongs } = data!.data;

  console.log(recommendedSongs);
  return (
    <div className="min-h-screen text-white bg-black">
      {/* Song Header */}
      <div className="p-6 text-white bg-gradient-to-b from-green-950 to-green-800">
        {/* Back Button */}
        <div className="mb-6">
          <a href="/" className="text-sm text-white underline hover:underline">
            &lt; Back to Songs
          </a>
        </div>
        <h1 className="text-3xl font-bold">{song.songName}</h1>
        <p className="mt-2 text-sm">
          {artists.map((artist) => artist.artistName).join(", ")} •{" "}
          {new Date(song.releaseDate).toLocaleDateString()} • {song.key} •{" "}
          {song.bpm} BPM
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 gap-16 px-6 py-10 md:grid-cols-2">
        {/* Left Column: Stats Bars */}
        <div className="">
          <h2 className="mb-4 text-lg font-semibold">Song Stats</h2>
          <SongStatsBar label="Danceability" value={song.danceability} />
          <SongStatsBar label="Energy" value={song.energy} />
          <SongStatsBar label="Valence" value={song.valence} />
          <SongStatsBar label="Acousticness" value={song.acousticness} />
          <SongStatsBar
            label="Instrumentalness"
            value={song.instrumentalness}
          />
          <SongStatsBar label="Liveness" value={song.liveness} />
          <SongStatsBar label="Speechiness" value={song.speechiness} />
        </div>

        {/* Right Column: Chart Stats */}
        <div className="">
          <h2 className="mb-4 text-lg font-semibold">Chart Stats</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Spotify</span>
              <span>
                #{song.spotifyChart} in {song.spotifyPlaylistCount} playlists
              </span>
            </div>
            <div className="flex justify-between">
              <span>Apple Music</span>
              <span>
                #{song.appleChart} in {song.applePlaylistCount} playlists
              </span>
            </div>
            <div className="flex justify-between">
              <span>Deezer</span>
              <span>
                #{song.deezerChart} in {song.deezerPlaylistCount} playlists
              </span>
            </div>
            <div className="flex justify-between">
              <span>Shazam</span>
              <span>#{song.shazamChart}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Songs */}
      <div className="px-6 py-12">
        <SongTable songs={recommendedSongs} />
      </div>
    </div>
  );
};

export default SongDetailsPage;

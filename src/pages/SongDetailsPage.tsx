import { Link, useParams } from "react-router-dom";
import { SongDetailsResponse } from "../types/songDetailTypes";
import SongStatsBar from "../components/SongStatsBar";
import { useFetch } from "../hooks/useFetch";
import { SongTable } from "../components/SongTable";
import BackButton from "../components/BackButton";
import SongDetailsLoading from "../components/SongDetailsLoading";

const SongDetailsPage: React.FC = () => {
  const { songId } = useParams<{ songId: string }>();

  console.log(songId);
  const { data, loading, error } = useFetch<SongDetailsResponse>(
    `${import.meta.env.VITE_API_BASE_URL}/songs/id/${songId}`
  );

  if (loading) return <SongDetailsLoading />;
  if (error) return <div className="mt-10 text-center">Error: {error}</div>;
  const { song, artists, recommendedSongs } = data!.data;
  console.log(data);

  return (
    <div className="min-h-screen text-white bg-black">
      <div className="p-6 text-white bg-gradient-to-b from-green-950 to-green-800">
        <div className="mb-6">
          <BackButton />
        </div>
        <div className="flex flex-col md:flex-row">
          {/* Left Section: Song Title and Artists */}
          <div className="w-3/4">
            <h1 className="text-4xl font-bold">{song.songName}</h1>
            <div className="mt-2 space-y-1 text-lg">
              <div className="flex flex-wrap items-center">
                {artists.map((artist, index) => (
                  <span key={index} className="mr-2">
                    {artist.artistId && artist.mbUrl ? (
                      <Link
                        to={`/artists/id/${artist.artistId}`}
                        className="text-2xl font-semibold underline"
                      >
                        {artist.artistName}
                      </Link>
                    ) : (
                      <span className="text-2xl font-semibold">
                        {artist.artistName}
                      </span>
                    )}
                    {index < artists.length - 1 && <span>,</span>}
                  </span>
                ))}
              </div>
              <div className="mb-2">
                <span className="text-gray-100">Release Date:</span>{" "}
                <span className="font-medium text-white">
                  {new Date(song.releaseDate).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="text-gray-200">
                <span>Key: </span>
                <span className="font-medium text-white">{song.key}</span>
              </div>
              <div className="text-gray-200">
                <span>BPM: </span>
                <span className="font-medium text-white">{song.bpm}</span>
              </div>
            </div>
          </div>

          {/* Right Section: Streaming Stats */}
          <div className="flex flex-col mt-4 text-left md:mt-0">
            <h2 className="mb-2 text-xl font-semibold">
              Streaming and Playlist Stats
            </h2>
            <div className="space-y-1 text-lg">
              <div className="flex items-center space-x-2">
                <span className="text-gray-100">Spotify Streams:</span>
                <span className="font-medium text-white">
                  {song.spotifyStream.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-100">Spotify Playlists:</span>
                <span className="font-medium text-white">
                  {song.spotifyPlaylistCount.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-100">Apple Playlists:</span>
                <span className="font-medium text-white">
                  {song.applePlaylistCount.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-100">Deezer Playlists:</span>
                <span className="font-medium text-white">
                  {song.deezerPlaylistCount.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 gap-16 px-6 py-10 md:grid-cols-2">
        {/* Left Column: Stats Bars */}
        <div className="font-semibold">
          <h2 className="mb-4 text-2xl font-semibold">Song Stats</h2>
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
          <h2 className="mb-12 text-xl font-semibold">Chart Stats</h2>
          <div className="space-y-4 text-lg font-semibold">
            <div className="flex justify-between">
              <span>Spotify</span>
              <span>#{song.spotifyChart}</span>
            </div>
            <div className="flex justify-between">
              <span>Apple Music</span>
              <span>#{song.appleChart}</span>
            </div>
            <div className="flex justify-between">
              <span>Deezer</span>
              <span>#{song.deezerChart}</span>
            </div>
            <div className="flex justify-between">
              <span>Shazam</span>
              <span>#{song.shazamChart}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Songs */}
      <h2 className="px-6 py-4 text-2xl font-semibold">Recommended Songs</h2>
      <div className="px-6 pb-12">
        <SongTable songs={recommendedSongs} />
      </div>
    </div>
  );
};

export default SongDetailsPage;

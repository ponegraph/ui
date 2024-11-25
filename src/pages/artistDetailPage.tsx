import React from "react";
import { Link, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { ArtistSongTable } from "../components/SongTable";
import { useArtistDetail } from "../hooks/useArtistDetail";


const ArtistDetailPage : React.FC  = () => {

    let { artistId } = useParams<{ artistId: string | undefined }>();

    if (!artistId) {
        return <p>Error: Artist ID is required.</p>;
    }

    const { data, loading, error } = useArtistDetail(artistId);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data) return <p>No artist data available.</p>;
  
    const { artist, songs } = data.data;
  
    return (
      <div className="bg-black text-white min-h-screen">
        <div className="pt-4 pb-8 px-8 bg-gradient-to-b from-green-950 to-green-800 ">
          <div className="mb-2">
            <BackButton/>
          </div>
          <h1 className="font-bold">Artist</h1>
          <h1 className="text-6xl font-bold mb-4 inline-block hover:text-blue-400">
            <a href={artist.additionalInfo.externalReference || artist.mbUrl} target="_blank" rel="noopener noreferrer">
              {artist.artistName}
            </a>
          </h1>
        </div>
        
        <div className="px-8 py-4">

          <div className="flex gap-8 p-4">

            <div className="w-full">
              {artist.additionalInfo.description && (
                <div>
                  <h2 className="font-bold text-3xl mb-4">About</h2>
                  <p>{artist.additionalInfo.description}</p>
                </div>
              )}

              <h2 className="font-bold text-3xl my-4">Songs</h2>
              <div className="mb-4">
                {songs.length > 0 && <ArtistSongTable songs={songs} />}
              </div>
            </div>
            
            <div className="w-1/5">
              {artist.additionalInfo.imageUrl && (
                <div className="mb-4 w-full">
                  <img
                    className="object-contain w-full h-full rounded-lg"
                    src={artist.additionalInfo.imageUrl}
                    alt={`${artist.artistName} image`}
                  />
                </div>
              )}

              {artist.countryName && (
                  <p><strong>Country:</strong> {artist.countryName}</p>
              )}

              {artist.totalLastfmListeners && (
                <p>
                  <strong> 
                    <a className="hover:text-blue-400" href="https://www.last.fm/" target="_blank" rel="noopener noreferrer"> Last.FM</a> Listeners: 
                  </strong> {artist.totalLastfmListeners.toLocaleString()}
                </p>
              )}

              {artist.totalLastfmScrobbles && (
                <p>
                  <strong> 
                    <a className="hover:text-blue-400" href="https://www.last.fm/" target="_blank" rel="noopener noreferrer"> Last.FM</a> Scrobbles: 
                  </strong> {artist.totalLastfmScrobbles.toLocaleString()}
                </p>
              )}


              {artist.tags && artist.tags.length > 0 && (
                <p>
                  <strong>Tags: </strong>
                  {artist.tags.map((tag, index) => (
                    <React.Fragment key={index}>
                      <Link
                        to={`/search?tag=${encodeURIComponent(tag)}`}
                        className="text-blue-400 hover:underline"
                      >
                        {tag}
                      </Link>
                      {index < artist.tags.length - 1 && ", "}
                    </React.Fragment>
                  ))}
                </p>
              )}
            </div>
          
          </div>
        </div>
  

      </div>
    );
};
  

export default ArtistDetailPage;
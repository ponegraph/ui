import { SongListItem } from "./songTypes";

export interface Song {
  songName: string;
  songId: number;
  releaseDate: string;
  bpm: number;
  key: string;
  mode: string;
  spotifyStream: number;
  spotifyPlaylistCount: number;
  applePlaylistCount: number;
  deezerPlaylistCount: number;
  spotifyChart: number;
  appleChart: number;
  deezerChart: number;
  shazamChart: number;
  danceability: number;
  energy: number;
  valence: number;
  acousticness: number;
  instrumentalness: number;
  liveness: number;
  speechiness: number;
}

export interface Artist {
  artistName: string;
  artistId: string;
  mbUrl: string;
}

export interface SongDetailsResponse {
  code: number;
  status: string;
  data: {
    song: Song;
    artists: Artist[];
    recommendedSongs: SongListItem[];
  };
}

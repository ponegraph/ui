import { SongUnit } from "./songTypes";

export type ArtistDetail = {
    artistName: string;
    artistId: string;
    mbUrl: string;
    countryName: string;
    totalLastfmListeners: number;
    totalLastfmScrobbles: number;
    tags: string[];
    additionalInfo: {
      description: string;
      externalReference: string;
      imageUrl: string;
    };
};
  
export type ArtistDetailResponse = {
    code: number;
    status: string;
    data: {
      artist: ArtistDetail;
      songs: SongUnit[];
    };
};

export type ArtistUnit = {
  artistName: string,
  artistId: string,
  mbUrl: string
}

export type ArtistListResponse = {
  code: number;
  status: string;
  data: {
    artists: ArtistDetail[];
  };
};

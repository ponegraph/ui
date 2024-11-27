import { ArtistUnit } from "./artistTypes";

export type SongUnit = {
    songName: string;
    songId: number;
    releaseDate: string;
};

export type SongListItem = SongUnit & {
    artists: ArtistUnit[];
};

export type SongListResponse = {
    code: number;
    status: string;
    data: {
      songs: SongListItem[];
    };
};

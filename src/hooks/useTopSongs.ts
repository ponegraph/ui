import { FetchState } from "../types/fetchTypes";
import { SongListResponse } from "../types/songTypes";
import { useFetch } from "./useFetch";

export const useTopSongs = (): FetchState<SongListResponse> => {
    const endpoint = `${import.meta.env.VITE_API_BASE_URL}/songs/top-rank`; 
    const { data, loading, error } = useFetch<SongListResponse>(endpoint);

    return { data, loading, error };
};

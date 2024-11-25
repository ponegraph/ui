import { FetchState } from "../types/fetchTypes";
import { TopSongResponse } from "../types/songTypes";
import { useFetch } from "./useFetch";

export const useTopSongs = (): FetchState<TopSongResponse> => {
    const endpoint = `${import.meta.env.VITE_API_BASE_URL}/songs/top-rank`; // Sesuaikan endpoint sesuai API yang Anda gunakan
    const { data, loading, error } = useFetch<TopSongResponse>(endpoint);
    console.log(endpoint)

    return { data, loading, error };
};

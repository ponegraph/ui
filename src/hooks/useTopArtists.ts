import { ArtistListResponse } from "../types/artistTypes";
import { FetchState } from "../types/fetchTypes";
import { useFetch } from "./useFetch";

export const useTopArtists = (): FetchState<ArtistListResponse> => {
    const endpoint = `${import.meta.env.VITE_API_BASE_URL}/artists/top-rank`;
    const { data, loading, error } = useFetch<ArtistListResponse>(endpoint);

    return { data, loading, error };
};

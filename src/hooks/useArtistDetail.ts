import { ArtistDetailResponse } from "../types/artistTypes";
import { FetchState } from "../types/fetchTypes";
import { useFetch } from "./useFetch";

export const useArtistDetail = (artistID: string): FetchState<ArtistDetailResponse> => {
    const endpoint = `${import.meta.env.VITE_API_BASE_URL}/artists/id/${artistID}`;
    const { data, loading, error } = useFetch<ArtistDetailResponse>(endpoint);
  
    return { data, loading, error };
  };
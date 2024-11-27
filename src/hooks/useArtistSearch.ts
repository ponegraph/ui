import { ArtistListResponse } from "../types/artistTypes";
import { FetchState } from "../types/fetchTypes";
import { useFetch } from "./useFetch";

export const useArtistSearch = (query: string): FetchState<ArtistListResponse> => {
  const isTagSearch = query.startsWith("#");
  const endpoint = isTagSearch
    ? `${import.meta.env.VITE_API_BASE_URL}/artists/search?tag=${encodeURIComponent(query.slice(1))}`
    : `${import.meta.env.VITE_API_BASE_URL}/artists/search?name=${encodeURIComponent(query)}`;
  const { data, loading, error } = useFetch<ArtistListResponse>(endpoint);

  return { data, loading, error };
};


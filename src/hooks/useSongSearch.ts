import { FetchState } from "../types/fetchTypes";
import { SongListResponse } from "../types/songTypes";
import { useFetch } from "./useFetch";

export const useSongSearch = (query: string): FetchState<SongListResponse> => {
  const endpoint =  `${import.meta.env.VITE_API_BASE_URL}/songs/search?name=${encodeURIComponent(query)}`;
  const { data, loading, error } = useFetch<SongListResponse>(endpoint);

  return { data, loading, error };
};


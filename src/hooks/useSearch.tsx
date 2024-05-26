import { MediaQuery } from "../App";
import { Media, fetchResponse } from "./useMedia";
import apiClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";

const useSearch = (mediaQuery: MediaQuery, endpoint: string) =>
  useQuery<fetchResponse<Media>>({
    queryKey: ["media", mediaQuery],
    queryFn: () =>
      apiClient
        .get<fetchResponse<Media>>(endpoint, {
          params: {
            query: mediaQuery.searchInput,
            with_genres: mediaQuery.selectedGenreId,
          },
        })
        .then((res) => res.data),
  });

export default useSearch;

import { useQuery } from "@tanstack/react-query";
import { MediaQuery } from "../App";
import useData, { fetchResponse } from "./useData";
import { Media } from "./useMedia";
import apiClient from "../services/apiClient";

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

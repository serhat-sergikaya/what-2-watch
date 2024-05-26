import { useInfiniteQuery } from "@tanstack/react-query";
import { MediaQuery } from "../App";

import apiClient from "../services/apiClient";

export interface fetchResponse<T> {
  count: number;
  results: T[];
  total_pages: number;
}

export interface Media {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  name: string;
  first_air_date: string;
  page: number;
}

const useMedia = (mediaQuery: MediaQuery, endpoint: string) =>
  useInfiniteQuery<fetchResponse<Media>, Error>({
    queryKey: ["media", mediaQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient
        .get<fetchResponse<Media>>(endpoint, {
          params: {
            with_genres: mediaQuery.selectedGenreId,
            sort_by: mediaQuery.sortValue,
            page: pageParam,
          },
        })
        .then((res) => res.data),
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length < lastPage.total_pages
        ? allPages.length + 1
        : undefined;
    },
  });

export default useMedia;

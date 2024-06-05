import { useInfiniteQuery } from "@tanstack/react-query";

import apiClient from "../services/apiClient";
import useMediaQueryStore from "../store";

export interface fetchResponse<T> {
  count: number;
  results: T[];
  total_pages: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Company {
  id: number;
  logo_path: string;
  name: string;
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
  overview: string;
  tagline: string;
  genres: Genre[];
  popularity: number;
  production_companies: Company[];
  original_language: string;
}

const useMedia = () => {
  const mediaQuery = useMediaQueryStore((s) => s.mediaQuery);

  const endpoint =
    mediaQuery.selectedMedia === "TV Shows"
      ? "/discover/tv"
      : "/discover/movie";

  return useInfiniteQuery<fetchResponse<Media>, Error>({
    queryKey: ["media", mediaQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient
        .get<fetchResponse<Media>>(endpoint, {
          params: {
            with_genres: mediaQuery.selectedGenreId,
            sort_by: mediaQuery.sortOrder,
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
};

export default useMedia;

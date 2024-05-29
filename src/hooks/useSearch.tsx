import { Media, fetchResponse } from "./useMedia";
import apiClient from "../services/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";
import useMediaQueryStore from "../store";

const useSearch = () => {
  const mediaQuery = useMediaQueryStore((s) => s.mediaQuery);

  const endpoint =
    mediaQuery.selectedMedia === "TV Shows" ? "/search/tv" : "/search/movie";

  return useInfiniteQuery<fetchResponse<Media>, Error>({
    queryKey: ["media", mediaQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient
        .get<fetchResponse<Media>>(endpoint, {
          params: {
            query: mediaQuery.searchText,
            with_genres: mediaQuery.selectedGenreId,
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

export default useSearch;

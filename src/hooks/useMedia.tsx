import useData, { fetchResponse } from "./useData";
import { MediaQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";

export interface Media {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  name: string;
  first_air_date: string;
}

const useMedia = (mediaQuery: MediaQuery, endpoint: string) =>
  useQuery<fetchResponse<Media>>({
    queryKey: ["media", mediaQuery],
    queryFn: () =>
      apiClient
        .get<fetchResponse<Media>>(endpoint, {
          params: {
            with_genres: mediaQuery.selectedGenreId,
            sort_by: mediaQuery.sortValue,
          },
        })
        .then((res) => res.data),
  });

export default useMedia;

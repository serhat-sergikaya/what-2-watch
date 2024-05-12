import useData from "./useData";
import { Genre } from "./useGenres";

export interface Show {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const useShows = (selectedGenre: Genre | null, selectedMedia: string) =>
  useData<Show>(
    "/discover/tv",
    {
      params: {
        with_genres: selectedGenre?.id,
      },
    },
    [selectedGenre, selectedMedia]
  );

export default useShows;

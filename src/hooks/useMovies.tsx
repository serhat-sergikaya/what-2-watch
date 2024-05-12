import { Genre } from "./useGenres";
import useData from "./useData";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const useMovies = (selectedGenre: Genre | null, selectedMedia: string) =>
  useData<Movie>(
    "/discover/movie",
    {
      params: {
        with_genres: selectedGenre?.id,
      },
    },
    [selectedGenre, selectedMedia]
  );

export default useMovies;

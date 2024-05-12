import { Genre } from "./useGenres";
import useData from "./useData";

export interface Media {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  name: string;
  first_air_date: string;
}

const useMedia = (
  selectedGenre: Genre | null,
  selectedMedia: string,
  endpoint: string
) =>
  useData<Media>(
    endpoint,
    {
      params: {
        with_genres: selectedGenre?.id,
      },
    },
    [selectedGenre, selectedMedia]
  );

export default useMedia;

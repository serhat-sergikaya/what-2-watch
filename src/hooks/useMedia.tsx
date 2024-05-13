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
  endpoint: string,
  sortValue: string
) =>
  useData<Media>(
    endpoint,
    {
      params: {
        with_genres: selectedGenre?.id,
        sort_by: sortValue,
      },
    },
    [selectedGenre, selectedMedia, sortValue]
  );

export default useMedia;

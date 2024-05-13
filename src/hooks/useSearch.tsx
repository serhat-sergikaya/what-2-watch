import useData from "./useData";
import { Genre } from "./useGenres";
import { Media } from "./useMedia";

const useSearch = (
  selectedGenre: Genre | null,
  selectedMedia: string,
  searchInput: string,
  endpoint: string
) =>
  useData<Media>(
    endpoint,
    {
      params: {
        query: searchInput,
        with_genres: selectedGenre?.id,
      },
    },
    [selectedGenre, selectedMedia, searchInput]
  );

export default useSearch;
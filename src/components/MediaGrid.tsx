import { SimpleGrid, Text } from "@chakra-ui/react";
import useMedia from "../hooks/useMedia";
import MediaCard from "./MediaCard";
import { Genre } from "../hooks/useGenres";
import MediaCardSkeleton from "./MediaCardSkeleton";
import useShows from "../hooks/useShows";
import useSearch from "../hooks/useSearch";

interface Props {
  selectedGenre: Genre | null;
  selectedMedia: string;
  searchInput: string;
}

const MediaGrid = ({ selectedGenre, selectedMedia, searchInput }: Props) => {
  const endpoint =
    selectedMedia === "TV Shows" ? "/discover/tv" : "/discover/movie";
  const endpointSearch =
    selectedMedia === "TV Shows" ? "/search/tv" : "/search/movie";

  const { data, error, isLoading } = searchInput
    ? useSearch(selectedGenre, selectedMedia, searchInput, endpointSearch)
    : useMedia(selectedGenre, selectedMedia, endpoint);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 4, xl: 5 }} spacing={6}>
      {error && <Text>{error}</Text>}

      {isLoading &&
        skeletons.map((skeleton) => <MediaCardSkeleton key={skeleton} />)}

      {data.map((media) => (
        <MediaCard key={media.id} movie={media} />
      ))}
    </SimpleGrid>
  );
};

export default MediaGrid;

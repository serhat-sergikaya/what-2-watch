import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MediaCard from "./MediaCard";
import { Genre } from "../hooks/useGenres";
import MediaCardSkeleton from "./MediaCardSkeleton";
import useShows from "../hooks/useShows";

interface Props {
  selectedGenre: Genre | null;
  selectedMedia: string;
}

const MediaGrid = ({ selectedGenre, selectedMedia }: Props) => {
  const { data, error, isLoading } =
    selectedMedia === "TV Shows"
      ? useShows(selectedGenre, selectedMedia)
      : useMovies(selectedGenre, selectedMedia);

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

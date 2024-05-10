import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MediaCard from "./MediaCard";
import { Genre } from "../hooks/useGenres";
import MediaCardSkeleton from "./MediaCardSkeleton";

interface Props {
  selectedGenre: Genre | null;
}

const MediaGrid = ({ selectedGenre }: Props) => {
  const { movies, error, isLoading } = useMovies(selectedGenre);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 4, xl: 5 }}
      padding={5}
      spacing={6}
    >
      {error && <Text>{error}</Text>}

      {isLoading && skeletons.map(() => <MediaCardSkeleton />)}

      {movies.map((movie) => (
        <MediaCard key={movie.id} movie={movie} />
      ))}
    </SimpleGrid>
  );
};

export default MediaGrid;

import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MediaCard from "./MediaCard";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const MediaGrid = ({ selectedGenre }: Props) => {
  const { movies, error } = useMovies(selectedGenre);

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 4, xl: 5 }}
      padding={5}
      spacing={6}
    >
      {error && <Text>{error}</Text>}

      {movies.map((movie) => (
        <MediaCard key={movie.id} movie={movie} />
      ))}
    </SimpleGrid>
  );
};

export default MediaGrid;

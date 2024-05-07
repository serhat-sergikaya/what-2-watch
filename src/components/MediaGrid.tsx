import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MediaCard from "./MediaCard";

const MediaGrid = () => {
  const { movies, error } = useMovies();

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
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

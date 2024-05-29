import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import movieGenres from "../data/movie-genres";
import tvGenres from "../data/tv-genres";
import useMediaQueryStore from "../store";

const GenreList = () => {
  const selectedMedia = useMediaQueryStore((s) => s.mediaQuery.selectedMedia);
  const setSelectedGenreId = useMediaQueryStore((s) => s.setSelectedGenreId);
  const selectedGenreId = useMediaQueryStore(
    (s) => s.mediaQuery.selectedGenreId
  );

  let genres = selectedMedia === "TV Shows" ? tvGenres : movieGenres;
  return (
    <List marginX={5}>
      <Heading size="lg" marginBottom={3}>
        Genres
      </Heading>
      {genres.map((genre) => (
        <ListItem key={genre.id} marginY="10px">
          <HStack>
            <Image
              boxSize="32px"
              src={genre.image}
              bg="white"
              borderRadius={6}
            />
            <Button
              variant="link"
              size="lg"
              onClick={() => setSelectedGenreId(genre.id)}
              fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

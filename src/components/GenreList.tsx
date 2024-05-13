import { Genre } from "../hooks/useGenres";
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

interface Props {
  selectedGenre: Genre | null;
  onGenreSelect: (genre: Genre) => void;
  selectedMedia: string;
}

const GenreList = ({ onGenreSelect, selectedGenre, selectedMedia }: Props) => {
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
              onClick={() => onGenreSelect(genre)}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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

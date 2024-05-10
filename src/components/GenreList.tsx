import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import genres from "../data/genres";

interface Props {
  selectedGenre: Genre | null;
  onGenreSelect: (genre: Genre) => void;
}

const GenreList = ({ onGenreSelect, selectedGenre }: Props) => {
  return (
    <List marginX={5}>
      <Heading size="xl" marginBottom={3}>
        Genres
      </Heading>
      {genres.map((genre) => (
        <ListItem key={genre.id} marginY="5px">
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

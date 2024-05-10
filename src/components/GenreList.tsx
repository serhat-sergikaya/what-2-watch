import useGenres, { Genre } from "../hooks/useGenres";
import { Button, Heading, List, ListItem } from "@chakra-ui/react";

interface Props {
  selectedGenre: Genre | null;
  onGenreSelect: (genre: Genre) => void;
}

const GenreList = ({ onGenreSelect, selectedGenre }: Props) => {
  const { genres } = useGenres();
  return (
    <List marginX={5}>
      <Heading size="xl" marginBottom={3}>
        Genres
      </Heading>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <Button
            variant="link"
            size="lg"
            onClick={() => onGenreSelect(genre)}
            fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
          >
            {genre.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

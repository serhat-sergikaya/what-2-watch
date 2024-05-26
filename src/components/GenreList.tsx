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
  selectedGenreId?: number;
  onGenreSelect: (genreId: number) => void;
  selectedMedia: string;
}

const GenreList = ({
  onGenreSelect,
  selectedGenreId,
  selectedMedia,
}: Props) => {
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
              onClick={() => onGenreSelect(genre.id)}
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

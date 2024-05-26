import { Heading } from "@chakra-ui/react";
import genres from "../data/tv-genres";

interface Props {
  selectedGenreId?: number;
  selectedMedia: string;
}
const MediaHeading = ({ selectedGenreId, selectedMedia }: Props) => {
  const selectedGenre = genres.find((g) => g.id === selectedGenreId); // find selected genre by id

  const heading = `${selectedGenre?.name || ""} ${selectedMedia || "Movies"}`;
  return <Heading fontSize="5xl">{heading}</Heading>;
};

export default MediaHeading;

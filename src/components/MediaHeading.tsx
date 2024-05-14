import { Heading } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedMedia: string;
}
const MediaHeading = ({ selectedGenre, selectedMedia }: Props) => {
  const heading = `${selectedGenre?.name || ""} ${selectedMedia || "Movies"}`;
  return <Heading fontSize="5xl">{heading}</Heading>;
};

export default MediaHeading;

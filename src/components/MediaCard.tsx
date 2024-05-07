import { Movie } from "../hooks/useMovies";
import {
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

interface Props {
  movie: Movie;
}
const MediaCard = ({ movie }: Props) => {
  const image_url = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <Card borderRadius={20} overflow="hidden">
      <Image src={image_url} />
      <CardBody>
        <Heading>{movie.title}</Heading>
        <Divider marginTop={2} />
      </CardBody>
    </Card>
  );
};

export default MediaCard;

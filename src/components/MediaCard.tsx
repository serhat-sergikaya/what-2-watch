import { Movie } from "../hooks/useMovies";
import Moment from "moment";
import {
  Card,
  CardBody,
  CardFooter,
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

  const date = Moment(movie.release_date).format("d MMM YY");
  return (
    <Card borderRadius={20} overflow="hidden">
      <Image src={image_url} />
      <CardBody>
        <Heading>{movie.title}</Heading>
        <Divider marginTop={2} />
      </CardBody>
      <CardFooter>
        <Text>{date}</Text>
      </CardFooter>
    </Card>
  );
};

export default MediaCard;

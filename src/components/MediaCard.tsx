import { Movie } from "../hooks/useMovies";
import Moment from "moment";
import {
  Badge,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

interface Props {
  movie: Movie;
}
const MediaCard = ({ movie }: Props) => {
  let image_url = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  let date = Moment(movie.release_date).format("MMM YYYY");

  let rating = Number(movie.vote_average).toFixed(1);

  let ratingColor =
    movie.vote_average > 7.5
      ? "green"
      : movie.vote_average > 5
      ? "yellow"
      : "red";

  //const color = movie.vote_average
  return (
    <Card borderRadius={15} overflow="hidden">
      <Image src={image_url} />
      <CardBody>
        <HStack marginBottom={2} justifyContent="space-between">
          <Text>{date}</Text>
          <Badge
            variant="solid"
            fontSize={15}
            colorScheme={ratingColor}
            borderRadius={3}
          >
            {rating}
          </Badge>
        </HStack>
        <Heading fontSize="2xl">{movie.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default MediaCard;

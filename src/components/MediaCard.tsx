import { Movie } from "../hooks/useMovies";
import Moment from "moment";
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

interface Props {
  movie: Movie;
}
const MediaCard = ({ movie }: Props) => {
  const image_url = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  const date = Moment(movie.release_date).format("MMM YY");

  const rating = Number(movie.vote_average).toFixed(1);
  return (
    <Card borderRadius={20} overflow="hidden">
      <Image src={image_url} />
      <CardBody>
        <Heading fontSize="2xl">{movie.title}</Heading>
      </CardBody>
      <HStack marginX={3} marginBottom={2} justifyContent="space-between">
        <Text>{date}</Text>
        <Badge variant="subtle" fontSize={20} colorScheme="green">
          {rating}
        </Badge>
      </HStack>
    </Card>
  );
};

export default MediaCard;

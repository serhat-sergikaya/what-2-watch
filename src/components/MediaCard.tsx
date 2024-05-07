import { Movie } from "../hooks/useMovies";
import Moment from "moment";
import {
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
  return (
    <Card borderRadius={20} overflow="hidden">
      <Image src={image_url} />
      <CardBody>
        <Heading fontSize="2xl">{movie.title}</Heading>
      </CardBody>
      <HStack>
        <Text>{date}</Text>
      </HStack>
    </Card>
  );
};

export default MediaCard;

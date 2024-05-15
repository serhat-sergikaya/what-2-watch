import { Media } from "../hooks/useMedia";
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
  movie: Media;
}
const MediaCard = ({ movie }: Props) => {
  let image_url = movie.poster_path
    ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
    : "src/assets/No-Image-Placeholder.png";

  let date = movie.release_date
    ? Moment(movie.release_date).format("MMM YYYY")
    : "";

  let rating = Number(movie.vote_average).toFixed(1);
  let showDate = movie.first_air_date
    ? Moment(movie.first_air_date).format("MMM YYYY")
    : "";

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
          <Text>
            {date}
            {showDate}
          </Text>
          <Badge
            variant="solid"
            fontSize={15}
            colorScheme={ratingColor}
            borderRadius={3}
          >
            {rating}
          </Badge>
        </HStack>
        <Heading fontSize="2xl">
          {movie.title} {movie.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default MediaCard;

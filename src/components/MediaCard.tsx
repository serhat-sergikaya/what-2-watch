import { Media } from "../hooks/useMedia";
import Moment from "moment";
import noMediaPhoto from "../assets/No-Image-Placeholder.png";
import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ScoreBadge from "./ScoreBadge";

interface Props {
  media: Media;
}
const MediaCard = ({ media }: Props) => {
  let date = media.release_date
    ? Moment(media.release_date).format("MMM YYYY")
    : "";

  let showDate = media.first_air_date
    ? Moment(media.first_air_date).format("MMM YYYY")
    : "";

  const image_url = media.poster_path
    ? "https://image.tmdb.org/t/p/w500" + media.poster_path
    : noMediaPhoto;

  //const color = movie.vote_average
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
      borderRadius={15}
      overflow="hidden"
    >
      <Card>
        <Image src={image_url} />
        <CardBody>
          <HStack marginBottom={2} justifyContent="space-between">
            <Text>
              {date}
              {showDate}
            </Text>
            <ScoreBadge media={media} fontSize={15} borderRadius={3} />
          </HStack>
          <Heading
            fontSize="2xl"
            _hover={{ color: "gray.500", transition: "color .15s ease-in" }}
          >
            <Link to={"/media/" + media.id}>
              {media.title} {media.name}
            </Link>
          </Heading>
        </CardBody>
      </Card>
    </Box>
  );
};

export default MediaCard;

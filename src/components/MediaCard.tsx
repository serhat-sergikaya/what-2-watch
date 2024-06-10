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
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ScoreBadge from "./ScoreBadge";

interface Props {
  media: Media;
  headingSize?: string;
  attributeSize?: string;
  headingHeight?: boolean;
}
const MediaCard = ({ media, headingSize, headingHeight }: Props) => {
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
        <Link to={"/media/" + media.id}>
          <Image src={image_url} />
        </Link>
        <CardBody>
          <HStack marginBottom={2} justifyContent="space-between">
            <Text fontSize={15}>
              {date}
              {showDate}
            </Text>
            <ScoreBadge media={media} fontSize={15} borderRadius={3} />
          </HStack>
          <Stack
            height={
              headingHeight
                ? "50"
                : {
                    sm: "40px",
                    md: "40px",
                    lg: "50px",
                    xl: "70px",
                    "2xl": "80px",
                  }
            }
            justifyContent="space-around"
          >
            <Heading
              fontSize={headingSize ? headingSize : "xl"}
              _hover={{ color: "gray.500", transition: "color .15s ease-in" }}
            >
              <Link to={"/media/" + media.id}>
                {media.title} {media.name}
              </Link>
            </Heading>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default MediaCard;

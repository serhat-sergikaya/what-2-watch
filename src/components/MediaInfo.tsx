import {
  Badge,
  Box,
  Card,
  Divider,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import noMediaPhoto from "../assets/No-Image-Placeholder.png";
import { Media } from "../hooks/useMedia";

import MediaAttributes from "./MediaAttributes";

interface Props {
  media: Media;
}

const MediaInfo = ({ media }: Props) => {
  const image_url = media?.poster_path
    ? "https://image.tmdb.org/t/p/w500" + media.poster_path
    : noMediaPhoto;

  return (
    <Box p={4} display={{ "2xl": "flex" }}>
      <HStack flexShrink={0} justifyContent="space-around">
        <Image borderRadius={5} width="450px" src={image_url}></Image>
      </HStack>
      <VStack marginLeft={{ "2xl": 5 }} mt={{ base: 5, "2xl": 0 }} spacing={5}>
        <Heading size="xl">{media?.title}</Heading>
        <Heading size="sm" color="gray.500">
          "{media?.tagline}"
        </Heading>
        <HStack>
          {media?.genres.map((genre) => (
            <Badge key={genre.id}>{genre.name}</Badge>
          ))}
        </HStack>
        <Heading size="md">Overview</Heading>
        <Divider />
        <Card padding={3}>
          <Text as="b" color="gray.100">
            {media?.overview}
          </Text>
        </Card>
        <MediaAttributes media={media!} />
      </VStack>
    </Box>
  );
};

export default MediaInfo;

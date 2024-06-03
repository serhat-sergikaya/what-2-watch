import { useParams } from "react-router-dom";
import useMediaDetails from "../hooks/useMediaDetails";
import {
  Heading,
  Spinner,
  Image,
  Text,
  SimpleGrid,
  GridItem,
  Box,
  VStack,
} from "@chakra-ui/react";
import noMediaPhoto from "../assets/No-Image-Placeholder.png";
import ScoreBadge from "../components/ScoreBadge";
import Cast from "../components/Cast";
import MediaVideo from "../components/MediaVideo";

const MediaDetails = () => {
  const { id } = useParams();

  const { data: media, isLoading, error } = useMediaDetails(id!);

  const image_url = media?.poster_path
    ? "https://image.tmdb.org/t/p/w500" + media.poster_path
    : noMediaPhoto;

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Box p={4} display={{ md: "flex" }}>
            <Box flexShrink={0}>
              <Image borderRadius={5} width="450px" src={image_url}></Image>
            </Box>
            <VStack marginLeft={{ md: 5 }} spacing={5}>
              <Heading size="lg">{media?.title}</Heading>
              <Heading size="sm" color="gray.500">
                "{media?.tagline}"
              </Heading>
              <Heading size="md">Overview</Heading>
              <Text fontWeight="bold">{media?.overview}</Text>
              <ScoreBadge media={media!} fontSize={40} borderRadius={10} />
            </VStack>
          </Box>
        </GridItem>
        <GridItem>
          <MediaVideo mediaId={media?.id!} />
          <Cast mediaId={media?.id!} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default MediaDetails;

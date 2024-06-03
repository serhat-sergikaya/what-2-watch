import { useParams } from "react-router-dom";
import useMediaDetails from "../hooks/useMediaDetails";
import {
  Heading,
  Spinner,
  Image,
  Text,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import noMediaPhoto from "../assets/No-Image-Placeholder.png";
import ScoreBadge from "../components/ScoreBadge";
import Cast from "../components/Cast";

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
      <SimpleGrid columns={2}>
        <GridItem>
          <Heading>{media?.title}</Heading>
          <Image src={image_url}></Image>
          <Heading size="md">Overview</Heading>
          <Text fontWeight="bold">{media?.overview}</Text>
          <ScoreBadge media={media!} fontSize={40} borderRadius={10} />
        </GridItem>
        <GridItem>
          <Cast mediaId={media?.id!} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default MediaDetails;

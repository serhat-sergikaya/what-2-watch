import { GridItem, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useMediaDetails from "../hooks/useMediaDetails";

import Cast from "../components/Cast";
import MediaInfo from "../components/MediaInfo";
import MediaVideo from "../components/MediaVideo";
import MediaImages from "../components/MediaImages";
import Recommendations from "../components/Recommendations";

const MediaDetails = () => {
  const { id } = useParams();

  const { data: media, isLoading, error } = useMediaDetails(id!);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  if (!media) return null;

  return (
    <>
      <SimpleGrid columns={{ base: 1, "2xl": 2 }} spacing={5}>
        <GridItem>
          <MediaInfo media={media} />
          <Cast mediaId={media.id} />
        </GridItem>
        <GridItem>
          <MediaVideo mediaId={media.id} />
          <MediaImages mediaId={media.id} />
        </GridItem>
      </SimpleGrid>
      <Recommendations mediaId={media.id} />
    </>
  );
};

export default MediaDetails;

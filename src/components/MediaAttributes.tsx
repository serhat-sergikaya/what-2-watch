import { SimpleGrid, Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import ScoreBadge from "./ScoreBadge";
import { Media } from "../hooks/useMedia";
import Moment from "moment";

interface Props {
  media: Media;
}

const MediaAttributes = ({ media }: Props) => {
  let date = media.release_date
    ? Moment(media.release_date).format("MMM YYYY")
    : "";

  let showDate = media.first_air_date
    ? Moment(media.first_air_date).format("MMM YYYY")
    : "";
  return (
    <SimpleGrid columns={{ base: 2, md: 4, "2xl": 2 }} spacing={10}>
      <DefinitionItem term="Rating">
        <ScoreBadge media={media!} fontSize={15} borderRadius={10} />
      </DefinitionItem>
      <DefinitionItem term="Release Date">
        <Text>
          {date} {showDate}
        </Text>
      </DefinitionItem>
      <DefinitionItem term="Production Companies">
        {media.production_companies.map((company) => (
          <Text key={media.id}>{company.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Original Language">
        <Text textTransform="uppercase">{media.original_language}</Text>
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default MediaAttributes;

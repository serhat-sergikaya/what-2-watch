import { Badge } from "@chakra-ui/react";
import { Media } from "../hooks/useMedia";

interface Props {
  media: Media;
  fontSize: number;
  borderRadius: number;
}
const ScoreBadge = ({ media, fontSize, borderRadius }: Props) => {
  let ratingColor =
    media.vote_average > 7.5
      ? "green"
      : media.vote_average > 5
      ? "yellow"
      : "red";
  let rating = Number(media.vote_average).toFixed(1);
  return (
    <Badge
      variant="solid"
      fontSize={fontSize}
      colorScheme={ratingColor}
      borderRadius={borderRadius}
    >
      {rating}
    </Badge>
  );
};

export default ScoreBadge;

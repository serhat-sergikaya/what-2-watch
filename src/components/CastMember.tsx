import { Avatar, Card, Box, Heading, Stack, Text } from "@chakra-ui/react";
import { Cast } from "../hooks/useCast";
import no_avatar from "../assets/no_avatar.png";

interface Props {
  cast: Cast;
}
const CastMember = ({ cast }: Props) => {
  const avatar = cast.profile_path
    ? "https://image.tmdb.org/t/p/w500" + cast.profile_path
    : no_avatar;
  return (
    <Card direction="row" padding={1}>
      <Avatar src={avatar} />
      <Stack>
        <Box marginLeft={3}>
          <Heading size="sm">{cast.name}</Heading>
          <Text>{cast.character}</Text>
        </Box>
      </Stack>
    </Card>
  );
};

export default CastMember;

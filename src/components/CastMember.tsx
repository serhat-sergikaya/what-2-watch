import { Avatar, Card, Box, Heading, Stack, Text } from "@chakra-ui/react";
import { Cast } from "../hooks/useCast";
import no_avatar from "../assets/no_avatar.png";
import { Link } from "react-router-dom";

interface Props {
  cast: Cast;
}
const CastMember = ({ cast }: Props) => {
  const avatar = cast.profile_path
    ? "https://image.tmdb.org/t/p/w500" + cast.profile_path
    : no_avatar;
  return (
    <Link to={"/person/" + cast.id}>
      <Card direction="row" padding={1}>
        <Avatar src={avatar} bg="gray.100" size={{ base: "md", md: "xl" }} />

        <Stack>
          <Box padding={{ base: "1", md: "5" }}>
            <Heading size={{ base: "sm", md: "md" }}>{cast.name}</Heading>
            <Text color="gray.400">{cast.character}</Text>
          </Box>
        </Stack>
      </Card>
    </Link>
  );
};

export default CastMember;

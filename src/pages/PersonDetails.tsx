import { useParams } from "react-router-dom";
import usePeople from "../hooks/usePeople";
import {
  Image,
  Spinner,
  Box,
  VStack,
} from "@chakra-ui/react";
import no_avatar from "../assets/no_avatar.png";

import KnownFor from "../components/KnownFor";
import PersonInfo from "../components/PersonInfo";

const PersonDetails = () => {
  const { id } = useParams();

  const { data: person, isLoading, error } = usePeople(id!);

  const avatar = person?.profile_path
    ? "https://image.tmdb.org/t/p/w500" + person?.profile_path
    : no_avatar;

  if (isLoading) <Spinner />;

  if (error) throw error;

  return (
    <>
      <Box display={{ "2xl": "flex" }}>
        <VStack flexShrink={0}>
          <Image src={avatar} borderRadius={5} width={400} />
        </VStack>
        <PersonInfo person={person!} />
      </Box>
      <KnownFor personId={person?.id!} />
    </>
  );
};

export default PersonDetails;

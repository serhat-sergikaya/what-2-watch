import { useParams } from "react-router-dom";
import usePeople from "../hooks/usePeople";
import {
  HStack,
  Heading,
  Image,
  Spinner,
  Text,
  SimpleGrid,
  Stack,
  Divider,
  Box,
  Card,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import no_avatar from "../assets/no_avatar.png";
import DefinitionItem from "../components/DefinitionItem";
import Moment from "moment";
import KnownFor from "../components/KnownFor";
import ExpandableText from "../components/ExpandableText";

const PersonDetails = () => {
  const { id } = useParams();

  const { data: person, isLoading, error } = usePeople(id!);

  const avatar = person?.profile_path
    ? "https://image.tmdb.org/t/p/w500" + person?.profile_path
    : no_avatar;

  let birthDate = Moment(person?.birthday).format("DD MMM YYYY");

  if (isLoading) <Spinner />;

  if (error) throw error;

  return (
    <Grid
      gridTemplateAreas={`"photo details"
        "credits credits"`}
      gridTemplateColumns={"450px 1fr"}
      marginTop={10}
    >
      <GridItem area={"photo"}>
        <Image src={avatar} borderRadius={5} width={400} />
      </GridItem>
      <GridItem area={"details"}>
        <Stack>
          <Heading marginBottom={15}> {person?.name}</Heading>
          <Heading color="gray.400" size="md">
            Personal Information
          </Heading>
          <Divider />
          <SimpleGrid columns={4}>
            <DefinitionItem term="Known For">
              <Text>{person?.known_for_department}</Text>
            </DefinitionItem>
            <DefinitionItem term="Gender">
              <Text>{person?.gender === 1 ? "Female" : "Male"}</Text>
            </DefinitionItem>
            <DefinitionItem term="Place of birth">
              <Text>{person?.place_of_birth}</Text>
            </DefinitionItem>
            <DefinitionItem term="Birthday">
              <Text>{birthDate}</Text>
            </DefinitionItem>
          </SimpleGrid>
          <Box marginTop={20}>
            <Heading color="gray.400" size="md">
              Biography
            </Heading>
            <Divider />
            <Card padding={5} marginTop={15}>
              <ExpandableText children={person?.biography!} />
            </Card>
          </Box>
        </Stack>
      </GridItem>
      <GridItem area={"credits"} marginTop={20}>
        <KnownFor personId={person?.id!} />
      </GridItem>
    </Grid>
  );
};

export default PersonDetails;

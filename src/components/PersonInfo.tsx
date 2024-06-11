import {
  Card,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import ExpandableText from "./ExpandableText";
import { Person } from "../hooks/usePeople";
import Moment from "moment";

interface Props {
  person: Person;
}

const PersonInfo = ({ person }: Props) => {
  let birthDate = Moment(person?.birthday).format("DD MMM YYYY");
  return (
    <Flex direction="column" padding={5}>
      <Heading marginBottom={15}> {person?.name}</Heading>
      <Heading color="gray.400" size="md">
        Personal Information
      </Heading>
      <Divider />
      <SimpleGrid columns={{ sm: 2, md: 4 }} spacing={3} mt={2} mb={2}>
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
      <Heading color="gray.400" size="md">
        Biography
      </Heading>
      <Divider />
      <Card padding={5} marginTop={15}>
        <ExpandableText children={person?.biography!} />
      </Card>
    </Flex>
  );
};

export default PersonInfo;

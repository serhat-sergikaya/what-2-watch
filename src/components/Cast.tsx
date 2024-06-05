import { Button, Heading, SimpleGrid, Spinner, Flex } from "@chakra-ui/react";
import useCast from "../hooks/useCast";
import CastMember from "./CastMember";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
interface Props {
  mediaId: number;
}
const Cast = ({ mediaId }: Props) => {
  const [show, setShow] = useState(false);
  const { data, isLoading, error } = useCast(mediaId);

  const summary = data?.cast.slice(0, 8);

  const res = show ? data?.cast : summary;

  if (isLoading) return <Spinner />;

  if (error) throw error;

  if (!data?.cast) return null;
  return (
    <>
      <Heading marginBottom={3}>Top Cast</Heading>
      <SimpleGrid spacing={3} columns={2}>
        {res?.map((cast) => (
          <CastMember key={cast.id} cast={cast} />
        ))}
      </SimpleGrid>
      <Flex justify="space-around" mt={3}>
        <Button
          size="sm"
          fontWeight="bold"
          colorScheme="gray"
          leftIcon={show ? <FaChevronUp /> : <FaChevronDown />}
          onClick={() => setShow(!show)}
        >
          {show ? "Show less" : "Load more"}
        </Button>
      </Flex>
    </>
  );
};

export default Cast;

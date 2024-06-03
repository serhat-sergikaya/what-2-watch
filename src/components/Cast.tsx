import { Heading, SimpleGrid } from "@chakra-ui/react";
import useCast from "../hooks/useCast";
import CastMember from "./CastMember";
interface Props {
  mediaId: number;
}
const Cast = ({ mediaId }: Props) => {
  const { data, isLoading, error } = useCast(mediaId);

  console.log(data);
  return (
    <>
      <Heading marginBottom={3}>Top Cast</Heading>
      <SimpleGrid spacing={3} columns={2}>
        {data?.cast.map((cast) => (
          <CastMember cast={cast} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Cast;

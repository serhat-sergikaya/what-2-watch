import { Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import useCast from "../hooks/useCast";
import CastMember from "./CastMember";
interface Props {
  mediaId: number;
}
const Cast = ({ mediaId }: Props) => {
  const { data, isLoading, error } = useCast(mediaId);

  if (isLoading) return <Spinner />;

  if (!data?.cast) return null;
  return (
    <>
      <Heading marginBottom={3}>Top Cast</Heading>
      <SimpleGrid spacing={3} columns={2}>
        {data?.cast.map((cast) => (
          <CastMember key={cast.id} cast={cast} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Cast;

import { Heading, HStack, Spinner } from "@chakra-ui/react";
import MediaCard from "./MediaCard";
import { useEffect, useState } from "react";
import useCombinedCredits from "../hooks/useCombinedCredits";

interface Props {
  personId: number;
}
const KnownFor = ({ personId }: Props) => {
  const [pageSize, setPageSize] = useState(10);
  const { data, isLoading, error } = useCombinedCredits(personId);

  window.onresize = () => {
    if (window.innerWidth < 768) setPageSize(2);
    if (window.innerWidth >= 768) setPageSize(4);
    if (window.innerWidth >= 992) setPageSize(6);
    if (window.innerWidth >= 1200) setPageSize(8);
    if (window.innerWidth >= 1500) setPageSize(10);
  };

  useEffect(() => {
    if (window.innerWidth < 768) setPageSize(2);
    if (window.innerWidth >= 768) setPageSize(4);
    if (window.innerWidth >= 992) setPageSize(6);
    if (window.innerWidth >= 1200) setPageSize(8);
    if (window.innerWidth >= 1500) setPageSize(10);
  });

  const res = data?.cast.slice(0, pageSize);

  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <>
      <Heading size="lg">Known For:</Heading>
      <HStack mt={3}>
        {res?.map((media) => (
          <MediaCard media={media} headingSize="md" headingHeight={true} />
        ))}
      </HStack>
    </>
  );
};

export default KnownFor;

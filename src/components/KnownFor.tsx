import { Heading, HStack, Button, Spinner } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MediaCard from "./MediaCard";
import { useEffect, useState } from "react";
import useCombinedCredits from "../hooks/useCombinedCredits";

interface Props {
  personId: number;
}
const KnownFor = ({ personId }: Props) => {
  const { data, isLoading, error } = useCombinedCredits(personId);

  const res = data?.cast.slice(0, 10);

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

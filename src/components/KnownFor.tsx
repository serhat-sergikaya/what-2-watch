import { Button, Heading, HStack, Spinner } from "@chakra-ui/react";
import MediaCard from "./MediaCard";
import { useEffect, useState } from "react";
import useCombinedCredits from "../hooks/useCombinedCredits";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
  personId: number;
}
const KnownFor = ({ personId }: Props) => {
  const [page, setPage] = useState(1);
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

  const res = data?.cast.slice((page - 1) * pageSize, page * pageSize);

  console.log("page", (page + 1) * pageSize);
  console.log("data", data?.cast.length);

  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <>
      <Heading size="lg">Known For:</Heading>
      <HStack mt={3}>
        <Button
          isDisabled={page <= 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          <FaChevronLeft />
        </Button>
        {res?.map((media) => (
          <MediaCard media={media} headingSize="md" headingHeight={true} />
        ))}
        <Button
          isDisabled={
            data?.cast.length
              ? (page + 1) * pageSize > data?.cast.length
              : false
          }
          onClick={() => {
            setPage(page + 1);
          }}
        >
          <FaChevronRight />
        </Button>
      </HStack>
    </>
  );
};

export default KnownFor;

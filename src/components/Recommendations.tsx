import { Button, HStack, Heading, Spinner } from "@chakra-ui/react";
import useRecommended from "../hooks/useRecommended";
import MediaCard from "./MediaCard";
import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

interface Props {
  mediaId: number;
}
const Recommendations = ({ mediaId }: Props) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const totalItems = 20; // api sends always 20 items

  window.onresize = () => {
    if (window.innerWidth < 768) setPageSize(1);
    if (window.innerWidth >= 768) setPageSize(2);
    if (window.innerWidth >= 992) setPageSize(4);
    if (window.innerWidth >= 1200) setPageSize(5);
    if (window.innerWidth >= 1500) setPageSize(10);
  };

  useEffect(() => {
    if (window.innerWidth < 768) setPageSize(1);
    if (window.innerWidth >= 768) setPageSize(2);
    if (window.innerWidth >= 992) setPageSize(4);
    if (window.innerWidth >= 1200) setPageSize(5);
    if (window.innerWidth >= 1500) setPageSize(10);
  });

  const { data, isLoading, error } = useRecommended({
    mediaId,
  });

  console.log("data", data?.results.length);

  const res = data?.results.slice((page - 1) * pageSize, page * pageSize);

  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <>
      <Heading size="lg">You might also like:</Heading>
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
          isDisabled={(page + 1) * pageSize > totalItems}
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

export default Recommendations;

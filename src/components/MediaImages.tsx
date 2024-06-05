import {
  SimpleGrid,
  Spinner,
  Image,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
import useImages from "../hooks/useImages";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

interface Props {
  mediaId: number;
}

const MediaImages = ({ mediaId }: Props) => {
  const { data, isLoading, error } = useImages(mediaId);

  const [show, setShow] = useState(false);

  const summary = data?.backdrops.slice(0, 6);

  const res = show ? data?.backdrops : summary;

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <Heading size="lg" marginY={3}>
        Images
      </Heading>
      <SimpleGrid columns={2} spacing={5}>
        {res?.map((b) => (
          <Image
            key={b.id}
            src={"https://image.tmdb.org/t/p/w500" + b.file_path}
          />
        ))}
      </SimpleGrid>
      <Flex justify="space-around" mt={3}>
        {data?.backdrops.length! > 5 && (
          <Button
            size="sm"
            fontWeight="bold"
            colorScheme="orange"
            leftIcon={show ? <FaChevronUp /> : <FaChevronDown />}
            onClick={() => setShow(!show)}
          >
            {show ? "Show less" : "Load more"}
          </Button>
        )}
      </Flex>
    </>
  );
};

export default MediaImages;

import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useMedia from "../hooks/useMedia";
import useSearch from "../hooks/useSearch";
import useMediaQueryStore from "../store";
import MediaCard from "./MediaCard";
import MediaCardSkeleton from "./MediaCardSkeleton";

const MediaGrid = () => {
  const mediaQuery = useMediaQueryStore((s) => s.mediaQuery);

  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    mediaQuery.searchText ? useSearch() : useMedia();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const totalMedia =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <InfiniteScroll
      dataLength={totalMedia}
      next={fetchNextPage}
      hasMore={hasNextPage || false}
      loader={<Spinner />}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4, xl: 5 }} spacing={6}>
        {error && <Text>{error.message}</Text>}

        {isLoading &&
          skeletons.map((skeleton) => <MediaCardSkeleton key={skeleton} />)}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((media) => (
              <MediaCard key={media.id} movie={media} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default MediaGrid;

import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useMedia from "../hooks/useMedia";
import MediaCard from "./MediaCard";
import MediaCardSkeleton from "./MediaCardSkeleton";
import useSearch from "../hooks/useSearch";
import { MediaQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  mediaQuery: MediaQuery;
}

const MediaGrid = ({ mediaQuery }: Props) => {
  const endpoint =
    mediaQuery.selectedMedia === "TV Shows"
      ? "/discover/tv"
      : "/discover/movie";
  const endpointSearch =
    mediaQuery.selectedMedia === "TV Shows" ? "/search/tv" : "/search/movie";

  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    mediaQuery.searchInput
      ? useSearch(mediaQuery, endpointSearch)
      : useMedia(mediaQuery, endpoint);

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

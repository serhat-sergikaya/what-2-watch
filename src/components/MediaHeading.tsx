import { Heading } from "@chakra-ui/react";
import tvGenres from "../data/tv-genres";
import movieGenres from "../data/movie-genres";
import useMediaQueryStore from "../store";

const MediaHeading = () => {
  const selectedGenreId = useMediaQueryStore(
    (s) => s.mediaQuery.selectedGenreId
  );
  const selectedMedia = useMediaQueryStore((s) => s.mediaQuery.selectedMedia);

  const genres = selectedMedia === "TV Shows" ? tvGenres : movieGenres;

  const selectedGenre = genres.find((g) => g.id === selectedGenreId); // find selected genre by id

  const heading = `${selectedGenre?.name || ""} ${selectedMedia || "Movies"}`;
  return <Heading fontSize="5xl">{heading}</Heading>;
};

export default MediaHeading;

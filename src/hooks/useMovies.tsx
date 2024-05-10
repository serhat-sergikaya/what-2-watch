import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";
import { Genre } from "./useGenres";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

interface FetchMoviesResponse {
  page: number;
  results: Movie[];
}

const useMovies = (selectedGenre: Genre | null) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchMoviesResponse>("/discover/movie", {
        signal: controller.signal,
        params: {
          with_genres: selectedGenre?.id,
        },
      })
      .then((res) => {
        setMovies(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [selectedGenre]);

  return { movies, error, isLoading };
};

export default useMovies;

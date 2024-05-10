import { useEffect, useState } from "react";
import apiClient from "../service/apiClient";
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

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchMoviesResponse>("/discover/movie", {
        signal: controller.signal,
        params: {
          with_genres: selectedGenre?.id,
        },
      })
      .then((res) => setMovies(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, [selectedGenre]);

  return { movies, error };
};

export default useMovies;

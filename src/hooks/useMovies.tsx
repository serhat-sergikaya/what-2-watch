import { useEffect, useState } from "react";
import apiClient from "../service/apiClient";
import { CanceledError } from "axios";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

interface FetchMoviesResponse {
  page: number;
  results: Movie[];
}

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchMoviesResponse>("/movie", { signal: controller.signal })
      .then((res) => setMovies(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { movies, error };
};

export default useMovies;

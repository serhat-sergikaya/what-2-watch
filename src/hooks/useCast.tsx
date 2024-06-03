import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";

interface FetchCastResponse<T> {
  id: number;
  cast: T[];
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

const useCast = (mediaId: number) =>
  useQuery<FetchCastResponse<Cast>>({
    queryKey: ["cast", mediaId],
    queryFn: () =>
      apiClient
        .get<FetchCastResponse<Cast>>(`/movie/${mediaId}/credits`)
        .then((res) => res.data),
  });

export default useCast;

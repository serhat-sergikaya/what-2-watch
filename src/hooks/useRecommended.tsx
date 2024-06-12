import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { Media } from "./useMedia";

interface FetchRecomResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
}
interface RecomQuery {
  mediaId: number;
}
const useRecommended = (query: RecomQuery) => {
  return useQuery({
    queryKey: ["recommmended", query],
    queryFn: () =>
      apiClient
        .get<FetchRecomResponse<Media>>(
          `/movie/${query.mediaId}/recommendations`
        )
        .then((res) => res.data),
    keepPreviousData: true,
  });
};

export default useRecommended;

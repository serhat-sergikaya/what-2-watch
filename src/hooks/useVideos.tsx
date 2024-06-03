import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import useMediaQueryStore from "../store";

interface FetchVideosResponse<T> {
  id: number;
  results: T[];
}

interface Video {
  id: number;
  key: string;
}
const useVideos = (mediaId: number) => {
  const mediaQuery = useMediaQueryStore((s) => s.mediaQuery);

  const endpoint =
    mediaQuery.selectedMedia === "TV Shows"
      ? `/tv/${mediaId}/videos`
      : `/movie/${mediaId}/videos`;

  return useQuery({
    queryKey: ["videos", mediaId],
    queryFn: () =>
      apiClient
        .get<FetchVideosResponse<Video>>(endpoint)
        .then((res) => res.data),
  });
};

export default useVideos;

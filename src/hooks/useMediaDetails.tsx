import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { Media } from "./useMedia";
import useMediaQueryStore from "../store";

const useMediaDetails = (mediaId: string) => {
  const mediaQuery = useMediaQueryStore((s) => s.mediaQuery);

  const endpoint =
    mediaQuery.selectedMedia === "TV Shows"
      ? `/tv/${mediaId}`
      : `/movie/${mediaId}`;

  return useQuery<Media>({
    queryKey: ["mediadetails", mediaId],
    queryFn: () => apiClient.get(endpoint).then((res) => res.data),
  });
};

export default useMediaDetails;

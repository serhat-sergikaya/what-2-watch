import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { Media } from "./useMedia";

const useMediaDetails = (mediaId: string) =>
  useQuery<Media>({
    queryKey: ["mediadetails", mediaId],
    queryFn: () => apiClient.get(`/movie/${mediaId}`).then((res) => res.data),
  });

export default useMediaDetails;

import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";

interface FetchImagesResponse<T> {
  backdrops: T[];
}

interface Backdrop {
  id: number;
  file_path: string;
}
const useImages = (mediaId: number) =>
  useQuery<FetchImagesResponse<Backdrop>>({
    queryKey: ["images", mediaId],
    queryFn: () =>
      apiClient
        .get<FetchImagesResponse<Backdrop>>(`movie/${mediaId}/images`)
        .then((res) => res.data),
  });

export default useImages;

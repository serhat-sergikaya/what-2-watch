import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { Media } from "./useMedia";

interface PersonCreditsResponse<T> {
  cast: T[];
}

const useCombinedCredits = (personId: number) =>
  useQuery<PersonCreditsResponse<Media>>({
    queryKey: ["credits", personId],
    queryFn: () =>
      apiClient
        .get<PersonCreditsResponse<Media>>(
          `/person/${personId}/combined_credits`
        )
        .then((res) => res.data),
  });

export default useCombinedCredits;

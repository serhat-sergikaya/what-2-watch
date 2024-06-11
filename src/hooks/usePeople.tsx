import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";

export interface Person {
  id: number;
  name: string;
  biography: string;
  profile_path: string;
  birthday: string;
  gender: number;
  place_of_birth: string;
  known_for_department: string;
}

const usePeople = (personId: string) =>
  useQuery({
    queryKey: ["people", personId],
    queryFn: () =>
      apiClient.get<Person>(`/person/${personId}`).then((res) => res.data),
  });

export default usePeople;

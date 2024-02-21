import { getData } from "@/api/data";
import { useQuery } from "@tanstack/react-query";

export default function useFetchIntroductionData() {
  return useQuery({
    queryKey: ["introData"],
    queryFn: getData,
  })
}
import { getIntroData } from "@/api/introduction/data";
import { useQuery } from "@tanstack/react-query";

export default function useFetchIntroductionData() {
  return useQuery({
    queryKey: ["introData"],
    queryFn: getIntroData,
  })
}
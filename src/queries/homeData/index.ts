import { getHomeData } from "@/api/home/data";
import { useQuery } from "@tanstack/react-query";

export default function useFetchHomeData() {
  return useQuery({
    queryKey: ["homeData"],
    queryFn: getHomeData,
  })
}
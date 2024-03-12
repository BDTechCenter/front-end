import api from "../../../services/api"
import { useQuery } from "@tanstack/react-query"
import { ContentNews } from "@/api/types/news/type"


async function getNews() {
  const { data } = await api.get<ContentNews>("news/preview")
  return data
}

function useFetchGetNews() {
  return useQuery<ContentNews, Error>({ queryKey: ['news'], queryFn: getNews })
}

export default useFetchGetNews
import api from "../../../services/api"
import { QueryFunctionContext, useQuery } from "@tanstack/react-query"
import { ContentNews, News } from "@/api/types/news/type"


async function getNews() {
  const { data } = await api.get<ContentNews>("news/preview")
  return data
}

export function useFetchGetNews() {
  return useQuery<ContentNews, Error>({ queryKey: ['news'], queryFn: getNews })
}

async function getIdNews(ctx: QueryFunctionContext) {
  const [, id] = ctx.queryKey
  const { data } = await api.get<News>(`news/${id}`)
  console.log(data)
  return data
}

export function useFetchGetNewsId(id: string){
  return useQuery<News, Error>({queryKey: ['newsRead', id], queryFn: getIdNews})

}



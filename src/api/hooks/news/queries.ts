import api from "../../../services/api"
import { QueryFunctionContext, useMutation, useQuery } from "@tanstack/react-query"
import { ContentComment, ContentNews, News, UpvoteNews } from "@/api/types/news/type"

async function getNews(ctx: QueryFunctionContext) {
  const [, page] = ctx.queryKey
  const { data } = await api.get<ContentNews>(`news/preview?sortBy=latest${page}`)
  return data
}
async function getNewsFilter(ctx: QueryFunctionContext) {
  const [tags, page] = ctx.queryKey
  const { data } = await api.get<ContentNews>(`news?tags=${tags}${page}`)
  return data
}
export function useFetchGetNews(tags?: string, page?: string) {
  return useQuery<ContentNews, Error>({ queryKey: [tags, page], queryFn: tags ? getNewsFilter : getNews })
}



async function getIdNews(ctx: QueryFunctionContext) {
  const [, id] = ctx.queryKey
  const { data } = await api.get<News>(`news/${id}`)
  return data
}
export function useFetchGetNewsId(id: string) {
  return useQuery<News, Error>({ queryKey: ['newsRead', id], queryFn: getIdNews })

}



async function getNewsOutherNews() {
  const { data } = await api.get<ContentNews>("news/preview?size=3&sortBy=relevance")
  return data
}
export function useFetchGetNewsOutherNews() {
  return useQuery<ContentNews, Error>({ queryKey: ['news'], queryFn: getNewsOutherNews })
}



async function getIdCommentNews(ctx: QueryFunctionContext) {
  const [, id] = ctx.queryKey
  const { data } = await api.get<ContentComment>(`comments/${id}`)
  return data
}
export function useFetchGetCommentNewsId(id: string) {
  return useQuery<ContentComment, Error>({ queryKey: ['comment', id], queryFn: getIdCommentNews })

}


async function postNewsUpvote({id, token}: UpvoteNews) {
	const { data } = await api.post<News>(`/news/${id}/upvote`, {
		headers: {
			"Authorization": `token ${token}`,
		},
	});

	return data;
}

export function useMutationPostNewsUpvote() {
	return useMutation({
		mutationFn: postNewsUpvote,
	});
}


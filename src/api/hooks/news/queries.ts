import api from "../../../services/api";
import {
	QueryFunctionContext,
	useMutation,
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import {
	ContentComment,
	ContentNews,
	News,
	NewsPost,
} from "@/api/types/news/type";

// NEWS
// GET News
async function getNews() {
	const { data } = await api.get<ContentNews>("news/preview");
	return data;
}

// GET News w/ Filter
async function getNewsFilter(ctx: QueryFunctionContext) {
	const [, tags] = ctx.queryKey;
	const { data } = await api.get<ContentNews>(`news?tags=${tags}`);
	return data;
}

export function useFetchGetNews(tags?: string) {
	return useQuery<ContentNews, Error>({
		queryKey: ["news", tags],
		queryFn: tags ? getNewsFilter : getNews,
	});
}

// GET News By ID
async function getIdNews(ctx: QueryFunctionContext) {
	const [, id] = ctx.queryKey;
	const { data } = await api.get<News>(`news/${id}`);
	return data;
}

export function useFetchGetNewsId(id: string) {
	return useQuery<News, Error>({
		queryKey: ["newsRead", id],
		queryFn: getIdNews,
	});
}

// GET Other News
async function getNewsOtherNews() {
	const { data } = await api.get<ContentNews>("news/preview?size=3");
	return data;
}

export function useFetchGetNewsOtherNews() {
	return useQuery<ContentNews, Error>({
		queryKey: ["news"],
		queryFn: getNewsOtherNews,
	});
}

// POST A News
async function postNews(newsObject: FormData) {
	const { data } = await api.post<News>("news", newsObject, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});

	return data;
}

export function useMutationPostNews() {
	return useMutation({
		mutationFn: postNews,
	});
}

// Comments
// GET Comments By ID
async function getIdCommentNews(ctx: QueryFunctionContext) {
	const [, id] = ctx.queryKey;
	const { data } = await api.get<ContentComment>(`comments/${id}`);
	return data;
}

export function useFetchGetCommentNewsId(id: string) {
	return useQuery<ContentComment, Error>({
		queryKey: ["comment", id],
		queryFn: getIdCommentNews,
	});
}

// POST Comments
async function postComment({ comment, id }: { comment: {author: string, comment: string}; id: string }) {
	const { data } = await api.post(`comments/${id}`, comment);

	return data;
}

export function useMutationPostComment() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: postComment,
		onSuccess: (data, variables) => {
			queryClient.setQueryData(["comment", { id: variables.id }], data);
		},
	});
}

async function patchNewsUpvote(ctx: QueryFunctionContext) {
	const [id, token] = ctx.queryKey;
	const { data } = await api.get(`/news/${id}/upvote`);

	return data;
}

export function useMutationPostNewsUpvote() {
	return useMutation({
		mutationFn: patchNewsUpvote,
	});
}

export async function patchNewseUpvote(id: string, token?: string) {
	api.defaults.headers.post["Authorization"] = `Bearer ${token}`;
	const { data } = await api.post(`news/${id}/upvote`);

	return data;
}

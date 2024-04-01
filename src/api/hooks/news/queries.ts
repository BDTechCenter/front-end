import api from "../../../services/api";
import {
	QueryFunctionContext,
	useMutation,
	useQuery,
} from "@tanstack/react-query";
import {
	ContentComment,
	ContentNews,
	News,
	UpvoteNews,
	CommentPostType
} from "@/api/types/news/type";
import { headers } from "next/headers";

const hostURL = process.env.NEXT_PUBLIC_API_HOST;

async function getNews(ctx: QueryFunctionContext) {
	const [, page] = ctx.queryKey;
	const { data } = await api.get<ContentNews>(
		`news/preview?sortBy=latest${page}`
	);
	return data;
}

// GET News w/ Filter
async function getNewsFilter(ctx: QueryFunctionContext) {
	const [tags, page] = ctx.queryKey;
	const { data } = await api.get<ContentNews>(`news?tags=${tags}${page}`);
	return data;
}
export function useFetchGetNews(tags?: string, page?: string) {
	return useQuery<ContentNews, Error>({
		queryKey: [tags, page],
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
	const { data } = await api.get<ContentNews>(
		"news/preview?size=3&sortBy=relevance"
	);
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
			Accept: "multipart/form-data",
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

export async function patchNewsUpvote(id: string, token?: string) {
	const { data } = await api.get(`news/${id}/upvote`, {
		headers: {
			"Autorization": `Bearer kk`
		}
	});

	return data
}

// export async function patchNewsUpvote(ctx: QueryFunctionContext) {
// 	const [id, token] = ctx.queryKey
// 	const { data } = await api.get(`news/${id}/upvote`, {
// 		headers: {
// 			"Autorization": `Bearer ${token}`
// 		}
// 	});

// 	return data
// }

// export function useFetchNewsUpvote(id: string, token?: string) {
// 	return useQuery({
// 		queryKey: [ id, token],
// 		queryFn: patchNewsUpvote,
// 	});
// }


// POST Comments
async function postComment({ comment, id }: { comment: CommentPostType; id: string }) {
	const { data } = await api.post(`comments/${id}`, comment);

	return data;
}

export function useMutationPostComment() {
	return useMutation({
		mutationFn: postComment,
	});
}

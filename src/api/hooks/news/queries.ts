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

export async function getNewsUpvote(id: string, token?: string) {
	api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	const { data } = await api.get(`news/${id}/upvote/${token}`);
	return data;
}

export async function patchNewsUpvote(id: string, token?: string) {
	api.defaults.headers.post['Authorization'] = `Bearer ${token}`;
	const { data } = await api.post(`news/${id}/upvote`);
	
	return data
}

export async function patchNewsUpvoteF(id: string, token?: string) {
	var headers = new Headers();
	headers.append('Access-Control-Allow-Origin', '*')
	headers.append('Accept', 'application/json')
	headers.append('Content-Type', 'application/json')
	headers.append('Authorization', `Bearer ${token}`)

	const response = await fetch(`${hostURL}/tech-news/news/${id}/upvote`, {
		method: 'POST',
		headers: headers,
	}).catch(err => console.error(err))

	console.log(response);
}


// export function useFetchNewsUpvote(id: string, token?: string) {
// 	return useQuery<News, Error>({
// 		queryKey: [ id, token],
// 		queryFn: postNewsUpvote,
// 	});
// }


// POST Comments
async function postComment({ comment, id }: { comment: FormData; id: string }) {
	const { data } = await api.post(`comments/${id}`, comment, {
		headers: {
			Accept: "multipart/form-data",
			"Content-Type": "multipart/form-data",
		},
	});

	return data;
}

export function useMutationPostComment() {
	return useMutation({
		mutationFn: postComment,
	});
}

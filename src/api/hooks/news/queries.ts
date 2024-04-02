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
import Error from "next/error";
import filter from "@/services/filter";

// News
// GET news preview
async function getNews(ctx: QueryFunctionContext) {
	const [, page] = ctx.queryKey;
	const { data } = await api.get<ContentNews>(
		`news/preview?sortBy=latest${page}`
	);
	return data;
}

// GET News w/ Filter
async function getNewsFilter(ctx: QueryFunctionContext) {
	const [tags, page, title] = ctx.queryKey;
	const url = filter({tags, page, title})
	const { data } = await api.get<ContentNews>(`news${tags}${page}${title}`);
	return data;
}
export function useFetchGetNews(tags?: string, title?:string, page?: string) {
	return useQuery<ContentNews, Error>({
		queryKey: [tags, page, title],
		queryFn: tags || title ? getNewsFilter : getNews,
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
//Upvote
//PATCH News
export async function patchNewsUpvote(patchUpvote: UpvoteNews) {
	api.defaults.headers["Authorization"] = `Bearer ${patchUpvote.token}`
	const { data } = await api.patch(`news/${patchUpvote.id}/upvote`)
	return data
}

export function useMutationPatchNewsUpvote() {
	return useMutation({
		mutationFn: patchNewsUpvote,
	});
}

//PATCH Comment
export async function patchCommentUpvote(patchUpvote: UpvoteNews) {
	api.defaults.headers["Authorization"] = `Bearer ${patchUpvote.token}`
	const { data } = await api.patch(`comments/${patchUpvote.id}/upvote`)
	return data
}

export function useMutationPatchCommentUpvote() {
	return useMutation({
		mutationFn: patchCommentUpvote,
	});
}



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

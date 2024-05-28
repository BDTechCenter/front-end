import {
	QueryFunctionContext,
	useInfiniteQuery,
	useMutation,
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import Error from "next/error";
import toast from "react-hot-toast";
import {
	Article,
	CommentPostType,
	CommentType,
	ContentArticles,
	ContentComment,
	UpvoteArticle,
} from "@/api/types/article/type";
import { usefilter } from "@/services/filter";
import { apiArticle as api } from "../../../services/api";

// Article
// GET Articles w/ Filter
async function getArticlesFilterScroll(ctx: QueryFunctionContext) {
	const [, tags, title] = ctx.queryKey;
	const pageParam = ctx.pageParam;
	const filterParam = usefilter({ filters: { tags, title } });

	const url = tags || title ? `${filterParam}` : undefined;
	const { data } = await api.get<ContentArticles>(`news/preview?size=9${url}`, {
		params: {
			page: pageParam,
		},
	});
	return data;
}

export function useFetchGetArticlesScroll(tags?: string, title?: string) {
	const queryKeyUpdt =
		tags || title ? ["articlesPreview", tags, title] : ["articlesPreview"];
	return useInfiniteQuery<ContentArticles, Error>({
		queryKey: queryKeyUpdt,
		queryFn: getArticlesFilterScroll,
		initialPageParam: 0,
		getNextPageParam: (lastPage) => {
			const nextPage = lastPage.last ? undefined : lastPage.number + 1;
			return nextPage;
		},
	});
}

// GET Article By ID
export async function getIdArticle(ctx: QueryFunctionContext) {
	const [, id] = ctx.queryKey;
	const { data } = await api.get<Article>(`news/${id}`);
	return data;
}

export function useFetchGetArticleId(id: string) {
	return useQuery<Article, Error>({
		queryKey: ["articlesRead", id],
		queryFn: getIdArticle,
	});
}

export function useFetchGetArticleIdRefetch(id: string) {
	return useQuery<Article, Error>({
		queryKey: ["articlesRead", id],
		queryFn: getIdArticle,
		enabled: false,
		refetchOnWindowFocus: false,
	});
}

// GET Other Article
async function getOtherArticles() {
	const { data } = await api.get<ContentArticles>(
		"news/preview?size=3&sortBy=relevance"
	);
	return data;
}

export function useFetchGetOtherArticles() {
	return useQuery<ContentArticles, Error>({
		queryKey: ["articles"],
		queryFn: getOtherArticles,
	});
}

// POST A Article
async function postArticle(articleObject: FormData) {
	const promise = api.post<Article>("news", articleObject, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});

	toast.promise(promise, {
		loading: "Adding Article",
		success: "Article added with success",
		error: (error) => {
			console.log(error);

			return error?.response?.data
				? `${error.status}:\n${error.response.data.message}`
				: `${error.message}`;
		},
	});

	return await promise;
}

export function useMutationPostArticle() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: postArticle,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["articlesPreview"],
				refetchType: "active",
			});
		},
	});
}

// Comments
// GET Comments By ID
async function getIdCommentArticle(ctx: QueryFunctionContext) {
	const [, id] = ctx.queryKey;
	const { data } = await api.get<ContentComment>(`comments/${id}`);
	return data.content;
}

export function useFetchGetCommentArticleId(id: string) {
	return useQuery<CommentType[], Error>({
		queryKey: ["comments", id],
		queryFn: getIdCommentArticle,
	});
}

//Upvote
//PATCH Article
export async function patchUpvote(patchUpvote: UpvoteArticle) {
	const promise = api.patch(`${patchUpvote.method}/${patchUpvote.id}/upvote`);

	return await promise;
}

export function useMutationPatchUpvote() {
	return useMutation({
		mutationFn: patchUpvote,
	});
}

// POST Comments
async function postComment({
	comment,
	id,
}: {
	comment: CommentPostType;
	id: string;
}) {
	const promise = api.post(`comments/${id}`, comment);

	toast.promise(promise, {
		loading: "Adding Comment",
		success: "Comment added with success",
		error: (error) => {
			console.log(error);

			return error?.response?.data
				? `${error.status}:\n${error.response.data.message}`
				: `${error.message}`;
		},
	});

	return await promise;
}

export function useMutationPostComment() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: postComment,
		onSuccess: (_, variables) => {
			queryClient.setQueryData(
				["comments", variables.id],
				(data: CommentType[]) => {
					return [...data, variables.comment];
				}
			);
		},
	});
}

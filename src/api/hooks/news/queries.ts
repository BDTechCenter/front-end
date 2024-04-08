import api from "../../../services/api";
import {
	QueryFunctionContext,
	useInfiniteQuery,
	useMutation,
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import {
	ContentComment,
	ContentNews,
	News,
	CommentPostType,
	UpvoteNews,
} from "@/api/types/news/type";
import Error from "next/error";
import {Usefilter} from "@/services/filter";
import toast from "react-hot-toast";

// News
// GET news preview
async function getNews() {
	const { data } = await api.get<ContentNews>(`news/preview?sortBy=latest`);
	return data;
}

// GET News w/ Filter
async function getNewsFilter(ctx: QueryFunctionContext) {
	const [tags, title] = ctx.queryKey;
	const url = Usefilter({ filters: { tags, title } });
	console.log(`news/preview${url}`);
	const { data } = await api.get<ContentNews>(`news/preview${url}`);
	return data;
}

export function useFetchGetNews(tags?: string, title?: string) {
	return useQuery<ContentNews, Error>({
		queryKey: ["newsPreview", tags, title],
		queryFn: tags || title ? getNewsFilter : getNews,
	});
}

async function getNewsFilterScroll(ctx: QueryFunctionContext) {
	const [, tags, title] = ctx.queryKey;
	const pageParam = ctx.pageParam;
	const filterParam = Usefilter({ filters: { tags, title } });

	const url = tags || title ? `&${filterParam}` : "";

	const { data } = await api.get<ContentNews>(`news/preview?size=9${url}`, {
		params: {
			page: pageParam,
		},
	});

	return data;
}

export function useFetchGetNewsScroll(tags?: string, title?: string) {
	return useInfiniteQuery<ContentNews, Error>({
		queryKey: ["newsPreview", tags, title],
		queryFn: getNewsFilterScroll,
		initialPageParam: 0,
		getNextPageParam: (lastPage) => {
			const nextPage = lastPage.last ? undefined : lastPage.number + 1;
			return nextPage;
		},
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
	const promise = api.post<News>("news", newsObject, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});

	toast.promise(promise, {
		loading: "Adding News",
		success: "News added with success",
		error: (error) => {
			console.log(error);

			return error.response.data
				? `${error.message}:\n${error.response.data.message}`
				: `${error.message}`;
		},
	});

	return await promise;
}

export function useMutationPostNews() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: postNews,
		onSuccess: (_, variables) => {
			queryClient.setQueryData(["news"], (data: any) => {
				return [...data, { newsObject: variables }];
			});
		},
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
	const queryClient = useQueryClient();

	return useQuery<ContentComment, Error>({
		queryKey: ["comments"],
		queryFn: getIdCommentNews,
	});
}

//Upvote
//PATCH News
export async function patchUpvote(patchUpvote: UpvoteNews) {
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
			return error.response.data
				? `${error.message}:\n${error.response.data.message}`
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
			queryClient.setQueryData(["comments"], (data: any) => {
				return [...data, { comment: variables.comment }];
			});
		},
	});
}

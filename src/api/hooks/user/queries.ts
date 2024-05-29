import {
	QueryFunctionContext,
	useMutation,
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ContentComment, ContentNews, News } from "@/api/types/news/type";
import { apiNews } from "@/services/api"
import { getIdNews } from "../news/queries";

// News
// GET user news
export async function getUserNews(ctx: QueryFunctionContext) {
	const [, status] = ctx.queryKey;
	const filter = status === undefined ? "published" : status;
	const { data } = await apiNews.get<ContentNews>(`news/me?sortBy=${filter}`);
	return data;
}

export function useFetchGetUserNews(status?: string) {
	return useQuery<ContentNews, Error>({
		queryKey: ["userNews", status],
		queryFn: getUserNews,
	});
}

// PATCH user news
async function patchNews({
	newsObject,
	id,
}: {
	newsObject: FormData;
	id: string;
}) {
	const promise = apiNews.patch<News>(`news/${id}`, newsObject);

	toast.promise(promise, {
		loading: "Updated news",
		success: "Updated news with success",
		error: (error) => {
			console.log(error);
			return error.response.data
				? `${error.message}:\n${error.response.data.message}`
				: `${error.message}`;
		},
	});

	return await promise;
}

export function useMutationPatchNews() {
	return useMutation({
		mutationFn: patchNews,
	});
}

// ARCHIVE user news

async function patchArchive(id: string) {
	const archive = apiNews.patch<News>(`news/${id}/archive`);

	toast.promise(archive, {
		loading: "Delete news",
		success: "Delete news with success",
		error: (error) => {
			console.log(error);
			return error.response.data
				? `${error.message}:\n${error.response.data.message}`
				: `${error.message}`;
		},
	});
	return await archive;
}

async function patchPublish(id: string) {
	const publish = apiNews.patch<News>(`news/${id}/publish`);

	toast.promise(publish, {
		loading: "Publish news",
		success: "Publish news with success",
		error: (error) => {
			console.log(error);
			return error.response.data
				? `${error.message}:\n${error.response.data.message}`
				: `${error.message}`;
		},
	});
	return await publish;
}

export function useMutationPatchArchive() {
	return useMutation({
		mutationFn: patchArchive,
	});
}

export function useMutationPatchPublish() {
	return useMutation({
		mutationFn: patchPublish,
	});
}

// News
// GET user comments

export async function getUserComments() {
	const { data } = await apiNews.get<ContentComment>(
		`comments/me`
	);
	return data;
}

export function useFetchGetUserComments(){
	return useQuery<ContentComment, Error>({
		queryKey: ["userComments"],
		queryFn: getUserComments
	})
}

async function patchDelete(id: number) {
	const deleteComment = apiNews.delete(`comments/${id}`);

	toast.promise(deleteComment, {
		loading: "Delete Comment",
		success: "Delete Comment with success",
		error: (error) => {
			console.log(id);
			return "Delete Comment Error";
		},
	});
	return await deleteComment;
}

export function useMutationPatchDelete() {
	return useMutation({
		mutationFn: patchDelete,
	});
}

import {
	QueryFunctionContext,
	useMutation,
	useQuery,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiArticle as api } from "@/services/api";
import {
	Article,
	ContentArticles,
	ContentComment,
} from "@/api/types/article/type";

// Article
// GET user articles
export async function getUserArticles(ctx: QueryFunctionContext) {
	const [, status] = ctx.queryKey;
	const filter = status === undefined ? "published" : status;
	const { data } = await api.get<ContentArticles>(`news/me?sortBy=${filter}`);
	return data;
}

export function useFetchGetUserArticles(status?: string) {
	return useQuery<ContentArticles, Error>({
		queryKey: ["userArticle", status],
		queryFn: getUserArticles,
	});
}

// PATCH user article
async function patchArticle({
	articleObject,
	id,
}: {
	articleObject: FormData;
	id: string;
}) {
	const promise = api.patch<Article>(`news/${id}`, articleObject);

	toast.promise(promise, {
		loading: "Updating article",
		success: "Updated article with success",
		error: (error) => {
			console.log(error);
			return error?.response?.data
				? `${error.status}:\n${error.response.data.message}`
				: `${error.message}`;
		},
	});

	return await promise;
}

export function useMutationPatchArticle() {
	return useMutation({
		mutationFn: patchArticle,
	});
}

// ARCHIVE user article
async function patchArchive(id: string) {
	const archive = api.patch<Article>(`news/${id}/archive`);

	toast.promise(archive, {
		loading: "Deleting article",
		success: "Article deleted with success",
		error: (error) => {
			console.log(error);
			return error?.response?.data
				? `${error.status}:\n${error.response.data.message}`
				: `${error.message}`;
		},
	});
	return await archive;
}

async function patchPublish(id: string) {
	const publish = api.patch<Article>(`news/${id}/publish`);

	toast.promise(publish, {
		loading: "Publishing article",
		success: "Article published with success",
		error: (error) => {
			console.log(error);
			return error?.response?.data
				? `${error.status}:\n${error.response.data.message}`
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

// Article
// GET user comments
export async function getUserComments() {
	const { data } = await api.get<ContentComment>(`comments/me`);
	return data;
}

export function useFetchGetUserComments() {
	return useQuery<ContentComment, Error>({
		queryKey: ["userComments"],
		queryFn: getUserComments,
	});
}

async function patchDelete(id: number) {
	const deleteComment = api.delete(`comments/${id}`);

	toast.promise(deleteComment, {
		loading: "Deleting Comment",
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

import { ContentComment, ContentNews, News } from "@/api/types/news/type";
import api from "@/services/api";
import {
	QueryFunctionContext,
	useMutation,
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import { title } from "process";
import toast from "react-hot-toast";
import { getIdNews } from "../news/queries";

// News
// GET user news
export async function getUserNews(ctx: QueryFunctionContext) {
	const [, status] = ctx.queryKey;
	const filter = status === undefined ? "published" : status;
	const { data } = await api.get<ContentNews>(`news/author?sortBy=${filter}`);
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
	const promise = api.patch<News>(`news/${id}`, newsObject);

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
	const archive = api.patch<News>(`news/${id}/archive`);

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
	const publish = api.patch<News>(`news/${id}/publish`);

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
	const { data } = await api.get<ContentComment>(
		`comments/author`
	);
	return data;
}

export function useFetchGetUserComments(){
	return useQuery<ContentComment, Error>({
		queryKey: ["userComments"],
		queryFn: getUserComments
	})
}

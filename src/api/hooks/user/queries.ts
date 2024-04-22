import { ContentNews, News } from "@/api/types/news/type";
import api from "@/services/api";
import { QueryFunctionContext, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { title } from "process";
import toast from "react-hot-toast";
import { getIdNews } from "../news/queries";

// News
// GET user news
async function getUserNews(ctx: QueryFunctionContext) {
	const [, status] = ctx.queryKey;
	console.log(`news/author?sortBy=${status}`)
	const { data } = await api.get<ContentNews>(`news/author?sortBy=${status}`);
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
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: patchNews,
		onSuccess: (_, variables) => {
			queryClient.fetchQuery({queryKey: ["newsRead", variables.id], queryFn:  getIdNews})
			queryClient.fetchQuery({queryKey: ["userNews"], queryFn: getUserNews })
		},
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

	console.log(archive);
	return await archive;
}

export function useMutationPatchArchive() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: patchArchive,
		onSuccess: (_, variables) => {
			queryClient.fetchQuery({queryKey: ["userNews"], queryFn: getUserNews })
		},
	});
}

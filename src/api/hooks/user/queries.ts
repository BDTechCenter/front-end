import { ContentNews, News } from "@/api/types/news/type";
import api from "@/services/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

// News
// GET user news
async function getUserNews() {
	const { data } = await api.get<ContentNews>(`news/author?sortBy=published`);
	console.log(data)
	return data;
}

export function useFetchGetUserNews() {
	return useQuery<ContentNews, Error>({
		queryKey: ["news"],
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
			queryClient.setQueryData(
				["updateNews", variables.id],
				(data: News[]) => {
					console.log(data)
				}
			);
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

	console.log(archive)
	return await archive;
}

export function useMutationPatchArchive() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: patchArchive,
		onSuccess: (_, variables) => {
			queryClient.setQueryData(
				["archiveNews", variables],
				(data: News[]) => {
					console.log(data)
				}
			);
		},
	});
}
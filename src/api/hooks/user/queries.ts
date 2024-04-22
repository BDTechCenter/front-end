import { ContentNews, News } from "@/api/types/news/type";
import api from "@/services/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { title } from "process";
import toast from "react-hot-toast";

// News
// GET user news
async function getUserNews() {
	const { data } = await api.get<ContentNews>(`news/author?sortBy=published`);
	console.log(data);
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
			queryClient.setQueryData(["newsRead", variables.id], (data: News) => {
				const newsEdited: any = {};
				variables.newsObject.forEach((value, key) => (newsEdited[key] = value));
				const newData = { ...data, ...newsEdited };

				return [newData];
			});
			queryClient.setQueryData(["news"], (data: ContentNews) => {
				const updatedNews = data.content.map((news) => {
					if (news.id === variables.newsObject.get("id")) {
						const updatedTitle = variables.newsObject.get("title");
						if (updatedTitle) {
							return { ...news, title: updatedTitle };
						}
					}
					return news;
				});
				return updatedNews;
			});
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
			queryClient.setQueryData(["news"], (data: ContentNews) => {
				const filteredContent = data.content.filter(
					(item) => item.id !== variables
				);
				const filteredData = { ...data, content: filteredContent };
				return filteredData;
			});
		},
	});
}

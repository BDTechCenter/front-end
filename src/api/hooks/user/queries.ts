import { useQuery } from "@tanstack/react-query";
import { ContentNews } from "@/api/types/news/type";
import api from "@/services/api";

// News
// GET user news
async function getUserNews() {
	const { data } = await api.get<ContentNews>(`news/author`);
	return data;
}

export function useFetchGetUserNews() {
	return useQuery<ContentNews, Error>({
		queryKey: ["news"],
		queryFn: getUserNews,
	});
}

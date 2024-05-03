import { useQuery } from "@tanstack/react-query";
import { ContentNews } from "@/api/types/news/type";
import { apiNews } from "@/services/api";

// News
// GET user news
async function getUserNews() {
	const { data } = await apiNews.get<ContentNews>(`news/author`);
	return data;
}

export function useFetchGetUserNews() {
	return useQuery<ContentNews, Error>({
		queryKey: ["news"],
		queryFn: getUserNews,
	});
}

import { useQuery } from "@tanstack/react-query";
import { ContentArticles } from "@/api/types/article/type";
import { apiArticle } from "../../../services/api";

async function getMainArticles() {
	const SIZE = 3;
	const { data } = await apiArticle.get<ContentArticles>(
		`news/preview?sortBy=view&size=${SIZE}`
	);

	return data;
}

export function useFetchGetMainArticles() {
	return useQuery<ContentArticles, Error>({
		queryKey: ["articles"],
		queryFn: getMainArticles,
	});
}

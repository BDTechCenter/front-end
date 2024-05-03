import { useQuery } from "@tanstack/react-query";
import { ContentNews } from "@/api/types/news/type";
import { apiNews } from "../../../services/api";

async function getMainNews() {
	const SIZE = 3;
	const { data } = await apiNews.get<ContentNews>(
		`news/preview?sortBy=view&size=${SIZE}`
	);

	return data;
}

export function useFetchGetMainNews() {
	return useQuery<ContentNews, Error>({
		queryKey: ["news"],
		queryFn: getMainNews,
	});
}

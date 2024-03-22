import api from "../../../services/api";
import { useQuery } from "@tanstack/react-query";
import { ContentNews } from "@/api/types/news/type";

async function getMainNews() {
	const SIZE = 3;
	const { data } = await api.get<ContentNews>(
		`news/preview?sortByView=true&size=${SIZE}`
	);

	return data;
}

export function useFetchGetMainNews() {
	return useQuery<ContentNews, Error>({
		queryKey: ["news"],
		queryFn: getMainNews,
	});
}

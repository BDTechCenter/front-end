import { useQuery } from "@tanstack/react-query";
import {
	Item,
	Quadrant,
} from "@/api/types/radar";
import { apiRadar } from "@/services/api";

async function getQuadrants() {
	const { data } = await apiRadar.get<Quadrant[]>("quadrants");

	return data;
}

export function useFetchGetQuadrants() {
	return useQuery<Quadrant[], Error>({
		queryKey: ["quadrants"],
		queryFn: getQuadrants,
	});
}

async function getItemsRadar() {
	const { data } = await apiRadar.get<Item[]>("items");

	return data;
}

export function useFetchGetItemsRadar() {
	return useQuery<Item[], Error>({
		queryKey: ["itemsQuadrant"],
		queryFn: getItemsRadar,
	});
}

import {
	QueryFunctionContext,
	useMutation,
	useQuery,
} from "@tanstack/react-query";
import { Item, ItemDetails, Quadrant, QuadrantItems } from "@/api/types/radar";
import { apiRadar } from "@/services/api";
import { ItemRadarValues } from "@/api/types/all/type";

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

async function getRadarItemDetail(ctx: QueryFunctionContext) {
	const [, id] = ctx.queryKey;
	const { data } = await apiRadar.get<ItemDetails>(`items/${id}`);

	return data;
}

export function useFetchGetRadarItemDetail(id: string) {
	return useQuery<ItemDetails, Error>({
		queryKey: ["radarItem", id],
		queryFn: getRadarItemDetail,
	});
}

async function getRadarQuadrantItem(ctx: QueryFunctionContext) {
	const [, id] = ctx.queryKey;
	const { data } = await apiRadar.get<QuadrantItems>(`quadrants/${id}`);

	return data;
}

export function useFetchGetRadarQuadrantItem(id: string) {
	return useQuery<QuadrantItems, Error>({
		queryKey: ["quadrantItems", id],
		queryFn: getRadarQuadrantItem,
	});
}

async function postItemRadar(item: FormData) {
	const { data } = await apiRadar.post<ItemRadarValues>("items", item);

	return data;
}

export function useMutateItemsRadar() {
	return useMutation({
		mutationFn: postItemRadar,
	});
}

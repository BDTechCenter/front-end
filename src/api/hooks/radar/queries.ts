import {
	QueryFunctionContext,
	useMutation,
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Item, ItemDetails, ItemObj, Quadrant, QuadrantItems } from "@/api/types/radar";
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

async function postItemRadar(item: ItemObj) {
	const promise = apiRadar.post<ItemDetails>("items", item);

	toast.promise(promise, {
		loading: "Adding tech",
		success: "Tech added with success",
		error: (error) => {
			console.log(error);

			return error.response.data
				? `${error.message}:\n${error.response.data.message}`
				: `${error.message}`;
		},
	});

	return await promise;
}

export function useMutateItemsRadar() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: postItemRadar,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["itemsQuadrant"],
				refetchType: "active",
			});
		},
	});
}

import {
	QueryFunctionContext,
	useMutation,
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
	Item,
	ItemDetails,
	ItemObj,
	Quadrant,
	QuadrantItems,
} from "@/api/types/radar";
import { apiRadar as api } from "@/services/api";

async function getQuadrants() {
	const { data } = await api.get<Quadrant[]>("quadrants");

	return data;
}

export function useFetchGetQuadrants() {
	return useQuery<Quadrant[], Error>({
		queryKey: ["quadrants"],
		queryFn: getQuadrants,
	});
}

async function getItemsRadar() {
	const { data } = await api.get<Item[]>("items");

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
	const { data } = await api.get<ItemDetails>(`items/${id}`);

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
	const { data } = await api.get<QuadrantItems>(`quadrants/${id}`);

	return data;
}

export function useFetchGetRadarQuadrantItem(id: string) {
	return useQuery<QuadrantItems, Error>({
		queryKey: ["quadrantItems", id],
		queryFn: getRadarQuadrantItem,
	});
}

async function postItemRadar(item: ItemObj) {
	const promise = api.post<ItemDetails>("items", item);

	toast.promise(promise, {
		loading: "Adding tech",
		success: "Tech added with success",
		error: (error) => {
			console.log(error);

			return error?.response?.data
				? `${error.status}:\n${error.response.data.message}`
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

async function patchItemRadar({ item, id }: { item: ItemObj; id: string }) {
	const promise = api.patch<ItemDetails>(`items/${id}`, item);

	toast.promise(promise, {
		loading: "Updating tech",
		success: "Tech updated with success",
		error: (error) => {
			console.log(error);

			return error?.response?.data
				? `${error.status}:\n${error.response.data.message}`
				: `${error.message}`;
		},
	});

	return await promise;
}

export function useMutatePatchItemRadar() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: patchItemRadar,
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({
				queryKey: ["radarItem", variables.id],
				refetchType: "active",
			});
		},
	});
}

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TechRadarConfigData, TechRadarData } from "@/api/types/radar";

//techradar.free.beeceptor.com/radar/config

async function getRadarConfig() {
	const { data } = await axios.get<TechRadarConfigData>(
		"http://localhost:7777/config"
	);

	return data;
}

export function useFetchGetRadarConfig() {
	return useQuery<TechRadarConfigData, Error>({
		queryKey: ["radarConfig"],
		queryFn: getRadarConfig,
	});
}

async function getRadarOpinion() {
	const { data } = await axios.get<TechRadarData>(
		"http://localhost:7777/opinion"
	);

	return data;
}

export function useFetchGetRadarOpinion() {
	return useQuery<TechRadarData, Error>({
		queryKey: ["radarOpinion"],
		queryFn: getRadarOpinion,
	});
}

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TechRadarConfigData, TechRadarData } from "@/api/types/radar";

//techradar.free.beeceptor.com/radar/config

async function getRadarConfig() {
	const { data } = await axios.get<TechRadarConfigData>(
		"https://techradar.free.beeceptor.com/radar/config"
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
		"https://techradar.free.beeceptor.com/radar/opinion"
	);

	return data;
}

export function useFetchGetRadarOpinion() {
	return useQuery<TechRadarData, Error>({
		queryKey: ["radarOpinion"],
		queryFn: getRadarOpinion,
	});
}

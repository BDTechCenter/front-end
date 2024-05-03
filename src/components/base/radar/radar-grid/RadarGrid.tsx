"use client"

import { useFetchGetQuadrants } from "@/api/hooks/radar/queries";
import RadarChart from "../chart/RadarChart";
import LoadingIndicator from "../../common/LoadingIndicator";

export default function RadarGrid() {
	const { data, isLoading } = useFetchGetQuadrants();

	return (
		<div className="bg-bddarkgray">
			{data && <RadarChart quadrants={data} />}
			{isLoading && <LoadingIndicator dark className="m-auto h-full" />}
		</div>
	);
}

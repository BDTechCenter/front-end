"use client";

import { useFetchGetQuadrants } from "@/api/hooks/radar/queries";
import { cn } from "@/lib/utils";
import RadarChart from "../chart/RadarChart";
import ImageError from "../../common/ImageError";
import { stylesMap } from "../utils";
import RadarSkeleton from "../../skeleton/RadarSkeleton";

export default function RadarGrid() {
	const { data, isLoading, isError } = useFetchGetQuadrants();

	if (isError) {
		return (
			<div className="flex w-full h-full min-h-screen items-center justify-center">
				<ImageError data={errorRadar.notFound} />
			</div>
		);
	}

	return (
		<div className="bg-bddarkgray min-h-screen py-10">
			{data && (
				<div className="relative w-full">
					<RadarChart quadrants={data} />
					{data.map((item, i) => (
						<div
							key={i}
							className={cn(
								"absolute w-1/4 flex flex-col gap-2 px-5 2xl:px-[15%] 2xl:w-1/2",
								stylesMap[item.position - 1]
							)}
						>
							<h1 className="text-background text-xl font-semibold">
								{item.title}
							</h1>
							<hr style={{ borderColor: item.color }} />
							<p className="text-background/70 text-justify">
								{item.description}
							</p>
						</div>
					))}
				</div>
			)}
			{isLoading && <RadarSkeleton />}
		</div>
	);
}

const errorRadar = {
	notFound: {
		text: "Radar not found",
		img: "/allError.gif",
	},

	error: {
		text: "Error news",
		img: "/allError.gif",
	},
};

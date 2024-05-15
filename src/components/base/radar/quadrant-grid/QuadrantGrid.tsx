"use client";

import { Group } from "@/api/types/radar";
import {
	useFetchGetItemsRadar,
	useFetchGetQuadrants,
} from "@/api/hooks/radar/queries";
import { QuadrantSection } from "./QuadrantSection";
import { groupByQuadrants } from "../utils";

const renderQuadrant = (
	quadrantName: string,
	quadrantId: string,
	groups: Group
) => {
	return (
		<div
			key={quadrantName}
			className="flex flex-wrap justify-between flex-[2_2_50%] mb-10 max-lg:basis-full"
		>
			<QuadrantSection
				quadrantTitle={quadrantName}
				quadrantId={quadrantId}
				groups={groups}
			/>
		</div>
	);
};

export default function QuadrantGrid() {
	const { data: quadrants } = useFetchGetQuadrants();
	const { data: items } = useFetchGetItemsRadar();

	if (quadrants && items) {
		const groups = groupByQuadrants(items);

		return (
			<div className="flex flex-wrap justify-between mx-40 my-10">
				{quadrants?.map((quadrant) =>
					renderQuadrant(quadrant.title, quadrant.id, groups)
				)}
			</div>
		);
	}
}

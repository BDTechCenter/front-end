"use client";

import { usePathname } from "next/navigation";
import { useFetchGetRadarQuadrantItem } from "@/api/hooks/radar/queries";
import { chartRings } from "@/services/radarConstants";
import { groupByQuadrants } from "../utils";
import { renderRing } from "../quadrant-grid/QuadrantSection";

export default function ItemSidebar() {
	const path = usePathname();
	const quadrantId = path.split("/")[2];

	const { data } = useFetchGetRadarQuadrantItem(quadrantId);

	if (data) {
		const groups = groupByQuadrants(data.items);

		return (
			<aside className="flex flex-col py-7 bg-bddarkgray min-h-screen w-full max-w-[20%]">
				<div className="flex flex-col gap-7 mx-auto">
					<div>
						<h1 className="text-2xl font-semibold text-background">
							{data.title}
						</h1>
					</div>
					<div className="flex flex-col gap-5">
						{chartRings.map((ringName: string) =>
							renderRing(ringName, quadrantId, groups, false, true)
						)}
					</div>
				</div>
			</aside>
		);
	}
}

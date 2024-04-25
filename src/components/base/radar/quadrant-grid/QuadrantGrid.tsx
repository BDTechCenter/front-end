import {
	ConfigData,
	Group,
	Item,
	TechRadarConfigData,
} from "@/api/types/radar";
import QuadrantSection from "./QuadrantSection";
import { groupByQuadrants } from "../utils";

const renderQuadrant = (
	quadrantName: string,
	groups: Group,
	config: TechRadarConfigData
) => {
	return (
		<div
			key={quadrantName}
			className="flex flex-wrap justify-between flex-[2_2_45%] mb-10 max-lg:basis-full"
		>
			<QuadrantSection
				quadrantName={quadrantName}
				groups={groups}
				config={config}
			/>
		</div>
	);
};

export default function QuadrantGrid({
	items,
	config,
}: {
	items: Item[];
	config: ConfigData;
}) {
	const groups = groupByQuadrants(items);
	return (
		<div className="flex flex-wrap justify-between">
			{Object.keys(config.quadrants).map((quadrantName: string) =>
				renderQuadrant(quadrantName, groups, config)
			)}
		</div>
	);
}

import { ConfigData, Item } from "@/api/types/radar";
import RadarChart from "../chart/RadarChart";

export default function RadarGrid({
	items,
	config,
}: {
	items: Item[];
	config: ConfigData;
}) {
	return (
		<div>
			<RadarChart items={items} config={config} />
		</div>
	);
}

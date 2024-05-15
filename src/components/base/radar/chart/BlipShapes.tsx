import { Blip } from "@/api/types/radar";
import { chartConfig } from "@/services/radarConstants";

interface VisualBlipProps {
	className: string;
	fill: string;
	"data-tooltip-id": string;
	tooltipbg: string;
	tooltiptxtcolor: string;
	"data-tooltip-content": string;
	key: number;
}

export function ChangedBlip({
	blip,
	...props
}: { blip: Blip } & VisualBlipProps) {
	const centeredX = blip.coordinates.x - chartConfig.blipSize / 2,
		centeredY = blip.coordinates.y - chartConfig.blipSize / 2;

	return (
		<rect
			transform={`rotate(-45 ${centeredX} ${centeredY})`}
			x={centeredX}
			y={centeredY}
			width={chartConfig.blipSize}
			height={chartConfig.blipSize}
			rx="3"
			{...props}
		/>
	);
}

export function NewBlip({ blip, ...props }: { blip: Blip } & VisualBlipProps) {
	const centeredX = blip.coordinates.x - chartConfig.blipSize / 2,
		centeredY = blip.coordinates.y - chartConfig.blipSize / 2;

	return (
		<path
			transform={`translate(${centeredX}, ${centeredY})`}
			d="M.247 10.212l5.02-8.697a2 2 0 013.465 0l5.021 8.697a2 2 0 01-1.732 3H1.98a2 2 0 01-1.732-3z"
			{...props}
		/>
	);
}

export function DefaultBlip({
	blip,
	...props
}: { blip: Blip } & VisualBlipProps) {
	return (
		<circle
			r={chartConfig.blipSize / 2}
			cx={blip.coordinates.x}
			cy={blip.coordinates.y}
			{...props}
		/>
	);
}

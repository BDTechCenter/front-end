import * as d3 from "d3";
import { useTranslation } from "react-i18next";
import { ConfigData, Item } from "@/api/types/radar";
import { XAxis, YAxis } from "./Axes";
import QuadrantRings from "./QuarantRings";
import BlipPoints from "./BlipPoints";

function RingLabel({
	ring,
	xScale,
	yScale,
	config,
}: {
	ring: string;
	xScale: d3.ScaleLinear<number, number>;
	yScale: d3.ScaleLinear<number, number>;
	config: ConfigData;
}) {
	const ringIndex = config.rings.findIndex((r) => r === ring);

	const ringRadius = config.chartConfig.ringsAttributes[ringIndex].radius,
		previousRingRadius =
			ringIndex === 0
				? 0
				: config.chartConfig.ringsAttributes[ringIndex - 1].radius,
		// middle point in between two ring arcs
		distanceFromCentre =
			previousRingRadius + (ringRadius - previousRingRadius) / 2;

	const { t } = useTranslation();

	return (
		<g className="uppercase text-xs font-bold">
			{/* Right hand-side label */}
			<text
				x={xScale(distanceFromCentre)}
				y={yScale(0)}
				textAnchor="middle"
				dy=".35em"
			>
				{t(`rings.${ring}`)}
			</text>
			{/* Left hand-side label */}
			<text
				x={xScale(-distanceFromCentre)}
				y={yScale(0)}
				textAnchor="middle"
				dy=".35em"
			>
				{t(`rings.${ring}`)}
			</text>
		</g>
	);
}

export default function RadarChart({
	items,
	config,
}: {
	items: Item[];
	config: ConfigData;
}) {
	const xScale = d3
		.scaleLinear()
		.domain(config.chartConfig.scale)
		.range([0, config.chartConfig.size]);
	const yScale = d3
		.scaleLinear()
		.domain(config.chartConfig.scale)
		.range([config.chartConfig.size, 0]);

	return (
		<div
			className="fill-white text-xs text-center relative my-0 mx-auto"
			style={{ maxWidth: `${config.chartConfig.size}px` }}
		>
			<svg
				viewBox={`0 0 ${config.chartConfig.size} ${config.chartConfig.size + 100}`}
			>
				<g transform={`translate(${xScale(0)}, 0)`}>
					<YAxis scale={yScale} />
				</g>
				<g transform={`translate(0, ${yScale(0)})`}>
					<XAxis scale={xScale} />
				</g>

				{Object.values(config.quadrantsMap).map((value, index) => (
					<QuadrantRings
						key={index}
						quadrant={value}
						xScale={xScale}
						config={config}
					/>
				))}

				{Array.from(config.rings).map((ring: string, index) => (
					<RingLabel
						key={index}
						ring={ring}
						xScale={xScale}
						yScale={yScale}
						config={config}
					/>
				))}

				<BlipPoints
					items={items}
					xScale={xScale}
					yScale={yScale}
					config={config}
				/>
			</svg>
		</div>
	);
}

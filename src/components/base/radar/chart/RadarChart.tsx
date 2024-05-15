import * as d3 from "d3";
import { Tooltip } from "react-tooltip";

import { Quadrant } from "@/api/types/radar";
import { chartConfig, chartRings } from "@/services/radarConstants";
import { XAxis, YAxis } from "./Axes";
import QuadrantRings from "./QuarantRings";
import BlipPoints from "./BlipPoints";

function RingLabel({
	ring,
	xScale,
	yScale,
}: {
	ring: string;
	xScale: d3.ScaleLinear<number, number>;
	yScale: d3.ScaleLinear<number, number>;
}) {
	const ringIndex = chartRings.findIndex((r) => r === ring);

	const ringRadius = chartConfig.ringsAttributes[ringIndex].radius,
		previousRingRadius =
			ringIndex === 0 ? 0 : chartConfig.ringsAttributes[ringIndex - 1].radius,
		// middle point in between two ring arcs
		distanceFromCentre =
			previousRingRadius + (ringRadius - previousRingRadius) / 2;

	return (
		<g className="uppercase text-xs font-bold">
			<text
				x={xScale(distanceFromCentre)}
				y={yScale(0)}
				textAnchor="middle"
				dy=".35em"
			>
				{ring}
			</text>
			<text
				x={xScale(-distanceFromCentre)}
				y={yScale(0)}
				textAnchor="middle"
				dy=".35em"
			>
				{ring}
			</text>
		</g>
	);
}

export default function RadarChart({
	quadrants,
}: {
	quadrants: Quadrant[];
}) {
	const xScale = d3
		.scaleLinear()
		.domain(chartConfig.scale)
		.range([0, chartConfig.size]);
	const yScale = d3
		.scaleLinear()
		.domain(chartConfig.scale)
		.range([chartConfig.size, 0]);

	return (
		<div
			className="fill-white text-xs text-center relative pt-20 my-0 mx-auto"
			style={{ maxWidth: `${chartConfig.size}px` }}
		>
			<svg viewBox={`0 0 ${chartConfig.size} ${chartConfig.size + 100}`}>
				<g transform={`translate(${xScale(0)}, 0)`}>
					<YAxis scale={yScale} />
				</g>
				<g transform={`translate(0, ${yScale(0)})`}>
					<XAxis scale={xScale} />
				</g>

				{quadrants?.map((quadrant) => (
					<QuadrantRings
						key={quadrant.name}
						quadrant={quadrant}
						xScale={xScale}
					/>
				))}

				{chartRings.map((ring: string, index) => (
					<RingLabel key={index} ring={ring} xScale={xScale} yScale={yScale} />
				))}

				<BlipPoints xScale={xScale} yScale={yScale} quadrants={quadrants} />
			</svg>
			<Tooltip id="blip" />
		</div>
	);
}

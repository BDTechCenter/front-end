import * as d3 from "d3";
import { Quadrant } from "@/api/types/radar";
import { chartConfig, chartRings } from "@/services/radarConstants";

const arcAngel = [
	[(3 * Math.PI) / 2, (4 * Math.PI) / 2],
	[0, Math.PI / 2],
	[Math.PI, (Math.PI * 3) / 2],
	[Math.PI / 2, Math.PI],
];

function arcPath(
	quadrantPosition: number,
	ringPosition: number,
	xScale: d3.ScaleLinear<number, number>
) {
	const [startAngle, endAngle] = arcAngel[quadrantPosition - 1];
	const arcAttrs = chartConfig.ringsAttributes[ringPosition],
		ringRadiusPx = xScale(arcAttrs.radius) - xScale(0),
		arc = d3.arc();

	return (
		arc({
			innerRadius: ringRadiusPx - arcAttrs.arcWidth,
			outerRadius: ringRadiusPx,
			startAngle,
			endAngle,
		}) || undefined
	);
}

export default function QuadrantRings({
	quadrant,
	xScale,
}: {
	quadrant: Quadrant;
	xScale: d3.ScaleLinear<number, number>;
}) {
	// order from top-right clockwise
	const gradientAttributes = [
		{ x: 1, y: 0, cx: 1, cy: 1, r: 1 },
		{ x: xScale(0), y: 0, cx: 0, cy: 1, r: 1 },
		{ x: 0, y: xScale(0), cx: 1, cy: 0, r: 1 },
		{ x: xScale(0), y: xScale(0), cx: 0, cy: 0, r: 1 },
	];
	const gradientId = `${quadrant.position}-radial-gradient`,
		quadrantSize = chartConfig.size / 2;

	return (
		<g className="quadrant-ring">
			{/* Definition of the quadrant gradient */}
			<defs>
				<radialGradient
					id={gradientId}
					{...gradientAttributes[quadrant.position - 1]}
				>
					<stop offset="0%" stopColor={quadrant.color}></stop>
					<stop offset="100%" stopColor={quadrant.color} stopOpacity="0"></stop>
				</radialGradient>
			</defs>

			{/* Gradient background area */}
			<rect
				width={quadrantSize}
				height={quadrantSize}
				x={gradientAttributes[quadrant.position - 1].x}
				y={gradientAttributes[quadrant.position - 1].y}
				fill={`url(#${gradientId})`}
				style={{ opacity: 0.5 }}
			/>

			{/* Rings' arcs */}
			{chartRings.map((_, index) => (
				<path
					key={index}
					fill={quadrant.color}
					d={arcPath(quadrant.position, index, xScale)}
					style={{
						transform: `translate(${quadrantSize}px, ${quadrantSize}px)`,
					}}
				/>
			))}
		</g>
	);
}

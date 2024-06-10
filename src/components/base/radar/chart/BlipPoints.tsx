"use client";
import { ScaleLinear } from "d3";
import Link from "next/link";
import { Blip, Flag, Item, Point, Quadrant } from "@/api/types/radar";
import { chartConfig, chartRings } from "@/services/radarConstants";
import { useFetchGetItemsRadar } from "@/api/hooks/radar/queries";
import { ChangedBlip, DefaultBlip, NewBlip } from "./BlipShapes";

function generateCoordinates(
	blip: Blip,
	xScale: ScaleLinear<number, number>,
	yScale: ScaleLinear<number, number>
): Point {
	const pi = Math.PI,
		ringRadius = chartConfig.ringsAttributes[blip.ringPosition].radius,
		previousRingRadius =
			blip.ringPosition === 0
				? 0
				: chartConfig.ringsAttributes[blip.ringPosition - 1].radius,
		ringPadding = 0.7;

	// radian between 0 and 90 degrees
	const randomDegree = (Math.random() * 90 * pi) / 180;
	// random distance from the centre of the radar, but within given ring. Also, with some "padding" so the points don't touch ring borders.
	const radius = randomBetween(
		previousRingRadius + ringPadding,
		ringRadius - ringPadding
	);
	/* 
    Multiples of PI/2. To apply the calculated position to the specific quadrant.
    Order here is counter-clockwise, so we need to "invert" quadrant positions (i.e. swap 2 with 4)
    */
	const shift = (pi * [1, 4, 2, 3][blip.quadrantPosition - 1]) / 2;

	return {
		x: xScale(Math.cos(randomDegree + shift) * radius),
		y: yScale(Math.sin(randomDegree + shift) * radius),
	};
}

function randomBetween(min: number, max: number): number {
	return Math.random() * (max - min) + min;
}

function distanceBetween(point1: Point, point2: Point): number {
	const a = point2.x - point1.x;
	const b = point2.y - point1.y;
	return Math.sqrt(a * a + b * b);
}

function renderBlip(blip: Blip, index: number): JSX.Element {
	const props = {
		blip,
		className: "blip",
		fill: blip.color,
		"data-tooltip-id": "blip",
		tooltipbg: blip.color,
		tooltiptxtcolor: blip.txtColor,
		"data-tooltip-content": blip.title,
	};

	switch (blip.flag) {
		case Flag.new:
			return <NewBlip key={index} {...props} />;
		case Flag.changed:
			return <ChangedBlip key={index} {...props} />;
		default:
			return <DefaultBlip key={index} {...props} />;
	}
}

export default function BlipPoints({
	xScale,
	yScale,
	quadrants,
}: {
	xScale: ScaleLinear<number, number>;
	yScale: ScaleLinear<number, number>;
	quadrants: Quadrant[] | undefined;
}) {
	const { data: items } = useFetchGetItemsRadar();

	const blips: Blip[] | undefined = items?.reduce(
		(list: Blip[], item: Item) => {
			if (!item.ring || !item.quadrantId) {
				console.log("Missing");

				// skip the blip if it doesn't have a ring or quadrant assigned
				return list;
			}
			const quadrantConfig = quadrants?.find((quadrant) => {
				return quadrant.id === item.quadrantId;
			});
			if (!quadrantConfig) {
				return list;
			}

			let blip: Blip = {
				...item,
				quadrantName: quadrantConfig.name,
				quadrantPosition: quadrantConfig.position,
				ringPosition: chartRings.findIndex((r) => r === item.ring),
				color: quadrantConfig.color,
				txtColor: quadrantConfig.txtColor,
				coordinates: { x: 0, y: 0 },
			};

			let point: Point;
			let counter = 1;
			let distanceBetweenCheck: boolean;
			do {
				const localpoint = generateCoordinates(blip, xScale, yScale);
				point = localpoint;
				counter++;
				/*
				Generate position of the new blip until it has a satisfactory distance to every other blip (so that they don't touch each other)
				and quadrant borders (so that they don't overlap quadrants)
				This feels pretty inefficient, but good enough for now.
			*/
				distanceBetweenCheck = list.some(
					(b) =>
						distanceBetween(localpoint, b.coordinates) <
						chartConfig.blipSize + chartConfig.blipSize / 2
				);
			} while (
				counter < 100 &&
				(Math.abs(point.x - xScale(0)) < 15 ||
					Math.abs(point.y - yScale(0)) < 15 ||
					distanceBetweenCheck)
			);

			blip.coordinates = point;

			list.push(blip);
			return list;
		},
		[]
	);

	return (
		<g className="blips">
			{blips?.map((blip, index) => (
				<Link href={`/tech-radar/${blip.quadrantId}/${blip.id}`} key={index}>
					{renderBlip(blip, index)}
				</Link>
			))}
		</g>
	);
}

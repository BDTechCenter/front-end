"use client"

import * as d3 from "d3";
import { useLayoutEffect, useRef } from "react";

export function YAxis({ scale }: { scale: d3.ScaleLinear<number, number> }) {
	const ref = useRef<SVGSVGElement>(null);

	useLayoutEffect(() => {
		if (ref.current == null) {
			return;
		}
		const axisGenerator = d3.axisLeft(scale).ticks(6);
		d3.select(ref.current)
			.attr("class", "y-axis")
			.call(axisGenerator)
			.call((g) => g.selectAll(".tick text").remove())
			.call((g) => g.selectAll(".tick line").remove())
			.call((g) => g.selectAll(".domain").remove());
	}, [scale]);

	return <g ref={ref} />;
}

export function XAxis({ scale }: { scale: d3.ScaleLinear<number, number> }) {
	const ref = useRef<SVGSVGElement>(null);

	useLayoutEffect(() => {
		if (ref.current == null) {
			return;
		}
		const axisGenerator = d3.axisBottom(scale).ticks(6);
		d3.select(ref.current)
			.attr("class", "x-axis")
			.call(axisGenerator)
			.call((g) => g.selectAll(".tick text").remove())
			.call((g) => g.selectAll(".tick line").remove())
			.call((g) => g.selectAll(".domain").remove());
	}, [scale]);

	return <g ref={ref} />;
}

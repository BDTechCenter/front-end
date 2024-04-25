"use client";

import { HomepageOption } from "@/api/types/radar";
import QuadrantGrid from "@/components/base/radar/quadrant-grid/QuadrantGrid";
import { featuredOnly } from "@/components/base/radar/utils";
import RadarGrid from "@/components/base/radar/radar-grid/RadarGrid";
import Footer from "@/components/base/common/Footer";
import {
	useFetchGetRadarConfig,
	useFetchGetRadarOpinion,
} from "@/api/hooks/radar/queries";
import TopBanner from "@/components/base/common/TopBanner";

export default function TechRadarPage() {
	const { data } = useFetchGetRadarOpinion();

	const { data: config } = useFetchGetRadarConfig();

	if (data && config) {
		const { items } = data;

		const showChart =
			config.homepageContent === HomepageOption.chart ||
			config.homepageContent === HomepageOption.both;
		const showColumns =
			config.homepageContent === HomepageOption.columns ||
			config.homepageContent === HomepageOption.both;

		return (
			<main className="">
				{/* <NavBar variant="black" /> */}
				<TopBanner
					text="Tech Radar - BD/INN"
					className="flex w-1/2 justify-end items-center"
				></TopBanner>
				{showChart && <RadarGrid items={featuredOnly(items)} config={config} />}
				{showColumns && (
					<QuadrantGrid items={featuredOnly(items)} config={config} />
				)}
				<Footer />
			</main>
		);
	}
}

"use client";
import NavBar from "@/components/base/common/NavBar";
import CardFeature from "@/components/base/introduction/CardFeature";
import { getIntroData } from "@/api/introduction/data";

import BannerIntroduction from "@/components/base/introduction/BannerIntroduction";
import CardTeam from "@/components/base/introduction/CardTeam";
import useFetchIntroductionData from "@/queries/introductionData";

export default function TestPage() {
	const { data: introData, isLoading } = useFetchIntroductionData();
	const dataFeatures = introData?.features;
	const dataCardTeam = introData?.cardTeam;
	const dataBanerIntroduction = introData?.bannerIntroduction;

	return (
		<main className="w-full">
			<NavBar variant="black" />
			{dataFeatures?.map((feature) => (
				<CardFeature
					key={feature.title}
					title={feature.title}
					content={feature.content}
					icon={feature.icon}
					//@ts-ignore
					orientation={feature.orientation}
				/>
			))}
			<BannerIntroduction
				img={dataBanerIntroduction?.link}
				text={dataBanerIntroduction?.text}
			/>
			<div className="grid grid-rows-2 grid-flow-col gap-6 w-full items-center justify-center">
				{dataCardTeam?.map((team) => (
					<CardTeam
						key={team.name}
						name={team.name}
						img={team.img}
						functionTeam={team.function}
					/>
				))}
			</div>
		</main>
	);
}

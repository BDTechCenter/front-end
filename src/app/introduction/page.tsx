"use client"
import BannerSection from "@/components/base/introduction/BannerSection";
import BannerIntroduction from "@/components/base/introduction/BannerIntroduction";
import useFetchIntroductionData from "@/queries/introductionData";
import AllCardFeature from "@/components/base/introduction/AllCardFeature";
import AllCardTeam from "@/components/base/introduction/AllCardTeam";


export default function Introduction() {
	const {data: introData} = useFetchIntroductionData()

	const dataFeatures = introData?.features
	const dataCardTeam = introData?.cardTeam
	const dataBanerIntroduction = introData?.bannerIntroduction
	const bannerData = introData?.bannerSection;

	return (
		<main className="w-full">
			<BannerSection data={bannerData} />
			<AllCardFeature data={dataFeatures}/>
			<BannerIntroduction img={dataBanerIntroduction?.link} text={dataBanerIntroduction?.text}/> 
			<AllCardTeam data={dataCardTeam}/>
		</main>
	);
}

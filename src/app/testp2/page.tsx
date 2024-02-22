"use client"
import NavBar from "@/components/base/common/NavBar";
import CardFeature from "@/components/base/introduction/CardFeature";
import {getData} from "@/api/data"
import { BiNews } from "react-icons/bi"
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineRadar } from "react-icons/md";
import BannerIntroduction from "@/components/base/introduction/BannerIntroduction";
import CardTeam from "@/components/base/introduction/CardTeam";
import useFetchIntroductionData from "@/queries/introductionData";
import AllCardFeature from "@/components/base/introduction/AllCardFeature";
import AllCardTeam from "@/components/base/introduction/AllCardTeam";
import Title from "@/components/base/introduction/Title";

export default function testPage2() {
	const {data: introData} = useFetchIntroductionData()

	const dataFeatures = introData?.features
	const dataCardTeam = introData?.cardTeam
	const dataBanerIntroduction = introData?.bannerIntroduction

	return (
		<main className="w-full">
			<NavBar variant="black" />
			
			<AllCardFeature data={dataFeatures}/>
			<BannerIntroduction img={dataBanerIntroduction?.link} text={dataBanerIntroduction?.text}/> 
			<AllCardTeam data={dataCardTeam}/>
		</main>
	);
}

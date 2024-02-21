import NavBar from "@/components/base/common/NavBar";
import ViewFeatures from "@/components/base/introduction/ViewFeatures";
import { introductionData } from "@/api/introduction";
import { BiNews } from "react-icons/bi"
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineRadar } from "react-icons/md";
import BannerIntroduction from "@/components/base/introduction/BannerIntroduction";
import CardTeam from "@/components/base/introduction/CardTeam";

export default function testPage() {
	const dataFeatures = introductionData.features
	const dataCardTeam = introductionData.cardTeam
	return (
		<main className="w-full">
			<NavBar variant="black" />
			<ViewFeatures 
				title={dataFeatures.features_news.title}  
				content={dataFeatures.features_news.content}
				icon={<BiNews/>}
				variant="default"
			/>
			<ViewFeatures 
				title={dataFeatures.features_projects.title}	
				content={dataFeatures.features_projects.content}
				icon={<FaProjectDiagram/>}
				variant="left"
			/>
			<ViewFeatures 
				title={dataFeatures.features_tech_radar.title}  
				content={dataFeatures.features_tech_radar.content}
				icon={<MdOutlineRadar/>} 
				variant="default"
			/>
			<BannerIntroduction/>
			<CardTeam 
				name={dataCardTeam.pedrinho.name} 
				img={dataCardTeam.pedrinho.img} 
				functionTeam={dataCardTeam.pedrinho.function}
			/>
		</main>
	);
}

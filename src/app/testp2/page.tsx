import NavBar from "@/components/base/common/NavBar";
import TopBanner from "@/components/base/common/TopBanner";
import dataTechRadarPage from "@/data/techRadar"

export default function testPage2() {
	return (
		<main>
			<NavBar variant="black"/>
			<TopBanner square text={dataTechRadarPage.banner}/>
		</main>
	);
}
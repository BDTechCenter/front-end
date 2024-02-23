"use client"
import useFetchHomeData from "@/queries/homeData";
import NavBar from "@/components/base/common/NavBar";
import BannerAllPage from "@/components/base/common/TopBanner";

export default function testPage2() {
	const { data: homeData } = useFetchHomeData()

	const bannerHome = homeData?.bannerHome
	const news = homeData?.news
	const buttonText = homeData?.buttonText

	return (
		<main className="w-full">
			<NavBar variant="black" />
			<BannerAllPage data={bannerHome} img={true}/>
		</main>
	);
}

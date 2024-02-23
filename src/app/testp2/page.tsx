"use client"
import useFetchHomeData from "@/queries/homeData";
import NavBar from "@/components/base/common/NavBar";

export default function testPage2() {
	const {data: homeData} = useFetchHomeData()

	const bannerHome = homeData?.bannerHome
	const news = homeData?.news
	const buttonText = homeData?.buttonText

	console.log(bannerHome, news, buttonText)

	return (
		<main className="w-full">
			<NavBar variant="black" />
		</main>
	);
}

import useFetchHomeData from "@/queries/homeData";

export default function testPage2() {
	const {data: homeData} = useFetchHomeData()

	const bannerHome = homeData?.bannerHome
	const news = homeData?.news
	const buttonText = homeData?.buttonText

	return (
		<main className="w-full">

		</main>
	);
}

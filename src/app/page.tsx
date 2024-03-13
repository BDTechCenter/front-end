"use client"
import AllCardFeature from "@/components/base/home/AllCardFeature";
import AllCardTeam from "@/components/base/home/AllCardTeam";
import BannerIntroduction from "@/components/base/home/BannerInformateBD";
import NavBar from "@/components/base/common/NavBar";
import TopBanner from "@/components/base/common/TopBanner";
import MainNewsCardHome from "@/components/base/home/MainNewsCardHome";
import { useFetchGetMainNews } from "@/api/hooks/home/queries";

export default function Home() {
	const {isLoading, isError, data} = useFetchGetMainNews()
	console.log(data?.content)
	return (
		<main className="w-full">
			<NavBar variant="black" />
			<TopBanner square text={dataHomePage.bannerHome}/>
			<MainNewsCardHome
				isLoading={isLoading} 
				isError={isError} 
				data={data?.content} 
				massageError={dataHomePage.newsError} 
				massageNotFound={dataHomePage.newsErrorNotFound}
			/>
			<AllCardFeature />
			<BannerIntroduction />
			<AllCardTeam />
		</main>
	);
}

export const dataHomePage = {
	bannerHome: (
		<p>
			Follow the main <span className="text-bdlightpurple">news</span> of the
			moment...
		</p>
	),
	newsErrorNotFound:{
		text: "News not found",
		img: "/noNews.gif",
	},

	newsError:{
		text: "Error News",
		img: "/noNews.gif",
	},
}

import AllCardFeature from "@/components/base/home/AllCardFeature";
import AllCardTeam from "@/components/base/home/AllCardTeam";
import BannerIntroduction from "@/components/base/home/BannerInformateBD";
import NavBar from "@/components/base/common/NavBar";
import TopBanner from "@/components/base/common/TopBanner";
import MainNewsCardHome from "@/components/base/home/MainNewsCardHome";

export default function Home() {
	return (
		<main className="w-full">
			<NavBar variant="black" />
			<TopBanner square text={bannerHome.text}/>
			<MainNewsCardHome/>
			<AllCardFeature />
			<BannerIntroduction />
			<AllCardTeam />
		</main>
	);
}

export const bannerHome = {
	text: (
		<p>
			Follow the main <span className="text-bdlightpurple">news</span> of the
			moment...
		</p>
	),
};

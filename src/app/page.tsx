import AllCardFeature from "@/components/base/introduction/AllCardFeature";
import AllCardTeam from "@/components/base/introduction/AllCardTeam";
import BannerIntroduction from "@/components/base/introduction/BannerInformateBD";
import MainBanner from "@/components/base/introduction/MainBanner";

export default function Home() {
	return (
		<main className="w-full">
			<MainBanner />
			<AllCardFeature />
			<BannerIntroduction />
			<AllCardTeam />
		</main>
	);
}

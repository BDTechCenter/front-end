"use client"
import NavBar from "@/components/base/common/NavBar";
import TopBanner from "@/components/base/common/TopBanner";
import MainNewsCardHome from "@/components/base/home/MainNewsCardHome";
import AllCardFeature from "@/components/base/home/AllCardFeature";
import AllCardTeam from "@/components/base/home/AllCardTeam";
import BannerIntroduction from "@/components/base/home/BannerInformateBD";
import { dataHomePage } from "@/data/home";

export default function HomePage() {
	return (
		<main>
			<NavBar variant="black" />
			<TopBanner square text={dataHomePage.banner.text} />
			<MainNewsCardHome />
			<AllCardFeature />
			<BannerIntroduction />
			<AllCardTeam />
		</main>
	)
}

{/* <TopBanner square text={bannerHome.text} className="flex w-1/2 justify-center items-center">
        <Button
              variant="bdlight"
              className="rounded-lg w-1/3 text-xl font-bold py-6 2xl:text-2xl"
            >
              teste
        </Button>
      </TopBanner> */}
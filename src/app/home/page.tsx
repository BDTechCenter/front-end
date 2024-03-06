"use client"
import NavBar from "@/components/base/common/NavBar";
import TopBanner from "@/components/base/common/TopBanner";
import MainNewsCardHome from "@/components/base/home/MainNewsCardHome";
import AllCardFeature from "@/components/base/introduction/AllCardFeature";
import AllCardTeam from "@/components/base/introduction/AllCardTeam";
import BannerIntroduction from "@/components/base/introduction/BannerInformateBD";

export default function HomePage() {
  return (
    <main>
      <NavBar variant="black" />
			<TopBanner square text={bannerHome.text}/>
			<MainNewsCardHome/>
      <AllCardFeature />
			<BannerIntroduction />
			<AllCardTeam />
    </main>
  )
}

export const bannerHome = {
	text: (
		<p>
			Follow the main <span className="text-bdlightpurple">news</span> of the
			moment...
		</p>
	),
};

{/* <TopBanner square text={bannerHome.text} className="flex w-1/2 justify-center items-center">
        <Button
              variant="bdlight"
              className="rounded-lg w-1/3 text-xl font-bold py-6 2xl:text-2xl"
            >
              teste
        </Button>
      </TopBanner> */}
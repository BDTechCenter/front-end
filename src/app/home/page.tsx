"use client"
import NavBar from "@/components/base/common/NavBar";
import TopBanner from "@/components/base/common/TopBanner";
import MainNewsCardHome from "@/components/base/home/MainNewsCardHome";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main>
      <NavBar variant="black" />
			<TopBanner square text={bannerHome.text}/>
			<MainNewsCardHome/>
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
import NavBar from "@/components/base/common/NavBar";
import TopBanner from "@/components/base/common/TopBanner";
import MainNewsCardHome from "@/components/base/home/MainNewsCardHome";

export default function HomePage() {
  return (
    <main>
      <NavBar variant="black" />
			<TopBanner square>
				Follow the main <span className="text-bdlightpurple">news</span> of the
				moment...
			</TopBanner>
			<MainNewsCardHome/>
    </main>
  )
}

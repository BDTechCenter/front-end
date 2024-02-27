import NavBar from "@/components/base/common/NavBar";
import TopBanner from "@/components/base/common/TopBanner";
import NewsList from "@/components/base/news/NewsList";

export default function NewsPage() {
	return (
		<main className="w-full h-full">
			<NavBar variant="white" />
			<TopBanner>
				Follow the main <span className="text-bdlightpurple">news</span> of the
				moment...
			</TopBanner>
			<section className="my-24 mx-28 h-full 2xl:mx-44 2xl:my-36">
				<NewsList />
			</section>
		</main>
	);
}

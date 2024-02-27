import NavBar from "@/components/base/common/NavBar";
import TopBanner from "@/components/base/common/TopBanner";
import NewsList from "@/components/base/news/NewsList";
import SearchBar from "@/components/base/news/SearchBar";

export default function NewsPage() {
	return (
		<main className="w-full h-full">
			<NavBar variant="white" />
			<div className="relative">
				<TopBanner>
					Follow the main <span className="text-bdlightpurple">news</span> of
					the moment...
				</TopBanner>
				<div className="w-[70%] mx-auto absolute left-0 right-0 -bottom-7 z-10">
					<SearchBar />
				</div>
			</div>
			<section className="my-24 mx-28 h-full 2xl:mx-44 2xl:my-36">
				<NewsList />
			</section>
		</main>
	);
}

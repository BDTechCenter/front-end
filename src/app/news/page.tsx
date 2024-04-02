
import NavBar from "@/components/base/common/NavBar";
import TopBanner from "@/components/base/common/TopBanner";
import NewsList from "@/components/base/news/NewsList";
import SearchBar from "@/components/base/news/SearchBar";
import ModalCreateNews from "@/components/base/news/modalCreateNews";

export default function NewsPage() {
	return (
		<main className="w-full h-full">
			<NavBar variant="black" />
			<div className="relative">
				<TopBanner
					text={dataNewsPage.bannerNews}
					className="flex w-1/2 justify-end  items-center"
				>
					<div className="flex items-center justify-center w-1/2 h-full">
						<ModalCreateNews />
					</div>
				</TopBanner>
				<div className="w-[70%] mx-auto absolute left-0 right-0 -bottom-7 z-10">
					<SearchBar />
				</div>
			</div>
			<section className="my-24 mx-28 h-full 2xl:mx-44 2xl:my-36">
				<NewsList
					massageError={dataNewsPage.newsErrorNotFound}
					massageNotFound={dataNewsPage.newsErrorNotFound}
				/>
			</section>
		</main>
	);
}

export const dataNewsPage = {
	bannerNews: (
		<p>
			Follow the main <span className="text-bdlightpurple">news</span> of the
			moment...
		</p>
	),
	newsErrorNotFound: {
		text: "News not found",
		img: "/noFilter.gif",
	},
	newsError: {
		text: "Error News",
		img: "/allError.gif",
	},
};

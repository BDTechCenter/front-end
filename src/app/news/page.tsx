import NavBar from "@/components/base/common/NavBar";
import TopBanner from "@/components/base/common/TopBanner";
import NewsList from "@/components/base/news/NewsList";
import SearchBar from "@/components/base/news/SearchBar";
import { Button } from "@/components/ui/button";

export default function NewsPage() {
	return (
		<main className="w-full h-full">
			<NavBar variant="white" />
			<div className="relative">
			<TopBanner  text={bannerNews.text} className="flex w-1/2 justify-center items-center">
        <Button
              variant="bdlight"
              className="rounded-lg w-1/3 text-xl font-bold py-6 2xl:text-2xl"
							href=""
            >
              teste
        </Button>
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

export const bannerNews = {
	text:(
		<p>
			Follow the main <span className="text-bdlightpurple">news</span> of
			the moment...
		</p>
	)
}




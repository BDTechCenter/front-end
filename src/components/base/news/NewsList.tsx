import ImageError from "../common/ImageError";
import NewsCard from "./NewsCard";
import { dataNewsPage } from "@/data/news";

export default function NewsList() {
	const newsData = dataNewsPage.newsComponentsAPIExample
	
	return (
		<section className="relative grid grid-cols-2 sm:grid-cols-3 gap-5 2xl:gap-7">
			{newsData.length === 0 ?(
				<div className="absolute flex w-full items-center justify-center">
					<ImageError data={dataNewsPage.newsError.noNewsError} />
				</div>
			):(
				<>
					{newsData?.map((news) => (
					<NewsCard key={news.title} data={news} />
				))}
				</>
			)}
			
		</section>
	);
}



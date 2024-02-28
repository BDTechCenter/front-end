import ImageError from "../common/ImageError";
import NewsCard from "./NewsCard";

export default function NewsList() {
	const newsData = newsPage.newsData
	const newsError = newsPage.newsError
	
	return (
		<section className="relative grid grid-cols-2 sm:grid-cols-3 gap-5 2xl:gap-7">
			{newsData.length === 0 ?(
				<div className="absolute flex w-full items-center justify-center">
					<ImageError data={newsError} />
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

const newsPage = {
	newsError:{
		text: "News not found",
		img: "/noNews.gif",
	},
	newsData:[
		{
			id: 1,
			img: "/imgNews2.png",
			date: "January 20",
			title: "Taking a Glimpse of What TRPC IS? - DEV Community",
			author: "Matheus Aprigio",
		},
		{
			id: 2,
			img: "/imgNews4.png",
			date: "February 09",
			title: "Taking a Glimpse of What TRPC IS? - DEV Community",
			author: "John Doe",
		},
		{
			id: 3,
			img: "/imgNews3.png",
			date: "March 19",
			title: "The Future of Artificial Intelligence",
			author: "Matheus Aprigio",
		},
		{
			id: 4,
			img: "/imgNews.png",
			date: "December 12",
			title: "Web Development Trends in 2024",
			author: "Jane Smith",
		},
	]
}

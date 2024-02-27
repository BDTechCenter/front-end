import ImageError from "../common/ImageError";
import NewsCard from "./NewsCard";

export default function NewsList() {
	const newsData = newsPage.newsData
	const newsError = newsPage.newsError
	
	return (
		<section className="relative grid grid-cols-3 gap-10 2xl:gap-14">
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
		text: "Top news not found",
		img: "/noNews.gif",
	},
	newsData:[
		{
			id: 1,
			img: "/imgNews.png",
			date: "January 20",
			title: "Introduction to Machine Learning Algorithms",
			author: "Matheus Aprigio",
		},
		{
			id: 2,
			img: "/imgNews.png",
			date: "February 09",
			title: "Taking a Glimpse of What TRPC IS? - DEV Community",
			author: "John Doe",
		},
		{
			id: 3,
			img: "/imgNews.png",
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

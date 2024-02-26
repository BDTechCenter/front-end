import NewsCard from "./NewsCard";

export default function NewsList() {
	return (
		<div className="grid grid-cols-3 gap-10 2xl:gap-14">
			{newsData?.map((news) => (
				<NewsCard key={news.title} data={news} />
			))}
		</div>
	);
}

const newsData = [
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
];

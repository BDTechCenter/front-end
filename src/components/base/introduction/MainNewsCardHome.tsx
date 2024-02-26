import NewsCardHome from "./NewsCardHome";
import NewsCard from "./NewsCardHome"

export default function MeanNewsCardHome() {
	return (
		<div className="flex my-16 h-[30rem] 2xl:h-[35rem] w-full items-center justify-center">
			{newsList ? (
				<div className="flex flex-row w-[80%] 2xl:w-[70%] h-full gap-3">
					<div className="w-[55%] h-full">
						<NewsCardHome data={newsList[0]} orientation={"relative"} />
					</div>
					<div className="w-[45%] flex flex-col gap-3 justify-center items-center">
						{newsList?.slice(1).map((newsItem) => (
							<NewsCardHome data={newsItem} />
						))}
					</div>
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
}


export const newsList = [
	{
		text: "Innovation in the development area using Python",
		img: "/imgNews2.png",
		data: "February 19"
	},
	{
		text: "Innovation in the development area using Python",
		img: "/imgNews.png",
		data: "February 19"
	},
	{
		text: "Innovation in the development area using Python",
		img: "/imgNews.png",
		data: "February 19"
	}
]

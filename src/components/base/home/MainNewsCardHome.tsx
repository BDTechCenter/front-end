import { Button } from "@/components/ui/button";
import NewsCardHome from "./NewsCardHome";
import ImageError from "../introduction/ImageError";

export default function MeanNewsCardHome() {
	const newsList = newsPage.newsList;
	const newsButton = newsPage.newsButton;
	const newsError = newsPage.newsError;

	return (
		<div className="flex my-16 h-[35rem] 2xl:h-[40rem] w-full items-center justify-center">
			<div className="flex flex-col w-[80%] 2xl:w-[70%] h-full gap-10">
				{newsList.length === 0 ? (
					<ImageError data={newsError} />
				) : (
					<div className="flex flex-row w-full h-full gap-3">
						<div className="w-[55%] h-full">
							<NewsCardHome data={newsList[0]} orientation={"relative"} />
						</div>
						<div className="w-[45%] flex flex-col gap-3 justify-center items-center">
							{newsList?.slice(1).map((newsItem) => (
								<NewsCardHome data={newsItem} />
							))}
						</div>
					</div>
				)}
				<Button variant={"bdpurple"} className="w-full">
					{newsButton.text}
				</Button>
			</div>
		</div>
	);
}

export const newsPage = {
	newsButton: {
		text: "Read More",
	},
	newsList: [],
	newsError: {
		text: "Top news not found",
		img: "/noNews.gif",
	},
};

import { Button } from "@/components/ui/button";
import NewsCardHome from "./NewsCardHome";
import ImageError from "../common/ImageError";
import { dataHomePage } from "@/data/home";

export default function MainNewsCardHome() {
	const newsList = dataHomePage.newsMainListAPIExample;

	return (
		<div className="flex my-16 h-[35rem] 2xl:h-[40rem] w-full items-center justify-center">
			<div className="flex flex-col w-[80%] 2xl:w-[70%] h-full gap-10">
				{newsList.length === 0 ? (
					<ImageError data={dataHomePage.newsError} />
				) : (
					<>
					<div className="flex flex-row w-full h-full gap-5">
						<div className="w-[55%] h-full">
							<NewsCardHome data={newsList[0]} orientation={"relative"} />
						</div>
						<div className="w-[45%] flex flex-col gap-5 justify-center items-center">
							{newsList?.slice(1).map((newsItem) => (
								<NewsCardHome key={newsItem.text} data={newsItem} />
							))}
						</div>
					</div>
					<Button variant={"bdpurple"} className="w-full" href="/news">
						Read More
					</Button>
					</>
				)}
			</div>
		</div>
	);
}

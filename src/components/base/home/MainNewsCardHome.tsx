import { Button } from "@/components/ui/button";
import NewsCardHome from "./NewsCardHome";
import ImageError from "../common/ImageError";
import { News } from "@/api/types/news/type";
import { Error } from "@/api/types/all/type";
import { NewsCardHomeSkeleton } from "../skeleton/NewsCardHomeSkeleton";

export interface MainNewsCardHomeProps {
	data: News[]
	isLoading?: boolean
	isError?: boolean
	massageError: Error
	massageNotFound: Error
}

export default function MainNewsCardHome({data, isLoading, isError, massageError, massageNotFound}: MainNewsCardHomeProps) {

	const newsCardsHome = () => {
		return (data?.length !== 0 ? (
			<div className="flex flex-row w-full h-full gap-5">
				<div className="w-[55%] h-full">
					<NewsCardHome data={data[0]} orientation={"relative"} />
				</div>
				<div className="w-[45%] flex flex-col gap-5 justify-center items-center">
					{data?.slice(1).map((newsItem) => (
						<NewsCardHome key={newsItem.id} data={newsItem} orientation={"relative"} />
					))}
				</div>
			</div>
		) : (
			<ImageError data={massageNotFound} />
		));
	};

	if (isLoading) {
		return (
			<div className="flex flex-row w-full h-full gap-5">
				<div className="w-[55%] h-full">
					<NewsCardHomeSkeleton/>
				</div>
				<div className="w-[45%] flex flex-col gap-5 justify-center items-center">
					<NewsCardHomeSkeleton/>
					<NewsCardHomeSkeleton/>
				</div>
			</div>
		);
	}

	if (isError) {
		return (
			<ImageError data={massageError} />
		);
	}

	if (data) {
		return newsCardsHome();
	}

	return null
}
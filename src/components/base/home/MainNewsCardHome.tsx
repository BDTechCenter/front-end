"use client"

import NewsCardHome from "./NewsCardHome";
import ImageError from "../common/ImageError";
import { Error } from "@/api/types/all/type";
import { NewsCardHomeSkeleton } from "../skeleton/NewsCardHomeSkeleton";
import { useFetchGetMainNews } from "@/api/hooks/home/queries";

export interface MainNewsCardHomeProps {
	massageError: Error;
	massageNotFound: Error;
}

export default function MainNewsCardHome({
	massageError,
	massageNotFound,
}: MainNewsCardHomeProps) {
	const { isLoading, isError, data } = useFetchGetMainNews();

	const mainNewsData = data?.content;

	const newsCardsHome = () => {
		return mainNewsData && mainNewsData?.length !== 0 ? (
			<div className="flex w-full h-full gap-4">
				<div className="w-[55%] h-full">
					<NewsCardHome data={mainNewsData[0]} />
				</div>
				<div className="w-[45%] h-full flex flex-col gap-3 justify-center items-center">
					{mainNewsData?.slice(1).map((newsItem) => (
						<NewsCardHome key={newsItem.id} data={newsItem} />
					))}
				</div>
			</div>
		) : (
			<ImageError data={massageNotFound} />
		);
	};

	if (isLoading) {
		return (
			<div className="flex w-full h-full gap-5">
				<div className="w-[55%] h-full">
					<NewsCardHomeSkeleton />
				</div>
				<div className="w-[45%] flex flex-col gap-5 justify-center items-center">
					<NewsCardHomeSkeleton />
					<NewsCardHomeSkeleton />
				</div>
			</div>
		);
	}

	if (isError) {
		return <ImageError data={massageError} />;
	}

	if (data) {
		return newsCardsHome();
	}

	return null;
}

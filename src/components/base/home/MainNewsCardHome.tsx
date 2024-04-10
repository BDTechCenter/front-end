"use client";

import { Error } from "@/api/types/all/type";
import { useFetchGetMainNews } from "@/api/hooks/home/queries";
import NewsCardHome from "./NewsCardHome";
import ImageError from "../common/ImageError";
import { NewsCardHomeSkeleton } from "../skeleton/NewsCardHomeSkeleton";

export interface MainNewsCardHomeProps {
	messageError: Error;
	messageNotFound: Error;
}

export default function MainNewsCardHome({
	messageError,
	messageNotFound,
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
			<ImageError data={messageNotFound} />
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
		return <ImageError data={messageError} />;
	}

	if (data) {
		return newsCardsHome();
	}

	return null;
}

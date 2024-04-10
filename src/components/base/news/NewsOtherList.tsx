"use client";

import { useFetchGetNewsOtherNews } from "@/api/hooks/news/queries";
import { Error } from "@/api/types/all/type";
import ImageError from "../common/ImageError";
import NewsOther from "./NewsOther";
import NewsOtherSkeleton from "../skeleton/NewsOtherSkeleton";

export interface NewsOtherListProps {
	messageError: Error;
}

export default function NewsOtherList({ messageError }: NewsOtherListProps) {
	const { isLoading, isError, data } = useFetchGetNewsOtherNews();
	const newsCards = () => {
		return data?.content.length !== 0 ? (
			<div className="flex flex-col gap-5">
				{data?.content.map((news) => <NewsOther key={news.id} data={news} />)}
			</div>
		) : (
			<div className="absolute flex w-full items-center justify-center">
				<ImageError data={messageError} />
			</div>
		);
	};

	if (isLoading) {
		return (
			<div className="flex flex-col gap-5">
				<NewsOtherSkeleton />
				<NewsOtherSkeleton />
				<NewsOtherSkeleton />
			</div>
		);
	}

	if (isError) {
		return (
			<div className="absolute flex w-full items-center justify-center">
				<ImageError data={messageError} />
			</div>
		);
	}

	if (data) {
		return newsCards();
	}

	return null;
}

"use client";

import ImageError from "../common/ImageError";
import NewsCard from "./NewsCard";
import { Error } from "@/api/types/all/type";
import { NewsCardSkeleton } from "../skeleton/NewsCardSkeleton";
import { useFetchGetNews } from "@/api/hooks/news/queries";
import { useSearchParams } from "next/navigation";

export interface NewsListProps {
	massageError: Error;
	massageNotFound: Error;
}

export default function NewsList({
	massageError,
	massageNotFound,
}: NewsListProps) {
	const searchParams = useSearchParams();
	const tags = searchParams.get("tags");

	const { isLoading, isError, data } = useFetchGetNews(tags ? tags : "");

	const newsData = data?.content;

	const newsCards = () => {
		return newsData?.length !== 0 ? (
			<>
				{newsData?.map((news) => (
					<NewsCard key={news.id} data={news} />
				))}
			</>
		) : (
			<div className="absolute flex w-full items-center justify-center">
				<ImageError data={massageNotFound} />
			</div>
		);
	};

	if (isLoading) {
		return (
			<>
				<NewsCardSkeleton />
				<NewsCardSkeleton />
				<NewsCardSkeleton />
			</>
		);
	}

	if (isError) {
		return (
			<div className="absolute flex w-full items-center justify-center">
				<ImageError data={massageError} />
			</div>
		);
	}

	if (data) {
		return newsCards();
	}

	return null;
}

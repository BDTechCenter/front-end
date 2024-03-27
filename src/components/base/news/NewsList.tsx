"use client";
import ImageError from "../common/ImageError";
import NewsCard from "./NewsCard";
import { Error } from "@/api/types/all/type";
import { NewsCardSkeleton } from "../skeleton/NewsCardSkeleton";
import { useFetchGetNews } from "@/api/hooks/news/queries";
import { useSearchParams } from "next/navigation";
import PaginatorURL from "./PaginatorURL";

export interface NewsListProps {
	massageError: Error;
	massageNotFound: Error;
}

export default function NewsList({
	massageError,
	massageNotFound,
}: NewsListProps) {
	const searchParams = useSearchParams();
	const tagsUrl = searchParams.get("tags");
	const pageUrl = searchParams.get("page");

	const tags = tagsUrl ? tagsUrl : "";
	const page = pageUrl ? `&page=${pageUrl}` : "";

	const { isLoading, isError, data } = useFetchGetNews(tags, page);

	const newsCards = () => {
		return data?.content.length !== 0 && data ? (
			<div className="flex flex-col w-full">
				<div className="relative grid grid-cols-2 sm:grid-cols-3 gap-5 2xl:gap-7">
					{data.content.map((news) => (
						<NewsCard key={news.id} data={news} />
					))}
				</div>
				<div>
					<PaginatorURL totalPages={data.totalPages} />
				</div>
			</div>
		) : (
			<div className="flex w-full items-center justify-center">
				<ImageError data={massageNotFound} />
			</div>
		);
	};

	if (isLoading) {
		return (
			<div className="relative grid grid-cols-2 sm:grid-cols-3 gap-5 2xl:gap-7">
				<NewsCardSkeleton />
				<NewsCardSkeleton />
				<NewsCardSkeleton />
			</div>
		);
	}

	if (isError) {
		return (
			<div className="flex w-full items-center justify-center">
				<ImageError data={massageError} />
			</div>
		);
	}

	if (data) {
		return newsCards();
	}

	return null;
}

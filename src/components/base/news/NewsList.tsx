"use client";

import { useInView } from "react-intersection-observer";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Error } from "@/api/types/all/type";
import { useFetchGetNewsScroll } from "@/api/hooks/news/queries";
import { ContentNews, News } from "@/api/types/news/type";
import ImageError from "../common/ImageError";
import { NewsCardSkeleton } from "../skeleton/NewsCardSkeleton";
import LoadingIndicator from "../common/LoadingIndicator";
import NewsCard from "../common/NewsCard";

export interface NewsListProps {
	messageError: Error;
	messageNotFound: Error;
}

export default function NewsList({
	messageError,
	messageNotFound,
}: NewsListProps) {
	const searchParams = useSearchParams();
	const tagsUrl = searchParams.get("tags");
	const titleUrl = searchParams.get("title");

	const tags = tagsUrl ? `tags=${tagsUrl}` : undefined;
	const title = titleUrl ? `title=${titleUrl}` : undefined;

	const { ref, inView } = useInView();

	const {
		data,
		error,
		isLoading,
		isError,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
	} = useFetchGetNewsScroll(tags, title);

	const newsCards = () => {
		return data?.pages[0].content.length !== 0 && data ? (
			<div className="flex flex-col w-full">
				<div className="relative grid mb-6 grid-cols-2 sm:grid-cols-3 gap-5 2xl:gap-7">
					{data?.pages.map((news: ContentNews) =>
						news.content.map((newsObj, index) =>
							news.content.length == index + 1 ? (
								<NewsCard innerRef={ref} key={newsObj.id} data={newsObj} />
							) : (
								<NewsCard key={newsObj.id} data={newsObj} />
							)
						)
					)}
				</div>
				{isFetchingNextPage && <LoadingIndicator className="mx-auto" />}
			</div>
		) : (
			<div className="flex w-full items-center justify-center">
				<ImageError data={messageNotFound} />
			</div>
		);
	};

	useEffect(() => {
		if (inView && hasNextPage) {
			fetchNextPage();
		}
	}, [inView, hasNextPage, fetchNextPage]);

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
		console.log(error);
		return (
			<div className="flex w-full items-center justify-center">
				<ImageError data={messageError} />
			</div>
		);
	}

	if (data) {
		return newsCards();
	}

	return null;
}

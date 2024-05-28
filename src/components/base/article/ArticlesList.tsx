"use client";

import { useInView } from "react-intersection-observer";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Error } from "@/api/types/all/type";
import { useFetchGetArticlesScroll } from "@/api/hooks/article/queries";
import { Article, ContentArticles } from "@/api/types/article/type";
import ImageError from "../common/ImageError";
import { ArticlesCardSkeleton } from "../skeleton/ArticlesCardSkeleton";
import LoadingIndicator from "../common/LoadingIndicator";
import ArticleCard from "../common/ArticleCard";

export interface ArticlesListProps {
	messageError: Error;
	messageNotFound: Error;
}

export default function ArticlesList({
	messageError,
	messageNotFound,
}: ArticlesListProps) {
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
	} = useFetchGetArticlesScroll(tags, title);

	const articlesCards = () => {
		return data?.pages[0].content.length !== 0 && data ? (
			<div className="flex flex-col w-full">
				<div className="relative grid mb-6 grid-cols-2 sm:grid-cols-3 gap-5 2xl:gap-7">
					{data?.pages.map((article: ContentArticles) =>
						article.content.map((articleObj, index) =>
							article.content.length == index + 1 ? (
								<ArticleCard
									variant="any"
									innerRef={ref}
									key={articleObj.id}
									data={articleObj}
								/>
							) : (
								<ArticleCard
									variant="any"
									key={articleObj.id}
									data={articleObj}
								/>
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
				<ArticlesCardSkeleton />
				<ArticlesCardSkeleton />
				<ArticlesCardSkeleton />
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
		return articlesCards();
	}

	return null;
}

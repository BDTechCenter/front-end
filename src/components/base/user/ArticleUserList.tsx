"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useFetchGetUserArticles } from "@/api/hooks/user/queries";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import ImageError from "../common/ImageError";
import ArticleCard from "../common/ArticleCard";
import { ArticlesCardSkeleton } from "../skeleton/ArticlesCardSkeleton";

export function ArticleUserList() {
	const searchParams = useSearchParams();
	const filterStatus = searchParams.get("status");
	const status = filterStatus ? filterStatus : "published";
	const { isLoading, isError, data } = useFetchGetUserArticles(status);
	const [title, setTitle] = useState("Error");

	useEffect(() => {
		if (status === "archived") {
			setTitle("Archived");
		}

		setTitle("Published");
	}, [searchParams, status]);

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
		return (
			<div className="flex w-full items-center justify-center">
				<ImageError
					data={{
						text: "Error when trying to load the article",
						img: "/allError.gif",
					}}
				/>
			</div>
		);
	}

	if (data) {
		return data?.content.length !== 0 && data ? (
			<div className="flex flex-col w-full">
				<div className="w-full">
					<Carousel>
						<CarouselContent>
							{data.content.map((article) => (
								<CarouselItem key={article.id} className="basis-1/3">
									<ArticleCard variant="userArticle" data={article} />
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
		) : (
			<div className="flex w-full items-center justify-center">
				<ImageError
					data={{
						text: "You have no articles, write one",
						img: "/noComment.gif",
					}}
				/>
			</div>
		);
	}

	return null;
}

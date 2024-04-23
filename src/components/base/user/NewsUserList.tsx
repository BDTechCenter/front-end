"use client";
import ImageError from "../common/ImageError";
import NewsCard from "../common/NewsCard";
import { Error } from "@/api/types/all/type";
import { NewsCardSkeleton } from "../skeleton/NewsCardSkeleton";
import { useFetchGetUserNews } from "@/api/hooks/user/queries";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export interface NewsListProps {
	massageError: Error;
	massageNotFound: Error;
}

export default function NewsUserList({
	massageError,
	massageNotFound,
}: NewsListProps) {
	const searchParams = useSearchParams();
	const filterNews = searchParams.get("news");
	const status = filterNews ? filterNews : "published";
	const { isLoading, isError, data, refetch } = useFetchGetUserNews(status);
	const [title, setTitle] = useState('Error');

	useEffect(() => {
		if (status === "published") {
			setTitle("Published");
		} 
		if (status === "archived") {
			setTitle("Archived");
		}
		if (status === ""){
			setTitle("Published")
		}
	}, [searchParams, status]);

	const newsUserCards = () => {
		return data?.content.length !== 0 && data ? (
			<div className="flex flex-col w-full">
				<h1 className="text-xl font-medium">News {title}!</h1>
				<div className="w-full">
					<Carousel>
						<CarouselContent>
							{data.content.map((news) => (
								<CarouselItem key={news.id} className="basis-1/3">
									<NewsCard variant="userNews" data={news} />
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
		return newsUserCards();
	}

	return null;
}

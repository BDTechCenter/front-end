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
import { LinkFilterNewsUser } from "./LinkFilterNewsUser";
import { useState } from "react";

export interface NewsListProps {
	massageError: Error;
	massageNotFound: Error;
}

export default function NewsUserList({
	massageError,
	massageNotFound,
}: NewsListProps) {
	const { isLoading, isError, data } = useFetchGetUserNews();
	const [title, setTitle] = useState("Published");

	console.log(data);
	

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

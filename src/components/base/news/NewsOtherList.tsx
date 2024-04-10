"use client";

import { useFetchGetNewsOtherNews } from "@/api/hooks/news/queries";
import ImageError from "../common/ImageError";
import NewsOther from "./NewsOther";
import NewsOtherSkeleton from "../skeleton/NewsOtherSkeleton";

export default function NewsOtherList() {
	const { isLoading, isError, data } = useFetchGetNewsOtherNews();
	const newsCards = () => {
		return data?.content.length !== 0 ? (
			<div className="flex flex-col gap-5">
				{data?.content.map((news) => <NewsOther key={news.id} data={news} />)}
			</div>
		) : (
			<div className="absolute flex w-full items-center justify-center">
				<ImageError data={errorNewsOther.notFound} />
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
				<ImageError data={errorNewsOther.error} />
			</div>
		);
	}

	if (data) {
		return newsCards();
	}

	return null;
}

const errorNewsOther = {
	notFound: {
		text: "Other News not found",
		img: "/noNews.gif",
	},

	error: {
		text: "Error othernews",
		img: "/allError.gif",
	},
};

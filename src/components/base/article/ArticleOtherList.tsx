"use client";

import { useFetchGetOtherArticles } from "@/api/hooks/article/queries";
import ImageError from "../common/ImageError";
import ArticleOther from "./ArticleOther";
import ArticleOtherSkeleton from "../skeleton/ArticleOtherSkeleton";

export default function ArticleOtherList() {
	const { isLoading, isError, data } = useFetchGetOtherArticles();
	const ArticleCards = () => {
		return data?.content.length !== 0 ? (
			<div className="flex flex-col gap-5">
				{data?.content.map((article) => (
					<ArticleOther key={article.id} data={article} />
				))}
			</div>
		) : (
			<div className="absolute flex w-full items-center justify-center">
				<ImageError data={errorArticleOther.notFound} />
			</div>
		);
	};

	if (isLoading) {
		return (
			<div className="flex flex-col gap-5">
				<ArticleOtherSkeleton />
				<ArticleOtherSkeleton />
				<ArticleOtherSkeleton />
			</div>
		);
	}

	if (isError) {
		return (
			<div className="absolute flex w-full items-center justify-center">
				<ImageError data={errorArticleOther.error} />
			</div>
		);
	}

	if (data) {
		return ArticleCards();
	}

	return null;
}

const errorArticleOther = {
	notFound: {
		text: "Other Article not found",
		img: "/noNews.gif",
	},

	error: {
		text: "Error To load other articles",
		img: "/allError.gif",
	},
};

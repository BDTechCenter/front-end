"use client";

import { Error } from "@/api/types/all/type";
import { useFetchGetMainArticles } from "@/api/hooks/home/queries";
import ImageError from "../common/ImageError";
import { ArticleCardHomeSkeleton } from "../skeleton/ArticleCardHomeSkeleton";
import ArticleCardHome from "./ArticleCardHome";

export interface MainArticleCardHomeProps {
	messageError: Error;
	messageNotFound: Error;
}

export default function MainArticleCardHome({
	messageError,
	messageNotFound,
}: MainArticleCardHomeProps) {
	const { isLoading, isError, data } = useFetchGetMainArticles();

	const mainArticleData = data?.content;

	const ArticleCardsHome = () => {
		return mainArticleData && mainArticleData?.length !== 0 ? (
			<div className="flex w-full h-full gap-4">
				<div className="w-[55%] h-full">
					<ArticleCardHome data={mainArticleData[0]} />
				</div>
				<div className="w-[45%] h-full flex flex-col gap-3 justify-center items-center">
					{mainArticleData
						?.slice(1)
						.map((articleItem) => (
							<ArticleCardHome key={articleItem.id} data={articleItem} />
						))}
				</div>
			</div>
		) : (
			<ImageError data={messageNotFound} />
		);
	};

	if (isLoading) {
		return (
			<div className="flex w-full h-full gap-5">
				<div className="w-[55%] h-full">
					<ArticleCardHomeSkeleton />
				</div>
				<div className="w-[45%] flex flex-col gap-5 justify-center items-center">
					<ArticleCardHomeSkeleton />
					<ArticleCardHomeSkeleton />
				</div>
			</div>
		);
	}

	if (isError) {
		return <ImageError data={messageError} />;
	}

	if (data) {
		return ArticleCardsHome();
	}

	return null;
}

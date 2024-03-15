import { News } from "@/api/types/news/type";
import ImageError from "../common/ImageError";
import NewsCard from "./NewsCard";
import { Error } from "@/api/types/all/type";
import { NewsCardSkeleton } from "../skeleton/NewsCardSkeleton";

export interface NewsListProps {
	data?: News[];
	isLoading?: boolean;
	isError?: boolean;
	massageError: Error;
	massageNotFound: Error;
}

export default function NewsList({ data, isLoading, isError, massageError, massageNotFound }: NewsListProps) {

	const newsCards = () => {
		return (data?.length !== 0 ? (
			<>
				{data?.map((news) => (
					<NewsCard key={news.id} data={news} />
				))}
			</>
		) : (
			<div className="absolute flex w-full items-center justify-center">
				<ImageError data={massageNotFound} />
			</div>
		));
	};

	if (isLoading) {
		return (
			<>
				<NewsCardSkeleton />
				<NewsCardSkeleton />
				<NewsCardSkeleton />
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

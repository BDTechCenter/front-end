import { News } from "@/api/types/news/type";
import ImageError from "../common/ImageError";
import NewsCard from "./NewsCard";
import { Error } from "@/api/types/all/type";

export interface NewsListProps {
	data?: News[]
	isLoading?: boolean
	isError?: boolean
	massageError?: Error
}

export default function NewsList({ data, isLoading, isError, massageError }: NewsListProps) {

	return (
		<section className="relative grid grid-cols-2 sm:grid-cols-3 gap-5 2xl:gap-7">
			{data ? (
				<>
					{data?.map((news) => (
						<NewsCard key={news.id} data={news} />
					))}
				</>
			) : isLoading ? (
				<></>
			) : isError ? (
				<div className="absolute flex w-full items-center justify-center">
					<ImageError data={massageError} />
				</div>
			) : (<></>)}
		</section>
	);
}

{/* */ }

{/* <>
					
				</> */}
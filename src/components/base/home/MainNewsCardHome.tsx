import { Button } from "@/components/ui/button";
import NewsCardHome from "./NewsCardHome";
import ImageError from "../common/ImageError";
import { News } from "@/api/types/news/type";
import { Error } from "@/api/types/all/type";
import { NewsCardHomeSkeleton } from "../skeleton/NewsCardHomeSkeleton";

export interface MainNewsCardHomeProps {
	data?: News[]
	isLoading?: boolean
	isError?: boolean
	massageError: Error
	massageNotFound: Error
}

export default function MainNewsCardHome({data, isLoading, isError, massageError, massageNotFound}: MainNewsCardHomeProps) {

	return (
		<div className="flex my-16 h-[32rem] 2xl:h-[40rem] w-full items-center justify-center">
			<div className="flex flex-col w-[80%] 2xl:w-[70%] h-full gap-10">
				{data ? (
						data.length !== 0 ? (
							<div className="flex flex-row w-full h-full gap-5">
								<div className="w-[55%] h-full">
									<NewsCardHome data={data[0]} orientation={"relative"} />
								</div>
								<div className="w-[45%] flex flex-col gap-5 justify-center items-center">
									{data?.slice(1).map((newsItem) => (
										<NewsCardHome data={newsItem} orientation={"relative"} />
									))}
								</div>
							</div>
						) 
						: (
							<ImageError data={massageNotFound} />
						)
			) : isLoading ? (
				<div className="flex flex-row w-full h-full gap-5">
					<div className="w-[55%] h-full">
						<NewsCardHomeSkeleton/>
					</div>
					<div className="w-[45%] flex flex-col gap-5 justify-center items-center">
						<NewsCardHomeSkeleton/>
						<NewsCardHomeSkeleton/>
					</div>
				</div>
			) : isError ? (
				<ImageError data={massageError} />
			) : (
				<ImageError data={massageError} />
			)}
			</div>
		</div>
	);
}
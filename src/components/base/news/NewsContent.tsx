"use client";

import Image from "next/image";
import ImageError from "../common/ImageError";
import { Error } from "@/api/types/all/type";
import { NewsContentSkeleton } from "../skeleton/NewsContentSkeleton";
import NewsOutherList from "./NewsOtherList";
import CommentList from "./CommentList";
import ModalCreateComment from "./ModalCreateComment";
import { useFetchGetNewsId } from "@/api/hooks/news/queries";
import { usePathname } from "next/navigation";

export interface NewsContentProps {
	massageError: Error;
	massageCommentError: Error;
	messageErrorContent: Error;
}

export default function NewsContent({
	massageError,
	massageCommentError,
}: NewsContentProps) {
	const path = usePathname();
	const newsId = path.split("/")[2];
	const { isLoading, isError, data } = useFetchGetNewsId(newsId);

	const newsContentData = () => {
		return data ? (
			<>
				<div className="flex flex-col gap-7 w-[70%]">
					<h1 id="titleAdvanced" className="font-bold text-3xl 2xl:text-4xl">
						{data.title}
					</h1>
					<div className="flex flex-row gap-3 w-full">
						{data.tags.map((tag) => (
							<div
								key={tag}
								className="flex justify-center items-center p-2 bg-bdgray rounded-lg text-sm"
							>
								{tag}
							</div>
						))}
					</div>
					<div className="bg-bdgray rounded-lg flex flex-col py-2 px-5 w-[50%]">
						<p className="font-semibold">{data.author}</p>
						<p className="text-xs">{data.updateDate}</p>
					</div>
					<Image
						src={data.imageUrl}
						alt={data.id + "Img"}
						width={800}
						height={800}
						className="w-full max-w-[60rem] max-h-[45rem] border"
					/>
					<div className="w-full max-w-[60rem] justify-center items-center">
						{data ? (
							<div
								className="text-justify w-full"
								style={{ wordWrap: "break-word" }}
								dangerouslySetInnerHTML={{ __html: data.body }}
							></div>
						) : (
							<></>
						)}
					</div>
					<div className="w-full h-[2px] bg-[#D9D9D9] mt-12"></div>
					<h1 className="mt-4 font-semibold text-lg text-bdpurple">Comments</h1>
					<div className="w-full max-h-96 overflow-y-scroll">
						<CommentList
							massagenotFaoundError={massageCommentError}
							massageError={massageCommentError}
							id={data.id}
						/>
					</div>
					<ModalCreateComment />
				</div>
				<aside className="w-[30%]">
					<h1 className="text-bdpurple font-bold text-xl mb-3">Other News</h1>
					<NewsOutherList massageError={massageError} />
				</aside>
			</>
		) : (
			<>
				<div className="flex w-full items-center justify-center">
					<ImageError data={massageError} />
				</div>
			</>
		);
	};

	if (isLoading) {
		return <NewsContentSkeleton />;
	}

	if (isError) {
		return (
			<div className="flex w-full h-full items-center justify-center">
				<ImageError data={massageError} />
			</div>
		);
	}

	if (data) {
		return newsContentData();
	}

	return null;
}

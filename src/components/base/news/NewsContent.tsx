"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Error } from "@/api/types/all/type";
import { useFetchGetNewsId } from "@/api/hooks/news/queries";
import ImageError from "../common/ImageError";
import { NewsContentSkeleton } from "../skeleton/NewsContentSkeleton";
import NewsOtherList from "./NewsOtherList";
import CommentList from "./CommentList";
import LikeUpvote from "./LikeUpvote";
import ModalAddComment from "./ModalAddComment";
import { MarkdownRenderer } from "../common/MarkdownRenderer";

export default function NewsContent() {
	const path = usePathname();
	const newsId = path.split("/")[2];
	const { isLoading, isError, data } = useFetchGetNewsId(newsId);

	if (data) {
		return (
			<>
				<div className="flex flex-col gap-4 w-[80%] max-[850px]:w-full break-words">
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
					<div className="bg-bdgray rounded-lg flex flex-col py-2 px-5 w-[50%] max-sm:w-full">
						<p className="font-semibold">{data.author}</p>
						<p className="text-xs">{data.updateDate}</p>
					</div>
					<Image
						src={data.imageUrl}
						alt={data.id + "Img"}
						width={800}
						height={800}
						className="w-full max-h-[45rem] border"
					/>
					<div className="w-full justify-center items-center">
						{data ? <MarkdownRenderer>{data.body}</MarkdownRenderer> : <></>}
					</div>
					<h1 className="mt-4 font-semibold text-lg text-bdpurple">
						Is this news relevant to you?
					</h1>
					<LikeUpvote
						id={data.id}
						alreadyUpVoted={data.alreadyUpVoted}
						method="news"
						sizeIcon={22}
					/>
					<div className="w-full h-[2px] bg-[#D9D9D9] mt-12"></div>
					<h1 className="mt-4 font-semibold text-lg text-bdpurple">Comments</h1>
					<div className="w-full">
						<CommentList id={data.id} />
					</div>
					<ModalAddComment newsId={newsId} />
				</div>
				<aside className="w-[30%] h-full max-[850px]:hidden">
					<h1 className="text-bdpurple font-bold text-xl mb-3">Other News</h1>
					<NewsOtherList />
				</aside>
			</>
		);
	}

	if (!data) {
		return (
			<div className="flex w-full h-full items-center justify-center">
				<ImageError data={errorNews.notFound} />
			</div>
		);
	}

	if (isLoading) {
		return <NewsContentSkeleton />;
	}

	if (isError || !data) {
		return (
			<div className="flex w-full h-full items-center justify-center">
				<ImageError data={errorNews.error} />
			</div>
		);
	}

	return null;
}

const errorNews = {
	notFound: {
		text: "News not found",
		img: "/noNews.gif",
	},

	error: {
		text: "Error news",
		img: "/allError.gif",
	},
};

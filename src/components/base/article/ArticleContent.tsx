"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useFetchGetArticleId } from "@/api/hooks/article/queries";
import ImageError from "../common/ImageError";
import { ArticleContentSkeleton } from "../skeleton/ArticleContentSkeleton";
import ArticleOtherList from "./ArticleOtherList";
import CommentList from "./CommentList";
import LikeUpvote from "./LikeUpvote";
import ModalAddComment from "./ModalAddComment";
import { MarkdownRenderer } from "../common/MarkdownRenderer";

export default function ArticleContent() {
	const path = usePathname();
	const articleId = path.split("/")[2];
	const { isLoading, isError, data, isFetched } =
		useFetchGetArticleId(articleId);

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
					<div className="inline-flex justify-between items-center">
						<div className="bg-bdgray rounded-lg flex flex-col py-2 px-5 w-[50%] max-sm:w-full">
							<p className="font-semibold">{data.author}</p>
							<p className="text-xs">{data.updateDate}</p>
						</div>
						<div>
							<LikeUpvote
								id={data.id}
								alreadyUpVoted={data.alreadyUpVoted}
								method="articles"
								sizeIcon={22}
							/>
						</div>
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
					<div className="w-full h-[2px] bg-[#D9D9D9] mt-12"></div>
					<h1 className="mt-4 font-semibold text-lg text-bdpurple">Comments</h1>
					<div className="w-full">
						<CommentList id={data.id} />
					</div>
					<ModalAddComment articleId={articleId} />
				</div>
				<aside className="w-[30%] h-full max-[850px]:hidden">
					<h1 className="text-bdpurple font-bold text-xl mb-3">
						Other Article
					</h1>
					<ArticleOtherList />
				</aside>
			</>
		);
	}

	if (isFetched && !data) {
		return (
			<div className="flex w-full h-full items-center justify-center">
				<ImageError data={errorArticle.notFound} />
			</div>
		);
	}

	if (isLoading) {
		return <ArticleContentSkeleton />;
	}

	if (isError || !data) {
		return (
			<div className="flex w-full h-full items-center justify-center">
				<ImageError data={errorArticle.error} />
			</div>
		);
	}

	return null;
}

const errorArticle = {
	notFound: {
		text: "Article not found",
		img: "/noNews.gif",
	},

	error: {
		text: "Error when trying to load the article",
		img: "/allError.gif",
	},
};

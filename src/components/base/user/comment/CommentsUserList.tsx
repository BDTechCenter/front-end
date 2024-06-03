"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useFetchGetUserComments } from "@/api/hooks/user/queries";
import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import CommentSkeleton from "../../skeleton/CommentSkeleton";
import ImageError from "../../common/ImageError";
import Comment from "../../common/Comment";

export function CommentsUserList() {
	const { isLoading, isError, data } = useFetchGetUserComments();
	const searchParams = useSearchParams();
	const filterStatus = searchParams.get("status");
	const status = filterStatus ? filterStatus : "published";
	const [title, setTitle] = useState("Error");

	useEffect(() => {
		if (status === "published") {
			setTitle("Published");
		}
		if (status === "archived") {
			setTitle("Archived");
		}
		setTitle("Published");
	}, [searchParams, status]);

	const commentUserCards = () => {
		return data?.content.length !== 0 ? (
			<div className="flex flex-col w-full">
				<div className="w-full">
					<Carousel>
						<CarouselContent className="p-4 gap-5">
							{data?.content.map((comment) => (
								<Comment
									key={comment.id}
									data={comment}
									variant="userComment"
								/>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
		) : (
			<div className="flex w-full items-center justify-center">
				<ImageError
					data={{
						text: "No comments, write yours",
						img: "/noComment.gif",
					}}
				/>
			</div>
		);
	};

	if (isLoading) {
		return (
			<div className="relative grid grid-cols-2 sm:grid-cols-3 gap-5 2xl:gap-7">
				<CommentSkeleton />
				<CommentSkeleton />
				<CommentSkeleton />
			</div>
		);
	}

	if (isError) {
		return (
			<div className="flex w-full items-center justify-center">
				<ImageError
					data={{
						text: "Error Comments",
						img: "/allError.gif",
					}}
				/>
			</div>
		);
	}

	if (data) {
		return status !== "archived" ? commentUserCards() : <></>;
	}

	return null;
}

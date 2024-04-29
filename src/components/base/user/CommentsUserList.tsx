"use client";
import { useFetchGetUserComments } from "@/api/hooks/user/queries";
import CommentSkeleton from "../skeleton/CommentSkeleton";
import {
	Carousel,
	CarouselContent,
	CarouselPrevious,
	CarouselNext,
} from "@/components/ui/carousel";
import ImageError from "../common/ImageError";
import Comment from "../common/Comment";
import { Error } from "@/api/types/all/type";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export interface CommentsUserListProps {
	massageError: Error;
	massageNotFound: Error;
}

export function CommentsUserList({
	massageError,
	massageNotFound,
}: CommentsUserListProps) {
	const { isLoading, isError, data } = useFetchGetUserComments();
	const searchParams = useSearchParams();
	const filterNews = searchParams.get("news");
	const status = filterNews ? filterNews : "published";
	const [title, setTitle] = useState("Error");

	useEffect(() => {
		if (status === "published") {
			setTitle("Published");
		}
		if (status === "archived") {
			setTitle("Archived");
		}
		if (status === "") {
			setTitle("Published");
		}
	}, [searchParams, status]);

	const commentUserCards = () => {
		return data?.content.length !== 0 && data ? (
			<div className="flex flex-col w-full">
				<h1 className="text-xl font-medium">Comments {title}!</h1>
				<div className="w-full">
					<Carousel>
						<CarouselContent className="p-4 gap-5">
							{data.content.map((comment) => (
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
				<ImageError data={massageNotFound} />
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
				<ImageError data={massageError} />
			</div>
		);
	}

	if (data) {
		return status !== "archived" ? commentUserCards() : <></>;
	}

	return null;
}

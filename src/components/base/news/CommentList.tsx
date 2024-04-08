import Comment from "./Comment";
import ImageError from "../common/ImageError";
import { useFetchGetCommentNewsId } from "@/api/hooks/news/queries";
import { Error } from "@/api/types/all/type";
import CommentSkeleton from "../skeleton/CommentSkeleton";
import { useQueryClient } from "@tanstack/react-query";
import { idea } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface CommentListProps {
	messageError: Error;
	messagenotFaoundError: Error;
	id: string;
}

export default function CommentList({
	messageError,
	id,
	messagenotFaoundError,
}: CommentListProps) {
	const queryClient = useQueryClient();
	const { isLoading, isError, data, isSuccess } = useFetchGetCommentNewsId(id);

	isSuccess && (
		console.log(queryClient.getQueryData(["comments", id]))
	)

	const commentCards = () => {
		return data?.content.length !== 0 ? (
			<div className="flex flex-col gap-5 max-h-96 overflow-y-scroll">
				{data?.content.map((comment) => (
					<Comment key={comment.id} data={comment} />
				))}
			</div>
		) : (
			<div className="flex justify-center items-center w-full h-80">
				<ImageError data={messageError} />
			</div>
		);
	};

	if (isLoading) {
		return (
			<div className="flex flex-col gap-5 max-h-96 overflow-y-scroll">
				<CommentSkeleton />
				<CommentSkeleton />
				<CommentSkeleton />
			</div>
		);
	}

	if (isError) {
		return (
			<div className="flex justify-center items-center w-full h-80">
				<ImageError data={messagenotFaoundError} />
			</div>
		);
	}

	if (data) {
		return commentCards();
	}

	return null;
}

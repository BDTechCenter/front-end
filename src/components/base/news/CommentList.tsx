import Comment from "./Comment";
import ImageError from "../common/ImageError";
import { useFetchGetCommentNewsId } from "@/api/hooks/news/queries";
import { Error } from "@/api/types/all/type";
import CommentSkeleton from "../skeleton/CommentSkeleton";

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
	const { isLoading, isError, data } = useFetchGetCommentNewsId(id);

	const commentCards = () => {
		return data ? (
			<div className="flex flex-col gap-5 max-h-96 overflow-y-scroll">
				{data?.map((comment) => (
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

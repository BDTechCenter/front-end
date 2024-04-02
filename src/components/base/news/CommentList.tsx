import Comment from "./Comment";
import ImageError from "../common/ImageError";
import { useFetchGetCommentNewsId } from "@/api/hooks/news/queries";
import { Error } from "@/api/types/all/type";
import CommentSkeleton from "../skeleton/CommentSkeleton";

interface CommentListProps {
	massageError: Error;
	massagenotFaoundError: Error;
	id: string;
}

export default function CommentList({
	massageError,
	id,
	massagenotFaoundError,
}: CommentListProps) {
	const { isLoading, isError, data } = useFetchGetCommentNewsId(id);

	const commentCards = () => {
		return data?.content.length !== 0 ? (
			<div className="flex flex-col gap-5 max-h-[22rem] overflow-y-scroll">
				{data?.content.map((comment) => (
					<Comment key={comment.id} data={comment} />
				))}
			</div>
		) : (
			<div className="flex justify-center items-center w-full h-80">
				<ImageError data={massageError} />
			</div>
		);
	};

	if (isLoading) {
		return (
			<>
				<CommentSkeleton />
				<CommentSkeleton />
				<CommentSkeleton />
			</>
		);
	}

	if (isError) {
		return (
			<div className="flex justify-center items-center w-full h-80">
				<ImageError data={massagenotFaoundError} />
			</div>
		);
	}

	if (data) {
		return commentCards();
	}

	return null;
}

import Comment from "../common/Comment";
import ImageError from "../common/ImageError";
import CommentSkeleton from "../skeleton/CommentSkeleton";

interface CommentListProps {
	id: string;
}

export default function CommentList({ id }: CommentListProps) {
	const { isLoading, isError, data } = useFetchGetCommentNewsId(id);

	const commentCards = () => {
		return data?.length !== 0 ? (
			<div className="flex flex-col gap-5 max-h-96 overflow-y-scroll">
				{data?.map((comment) => <Comment key={comment.id} variant="anyComment" data={comment} />)}
			</div>
		) : (
			<div className="flex justify-center items-center w-full h-80">
				<ImageError data={errorComment.notFound} />
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
				<ImageError data={errorComment.error} />
			</div>
		);
	}

	if (data) {
		return commentCards();
	}

	return null;
}

const errorComment = {
	notFound: { text: "No comments, write yours", img: "/noComment.gif" },

	error: { text: "Error Comments", img: "/allError.gif" },
};

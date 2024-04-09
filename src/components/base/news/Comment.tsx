import { CommentType } from "@/api/types/news/type";
import LikeUpvote from "./LikeUpvote";
import { MarkdownRenderer } from "../common/MarkdownRenderer";

interface CommentProps {
	data: CommentType;
}

export default function Comment({ data }: CommentProps) {
	return (
		<div className="flex w-[80%] items-start border border-bdlightpurple/20 rounded-sm p-4 gap-1">
			<div className="flex flex-col w-full">
				<h1 className="text-md 2xl:text-lg font-bold">{data.author}</h1>
				<MarkdownRenderer>{data.comment}</MarkdownRenderer>
			</div>
			<div>
				<LikeUpvote
					id={data.id}
					alreadyUpVoted={data.alreadyUpVoted}
					method="comments"
					sizeIcon={18}
				/>
			</div>
		</div>
	);
}

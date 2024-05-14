import { FaTrashCan } from "react-icons/fa6";
import { CommentType } from "@/api/types/news/type";
import { cn } from "@/lib/utils";
import LikeUpvote from "../news/LikeUpvote";
import { MarkdownRenderer } from "./MarkdownRenderer";
import { AlertArchiveComment } from "../user/AlertArchiveComment";

interface CommentProps {
	data: CommentType;
	variant: "userComment" | "anyComment";
}

export default function Comment({ data, variant }: CommentProps) {
	return (
		<div
			className={cn(
				"flex items-start border border-bdlightpurple/20 rounded-sm p-4 gap-1",
				variant === "userComment" ? "w-96" : "w-[80%]"
			)}
		>
			<div className="flex flex-col w-full">
				<div className="flex flex-row gap-5 justify-between items-center">
					<h1 className="text-md 2xl:text-lg font-bold">{data.author}</h1>
					{variant === "anyComment" ? (
						<div>
							<LikeUpvote
								id={data.id}
								alreadyUpVoted={data.alreadyUpVoted}
								method="comments"
								sizeIcon={18}
							/>
						</div>
					) : (
						<div className="flex gap-1 relative justify-end items-center">
							<AlertArchiveComment id={data.id}/>
						</div>
					)}
				</div>
				<MarkdownRenderer>{data.comment}</MarkdownRenderer>
			</div>
		</div>
	);
}

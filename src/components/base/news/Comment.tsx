import { CommentType } from "@/api/types/news/type";
import LikeUpvote from "./LikeUpvote";

interface CommentProps {
	data: CommentType;
}

export default function Comment({ data }: CommentProps) {
	return (
		<div className="flex flex-col w-[80%] border border-bdlightpurple/20 rounded-sm p-4 gap-1">
			<h1 className="text-md 2xl:text-lg font-bold">{data.author}</h1>
			<div
				className="text-[0.75rem] 2xl:text-sm"
				style={{ wordWrap: "break-word" }}
				dangerouslySetInnerHTML={{ __html: data.comment }}
			></div>
			<LikeUpvote id={data.id} alreadyUpVoted={data.alreadyUpVoted} method="comments" sizeIcon={18}/>
		</div>
	);
}

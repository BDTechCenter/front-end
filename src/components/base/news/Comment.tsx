import { CommentType } from "@/api/types/news/type";
import ReactMarkdown from "react-markdown";

interface CommentProps {
	data: CommentType;
}

export default function Comment({ data }: CommentProps) {
	return (
		<div className="flex flex-col w-[80%] border border-bdlightpurple/20 rounded-sm p-4 gap-1">
			<h1 className="text-md 2xl:text-lg font-bold">{data.author}</h1>
			<ReactMarkdown
				components={{
					pre: ({ node, ...props }) => (
						<div className="w-full p-2 my-2 overflow-auto rounded-lg bg-black/10">
							<pre {...props} />
						</div>
					),
					code: ({ node, ...props }) => (
						<code className="p-1 rounded-lg bg-black/10" {...props} />
					),
				}}
				className="overflow-hidden text-sm leading-7"
			>
				{data.comment}
			</ReactMarkdown>
			{/* <div
				className="text-[0.75rem] 2xl:text-sm"
				style={{ wordWrap: "break-word" }}
				dangerouslySetInnerHTML={{ __html: data.comment }}
			></div> */}
		</div>
	);
}

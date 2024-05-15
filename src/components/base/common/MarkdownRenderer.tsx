import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { CopyBlock, dracula } from "react-code-blocks";
import React from "react";

type MarkdownRendererProps = {
	children: string;
};

export function MarkdownRenderer({
	children: markdown,
}: MarkdownRendererProps) {
	return (
		<Markdown
			remarkPlugins={[remarkGfm]}
			rehypePlugins={[rehypeRaw]}
			components={{
				pre: ({ node, children, ...props }) => {
					return (
						<pre {...props}>
							<CopyBlock
								text={String(children)}
								language="javascript"
								theme={dracula}
								codeBlock
							/>
						</pre>
					);
				},
			}}
			className="flex flex-col gap-5 text-justify text-base overflow-hidden leading-7"
		>
			{markdown}
		</Markdown>
	);
}

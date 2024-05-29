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
	const extractText = (child: React.ReactNode): string => {
		if (typeof child === "string") {
			return child;
		}
		if (React.isValidElement(child) && child.props && child.props.children) {
			// @ts-ignore
			return React.Children.map(child.props.children, extractText).join("");
		}
		return "";
	};
	return (
		<Markdown
			remarkPlugins={[remarkGfm]}
			rehypePlugins={[rehypeRaw]}
			components={{
				pre: ({ node, children, ...props }) => {
					// @ts-ignore
					const codeString = React.Children.map(children, extractText).join("");

					return (
						<pre {...props}>
							<CopyBlock
								text={codeString}
								language="jsx"
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

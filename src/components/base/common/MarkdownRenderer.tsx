import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

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
				pre: ({ node, ...props }) => (
					<pre className="w-full p-2 my-2 overflow-auto rounded-lg bg-black/10">
						<code {...props} />
					</pre>
				),
				code: ({ node, ...props }) => (
					<code className="p-1 rounded-lg bg-black/10" {...props} />
				),
			}}
			className="overflow-hidden text-sm leading-7"
		>
			{markdown}
		</Markdown>
	);
}

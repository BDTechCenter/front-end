import ".//quill.css";
import hljs from "highlight.js";
import dynamic from "next/dynamic";
import { forwardRef, ForwardRefRenderFunction } from "react";

const ReactQuill = dynamic(
	() => {
		hljs.configure({
			languages: ["javascript", "php", "go", "java", "python"],
		});
		// @ts-ignore
		window.hljs = hljs;
		return import("react-quill");
	},
	{
		ssr: false,
		loading: () => <p>Loading</p>,
	}
);

export interface InputTextEditProps {
	onChange: (htmlValue: string) => void;
	value: string;
}

const InputTextEdit: ForwardRefRenderFunction<
	HTMLInputElement,
	InputTextEditProps
> = ({ onChange, value }, ref) => {
	const editorStyle = {
		backgroundColor: "transparent",
	};

	const modules = {
		syntax: true,
		toolbar: [
			["bold", "italic", "underline", "code-block", "link"],
			["image", "video"],
		],
	};

	return (
		<div className="flex w-full justify-center items-center" ref={ref}>
			<div className="w-full">
				<ReactQuill
					style={editorStyle}
					theme="snow"
					modules={modules}
					value={value}
					onChange={onChange}
				/>
			</div>
		</div>
	);
};

export default forwardRef(InputTextEdit);

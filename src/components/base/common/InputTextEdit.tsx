import "react-quill/dist/quill.snow.css";
import hljs from "highlight.js";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(
	() => {
		hljs.configure({
			languages: ["javascript", "php", "go"],
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

const InputTextEdit = ({ onChange, value }: InputTextEditProps) => {
	const editorStyle = {
		marginBottom: "4rem",
		backgroundColor: "transparent",
		height: "15rem",
		width: "100%"
	};

	const modules = {
		syntax: true,
		toolbar: [
			["bold", "italic", "underline", "code-block", "link"],
			["image", "video"],
		],
	};

	return (
		<div className="flex w-full justify-center items-center">
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

export default InputTextEdit;

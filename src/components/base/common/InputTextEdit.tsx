import { useEffect, useState } from "react";
import hljs from "highlight.js";
import "react-quill/dist/quill.snow.css";
import "./quill.css"
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

import React from 'react'

const InputTextEdit = ({ onChange, value }: InputTextEditProps) => {
	const editorStyle = {
		paddingLeft: "1.75rem",
		marginBottom: "1.25rem",
		marginTop: "0.50rem",
		fontSize: "1rem",
		width: "100%",
		backgroundColor: "transparent",
		borderInput: "hsl(var(--input))",
		padding: "0.5rem",
		boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
		overflow: "hidden",
		height: "18rem",
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
			<div className="w-full max-w-[100%]">
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
}

export default InputTextEdit
import ".//quill.css";
import dynamic from "next/dynamic";
import Quill from "quill";
import { LegacyRef, useEffect, useMemo, useRef } from "react";

// @ts-ignore
import ImageUploader from "quill-image-uploader";
import { apiImage as api } from "@/services/api";

Quill.register("modules/imageUploader", ImageUploader);

interface ReactQuillProps {
	forwardedRef: LegacyRef<any>;
	// other props can be added here
	[key: string]: any;
}

const ReactQuill = dynamic<ReactQuillProps>(
	async () => {
		const { default: RQ } = await import("react-quill");

		// eslint-disable-next-line react/display-name
		return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
	},
	{
		ssr: false,
	}
);

export interface InputTextEditProps {
	onChange: (htmlValue: string) => void;
	value: string;
}

const InputTextEdit = ({ onChange, value }: InputTextEditProps) => {
	const quillRef = useRef<Quill | null>(null);

	useEffect(() => {
		const check = () => {
			if (quillRef.current) {
				// Quill is initialized
				return;
			}
			setTimeout(check, 200);
		};
		check();
	}, []);

	const editorStyle = {
		backgroundColor: "transparent",
	};

	const modules = useMemo(
		() => ({
			toolbar: {
				container: [
					[{ header: [1, 2, 3, 4, false] }],
					["bold", "italic", "underline", "blockquote"],
					[{ color: [] }],
					[
						{ list: "ordered" },
						{ list: "bullet" },
						{ indent: "-1" },
						{ indent: "+1" },
					],
					["code-block", "link", "image"],
					["clean"],
				],
			},
			clipboard: {
				matchVisual: false,
			},
			imageUploader: {
				upload: (file: string) => {
					return new Promise((resolve, reject) => {
						const formData = new FormData();
						formData.append("image", file);

						api
							.post("upload", formData, {
								headers: {
									"Content-Type": "multipart/form-data",
								},
							})
							.then((response) => response)
							.then((result) => {
								console.log(result);
								resolve(result.data.url);
							})
							.catch((error) => {
								reject("Upload failed");
								console.error("Error:", error);
							});
					});
				},
			},
		}),
		[]
	);

	const formats = [
		"header",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"list",
		"bullet",
		"indent",
		"link",
		"code-block",
		"image",
		"color",
		"clean",
		"imageBlot"
	];

	return (
		<div className="flex w-full justify-center items-center">
			<div className="w-full">
				<ReactQuill
					forwardedRef={quillRef}
					style={editorStyle}
					theme="snow"
					modules={modules}
					value={value}
					formats={formats}
					onChange={onChange}
				/>
			</div>
		</div>
	);
};

export default InputTextEdit;

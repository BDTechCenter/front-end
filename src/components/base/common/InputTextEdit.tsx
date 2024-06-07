import ".//quill.css";
import dynamic from "next/dynamic";
import Quill from "quill";
import { LegacyRef, useEffect, useMemo, useRef } from "react";

// @ts-ignore
import ImageUploader from "quill-image-uploader";
import Delta from "quill-delta";
import { useImageStore } from "@/store/useImageStore";

Quill.register("modules/imageUploader", ImageUploader);

interface ReactQuillProps {
	forwardedRef: LegacyRef<any>;
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
	const addImage = useImageStore((state) => state.addImage);

	useEffect(() => {
		const quill = quillRef.current;
		if (!quill) return;

		quill.clipboard.addMatcher("img", (node: any) => {
			const src = node.getAttribute("src");
			const blob = dataURLtoBlob(src);
			const delta = new Delta();

			uploadImage(blob).then((imageUrl) => {
				const range = quill.getSelection()?.index ?? 0;
				quill.updateContents(
					new Delta().retain(range).insert({ image: imageUrl })
				);
			});

			return delta;
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const editorStyle = {
		backgroundColor: "transparent",
	};

	const dataURLtoBlob = (dataURL: string): Blob => {
		const byteString = atob(dataURL.split(",")[1]);
		const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
		const ab = new ArrayBuffer(byteString.length);
		const ia = new Uint8Array(ab);
		for (let i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}
		return new Blob([ab], { type: mimeString });
	};

	const uploadImage = (file: File | Blob): Promise<string> => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => {
				const base64Image = reader.result as string;
				const id = Date.now();
				addImage({ id, file, url: base64Image });
				resolve(base64Image);
			};
			reader.onerror = (error) => {
				reject(error);
			};
			reader.readAsDataURL(file);
		});
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
						-{ indent: "+1" },
					],
					["code-block", "link", "image"],
					["clean"],
				],
			},
			clipboard: {
				matchVisual: false,
			},
			imageUploader: (file: File) => uploadImage(file),
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
		"imageBlot",
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

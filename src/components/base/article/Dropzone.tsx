import React, { useMemo } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import Image from "next/image";

export default function Dropzone({
	onDrop,
	...props
}: {
	onDrop: (acceptedFiles: FileWithPath[]) => void;
}) {
	const { getRootProps, getInputProps, acceptedFiles, fileRejections } =
		useDropzone({
			onDrop,
			multiple: false,
			accept: {
				"image/jpeg": [".jpeg", ".png"],
			},
		});

	const showImagePreview = acceptedFiles.length > 0;
	const previewImage =
		showImagePreview && URL.createObjectURL(acceptedFiles[0]);

	return (
		<section {...getRootProps({ className: "dropzone h-52 " })}>
			<input
				{...getInputProps()}
				{...props}
				type="file"
				accept="image/*"
				className="h-full hidden"
			/>
			<label
				htmlFor="file"
				className="flex justify-center items-center rounded-sm w-full h-full border-2 border-[#E6E6E6] border-dashed cursor-pointer"
			>
				{useMemo(() => {
					if (previewImage) {
						return (
							<Image
								src={previewImage}
								alt="Preview"
								width={500}
								height={500}
								className="w-full h-full rounded-lg"
							/>
						);
					} else {
						return (
							<p className="text-lg 2xl:text-sm my-[15%]">
								Choose a poster for your Article
							</p>
						);
					}
				}, [previewImage])}
			</label>

			{fileRejections.length > 0 && toast.error(`Rejected File`)}
		</section>
	);
}

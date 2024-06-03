"use client";

import {
	forwardRef,
	ForwardRefRenderFunction,
	useEffect,
	useState,
} from "react";
import Image from "next/image";

export interface ImageSelectionProps {
	onChange: (file: File) => void;
	defaultImage?: File | null | undefined | string;
}

const ImageButton: ForwardRefRenderFunction<
	HTMLInputElement,
	ImageSelectionProps
> = ({ onChange, defaultImage }, ref) => {
	const [previewImage, setPreviewImage] = useState<File | null>(null);
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);

	console.log(previewUrl);

	useEffect(() => {
		if (!previewImage && defaultImage) {
			if (defaultImage instanceof File) {
				setPreviewUrl(URL.createObjectURL(defaultImage));
			}
			if (typeof defaultImage === "string") {
				setPreviewUrl(defaultImage);
			}
		}
	}, [previewImage, defaultImage]);

	const getFileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target?.files?.[0];
		if (file) {
			setPreviewImage(file);
			setPreviewUrl(URL.createObjectURL(file));
			onChange(file);
		}
	};

	return (
		<div className="h-56">
			<input
				ref={ref}
				id="file"
				className="h-full hidden"
				type="file"
				accept="image/jpeg, image/jpg, image/png, image/webp"
				onChange={getFileImage}
			/>
			<label
				htmlFor="file"
				className="flex justify-center items-center rounded-sm w-full h-full border-2 border-[#E6E6E6] border-dashed cursor-pointer"
			>
				{previewUrl ? (
					<Image
						src={previewUrl}
						alt="Preview"
						width={500}
						height={500}
						className="size-full rounded-lg"
					/>
				) : (
					<p className="text-lg 2xl:text-sm">
						Choose a poster for your Article
					</p>
				)}
			</label>
		</div>
	);
};

export default forwardRef(ImageButton);

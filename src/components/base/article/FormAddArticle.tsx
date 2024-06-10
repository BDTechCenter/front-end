"use client";

import { z } from "zod";
import { useState } from "react";
import { msalInstance } from "@/lib/sso/msalInstance";
import { resizeFile } from "@/lib/utils";
import { useMutationPostArticle } from "@/api/hooks/article/queries";
import { articleSchema } from "@/types/schemas/articleShema";
import { useImageStore } from "@/store/useImageStore";
import { apiImage } from "@/services/api";
import { FormArticleLayout } from "../common/FormArticleLayout";
import { AlertAddArticle } from "./AlertAddArticle";

export function FormAddArticle() {
	const [open, setOpen] = useState(false);
	const { mutateAsync } = useMutationPostArticle();
	const { images, clearImages, replaceImage } = useImageStore((state) => ({
		images: state.images,
		clearImages: state.clearImages,
		replaceImage: state.replaceImage,
	}));

	const articleObject = async (values: z.infer<typeof articleSchema>) => {
		const accountInfo = msalInstance.getActiveAccount();
		const author: string = accountInfo?.name || "";

		for (const image of images) {
			const formImg = new FormData();
			formImg.append("image", image.file);

			try {
				const response = await apiImage.post("upload", formImg, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				});
				console.log(response);

				const imageUrl = response.data.imageUrl;
				replaceImage(image.id, imageUrl);

				values.body = values.body.replace(image.url, imageUrl);
			} catch (error) {
				console.error("Error uploading image:", error);
			}
		}
		clearImages();

		const formData = new FormData();
		console.log(values.tags);
		formData.append("author", author);
		formData.append("title", values.title);
		formData.append("body", values.body);

		if (values.tags) {
			formData.append("tags", values.tags?.toString().toLocaleLowerCase());
		}

		if (values.image) {
			if (values.image instanceof File) {
				await resizeFile(values.image).then((image) => {
					formData.append("image", image);
				});
			}
			formData.append("image", values.image);
		}

		return formData;
	};

	async function onSubmitForm(values: z.infer<typeof articleSchema>) {
		const FormData = await articleObject(values);

		await mutateAsync(FormData).then(() => setOpen(false));
	}

	return (
		<FormArticleLayout
			formData={{
				open: open,
				title: "Add Article",
				idForm: "FormAddArticle",
				OnSubmit: onSubmitForm,
				alertSubmit: <AlertAddArticle />,
			}}
		/>
	);
}

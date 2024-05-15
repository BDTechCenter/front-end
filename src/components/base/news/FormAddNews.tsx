"use client";

import { z } from "zod";
import { useState } from "react";
import { useMutationPostNews } from "@/api/hooks/news/queries";
import { msalInstance } from "@/lib/sso/msalInstance";
import { newsSchema } from "@/types/schemas/newsShema";
import { resizeFile } from "@/lib/utils";
import { AlertAddNews } from "./AlertAddNews";
import { FormNewsLayout } from "../common/FormNewsLayout";

export function FormAddNews() {
	const [open, setOpen] = useState(false);
	const { mutateAsync } = useMutationPostNews();

	const NewsObject = async (values: z.infer<typeof newsSchema>) => {
		const accountInfo = msalInstance.getActiveAccount();
		const author: string = accountInfo?.name || "";

		const formData = new FormData();
		console.log(values.tags);
		formData.append("author", author);
		formData.append("title", values.title);
		formData.append("body", values.body);

		if (values.tags) {
			formData.append("tags", values.tags?.toString().toLocaleLowerCase());
		}

		if (values.image) {
			await resizeFile(values.image).then((image) => {
				formData.append("image", image);
			});
		}

		return formData;
	};

	async function onSubmitForm(values: z.infer<typeof newsSchema>) {
		console.log(values);
		const newsFormData = await NewsObject(values);

		await mutateAsync(newsFormData).then(() => setOpen(false));
	}

	return (
		<FormNewsLayout
			formData={{
				open: open,
				title: "Add News",
				idForm: "formAddNews",
				OnSubmit: onSubmitForm,
				alertSubmit: <AlertAddNews />,
			}}
		/>
	);
}

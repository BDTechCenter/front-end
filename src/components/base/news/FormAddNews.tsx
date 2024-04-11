"use client";
import { useMutationPostNews } from "@/api/hooks/news/queries";
import { FormNewsLayout } from "../common/FormNewsLayout";
import { msalInstance } from "@/lib/sso/msalInstance";
import { newsSchema } from "@/types/schemas/newsShema";
import { z } from "zod";
import { useState } from "react";

export function FormAddNews() {
	const [open, setOpen] = useState(false);
	const { mutateAsync } = useMutationPostNews();

	const NewsObject = (values: z.infer<typeof newsSchema>) => {
		const accountInfo = msalInstance.getActiveAccount();
		const author: string = accountInfo?.name || "";

		const formData = new FormData();
		console.log(values.tags)
		formData.append("author", author);
		formData.append("title", values.title);
		formData.append("body", values.body);
		if (values.tags) {
			formData.append("tags", values.tags?.toString().toLocaleLowerCase());
		}

		if (values.image) {
			formData.append("image", values.image);
		}

		return formData;
	};

	async function onSubmitForm(values: z.infer<typeof newsSchema>) {
		console.log(values)
		const newsFormData = NewsObject(values);

		await mutateAsync(newsFormData).then(() => setOpen(false));
	}

	return (
		<FormNewsLayout
			formData={{
				open: open,
				title: "Add News",
				idForm: "formAddNews",
				OnSubmit: onSubmitForm,
			}}
		/>
	);
}

"use client";

import { z } from "zod";
import { useState } from "react";
import { msalInstance } from "@/lib/sso/msalInstance";
import { resizeFile } from "@/lib/utils";
import { useMutationPostArticle } from "@/api/hooks/article/queries";
import { articleSchema } from "@/types/schemas/articleShema";
import { FormArticleLayout } from "../common/FormArticleLayout";
import { AlertAddArticle } from "./AlertAddArticle";

export function FormAddArticle() {
	const [open, setOpen] = useState(false);
	const { mutateAsync } = useMutationPostArticle();

	const articleObject = async (values: z.infer<typeof articleSchema>) => {
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

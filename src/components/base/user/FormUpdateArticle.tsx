import { useState } from "react";
import { z } from "zod";
import {
	getIdArticle,
	useFetchGetArticleId,
} from "@/api/hooks/article/queries";
import { msalInstance } from "@/lib/sso/msalInstance";
import {
	getUserArticles,
	useMutationPatchArticle,
} from "@/api/hooks/user/queries";
import { queryClient } from "@/services/queryClient";
import { resizeFile } from "@/lib/utils";
import { articleSchema } from "@/types/schemas/articleShema";
import { FormArticleLayout } from "../common/FormArticleLayout";
import { AlertUpdateArticle } from "./AlertUpdateArticle";

interface FormArticleLayoutProps {
	id: string;
}

export function FormUpdateArticle({ id }: FormArticleLayoutProps) {
	const { mutateAsync } = useMutationPatchArticle();
	const { data } = useFetchGetArticleId(id);

	const [open, setOpen] = useState(false);

	const articleObject = async (values: z.infer<typeof articleSchema>) => {
		const accountInfo = msalInstance.getActiveAccount();
		const author: string = accountInfo?.name || "";

		const formData = new FormData();
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
		await mutateAsync({ articleObject: FormData, id: id }).then(() =>
			setOpen(false)
		);
		await queryClient.fetchQuery({
			queryKey: ["articlesRead", data?.id],
			queryFn: getIdArticle,
		});
		await queryClient.fetchQuery({
			queryKey: ["userArticle", "published"],
			queryFn: getUserArticles,
		});
	}

	return data ? (
		<FormArticleLayout
			formData={{
				open: open,
				title: "Update",
				idForm: "FormUpdateArticle",
				OnSubmit: onSubmitForm,
				idArticle: id,
				defaultValues: {
					title: data.title,
					tags: data.tags,
					body: data.body,
				},
				alertSubmit: <AlertUpdateArticle />,
			}}
		/>
	) : null;
}

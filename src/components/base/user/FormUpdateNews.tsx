import { getIdNews, useFetchGetNewsId } from "@/api/hooks/news/queries";
import { msalInstance } from "@/lib/sso/msalInstance";
import { newsSchema } from "@/types/schemas/newsShema";
import { useState } from "react";
import { z } from "zod";
import { FormNewsLayout } from "../common/FormNewsLayout";
import { getUserNews, useMutationPatchNews } from "@/api/hooks/user/queries";
import { AlertUpdateNews } from "./AlertUpdateNews";
import { queryClient } from "@/services/queryClient";

interface FormNewsLayoutProps {
	id: string;
}

export function FormUpdateNews({ id }: FormNewsLayoutProps) {
	const { mutateAsync } = useMutationPatchNews();
	const [open, setOpen] = useState(false);

	const { data } = useFetchGetNewsId(id);

	const NewsObject = (values: z.infer<typeof newsSchema>) => {
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
			formData.append("image", values.image);
		}
		return formData;
	};

	async function onSubmitForm(values: z.infer<typeof newsSchema>) {
		const newsFormData = NewsObject(values);
		await mutateAsync({ newsObject: newsFormData, id: id }).then(() =>
			setOpen(false)
		);
		await queryClient.fetchQuery({
			queryKey: ["newsRead", data?.id],
			queryFn: getIdNews,
		});
		await queryClient.fetchQuery({ queryKey: ["userNews", "published"], queryFn: getUserNews });
	}

	return data ? (
		<FormNewsLayout
			formData={{
				open: open,
				title: "Update",
				idForm: "formUpdateNews",
				OnSubmit: onSubmitForm,
				idNews: id,
				defaultValues: {
					title: data.title,
					tags: data.tags,
					body: data.body,
				},
				alertSubmit: <AlertUpdateNews />,
			}}
		/>
	) : null;
}

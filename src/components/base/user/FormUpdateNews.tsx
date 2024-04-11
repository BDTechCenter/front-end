import {
	useFetchGetNewsIdRefetch,
	useMutationPostNews,
} from "@/api/hooks/news/queries";
import { msalInstance } from "@/lib/sso/msalInstance";
import { newsSchema } from "@/types/schemas/newsShema";
import { useState } from "react";
import { z } from "zod";
import { FormNewsLayout } from "../common/FormNewsLayout";
import { FaPencil } from "react-icons/fa6";

interface FormNewsLayoutProps {
	id: string;
}

export function FormUpdateNews({ id }: FormNewsLayoutProps) {
	const { mutateAsync } = useMutationPostNews();
	const [open, setOpen] = useState(false);

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

		await mutateAsync(newsFormData).then(() => setOpen(false));
	}

	return (
		<FormNewsLayout
			formData={{
				open: open,
				title: <FaPencil size={15} color="#000" />,
				idForm: "formUpdateNews",
				OnSubmit: onSubmitForm,
				idNews: id
			}}
		/>
	);
}

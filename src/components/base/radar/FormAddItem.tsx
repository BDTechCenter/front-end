"use client";

import { useState } from "react";
import { z } from "zod";
import { itemRadarSchema } from "@/types/schemas/itemRadarShema";
import { FormItemRadarLayout } from "../common/FormItemRadarLayout";
import AlertLayout from "../common/AlertLayout";

export function FormAddItem() {
	const [open, setOpen] = useState(false);

	const ItemRadarObject = async (values: z.infer<typeof itemRadarSchema>) => {
		const formData = new FormData();
		formData.append("isActive", "true");
		formData.append("title", values.title);
		formData.append("quadrant", values.quadrant);
		formData.append("ring", values.ring);
		formData.append("expectation", values.expectation);
		formData.append("body", values.body);

		return formData;
	};

	async function onSubmitForm(values: z.infer<typeof itemRadarSchema>) {
		const itemFormData = await ItemRadarObject(values);

		console.log("Log: ", values);
		console.log("itemRadar: ", itemFormData);

		// await mutateAsync(newsFormData).then(() => setOpen(false));
    setOpen(false)
	}

	return (
		<FormItemRadarLayout
			formData={{
				open: open,
				title: "Add Item For Radar",
				idForm: "formAddItemRadar",
				OnSubmit: onSubmitForm,
				alertSubmit: <AlertAddNews idForm="formAddItemRadar" />,
			}}
		/>
	);
}

function AlertAddNews({ idForm }: { idForm: string }) {
	return (
		<AlertLayout
			alert={{
				title: "Add Item?",
				description:
					"Are you sure you want to add a item to Tech Radar with this information?",
				nameButton: "Add",
				nameButtonAction: "Add",
				type: "submit",
				variantButton: "bdlight",
				idForm: idForm,
			}}
		/>
	);
}

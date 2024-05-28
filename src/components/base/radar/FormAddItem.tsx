"use client";

import { useState } from "react";
import { z } from "zod";
import { itemRadarSchema } from "@/types/schemas/itemRadarShema";
import { useMutateItemsRadar } from "@/api/hooks/radar/queries";
import { FormItemRadarLayout } from "../common/FormItemRadarLayout";
import AlertLayout from "../common/AlertLayout";

export function FormAddItem() {
	const [open, setOpen] = useState(false);
	const { mutateAsync } = useMutateItemsRadar();

	const ItemRadarObject = async (values: z.infer<typeof itemRadarSchema>) => {
		const techData = {
			isActive: true,
			title: values.title,
			quadrant: values.quadrant,
			ring: values.ring,
			expectation: values.expectation,
			body: values.body,
		};

		return techData;
	};

	async function onSubmitForm(values: z.infer<typeof itemRadarSchema>) {
		const itemData = await ItemRadarObject(values);

		await mutateAsync(itemData).then(() => setOpen(false));
	}

	return (
		<FormItemRadarLayout
			formData={{
				open: open,
				title: "Add Tech",
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

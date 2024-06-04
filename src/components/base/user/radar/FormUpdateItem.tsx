import { z } from "zod";
import { useState } from "react";
import {
	useFetchGetRadarItemDetail,
	useMutatePatchItemRadar,
} from "@/api/hooks/radar/queries";
import { itemRadarSchema } from "@/types/schemas/itemRadarShema";
import { FormItemRadarLayout } from "../../common/FormItemRadarLayout";
import AlertLayout from "../../common/AlertLayout";

export function FormUpdateItem({ id }: { id: string }) {
	const { mutateAsync } = useMutatePatchItemRadar();
	const { data } = useFetchGetRadarItemDetail(id);

	const [open, setOpen] = useState(false);

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

		await mutateAsync({ item: itemData, id }).then(() => setOpen(false));
	}

	return data ? (
		<FormItemRadarLayout
			formData={{
				open: open,
				title: "Edit",
				idForm: "FormUpdateArticle",
				OnSubmit: onSubmitForm,
				defaultValues: {
					title: data.title,
					expectation: data.expectation,
					quadrant: data.quadrantId,
					ring: data.ring,
					body: data.body,
				},
				alertSubmit: (
					<AlertLayout
						alert={{
							title: "Update Tech?",
							description:
								"Are you sure you want to update the Tech? If updated, you will lose the current layout",
							nameButton: "Update",
							nameButtonAction: "Update",
							type: "submit",
							variantButton: "bdlight",
							idForm: "FormUpdateArticle",
						}}
					/>
				),
			}}
		/>
	) : null;
}

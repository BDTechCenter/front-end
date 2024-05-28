import AlertLayout from "../common/AlertLayout";

export function AlertAddArticle() {
	return (
		<AlertLayout
			alert={{
				title: "Add Article?",
				description:
					"Are you sure you want to add a article story with this information?",
				nameButton: "Add",
				nameButtonAction: "Add",
				type: "submit",
				variantButton: "bdlight",
				idForm: "FormAddArticle",
			}}
		/>
	);
}

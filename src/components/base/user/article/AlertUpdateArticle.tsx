import AlertLayout from "../../common/AlertLayout";

export function AlertUpdateArticle() {
	return (
		<AlertLayout
			alert={{
				title: "Update Article?",
				description:
					"Are you sure you want to update the article? If updated, you will lose the current layout",
				nameButton: "Update",
				nameButtonAction: "Update",
				type: "submit",
				variantButton: "bdlight",
				idForm: "FormUpdateArticle",
			}}
		/>
	);
}

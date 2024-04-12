import AlertLayout from "../common/AlertLayout";

export function AlertAddNews() {

	return (
		<AlertLayout
			alert={{
				title: "Add News?",
				description:
					"Are you sure you want to add a news story with this information?",
				nameButton: "Add",
				nameButtonAction: "Add",
        type: "submit",
				variantButton: "bdlight",
        idForm: "formAddNews" 
			}}
		/>
	);
}

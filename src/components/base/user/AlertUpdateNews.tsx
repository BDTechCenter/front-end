import { useMutationPatchArchive } from "@/api/hooks/user/queries";
import AlertLayout from "../common/AlertLayout";

export function AlertUpdateNews() {

	return (
		<AlertLayout
			alert={{
				title: "Update News?",
				description:
					"Are you sure you want to update the news? If updated, you will lose the current layout",
				nameButton: "Update",
				nameButtonAction: "Update",
        type: "submit",
				variantButton: "bdlight",
        idForm: "formUpdateNews" 
			}}
		/>
	);
}

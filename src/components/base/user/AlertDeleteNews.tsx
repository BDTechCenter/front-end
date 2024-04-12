import { useMutationPatchArchive } from "@/api/hooks/user/queries";
import AlertLayout from "../common/AlertLayout";

interface AlertDeleteNewsProps{
  id: string
}

export function AlertDeleteNews({id}: AlertDeleteNewsProps) {
	const { mutateAsync } = useMutationPatchArchive();

	async function archiveNews() {
		await mutateAsync(id);
	}

	return (
		<AlertLayout
			alert={{
				title: "Delete News?",
				description:
					"If you delete the news it will no longer be visible to other users.",
				nameButton: "Delete",
				nameButtonAction: "Delete",
				Action: archiveNews,
				variantButton: "delete",
			}}
		/>
	);
}

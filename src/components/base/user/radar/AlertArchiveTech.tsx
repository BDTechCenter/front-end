import { useMutationArchiveTech } from "@/api/hooks/user/queries";
import AlertLayout from "../../common/AlertLayout";

interface AlertArchiveTechProps {
	id: string;
}

export function AlertArchiveTech({ id }: AlertArchiveTechProps) {
	const { mutateAsync } = useMutationArchiveTech();

	async function archiveTech() {
		await mutateAsync(id);
	}

	return (
		<AlertLayout
			alert={{
				title: "Archive Tech?",
				description:
					"If you archive the tech it will no longer be visible to other users.",
				nameButton: "Archive",
				nameButtonAction: "Archive",
				Action: archiveTech,
				variantButton: "delete",
			}}
		/>
	);
}

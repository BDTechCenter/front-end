import { useQueryClient } from "@tanstack/react-query";
import { getUserNews, useMutationPatchArchive } from "@/api/hooks/user/queries";
import AlertLayout from "../common/AlertLayout";

interface AlertDeleteNewsProps {
	id: string;
}

export function AlertArchiveNews({ id }: AlertDeleteNewsProps) {
	const { mutateAsync } = useMutationPatchArchive();
	const queryClient = useQueryClient();

	async function archiveNews() {
		await mutateAsync(id);
		const data = await queryClient.fetchQuery({queryKey: ["userNews", "published"], queryFn: getUserNews })
	}

	return (
		<AlertLayout
			alert={{
				title: "Archive News?",
				description:
					"If you archive the news it will no longer be visible to other users.",
				nameButton: "Archive",
				nameButtonAction: "Archive",
				Action: archiveNews,
				variantButton: "delete",
			}}
		/>
	);
}

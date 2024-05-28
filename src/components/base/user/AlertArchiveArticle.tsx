import { useQueryClient } from "@tanstack/react-query";
import {
	getUserArticles,
	useMutationPatchArchive,
} from "@/api/hooks/user/queries";
import AlertLayout from "../common/AlertLayout";

interface AlertArchiveArticleProps {
	id: string;
}

export function AlertArchiveArticle({ id }: AlertArchiveArticleProps) {
	const { mutateAsync } = useMutationPatchArchive();
	const queryClient = useQueryClient();

	async function archiveArticle() {
		await mutateAsync(id);
		const data = await queryClient.fetchQuery({
			queryKey: ["userArticle", "published"],
			queryFn: getUserArticles,
		});
	}

	return (
		<AlertLayout
			alert={{
				title: "Archive Article?",
				description:
					"If you archive the article it will no longer be visible to other users.",
				nameButton: "Archive",
				nameButtonAction: "Archive",
				Action: archiveArticle,
				variantButton: "delete",
			}}
		/>
	);
}

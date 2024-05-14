import { useQueryClient } from "@tanstack/react-query";
import {
	getUserComments,
	useMutationPatchDelete,
} from "@/api/hooks/user/queries";
import AlertLayout from "../common/AlertLayout";

interface AlertDeleteCommentProps {
	id: number;
}

export function AlertArchiveComment({ id }: AlertDeleteCommentProps) {
	const { mutateAsync } = useMutationPatchDelete();
	const queryClient = useQueryClient();

	async function deleteComment() {
		await mutateAsync(id);
		const data = await queryClient.fetchQuery({
			queryKey: ["userComments"],
			queryFn: getUserComments,
		});
	}

	return (
		<AlertLayout
			alert={{
				title: "Delete Comment?",
				description:
					"If you delete the comment it will no longer be visible to other users.",
				nameButton: "Delete",
				nameButtonAction: "Delete",
				Action: deleteComment,
				variantButton: "delete",
			}}
		/>
	);
}

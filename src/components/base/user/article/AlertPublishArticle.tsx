import { useQueryClient } from "@tanstack/react-query";
import {
	getUserArticles,
	useMutationPatchPublish,
} from "@/api/hooks/user/queries";
import AlertLayout from "../../common/AlertLayout";

interface AlertPublishedArticleProps {
	id: string;
}

export function AlertPublishedArticle({ id }: AlertPublishedArticleProps) {
	const { mutateAsync } = useMutationPatchPublish();
	const queryClient = useQueryClient();

	async function publishedArticle() {
		await mutateAsync(id);
		const data = await queryClient.fetchQuery({
			queryKey: ["userArticle", "archived"],
			queryFn: getUserArticles,
		});
		console.log(data);
	}

	return (
		<AlertLayout
			alert={{
				title: "Published Article?",
				description:
					"If you publish the article, it will appear again for other users",
				nameButton: "Published",
				nameButtonAction: "Published",
				Action: publishedArticle,
				variantButton: "default",
			}}
		/>
	);
}

import { useMutationPublishTech } from "@/api/hooks/user/queries";
import AlertLayout from "../../common/AlertLayout";

interface AlertPublishedTechProps {
	id: string;
}

export function AlertPublishedTech({ id }: AlertPublishedTechProps) {
	const { mutateAsync } = useMutationPublishTech();

	async function publishedTech() {
		await mutateAsync(id);
	}

	return (
		<AlertLayout
			alert={{
				title: "Published Article?",
				description:
					"If you publish the article, it will appear again for other users",
				nameButton: "Published",
				nameButtonAction: "Published",
				Action: publishedTech,
				variantButton: "default",
			}}
		/>
	);
}

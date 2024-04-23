import { getUserNews, useMutationPatchPublish } from "@/api/hooks/user/queries";
import AlertLayout from "../common/AlertLayout";
import { useQueryClient } from "@tanstack/react-query";

interface AlertDeleteNewsProps {
	id: string;
}

export function AlertPublishedNews({ id }: AlertDeleteNewsProps) {
	const { mutateAsync } = useMutationPatchPublish();
	const queryClient = useQueryClient();

	async function publishedNews() {
		await mutateAsync(id);
    const data = await queryClient.fetchQuery({queryKey: ["userNews", "archived"], queryFn: getUserNews })
    console.log(data)
	}

	return (
		<AlertLayout
			alert={{
				title: "Published News?",
				description:
					"If you publish the news, it will appear again for other users",
				nameButton: "Published",
				nameButtonAction: "Published",
				Action: publishedNews,
				variantButton: "default",
			}}
		/>
	);
}

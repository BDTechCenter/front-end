import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { callMsGraph } from "@/lib/sso/MsGraphApiCall";
import { loginRequest } from "@/lib/sso/authConfig";
import { getInitials } from "@/lib/utils";
import {
	AccountInfo,
	InteractionRequiredAuthError,
	InteractionStatus,
} from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UserAvatar() {
	const { instance, inProgress } = useMsal();
	const [imageUrl, setImageUrl] = useState<string | undefined>("");
	const [fallback, setFallback] = useState<string | undefined>("");

	const account = instance.getActiveAccount();

	useEffect(() => {
		const name = account?.name || "";
		setFallback(getInitials(name));
		if (!imageUrl && inProgress === InteractionStatus.None) {
			callMsGraph()
				.then((response) => {
					setImageUrl(response?.blobUrl);
				})
				.catch((e) => {
					if (e instanceof InteractionRequiredAuthError) {
						instance.acquireTokenRedirect({
							...loginRequest,
							account: instance.getActiveAccount() as AccountInfo,
						});
					}
				});
		}
	}, [inProgress, instance, imageUrl, account?.name]);

	return (
		<Link href="/user?news=published">
			<Avatar>
				<AvatarImage
					className="size-full rounded-full"
					src={imageUrl}
					alt={`${account?.name}'s Photo`}
				/>
				<AvatarFallback>{fallback}</AvatarFallback>
			</Avatar>
		</Link>
	);
}

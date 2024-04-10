"use client";

import {
	AccountInfo,
	InteractionRequiredAuthError,
	InteractionStatus,
	InteractionType,
} from "@azure/msal-browser";
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { loginRequest } from "@/lib/sso/authConfig";
import { callMsGraph } from "@/lib/sso/MsGraphApiCall";
import SignOutButton from "@/components/base/sso/SignOutButton";
import ProfileData, { GraphData } from "@/components/base/sso/ProfileData";

function ProfileContent() {
	const { instance, inProgress } = useMsal();
	const [graphData, setGraphData] = useState<null | GraphData>(null);
	const [imageUrl, setImageUrl] = useState<string | undefined>("");

	useEffect(() => {
		if (!graphData && inProgress === InteractionStatus.None) {
			callMsGraph()
				.then((response) => {
					console.log(response);

					setGraphData(response?.graphMeData), setImageUrl(response?.blobUrl);
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
	}, [inProgress, graphData, instance]);

	return (
		<div className="p-4 border">
			{graphData ? <ProfileData graphData={graphData} /> : null}
			{imageUrl && (
				<Image width={500} height={500} src={imageUrl} alt="Image" />
			)}
		</div>
	);
}

function ErrorComponent({ error }: { error: any }) {
	toast.error(error);
}

export default function Profile() {
	const authRequest = {
		...loginRequest,
	};

	return (
		<MsalAuthenticationTemplate
			interactionType={InteractionType.Popup}
			authenticationRequest={authRequest}
		>
			<ProfileContent />
			<SignOutButton />
		</MsalAuthenticationTemplate>
	);
}

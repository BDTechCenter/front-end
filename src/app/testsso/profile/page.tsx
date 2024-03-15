"use client";
import ProfileData, { GraphData } from "@/components/base/sso/ProfileData";
import SignOutButton from "@/components/base/sso/SignOutButton";
import { callMsGraph } from "@/lib/sso/MsGraphApiCall";
import { loginRequest } from "@/lib/sso/authConfig";
import {
	InteractionStatus,
	InteractionRequiredAuthError,
	AccountInfo,
	InteractionType,
} from "@azure/msal-browser";
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import { useState, useEffect } from "react";
import { Bounce, toast } from "react-toastify";

function ProfileContent() {
	const { instance, inProgress } = useMsal();
	const [graphData, setGraphData] = useState<null | GraphData>(null);

	useEffect(() => {
		if (!graphData && inProgress === InteractionStatus.None) {
			callMsGraph()
				.then((response) => setGraphData(response))
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
		</div>
	);
}

function ErrorComponent({ error }: { error: any }) {
	toast.error(error, {
		position: "top-right",
		autoClose: 13,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
		transition: Bounce,
	});
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

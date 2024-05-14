"use client";

import { ReactNode } from "react";
import {
	MsalAuthenticationTemplate,
} from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { loginRequest } from "@/lib/sso/authConfig";

export default function RouteGuard({ children }: { children: ReactNode }) {
	const authRequest = {
		...loginRequest,
	};

	return (
		<>
			<MsalAuthenticationTemplate
				interactionType={InteractionType.Popup}
				authenticationRequest={authRequest}
			>
				{children}
			</MsalAuthenticationTemplate>
		</>
	);
}

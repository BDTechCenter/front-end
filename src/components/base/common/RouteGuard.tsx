"use client";
import { ReactNode, useEffect, useState } from "react";
import {
	AuthenticatedTemplate,
	MsalAuthenticationTemplate,
	UnauthenticatedTemplate,
	useMsal,
} from "@azure/msal-react";
import { loginRequest } from "@/lib/sso/authConfig";
import { InteractionType } from "@azure/msal-browser";

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

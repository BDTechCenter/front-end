import {
	PublicClientApplication,
	EventType,
	EventMessage,
	AuthenticationResult,
} from "@azure/msal-browser";
import { msalConfig } from "./authConfig";

export const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.initialize().then(() => {
	// Account selection logic is app dependent. Adjust as needed for different use cases.
	const accounts = msalInstance.getAllAccounts();
	console.log(accounts);

	if (accounts.length > 0) {
		msalInstance.setActiveAccount(accounts[0]);
	}

	msalInstance.addEventCallback((event: EventMessage) => {
		if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
			const payload = event.payload as AuthenticationResult;
			const account = payload.account;
			msalInstance.setActiveAccount(account);
		}
	});
});

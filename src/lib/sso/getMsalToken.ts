import { msalInstance } from "@/lib/sso/msalInstance";
import { loginRequest } from "./authConfig";

export default async function getMsalToken() {
	const account = msalInstance.getActiveAccount();
	if (!account) {
		throw Error(
			"No active account! Verify a user has been signed in and setActiveAccount has been called."
		);
	}

	const response = await msalInstance.acquireTokenSilent({
		...loginRequest,
		account: account,
	});
	let token = response.accessToken;

	return token;
}

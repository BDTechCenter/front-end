import axios from "axios";
import { graphConfig, loginRequest } from "./authConfig";
import { msalInstance } from "./msalInstance";

export async function callMsGraph() {
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

	const headers = new Headers();
	const bearer = `Bearer ${response.accessToken}`;

	headers.append("Authorization", bearer);

	const options = {
		method: "GET",
		headers: headers,
	};

	try {
		const { data } = await axios.get(
			"https://graph.microsoft.com/v1.0/me/photo/$value",
			{
				headers: { Authorization: `Bearer ${response.accessToken}` },
				responseType: "blob",
			}
		);

		const [graphMeResponse] = await Promise.all([
			fetch(graphConfig.graphMeEndpoint, options),
		]);

		if (!graphMeResponse.ok) {
			throw new Error(`Failed to fetch data: ${graphMeResponse.status}`);
		}

		const graphMeData = await graphMeResponse.json();

		const url = window.URL || window.webkitURL;
		const blobUrl = url.createObjectURL(data);

		return { graphMeData, blobUrl };
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

import { Configuration, PopupRequest } from "@azure/msal-browser";

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
	auth: {
		clientId: "5a5996ec-9bea-44ea-9935-c06f3ff03789",
		authority:
			"https://login.microsoftonline.com/0ae51e19-07c8-4e4b-bb6d-648ee58410f4",
		redirectUri: "/login/oauth2/code/azure-client",
		postLogoutRedirectUri: "/",
	},
	system: {
		allowNativeBroker: false, // Disables WAM Broker
	},
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
	scopes: ["User.Read"],
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
	graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};

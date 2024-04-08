import { Configuration, PopupRequest } from "@azure/msal-browser";

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
	auth: {
		clientId: `${process.env.NEXT_PUBLIC_MSAL_APPID}`,
		authority: `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_MSAL_TENANTID}`,
		redirectUri: `${process.env.NEXT_PUBLIC_MSAL_REDIRECTURI}`,
		postLogoutRedirectUri: "/",
	},
	cache: {
		cacheLocation: "sessionStorage", // This configures where your cache will be stored
		storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
		secureCookies: true
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
	graphMeEndpointPhoto: "https://graph.microsoft.com/v1.0/me/photo/$value",
};

export const appRoles = {
	Admin: "ADMIN",
	BDUser: "BDUSER"
}

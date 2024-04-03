import getMsalToken from "@/lib/sso/getMsalToken";
import { InternalAxiosRequestConfig } from "axios";

interface TokenInfo {
	token: string | null;
	expiration: number;
}

let cachedToken: TokenInfo | null = null;

export const tokenInterceptor = async (
	config: InternalAxiosRequestConfig<any>
): Promise<InternalAxiosRequestConfig<any>> => {
	if (!cachedToken || Date.now() > cachedToken.expiration) {
		let { token } = await getMsalToken();
		// Refresh token if expired or not cached
		cachedToken = { token, expiration: Date.now() + 3600000 };
	}
	config.headers.Authorization = `Bearer ${cachedToken?.token}`;
	return config;
};

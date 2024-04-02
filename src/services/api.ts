import getMsalToken from "@/lib/sso/getMsalToken";
import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const hostURL = process.env.NEXT_PUBLIC_API_HOST;

interface TokenInfo {
	token?: string;
	expiration: number;
}

let cachedToken: TokenInfo | null = null;

const tokenInterceptor = async (
	config: InternalAxiosRequestConfig<any>
): Promise<InternalAxiosRequestConfig<any>> => {
	if (!cachedToken || Date.now() > cachedToken.expiration) {
		let { token, idToken } = await getMsalToken();
		// Refresh token if expired or not cached
		cachedToken = { token: idToken, expiration: Date.now() + 3600000 };
	}
	config.headers.Authorization = `Bearer ${cachedToken?.token}`;
	return config;
};

const api: AxiosInstance = axios.create({
	baseURL: `${hostURL}/tech-news/`,
});

api.interceptors.request.use(tokenInterceptor);

export default api;

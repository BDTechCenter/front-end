import { getMsalToken } from "@/lib/sso/getMsalToken";
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
		let idToken = await getMsalToken();
		// Refresh token if expired or not cached
		cachedToken = { token: idToken, expiration: Date.now() + 3600000 };
	config.headers.Authorization = `Bearer ${cachedToken?.token}`;
	return config;
};

const api: AxiosInstance = axios.create({
	baseURL: `${hostURL}/tech-news/`,
});

api.interceptors.request.use(tokenInterceptor);

// api.interceptors.request.use((request) => {
// 	console.log("Starting Request", JSON.stringify(request, null, 2));
// 	return request;
// });

// api.interceptors.response.use((response) => {
// 	console.log("Response:", JSON.stringify(response, null, 2));
// 	return response;
// });

export default api;

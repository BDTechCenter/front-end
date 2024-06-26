import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { getMsalToken } from "@/lib/sso/getMsalToken";

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
		let idToken = await getMsalToken();
		// Refresh token if expired or not cached
		cachedToken = { token: idToken, expiration: Date.now() + 3600000 };
	}
	config.headers.Authorization = `Bearer ${cachedToken?.token}`;
	return config;
};

const apiArticle: AxiosInstance = axios.create({
	baseURL: `${hostURL}/tech-articles/`,
});

apiArticle.interceptors.request.use(tokenInterceptor);

const apiRadar: AxiosInstance = axios.create({
	baseURL: `${hostURL}/tech-radar/`,
});

apiRadar.interceptors.request.use(tokenInterceptor);

const apiImage: AxiosInstance = axios.create({
	baseURL: `${hostURL}/image-service/images/`,
});

apiImage.interceptors.request.use(tokenInterceptor);

// api.interceptors.request.use((request) => {
// 	console.log("Starting Request", JSON.stringify(request, null, 2));
// 	return request;
// });

// api.interceptors.response.use((response) => {
// 	console.log("Response:", JSON.stringify(response, null, 2));
// 	return response;
// });

export { apiArticle, apiRadar, apiImage };

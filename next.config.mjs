/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "github.com",
			},
			{
				protocol: "http",
				hostname: "10.234.90.77",
			},
			{
				protocol: "http",
				hostname: "127.0.0.1",
			},
		],
	},
};

export default nextConfig;

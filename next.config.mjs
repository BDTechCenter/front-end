/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "github.com",
			},
			{
				protocol: "http",
				hostname: "*",
			},
			{
				protocol: "http",
				hostname: "127.0.0.1",
			},
		],
	},
};

export default nextConfig;

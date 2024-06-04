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
				hostname: "10.234.84.58",
			},
			{
				protocol: "http",
				hostname: "10.109.71.25",
			},
			{
				protocol: "http",
				hostname: "127.0.0.1",
			},
		],
	},
};

export default nextConfig;

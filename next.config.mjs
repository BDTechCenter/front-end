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
				hostname: "10.234.90.77",
			},
			{
				protocol: "http",
				hostname: "127.0.0.1",
			},
		],
	},
	transpilePackages: [
		"@bosch-web-dds/spark-ui",
		"@bosch-web-dds/spark-ui-react",
	],
};

export default nextConfig;

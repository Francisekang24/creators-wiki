import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'pbs.twimg.com',
				pathname: '/**', // Allow all paths
			},
			{
				protocol: 'https',
				hostname: 'abs.twimg.com',
				pathname: '/**', // Allow all paths
			},
		],
	},
};

export default nextConfig;

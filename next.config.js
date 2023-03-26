const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async redirects() {
		return [
			{
				source: '/cms',
				destination: 'https://leon-personal.herokuapp.com/admin',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;

const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
	sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  swcMinify: true,
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	basePath: process.env.BASE_PATH,
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
}

module.exports = nextConfig

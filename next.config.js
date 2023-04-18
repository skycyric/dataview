/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    API_KEY: '81aa3fc0ace24fdcbf5ebcf73f79a8ff',
  },
  basePath: '/dataview',
  assetPrefix: `/${process.env.NODE_ENV === 'production' ? 'dataview' : ''}`,
}
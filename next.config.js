/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
};

module.exports = nextConfig;

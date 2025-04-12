/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("next-bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = {
        type: "filesystem",
        version: `${process.env.NODE_ENV}-${new Date().toISOString().split("T")[0]}`,
        buildDependencies: {
          config: [__filename],
        },
        cacheDirectory: require("path").resolve(__dirname, ".next/cache"),
      };
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);

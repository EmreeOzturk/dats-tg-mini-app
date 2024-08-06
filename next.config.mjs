/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["grammy"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.telegram.org",
      },
    ],
  },
};

export default nextConfig;

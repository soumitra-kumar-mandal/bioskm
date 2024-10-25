import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com', // Imgur image host
        port: '', // No port needed
        pathname: '/**', // Allow all paths
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost:3000",
    "3000-cs-5e8b03fe-e556-44e3-8bab-0dba4f474baf.cs-asia-southeast1-ajrg.cloudshell.dev",
    "*.cloudshell.dev",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

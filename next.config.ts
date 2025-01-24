import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: '/(.*)', // Apply to all routes
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'upgrade-insecure-requests',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

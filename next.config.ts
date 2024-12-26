import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

//this is added to fix CORS issue
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://stg-catalyst-external-distributor-api.pulseid.com/:path*', 
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ctlstg-cdn.pulseid.com',
        port: '',
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;

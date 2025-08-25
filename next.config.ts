import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.twillot.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.setupyourpay.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'cdnv2.ruguoapp.com',
        pathname: '/**'
      },
    ],
  },
};

// module.exports = {

// }

export default nextConfig;

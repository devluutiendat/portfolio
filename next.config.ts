import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const nextConfig: NextConfig = withBundleAnalyzer({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.giphy.com",
      }
    ]
    ,
    
  }
  
});
export default nextConfig;


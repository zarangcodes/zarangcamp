import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignores ESLint errors during Vercel builds
  },
};

export default nextConfig;

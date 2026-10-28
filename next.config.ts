import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root — this project lives inside a directory that has its own lockfile.
  turbopack: { root: __dirname },
};

export default nextConfig;

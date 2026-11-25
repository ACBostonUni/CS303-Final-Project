import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,

};

export default nextConfig;

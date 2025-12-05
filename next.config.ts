import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,

  // Turbopack için source map kapatma
  turbopack: {
    optimizeCss: false,
    sourceMaps: false, // 🔥 Asıl olay bu
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.NETLIFY === "true"
    ? {
        output: "export",
        images: { unoptimized: true },
        typescript: { tsconfigPath: "./tsconfig.netlify.json" },
      }
    : {}),
};

export default nextConfig;

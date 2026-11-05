import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [
      {
        source: "/cv-shaila-martinez-2026.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'inline; filename="shailamartinez.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

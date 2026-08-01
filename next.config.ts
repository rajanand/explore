import type { NextConfig } from "next";
import createMDX from "@next/mdx";

/**
 * Custom domain (explore.rajanand.org) serves at the site root — no basePath.
 * Set BASE_PATH=/explore only if you need the github.io/explore/ URL instead.
 */
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);

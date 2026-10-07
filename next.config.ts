import type { NextConfig } from "next";

const isGithubPages = Boolean(process.env.GITHUB_PAGES);
const repo = "steel-city-painting";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",
};

export default nextConfig;

import type { NextConfig } from "next";
const isGithubActions = Boolean(process.env.GITHUB_ACTIONS);
const repo = 'steel-city-painting';
const nextConfig: NextConfig = { output: 'export', basePath: isGithubActions ? `/${repo}` : '', assetPrefix: isGithubActions ? `/${repo}/` : undefined, images: { unoptimized: true } };
export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

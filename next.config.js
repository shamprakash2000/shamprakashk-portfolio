// next.config.js
const nextConfig = {
  output: 'export', // Static export configuration
  trailingSlash: true, // Optional: adds a trailing slash to URLs
  images: {
    unoptimized: true, // Disable image optimization
  },
  basePath: "/shamprakashk-portfolio", // replace <repo-name> with your GitHub repo name
  assetPrefix: "/shamprakashk-portfolio",
};

module.exports = nextConfig;

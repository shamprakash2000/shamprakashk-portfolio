// next.config.js
const nextConfig = {
  output: 'export', // Static export configuration
  trailingSlash: true, // Optional: adds a trailing slash to URLs
  images: {
    unoptimized: true, // Disable image optimization
  },
};

module.exports = nextConfig;

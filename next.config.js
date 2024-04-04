/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
          module: false,
        };
      }
  
      config.resolve.extensions.push('.ts', '.tsx');
  
      return config;
    },
    // Add any other configuration options here
  };
  
  module.exports = nextConfig;
  
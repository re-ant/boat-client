const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@use "variables.scss" as *; @use "mixins.scss" as *; @use "colors.scss" as *;`,
  },
  webpack(config) {
    config.resolve.modules.push(__dirname);
    return config;
  },
};

module.exports = nextConfig;

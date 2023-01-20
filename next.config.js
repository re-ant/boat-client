const path = require("path");

/* @import 구문 없이 사용할 스타일시트 파일 추가 */
const globalCssImport = [
  "variables.scss",
  "mixins.scss",
  "colors.scss",
  "animations.scss",
]
  .map((css) => `@use "${css}" as *;`)
  .join("");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: globalCssImport,
  },
  webpack(config) {
    config.resolve.modules.push(__dirname);
    return config;
  },
};

module.exports = nextConfig;

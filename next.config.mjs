/** @type {import('next').NextConfig} */
import pkg from "./next-i18next.config.js";
const { i18n } = pkg;

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;

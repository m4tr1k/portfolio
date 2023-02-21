/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
    localeDetection: false,
  },
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "anitaku.to",
      },
    ],
  },
}

module.exports = nextConfig

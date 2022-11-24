/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['tools.applemediaservices.com','play.google.com',]
  },
}

module.exports = nextConfig

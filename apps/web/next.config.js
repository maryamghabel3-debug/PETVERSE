/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: true },
  images: { domains: ['localhost', 'cdn.petverse.app'] }
}
module.exports = nextConfig

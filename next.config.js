/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.blogs.es',
      },
      {
        protocol: 'https',
        hostname: 'elmueble.com',
      },
    ],
  },
}


module.exports = nextConfig

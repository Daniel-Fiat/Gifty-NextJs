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
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "www.elmueble.com",
      },
      {
        protocol: "https",
        hostname: "img-s-msn-com.akamaized.net",
      },
      {
        protocol: "https",
        hostname: "imagenes.elpais.com",
      },
      {
        protocol: "https",
        hostname: "cdn.grupoelcorteingles.es",
      },
    ],
  },
}


module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  build: {
    extend(config, {}) {
        config.node = {
            fs: 'empty'
        }
    }
}
  
  
}







module.exports = nextConfig

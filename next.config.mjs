/** @type {import('next').NextConfig} */
const config = {
  // webpack(config, { isServer }) {
  //   config.module.rules.push({
  //     use: ['@svgr/webpack'],
  //     test: /\.svg$/,
  //   })

  //   return config
  // },
  // typescript: {
  //   ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  // },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  sassOptions: {
    prependData: `@import "./styles/global.scss";`,
  },
  images: {
    remotePatterns: [{ hostname: 'cdn.sanity.io' }],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    taint: true,
  },
}

export default config

import withPlaiceholder from '@plaiceholder/next'

/** @type {import('next').NextConfig} */
const config = {
  // webpack(config, { isServer }) {
  //   config.module.rules.push({
  //     use: ['@svgr/webpack'],
  //     test: /\.svg$/,
  //   })

  //   return config
  // },
  typescript: {
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  },
  eslint: {
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
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
  experimental: {
    taint: true,
  },
}

export default withPlaiceholder(config)

import withPlaiceholder from '@plaiceholder/next'

/** @type {import('next').NextConfig} */
const config = {
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
  },
  sassOptions: {
    additionalData: `@import "@/styles/variables.scss";`,
    prependData: `@import "./_mantine.scss";`,
  },
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
    ],
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

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
    // Uncomment to remove import trace warnings
    // serverComponentsExternalPackages: ['dd-trace', '@sentry/nextjs']
  }
};

export default nextConfig;

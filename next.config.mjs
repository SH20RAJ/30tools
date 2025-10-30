/** @type {import('next').NextConfig} */



const nextConfig = {
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },

  // Advanced image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'fonts.googleapis.com',
      }
    ],
  },

  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-icons',
      'react-icons',
      'framer-motion'
    ],
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB'],
    esmExternals: true,

  },

  // Bundle dependencies for pages router
  bundlePagesRouterDependencies: true,

  // Output configuration for Cloudflare deployment
  output: 'standalone',



  // Exclude heavy client-side libraries from server bundle
  serverComponentsExternalPackages: [
    'pdf-lib',
    'jspdf',
    'html2canvas',
    'jszip',
    'wavesurfer.js',
    'sharp',
    'canvas'
  ],

  // Compression and security
  compress: true,
  poweredByHeader: false,
  generateEtags: false,

  // SEO and crawling optimizations
  trailingSlash: false,

  // Headers for better SEO and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
          }
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600'
          }
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
      {
        source: '/icons/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      }
    ]
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/tool/:slug',
        destination: '/:slug',
        permanent: true,
      },
      {
        source: '/tools/:slug',
        destination: '/:slug',
        permanent: true,
      }
    ]
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev) {
      config.optimization.sideEffects = false;
      config.optimization.usedExports = true;

      // Better chunk splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          // Radix UI components (minimal)
          radix: {
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
            name: 'radix-ui',
            chunks: 'all',
            priority: 20,
          },
          // Default vendor chunk for other libraries
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
        },
      };
    }

    // Bundle analysis in development
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }

    // Fix for Stack framework cookie dependency issue and externalize heavy deps
    config.externals = config.externals || [];

    if (isServer) {
      // Externalize heavy server dependencies to reduce bundle size
      config.externals.push(
        'pdf-lib',
        'jspdf',
        'html2canvas',
        'jszip',
        'wavesurfer.js',
        'sharp',
        'canvas'
      );
    }

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        "cookie": false,
        "crypto": false,
        "stream": false,
        "util": false
      };
    }

    return config;
  },
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();

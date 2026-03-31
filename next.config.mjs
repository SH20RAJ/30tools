/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";
import { toolRedirects } from "./scripts/redirects.cjs";

const nextConfig = {
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },

  // Advanced image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-icons",
      "react-icons",
      "framer-motion",
      "@mui/material",
      "@mui/icons-material",
    ],
    webVitalsAttribution: ["CLS", "LCP", "FCP", "FID", "TTFB"],
  },

  // Bundle dependencies for pages router
  bundlePagesRouterDependencies: true,

  // Output configuration for Cloudflare deployment
  output: "standalone",

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
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
      {
        source: "/api/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/icons/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      ...toolRedirects,
      {
        source: "/tool/:slug",
        destination: "/:slug",
        permanent: true,
      },
      {
        source: "/tools/:slug",
        destination: "/:slug",
        permanent: true,
      },
      {
        source: "/youtube-video-downloader",
        destination: "/youtube-downloader",
        permanent: true,
      },
    ];
  },

  // Rewrites for programmatic SEO (keyword variants)
  async rewrites() {
    try {
      const fs = (await import("node:fs")).default;
      const path = (await import("node:path")).default;
      const toolsPath = path.resolve("./src/constants/tools.json");
      const toolsData = JSON.parse(fs.readFileSync(toolsPath, "utf-8"));
      
      const toolRewrites = [];
      
      // Iterate through all tools and their extra slugs
      Object.values(toolsData.categories).forEach((category) => {
        if (category.tools) {
          category.tools.forEach((tool) => {
            if (tool.extraSlugs && Array.isArray(tool.extraSlugs)) {
              tool.extraSlugs.forEach((slug) => {
                toolRewrites.push({
                  source: `/${slug}`,
                  destination: `${tool.route}?variant=${slug}`,
                });
              });
            }
          });
        }
      });

      // Also include existing manual rewrites from tool-rewrites.json if it exists
      try {
        const manualRewritesPath = path.resolve("./src/constants/tool-rewrites.json");
        if (fs.existsSync(manualRewritesPath)) {
          const manualRewrites = JSON.parse(fs.readFileSync(manualRewritesPath, "utf-8"));
          toolRewrites.push(...manualRewrites);
        }
      } catch (e) {
        console.error("Failed to load manual rewrites:", e);
      }

      return toolRewrites;
    } catch (e) {
      console.error("Failed to generate automated tool rewrites:", e);
      return [];
    }
  },

  // Turbopack configuration (empty to silence Next.js 16 warning)
  turbopack: {},

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev) {
      config.optimization.sideEffects = false;
      config.optimization.usedExports = true;
    }

    // Bundle analysis in development
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    // Fix for Stack framework cookie dependency issue
    config.externals = config.externals || [];
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        cookie: false,
        crypto: false,
        stream: false,
        util: false,
      };
    }

    return config;
  },
};

const pwaConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  buildExcludes: [/middleware-manifest\.json$/],
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "offlineCache",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
        },
      },
    },
  ],
});

export default pwaConfig(nextConfig);

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();

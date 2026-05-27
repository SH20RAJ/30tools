/** @type {import('next').NextConfig} */
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const toolsPath = path.join(__dirname, "src", "constants", "tools.json");
const toolsData = JSON.parse(fs.readFileSync(toolsPath, "utf8"));

// redirectsList is removed to render extraSlugs natively (no redirects)

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
		optimizeCss: false,
		optimizePackageImports: [
			"lucide-react",
			"@radix-ui/react-accordion",
			"@radix-ui/react-avatar",
			"@radix-ui/react-checkbox",
			"@radix-ui/react-collapsible",
			"@radix-ui/react-dialog",
			"@radix-ui/react-dropdown-menu",
			"@radix-ui/react-label",
			"@radix-ui/react-progress",
			"@radix-ui/react-radio-group",
			"@radix-ui/react-select",
			"@radix-ui/react-separator",
			"@radix-ui/react-slider",
			"@radix-ui/react-slot",
			"@radix-ui/react-switch",
			"@radix-ui/react-tabs",
			"@radix-ui/react-tooltip",
			"@stackframe/stack",
			"sonner",
			"next-themes",
		],
		webVitalsAttribution: ["CLS", "LCP", "INP", "FCP", "TTFB"],
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

	// Headers for security, SEO, and performance
	async headers() {
		return [
			// Global security headers for all routes
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-DNS-Prefetch-Control",
						value: "on",
					},
					{
						key: "Strict-Transport-Security",
						value: "max-age=63072000; includeSubDomains; preload",
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
						value: "strict-origin-when-cross-origin",
					},
					{
						key: "Permissions-Policy",
						value:
							"camera=(), microphone=(), geolocation=(), browsing-topics=(), interest-cohort=()",
					},
					{
						key: "Cross-Origin-Opener-Policy",
						value: "same-origin",
					},
					{
						key: "Cross-Origin-Resource-Policy",
						value: "same-origin",
					},
					{
						key: "X-XSS-Protection",
						value: "0",
					},
					{
						key: "Content-Security-Policy",
						value: [
							"default-src 'self'",
							"script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://pagead2.googlesyndication.com https://www.clarity.ms https://assets.onedollarstats.com https://cdn.jsdelivr.net",
							"style-src 'self' 'unsafe-inline'",
							"img-src 'self' data: blob: https://*.googleusercontent.com https://*.google.com https://*.gstatic.com https://img.youtube.com https://i.ytimg.com https://pagead2.googlesyndication.com https://www.clarity.ms",
							"font-src 'self' data: https://cdn.jsdelivr.net",
							"connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.clarity.ms https://pagead2.googlesyndication.com https://translation.googleapis.com https://raw.githubusercontent.com https://tactiq-apps-prod.tactiq.io https://*.stack-auth.com https://api.stack-auth.com https://ipapi.co wss://*.stack-auth.com",
							"frame-src 'self' https://www.google.com https://pagead2.googlesyndication.com https://*.stack-auth.com",
							"media-src 'self' blob:",
							"worker-src 'self' blob:",
							"object-src 'none'",
							"base-uri 'self'",
							"form-action 'self'",
							"frame-ancestors 'self'",
						].join("; "),
					},
				],
			},
			// API routes - moderate caching
			{
				source: "/api/(.*)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
					},
				],
			},
			// Next.js static assets - immutable long cache
			{
				source: "/_next/static/(.*)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
			// Homepage - edge cache with revalidation
			{
				source: "/",
				headers: [
					{
						key: "Cache-Control",
						value: "public, s-maxage=3600, stale-while-revalidate=86400",
					},
				],
			},
			// Static icons - immutable long cache
			{
				source: "/icons/(.*)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
			// Static images - immutable long cache
			{
				source: "/images/(.*)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
			// Font files - immutable long cache
			{
				source: "/fonts/(.*)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
			// OG images - moderate cache with revalidation
			{
				source: "/og-image.(jpg|png)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=604800, stale-while-revalidate=86400",
					},
				],
			},
			// OG images directory
			{
				source: "/og-images/(.*)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=604800, stale-while-revalidate=86400",
					},
				],
			},
			// Manifest and browserconfig - moderate cache
			{
				source: "/manifest.json",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=86400, stale-while-revalidate=604800",
					},
				],
			},
			{
				source: "/browserconfig.xml",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=86400, stale-while-revalidate=604800",
					},
				],
			},
			// Service worker - minimal cache to allow updates
			{
				source: "/sw.js",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=0, must-revalidate",
					},
				],
			},
			// Favicon - long cache
			{
				source: "/favicon.ico",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
			// RSS/Atom feeds - short cache with revalidation
			{
				source: "/feed.xml",
				headers: [
					{
						key: "Cache-Control",
						value: "public, s-maxage=3600, stale-while-revalidate=86400",
					},
				],
			},
			// Sitemap - short cache with revalidation
			{
				source: "/sitemap.xml",
				headers: [
					{
						key: "Cache-Control",
						value: "public, s-maxage=3600, stale-while-revalidate=86400",
					},
				],
			},
			// robots.txt - moderate cache
			{
				source: "/robots.txt",
				headers: [
					{
						key: "Cache-Control",
						value: "public, s-maxage=86400, stale-while-revalidate=604800",
					},
				],
			},
			// Tool page routes - edge cache with revalidation
			{
				source: "/:tool((?!api|_next|handler|search|feed\\.xml|sitemap|robots|manifest|opensearch|llms|favicon|icons|og-image|not-found|archive|embed).+)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, s-maxage=3600, stale-while-revalidate=86400",
					},
				],
			},
		];
	},

	// SEO Redirects and Rewrites
	async redirects() {
	        const intentSlugs = ["compress-image-to-50kb", "resize-image-for-instagram", "pdf-to-word-without-email", "youtube-to-mp3-320kbps"];
	        const extraSlugRedirects = [];

	        Object.values(toolsData.categories).forEach(category => {
	                category.tools.forEach(tool => {
	                        if (tool.extraSlugs && Array.isArray(tool.extraSlugs)) {
	                                tool.extraSlugs.forEach(extraSlug => {
	                                        if (!intentSlugs.includes(extraSlug)) {
	                                                extraSlugRedirects.push({
	                                                        source: `/${extraSlug}`,
	                                                        destination: tool.route,
	                                                        permanent: true,
	                                                });
	                                        }
	                                });
	                        }
	                });
	        });

	        return [
	                {
	                        source: "/:path*",
	                        has: [{ type: "host", value: "www.30tools.com" }],
	                        destination: "https://30tools.com/:path*",
	                        permanent: true,
	                },
	                {
	                        source: "/blogs/:user/:slug",
	                        destination: "/blog/:slug",
	                        permanent: true,
	                },
	                ...extraSlugRedirects,
	        ];
	},
	async rewrites() {
		return [
			{
				source: "/sitemap-index.xml",
				destination: "/sitemap.xml",
			},
		];
	},

	// Turbopack configuration (empty to silence Next.js 16 warning)
	turbopack: {},

	// Webpack optimizations
	webpack: (config, { dev, isServer }) => {
		// Production optimizations
		if (!dev) {
			config.optimization.sideEffects = true;
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

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
if (process.env.NODE_ENV === "development") {
	initOpenNextCloudflareForDev();
}

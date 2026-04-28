/** @type {import('next').NextConfig} */
import fs from "node:fs";
import path from "node:path";
import withPWA from "next-pwa";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const toolsJsonPath = path.join(process.cwd(), "src/constants/tools.json");
const toolsData = JSON.parse(fs.readFileSync(toolsJsonPath, "utf8"));

const STATIC_PAGES = new Set([
	"/",
	"/search",
	"/calculators",
	"/about",
	"/contact",
	"/help",
	"/privacy",
	"/terms",
	"/api-docs",
	"/blog",
	"/blog/",
	"/sitemap.xml",
	"/sitemap-index.xml",
]);

function normalizePath(input) {
	if (!input || typeof input !== "string") return null;
	const withSlash = input.startsWith("/") ? input : `/${input}`;
	if (withSlash.length > 1 && withSlash.endsWith("/")) {
		return withSlash.slice(0, -1);
	}
	return withSlash;
}

function getAllTools() {
	const categories = Object.values(toolsData.categories || {});
	return categories.flatMap((category) => category.tools || []);
}

function buildSlugRoutingRules() {
	return { redirects: [], rewrites: [] };
}

const { redirects: slugRedirects, rewrites: slugRewrites } =
	buildSlugRoutingRules();

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
		optimizeCss: false,
		optimizePackageImports: [
			"lucide-react",
			"@radix-ui/react-icons",
			"react-icons",
			"framer-motion",
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

	// SEO Redirects and Rewrites are generated from src/constants/tools.json.
	async redirects() {
		return [
			...slugRedirects,
			{
				source: "/blogs/:user/:slug",
				destination: "/blog/:slug",
				permanent: true,
			},
		];
	},

	async rewrites() {
		return [
			...slugRewrites,
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
if (process.env.NODE_ENV === "development") {
	initOpenNextCloudflareForDev();
}

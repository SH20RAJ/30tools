import { type NextRequest, NextResponse } from "next/server";
import toolsData from "./constants/tools.json";

// 1. Pre-build the Slug Map for high-performance lookups
const SLUG_MAP = new Map<string, string>();

Object.values(toolsData.categories).forEach((category: any) => {
	category.tools?.forEach((tool: any) => {
		if (tool.extraSlugs && Array.isArray(tool.extraSlugs)) {
			tool.extraSlugs.forEach((slug) => {
				const normalizedSlug = slug.startsWith("/") ? slug : `/${slug}`;
				// Map the variant slug to the primary tool route
				SLUG_MAP.set(normalizedSlug, tool.route);
			});
		}
	});
});

// 2. Hardcoded static pages
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
]);

/**
 * Global Middleware for 30tools
 * Optimized for Cloudflare Edge Runtime (experimental-edge)
 */
export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// 1. Pass through internal assets and direct API requests immediately
	if (
		pathname.startsWith("/_next") ||
		pathname.startsWith("/static") ||
		pathname.startsWith("/api") ||
		pathname.includes(".")
	) {
		return NextResponse.next();
	}

	// 2. Check for extraSlugs (SEO variants)
	// If found, we REWRITE to the primary tool page to show the content
	// without changing the URL in the browser (improving SEO indexability).
	const primaryRoute = SLUG_MAP.get(pathname);
	if (primaryRoute) {
		// Create the target URL for the rewrite
		const url = request.nextUrl.clone();
		url.pathname = primaryRoute;
		return NextResponse.rewrite(url);
	}

	// 3. Simple protection for non-existent routes
	// Most routing is handled by Next.js filesystem or [slug] routes
	return NextResponse.next();
}

// Next.js 16 configuration for Edge
export const config = {
	matcher: ["/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)"],
};

// Required for the specific Cloudflare/Next.js 16 environment
export const runtime = "experimental-edge";

import { type NextRequest, NextResponse } from "next/server";

// Hardcoded static pages for fast lookups
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

// Validation Helper - minimal for Edge performance
function isValidRoute(pathname: string): boolean {
	if (STATIC_PAGES.has(pathname)) return true;

	const allowedPrefixes = [
		"/blog/",
		"/blogs/",
		"/dashboard",
		"/account",
		"/tools/",
		"/search/",
		"/api/",
	];

	return allowedPrefixes.some((prefix) => pathname.startsWith(prefix));
}

/**
 * Global Middleware for 30tools
 * Optimized for Cloudflare Edge Runtime
 */
export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// 1. Pass through internal assets and API requests immediately
	if (
		pathname.startsWith("/_next") ||
		pathname.startsWith("/static") ||
		pathname.startsWith("/api") ||
		pathname.includes(".")
	) {
		return NextResponse.next();
	}

	// 2. SEO Redirects and complex logic are handled via next.config.mjs redirects
	// for maximum performance. This middleware only handles request filtering
	// and basic safety checks.

	return NextResponse.next();
}

export const runtime = "edge";

export const config = {
	// Match all routes except static assets
	matcher: ["/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)"],
};


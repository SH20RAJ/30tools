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
]);

// Validation Helper
function isValidRoute(pathname: string): boolean {
	// 1. Check static pages
	if (STATIC_PAGES.has(pathname)) return true;

	// 2. Check dynamic section prefixes
	const allowedPrefixes = [
		"/blog/",
		"/blogs/",
		"/dashboard",
		"/account",
		"/tools/",
		"/search/",
		"/api/",
	];

	if (allowedPrefixes.some((prefix) => pathname.startsWith(prefix))) {
		return true;
	}

	// 3. Fallback for tool routes (most are top-level or category-prefixed)
	// We allow these to proceed to Next.js routing which will handle 404s properly
	return true; 
}

export function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// Handle internal Next.js requests and assets
	if (
		pathname.startsWith("/_next") ||
		pathname.startsWith("/static") ||
		pathname.startsWith("/api") ||
		pathname.includes(".")
	) {
		return NextResponse.next();
	}

	// Basic Route Validation
	if (!isValidRoute(pathname)) {
		// If we wanted to 404 early, we could do it here
		// But allowing it to reach Next.js is safer for compatibility
		return NextResponse.next();
	}

	// The previous complex redirect logic for extraSlugs was causing Edge crashes.
	// It is now handled more efficiently via Next.js rewrites in next.config.mjs.
	
	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)"],
};

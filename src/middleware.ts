import { type NextRequest, NextResponse } from "next/server";
import { getAllCategories, getAllTools } from "./lib/tools";

// Slug Logic & Valid Routes
const validRoutes = new Set<string>();

// Hardcoded static pages
const staticPages = [
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
];

for (const page of staticPages) {
	validRoutes.add(page);
}

// Category pages
const allCategories = getAllCategories();
for (const category of allCategories) {
	validRoutes.add(`/${category.slug}-tools`);
}

// All tool routes and variants
const allTools = getAllTools();
for (const tool of allTools) {
	if (tool.route) {
		validRoutes.add(tool.route);
	}
	if (tool.extraSlugs && Array.isArray(tool.extraSlugs)) {
		for (const slug of tool.extraSlugs) {
			validRoutes.add(`/${slug}`);
		}
	}
}

// Validation Helper
function isValidRoute(pathname: string): boolean {
	// 1. Exact match
	if (validRoutes.has(pathname)) return true;

	// 2. Prefix matches for dynamic sections
	const allowedPrefixes = [
		"/blog/",
		"/blogs/",
		"/dashboard",
		"/account",
		"/tools/",
		"/search/",
	];

	return allowedPrefixes.some((prefix) => pathname.startsWith(prefix));
}

export default function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// Allow everything that matches valid routes or prefixes
	if (isValidRoute(pathname)) {
		return NextResponse.next();
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};

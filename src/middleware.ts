import { NextResponse, NextRequest } from "next/server";
import toolsData from "./constants/tools.json";

// Slug Logic & Valid Routes
const slugMap = new Map<string, string>();
const validRoutes = new Set<string>();

// Hardcoded static pages (derived from sitemap.js)
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
staticPages.forEach(page => validRoutes.add(page));

// Category pages
const categories = Object.keys(toolsData.categories);
categories.forEach(category => {
    validRoutes.add(`/${category}-tools`);
});

try {
    // @ts-ignore
    Object.values(toolsData.categories).forEach((category: any) => {
        if (category.tools) {
            category.tools.forEach((tool: any) => {
                // Add main tool route
                if (tool.route) {
                    validRoutes.add(tool.route);
                }
            });
        }
    });
} catch (e) {
    console.error("Error initializing middleware slug map:", e);
}

// Validation Helper
function isValidRoute(pathname: string): boolean {
    // 1. Exact match
    if (validRoutes.has(pathname)) return true;
    if (slugMap.has(pathname)) return true;

    // 2. Prefix matches for dynamic sections
    const allowedPrefixes = [
        "/blog/",
        "/blogs/",
        "/dashboard",
        "/account",
        "/tools/", // In case of sitemap-new structure
        "/search/", // Search query params or subpaths
    ];

    if (allowedPrefixes.some(prefix => pathname.startsWith(prefix))) return true;

    return false;
}

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 1. Check if route is valid in this application
    if (isValidRoute(pathname)) {
        return NextResponse.next();
    }

    // 3. Allow standard 404 handling for unknown routes
    return NextResponse.next();
}

export const config = {
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

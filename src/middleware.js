import { NextResponse } from "next/server";
import toolsData from "./constants/tools.json";

// Create a flat map of slug -> canonical route
// This runs once when the middleware initializes (or cold starts)
const slugMap = new Map();

try {
    Object.values(toolsData.categories).forEach((category) => {
        if (category.tools) {
            category.tools.forEach((tool) => {
                if (tool.extraSlugs && tool.route) {
                    tool.extraSlugs.forEach((slug) => {
                        // Ensure slug starts with / if not present (though tools.json usually has clean slugs)
                        const cleanSlug = slug.startsWith("/") ? slug : `/${slug}`;
                        slugMap.set(cleanSlug, tool.route);
                    });
                }
            });
        }
    });
} catch (e) {
    console.error("Error initializing middleware slug map:", e);
}

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // Check if the current path matches an extra slug
    if (slugMap.has(pathname)) {
        const canonicalRoute = slugMap.get(pathname);
        const url = request.nextUrl.clone();

        // Rewrite to the canonical route
        url.pathname = canonicalRoute;

        // Pass the original slug as a query parameter so the page can use it for metadata
        // We strip the leading slash for cleaner usage
        const originalSlug = pathname.startsWith("/") ? pathname.slice(1) : pathname;
        url.searchParams.set("slug", originalSlug);

        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files (images, etc)
         */
        "/((?!api|_next/static|_next/image|favicon.ico|og-images).*)",
    ],
};

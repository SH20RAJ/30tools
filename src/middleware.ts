import { NextResponse, NextRequest } from "next/server";
import toolsData from "./constants/tools.json";

// Slug Logic
const slugMap = new Map<string, string>();
try {
    // @ts-ignore
    Object.values(toolsData.categories).forEach((category: any) => {
        if (category.tools) {
            category.tools.forEach((tool: any) => {
                if (tool.extraSlugs && tool.route) {
                    tool.extraSlugs.forEach((slug: string) => {
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

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check for "extra slugs" (legacy custom routes)
    if (slugMap.has(pathname)) {
        const canonicalRoute = slugMap.get(pathname);

        // Construct new URL with canonical route
        const newUrl = request.nextUrl.clone();
        newUrl.pathname = canonicalRoute!;

        // Pass original slug as query param
        const originalSlug = pathname.startsWith("/") ? pathname.slice(1) : pathname;
        newUrl.searchParams.set("slug", originalSlug);

        return NextResponse.rewrite(newUrl);
    }

    return NextResponse.next();
}

export const config = {
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

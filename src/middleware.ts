import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import toolsData from "./constants/tools.json";

// Initialize next-intl middleware
const handleI18nRouting = createMiddleware(routing);

// Slug Logic (ported from legacy middleware)
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

    // Helper to extract locale and inner path
    let pathToCheck = pathname;
    let localePrefix = '';

    // Check if path starts with a supported locale
    const locales = routing.locales;
    for (const locale of locales) {
        if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
            localePrefix = `/${locale}`;
            pathToCheck = pathname.replace(`/${locale}`, '') || '/';
            break;
        }
    }

    // Check for "extra slugs" (legacy custom routes)
    if (slugMap.has(pathToCheck)) {
        const canonicalRoute = slugMap.get(pathToCheck);

        // Construct new URL with canonical route
        const newUrl = request.nextUrl.clone();

        // Preserve locale prefix if present
        newUrl.pathname = `${localePrefix}${canonicalRoute}`;

        // Pass original slug as query param
        const originalSlug = pathToCheck.startsWith("/") ? pathToCheck.slice(1) : pathToCheck;
        newUrl.searchParams.set("slug", originalSlug);

        // Pass the REWRITTEN request to next-intl
        // next-intl will see the canonical path (e.g., /tool/tiktok) and handle mapping to [locale]
        return handleI18nRouting(new NextRequest(newUrl, request));
    }

    // Standard handling
    return handleI18nRouting(request);
}

export const config = {
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

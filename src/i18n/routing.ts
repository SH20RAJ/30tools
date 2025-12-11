import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'es', 'fr', 'de', 'pt'],

    // Used when no locale matches
    defaultLocale: 'en',

    // The prefix strategy. 'as-needed' means the default locale (en) 
    // will not have a prefix (e.g. /tools), while others will (e.g. /es/tools).
    // This is CRITICAL for preserving existing SEO traffic.
    prefix: 'as-needed'
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
    createNavigation(routing);

import SearchContent from "./SearchContent";
import { SITE_CONFIG } from "@/constants/config";

export const metadata = {
    title: `Search ${SITE_CONFIG.toolCountString} Free Online Tools | ${SITE_CONFIG.siteName}`,
    description: `Search across our ecosystem of ${SITE_CONFIG.toolCountString} professional online tools for image, PDF, video, text, and SEO tasks.`,
    keywords: "search online tools, free online tools, 30tools search, image tool search, pdf tool search, seo tools directory, developer utilities, search, free search, search online, 30tools, browser tools",
    openGraph: {
        title: `Search ${SITE_CONFIG.toolCountString} Free Online Tools | ${SITE_CONFIG.siteName}`,
        description: `Instantly find the right free online tool from ${SITE_CONFIG.toolCountString} professional tools for image, PDF, video, SEO, and developer workflows.`,        url: "https://30tools.com/search",
        siteName: SITE_CONFIG.siteName,
        images: [{ url: "/og-image.jpg" }],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: `Search ${SITE_CONFIG.toolCountString} Free Online Tools | ${SITE_CONFIG.siteName}`,
        description: `Instantly find the right free online tool from ${SITE_CONFIG.toolCountString} professional tools.`,        images: ["/og-image.jpg"],
    },
    robots: { index: false, follow: true },
};

export default function SearchPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <main className="flex-1">
                <SearchContent />
            </main>
        </div>
    );
}

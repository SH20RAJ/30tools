import SearchContent from "./SearchContent";
import { SITE_CONFIG } from "@/constants/config";

export const metadata = {
    title: `Search ${SITE_CONFIG.toolCountString} Free Online Tools | ${SITE_CONFIG.siteName}`,
    description: `Search across our ecosystem of ${SITE_CONFIG.toolCountString} professional online tools for image, PDF, video, text, and SEO tasks.`,
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

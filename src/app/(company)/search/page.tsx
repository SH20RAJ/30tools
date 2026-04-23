import { AppleNavbar } from "@/components/navigation/AppleNavbar";
import { AppleFooter } from "@/components/footers/AppleFooter";
import SearchContent from "./SearchContent";

export const metadata = {
    title: "Search 30+ Free Online Tools | 30tools",
    description: "Search across our ecosystem of 30+ professional online tools for image, PDF, video, text, and SEO tasks.",
};

export default function SearchPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <AppleNavbar />
            <main className="flex-1">
                <SearchContent />
            </main>
            <AppleFooter />
        </div>
    );
}

import SeoAnalyzer from "@/components/tools/seo/SeoAnalyzer";

export async function generateMetadata() {
    const title = "Free Backlink Checker - Check Inbound Links";
    const description = "Check backlinks pointing to any domain. Analyze your off-page SEO and link building progress.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/backlink-checker",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/backlink-checker",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function BacklinkCheckerPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Backlink <span className="text-primary">Checker</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Discover who is linking to your website and analyze your backlink profile.
                </p>
            </div>
            <SeoAnalyzer type="backlink" title="Check Backlinks" />
        </div>
    );
}

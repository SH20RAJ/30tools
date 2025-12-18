import SeoAnalyzer from "@/components/tools/seo/SeoAnalyzer";

export async function generateMetadata() {
    const title = "Local SEO Checking Tool - Optimize for Local Search";
    const description = "Improve your local search visibility. Check your business presence and local SEO factors.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/local-seo-tool",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/local-seo-tool",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function LocalSeoToolPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Local SEO <span className="text-primary">Tool</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Analyze and optimize your website for local search results.
                </p>
            </div>
            <SeoAnalyzer type="audit" title="Check Local SEO" />
        </div>
    );
}

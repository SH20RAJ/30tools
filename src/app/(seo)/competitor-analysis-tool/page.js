import SeoAnalyzer from "@/components/tools/seo/SeoAnalyzer";

export async function generateMetadata() {
    const title = "SEO Competitor Analysis Tool - Free Online Check";
    const description = "Analyze your competitors' SEO performance. Uncover their keywords, backlinks, and strategies to outrank them.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/competitor-analysis-tool",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/competitor-analysis-tool",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function CompetitorAnalysisToolPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Competitor Analysis <span className="text-primary">Tool</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Gain insights into your competitors' websites and SEO strategies.
                </p>
            </div>
            <SeoAnalyzer type="audit" title="Analyze Competitor" />
        </div>
    );
}

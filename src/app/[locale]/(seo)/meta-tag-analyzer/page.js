import SeoAnalyzer from "@/components/tools/seo/SeoAnalyzer";

export async function generateMetadata() {
    const title = "Meta Tag Analyzer - Check SEO Titles & Descriptions";
    const description = "Analyze your website's meta tags instantly. Check title length, meta description, and robots tags for SEO optimization.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/meta-tag-analyzer",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/meta-tag-analyzer",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function MetaTagAnalyzerPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Meta Tag <span className="text-primary">Analyzer</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Examine your page's meta tags to ensure they are optimized for search engines.
                </p>
            </div>
            <SeoAnalyzer type="meta-tags" title="Analyze Meta Tags" />
        </div>
    );
}

import SeoAnalyzer from "@/components/tools/seo/SeoAnalyzer";

export async function generateMetadata() {
    const title = "Image SEO Analyzer - Check Image Optimization";
    const description = "Analyze your website images for SEO. Check alt tags, sizes, and formats to improve image search rankings.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/image-seo-analyzer",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/image-seo-analyzer",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function ImageSeoAnalyzerPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Image SEO <span className="text-primary">Analyzer</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Scan your images for missed optimization opportunities.
                </p>
            </div>
            <SeoAnalyzer type="audit" title="Analyze Images" />
        </div>
    );
}

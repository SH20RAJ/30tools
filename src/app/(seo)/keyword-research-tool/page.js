import KeywordTool from "@/components/tools/seo/KeywordTool";

export async function generateMetadata() {
    const title = "Free Keyword Research Tool - Find SEO Keywords";
    const description = "Discover high-volume, low-competition keywords for your SEO strategy. Free online keyword planner and analysis tool.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/keyword-research-tool",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/keyword-research-tool",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function KeywordResearchToolPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Keyword Research <span className="text-primary">Tool</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Find the best keywords to target and boost your organic traffic.
                </p>
            </div>
            <KeywordTool mode="research" />
        </div>
    );
}

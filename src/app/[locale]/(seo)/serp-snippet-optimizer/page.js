import SerpSimulator from "@/components/tools/seo/SerpSimulator";

export async function generateMetadata() {
    const title = "SERP Simulator - Google Snippet Preview Tool";
    const description = "Optimize your title tags and meta descriptions. Preview how your website appears in Google search results.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/serp-snippet-optimizer",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/serp-snippet-optimizer",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function SerpSnippetOptimizerPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    SERP Snippet <span className="text-primary">Optimizer</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Preview and optimize your Google search result appearance to increase click-through rates.
                </p>
            </div>
            <SerpSimulator />
        </div>
    );
}

import KeywordTool from "@/components/tools/seo/KeywordTool";

export async function generateMetadata() {
    const title = "Keyword Rank Checker - Track SEO Rankings";
    const description = "Check your website's ranking positions for specific keywords on Google. Free rank tracking tool.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/rank-tracking-tool",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/rank-tracking-tool",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function RankTrackingToolPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Keyword Rank <span className="text-primary">Tracker</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Monitor your keyword positions and track SEO progress over time.
                </p>
            </div>
            <KeywordTool mode="tracking" />
        </div>
    );
}

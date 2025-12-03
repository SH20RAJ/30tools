import AiContentOptimizerTool from "@/components/tools/seo/AiContentOptimizerTool";

export const metadata = {
    title: "AI Semantic Content Optimizer - Free SEO Content Analysis | 30tools",
    description:
        "Analyze and optimize your content for semantic SEO with our free AI tool. Improve topical authority, find missing entities, and boost rankings.",
    keywords: [
        "ai content optimizer",
        "semantic seo tool",
        "topical authority checker",
        "entity seo analysis",
        "free seo content tool",
        "content optimization ai",
        "semantic analysis tool",
    ].join(", "),
    openGraph: {
        title: "AI Semantic Content Optimizer - Free SEO Content Analysis",
        description:
            "Analyze and optimize your content for semantic SEO with our free AI tool. Improve topical authority and boost rankings.",
        url: "https://30tools.com/ai-seo-content-optimizer",
        siteName: "30tools",
        type: "website",
        images: [
            {
                url: "/og-images/ai-seo-content-optimizer.jpg",
                width: 1200,
                height: 630,
                alt: "AI Semantic Content Optimizer Tool",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Semantic Content Optimizer - Free SEO Tool",
        description:
            "Analyze and optimize your content for semantic SEO with our free AI tool.",
        images: ["/og-images/ai-seo-content-optimizer.jpg"],
    },
    alternates: {
        canonical: "https://30tools.com/ai-seo-content-optimizer",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "AI Semantic Content Optimizer",
    description:
        "Free AI-powered tool to analyze content for semantic completeness, topical authority, and entity coverage.",
    url: "https://30tools.com/ai-seo-content-optimizer",
    applicationCategory: "SEOApplication",
    operatingSystem: "Any",
    permissions: "browser",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
    featureList: [
        "Semantic Analysis",
        "Entity Extraction",
        "Topical Authority Scoring",
        "Content Optimization Suggestions",
        "Sentiment Analysis",
    ],
};

export default function AiContentOptimizerPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                        AI Semantic Content Optimizer
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        Go beyond keyword density. Use AI to analyze your content's semantic
                        completeness, discover missing entities, and build topical authority
                        that Google loves.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
                        <span className="bg-primary/10 px-4 py-1.5 rounded-full font-medium text-primary">
                            ✨ AI-Powered Analysis
                        </span>
                        <span className="bg-primary/10 px-4 py-1.5 rounded-full font-medium text-primary">
                            🎯 Entity Detection
                        </span>
                        <span className="bg-primary/10 px-4 py-1.5 rounded-full font-medium text-primary">
                            📈 Topical Authority
                        </span>
                    </div>
                </div>

                <AiContentOptimizerTool />

                <div className="mt-20 space-y-12 max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-card p-8 rounded-xl border shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">
                                What is Semantic SEO?
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Semantic SEO focuses on meaning and topics rather than just
                                keywords. Search engines like Google now understand the context
                                and relationships between words (entities). To rank well, your
                                content must comprehensively cover a topic and include relevant
                                related concepts.
                            </p>
                        </div>
                        <div className="bg-card p-8 rounded-xl border shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">
                                How This Tool Helps
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our AI analyzes your content against your target keyword to
                                identify gaps in your topic coverage. It suggests "missing
                                entities"—related terms and concepts that top-ranking pages
                                likely include—helping you build greater topical authority.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

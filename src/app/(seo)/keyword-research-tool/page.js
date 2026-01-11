import KeywordTool from "@/components/tools/seo/KeywordTool";
import {
    FAQSection,
    RelatedTools,
    UserComments,
    QuickActions,
} from "@/components/seo";
import {
    GeneratorToolFeatures,
    GeneratorToolExamples,
} from "@/components/seo/GeneratorToolsHub";

export const metadata = {
    title: "Free Keyword Research Tool (2026) - Find High Volume Keywords | 30Tools",
    description: "Discover profitable SEO keywords with our free research tool. Get search volume, difficulty, and CPC data. Best free alternative to Ahrefs & SEMrush.",
    keywords: [
        "keyword research tool", "free keyword finder", "seo keyword generator", "google keyword planner alternative",
        "keyword difficulty checker", "long tail keyword generator", "find high cpc keywords",
        "keyword search volume checker", "free seo tools 2026", "keyword analysis online"
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/keyword-research-tool",
    },
    openGraph: {
        title: "Free Keyword Research Tool (2026) - Find SEO Gems",
        description: "Discover profitable SEO keywords with our free research tool. Get search volume, difficulty, and CPC data.",
        url: "https://30tools.com/keyword-research-tool",
        siteName: "30tools",
        type: "website",
        images: [{ url: "/og-images/keyword-research-tool.jpg", width: 1200, height: 630, alt: "Keyword Research Tool" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Free Keyword Research Tool (2026)",
        description: "Discover profitable SEO keywords with our free research tool.",
        images: ["/og-images/keyword-research-tool.jpg"],
        creator: "@30tools",
    },
};

export default function KeywordResearchToolPage() {
    const toolData = {
        id: "keyword-research-tool",
        name: "Keyword Research Tool",
        description: "Find winning keywords for your content",
        category: "seo",
        route: "/keyword-research-tool",
    };

    const features = [
        "Real-time Search Volume Data",
        "Keyword Difficulty Scores",
        "CPC Estimates (AdSense)",
        "Long-tail Suggestions",
        "Competitor Keyword Analysis",
        "Export to CSV/Excel",
        "Country-specific Data",
        "100% Free Unlimited Searches"
    ];

    const examples = [
        {
            title: "Content Planning",
            description: "Find topic ideas",
            input: "Seed: 'Coffee'",
            output: "coffee beans, best coffee maker, coffee types",
        },
        {
            title: "Competitor Analysis",
            description: "See what ranks",
            input: "Domain: exact.com",
            output: "Top organic keywords list",
        },
        {
            title: "PPC Campaigns",
            description: "Find low cost keywords",
            input: "Seed: 'Insurance'",
            output: "cheap car insurance, life insurance quotes",
        }
    ];

    const faqs = [
        {
            question: "Is this keyword tool accurate?",
            answer: "Yes, we aggregate data from multiple reliable sources to provide accurate search volume and trend estimations updated for 2026.",
        },
        {
            question: "Can I find long-tail keywords?",
            answer: "Absolutely. Our tool specializes in uncovering low-competition long-tail keywords that are easier to rank for.",
        },
        {
            question: "Is there a limit on searches?",
            answer: "No, 30Tools Keyword Research Tool is free to use with no daily search limits.",
        }
    ];

    const relatedTools = [
        {
            id: "backlink-checker",
            name: "Backlink Checker",
            description: "Analyze competitor links",
            route: "/backlink-checker",
            category: "seo",
        },
        {
            id: "seo-audit-tool",
            name: "SEO Audit Tool",
            description: "Check website health",
            route: "/seo-audit-tool",
            category: "seo",
        },
        {
            id: "meta-tag-analyzer",
            name: "Meta Tag Analyzer",
            description: "Optimize meta tags",
            route: "/meta-tag-analyzer",
            category: "seo",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Free <span className="text-primary">Keyword Research Tool</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Uncover high-volume, low-competition keywords to skyrocket your SEO rankings.
                        The best free alternative to paid tools.
                    </p>
                    <QuickActions
                        toolName="Keyword Research Tool"
                        toolUrl="https://30tools.com/keyword-research-tool"
                        showBookmark={true}
                        showShare={true}
                    />
                </div>

                {/* Tool Interface */}
                <div className="mb-20">
                    <KeywordTool mode="research" />
                </div>

                {/* Content Sections */}
                <GeneratorToolFeatures tool={toolData} features={features} />
                <GeneratorToolExamples tool={toolData} examples={examples} title="How to Use Keywords" />

                <div className="mb-20">
                    <FAQSection
                        faqs={faqs}
                        title="Keyword Research FAQ"
                        categoryTitle="SEO"
                        variant="accordion"
                        showSchema={true}
                    />
                </div>

                <div className="mb-20">
                    <RelatedTools
                        currentTool="keyword-research-tool"
                        category="seo"
                        tools={relatedTools}
                        title="More SEO Utilities"
                    />
                </div>

                <UserComments
                    toolId="keyword-research-tool"
                    toolName="Keyword Research Tool"
                    showStats={true}
                    allowComments={true}
                />
            </div>
        </div>
    );
}

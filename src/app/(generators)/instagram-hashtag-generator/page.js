import AestheticBioGeneratorTool from "@/components/tools/generators/AestheticBioGeneratorTool";
import {
    BreadcrumbsEnhanced,
    FAQSection,
    ReviewSnippets,
    RelatedTools,
    UserComments,
    QuickActions,
} from "@/components/seo";
import {
    GeneratorToolFeatures,
    GeneratorToolExamples,
} from "@/components/seo/GeneratorToolsHub";

export const metadata = {
    title: "Instagram Hashtag Generator (2026) - Viral Tags & Growth | 30Tools",
    description: "Find the best Instagram hashtags for your reels and posts. Generate viral, trending, and niche hashtags to boost your reach and followers. Free hashtag finder tool.",
    keywords: [
        "instagram hashtag generator", "best instagram hashtags", "hashtag finder",
        "viral hashtags for instagram", "reels hashtags 2026", "instagram growth tool",
        "trending instagram hashtags", "hashtag generator for reels", "copy paste hashtags",
        "popular instagram tags", "photography hashtags", "fitness hashtags"
    ].join(", "),
    openGraph: {
        title: "Instagram Hashtag Generator - Find Viral Tags",
        description: "⚡ Boost your Instagram reach with the best hashtags! Generate trending tags for Reels and Posts.",
        url: "https://30tools.com/instagram-hashtag-generator",
        siteName: "30tools",
        type: "website",
        images: [{ url: "/og-images/instagram-hashtag-generator.jpg", width: 1200, height: 630, alt: "Instagram Hashtag Generator 2026" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Instagram Hashtag Generator - Viral Growth",
        description: "⚡ Find trending Instagram hashtags instantly. Grow your account fast!",
        images: ["/og-images/instagram-hashtag-generator.jpg"],
        creator: "@30tools"
    },
    alternates: { canonical: "https://30tools.com/instagram-hashtag-generator" },
    robots: { index: true, follow: true }
};

export default function InstagramHashtagGeneratorPage() {
    const toolData = {
        id: "instagram-hashtag-generator",
        name: "Instagram Hashtag Generator",
        description: "Find top and trending hashtags for Instagram to increase your reach and engagement",
        category: "generators",
        route: "/instagram-hashtag-generator",
    };

    const breadcrumbs = [
        { name: "Generators", url: "/generators" },
        { name: "Instagram Hashtag Generator", url: "/instagram-hashtag-generator" },
    ];

    const features = [
        "Generate viral hashtags",
        "Categorized tag sets",
        "Copy optimized groups",
        "Avoid banned hashtags",
        "Reels specific tags",
        "Growth focused algorithm",
        "100% Free to use"
    ];

    const examples = [
        {
            title: "Travel & Adventure",
            description: "Best tags for travel bloggers",
            input: "travel",
            output: "#travelgram #wanderlust #travelphotography #instatravel #adventure #explorepage #vacation #holiday"
        },
        {
            title: "Fitness & Gym",
            description: "Tags for workout reels",
            input: "gym",
            output: "#fitnessmotivation #gymlife #workout #fitfam #bodybuilding #healthylifestyle #training #gymrat"
        },
        {
            title: "Photography",
            description: "Reach photography enthusiasts",
            input: "photo",
            output: "#photography #photooftheday #picoftheday #photographer #art #beautiful #nature #portrait"
        }
    ];

    const faqs = [
        {
            question: "How to find best hashtags for Instagram?",
            answer: "Use our Instagram Hashtag Generator to input your niche keyword, and we will provide a list of high-performing, relevant hashtags."
        },
        {
            question: "How many hashtags should I use?",
            answer: "Instagram allows up to 30 hashtags per post. We recommend using a mix of 15-25 high, medium, and low competition tags."
        },
        {
            question: "Do hashtags work for Reels?",
            answer: "Yes! Hashtags are crucial for Reels SEO. Using our reel specific hashtags can help your video appear on the Explore page."
        }
    ];

    const relatedTools = [
        { id: "instagram-font-generator", name: "Instagram Font Generator", description: "Stylish bio fonts", route: "/instagram-font-generator", category: "generators" },
        { id: "aesthetic-bio-generator", name: "Aesthetic Bio Generator", description: "Create aesthetic bios", route: "/aesthetic-bio-generator", category: "generators" }
    ];

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 pt-6">
                <BreadcrumbsEnhanced customBreadcrumbs={breadcrumbs} />
            </div>

            <main className="container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Instagram Hashtag Generator (Viral Tags)</h1>
                    <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
                        Explode your reach with our <strong>Instagram Hashtag Generator</strong>. Find the <strong>best hashtags for reels</strong> and posts to gain likes and followers. The ultimate <strong>hashtag finder</strong> for 2026.
                    </p>
                    <QuickActions toolName="Instagram Hashtag Generator" toolUrl="https://30tools.com/instagram-hashtag-generator" showBookmark={true} showShare={true} />
                </div>

                <div className="mb-12">
                    {/* Reusing aesthetic generator structure for input/output text flow */}
                    <AestheticBioGeneratorTool />
                </div>

                <GeneratorToolFeatures tool={toolData} features={features} />
                <GeneratorToolExamples tool={toolData} examples={examples} />

                <div className="mb-12">
                    <ReviewSnippets toolId="instagram-hashtag-generator" title="Growth Success Stories" showRatingSummary={true} variant="grid" limit={6} />
                </div>

                <div className="mb-12">
                    <FAQSection faqs={faqs} title="Hashtag Strategy FAQ" categoryTitle="Growth & Marketing" variant="accordion" showSchema={true} />
                </div>

                <RelatedTools currentTool="instagram-hashtag-generator" category="generators" tools={relatedTools} title="More Growth Tools" />
                <UserComments toolId="instagram-hashtag-generator" toolName="Instagram Hashtag Generator" showStats={true} allowComments={true} />
            </main>

            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebApplication",
                    "name": "Instagram Hashtag Generator",
                    "description": "Generate viral hashtags for Instagram reels and posts.",
                    "url": "https://30tools.com/instagram-hashtag-generator",
                    "applicationCategory": "UtilitiesApplication",
                    "operatingSystem": "Any",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
                })
            }} />
        </div>
    );
}

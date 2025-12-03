import AiVoiceSearchOptimizerTool from "@/components/tools/seo/AiVoiceSearchOptimizerTool";

export const metadata = {
    title: "AI Voice Search Optimizer - Rank for Voice Queries | 30tools",
    description:
        "Optimize your content for voice search and featured snippets. Generate natural language Q&A pairs with our free AI tool to capture voice traffic.",
    keywords: [
        "voice search optimizer",
        "voice seo tool",
        "featured snippet generator",
        "voice search optimization",
        "ai seo tool",
        "question answer generator",
        "conversational seo",
    ].join(", "),
    openGraph: {
        title: "AI Voice Search Optimizer - Rank for Voice Queries",
        description:
            "Optimize your content for voice search and featured snippets. Generate natural language Q&A pairs with our free AI tool.",
        url: "https://30tools.com/voice-search-optimizer",
        siteName: "30tools",
        type: "website",
        images: [
            {
                url: "/og-images/voice-search-optimizer.jpg",
                width: 1200,
                height: 630,
                alt: "AI Voice Search Optimizer Tool",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Voice Search Optimizer - Free SEO Tool",
        description:
            "Optimize your content for voice search and featured snippets with AI.",
        images: ["/og-images/voice-search-optimizer.jpg"],
    },
    alternates: {
        canonical: "https://30tools.com/voice-search-optimizer",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "AI Voice Search Optimizer",
    description:
        "Free AI-powered tool to generate voice search optimized questions and answers for featured snippets.",
    url: "https://30tools.com/voice-search-optimizer",
    applicationCategory: "SEOApplication",
    operatingSystem: "Any",
    permissions: "browser",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
    featureList: [
        "Voice Search Question Generation",
        "Direct Answer Optimization",
        "Featured Snippet Strategy",
        "Intent Analysis",
        "Conversational SEO",
    ],
};

export default function AiVoiceSearchOptimizerPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                        AI Voice Search Optimizer
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        Capture the growing voice search market. Generate natural language
                        questions and concise answers optimized for Google's Featured
                        Snippets and voice assistants like Siri and Alexa.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
                        <span className="bg-primary/10 px-4 py-1.5 rounded-full font-medium text-primary">
                            🗣️ Voice Ready
                        </span>
                        <span className="bg-primary/10 px-4 py-1.5 rounded-full font-medium text-primary">
                            🏆 Featured Snippets
                        </span>
                        <span className="bg-primary/10 px-4 py-1.5 rounded-full font-medium text-primary">
                            💬 Conversational
                        </span>
                    </div>
                </div>

                <AiVoiceSearchOptimizerTool />

                <div className="mt-20 space-y-12 max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-card p-8 rounded-xl border shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">
                                Why Voice Search SEO?
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                With the rise of smart speakers and mobile assistants, voice
                                search is booming. Voice queries are longer, more conversational,
                                and often phrased as questions. Optimizing for these queries is
                                crucial for modern SEO visibility.
                            </p>
                        </div>
                        <div className="bg-card p-8 rounded-xl border shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">
                                How to Use the Results
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Use the generated Q&A pairs in your content, specifically in FAQ
                                sections or as direct answers under headers. This structure
                                increases your chances of winning "Position Zero" (Featured
                                Snippets), which voice assistants read aloud.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

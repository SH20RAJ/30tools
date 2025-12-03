import AiTechnicalSeoFixerTool from "@/components/tools/seo/AiTechnicalSeoFixerTool";

export const metadata = {
    title: "AI Technical SEO Fixer - Instant Code & Error Solutions | 30tools",
    description:
        "Instantly fix technical SEO errors with AI. Generate corrected code for Schema, robots.txt, .htaccess, and meta tags. Solve GSC errors in seconds.",
    keywords: [
        "technical seo fixer",
        "ai seo code generator",
        "fix google search console errors",
        "schema markup fixer",
        "robots.txt generator ai",
        "technical seo audit tool",
        "seo code debugger",
    ].join(", "),
    openGraph: {
        title: "AI Technical SEO Fixer - Instant Code & Error Solutions",
        description:
            "Instantly fix technical SEO errors with AI. Generate corrected code for Schema, robots.txt, .htaccess, and meta tags.",
        url: "https://30tools.com/ai-technical-seo-fixer",
        siteName: "30tools",
        type: "website",
        images: [
            {
                url: "/og-images/ai-technical-seo-fixer.jpg",
                width: 1200,
                height: 630,
                alt: "AI Technical SEO Fixer Tool",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Technical SEO Fixer - Free SEO Tool",
        description: "Instantly fix technical SEO errors with AI.",
        images: ["/og-images/ai-technical-seo-fixer.jpg"],
    },
    alternates: {
        canonical: "https://30tools.com/ai-technical-seo-fixer",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "AI Technical SEO Fixer",
    description:
        "Free AI-powered tool to instantly diagnose and fix technical SEO issues and generate optimized code.",
    url: "https://30tools.com/ai-technical-seo-fixer",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    permissions: "browser",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
    featureList: [
        "Code Generation",
        "Error Debugging",
        "Schema Validation",
        "Robots.txt Optimization",
        "Meta Tag Fixing",
    ],
};

export default function AiTechnicalSeoFixerPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">
                        AI Technical SEO Fixer
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        Don't let technical errors hold back your rankings. Paste any SEO
                        issue, error message, or broken code, and our AI will instantly
                        generate the correct fix with an explanation.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
                        <span className="bg-primary/10 px-4 py-1.5 rounded-full font-medium text-primary">
                            🔧 Instant Fixes
                        </span>
                        <span className="bg-primary/10 px-4 py-1.5 rounded-full font-medium text-primary">
                            💻 Code Generation
                        </span>
                        <span className="bg-primary/10 px-4 py-1.5 rounded-full font-medium text-primary">
                            🚀 GSC Error Solver
                        </span>
                    </div>
                </div>

                <AiTechnicalSeoFixerTool />

                <div className="mt-20 space-y-12 max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-card p-8 rounded-xl border shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">
                                What Can It Fix?
                            </h2>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>• Invalid Schema Markup (JSON-LD)</li>
                                <li>• Broken robots.txt files</li>
                                <li>• Incorrect Canonical tags</li>
                                <li>• Hreflang tag errors</li>
                                <li>• .htaccess redirects</li>
                                <li>• Meta tag issues</li>
                            </ul>
                        </div>
                        <div className="bg-card p-8 rounded-xl border shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">
                                For Developers & SEOs
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Whether you're a developer needing a quick snippet or an SEO
                                professional troubleshooting a client site, this tool acts as your
                                instant technical assistant. It not only fixes the code but
                                explains *why* it was broken.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

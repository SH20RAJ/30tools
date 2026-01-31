import SeoAnalyzer from "@/components/tools/seo/SeoAnalyzer";
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
    title: "Free SEO Audit Tool (2026) - Website Health Check | 30Tools",
    description: "Perform a complete SEO audit of your website for free. Identify technical issues, on-page SEO errors, and get actionable improvements instantly.",
    keywords: [
        "seo audit tool", "free website analysis", "on page seo checker", "technical seo audit",
        "website health check", "seo score checker", "google seo audit",
        "site audit online", "check website ranking", "broken link finder"
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/seo-audit-tool",
    },
    openGraph: {
        title: "Free SEO Audit Tool (2026) - Website Health Check",
        description: "Perform a complete SEO audit of your website. Identify technical issues and get actionable improvements.",
        url: "https://30tools.com/seo-audit-tool",
        siteName: "30tools",
        type: "website",
        images: [{ url: "/og-images/seo-audit-tool.jpg", width: 1200, height: 630, alt: "SEO Audit Tool" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Free SEO Audit Tool (2026)",
        description: "Perform a complete SEO audit of your website. Identify technical issues and get actionable improvements.",
        images: ["/og-images/seo-audit-tool.jpg"],
        creator: "@30tools",
    },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Seo Audit Tool",
  "description": "Professional seo audit tool for Process. Free SEO analysis and optimization tool. Improve search rankings with data-driven insights.",
  "url": "https://30tools.com/seo-audit-tool",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  }
};

export default function SeoAuditToolPage() {
    const toolData = {
        id: "seo-audit-tool",
        name: "SEO Audit Tool",
        description: "Complete website health check",
        category: "seo",
        route: "/seo-audit-tool",
    };

    const features = [
        "On-Page SEO Analysis",
        "Technical SEO Check",
        "Mobile Optimization Score",
        "Page Speed Insights",
        "Core Web Vitals Assessment",
        "Meta Tags Verification",
        "Internal Link Analysis",
        "Downloadable PDF Report"
    ];

    const examples = [
        {
            title: "Technical Health",
            description: "Find crawling issues",
            input: "Your URL",
            output: "Identifies robots.txt or sitemap errors",
        },
        {
            title: "Content Optimization",
            description: "Check keyword usage",
            input: "Blog Post URL",
            output: "Missing H1, poor keyword density alerts",
        },
        {
            title: "Speed Check",
            description: "Analyze load times",
            input: "Landing Page URL",
            output: "LCP, FID, CLS metrics and fixes"
        }
    ];

    const faqs = [
        {
            question: "What does the SEO score mean?",
            answer: "The score (0-100) represents the overall health of your page based on Google's ranking factors. A higher score means better optimization.",
        },
        {
            question: "How do I fix the errors found?",
            answer: "Each error comes with a 'How to Fix' guide. Simply follow the actionable steps provided in the audit report.",
        },
        {
            question: "Is this tool compatible with all websites?",
            answer: "Yes, our SEO Audit Tool works with any publicly accessible website, including WordPress, Shopify, Wix, and custom-coded sites.",
        }
    ];

    const relatedTools = [
        {
            id: "keyword-research-tool",
            name: "Keyword Research Tool",
            description: "Find SEO keywords",
            route: "/keyword-research-tool",
            category: "seo",
        },
        {
            id: "backlink-checker",
            name: "Backlink Checker",
            description: "Check inbound links",
            route: "/backlink-checker",
            category: "seo",
        },
        {
            id: "page-speed-test",
            name: "Page Speed Test",
            description: "Analyze site speed",
            route: "/page-speed-test",
            category: "seo",
        },
    ];

    return (
        <>
            
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Free <span className="text-primary">SEO Audit Tool</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Get a comprehensive SEO score and actionable checklist to improve your website's ranking.
                    </p>
                    <QuickActions
                        toolName="SEO Audit Tool"
                        toolUrl="https://30tools.com/seo-audit-tool"
                        showBookmark={true}
                        showShare={true}
                    />
                </div>

                {/* Tool Interface */}
                <div className="mb-20">
                    <SeoAnalyzer type="audit" title="Run Audit" />
                </div>

                {/* Content Sections */}
                <GeneratorToolFeatures tool={toolData} features={features} />
                <GeneratorToolExamples tool={toolData} examples={examples} title="Website Optimization Checks" />

                <div className="mb-20">
                    <FAQSection
                        faqs={faqs}
                        title="SEO Audit FAQ"
                        categoryTitle="Website Optimization"
                        variant="accordion"
                        showSchema={true}
                    />
                </div>

                <div className="mb-20">
                    <RelatedTools
                        currentTool="seo-audit-tool"
                        category="seo"
                        tools={relatedTools}
                        title="More Optimization Tools"
                    />
                </div>

                <UserComments
                    toolId="seo-audit-tool"
                    toolName="SEO Audit Tool"
                    showStats={true}
                    allowComments={true}
                />
            </div>
        </div>
    );
}

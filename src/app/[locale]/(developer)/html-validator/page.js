import HtmlValidator from "@/components/tools/developer/HtmlValidator";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    CheckCircle2,
    Bug,
    Code,
    ShieldCheck,
    Search,
    AlertTriangle
} from "lucide-react";

export const metadata = {
    title: "HTML Validator (2026) - Free HTML Syntax Checker | 30Tools",
    description: "Best Free HTML Validator 2026. Check your HTML code for errors, syntax issues, and broken tags instantly. Improve website quality and SEO ranking.",
    keywords: [
        "html validator",
        "html syntax checker",
        "validate html online",
        "html error checker",
        "check html code",
        "w3c validator alternative",
        "fix html errors",
        "html markup validation",
        "web standards checker",
        "html linting"
    ],
    authors: [{ name: "30Tools Team" }],
    creator: "30Tools",
    publisher: "30Tools",
    alternates: {
        canonical: "https://30tools.com/html-validator",
    },
    openGraph: {
        title: "HTML Validator (2026) - Check HTML Syntax Free",
        description: "⚡ Validate HTML code instantly! Find & fix errors to boost SEO & performance. 100% Free.",
        url: "https://30tools.com/html-validator",
        siteName: "30Tools",
        type: "website",
        images: [
            {
                url: "/og-images/html-validator.jpg",
                width: 1200,
                height: 630,
                alt: "Free HTML Validator 2026",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "HTML Validator (2026) - Check Code Free",
        description: "⚡ Validate HTML & fix syntax errors instantly. Updated 2026!",
        images: ["/og-images/html-validator.jpg"],
        creator: "@30tools",
    },
    robots: {
        index: true,
        follow: true,
    },
};

const jsonLdSchemas = {
    webApp: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "HTML Validator",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Any",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "featureList": [
            "Validate HTML syntax instantly",
            "Find missing closing tags",
            "Identify deprecated elements",
            "Check for W3C compliance issues",
            "Free to use"
        ]
    },
    faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why is HTML validation important?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Valid HTML ensures that your website renders correctly across different browsers and devices. It also helps with SEO, as search engines prefer crawlable, error-free code."
                }
            },
            {
                "@type": "Question",
                "name": "Does this tool fix the errors for me?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "This tool identifies errors and provides suggestions. While it doesn't auto-fix everything to prevent unwanted changes, it points you exactly where the issues are so you can correct them easily."
                }
            },
            {
                "@type": "Question",
                "name": "Is my code secure?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, all validation happens in your browser. We do not store or transmit your code to any external servers."
                }
            }
        ]
    },
    howTo: {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Validate HTML Code",
        "description": "Step-by-step guide to check your HTML for errors.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Enter Code",
                "text": "Paste your HTML code into the editor.",
                "image": "https://30tools.com/og-images/html-validator.jpg",
                "url": "https://30tools.com/html-validator#step1"
            },
            {
                "@type": "HowToStep",
                "name": "Check",
                "text": "The tool will automatically scan for syntax errors and warnings.",
                "url": "https://30tools.com/html-validator#step2"
            },
            {
                "@type": "HowToStep",
                "name": "Review",
                "text": "Review the list of issues and fix them in your source code.",
                "url": "https://30tools.com/html-validator#step3"
            }
        ]
    }
};

export default function HtmlValidatorPage() {
    const features = [
        {
            icon: <Search className="w-5 h-5 text-amber-500" />,
            title: "Instant Detection",
            description: "Finds unclosed tags, missing attributes, and invalid nesting in milliseconds.",
        },
        {
            icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
            title: "Private & Secure",
            description: "Analyze your HTML locally. Your code never leaves your browser.",
        },
        {
            icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
            title: "Error Highlighting",
            description: "Pinpoints the exact line and column of every error for quick fixes.",
        },
        {
            icon: <CheckCircle2 className="w-5 h-5 text-blue-500" />,
            title: "Standards Compliant",
            description: "Checks against modern HTML5 standards to ensure best practices.",
        },
    ];

    const steps = [
        { title: "Paste HTML", desc: "Paste your code snippet." },
        { title: "Analyze", desc: "View errors instantly." },
        { title: "Fix", desc: "Correct the marked issues." },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.faq) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.howTo) }}
            />

            <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        HTML <span className="text-primary">Validator</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        The easiest way to check HTML syntax online. Find and fix markup errors to ensure your website meets web standards.
                    </p>
                </div>

                <div className="mb-20">
                    <HtmlValidator />
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {features.map((f, i) => (
                        <div key={i} className="bg-card/50 hover:bg-card p-6 rounded-2xl border border-border/50 transition-all duration-200">
                            <div className="bg-background w-10 h-10 rounded-xl flex items-center justify-center shadow-sm mb-4 border border-border/50">
                                {f.icon}
                            </div>
                            <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                        </div>
                    ))}
                </div>

                {/* How To */}
                <section className="bg-muted/30 rounded-3xl p-8 md:p-12 mb-20 border border-border/50">
                    <h2 className="text-2xl font-bold text-center mb-10">How It Works</h2>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10 -translate-y-1/2" />
                        {steps.map((s, i) => (
                            <div key={i} className="flex flex-col items-center text-center bg-background p-6 rounded-2xl border border-border/50 shadow-sm w-full md:w-1/3 z-10 transition-transform hover:scale-105 duration-300">
                                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                                    {i + 1}
                                </div>
                                <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                                <p className="text-sm text-muted-foreground">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {jsonLdSchemas.faq.mainEntity.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="border-b-border/50">
                                <AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary">
                                    {faq.name}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    {faq.acceptedAnswer.text}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>

                {/* Content Block for SEO */}
                <article className="prose dark:prose-invert max-w-none mb-20">
                    <h2 className="text-3xl font-bold text-center mb-6">Cleaner Filter, Better Web</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Ensure Cross-Browser Compatibility</h3>
                            <p className="text-muted-foreground">
                                Valid HTML is the foundation of a consistent user experience. Different browsers might handle errors differently, leading to broken layouts. Validating your code ensures it looks and behaves as intended everywhere.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Debug Faster</h3>
                            <p className="text-muted-foreground">
                                Trying to debug a broken layout with invalid HTML is like looking for a needle in a haystack. Fixing syntax errors first often resolves weird styling issues automatically, saving you hours of frustration.
                            </p>
                        </div>
                    </div>
                </article>

            </div>
        </>
    );
}

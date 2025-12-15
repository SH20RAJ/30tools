import CodeMinifier from "@/components/tools/developer/CodeMinifier";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    CheckCircle2,
    Zap,
    ShieldCheck,
    Code2,
    FileCode,
    LayoutTemplate
} from "lucide-react";

export const metadata = {
    title: "CSS Minifier (2026) - Compress CSS Online | 30Tools",
    description: "Best Free CSS Minifier 2026. Compress and minify CSS files instantly. Reduce file size by up to 80% for faster website loading speeds. No ads, 100% secure.",
    keywords: [
        "css minifier",
        "css compressor",
        "minify css",
        "css optimizer",
        "reduce css size",
        "stylesheet minifier",
        "online css minifier",
        "css formatter",
        "web performance",
        "code compression"
    ],
    authors: [{ name: "30Tools Team" }],
    creator: "30Tools",
    publisher: "30Tools",
    alternates: {
        canonical: "https://30tools.com/css-minifier",
    },
    openGraph: {
        title: "CSS Minifier (2026) - Compress CSS Online Free",
        description: "⚡ Minify CSS code instantly! Reduce file size & boost page load speed. 100% Free & Secure.",
        url: "https://30tools.com/css-minifier",
        siteName: "30Tools",
        type: "website",
        images: [
            {
                url: "/og-images/css-minifier.jpg",
                width: 1200,
                height: 630,
                alt: "Free CSS Minifier 2026",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "CSS Minifier (2026) - Compress Code Free",
        description: "⚡ Minify & Optimize CSS instantly. Updated 2026!",
        images: ["/og-images/css-minifier.jpg"],
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
        "name": "CSS Minifier",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Any",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "featureList": [
            "Minify CSS code instantly",
            "Reduce CSS file size",
            "Improve website loading speed",
            "Free to use",
            "No installation required"
        ]
    },
    faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is CSS Minification?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "CSS Minification is the process of removing unnecessary characters from CSS code, such as whitespace, comments, and newlines, without changing its functionality. This reduces the file size and improves website load times."
                }
            },
            {
                "@type": "Question",
                "name": "Why should I minify my CSS?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Minifying CSS facilitates faster page load times, reduces bandwidth usage, and improves your website's SEO ranking by enhancing performance scores (like Core Web Vitals)."
                }
            },
            {
                "@type": "Question",
                "name": "Is this CSS Minifier safe?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our tool processes your code locally in your browser (client-side) for maximum security. Your code is never sent to our servers."
                }
            },
            {
                "@type": "Question",
                "name": "Does minification affect the code's functionality?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, minification only removes characters that are not needed for the browser to understand the code. The functionality and styling remain exactly the same."
                }
            }
        ]
    },
    howTo: {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Minify CSS Code",
        "description": "Step-by-step guide to compress your CSS code using our free tool.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Paste Code",
                "text": "Copy your raw CSS code and paste it into the input editor.",
                "image": "https://30tools.com/og-images/css-minifier.jpg",
                "url": "https://30tools.com/css-minifier#step1"
            },
            {
                "@type": "HowToStep",
                "name": "Minify",
                "text": "Click the 'Minify' button to instantly compress your code.",
                "url": "https://30tools.com/css-minifier#step2"
            },
            {
                "@type": "HowToStep",
                "name": "Copy",
                "text": "Copy the minified CSS code and replace your original file content.",
                "url": "https://30tools.com/css-minifier#step3"
            }
        ]
    }
};

export default function CssMinifierPage() {
    const features = [
        {
            icon: <Zap className="w-5 h-5 text-amber-500" />,
            title: "Instant Compression",
            description: "Minify your CSS code in milliseconds. Our optimized engine handles large files with ease.",
        },
        {
            icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
            title: "100% Secure",
            description: "All processing happens in your browser. Your code never leaves your device.",
        },
        {
            icon: <FileCode className="w-5 h-5 text-blue-500" />,
            title: "Max Compression",
            description: "Advanced algorithms ensure the smallest possible file size without breaking functionality.",
        },
        {
            icon: <Code2 className="w-5 h-5 text-violet-500" />,
            title: "Syntax Checking",
            description: "Basic syntax validation helps prevent errors in your minified output.",
        },
    ];

    const steps = [
        { title: "Paste CSS", desc: "Paste your style code." },
        { title: "Minify", desc: "Click the minify button." },
        { title: "Copy Result", desc: "Use the compressed code." },
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
                        CSS <span className="text-primary">Minifier</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        The fastest way to minify CSS online. Reduce file size, improve load times, and boost SEO scores instantly.
                    </p>
                </div>

                <div className="mb-20">
                    <CodeMinifier language="css" />
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
                    <h2 className="text-3xl font-bold text-center mb-6">Why Use a CSS Minifier?</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Optimize Website Performance</h3>
                            <p className="text-muted-foreground">
                                Minifying CSS removes unnecessary whitespace, comments, and delimiters. This significantly reduces the file size, allowing browsers to download and parse stylesheets faster. Faster load times lead to better user experience and lower bounce rates.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Boost SEO Rankings</h3>
                            <p className="text-muted-foreground">
                                Search engines like Google consider page speed as a ranking factor. By minifying your CSS and scripts, you improve your Core Web Vitals scores, potentially boosting your search engine rankings and organic traffic.
                            </p>
                        </div>
                    </div>
                </article>

            </div>
        </>
    );
}

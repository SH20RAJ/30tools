import YouTubeThumbnailGenerator from "@/components/tools/video/YouTubeThumbnailGenerator";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Layout, Image as ImageIcon, Sparkles } from "lucide-react";
import Link from "next/link";

export async function generateMetadata() {
    const title = "YouTube Thumbnail Generator - Free Online Maker & Creator";
    const description = "Create click-worthy YouTube thumbnails for free. Use our easy thumbnail maker with customizable templates, text overlays, and backgrounds.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/youtube-thumbnail-generator",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/youtube-thumbnail-generator",
            siteName: "30tools",
            type: "website",
            images: [
                {
                    url: "/og-images/youtube-thumbnail-generator.jpg",
                    width: 1200,
                    height: 630,
                    alt: "YouTube Thumbnail Generator",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            creator: "@30tools",
        },
    };
}

const jsonLdSchemas = {
    webApp: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "YouTube Thumbnail Generator",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Any",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
        },
        "featureList": [
            "Custom Text Overlays",
            "Image Upload",
            "Templates",
            "HD Export"
        ]
    },
    faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is this YouTube Thumbnail Maker free?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it is completely free to create and download as many thumbnails as you need."
                }
            },
            {
                "@type": "Question",
                "name": "What is the best size for YouTube thumbnails?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The recommended size is 1280x720 pixels (16:9 ratio), which our tool sets automatically for you."
                }
            },
            {
                "@type": "Question",
                "name": "Can I upload my own images?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can upload your own background images or screenshots and overlay text on them."
                }
            }
        ]
    }
};

export default function YouTubeThumbnailGeneratorPage() {
    const features = [
        {
            icon: <Sparkles className="w-5 h-5 text-amber-500" />,
            title: "Eye-Catching Templates",
            description: "Start with pre-designed styles to make your video stand out in search results.",
        },
        {
            icon: <Layout className="w-5 h-5 text-emerald-500" />,
            title: "Perfect Dimensions",
            description: "Automatically formatted to 1280x720, the optimal size for YouTube.",
        },
        {
            icon: <ImageIcon className="w-5 h-5 text-blue-500" />,
            title: "Custom Backgrounds",
            description: "Upload your own images or choose from solid colors to match your brand.",
        },
        {
            icon: <CheckCircle2 className="w-5 h-5 text-violet-500" />,
            title: "Instant Download",
            description: "Download your finished thumbnail in high-quality PNG format instantly.",
        },
    ];

    const steps = [
        { title: "Select Background", desc: "Choose a color or upload an image." },
        { title: "Add Text", desc: "Write a catchy title and customize fonts." },
        { title: "Download", desc: "Save your HD thumbnail and upload to YouTube." },
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

            <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
                {/* Header */}
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                        YouTube <span className="text-primary">Thumbnail Generator</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Create professional, click-worthy thumbnails for your YouTube videos in seconds.
                        No design skills required.
                    </p>
                </div>

                {/* Main Tool */}
                <div className="mb-20">
                    <YouTubeThumbnailGenerator />
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
                            <div key={i} className="flex flex-col items-center text-center bg-background p-6 rounded-2xl border border-border/50 shadow-sm w-full md:w-1/3 z-10">
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
                    <h2 className="text-3xl font-bold text-center mb-8">Common Questions</h2>
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

                {/* Related Tools */}
                <div className="text-center py-10 border-t border-border/50">
                    <p className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">Related Tools</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link href="/youtube-thumbnail-downloader">
                            <Button variant="outline" className="rounded-full">Thumbnail Downloader</Button>
                        </Link>
                        <Link href="/youtube-tag-generator">
                            <Button variant="outline" className="rounded-full">Tag Generator</Button>
                        </Link>
                        <Link href="/youtube-downloader">
                            <Button variant="outline" className="rounded-full">YouTube Downloader</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

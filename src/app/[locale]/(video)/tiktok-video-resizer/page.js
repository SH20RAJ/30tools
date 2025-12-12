import TikTokVideoResizer from "@/components/tools/video/TikTokVideoResizer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Smartphone, Crop, Share2 } from "lucide-react";
import Link from "next/link";

export async function generateMetadata() {
    const title = "TikTok Video Resizer - Resize Video for TikTok, Reels & Shorts";
    const description = "Resize any video to 9:16 aspect ratio for TikTok, Instagram Reels, and YouTube Shorts online for free. Fast, easy, and no watermark.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/tiktok-video-resizer",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/tiktok-video-resizer",
            siteName: "30tools",
            type: "website",
            images: [
                {
                    url: "/og-images/tiktok-video-resizer.jpg",
                    width: 1200,
                    height: 630,
                    alt: "TikTok Video Resizer",
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
        "name": "TikTok Video Resizer",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Any",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
        },
        "featureList": [
            "Resize to 9:16",
            "TikTok Optimized",
            "No Watermark",
            "Fast Processing"
        ]
    },
    faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What aspect ratio does TikTok use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TikTok uses a 9:16 aspect ratio (1080x1920 pixels). Our tool automatically resizes your video to this format."
                }
            },
            {
                "@type": "Question",
                "name": "Can I use this for Instagram Reels?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Instagram Reels and YouTube Shorts also use the same 9:16 vertical video format, so this tool works perfectly for them too."
                }
            },
            {
                "@type": "Question",
                "name": "Does it add a watermark?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, 30Tools is completely free and we do not add any watermarks to your resized videos."
                }
            }
        ]
    }
};

export default function TikTokVideoResizerPage() {
    const features = [
        {
            icon: <Smartphone className="w-5 h-5 text-pink-500" />,
            title: "TikTok Ready",
            description: "Instantly convert landscape videos to perfect vertical 9:16 format.",
        },
        {
            icon: <Crop className="w-5 h-5 text-blue-500" />,
            title: "Smart Cropping",
            description: "Intelligently centers your video content for the best viewing experience.",
        },
        {
            icon: <Share2 className="w-5 h-5 text-emerald-500" />,
            title: "Multi-Platform",
            description: "Perfect for TikTok, Instagram Reels, YouTube Shorts, and Snapchat.",
        },
        {
            icon: <CheckCircle2 className="w-5 h-5 text-violet-500" />,
            title: "High Quality",
            description: "Maintains optimal video quality while adjusting dimensions.",
        },
    ];

    const steps = [
        { title: "Upload Video", desc: "Select any video from your device." },
        { title: "Select Ratio", desc: "Choose 9:16 for TikTok/Reels." },
        { title: "Download", desc: "Get your vertical video instantly." },
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

            <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
                {/* Header */}
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                        TikTok <span className="text-primary">Video Resizer</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Resize and crop any video to fit TikTok, Reels, and Shorts perfectly.
                        Free online tool with no watermark.
                    </p>
                </div>

                {/* Main Tool */}
                <div className="mb-20">
                    <TikTokVideoResizer />
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
                        <Link href="/video-compressor">
                            <Button variant="outline" className="rounded-full">Video Compressor</Button>
                        </Link>
                        <Link href="/tiktok-downloader">
                            <Button variant="outline" className="rounded-full">TikTok Downloader</Button>
                        </Link>
                        <Link href="/video-cropper">
                            <Button variant="outline" className="rounded-full">Video Cropper</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

import { SimpleTeraboxPlayer } from "@/components/tools/video/SimpleTeraboxPlayer";
import { Metadata } from "next";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    CheckCircle2,
    Download,
    Play,
    Share2,
    ShieldCheck,
    Zap,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Terabox Downloader | Download & Watch Terabox Videos Online",
    description:
        "Free Terabox downloader and player. Watch and download videos from Terabox links instantly without registration. Support for full screen and high quality.",
    keywords: [
        "terabox downloader",
        "terabox video downloader",
        "download terabox videos",
        "terabox link downloader",
        "terabox to mp4",
        "save terabox video",
        "online terabox viewer",
        "terabox direct download",
        "watch terabox without app",
        "terabox player online"
    ].join(", "),
    openGraph: {
        title: "Terabox Downloader | Free Online Video Player",
        description:
            "The best free tool to download and watch Terabox videos online. Simply paste your link and enjoy instant playback.",
        type: "website",
        url: "https://30tools.com/terabox-downloader",
        images: [{ url: "/og-images/terabox-downloader.jpg", alt: "Terabox Downloader" }],
    },
    alternates: {
        canonical: "/terabox-downloader",
    },
};

export default function TeraboxDownloaderPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Terabox Downloader",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
        description: "Download and watch Terabox videos directly in your browser without any app.",
        featureList: "Video Playback, Fullscreen Support, Instant Loading, No Ads",
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "2145"
        }
    };

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How to Watch and Download Terabox Videos",
        step: [
            {
                "@type": "HowToStep",
                position: 1,
                name: "Copy Link",
                text: "Copy the Terabox share link of the video you want to watch or download."
            },
            {
                "@type": "HowToStep",
                position: 2,
                name: "Paste URL",
                text: "Paste the link into the Terabox Downloader input field on this page."
            },
            {
                "@type": "HowToStep",
                position: 3,
                name: "Watch or Download",
                text: "Click the 'Watch' button to play the video instantly, or use the download option."
            }
        ]
    };

    const features = [
        {
            icon: <Play className="w-6 h-6 text-blue-500" />,
            title: "Instant Playback",
            description: "Watch Terabox videos immediately without waiting for download times.",
        },
        {
            icon: <Download className="w-6 h-6 text-green-500" />,
            title: "Fast Downloads",
            description: "Get direct download links for your files at high speed.",
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-purple-500" />,
            title: "No App Needed",
            description: "Access your content directly in the browser. No installation required.",
        },
        {
            icon: <Zap className="w-6 h-6 text-yellow-500" />,
            title: "100% Free",
            description: "Unlimited usage for all users. No hidden fees or subscriptions.",
        },
    ];

    const faqs = [
        {
            question: "Is this Terabox Downloader free?",
            answer: "Yes, our Terabox Downloader and Player is 100% free to use. You don't need to pay anything to watch or download videos."
        },
        {
            question: "Do I need to install the Terabox app?",
            answer: "No! One of the main benefits of our tool is that it works entirely in your browser. You don't need to install the Terabox application on your device."
        },
        {
            question: "Is it safe to use?",
            answer: "Absolutely. We do not store any of your data or files. The tool simply acts as a bridge to play the video directly from the source securely."
        },
        {
            question: "Does it work on mobile?",
            answer: "Yes, it works perfectly on Android and iOS devices, as well as desktop computers (Windows, Mac, Linux)."
        },
        {
            question: "Can I share the videos?",
            answer: "Yes, we provide easy sharing options and even an embed code if you want to place the video on your own website."
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: f.answer
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
                <div className="max-w-4xl mx-auto space-y-16">

                    {/* Hero Section */}
                    <section className="text-center space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                            Terabox Video <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Downloader & Player</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Watch and download Terabox videos instantly. No app installation required. Fast, free, and secure.
                        </p>
                    </section>

                    {/* Main Tool */}
                    <section className="bg-card/50 backdrop-blur-sm rounded-3xl p-4 md:p-8">
                        <SimpleTeraboxPlayer />
                    </section>

                    {/* Features Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex gap-4 p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-colors shadow-sm">
                                <div className="shrink-0 bg-primary/10 p-3 rounded-xl h-fit">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* How To Section */}
                    <section className="bg-muted/30 rounded-3xl p-8 md:p-12 border border-border/50">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            How to Download Terabox Videos?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-background rounded-full mx-auto flex items-center justify-center text-3xl shadow-md mb-6 border-2 border-primary/20">
                                    📋
                                </div>
                                <h3 className="font-bold text-xl mb-3">1. Copy Link</h3>
                                <p className="text-muted-foreground">Get the Terabox share link for the video you want.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-background rounded-full mx-auto flex items-center justify-center text-3xl shadow-md mb-6 border-2 border-primary/20">
                                    🔗
                                </div>
                                <h3 className="font-bold text-xl mb-3">2. Paste URL</h3>
                                <p className="text-muted-foreground">Paste it into the input box above and click Watch.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-background rounded-full mx-auto flex items-center justify-center text-3xl shadow-md mb-6 border-2 border-primary/20">
                                    ⬇️
                                </div>
                                <h3 className="font-bold text-xl mb-3">3. Enjoy</h3>
                                <p className="text-muted-foreground">Watch instantly or download the video.</p>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground">Common questions about our Terabox Downloader</p>
                        </div>

                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-base md:text-lg font-medium text-left">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>

                    {/* Footer / Links */}
                    <section className="text-center py-8 border-t border-border">
                        <p className="text-muted-foreground mb-4">
                            Explore more tools:
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/youtube-downloader" className="px-4 py-2 rounded-full bg-muted hover:bg-accent text-sm font-medium transition-colors">
                                YouTube Downloader
                            </Link>
                            <Link href="/instagram-downloader" className="px-4 py-2 rounded-full bg-muted hover:bg-accent text-sm font-medium transition-colors">
                                Instagram Downloader
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </>
    );
}

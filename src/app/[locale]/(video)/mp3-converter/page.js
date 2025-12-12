import Mp3Converter from "@/components/tools/video/Mp3Converter";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Music, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export async function generateMetadata() {
    const title = "Free MP3 Converter - Convert Video & Audio to MP3 Online";
    const description = "Convert video (MP4, AVI, MOV) and audio files to high-quality MP3 online for free. Fast, secure, and no software installation required.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/mp3-converter",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/mp3-converter",
            siteName: "30tools",
            type: "website",
            images: [
                {
                    url: "/og-images/mp3-converter.jpg", // Assuming this exists or falls back
                    width: 1200,
                    height: 630,
                    alt: "Free Online MP3 Converter",
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
        "name": "MP3 Converter",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Any",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
        },
        "featureList": [
            "Convert Video to MP3",
            "Convert Audio to MP3",
            "High Quality 320kbps",
            "Fast Processing"
        ]
    },
    faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is this MP3 Converter free?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, 30Tools MP3 Converter is 100% free to use online without any hidden charges or subscriptions."
                }
            },
            {
                "@type": "Question",
                "name": "Which file formats are supported?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We support a wide range of video and audio formats including MP4, AVI, MOV, WMV, MKV, FLV, WAV, M4A, AAC, and OGG."
                }
            },
            {
                "@type": "Question",
                "name": "Is it safe to use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. All conversions happen locally in your browser (simulated in demo mode) or securely on our servers. Your files are never stored or shared."
                }
            }
        ]
    }
};

export default function Mp3ConverterPage() {
    const features = [
        {
            icon: <Zap className="w-5 h-5 text-amber-500" />,
            title: "Lightning Fast Conversion",
            description: "Convert your files to MP3 in seconds with our optimized processing engine.",
        },
        {
            icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
            title: "100% Secure & Private",
            description: "Your files are processed securely. We respect your privacy and never store your data.",
        },
        {
            icon: <Music className="w-5 h-5 text-blue-500" />,
            title: "High Quality Audio",
            description: "Support for up to 320kbps bitrate for crystal clear audio quality.",
        },
        {
            icon: <CheckCircle2 className="w-5 h-5 text-violet-500" />,
            title: "All Formats Supported",
            description: "Convert MP4, AVI, MOV, WAV, and more to universally compatible MP3.",
        },
    ];

    const steps = [
        { title: "Upload File", desc: "Select your video or audio file." },
        { title: "Choose Quality", desc: "Select preferred bitrate (e.g., 320kbps)." },
        { title: "Download MP3", desc: "Get your converted MP3 file instantly." },
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
                        MP3 <span className="text-primary">Converter</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        The easiest way to convert video and audio files to high-quality MP3.
                        Free, fast, and secure.
                    </p>
                </div>

                {/* Main Tool */}
                <div className="mb-20">
                    <Mp3Converter />
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
                    <p className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">Other Tools You Might Like</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link href="/video-converter">
                            <Button variant="outline" className="rounded-full">Video Converter</Button>
                        </Link>
                        <Link href="/audio-converter">
                            <Button variant="outline" className="rounded-full">Audio Converter</Button>
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

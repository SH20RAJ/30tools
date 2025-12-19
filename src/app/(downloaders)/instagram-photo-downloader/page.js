import InstagramDownloader from "@/components/tools/downloaders/InstagramDownloader";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    CheckCircle2,
    Copy,
    Download,
    Image as ImageIcon,
    Layers,
    Globe,
    Camera,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Instagram Photo Downloader - Save Posts & Carousels | 30Tools",
    description: "Download Instagram photos and carousels in high quality (JPG). Save multiple photos from one post. Free online Instagram image downloader.",
    keywords: [
        "instagram photo downloader", "download instagram photos", "ig photo saver",
        "save instagram picture", "download instagram carousel", "instagram image downloader",
        "save multiple photos from instagram", "instagram post downloader", "save ig photo",
        "instagram downloader jpg"
    ].join(", "),
    openGraph: {
        title: "Instagram Photo Downloader - Save HD Images",
        description: "⚡ Download high quality photos and carousels from Instagram! Free & Fast.",
        url: "https://30tools.com/instagram-photo-downloader",
        siteName: "30tools",
        type: "website",
        images: [{ url: "/og-images/instagram-photo-downloader.jpg", width: 1200, height: 630, alt: "Instagram Photo Downloader" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Instagram Photo Downloader - HD Quality",
        description: "⚡ Save Instagram posts and photos to your device.",
        images: ["/og-images/instagram-photo-downloader.jpg"],
        creator: "@30tools"
    },
    alternates: { canonical: "https://30tools.com/instagram-photo-downloader" },
    robots: { index: true, follow: true }
};

export default function InstagramPhotoDownloaderPage() {
    const features = [
        {
            icon: <ImageIcon className="w-6 h-6 text-pink-500" />,
            title: "HD Quality",
            description: "Download photos in their original high resolution upload quality.",
        },
        {
            icon: <Layers className="w-6 h-6 text-purple-500" />,
            title: "Carousel Support",
            description: "Download all photos from a slide post/carousel easily.",
        },
        {
            icon: <Download className="w-6 h-6 text-blue-500" />,
            title: "Fast Download",
            description: "Instant conversion and download speeds for all images.",
        },
        {
            icon: <Globe className="w-6 h-6 text-green-500" />,
            title: "No Watermark",
            description: "Clean images without any added logos or watermarks.",
        },
    ];

    const howToSteps = [
        {
            step: 1,
            title: "Copy Link",
            text: "Copy the link of the Instagram post you want to save.",
            icon: <Copy className="w-6 h-6" />,
        },
        {
            step: 2,
            title: "Paste URL",
            text: "Paste the link into the downloader box.",
            icon: <Globe className="w-6 h-6" />,
        },
        {
            step: 3,
            title: "Save Photo",
            text: "Preview and download your photos.",
            icon: <Download className="w-6 h-6" />,
        },
    ];

    const faqs = [
        {
            q: "Can I download multiple photos at once?",
            a: "Yes! If you paste a link to a carousel post (multiple images), our tool will show all of them and let you download them."
        },
        {
            q: "Is it safe?",
            a: "Completely safe. You don't need to log in, and we don't store your data."
        },
        {
            q: "Does it work for Reels thumbnails?",
            a: "Yes, you can also use this to find and download the cover image of a Reel or Video."
        }
    ];

    return (
        <>
            <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
                <div className="max-w-4xl mx-auto space-y-16">

                    {/* Hero */}
                    <section className="text-center space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                            Instagram <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Photo Downloader</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            The fastest <strong>instagram photo downloader</strong>. Save single posts or download entire <strong>instagram carousel</strong> albums in HD. Free <strong>ig image downloader</strong>.
                        </p>
                    </section>

                    {/* Tool */}
                    <section className="bg-card rounded-3xl shadow-xl border border-border/50 p-6 md:p-8">
                        <InstagramDownloader />
                    </section>

                    {/* Features */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, i) => (
                            <div key={i} className="flex gap-4 p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-colors shadow-sm">
                                <div className="shrink-0 bg-primary/10 p-3 rounded-xl h-fit">{feature.icon}</div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* How To */}
                    <section className="bg-muted/30 rounded-3xl p-8 md:p-12 border border-border/50">
                        <h2 className="text-3xl font-bold text-center mb-12">How to Download Instagram Photos</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {howToSteps.map((step, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-16 h-16 bg-background rounded-full mx-auto flex items-center justify-center text-primary shadow-md mb-6 border-2 border-primary/20">
                                        {step.icon}
                                    </div>
                                    <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold mb-4">FAQ</h2>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`}>
                                    <AccordionTrigger className="text-base md:text-lg font-medium text-left">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>

                    {/* Footer Links */}
                    <section className="text-center py-8 border-t border-border">
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                            <Link href="/instagram-downloader" className="hover:text-primary transition-colors">Instagram Downloader</Link>
                            <span>•</span>
                            <Link href="/instagram-reel-downloader" className="hover:text-primary transition-colors">Reel Downloader</Link>
                        </div>
                    </section>

                </div>
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebApplication",
                    "name": "Instagram Photo Downloader",
                    "description": "Download Instagram photos in HD.",
                    "url": "https://30tools.com/instagram-photo-downloader",
                    "applicationCategory": "UtilitiesApplication",
                    "operatingSystem": "Any",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
                })
            }} />
        </>
    );
}

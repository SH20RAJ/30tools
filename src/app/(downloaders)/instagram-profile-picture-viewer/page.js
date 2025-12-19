import InstagramDPDownloader from "@/components/tools/downloaders/InstagramDPDownloader";
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
    Maximize2,
    Globe,
    Monitor,
    Video,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Instagram Profile Picture Viewer (HD) - Zoom DP | 30Tools",
    description: "View Instagram profile pictures in full HD size. Zoom into any IG DP even from private accounts. Download instagram profile photo in original quality. Instazoom free.",
    keywords: [
        "instagram profile picture viewer", "ig dp viewer", "instagram dp zoom",
        "instazoom", "full size instagram profile picture", "view private instagram profile picture",
        "instagram pfp downloader", "profile picture downloader", "ig profile pic viewer",
        "instagram dp download hd"
    ].join(", "),
    openGraph: {
        title: "Instagram Profile Picture Viewer - Full Size HD",
        description: "⚡ View and Zoom any Instagram Profile Picture in HD! Download DPs instantly.",
        url: "https://30tools.com/instagram-profile-picture-viewer",
        siteName: "30tools",
        type: "website",
        images: [{ url: "/og-images/instagram-profile-picture-viewer.jpg", width: 1200, height: 630, alt: "IG Profile Picture Viewer" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Instagram DP Viewer & Zoom",
        description: "⚡ See Instagram profile pictures in full size 1080p.",
        images: ["/og-images/instagram-profile-picture-viewer.jpg"],
        creator: "@30tools"
    },
    alternates: { canonical: "https://30tools.com/instagram-profile-picture-viewer" },
    robots: { index: true, follow: true }
};

export default function InstagramProfilePictureViewerPage() {
    const features = [
        {
            icon: <Maximize2 className="w-6 h-6 text-blue-500" />,
            title: "HD Zoom",
            description: "See profile pictures in their original full resolution.",
        },
        {
            icon: <Download className="w-6 h-6 text-green-500" />,
            title: "One-Click Save",
            description: "Download the DP directly to your gallery.",
        },
        {
            icon: <Monitor className="w-6 h-6 text-purple-500" />,
            title: "Works on Private",
            description: "View profile photos of private accounts too.",
        },
        {
            icon: <Globe className="w-6 h-6 text-orange-500" />,
            title: "No App Needed",
            description: "Use directly from your browser, no login required.",
        },
    ];

    const howToSteps = [
        {
            step: 1,
            title: "Copy Username",
            text: "Copy the username or profile URL from Instagram.",
            icon: <Copy className="w-6 h-6" />,
        },
        {
            step: 2,
            title: "Search User",
            text: "Paste it in the box to fetch the profile.",
            icon: <Globe className="w-6 h-6" />,
        },
        {
            step: 3,
            title: "View & Zoom",
            text: "See the DP in full size and download.",
            icon: <Maximize2 className="w-6 h-6" />,
        },
    ];

    const faqs = [
        {
            q: "Can I view private profile pictures?",
            a: "Yes! While you cannot view private posts, profile pictures are public data, and our tool allows you to view them in full size."
        },
        {
            q: "Is the quality good?",
            a: "We fetch the authentic HD version of the image uploaded to Instagram servers, so you get the best possible quality."
        },
        {
            q: "Is it anonymous?",
            a: "Yes, the user will never know you viewed or downloaded their profile picture."
        }
    ];

    return (
        <>
            <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
                <div className="max-w-4xl mx-auto space-y-16">

                    {/* Hero */}
                    <section className="text-center space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                            Instagram <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Profile Picture Viewer</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            The ultimate <strong>instagram profile picture viewer</strong>. Zoom into any DP and see it in full HD. Fast, free, and works for all accounts. Better than <strong>instazoom</strong>.
                        </p>
                    </section>

                    {/* Tool */}
                    <section className="bg-card rounded-3xl shadow-xl border border-border/50 p-6 md:p-8">
                        <InstagramDPDownloader />
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
                        <h2 className="text-3xl font-bold text-center mb-12">How to Zoom Profile Pictures</h2>
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
                            <Link href="/instagram-story-downloader" className="hover:text-primary transition-colors">Story Downloader</Link>
                        </div>
                    </section>

                </div>
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebApplication",
                    "name": "Instagram Profile Picture Viewer",
                    "description": "View Instagram profile pictures in HD.",
                    "url": "https://30tools.com/instagram-profile-picture-viewer",
                    "applicationCategory": "UtilitiesApplication",
                    "operatingSystem": "Any",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
                })
            }} />
        </>
    );
}

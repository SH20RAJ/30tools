import InstagramStoryDownloader from "@/components/tools/downloaders/InstagramStoryDownloader";
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
    Eye,
    Globe,
    Ghost,
    ShieldAlert,
    Zap,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Instagram Anonymous Story Viewer (2026) - Watch Private | 30Tools",
    description: "Watch and download Instagram Stories anonymously. Best free anonymous story viewer for 2026. View IG stories without login, no account needed. Picuki alternative.",
    keywords: [
        "instagram anonymous story viewer", "insta story viewer", "watch instagram stories anonymous",
        "anonymous ig viewer", "instagram story saver", "view instagram stories without account",
        "picuki alternative", "iganony", "insta navigation", "story stalker", "ig story viewer free"
    ].join(", "),
    openGraph: {
        title: "Anonymous Instagram Story Viewer - Watch Without Login",
        description: "⚡ View and download Instagram Stories anonymously! No account required. Best IG Viewer 2026.",
        url: "https://30tools.com/instagram-anonymous-story-viewer",
        siteName: "30tools",
        type: "website",
        images: [{ url: "/og-images/instagram-anonymous-story-viewer.jpg", width: 1200, height: 630, alt: "Anonymous IG Story Viewer" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Anonymous Instagram Viewer - No Login",
        description: "⚡ Watch and save IG stories secretly. No one will know!",
        images: ["/og-images/instagram-anonymous-story-viewer.jpg"],
        creator: "@30tools"
    },
    alternates: { canonical: "https://30tools.com/instagram-anonymous-story-viewer" },
    robots: { index: true, follow: true }
};

export default function InstagramAnonymousStoryViewerPage() {
    const features = [
        {
            icon: <Ghost className="w-6 h-6 text-purple-500" />,
            title: "100% Anonymous",
            description: "Watch stories without the user knowing. Your view is hidden.",
        },
        {
            icon: <ShieldAlert className="w-6 h-6 text-blue-500" />,
            title: "No Login Needed",
            description: "You don't need an Instagram account to view content.",
        },
        {
            icon: <Download className="w-6 h-6 text-green-500" />,
            title: "Download Stories",
            description: "Save any story photo or video to your device in HD.",
        },
        {
            icon: <Eye className="w-6 h-6 text-orange-500" />,
            title: "Full Size Viewer",
            description: "See profile pictures and stories in full resolution.",
        },
    ];

    const howToSteps = [
        {
            step: 1,
            title: "Enter Username",
            text: "Type the exact Insta username (e.g. @kyliejenner).",
            icon: <Copy className="w-6 h-6" />,
        },
        {
            step: 2,
            title: "Browse Stories",
            text: "We fetch the latest active stories anonymously.",
            icon: <Globe className="w-6 h-6" />,
        },
        {
            step: 3,
            title: "Watch & Save",
            text: "Click to watch or download any story.",
            icon: <Download className="w-6 h-6" />,
        },
    ];

    const faqs = [
        {
            q: "Can they see if I view their story?",
            a: "No. Because you are using our third-party server to view the content, your personal account is never connected, so your view remains 100% anonymous."
        },
        {
            q: "Do I need to sign in?",
            a: "Never. We do not ask for your Instagram password or login details. It is completely safe and private."
        },
        {
            q: "Can I view Private accounts?",
            a: "No tools can view private accounts without following them. This tool works for Public accounts only."
        }
    ];

    return (
        <>
            <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
                <div className="max-w-4xl mx-auto space-y-16">

                    {/* Hero */}
                    <section className="text-center space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                            Anonymous <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Story Viewer</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            The best <strong>instagram anonymous story viewer</strong> online. Watch and download active stories and highlights without login. Your secret <strong>insta story viewer</strong>.
                        </p>
                    </section>

                    {/* Tool */}
                    <section className="bg-card rounded-3xl shadow-xl border border-border/50 p-6 md:p-8">
                        <InstagramStoryDownloader />
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
                        <h2 className="text-3xl font-bold text-center mb-12">How to Watch Stories Anonymously</h2>
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
                            <Link href="/instagram-profile-picture-viewer" className="hover:text-primary transition-colors">Profile Picture Viewer</Link>
                        </div>
                    </section>

                </div>
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebApplication",
                    "name": "Anonymous Instagram Story Viewer",
                    "description": "Watch Instagram stories anonymously without login.",
                    "url": "https://30tools.com/instagram-anonymous-story-viewer",
                    "applicationCategory": "UtilitiesApplication",
                    "operatingSystem": "Any",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
                })
            }} />
        </>
    );
}

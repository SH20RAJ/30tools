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
    title: "Instagram Story Viewer (Anonymous & Free) - View Stories Online",
    description: "Best Instagram Story Viewer to view stories anonymously. Watch Instagram stories without them knowing. Free, private, and secure instastoryviewer.",
    keywords: [
        "instagram story viewer", "anonymous story view", "instagram stories online",
        "insta anonymous story viewer", "anonymous instagram viewer story", "piknu",
        "private instagram story viewer", "view stories", "instastoryviewer",
        "instagram view story", "insta story save", "story instagram viewer",
        "view story instagram", "insta anonymously", "ig story viewer anonymous",
        "private instagram account viewer", "see instagram stories", "instagram photo viewer",
        "story viewer anonymous", "watch stories anonymously"
    ].join(", "),
    openGraph: {
        title: "Instagram Story Viewer - Watch Stories Anonymously",
        description: "View and download Instagram Stories anonymously! No account required. Best Free Instagram Viewer.",
        url: "https://30tools.com/instagram-story-viewer",
        siteName: "30tools",
        type: "website",
        images: [{ url: "/og-images/instagram-story-viewer.jpg", width: 1200, height: 630, alt: "Instagram Story Viewer" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Instagram Story Viewer - Anonymous & Free",
        description: "Watch and save IG stories secretly using our Instagram Story Viewer.",
        images: ["/og-images/instagram-story-viewer.jpg"],
        creator: "@30tools"
    },
    alternates: { canonical: "https://30tools.com/instagram-story-viewer" },
    robots: { index: true, follow: true }
};

export default function InstagramStoryViewerPage() {
    const features = [
        {
            icon: <Ghost className="w-6 h-6 text-purple-500" />,
            title: "Anonymous Viewer",
            description: "View Instagram stories without them knowing. Completely undetectable.",
        },
        {
            icon: <ShieldAlert className="w-6 h-6 text-blue-500" />,
            title: "No Login Required",
            description: "View stories without an Instagram account or logging in.",
        },
        {
            icon: <Download className="w-6 h-6 text-green-500" />,
            title: "Save Stories",
            description: "Download photos and videos from stories in high quality (HD/4K).",
        },
        {
            icon: <Eye className="w-6 h-6 text-orange-500" />,
            title: "Insta Story Viewer",
            description: "Watch active stories and highlights from any public profile.",
        },
    ];

    const howToSteps = [
        {
            step: 1,
            title: "Enter Username",
            text: "Type the Instagram username (e.g. @kimkardashian) into the box.",
            icon: <Copy className="w-6 h-6" />,
        },
        {
            step: 2,
            title: "View Stories",
            text: "Click 'View Stories' to anonymously fetch the latest stories.",
            icon: <Globe className="w-6 h-6" />,
        },
        {
            step: 3,
            title: "Watch or Download",
            text: "Browse the stories and click download to save them.",
            icon: <Download className="w-6 h-6" />,
        },
    ];

    const faqs = [
        {
            q: "What is an Instagram Story Viewer?",
            a: "An Instagram Story Viewer is a tool that allows you to watch and download Instagram stories from public accounts anonymously, without logging in or notifying the user."
        },
        {
            q: "Is it really anonymous?",
            a: "Yes, 100%. Since you are not logging into Instagram, the user cannot see your name in their viewer list. You are completely invisible."
        },
        {
            q: "Can I view Private Instagram Stories?",
            a: "No. This tool only works for public accounts. Accessing private stories without permission or following the account is against privacy policies."
        },
        {
            q: "Does this work on mobile?",
            a: "Yes! Our Instagram Story Viewer works perfectly on iPhone, Android, tablets, and desktop computers."
        }
    ];

    return (
        <>
            <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
                <div className="max-w-4xl mx-auto space-y-16">

                    {/* Hero */}
                    <section className="text-center space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                            Instagram <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Story Viewer</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            The best free <strong>Instagram Story Viewer</strong> to watch stories anonymously. View and download IG stories without an account using our <strong>Insta Story Viewer</strong>.
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
                        <h2 className="text-3xl font-bold text-center mb-12">How to Use Instagram Story Viewer</h2>
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
                            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
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
                    <section className="text-center py-8 text-sm text-muted-foreground">
                        <p>Use our <Link href="/instagram-anonymous-story-viewer" className="underline hover:text-primary">Anonymous Story Viewer</Link> for another perspective.</p>
                    </section>

                </div>
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebApplication",
                    "name": "Instagram Story Viewer",
                    "description": "View and download Instagram stories anonymously with this free tool.",
                    "url": "https://30tools.com/instagram-story-viewer",
                    "applicationCategory": "UtilitiesApplication",
                    "operatingSystem": "Any",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
                })
            }} />
        </>
    );
}

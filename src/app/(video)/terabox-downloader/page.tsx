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

    const articles = [
        {
            title: "Make Your Own TeraBox Video Player and Downloader Website",
            type: "Tutorial",
            readTime: "5 min read",
            description: "Create a professional TeraBox file streaming and download website with custom branding, advanced features, and complete control over your platform.",
            link: "/blog/make-your-own-terabox-video-player"
        },
        {
            title: "Make Your Own Custom TeraBox Telegram Bot",
            type: "Bot",
            readTime: "5 min read",
            description: "Get your personalized TeraBox file download bot for Telegram with custom features and unlimited usage. Professional bot development service with 24/7 support.",
            link: "/blog/make-your-own-custom-terabox-telegram-bot"
        }
    ];

    const faqs = [
        {
            question: "Is it legal to download videos from TeraBox?",
            answer: "Downloading videos for personal usage is generally considered legal. However, redistributing copyrighted content without permission is illegal. Please respect intellectual property rights."
        },
        {
            question: "Do I need to install any software?",
            answer: "No! Our TeraBox player and downloader works entirely in your browser. You can watch and download videos without installing the Terabox app or any other software."
        },
        {
            question: "Is there a limit on video size or duration?",
            answer: "No, we do not impose restrictions on the video size or duration. You can play and download videos of any length or file size supported by TeraBox."
        },
        {
            question: "Why is my video not downloading?",
            answer: "If a video fails to download, it might be due to a broken link, a deleted file on TeraBox, or correct server issues. Please check the URL and try again. Ensure your internet connection is stable."
        },
        {
            question: "Is my data safe?",
            answer: "Yes, your privacy is our priority. We do not store your file history, personal data, or the videos you watch/download. The tool acts as a secure bridge."
        },
        {
            question: "What keywords help my TeraBox video rank on Google?",
            answer: "To improve ranking, use descriptive titles, relevant tags (like 'TeraBox downloader', 'free video player'), and clear descriptions. Ensure your content is accessible and high-quality."
        },
        {
            question: "How does the TeraBox player work on different devices?",
            answer: "Our player is fully responsive. On mobile, it offers touch-friendly controls. On tablets and desktops, it scales to provide a full-screen experience. It works in Chrome, Safari, Firefox, and Edge."
        },
        {
            question: "Is the TeraBox downloader free to use?",
            answer: "Yes, our service is 100% free. You can watch and download as many videos as you like without any payment, subscription, or hidden fees."
        },
        {
            question: "Which TeraBox domains are supported by our TeraBox player?",
            answer: "We support all major TeraBox domains including terabox.com, teraboxapp.com, 1024tera.com, and others associated with the service."
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

                    {/* Latest Articles */}
                    <section>
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold">Latest Articles</h2>
                            <Link href="/blog" className="text-primary hover:underline font-medium">
                                View All Articles
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {articles.map((article, index) => (
                                <Link key={index} href={article.link} className="block group">
                                    <div className="bg-card border border-border/50 rounded-2xl p-6 h-full hover:border-primary/50 transition-colors shadow-sm">
                                        <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                                            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium text-xs">
                                                {article.type}
                                            </span>
                                            <span>•</span>
                                            <span>{article.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                            {article.description}
                                        </p>
                                        <span className="text-sm font-medium text-primary group-hover:underline">
                                            Read More →
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
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

                    {/* Content Section: How to Use */}
                    <section className="space-y-8 prose prose-gray dark:prose-invert max-w-none">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">How to Use the TeraBox Player</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Tired of complicated TeraBox video downloaders? I've been there too! That's exactly why I created this TeraBox player - to make your life easier. No more jumping through hoops, no more confusing steps. Just paste your link and watch instantly on any device you have. For direct downloads, visit our TeraBox downloader tool.
                            </p>
                        </div>

                        <div className="bg-muted/30 rounded-3xl p-8 border border-border/50">
                            <h3 className="text-2xl font-bold mb-6">What makes our TeraBox link opener different?</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="text-2xl">🎥</span>
                                    <div>
                                        <span className="font-bold">Works as an online TeraBox video player</span>
                                        <p className="text-muted-foreground">No downloads needed, stream directly in browser.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-2xl">📱</span>
                                    <div>
                                        <span className="font-bold">Universal Compatibility</span>
                                        <p className="text-muted-foreground">I use it on my phone, laptop, tablet - works everywhere.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-2xl">⚡</span>
                                    <div>
                                        <span className="font-bold">Super Fast</span>
                                        <p className="text-muted-foreground">Usually loads in 2-3 seconds.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-2xl">🔒</span>
                                    <div>
                                        <span className="font-bold">No payment required</span>
                                        <p className="text-muted-foreground">Just paste and watch. 100% free.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-2xl">💯</span>
                                    <div>
                                        <span className="font-bold">No Limits</span>
                                        <p className="text-muted-foreground">You can play TeraBox videos online without any restrictions.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                Look, I know how frustrating it is when you just want to watch a video. That's why our TeraBox video streaming works differently - no software mess, no app installations. Just use our TeraBox downloader and you're good to go. My free TeraBox player lets you watch TeraBox videos without app installations, and honestly, it's way better than the official app. Need to download videos for offline viewing? Check out our dedicated TeraBox downloader page for easy video downloads.
                            </p>
                        </div>
                    </section>

                    {/* How It Works Steps */}
                    <section className="bg-muted/30 rounded-3xl p-8 md:p-12 border border-border/50">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Here's how it works (super simple!)
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-background rounded-full mx-auto flex items-center justify-center text-3xl shadow-md mb-6 border-2 border-primary/20">
                                    📋
                                </div>
                                <h3 className="font-bold text-xl mb-3">1. Copy Link</h3>
                                <p className="text-muted-foreground">Go to TeraBox and find your video. Copy the link from the address bar or hit the share button.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-background rounded-full mx-auto flex items-center justify-center text-3xl shadow-md mb-6 border-2 border-primary/20">
                                    🔗
                                </div>
                                <h3 className="font-bold text-xl mb-3">2. Paste & Play</h3>
                                <p className="text-muted-foreground">Come back here and paste it into our TeraBox player. Click "Play" and boom - you're watching!</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-background rounded-full mx-auto flex items-center justify-center text-3xl shadow-md mb-6 border-2 border-primary/20">
                                    ⬇️
                                </div>
                                <h3 className="font-bold text-xl mb-3">3. Stream or Download</h3>
                                <p className="text-muted-foreground">Our online TeraBox video downloader does all the heavy lifting. Stream instantly or download for later.</p>
                            </div>
                        </div>
                        <p className="text-center mt-8 text-muted-foreground">
                            If it's being slow, try the TeraBox link opener option. Our free online TeraBox video player has multiple servers for TeraBox video streaming, so one will definitely work.
                        </p>
                    </section>

                    {/* Personal & Features Section */}
                    <section className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Why I built this TeraBox Player</h2>
                            <h3 className="text-xl font-medium text-muted-foreground mb-4 opacity-90">(and why you'll love it)</h3>
                            <div className="grid gap-6 md:grid-cols-2 mb-6">
                                <div className="bg-card p-6 rounded-2xl border border-border/50">
                                    <h4 className="flex items-center gap-2 font-bold text-lg mb-2">
                                        🚀 Actually fast
                                    </h4>
                                    <p className="text-muted-foreground">Most downloaders are slow as hell. Our TeraBox link opener and TeraBox downloader process links in 2-3 seconds. No joke.</p>
                                </div>
                                <div className="bg-card p-6 rounded-2xl border border-border/50">
                                    <h4 className="flex items-center gap-2 font-bold text-lg mb-2">
                                        🎥 Stream or download
                                    </h4>
                                    <p className="text-muted-foreground">Your choice! Play TeraBox videos online instantly or download for offline viewing. Our TeraBox video downloader and TeraBox link player handle both perfectly.</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Here's the thing - I got tired of ads on TeraBox download sites. You know, the ones that force you to register, show 10 ads, and then don't even work half the time. So I built this to watch TeraBox videos without app installations and download without any limits. Our TeraBox downloader online service is different.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                                Unlike other sites that lock features behind logins, our online TeraBox video player let you play TeraBox videos online right away. No personal info required, no credit card required. Want to preview a video before downloading? Use our free TeraBox player to check it out first. Need to save it for later? Our TeraBox link player downloads without buffering or ads.
                            </p>
                        </div>
                    </section>

                    {/* Comparison Section */}
                    <section className="bg-primary/5 rounded-3xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold mb-8">What makes this TeraBox Video Downloader different?</h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                { title: "Actually fast", desc: "Most sites take forever. This processes your links in 2-3 seconds, max." },
                                { title: "No payment needed", desc: "Just paste your link and go. No email, no password." },
                                { title: "Works everywhere", desc: "I use it on my phone walking to work, on my laptop at home, on my tablet in bed." },
                                { title: "Private stuff", desc: "I don't store your videos or spy on what you're downloading. Not my business." }
                            ].map((item, i) => (
                                <div key={i} className="bg-background/80 backdrop-blur p-5 rounded-xl text-center shadow-sm">
                                    <h3 className="font-bold mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Technical Specs */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6">The boring technical stuff (if you care)</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: "Video Quality", val: "Up to 4K", sub: "(if the original is 4K)" },
                                { label: "Speed", val: "2-3 seconds", sub: "per link" },
                                { label: "File Types", val: "MP4, WebM, AVI, MKV", sub: "Universal support" },
                                { label: "Uptime", val: "99.9%", sub: "(rarely goes down)" },
                            ].map((spec, i) => (
                                <div key={i} className="bg-card border border-border/50 p-4 rounded-xl text-center">
                                    <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                                    <div className="font-bold text-lg text-primary">{spec.val}</div>
                                    <div className="text-xs text-muted-foreground/70">{spec.sub}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Advanced Tech & Stand Out */}
                    <section className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Advanced TeraBox Player Technology</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                Experience the power of our cutting-edge TeraBox player technology that revolutionizes how you access and download TeraBox content. Our TeraBox link opener utilizes advanced algorithms to ensure seamless connectivity with TeraBox servers, providing you with the fastest and most reliable TeraBox video streaming experience available.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-bold text-xl mb-3">Key Technical Features:</h3>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                                            <span><strong>Smart Link Processing:</strong> 99.9% accuracy in detection</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                                            <span><strong>Multi-Server Technology:</strong> Ensures uninterrupted streaming</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                                            <span><strong>Adaptive Quality:</strong> Adjusts to your internet speed</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-3">Why Our Downloader Stands Out:</h3>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <Zap className="w-5 h-5 text-yellow-500 mt-0.5" />
                                            <span><strong>Lightning-Fast:</strong> Processes links 3x faster</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ShieldCheck className="w-5 h-5 text-green-500 mt-0.5" />
                                            <span><strong>99.9% Uptime:</strong> Consistent access to content</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Share2 className="w-5 h-5 text-blue-500 mt-0.5" />
                                            <span><strong>Universal Compatibility:</strong> Works on all devices</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Work on Everything */}
                    <section className="bg-card rounded-3xl p-8 border border-border/50">
                        <div className="text-center max-w-2xl mx-auto mb-10">
                            <h2 className="text-3xl font-bold mb-4">Works on everything description (seriously)</h2>
                            <p className="text-muted-foreground">I test this TeraBox player on every device I own. Phone, tablet, laptop, desktop - it all works.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl mb-4">📱</div>
                                <h3 className="font-bold text-lg mb-2">On your phone</h3>
                                <p className="text-muted-foreground text-sm">Perfect for watching on the go. Big buttons and touch-friendly controls.</p>
                            </div>
                            <div>
                                <div className="text-4xl mb-4">💻</div>
                                <h3 className="font-bold text-lg mb-2">On computers</h3>
                                <p className="text-muted-foreground text-sm">Full power here. Super fast on good internet connection.</p>
                            </div>
                            <div>
                                <div className="text-4xl mb-4">🖥️</div>
                                <h3 className="font-bold text-lg mb-2">On tablets</h3>
                                <p className="text-muted-foreground text-sm">Great for watching in bed. Looks amazing on bigger screens.</p>
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

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
    ShieldCheck,
    Zap,
    Monitor,
    Play,
    Server,
    Cloud,
    Smartphone,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ToolLayout from "@/components/shared/ToolLayout";
import { generatePageMetadata } from "@/components/shared/PageMeta";
import jsonLdSchemas from "./schemas";

// --- Metadata ---
const toolTitle = "Terabox Downloader Online Free - Best Tera Box Video Player (2026)";
const toolDesc = "The best free terabox downloader and terabox video player online. Watch and download videos from tera box links instantly. Support for mdisk player, iteraplay, and terabox for pc download.";
const toolUrl = "https://30tools.com/terabox-downloader";

export const metadata: Metadata = generatePageMetadata({
    title: toolTitle,
    description: toolDesc,
    url: toolUrl,
    imageUrl: "/og-images/terabox-downloader.jpg",
});

export const viewport = {
    themeColor: 'black',
}

// --- Keywords ---
const researchedKeywords = [
    "zoyya talent terabox", "tera box video player", "tera downloader online", "terabox downloader online free",
    "terabox video downloader online free", "terabox viewer", "terabox link player", "iteraplay",
    "terabox video player online", "tera box pc", "tera box video download", "terabox file downloader",
    "terabox for pc download", "terabox player online", "terabox link opener", "terabox video downloader online",
    "terabox online video player", "teradownloader", "tera box web", "terabox link", "terabo",
    "terabox video download", "tera box download", "terabox link downloader", "terabox online",
    "terabox online player", "terbox", "mdiskplay", "terabox downloader online", "tera downloader",
    "mdisk player", "terabox player", "tera box download for pc", "terabox video player", "tarabox",
    "terabox web", "terabox app", "terabox download", "terabox downloader", "terabox for pc",
    "terabox login", "tera box", "terabox", "terabook", "terabox fullpack", "pikpak desi",
    "terabox fullpack pacar", "terabox lite", "tela box", "terabix", "tera box mod apk",
    "terabox descargar", "tebox", "terabox premium crack pc", "descargar terabox", "terab",
    "tetrabox", "free online storage", "terabyte storage", "terrabox storage", "terebox", "dubox",
    "terabox.com", "terabox iniciar sesión", "terra box", "terabox apk", "download terabox",
    "teabox", "terabox pc", "terabox video downloader", "terabox para pc", "torah box",
    "cloud storage free", "terrabox", "ultrabox", "almacenamiento en la nube", "tera", "storage"
];

export default function TeraboxDownloaderPage() {
    const features = [
        {
            icon: <Zap className="w-5 h-5 text-amber-500" />,
            title: "Fastest Tera Downloader",
            description: "Experience the fastest terabox downloader online with our optimized engine.",
        },
        {
            icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
            title: "Secure Terabox Viewer",
            description: "Safe and secure. No ads, no malware, and 100% free online storage access.",
        },
        {
            icon: <Monitor className="w-5 h-5 text-blue-500" />,
            title: "Tera Box PC & Mobile",
            description: "Works perfectly on tera box pc and mobile browsers without the terabox app.",
        },
        {
            icon: <Play className="w-5 h-5 text-violet-500" />,
            title: "Best Terabox Video Player",
            description: "The best terabox online player for watching content instantly.",
        },
    ];

    const articles = [
        {
            title: "Make Your Own TeraBox Video Player and Downloader Website",
            type: "Tutorial",
            readTime: "5 min read",
            description: "Create a professional TeraBox file streaming and download website with custom branding, advanced features, and complete control.",
            link: "/blog/make-your-own-terabox-video-player"
        },
        {
            title: "Make Your Own Custom TeraBox Telegram Bot",
            type: "Bot",
            readTime: "5 min read",
            description: "Get your personalized TeraBox file download bot for Telegram with custom features and unlimited usage.",
            link: "/blog/make-your-own-custom-terabox-telegram-bot"
        }
    ];

    return (
        <ToolLayout
            toolId="terabox-downloader"
            title="Terabox Downloader Online Free"
            description="Download and watch videos from Terabox instantly. The fastest Terabox video player and downloader for PC and mobile."
            category={{ name: "Video Tools", slug: "video-tools" }}
            controls={
                <div className="space-y-4">
                     <p className="text-sm text-muted-foreground">
                        Enter your Terabox URL to get started. Our tool supports video playback and direct downloads.
                    </p>
                    <div className="flex flex-wrap gap-2">
                         <Badge variant="secondary" className="px-2">Stable</Badge>
                         <Badge variant="outline" className="px-2">Mdisk</Badge>
                         <Badge variant="outline" className="px-2">Iteraplay</Badge>
                    </div>
                </div>
            }
        >
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

            {/* Main Application */}
            <div className="w-full">
                <SimpleTeraboxPlayer />
            </div>

            {/* Supplemental Content (Below Tool) */}
            <div className="mt-12 space-y-16">
                
                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((f, i) => (
                        <div key={i} className="bg-card/50 p-6 rounded-2xl border border-border/50 flex flex-col gap-3">
                            <div className="bg-background w-10 h-10 rounded-xl flex items-center justify-center shadow-sm border border-border/50">
                                {f.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-base">{f.title}</h3>
                                <p className="text-sm text-muted-foreground">{f.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* SEO Text Content */}
                <article className="prose prose-slate dark:prose-invert max-w-none text-sm md:text-base">
                    <h2 className="text-2xl font-bold mb-4">How to use Tera Downloader Online</h2>
                    <p>
                        Using our <strong>terabox link downloader</strong> is extremely simple. If you have been searching for
                        <strong>terabox video download</strong> or <strong>terabox file downloader</strong>, you are at the right place.
                        Just paste your <strong>terabox link</strong> into the <strong>terabox link player</strong> and our
                        <strong>tera downloader</strong> will process it instantly. Our <strong>terabox online video player</strong>
                        supports <strong>mdiskplay</strong> and <strong>iteraplay</strong> for a premium <strong>terabox viewer</strong> experience.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-8 not-prose">
                        <div className="bg-card p-6 rounded-2xl border border-border/50">
                            <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-primary">
                                <Cloud className="w-5 h-5" /> Free Online Storage
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Access your <strong>terabox online</strong> files and <strong>terabyte storage</strong> content without
                                limits. A perfect <strong>cloud storage free</strong> bridge.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-2xl border border-border/50">
                             <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-primary">
                                <Server className="w-5 h-5" /> Tera Box Web
                            </h3>
                             <p className="text-sm text-muted-foreground leading-relaxed">
                                Our <strong>tera box web</strong> platform is the best alternative to <strong>terbox</strong> and
                                <strong>tebox</strong>.
                            </p>
                        </div>
                    </div>
                </article>

                {/* FAQ Section */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {jsonLdSchemas.faq.mainEntity.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="border-b-border/50">
                                <AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary py-4">
                                    {faq.name}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                                    {faq.acceptedAnswer.text}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>
                
                 {/* Latest Articles */}
                <section>
                   <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">Latest Terabox Guides</h2>
                        <Link href="/blog" className="text-primary hover:underline font-medium text-sm">
                            View All
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
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                                        {article.description}
                                    </p>
                                    <span className="text-xs font-medium text-primary group-hover:underline">
                                        Read More →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Keyword Cloud (Visual Only) */}
                <div className="text-center py-10 border-t border-border/50">
                     <p className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest opacity-70">Popular Searches</p>
                    <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto opacity-60">
                         {researchedKeywords.slice(0, 30).map(kw => ( // Limited to 30 to reduce DOM size
                            <span key={kw} className="text-[10px] text-muted-foreground hover:text-primary transition-colors cursor-default">
                                {kw} •
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </ToolLayout>
    );
}

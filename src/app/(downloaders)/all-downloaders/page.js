import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Image, Users, Smartphone } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: "Social Media Video Downloaders - Download Videos from All Platforms Free | 30tools",
    description: "Download videos from Facebook, Instagram, Twitter, TikTok, Pinterest, and YouTube Shorts for free. Fast, secure, and unlimited social media video downloads without software installation.",
    keywords: [
        // Primary downloader keywords
        "social media video downloader",
        "download videos from social media",
        "facebook video downloader",
        "instagram video downloader",
        "twitter video downloader",
        "tiktok video downloader",
        "pinterest video downloader",
        "youtube shorts downloader",

        // Long-tail SEO keywords
        "free social media video downloader online",
        "download videos from all social platforms",
        "social media content downloader tool",
        "video downloader for facebook instagram twitter",
        "bulk social media video downloader",
        "social media video saver free",
        "download social media videos hd quality",
        "social media video converter mp4",

        // Feature specific
        "social media video without watermark",
        "download social media stories",
        "social media video audio extractor",
        "social media video downloader mobile"
    ].join(", "),
    openGraph: {
        title: "Social Media Video Downloaders - Download from All Platforms Free",
        description: "Download videos from Facebook, Instagram, Twitter, TikTok, Pinterest, and YouTube Shorts. Free, fast, and secure social media downloaders.",
        url: "https://30tools.com/downloaders",
        siteName: "30tools",
        type: "website",
        images: [
            {
                url: "/og-images/social-media-downloaders.jpg",
                width: 1200,
                height: 630,
                alt: "Social Media Video Downloaders - Free Online Tools"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Social Media Video Downloaders - Download Videos Free",
        description: "Download videos from all major social media platforms for free. Fast, secure, unlimited downloads.",
        images: ["/og-images/social-media-downloaders.jpg"]
    },
    alternates: {
        canonical: "https://30tools.com/downloaders"
    }
};

const downloaderTools = [
    {
        title: "Facebook Video Downloader",
        description: "Download Facebook videos, reels, and stories in HD quality without software installation.",
        icon: Video,
        href: "/facebook-video-downloader",
        color: "bg-blue-500",
        features: ["Videos & Reels", "Stories Support", "HD Quality", "No Login Required"]
    },
    {
        title: "Instagram Video Downloader",
        description: "Save Instagram videos, reels, stories, and IGTV content in high quality for free.",
        icon: Image,
        href: "/instagram-video-downloader",
        color: "bg-gradient-to-r from-pink-500 to-purple-600",
        features: ["Reels & Stories", "IGTV Support", "HD Downloads", "Anonymous Access"]
    },
    {
        title: "Instagram Story Downloader",
        description: "Download Instagram stories and highlights anonymously without notifications.",
        icon: Users,
        href: "/instagram-story-downloader",
        color: "bg-gradient-to-r from-purple-500 to-pink-500",
        features: ["Anonymous Viewing", "Stories & Highlights", "Photos & Videos", "No Notification"]
    },
    {
        title: "Instagram DP Downloader",
        description: "Download Instagram profile pictures in full size HD quality for free.",
        icon: Image,
        href: "/instagram-dp-downloader",
        color: "bg-gradient-to-r from-pink-500 to-orange-500",
        features: ["Full Size HD", "Profile Pictures", "Anonymous Access", "Instant Download"]
    },
    {
        title: "Instagram Reel Downloader",
        description: "Download Instagram Reels without watermark in HD quality with audio extraction.",
        icon: Video,
        href: "/instagram-reel-downloader",
        color: "bg-gradient-to-r from-purple-500 to-pink-500",
        features: ["No Watermark", "HD Quality", "Audio Extraction", "Fast Processing"]
    },
    {
        title: "Twitter/X Video Downloader",
        description: "Download Twitter and X platform videos and GIFs in high quality for free.",
        icon: Video,
        href: "/twitter-video-downloader",
        color: "bg-blue-500",
        features: ["Videos & GIFs", "X Platform Support", "HD Quality", "Fast Downloads"]
    },
    {
        title: "TikTok Video Downloader",
        description: "Download TikTok videos without watermark in HD quality with audio extraction.",
        icon: Smartphone,
        href: "/tiktok-video-downloader",
        color: "bg-black",
        features: ["No Watermark", "HD Quality", "Audio Extraction", "Mobile Optimized"]
    },
    {
        title: "Pinterest Video Downloader",
        description: "Download Pinterest videos, GIFs, and idea pins in high quality for inspiration.",
        icon: Video,
        href: "/pinterest-video-downloader",
        color: "bg-red-600",
        features: ["Videos & GIFs", "Idea Pins", "Creative Content", "HD Downloads"]
    },
    {
        title: "YouTube Shorts Downloader",
        description: "Download YouTube Shorts videos in vertical format with audio extraction support.",
        icon: Video,
        href: "/youtube-shorts-downloader",
        color: "bg-red-600",
        features: ["Vertical Format", "HD Quality", "Audio Extraction", "Fast Processing"]
    }
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Social Media Video Downloaders",
    "description": "Collection of free online tools to download videos from all major social media platforms",
    "url": "https://30tools.com/downloaders",
    "mainEntity": {
        "@type": "ItemList",
        "itemListElement": downloaderTools.map((tool, index) => ({
            "@type": "SoftwareApplication",
            "position": index + 1,
            "name": tool.title,
            "description": tool.description,
            "url": `https://30tools.com${tool.href}`,
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Any",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            }
        }))
    }
};

export default function DownloadersPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Social Media Video Downloaders
                        </h1>
                        <p className="text-xl text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
                            Download videos from all major social media platforms for free. Our comprehensive collection of downloaders supports Facebook, Instagram, Twitter, TikTok, Pinterest, and YouTube Shorts. Fast, secure, and unlimited downloads without any software installation required.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ All Major Platforms</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ HD Quality Downloads</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ No Software Required</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Unlimited & Free</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {downloaderTools.map((tool, index) => (
                            <Link key={index} href={tool.href} className="group">
                                <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:border-primary/50">
                                    <CardHeader>
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className={`p-2 rounded-lg ${tool.color} text-white`}>
                                                <tool.icon className="h-5 w-5" />
                                            </div>
                                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                                {tool.title}
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                                            {tool.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1">
                                            {tool.features.map((feature, featureIndex) => (
                                                <span
                                                    key={featureIndex}
                                                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    <div className="space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Why Choose Our Social Media Downloaders?</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">🌐 All Platforms Supported</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Download videos from Facebook, Instagram, Twitter/X, TikTok, Pinterest, and YouTube Shorts. One-stop solution for all your social media video downloading needs.</p>

                                    <h3 className="font-medium mb-2 text-primary">🎥 Multiple Content Types</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Support for videos, reels, stories, GIFs, profile pictures, and more. Download any type of social media content in its original quality.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">⚡ Lightning Fast Processing</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Our optimized servers process social media content in seconds. No waiting times, no slow downloads - get your content instantly.</p>

                                    <h3 className="font-medium mb-2 text-primary">🔒 Privacy & Security</h3>
                                    <p className="text-sm text-muted-foreground mb-4">No login required, no personal data stored. All downloads are processed securely and anonymously for your privacy protection.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Supported Social Media Platforms</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-sm font-bold">F</div>
                                    <div>
                                        <h4 className="font-medium text-sm">Facebook</h4>
                                        <p className="text-xs text-muted-foreground">Videos, Reels, Stories</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
                                    <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded flex items-center justify-center text-white text-sm font-bold">IG</div>
                                    <div>
                                        <h4 className="font-medium text-sm">Instagram</h4>
                                        <p className="text-xs text-muted-foreground">Videos, Reels, Stories, DP</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-sm font-bold">X</div>
                                    <div>
                                        <h4 className="font-medium text-sm">Twitter/X</h4>
                                        <p className="text-xs text-muted-foreground">Videos, GIFs</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white text-sm font-bold">TT</div>
                                    <div>
                                        <h4 className="font-medium text-sm">TikTok</h4>
                                        <p className="text-xs text-muted-foreground">Videos, Audio</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                                    <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white text-sm font-bold">P</div>
                                    <div>
                                        <h4 className="font-medium text-sm">Pinterest</h4>
                                        <p className="text-xs text-muted-foreground">Videos, GIFs, Pins</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                                    <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white text-sm font-bold">YT</div>
                                    <div>
                                        <h4 className="font-medium text-sm">YouTube Shorts</h4>
                                        <p className="text-xs text-muted-foreground">Vertical Videos, Audio</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium mb-2">Are these social media downloaders free to use?</h3>
                                    <p className="text-sm text-muted-foreground">Yes! All our social media video downloaders are completely free with unlimited downloads. No registration, no premium accounts, no hidden fees.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Do I need to install any software?</h3>
                                    <p className="text-sm text-muted-foreground">No software installation required! All our downloaders work directly in your web browser on any device - PC, Mac, iPhone, Android, or tablet.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">What video quality can I download?</h3>
                                    <p className="text-sm text-muted-foreground">We provide multiple quality options including HD 720p, SD 480p, and mobile-optimized formats depending on the original content quality.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Can I download private account content?</h3>
                                    <p className="text-sm text-muted-foreground">You can only download content that is publicly available or that you have access to view on the respective social media platform.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
import InstagramDownloader from '@/components/tools/downloaders/InstagramDownloader';

export const metadata = {
    title: "Instagram Video Downloader - Free Online Tool | 30tools",
    description: "Free instagram video downloader tool with professional results. No registration required, instant processing, secure & unlimited use.",
    keywords: [
        // Primary Instagram keywords
        "instagram video downloader",
        "download instagram video",
        "instagram downloader",
        "ig video downloader",
        "instagram reels downloader",
        "instagram story downloader",
        "download instagram reels",
        "save instagram video",
        "instagram video download",
        "ig downloader",

        // Long-tail SEO keywords
        "instagram video downloader online free",
        "download instagram video without app",
        "instagram reels downloader hd quality",
        "save instagram stories to phone",
        "instagram private video downloader",
        "download instagram IGTV videos",
        "instagram video downloader for pc mobile",
        "free instagram video downloader no login",
        "instagram video converter mp4 download",
        "bulk instagram video downloader",

        // International keywords
        "descargar videos de instagram",
        "baixar video do instagram",
        "télécharger vidéo instagram",
        "تحميل فيديو من انستقرام",
        "scaricare video da instagram",
        "tải video instagram",

        // Feature specific
        "instagram story saver",
        "instagram reel saver",
        "IGTV downloader",
        "instagram highlights downloader",
        "instagram video without watermark"
    ].join(", "),
    openGraph: {
        title: "Instagram Video Downloader - Download IG Reels & Stories Free",
        description: "Download Instagram videos, reels, stories, and IGTV in HD quality. Free, fast, and secure Instagram downloader without app installation.",
        url: "https://30tools.com/instagram-video-downloader",
        siteName: "30tools",
        type: "website",
        images: [
            {
                url: "/og-images/instagram-video-downloader.jpg",
                width: 1200,
                height: 630,
                alt: "Instagram Video Downloader - Free Online Tool"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Instagram Video Downloader - Download IG Content Free",
        description: "Download Instagram videos, reels, and stories in HD quality. Free Instagram downloader tool.",
        images: ["/og-images/instagram-video-downloader.jpg"]
    },
    alternates: {
        canonical: "https://30tools.com/instagram-video-downloader"
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Instagram Video Downloader",
    "description": "Free online tool to download Instagram videos, reels, stories, and IGTV content in high quality",
    "url": "https://30tools.com/instagram-video-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "permissions": "browser",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": [
        "Download Instagram videos and reels",
        "Save Instagram stories and highlights",
        "Download IGTV content",
        "HD quality downloads",
        "No watermark removal",
        "Works on all devices",
        "No app installation required",
        "Unlimited free downloads"
    ]
};

export default function InstagramVideoDownloaderPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-background">
                            Instagram Video Downloader
                        </h1>
                        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                            Download Instagram videos, reels, stories, and IGTV content in high definition quality for free. Our advanced Instagram downloader supports all Instagram content types with lightning-fast speed. Save Instagram videos to your device instantly without any app installation. Perfect for content creators, marketers, and personal use.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Reels & Stories</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ IGTV Support</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ HD Quality</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ No Login Required</span>
                        </div>
                    </div>

                    <InstagramDownloader />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">How to Download Instagram Videos & Reels</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">1</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Copy Instagram URL</h3>
                                    <p className="text-sm text-muted-foreground">Copy the Instagram video, reel, or story link from the Instagram app or website</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">2</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Paste & Analyze</h3>
                                    <p className="text-sm text-muted-foreground">Paste the Instagram URL and let our tool analyze the content automatically</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">3</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Download Instantly</h3>
                                    <p className="text-sm text-muted-foreground">Choose your preferred quality and download the Instagram content to your device</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Features of Our Instagram Video Downloader</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">📱 All Instagram Content Types</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Download Instagram videos, reels, stories, IGTV, and highlights. Our downloader supports all types of Instagram content including carousel posts with multiple videos.</p>

                                    <h3 className="font-medium mb-2 text-primary">🎥 High Quality Downloads</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Save Instagram content in original quality up to 1080p HD. Maintain the same video quality as posted on Instagram for the best viewing experience.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">⚡ Lightning Fast Speed</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Our optimized servers process Instagram content in seconds. Download Instagram reels and videos instantly without any waiting time or speed limitations.</p>

                                    <h3 className="font-medium mb-2 text-primary">🔐 Safe & Anonymous</h3>
                                    <p className="text-sm text-muted-foreground mb-4">No Instagram login required. We don't access your Instagram account or store any personal information. All downloads are processed anonymously and securely.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Instagram Downloader FAQ</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium mb-2">Can I download Instagram stories?</h3>
                                    <p className="text-sm text-muted-foreground">Yes! You can download Instagram stories, highlights, and even expired stories if you have the direct link. Stories are saved in their original quality.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Does this work for private Instagram accounts?</h3>
                                    <p className="text-sm text-muted-foreground">You can only download content from private accounts if you have access to view it. The content must be visible to you on Instagram to download it.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Are Instagram reels downloaded without watermark?</h3>
                                    <p className="text-sm text-muted-foreground">We download Instagram reels in their original format as posted. If the original reel has a watermark, it will be included in the download.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Can I download multiple Instagram videos at once?</h3>
                                    <p className="text-sm text-muted-foreground">Currently, you need to download Instagram videos one by one. For carousel posts with multiple videos, each video needs to be downloaded separately.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">What devices support Instagram video downloads?</h3>
                                    <p className="text-sm text-muted-foreground">Our Instagram downloader works on all devices - iPhone, Android, PC, Mac, and tablets. Downloads work in any modern web browser.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
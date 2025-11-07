import FacebookDownloader from '@/components/tools/downloaders/FacebookDownloader';

export const metadata = {
    title: "Facebook Video Downloader - Free Online Tool | 30tools",
    description: "Free facebook video downloader tool with professional results. No registration required, instant processing, secure & unlimited use.",
    keywords: [
        // High-volume primary keywords
        "facebook video downloader",
        "download facebook video",
        "facebook downloader",
        "fb video downloader",
        "facebook video download",
        "download fb video",
        "facebook download",
        "snapsave facebook",
        "facebook reels downloader",
        "facebook story downloader",

        // Long-tail SEO keywords
        "facebook video downloader online free",
        "download facebook video without software",
        "facebook video downloader hd quality",
        "save facebook video to phone",
        "facebook private video downloader",
        "download facebook reels and stories",
        "facebook video downloader for pc mobile",
        "free facebook video downloader no registration",
        "facebook video converter mp4 download",
        "bulk facebook video downloader multiple",

        // International keywords
        "descargar videos de facebook",
        "baixar video do facebook",
        "télécharger vidéo facebook",
        "تحميل فيديو من فيسبوك",
        "scaricare video da facebook",
        "tải video facebook",

        // Brand and tool specific
        "fbdownloader",
        "fdown.net",
        "savefrom facebook",
        "snapsave app",
        "fbdown.net",
        "fbtake facebook downloader"
    ].join(", "),
    openGraph: {
        title: "Facebook Video Downloader - Download FB Videos Free Online",
        description: "Download Facebook videos, reels, and stories in HD quality for free. Fast, secure, and unlimited Facebook video downloads without software.",
        url: "https://30tools.com/facebook-video-downloader",
        siteName: "30tools",
        type: "website",
        images: [
            {
                url: "/og-images/facebook-video-downloader.jpg",
                width: 1200,
                height: 630,
                alt: "Facebook Video Downloader - Free Online Tool"
            },
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Facebook Video Downloader - Download FB Videos Free",
        description: "Download Facebook videos, reels, and stories in HD quality. Free, fast, and secure Facebook video downloader.",
        images: ["/og-images/facebook-video-downloader.jpg"]
    },
    alternates: {
        canonical: "https://30tools.com/facebook-video-downloader"
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Facebook Video Downloader",
    "description": "Free online tool to download Facebook videos, reels, and stories in high quality without software installation",
    "url": "https://30tools.com/facebook-video-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "permissions": "browser",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": [
        "Download Facebook videos in HD quality",
        "Save Facebook reels and stories",
        "Download private Facebook videos with link",
        "Support for all Facebook video formats",
        "Fast and secure downloading",
        "No software installation required",
        "Works on all devices and browsers",
        "Unlimited free downloads"
    ]
};

export default function FacebookVideoDownloaderPage() {
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
                            Facebook Video Downloader
                        </h1>
                        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                            Download Facebook videos, reels, and stories in high definition quality for free. Our advanced Facebook downloader supports HD video downloads with lightning-fast speed. Save Facebook videos to your device instantly without any software installation. Perfect for offline viewing, content sharing, and personal collection.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ HD Quality Downloads</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Reels & Stories Support</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ No Registration Required</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Unlimited Downloads</span>
                        </div>
                    </div>

                    <FacebookDownloader />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">How to Download Facebook Videos Online Free</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">1</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Copy Facebook Video URL</h3>
                                    <p className="text-sm text-muted-foreground">Copy the Facebook video link from your browser or Facebook app share option</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">2</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Paste URL & Process</h3>
                                    <p className="text-sm text-muted-foreground">Paste the Facebook video URL and click download to process the video</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">3</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Save to Device</h3>
                                    <p className="text-sm text-muted-foreground">Choose quality and download your Facebook video instantly to your device</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Why Choose Our Facebook Video Downloader?</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">🎥 Download All Facebook Content</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Download Facebook videos, reels, stories, and live streams in original quality. Our Facebook downloader works with all types of Facebook content including private videos shared with you.</p>

                                    <h3 className="font-medium mb-2 text-primary">📱 Mobile & Desktop Compatible</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Works perfectly on all devices - iPhone, Android, PC, Mac, and tablets. Download Facebook videos directly to your phone gallery or computer storage with one click.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">⚡ Super Fast Processing</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Our optimized servers process Facebook videos in seconds. No waiting times, no slow downloads - get your Facebook videos downloaded instantly with maximum speed.</p>

                                    <h3 className="font-medium mb-2 text-primary">🔒 Privacy Protected</h3>
                                    <p className="text-sm text-muted-foreground mb-4">We don't store your Facebook videos or personal data. All downloads are processed securely and privately. Your Facebook login information is never required or accessed.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium mb-2">Is it legal to download Facebook videos?</h3>
                                    <p className="text-sm text-muted-foreground">You can download Facebook videos for personal use, educational purposes, or content you own. Always respect copyright laws and Facebook's terms of service when downloading videos.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Can I download private Facebook videos?</h3>
                                    <p className="text-sm text-muted-foreground">Yes, you can download private Facebook videos that are shared with you or visible in your feed. You need to be logged into Facebook and have access to view the video.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">What quality options are available?</h3>
                                    <p className="text-sm text-muted-foreground">Our Facebook downloader supports multiple quality options including HD 720p, SD 480p, and mobile-optimized formats depending on the original video quality.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Do I need to install any software?</h3>
                                    <p className="text-sm text-muted-foreground">No software installation required! Our Facebook video downloader works entirely in your web browser. Just paste the URL and download instantly.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Can I download Facebook reels and stories?</h3>
                                    <p className="text-sm text-muted-foreground">Yes! Our tool supports downloading Facebook reels, stories, regular videos, and even live stream recordings. All Facebook video content is supported.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">More Social Media Downloaders</h2>
                            <p className="text-sm text-muted-foreground mb-6">
                                Download videos from all popular social media platforms with our comprehensive downloader tools.
                            </p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <a
                                    href="/instagram-video-downloader"
                                    className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                                >
                                    <h3 className="font-semibold mb-2 group-hover:text-primary">📸 Instagram Downloader</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Download Instagram videos, reels, stories, and IGTV content in high quality.
                                    </p>
                                    <span className="text-xs text-primary mt-2 inline-block">Download Instagram Videos →</span>
                                </a>

                                <a
                                    href="/twitter-video-downloader"
                                    className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                                >
                                    <h3 className="font-semibold mb-2 group-hover:text-primary">🐦 Twitter/X Downloader</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Save Twitter/X videos and GIFs to your device with our fast downloader tool.
                                    </p>
                                    <span className="text-xs text-primary mt-2 inline-block">Download Twitter Videos →</span>
                                </a>

                                <a
                                    href="/tiktok-video-downloader"
                                    className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                                >
                                    <h3 className="font-semibold mb-2 group-hover:text-primary">🎵 TikTok Downloader</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Download TikTok videos without watermark in HD quality for free.
                                    </p>
                                    <span className="text-xs text-primary mt-2 inline-block">Download TikTok Videos →</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
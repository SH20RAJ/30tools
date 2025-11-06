import TwitterDownloader from '@/components/tools/downloaders/TwitterDownloader';

export const metadata = {
    title: "Twitter Video Downloader - Free Online Tool | 30tools",
    description: "Free twitter video downloader tool with professional results. No registration required, instant processing, secure & unlimited use.",
    keywords: [
        // Primary Twitter/X keywords
        "twitter video downloader",
        "download twitter video",
        "twitter downloader",
        "x video downloader",
        "download x video",
        "twitter gif downloader",
        "save twitter video",
        "twitter video download",
        "x downloader",
        "twitter video saver",

        // Long-tail SEO keywords
        "twitter video downloader online free",
        "download twitter video without app",
        "twitter video downloader hd quality",
        "save twitter videos to phone",
        "twitter video downloader for pc mobile",
        "free twitter video downloader no login",
        "twitter video converter mp4 download",
        "download twitter gif animated",
        "twitter video downloader chrome extension",
        "bulk twitter video downloader",

        // X platform specific
        "x platform video downloader",
        "download videos from x",
        "x video saver",
        "x gif downloader",

        // International keywords
        "descargar videos de twitter",
        "baixar video do twitter",
        "télécharger vidéo twitter",
        "تحميل فيديو من تويتر",
        "scaricare video da twitter",
        "tải video twitter",

        // Feature specific
        "twitter video without watermark",
        "twitter thread video downloader",
        "twitter live video downloader"
    ].join(", "),
    openGraph: {
        title: "Twitter/X Video Downloader - Download Videos & GIFs Free",
        description: "Download Twitter/X videos and GIFs in HD quality. Free, fast, and secure Twitter video downloader without app installation.",
        url: "https://30tools.com/twitter-video-downloader",
        siteName: "30tools",
        type: "website",
        images: [
            {
                url: "/og-images/twitter-video-downloader.jpg",
                width: 1200,
                height: 630,
                alt: "Twitter Video Downloader - Free Online Tool"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Twitter/X Video Downloader - Download Videos Free",
        description: "Download Twitter/X videos and GIFs in HD quality. Free Twitter video downloader tool.",
        images: ["/og-images/twitter-video-downloader.jpg"]
    },
    alternates: {
        canonical: "https://30tools.com/twitter-video-downloader"
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Twitter Video Downloader",
    "description": "Free online tool to download Twitter/X videos and GIFs in high quality without software installation",
    "url": "https://30tools.com/twitter-video-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "permissions": "browser",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": [
        "Download Twitter/X videos in HD",
        "Save Twitter GIFs and animations",
        "Support for all video formats",
        "Fast processing speed",
        "No software installation required",
        "Works on all devices",
        "Unlimited free downloads",
        "Privacy protected downloads"
    ]
};

export default function TwitterVideoDownloaderPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            Twitter/X Video Downloader
                        </h1>
                        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                            Download Twitter and X platform videos, GIFs, and animations in high definition quality for free. Our advanced Twitter downloader supports all video content with lightning-fast speed. Save Twitter videos to your device instantly without any software installation. Perfect for content archiving, sharing, and offline viewing.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Videos & GIFs</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ HD Quality</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ X Platform Support</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ No Login Required</span>
                        </div>
                    </div>

                    <TwitterDownloader />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">How to Download Twitter/X Videos</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-blue-500 font-bold">1</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Copy Tweet URL</h3>
                                    <p className="text-sm text-muted-foreground">Copy the Twitter/X tweet link containing the video you want to download</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-blue-500 font-bold">2</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Paste & Process</h3>
                                    <p className="text-sm text-muted-foreground">Paste the tweet URL and our tool will extract all available video content</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-blue-500 font-bold">3</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Download Video</h3>
                                    <p className="text-sm text-muted-foreground">Select quality and download the Twitter video or GIF to your device</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Twitter Video Downloader Features</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-blue-600">🎬 All Twitter Content</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Download all types of Twitter/X video content including regular videos, GIFs, live stream recordings, and video threads. Support for both Twitter and X platform content.</p>

                                    <h3 className="font-medium mb-2 text-blue-600">📱 Cross-Platform Support</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Works on all devices and platforms - iPhone, Android, Windows, Mac, and Linux. Download Twitter videos directly to your phone gallery or computer storage.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-blue-600">⚡ Instant Processing</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Our high-speed servers process Twitter videos in seconds. No waiting queues, no slow downloads - get your Twitter content downloaded immediately.</p>

                                    <h3 className="font-medium mb-2 text-blue-600">🔒 Secure & Private</h3>
                                    <p className="text-sm text-muted-foreground mb-4">No Twitter login required. We don't store your videos or access your Twitter account. All downloads are processed securely and anonymously.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Twitter Video Downloader FAQ</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium mb-2">Can I download videos from protected Twitter accounts?</h3>
                                    <p className="text-sm text-muted-foreground">You can only download videos from tweets that are publicly visible or that you have access to view. Protected account content requires proper access permissions.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">What video quality options are available?</h3>
                                    <p className="text-sm text-muted-foreground">We provide multiple quality options based on the original video, typically including HD 720p, SD 480p, and mobile-optimized formats.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Does this work with X (formerly Twitter) platform?</h3>
                                    <p className="text-sm text-muted-foreground">Yes! Our downloader fully supports both Twitter and X platform videos. The tool works with all video content from the rebranded X platform.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Can I download Twitter GIFs?</h3>
                                    <p className="text-sm text-muted-foreground">Absolutely! Our tool can download Twitter GIFs and save them as MP4 video files or animated GIF format, depending on your preference.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Is there a limit on downloads?</h3>
                                    <p className="text-sm text-muted-foreground">No limits! Download as many Twitter/X videos as you want, completely free. No registration, no premium accounts, no restrictions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
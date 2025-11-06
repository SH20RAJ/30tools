import SnapchatDownloader from '@/components/tools/downloaders/SnapchatDownloader';

export const metadata = {
    title: "Snapchat Video Downloader - Free Online Tool | 30tools",
    description: "Free snapchat video downloader tool with professional results. No registration required, instant processing, secure & unlimited use.",
    keywords: [
        // Primary Snapchat keywords
        "snapchat video downloader",
        "download snapchat video",
        "snapchat downloader",
        "snapchat story downloader",
        "save snapchat video",
        "snapchat video saver",
        "download snapchat stories",
        "snapchat content downloader",
        "snapchat media downloader",
        "snapchat video download",

        // Long-tail SEO keywords
        "snapchat video downloader online free",
        "download snapchat video without app",
        "snapchat video downloader hd quality",
        "save snapchat videos to phone",
        "snapchat video downloader for pc mobile",
        "free snapchat video downloader no login",
        "snapchat story video downloader",
        "bulk snapchat video downloader",
        "snapchat video downloader without notification",
        "anonymous snapchat video downloader",

        // International keywords
        "descargar videos de snapchat",
        "baixar video do snapchat",
        "télécharger vidéo snapchat",
        "تحميل فيديو من سناب شات",
        "scaricare video da snapchat",
        "tải video snapchat",

        // Feature specific
        "snapchat video without watermark",
        "snapchat story saver",
        "snapchat highlight downloader",
        "snapchat memory downloader",
        "snapchat video quality hd"
    ].join(", "),
    openGraph: {
        title: "Snapchat Video Downloader - Download Snapchat Videos & Stories Free",
        description: "Download Snapchat videos and stories in HD quality. Free, fast, and secure Snapchat downloader without app installation.",
        url: "https://30tools.com/snapchat-video-downloader",
        siteName: "30tools",
        type: "website",
        images: [
            {
                url: "/og-images/snapchat-video-downloader.jpg",
                width: 1200,
                height: 630,
                alt: "Snapchat Video Downloader - Free Online Tool"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Snapchat Video Downloader - Download Videos & Stories Free",
        description: "Download Snapchat videos and stories in HD quality. Free Snapchat downloader tool.",
        images: ["/og-images/snapchat-video-downloader.jpg"]
    },
    alternates: {
        canonical: "https://30tools.com/snapchat-video-downloader"
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Snapchat Video Downloader",
    "description": "Free online tool to download Snapchat videos and stories in high quality without software installation",
    "url": "https://30tools.com/snapchat-video-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "permissions": "browser",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": [
        "Download Snapchat videos in HD",
        "Save Snapchat stories",
        "Fast processing speed",
        "No software installation required",
        "Works on all devices",
        "Unlimited free downloads",
        "Privacy protected downloads",
        "Anonymous access"
    ]
};

export default function SnapchatVideoDownloaderPage() {
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
                            Snapchat Video Downloader
                        </h1>
                        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                            Download Snapchat videos and stories in high definition quality for free. Our advanced Snapchat downloader supports all video content with lightning-fast speed. Save Snapchat videos to your device instantly without any app installation. Perfect for content archiving, sharing, and personal collection from the ephemeral world of Snapchat.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Videos & Stories</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ HD Quality</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Anonymous Access</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ No Login Required</span>
                        </div>
                    </div>

                    <SnapchatDownloader />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">How to Download Snapchat Videos & Stories</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">1</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Copy Snapchat URL</h3>
                                    <p className="text-sm text-muted-foreground">Copy the Snapchat video or story link you want to download</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">2</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Paste & Process</h3>
                                    <p className="text-sm text-muted-foreground">Paste the Snapchat URL and our tool will analyze the content automatically</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">3</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Download Content</h3>
                                    <p className="text-sm text-muted-foreground">Select quality and download the Snapchat video or story to your device</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Snapchat Video Downloader Features</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">📱 All Snapchat Content</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Download all types of Snapchat content including regular videos, stories, highlights, and memories. Perfect for saving ephemeral content before it disappears.</p>

                                    <h3 className="font-medium mb-2 text-primary">⚡ Lightning Fast Processing</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Our optimized servers process Snapchat content in seconds. No waiting times, no slow downloads - get your Snapchat videos instantly.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">🔐 Anonymous & Safe</h3>
                                    <p className="text-sm text-muted-foreground mb-4">No Snapchat login required. We don't access your Snapchat account or store any personal information. All downloads are processed anonymously and securely.</p>

                                    <h3 className="font-medium mb-2 text-primary">📱 Mobile Optimized</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Specially designed for mobile users. Download Snapchat videos directly to your phone gallery with optimized performance for all devices.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Snapchat Video Downloader FAQ</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium mb-2">Can I download private Snapchat content?</h3>
                                    <p className="text-sm text-muted-foreground">You can only download Snapchat content that is publicly available or shared with you. Private content requires proper access permissions.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Will the user know I downloaded their Snapchat?</h3>
                                    <p className="text-sm text-muted-foreground">Our downloader works anonymously for public content. However, always respect privacy and only download content you have permission to save.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">What video quality is available?</h3>
                                    <p className="text-sm text-muted-foreground">We provide the best available quality from Snapchat, typically including HD options and mobile-optimized formats depending on the original content quality.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Can I download Snapchat stories?</h3>
                                    <p className="text-sm text-muted-foreground">Yes! Our tool supports downloading Snapchat stories, highlights, and other story-based content that is publicly accessible.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Is there a download limit?</h3>
                                    <p className="text-sm text-muted-foreground">No limits! Download as many Snapchat videos as you want, completely free. Perfect for building your content collection.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
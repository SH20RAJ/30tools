import YouTubeShortsDownloader from '@/components/tools/downloaders/YouTubeShortsDownloader';

export const metadata = {
    title: "YouTube Shorts Downloader - Download YouTube Shorts Videos Free HD | 30tools",
    description: "Download YouTube Shorts videos in HD quality for free. Save YouTube Shorts to your device without app installation. Fast, secure, unlimited YouTube Shorts downloads.",
    keywords: [
        // Primary YouTube Shorts keywords
        "youtube shorts downloader",
        "download youtube shorts",
        "youtube shorts download",
        "save youtube shorts",
        "youtube shorts video downloader",
        "download youtube shorts video",
        "youtube shorts saver",
        "youtube shorts mp4 downloader",
        "youtube shorts hd downloader",
        "yt shorts downloader",

        // Long-tail SEO keywords
        "youtube shorts downloader online free",
        "download youtube shorts without app",
        "youtube shorts downloader hd quality",
        "save youtube shorts to phone",
        "youtube shorts downloader for pc mobile",
        "free youtube shorts downloader no login",
        "youtube shorts video converter mp4",
        "bulk youtube shorts downloader",
        "youtube shorts audio downloader mp3",
        "youtube shorts downloader chrome extension",

        // International keywords
        "descargar youtube shorts",
        "baixar youtube shorts",
        "télécharger youtube shorts",
        "تحميل يوتيوب شورتس",
        "scaricare youtube shorts",
        "tải youtube shorts",

        // Feature specific
        "youtube shorts without watermark",
        "youtube shorts full quality",
        "youtube shorts audio extraction",
        "youtube shorts vertical video",
        "youtube shorts mp3 converter"
    ].join(", "),
    openGraph: {
        title: "YouTube Shorts Downloader - Download Shorts Videos HD Free",
        description: "Download YouTube Shorts videos in HD quality for free. Fast, secure YouTube Shorts downloader without app installation.",
        url: "https://30tools.com/youtube-shorts-downloader",
        siteName: "30tools",
        type: "website",
        images: [
            {
                url: "/og-images/youtube-shorts-downloader.jpg",
                width: 1200,
                height: 630,
                alt: "YouTube Shorts Downloader - Free Online Tool"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "YouTube Shorts Downloader - Download Shorts Videos Free",
        description: "Download YouTube Shorts videos in HD quality. Free YouTube Shorts downloader tool.",
        images: ["/og-images/youtube-shorts-downloader.jpg"]
    },
    alternates: {
        canonical: "https://30tools.com/youtube-shorts-downloader"
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "YouTube Shorts Downloader",
    "description": "Free online tool to download YouTube Shorts videos in HD quality without software installation",
    "url": "https://30tools.com/youtube-shorts-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "permissions": "browser",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": [
        "Download YouTube Shorts in HD",
        "Vertical video format support",
        "Audio extraction to MP3",
        "Fast processing speed",
        "No software installation required",
        "Works on all devices",
        "Unlimited free downloads",
        "Privacy protected downloads"
    ]
};

export default function YouTubeShortsDownloaderPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                            YouTube Shorts Downloader
                        </h1>
                        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                            Download YouTube Shorts videos in high definition quality for free. Our advanced YouTube Shorts downloader supports vertical video downloads with lightning-fast speed. Save YouTube Shorts to your device instantly without any app installation. Perfect for content creators, social media managers, and entertainment purposes.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Vertical Format</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ HD Quality</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Audio Extraction</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Unlimited Downloads</span>
                        </div>
                    </div>

                    <YouTubeShortsDownloader />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">How to Download YouTube Shorts Videos</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-red-500 font-bold">1</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Copy Shorts URL</h3>
                                    <p className="text-sm text-muted-foreground">Copy the YouTube Shorts link from the YouTube app or website share button</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-red-500 font-bold">2</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Paste & Process</h3>
                                    <p className="text-sm text-muted-foreground">Paste the YouTube Shorts URL and our tool will analyze the vertical video</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-red-500 font-bold">3</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Download Shorts</h3>
                                    <p className="text-sm text-muted-foreground">Select quality and download the YouTube Shorts video to your device</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">YouTube Shorts Downloader Features</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-red-600">📱 Vertical Video Format</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Download YouTube Shorts in their native vertical format, perfect for mobile viewing and social media sharing. Maintain the original 9:16 aspect ratio for optimal display.</p>

                                    <h3 className="font-medium mb-2 text-red-600">🎵 Audio Extraction</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Extract high-quality audio from YouTube Shorts and save as MP3 files. Perfect for downloading trending music, sounds, and audio clips from popular Shorts.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-red-600">⚡ Lightning Fast</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Our optimized servers process YouTube Shorts in seconds. No waiting times, no slow processing - get your YouTube Shorts downloaded instantly.</p>

                                    <h3 className="font-medium mb-2 text-red-600">📱 Mobile Optimized</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Specially designed for mobile users who consume YouTube Shorts. Download directly to your phone gallery with optimized performance for all devices.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">YouTube Shorts Downloader FAQ</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium mb-2">What makes YouTube Shorts different from regular videos?</h3>
                                    <p className="text-sm text-muted-foreground">YouTube Shorts are vertical videos (9:16 aspect ratio) up to 60 seconds long, designed for mobile viewing. Our downloader preserves this vertical format perfectly.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Can I download YouTube Shorts in HD quality?</h3>
                                    <p className="text-sm text-muted-foreground">Yes! We provide multiple quality options including HD when available, maintaining the best possible quality for your YouTube Shorts downloads.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Can I extract audio from YouTube Shorts?</h3>
                                    <p className="text-sm text-muted-foreground">Absolutely! Extract and download just the audio from YouTube Shorts as high-quality MP3 files, perfect for music and trending sounds.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Do I need a YouTube account to download Shorts?</h3>
                                    <p className="text-sm text-muted-foreground">No YouTube login required! Our YouTube Shorts downloader works anonymously without needing any YouTube account access.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Can I download age-restricted YouTube Shorts?</h3>
                                    <p className="text-sm text-muted-foreground">You can only download publicly available YouTube Shorts. Age-restricted or private content may not be accessible through our downloader.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
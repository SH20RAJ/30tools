import PinterestDownloader from '@/components/tools/downloaders/PinterestDownloader';

export const metadata = {
    title: "Pinterest Video Downloader - Free Online Tool | 30tools",
    description: "Free pinterest video downloader tool with professional results. No registration required, instant processing, secure & unlimited use.",
    keywords: [
        // Primary Pinterest keywords
        "pinterest video downloader",
        "download pinterest video",
        "pinterest downloader",
        "pinterest video download",
        "save pinterest video",
        "pinterest gif downloader",
        "download pinterest",
        "pinterest video saver",
        "pinterest mp4 downloader",
        "pinterest pin downloader",

        // Long-tail SEO keywords
        "pinterest video downloader online free",
        "download pinterest video without app",
        "pinterest video downloader hd quality",
        "save pinterest videos to phone",
        "pinterest video downloader for pc mobile",
        "free pinterest video downloader no login",
        "pinterest video converter mp4 download",
        "bulk pinterest video downloader",
        "pinterest idea pin video downloader",
        "pinterest story pin downloader",

        // International keywords
        "descargar videos de pinterest",
        "baixar video do pinterest",
        "télécharger vidéo pinterest",
        "تحميل فيديو من بينتيريست",
        "scaricare video da pinterest",
        "tải video pinterest",

        // Feature specific
        "pinterest video without watermark",
        "pinterest gif to mp4",
        "pinterest video quality hd",
        "pinterest board video downloader",
        "pinterest recipe video downloader"
    ].join(", "),
    openGraph: {
        title: "Pinterest Video Downloader - Download Pinterest Videos & GIFs Free",
        description: "Download Pinterest videos and GIFs in HD quality. Free, fast, and secure Pinterest downloader without app installation.",
        url: "https://30tools.com/pinterest-video-downloader",
        siteName: "30tools",
        type: "website",
        images: [
            {
                url: "/og-images/pinterest-video-downloader.jpg",
                width: 1200,
                height: 630,
                alt: "Pinterest Video Downloader - Free Online Tool"
            },
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Pinterest Video Downloader - Download Videos & GIFs Free",
        description: "Download Pinterest videos and GIFs in HD quality. Free Pinterest downloader tool.",
        images: ["/og-images/pinterest-video-downloader.jpg"]
    },
    alternates: {
        canonical: "https://30tools.com/pinterest-video-downloader"
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Pinterest Video Downloader",
    "description": "Free online tool to download Pinterest videos and GIFs in high quality without software installation",
    "url": "https://30tools.com/pinterest-video-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "permissions": "browser",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": [
        "Download Pinterest videos in HD",
        "Save Pinterest GIFs and animations",
        "Download idea pins and story pins",
        "Fast processing speed",
        "No software installation required",
        "Works on all devices",
        "Unlimited free downloads",
        "Privacy protected downloads"
    ]
};

export default function PinterestVideoDownloaderPage() {
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
                            Pinterest Video Downloader
                        </h1>
                        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                            Download Pinterest videos and GIFs in high definition quality for free. Our advanced Pinterest downloader supports all video content including idea pins, story pins, and animated GIFs with lightning-fast speed. Save Pinterest videos to your device instantly without any software installation. Perfect for inspiration collection, DIY projects, and creative work.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Videos & GIFs</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Idea Pins</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ HD Quality</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ No Login Required</span>
                        </div>
                    </div>

                    <PinterestDownloader />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">How to Download Pinterest Videos & GIFs</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-destructive/100/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-destructive font-bold">1</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Copy Pinterest URL</h3>
                                    <p className="text-sm text-muted-foreground">Copy the Pinterest pin link containing the video or GIF you want to download</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-destructive/100/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-destructive font-bold">2</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Paste & Analyze</h3>
                                    <p className="text-sm text-muted-foreground">Paste the Pinterest URL and our tool will analyze the pin content automatically</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-destructive/100/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-destructive font-bold">3</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Download Content</h3>
                                    <p className="text-sm text-muted-foreground">Select quality and download the Pinterest video or GIF to your device</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Pinterest Downloader Features</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-destructive">📌 All Pinterest Content</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Download all types of Pinterest video content including regular video pins, idea pins, story pins, and animated GIFs. Perfect for saving DIY tutorials, recipes, and creative inspiration.</p>

                                    <h3 className="font-medium mb-2 text-destructive">🎨 Creative Content Focus</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Specially designed for creative professionals, DIY enthusiasts, and content creators. Save Pinterest videos for offline inspiration, project references, and creative collections.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-destructive">⚡ Lightning Fast</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Our optimized servers process Pinterest content instantly. Download Pinterest videos and GIFs in seconds without any waiting time or processing delays.</p>

                                    <h3 className="font-medium mb-2 text-destructive">🔐 Safe & Secure</h3>
                                    <p className="text-sm text-muted-foreground mb-4">No Pinterest login required. We don't access your Pinterest account or store any personal information. All downloads are processed securely and privately.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Pinterest Video Downloader FAQ</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium mb-2">Can I download Pinterest idea pins?</h3>
                                    <p className="text-sm text-muted-foreground">Yes! Our downloader supports Pinterest idea pins, story pins, and all video content types. You can download multi-page idea pins and story sequences.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">What about Pinterest GIFs and animations?</h3>
                                    <p className="text-sm text-muted-foreground">Absolutely! Download Pinterest GIFs and save them as MP4 videos or animated GIF files. Perfect for saving animated tutorials and creative content.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Can I download from private Pinterest boards?</h3>
                                    <p className="text-sm text-muted-foreground">You can only download content from public Pinterest pins or private boards you have access to. The pin must be visible to you on Pinterest.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">What video quality is available?</h3>
                                    <p className="text-sm text-muted-foreground">We provide the best available quality from Pinterest, typically including HD options and mobile-optimized formats depending on the original pin quality.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Is there a download limit?</h3>
                                    <p className="text-sm text-muted-foreground">No limits! Download as many Pinterest videos and GIFs as you want, completely free. Perfect for building your inspiration collection.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
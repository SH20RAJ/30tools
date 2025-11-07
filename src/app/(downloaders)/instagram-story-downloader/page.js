import InstagramStoryDownloader from '@/components/tools/downloaders/InstagramStoryDownloader';

export const metadata = {
    title: "Instagram Story Downloader - Free Online Tool | 30tools",
    description: "Professional instagram story downloader tool. Free online processing with high-quality results. No registration required, instant results.",
    keywords: [
        // Primary Instagram story keywords
        "instagram story downloader",
        "download instagram story",
        "instagram story saver",
        "ig story downloader",
        "save instagram story",
        "instagram highlights downloader",
        "download instagram highlights",
        "instagram story download",
        "anonymous instagram story viewer",
        "instagram story viewer and downloader",

        // Long-tail SEO keywords
        "instagram story downloader online free",
        "download instagram story without them knowing",
        "instagram story downloader anonymous",
        "save instagram stories to phone",
        "instagram story downloader hd quality",
        "instagram story downloader for pc mobile",
        "free instagram story downloader no login",
        "instagram story video photo downloader",
        "bulk instagram story downloader",
        "instagram story highlights saver",

        // International keywords
        "descargar historias de instagram",
        "baixar stories do instagram",
        "télécharger story instagram",
        "تحميل ستوري انستقرام",
        "scaricare storie instagram",
        "tải story instagram",

        // Feature specific
        "instagram story without notification",
        "instagram story anonymous viewer",
        "instagram highlights saver",
        "instagram story photo downloader",
        "instagram story video downloader"
    ].join(", "),
    openGraph: {
        title: "Instagram Story Downloader - Download Stories & Highlights Free",
        description: "Download Instagram stories and highlights anonymously in HD quality. Free, fast, and secure Instagram story downloader.",
        url: "https://30tools.com/instagram-story-downloader",
        siteName: "30tools",
        type: "website",
        images: [
            {
                url: "/og-images/instagram-story-downloader.jpg",
                width: 1200,
                height: 630,
                alt: "Instagram Story Downloader - Free Online Tool"
            },
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Instagram Story Downloader - Download Stories Anonymously",
        description: "Download Instagram stories and highlights anonymously in HD quality. Free Instagram story downloader.",
        images: ["/og-images/instagram-story-downloader.jpg"]
    },
    alternates: {
        canonical: "https://30tools.com/instagram-story-downloader"
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Instagram Story Downloader",
    "description": "Free online tool to download Instagram stories and highlights anonymously in high quality",
    "url": "https://30tools.com/instagram-story-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "permissions": "browser",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": [
        "Download Instagram stories anonymously",
        "Save Instagram highlights",
        "HD quality downloads",
        "Photos and videos support",
        "No notification to story owner",
        "Works on all devices",
        "No app installation required",
        "Unlimited free downloads"
    ]
};

export default function InstagramStoryDownloaderPage() {
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
                            Instagram Story Downloader
                        </h1>
                        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                            Download Instagram stories and highlights anonymously in high definition quality for free. Our advanced Instagram story downloader allows you to save Instagram stories without the user knowing. Download both photos and videos from Instagram stories instantly without any app installation. Perfect for content archiving, research, and personal collection.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Anonymous Download</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Stories & Highlights</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Photos & Videos</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ No Notification</span>
                        </div>
                    </div>

                    <InstagramStoryDownloader />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">How to Download Instagram Stories Anonymously</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">1</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Enter Username</h3>
                                    <p className="text-sm text-muted-foreground">Enter the Instagram username whose stories you want to download</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">2</span>
                                    </div>
                                    <h3 className="font-medium mb-2">View Stories</h3>
                                    <p className="text-sm text-muted-foreground">Browse available stories and highlights anonymously without notification</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">3</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Download Content</h3>
                                    <p className="text-sm text-muted-foreground">Select and download Instagram stories or highlights to your device</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Instagram Story Downloader Features</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">👻 Anonymous Viewing</h3>
                                    <p className="text-sm text-muted-foreground mb-4">View and download Instagram stories completely anonymously. The story owner will never know you viewed or downloaded their content. Perfect for discreet content research and archiving.</p>

                                    <h3 className="font-medium mb-2 text-primary">📸 Photos & Videos</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Download both Instagram story photos and videos in their original quality. Save complete story sequences including multiple photos and videos from a single story.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">⭐ Highlights Support</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Download Instagram highlights and saved story collections. Access and save highlight content that users have permanently saved to their profile.</p>

                                    <h3 className="font-medium mb-2 text-primary">🔒 Privacy Protected</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Your activity is completely private. We don't store your searches or downloaded content. No Instagram login required, ensuring complete anonymity.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Instagram Story Downloader FAQ</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium mb-2">Will the user know I downloaded their story?</h3>
                                    <p className="text-sm text-muted-foreground">No! Our Instagram story downloader is completely anonymous. The story owner will not receive any notification or see that you viewed or downloaded their story.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Can I download stories from private accounts?</h3>
                                    <p className="text-sm text-muted-foreground">You can only download stories from public Instagram accounts. Private account stories are not accessible through our anonymous downloader.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">How long are stories available for download?</h3>
                                    <p className="text-sm text-muted-foreground">Instagram stories are available for 24 hours after posting. However, highlights remain available permanently until the user removes them.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Can I download multiple stories at once?</h3>
                                    <p className="text-sm text-muted-foreground">Yes! You can browse all available stories from a user and download multiple photos and videos from their story collection.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">What quality are the downloaded stories?</h3>
                                    <p className="text-sm text-muted-foreground">Stories are downloaded in their original quality as posted on Instagram, typically in HD resolution for both photos and videos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
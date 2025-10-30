import FacebookStoryDownloader from '@/components/tools/downloaders/FacebookStoryDownloader';

export const metadata = {
    title: "Facebook Story Downloader - Download FB Stories & Highlights Free | 30tools",
    description: "Download Facebook stories and highlights anonymously in HD quality for free. Save Facebook stories to your device without the user knowing. Fast, secure, unlimited downloads.",
    keywords: [
        // Primary Facebook story keywords
        "facebook story downloader",
        "download facebook story",
        "facebook story saver",
        "fb story downloader",
        "save facebook story",
        "facebook highlights downloader",
        "download facebook highlights",
        "facebook story download",
        "anonymous facebook story viewer",
        "facebook story viewer and downloader",

        // Long-tail SEO keywords
        "facebook story downloader online free",
        "download facebook story without them knowing",
        "facebook story downloader anonymous",
        "save facebook stories to phone",
        "facebook story downloader hd quality",
        "facebook story downloader for pc mobile",
        "free facebook story downloader no login",
        "facebook story video photo downloader",
        "bulk facebook story downloader",
        "facebook story highlights saver",

        // International keywords
        "descargar historias de facebook",
        "baixar stories do facebook",
        "télécharger story facebook",
        "تحميل ستوري فيسبوك",
        "scaricare storie facebook",
        "tải story facebook",

        // Feature specific
        "facebook story without notification",
        "facebook story anonymous viewer",
        "facebook highlights saver",
        "facebook story photo downloader",
        "facebook story video downloader"
    ].join(", "),
    openGraph: {
        title: "Facebook Story Downloader - Download Stories & Highlights Free",
        description: "Download Facebook stories and highlights anonymously in HD quality. Free, fast, and secure Facebook story downloader.",
        url: "https://30tools.com/facebook-story-downloader",
        siteName: "30tools",
        type: "website",
        images: [
            {
                url: "/og-images/facebook-story-downloader.jpg",
                width: 1200,
                height: 630,
                alt: "Facebook Story Downloader - Free Online Tool"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Facebook Story Downloader - Download Stories Anonymously",
        description: "Download Facebook stories and highlights anonymously in HD quality. Free Facebook story downloader.",
        images: ["/og-images/facebook-story-downloader.jpg"]
    },
    alternates: {
        canonical: "https://30tools.com/facebook-story-downloader"
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Facebook Story Downloader",
    "description": "Free online tool to download Facebook stories and highlights anonymously in high quality",
    "url": "https://30tools.com/facebook-story-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "permissions": "browser",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": [
        "Download Facebook stories anonymously",
        "Save Facebook highlights",
        "HD quality downloads",
        "Photos and videos support",
        "No notification to story owner",
        "Works on all devices",
        "No app installation required",
        "Unlimited free downloads"
    ]
};

export default function FacebookStoryDownloaderPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                            Facebook Story Downloader
                        </h1>
                        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                            Download Facebook stories and highlights anonymously in high definition quality for free. Our advanced Facebook story downloader allows you to save Facebook stories without the user knowing. Download both photos and videos from Facebook stories instantly without any app installation. Perfect for content archiving, research, and personal collection.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Anonymous Download</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Stories & Highlights</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Photos & Videos</span>
                            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ No Notification</span>
                        </div>
                    </div>

                    <FacebookStoryDownloader />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">How to Download Facebook Stories Anonymously</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-blue-500 font-bold">1</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Enter Username</h3>
                                    <p className="text-sm text-muted-foreground">Enter the Facebook username whose stories you want to download</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-blue-500 font-bold">2</span>
                                    </div>
                                    <h3 className="font-medium mb-2">View Stories</h3>
                                    <p className="text-sm text-muted-foreground">Browse available stories and highlights anonymously without notification</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-blue-500 font-bold">3</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Download Content</h3>
                                    <p className="text-sm text-muted-foreground">Select and download Facebook stories or highlights to your device</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Facebook Story Downloader Features</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-blue-600">👻 Anonymous Viewing</h3>
                                    <p className="text-sm text-muted-foreground mb-4">View and download Facebook stories completely anonymously. The story owner will never know you viewed or downloaded their content. Perfect for discreet content research and archiving.</p>

                                    <h3 className="font-medium mb-2 text-blue-600">📸 Photos & Videos</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Download both Facebook story photos and videos in their original quality. Save complete story sequences including multiple photos and videos from a single story.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-blue-600">⭐ Highlights Support</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Download Facebook highlights and saved story collections. Access and save highlight content that users have permanently saved to their profile.</p>

                                    <h3 className="font-medium mb-2 text-blue-600">🔒 Privacy Protected</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Your activity is completely private. We don't store your searches or downloaded content. No Facebook login required, ensuring complete anonymity.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Facebook Story Downloader FAQ</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium mb-2">Will the user know I downloaded their story?</h3>
                                    <p className="text-sm text-muted-foreground">No! Our Facebook story downloader is completely anonymous. The story owner will not receive any notification or see that you viewed or downloaded their story.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Can I download stories from private accounts?</h3>
                                    <p className="text-sm text-muted-foreground">You can only download stories from public Facebook accounts. Private account stories are not accessible through our anonymous downloader.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">How long are stories available for download?</h3>
                                    <p className="text-sm text-muted-foreground">Facebook stories are available for 24 hours after posting. However, highlights remain available permanently until the user removes them.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Can I download multiple stories at once?</h3>
                                    <p className="text-sm text-muted-foreground">Yes! You can browse all available stories from a user and download multiple photos and videos from their story collection.</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">What quality are the downloaded stories?</h3>
                                    <p className="text-sm text-muted-foreground">Stories are downloaded in their original quality as posted on Facebook, typically in HD resolution for both photos and videos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
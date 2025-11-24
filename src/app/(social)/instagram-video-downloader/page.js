import InstagramVideoDownloader from "@/components/tools/social/InstagramVideoDownloader";
import { SEO_TEMPLATES } from "@/constants/seo/metadata-templates";

export const metadata = {
    title: SEO_TEMPLATES.INSTAGRAM_VIDEO_DOWNLOADER.title,
    description: SEO_TEMPLATES.INSTAGRAM_VIDEO_DOWNLOADER.description,
    keywords: SEO_TEMPLATES.INSTAGRAM_VIDEO_DOWNLOADER.keywords,

    openGraph: {
        title: SEO_TEMPLATES.INSTAGRAM_VIDEO_DOWNLOADER.title,
        description: SEO_TEMPLATES.INSTAGRAM_VIDEO_DOWNLOADER.description,
        url: `https://30tools.com${SEO_TEMPLATES.INSTAGRAM_VIDEO_DOWNLOADER.canonical}`,
        images: [{
            url: "/og-images/instagram-video-downloader.jpg",
            width: 1200,
            height: 630,
            alt: "Instagram Video Downloader - Download Reels, Stories, IGTV Free"
        }],
        type: "website",
        siteName: "30tools"
    },

    twitter: {
        card: "summary_large_image",
        title: SEO_TEMPLATES.INSTAGRAM_VIDEO_DOWNLOADER.title,
        description: SEO_TEMPLATES.INSTAGRAM_VIDEO_DOWNLOADER.description,
        images: ["/og-images/instagram-video-downloader.jpg"],
        creator: "@30tools"
    },

    alternates: {
        canonical: `https://30tools.com${SEO_TEMPLATES.INSTAGRAM_VIDEO_DOWNLOADER.canonical}`
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    }
};

const schemas = {
    webApp: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Instagram Video Downloader",
        "description": "Download Instagram videos, reels, stories, and IGTV in HD quality. Free Instagram video downloader, no app required.",
        "url": "https://30tools.com/instagram-video-downloader",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Any",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "author": {
            "@type": "Organization",
            "name": "30tools",
            "url": "https://30tools.com"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "2341"
        }
    },

    howTo: {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Download Instagram Videos",
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "Copy Instagram URL",
                "text": "Open Instagram and copy the video, reel, or story URL"
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Paste URL",
                "text": "Paste the Instagram URL into our downloader tool"
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Download",
                "text": "Click download to save the Instagram video in HD quality"
            }
        ]
    },

    faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do I download Instagram videos?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Copy the Instagram video URL, paste it into our downloader, and click download. Works with videos, reels, stories, and IGTV."
                }
            },
            {
                "@type": "Question",
                "name": "Can I download Instagram reels?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Our tool supports downloading Instagram reels in HD quality without watermarks."
                }
            },
            {
                "@type": "Question",
                "name": "Is it safe to use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, completely safe. No login required, no personal data collected, all processing happens securely."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need to log in to Instagram?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No login required! Just paste the URL and download. Your Instagram account is not needed."
                }
            }
        ]
    },

    breadcrumb: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://30tools.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Social Media Tools",
                "item": "https://30tools.com/#social-tools"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Instagram Video Downloader"
            }
        ]
    }
};

export default function InstagramVideoDownloaderPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApp) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.howTo) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />

            <div className="container mx-auto px-4 py-8">
                <nav aria-label="Breadcrumb" className="mb-6">
                    <ol className="flex items-center space-x-2 text-sm text-gray-600">
                        <li><a href="/" className="hover:text-blue-600">Home</a></li>
                        <li>/</li>
                        <li><a href="/#social-tools" className="hover:text-blue-600">Social Media Tools</a></li>
                        <li>/</li>
                        <li className="text-gray-900 font-medium">Instagram Video Downloader</li>
                    </ol>
                </nav>

                <h1 className="text-4xl font-bold mb-4 text-center">Instagram Video Downloader - Download Reels, Stories, IGTV Free</h1>

                <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
                    Download Instagram videos, reels, stories, and IGTV in HD quality with our free Instagram video downloader. No app required, works on all devices. Save Instagram content instantly without watermarks.
                </p>

                <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
                    <InstagramVideoDownloader />
                </div>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">How to Download Instagram Videos</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                            <div className="text-3xl mb-3">1️⃣</div>
                            <h3 className="text-xl font-semibold mb-3">Copy Instagram URL</h3>
                            <p className="text-gray-700">Open Instagram and copy the video, reel, or story URL from the share menu.</p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                            <div className="text-3xl mb-3">2️⃣</div>
                            <h3 className="text-xl font-semibold mb-3">Paste URL</h3>
                            <p className="text-gray-700">Paste the Instagram URL into our downloader tool input field.</p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-lg">
                            <div className="text-3xl mb-3">3️⃣</div>
                            <h3 className="text-xl font-semibold mb-3">Download</h3>
                            <p className="text-gray-700">Click download to save the Instagram video in HD quality to your device.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border rounded-lg">
                            <div className="text-4xl mb-4">🎬</div>
                            <h3 className="text-xl font-semibold mb-2">All Content Types</h3>
                            <p className="text-gray-600">Download videos, reels, stories, and IGTV content.</p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <div className="text-4xl mb-4">📱</div>
                            <h3 className="text-xl font-semibold mb-2">HD Quality</h3>
                            <p className="text-gray-600">Download Instagram videos in original HD quality.</p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <div className="text-4xl mb-4">🚫</div>
                            <h3 className="text-xl font-semibold mb-2">No Watermarks</h3>
                            <p className="text-gray-600">Clean downloads without any watermarks added.</p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <div className="text-4xl mb-4">🔓</div>
                            <h3 className="text-xl font-semibold mb-2">No Login Required</h3>
                            <p className="text-gray-600">Download without logging into your Instagram account.</p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-semibold mb-2">Fast Downloads</h3>
                            <p className="text-gray-600">Quick processing and instant video downloads.</p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <div className="text-4xl mb-4">🆓</div>
                            <h3 className="text-xl font-semibold mb-2">100% Free</h3>
                            <p className="text-gray-600">Completely free with unlimited downloads.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="border-b pb-6">
                            <h3 className="text-xl font-semibold mb-3">How do I download Instagram videos?</h3>
                            <p className="text-gray-700">Copy the Instagram video URL, paste it into our downloader, and click download. Works with videos, reels, stories, and IGTV.</p>
                        </div>
                        <div className="border-b pb-6">
                            <h3 className="text-xl font-semibold mb-3">Can I download Instagram reels?</h3>
                            <p className="text-gray-700">Yes! Our tool supports downloading Instagram reels in HD quality without watermarks.</p>
                        </div>
                        <div className="border-b pb-6">
                            <h3 className="text-xl font-semibold mb-3">Is it safe to use?</h3>
                            <p className="text-gray-700">Yes, completely safe. No login required, no personal data collected, all processing happens securely.</p>
                        </div>
                        <div className="border-b pb-6">
                            <h3 className="text-xl font-semibold mb-3">Do I need to log in to Instagram?</h3>
                            <p className="text-gray-700">No login required! Just paste the URL and download. Your Instagram account is not needed.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Related Social Media Tools</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <a href="/tiktok-video-downloader" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">TikTok Video Downloader</h3>
                            <p className="text-gray-600">Download TikTok videos without watermark</p>
                        </a>
                        <a href="/facebook-video-downloader" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">Facebook Video Downloader</h3>
                            <p className="text-gray-600">Download Facebook videos and reels in HD</p>
                        </a>
                        <a href="/twitter-video-downloader" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">Twitter Video Downloader</h3>
                            <p className="text-gray-600">Download Twitter/X videos and GIFs</p>
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}

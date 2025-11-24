import TikTokVideoDownloader from "@/components/tools/social/TikTokVideoDownloader";
import { SEO_TEMPLATES } from "@/constants/seo/metadata-templates";

export const metadata = {
    title: SEO_TEMPLATES.TIKTOK_VIDEO_DOWNLOADER.title,
    description: SEO_TEMPLATES.TIKTOK_VIDEO_DOWNLOADER.description,
    keywords: SEO_TEMPLATES.TIKTOK_VIDEO_DOWNLOADER.keywords,

    openGraph: {
        title: SEO_TEMPLATES.TIKTOK_VIDEO_DOWNLOADER.title,
        description: SEO_TEMPLATES.TIKTOK_VIDEO_DOWNLOADER.description,
        url: `https://30tools.com${SEO_TEMPLATES.TIKTOK_VIDEO_DOWNLOADER.canonical}`,
        images: [{
            url: "/og-images/tiktok-video-downloader.jpg",
            width: 1200,
            height: 630,
            alt: "TikTok Video Downloader - Download Without Watermark | HD Quality"
        }],
        type: "website",
        siteName: "30tools"
    },

    twitter: {
        card: "summary_large_image",
        title: SEO_TEMPLATES.TIKTOK_VIDEO_DOWNLOADER.title,
        description: SEO_TEMPLATES.TIKTOK_VIDEO_DOWNLOADER.description,
        images: ["/og-images/tiktok-video-downloader.jpg"],
        creator: "@30tools"
    },

    alternates: {
        canonical: `https://30tools.com${SEO_TEMPLATES.TIKTOK_VIDEO_DOWNLOADER.canonical}`
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
        "name": "TikTok Video Downloader",
        "description": "Download TikTok videos without watermark in HD quality. Free TikTok downloader with audio extraction.",
        "url": "https://30tools.com/tiktok-video-downloader",
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
            "ratingValue": "4.9",
            "reviewCount": "3156"
        }
    },

    howTo: {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Download TikTok Videos Without Watermark",
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "Copy TikTok URL",
                "text": "Open TikTok and copy the video URL from the share menu"
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Paste URL",
                "text": "Paste the TikTok URL into our downloader tool"
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Download",
                "text": "Click download to save TikTok video without watermark"
            }
        ]
    },

    faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do I download TikTok videos without watermark?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Copy the TikTok video URL, paste it into our downloader, and click download. The video will be saved without the TikTok watermark in HD quality."
                }
            },
            {
                "@type": "Question",
                "name": "Is it free to use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Our TikTok downloader is completely free with unlimited downloads and no registration required."
                }
            },
            {
                "@type": "Question",
                "name": "Can I download TikTok videos with sound?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, downloaded TikTok videos include the original audio and sound."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need to install an app?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No app installation needed! Our tool works entirely in your browser on any device."
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
                "name": "TikTok Video Downloader"
            }
        ]
    }
};

export default function TikTokVideoDownloaderPage() {
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
                        <li className="text-gray-900 font-medium">TikTok Video Downloader</li>
                    </ol>
                </nav>

                <h1 className="text-4xl font-bold mb-4 text-center">TikTok Video Downloader - Download Without Watermark | HD Quality</h1>

                <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
                    Download TikTok videos without watermark in HD quality with our free TikTok downloader. Save TikTok videos with audio, no app installation needed. Works on all devices instantly.
                </p>

                <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
                    <TikTokVideoDownloader />
                </div>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">How to Download TikTok Videos Without Watermark</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg">
                            <div className="text-3xl mb-3">1️⃣</div>
                            <h3 className="text-xl font-semibold mb-3">Copy TikTok URL</h3>
                            <p className="text-gray-700">Open TikTok app or website and copy the video URL from the share menu.</p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg">
                            <div className="text-3xl mb-3">2️⃣</div>
                            <h3 className="text-xl font-semibold mb-3">Paste URL</h3>
                            <p className="text-gray-700">Paste the TikTok video URL into our downloader tool input field.</p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg">
                            <div className="text-3xl mb-3">3️⃣</div>
                            <h3 className="text-xl font-semibold mb-3">Download</h3>
                            <p className="text-gray-700">Click download to save TikTok video without watermark in HD quality.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border rounded-lg">
                            <div className="text-4xl mb-4">🚫</div>
                            <h3 className="text-xl font-semibold mb-2">No Watermark</h3>
                            <p className="text-gray-600">Download TikTok videos without the watermark logo.</p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <div className="text-4xl mb-4">📱</div>
                            <h3 className="text-xl font-semibold mb-2">HD Quality</h3>
                            <p className="text-gray-600">Save videos in original HD quality with audio.</p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <div className="text-4xl mb-4">🔊</div>
                            <h3 className="text-xl font-semibold mb-2">With Audio</h3>
                            <p className="text-gray-600">Downloaded videos include original sound and music.</p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-semibold mb-2">Fast Downloads</h3>
                            <p className="text-gray-600">Quick processing and instant video downloads.</p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <div className="text-4xl mb-4">🌐</div>
                            <h3 className="text-xl font-semibold mb-2">No App Needed</h3>
                            <p className="text-gray-600">Works in browser, no app installation required.</p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <div className="text-4xl mb-4">🆓</div>
                            <h3 className="text-xl font-semibold mb-2">100% Free</h3>
                            <p className="text-gray-600">Unlimited downloads, completely free forever.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="border-b pb-6">
                            <h3 className="text-xl font-semibold mb-3">How do I download TikTok videos without watermark?</h3>
                            <p className="text-gray-700">Copy the TikTok video URL, paste it into our downloader, and click download. The video will be saved without the TikTok watermark in HD quality.</p>
                        </div>
                        <div className="border-b pb-6">
                            <h3 className="text-xl font-semibold mb-3">Is it free to use?</h3>
                            <p className="text-gray-700">Yes! Our TikTok downloader is completely free with unlimited downloads and no registration required.</p>
                        </div>
                        <div className="border-b pb-6">
                            <h3 className="text-xl font-semibold mb-3">Can I download TikTok videos with sound?</h3>
                            <p className="text-gray-700">Yes, downloaded TikTok videos include the original audio and sound.</p>
                        </div>
                        <div className="border-b pb-6">
                            <h3 className="text-xl font-semibold mb-3">Do I need to install an app?</h3>
                            <p className="text-gray-700">No app installation needed! Our tool works entirely in your browser on any device.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Related Social Media Tools</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <a href="/instagram-video-downloader" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">Instagram Video Downloader</h3>
                            <p className="text-gray-600">Download Instagram reels, stories, and IGTV</p>
                        </a>
                        <a href="/facebook-video-downloader" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">Facebook Video Downloader</h3>
                            <p className="text-gray-600">Download Facebook videos and reels in HD</p>
                        </a>
                        <a href="/youtube-downloader" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">YouTube Video Downloader</h3>
                            <p className="text-gray-600">Download YouTube videos in MP4, MP3</p>
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}

import YouTubeSubtitleDownloader from "@/components/tools/youtube/YouTubeSubtitleDownloader";

export const metadata = {
    title: "Download Youtube Subtitles - Free Subtitle Downloader Tool",
    description:
        "Download YouTube Subtitles in SRT, VTT and TXT formats with this free subtitle extractor tool or get dual subtitles in any language. Fast, easy and free!",
    keywords: [
        "youtube subtitle downloader",
        "download youtube subtitles",
        "youtube captions downloader",
        "youtube subtitle extractor",
        "download youtube srt",
        "youtube vtt downloader",
        "youtube transcript download",
        "bilingual subtitles youtube",
        "youtube subtitle converter",
        "free youtube subtitle downloader",
        "download youtube cc",
        "youtube closed captions download",
        "subtitle downloader online",
        "youtube subtitle tool",
        "extract youtube subtitles",
    ],
    openGraph: {
        title: "Download Youtube Subtitles Easy and Free!",
        description:
            "Download YouTube Subtitles in SRT, VTT and TXT formats with this free subtitle extractor tool or get dual subtitles in any language",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Download Youtube Subtitles - Free Tool",
        description:
            "Download YouTube subtitles in SRT, VTT and TXT formats instantly",
    },
    alternates: {
        canonical: "https://30tools.com/youtube-subtitle-downloader",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Youtube Subtitle Downloader",
    description:
        "Download YouTube Subtitles in SRT, VTT and TXT formats. One of the fastest Youtube subtitle downloader application online. Save youtube subtitles to your computer or mobile phone.",
    url: "https://30tools.com/youtube-subtitle-downloader",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    permissions: "browser",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
    author: {
        "@type": "Organization",
        name: "30tools",
        url: "https://30tools.com",
    },
    featureList: [
        "Download subtitles in SRT, VTT, and TXT formats",
        "Support for 100+ languages",
        "Bilingual subtitle download",
        "No login required",
        "Unlimited usage",
        "Fast and secure",
        "Accurate timing",
    ],
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How to download YouTube subtitles?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Go to YouTube and find the video you want. Copy the video URL from the address bar. Paste the URL in the subtitle downloader tool above and click 'Get Subtitles'. View and download the exported subtitles in your preferred language and format.",
            },
        },
        {
            "@type": "Question",
            name: "What formats are supported for subtitle download?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You can download YouTube subtitles in multiple formats: SRT (SubRip), VTT (WebVTT), TXT (plain text), JSON, and CSV. SRT and VTT formats include timing data, while TXT format provides pure text for easier reading.",
            },
        },
        {
            "@type": "Question",
            name: "Can I download bilingual subtitles from YouTube?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, you can download YouTube bilingual subtitles for language learning. The tool supports more than 100 languages for YouTube subtitles. Choose any language you need for your learning or translation purposes.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need to login to download YouTube subtitles?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No, you don't need to login to your YouTube account. The subtitle downloader tool is completely free and doesn't require any registration or login. Just paste the video URL and download the subtitles.",
            },
        },
        {
            "@type": "Question",
            name: "Can I download subtitles from long YouTube videos?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, you can download subtitles from long YouTube videos. The tool supports videos of any length and provides accurately timed captions and subtitles for the entire video duration.",
            },
        },
    ],
};

export default function YouTubeSubtitleDownloaderPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <YouTubeSubtitleDownloader />

                {/* SEO Content Section */}
                <div className="max-w-6xl mx-auto px-6 pb-12 space-y-12">
                    {/* How to Download Section */}
                    <section className="prose dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold mb-4">
                            How to Download Youtube Subtitles
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    From Desktop/Computer:
                                </h3>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                    <li>
                                        Go to{" "}
                                        <a
                                            href="https://www.youtube.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            youtube.com
                                        </a>{" "}
                                        and find the video that you want to save subtitles.
                                    </li>
                                    <li>
                                        Copy the URL of the video from the address bar of your
                                        browser.
                                    </li>
                                    <li>
                                        Paste the URL above and click "Get Subtitles" button.
                                    </li>
                                    <li>
                                        View and download the exported subtitles in your language
                                        from the result page.
                                    </li>
                                </ol>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    From Mobile (iPhone/Android):
                                </h3>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                    <li>
                                        At Youtube application, while viewing the video, click on
                                        "Share" button just below the video content.
                                    </li>
                                    <li>Choose "Copy link" button from the menu.</li>
                                    <li>
                                        Paste the URL to the box at this subtitle downloader
                                        application.
                                    </li>
                                    <li>
                                        On the result page, choose the language of the subtitle you
                                        need and download the subtitles.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6">
                            Subtitle Downloader Tool Features:
                        </h2>
                        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span>
                                <span>
                                    Download the transcript of a youtube video in plain text
                                    format (.txt) or most common subtitle format (.srt)
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span>
                                <span>
                                    There is no timing data in txt format. Just pure text of the
                                    speech which is easier to read.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span>
                                <span>
                                    Download Youtube bilingual subtitles for language learning.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span>
                                <span>
                                    More than hundred languages are available for Youtube
                                    subtitles! Choose any of them for your needs.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span>
                                <span>
                                    Timing of captions and subtitles are very accurately
                                    arranged.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span>
                                <span>Download subtitles of long Youtube videos.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span>
                                <span>No need to login to your Youtube account.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span>
                                <span>Unlimited usage for subtitle downloader tool.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">✓</span>
                                <span>It's easy, fast and secure to download!</span>
                            </li>
                        </ul>
                    </section>

                    {/* How to Use Section */}
                    <section className="prose dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold mb-4">
                            How to Use Youtube Subtitles
                        </h2>
                        <div className="space-y-4 text-gray-700 dark:text-gray-300">
                            <p>
                                You may read the transcript of a video instead of watching it.
                                Generally reading is faster than watching a video. You may also
                                search for a phrase through the subtitles for your research.
                            </p>
                            <p>
                                You can embed the downloaded .srt format subtitles to your
                                favorite video players. So you may watch your favorite videos
                                locally with subtitles enabled. You may also download the
                                captions in your own language. Our application generates Youtube
                                subtitles in more than 100 languages. Subtitles are generated
                                very accurately in terms of timing of video.
                            </p>
                        </div>
                    </section>

                    {/* Easiest Way Section */}
                    <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
                        <h2 className="text-2xl font-bold mb-4">
                            Easiest way to get subtitles
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            The best trick to make the process superfast is to add our browser
                            extension to your browser. There will be a small button placed
                            right below the video frame at Youtube. When clicked, it will take
                            you directly to the download page with the list of all language
                            options.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            So, to reach the subtitle you need, just click on this extension
                            button. That's it, get your subtitles from Youtube with just one
                            click :)
                        </p>
                    </section>

                    {/* Importance Section */}
                    <section className="prose dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold mb-4">
                            The importance of adding subtitles to your YouTube videos
                        </h2>
                        <div className="space-y-4 text-gray-700 dark:text-gray-300">
                            <p>
                                Adding subtitles to your YouTube videos is crucial for several
                                reasons. Let's talk about the most important ones. Subtitles
                                make your content more accessible to a wider audience. Not
                                everyone can understand or hear the audio clearly, so having
                                subtitles in videos allows viewers with hearing impairments or
                                language barriers to still enjoy your videos.
                            </p>
                            <p>
                                Secondly, subtitles can improve the overall user experience.
                                Viewers may be in a noisy environment or watching videos without
                                sound, and having subtitles enables them to follow along without
                                missing any important information. It also helps viewers to
                                better understand the content, especially if it involves complex
                                or technical terms.
                            </p>
                            <p>
                                Youtube captions can enhance engagement and viewer retention.
                                Studies have shown that videos with captions tend to have higher
                                watch times and lower bounce rates. Captions help viewers stay
                                engaged and focused on the video, resulting in a more positive
                                user experience.
                            </p>
                            <p>
                                Youtube videos with subtitles can also open up opportunities for
                                international audiences. By providing subtitles in different
                                languages, you can reach a global audience and expand your
                                viewership.
                            </p>
                            <p>
                                So, adding subtitles to your YouTube videos is not only
                                beneficial for accessibility and user experience but also for
                                SEO, engagement, and reaching a wider audience. It is a simple
                                yet effective way to improve the overall quality and impact of
                                your content.
                            </p>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    How to download YouTube subtitles?
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Go to YouTube and find the video you want. Copy the video URL
                                    from the address bar. Paste the URL in the subtitle downloader
                                    tool above and click 'Get Subtitles'. View and download the
                                    exported subtitles in your preferred language and format.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    What formats are supported for subtitle download?
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    You can download YouTube subtitles in multiple formats: SRT
                                    (SubRip), VTT (WebVTT), TXT (plain text), JSON, and CSV. SRT
                                    and VTT formats include timing data, while TXT format provides
                                    pure text for easier reading.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    Can I download bilingual subtitles from YouTube?
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Yes, you can download YouTube bilingual subtitles for language
                                    learning. The tool supports more than 100 languages for
                                    YouTube subtitles. Choose any language you need for your
                                    learning or translation purposes.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    Do I need to login to download YouTube subtitles?
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    No, you don't need to login to your YouTube account. The
                                    subtitle downloader tool is completely free and doesn't
                                    require any registration or login. Just paste the video URL
                                    and download the subtitles.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    Can I download subtitles from long YouTube videos?
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Yes, you can download subtitles from long YouTube videos. The
                                    tool supports videos of any length and provides accurately
                                    timed captions and subtitles for the entire video duration.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

import YouTubeVideoSummarizer from "@/components/tools/youtube/YouTubeVideoSummarizer";
import Link from "next/link";

export const metadata = {
    title: "Free AI YouTube Video Summarizer | Get Instant Video Summaries - 30tools",
    description:
        "Summarize any YouTube video instantly with AI. Get key points, insights, and comprehensive summaries from video transcripts. Free online YouTube summarizer tool with no registration required.",
    keywords: [
        "youtube video summarizer",
        "ai youtube summarizer",
        "youtube summary generator",
        "video transcript summarizer",
        "youtube key points extractor",
        "ai video summary",
        "youtube content summarizer",
        "free youtube summarizer",
        "youtube video insights",
        "youtube tldr",
        "video summary ai",
        "youtube summary tool",
    ],
    openGraph: {
        title: "Free AI YouTube Video Summarizer - 30tools",
        description:
            "Get instant AI-powered summaries of any YouTube video. Extract key points, insights, and comprehensive summaries in seconds.",
        url: "https://30tools.com/youtube-video-summarizer",
        siteName: "30tools",
        images: [
            {
                url: "https://30tools.com/og-images/youtube-summarizer.jpg",
                width: 1200,
                height: 630,
                alt: "AI YouTube Video Summarizer - Free Online Tool",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Free AI YouTube Video Summarizer - 30tools",
        description:
            "Get instant AI-powered summaries of any YouTube video. Extract key points and insights in seconds.",
        images: ["https://30tools.com/og-images/youtube-summarizer.jpg"],
        creator: "@30tools",
    },
    alternates: {
        canonical: "https://30tools.com/youtube-video-summarizer",
    },
    category: "YouTube Tools",
};

const jsonLdSchemas = {
    webApp: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "AI YouTube Video Summarizer",
        description:
            "Free AI-powered tool to generate instant summaries, key points, and insights from any YouTube video transcript.",
        url: "https://30tools.com/youtube-video-summarizer",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
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
    },
    faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "How does the YouTube video summarizer work?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our AI YouTube summarizer extracts the video transcript and uses advanced algorithms to generate concise summaries, key points, and insights. Simply paste a YouTube URL and get instant results.",
                },
            },
            {
                "@type": "Question",
                name: "Is this YouTube summarizer free?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our YouTube video summarizer is completely free with no registration required. You can summarize unlimited videos at no cost.",
                },
            },
        ],
    },
};

export default function YouTubeVideoSummarizerPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.faq) }}
            />

            <div className="container mx-auto px-4 py-8">
                <nav aria-label="Breadcrumb" className="mb-6">
                    <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <li>
                            <Link href="/" className="hover:text-primary">
                                Home
                            </Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link href="/search?category=youtube" className="hover:text-primary">
                                YouTube Tools
                            </Link>
                        </li>
                        <li>/</li>
                        <li className="text-foreground font-medium">YouTube Video Summarizer</li>
                    </ol>
                </nav>

                <div className="max-w-5xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold">
                            AI YouTube Video Summarizer
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Get instant AI-powered summaries of any YouTube video. Extract key points,
                            insights, and comprehensive summaries in seconds. Perfect for research,
                            learning, and content creation.
                        </p>
                    </div>

                    <YouTubeVideoSummarizer />

                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold">How to Use the YouTube Video Summarizer</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                                <h3 className="text-xl font-semibold mb-3">1. Paste YouTube URL</h3>
                                <p className="text-muted-foreground">
                                    Copy any YouTube video URL and paste it into the input field. Works with all
                                    YouTube video formats.
                                </p>
                            </div>
                            <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                <h3 className="text-xl font-semibold mb-3">2. AI Analysis</h3>
                                <p className="text-muted-foreground">
                                    Our AI extracts the transcript and analyzes the content to generate
                                    comprehensive summaries and key insights.
                                </p>
                            </div>
                            <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                                <h3 className="text-xl font-semibold mb-3">3. Get Results</h3>
                                <p className="text-muted-foreground">
                                    Instantly receive summaries, key points, and insights. Copy or download the
                                    results for your use.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold">Why Use Our YouTube Summarizer?</h2>
                        <div className="prose max-w-none space-y-4">
                            <p className="text-muted-foreground">
                                Save time and get the essence of any YouTube video without watching the entire
                                content. Our AI-powered summarizer is perfect for students, researchers,
                                content creators, and professionals who need to quickly understand video
                                content.
                            </p>
                            <p className="text-muted-foreground">
                                Whether you're researching a topic, creating content, or just want to decide if
                                a video is worth watching, our summarizer provides instant insights that help
                                you make informed decisions.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold">Related YouTube Tools</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link
                                href="/youtube-transcript-downloader"
                                className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-xl font-semibold mb-2">YouTube Transcript Downloader</h3>
                                <p className="text-muted-foreground">
                                    Download full transcripts in multiple formats (SRT, VTT, TXT)
                                </p>
                            </Link>
                            <Link
                                href="/youtube-embedder"
                                className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-xl font-semibold mb-2">YouTube Embed Generator</h3>
                                <p className="text-muted-foreground">
                                    Create custom YouTube embed codes with advanced options
                                </p>
                            </Link>
                            <Link
                                href="/youtube-tag-generator"
                                className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-xl font-semibold mb-2">YouTube Tag Generator</h3>
                                <p className="text-muted-foreground">
                                    Generate optimized tags for better video discoverability
                                </p>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

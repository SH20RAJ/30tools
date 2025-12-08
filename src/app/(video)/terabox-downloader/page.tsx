import { SimpleTeraboxPlayer } from "@/components/tools/video/SimpleTeraboxPlayer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terabox Downloader | Download & Watch Terabox Videos Online",
    description:
        "Free Terabox downloader and player. Watch and download videos from Terabox links instantly without registration. Support for full screen and high quality.",
    keywords: [
        "terabox downloader",
        "terabox video downloader",
        "download terabox videos",
        "terabox link downloader",
        "terabox to mp4",
        "save terabox video",
        "online terabox viewer",
    ].join(", "),
    openGraph: {
        title: "Terabox Downloader | Free Online Video Player",
        description:
            "The best free tool to download and watch Terabox videos online. Simply paste your link and enjoy instant playback.",
        type: "website",
        url: "https://30tools.com/terabox-downloader",
    },
    alternates: {
        canonical: "/terabox-downloader",
    },
};

export default function TeraboxDownloaderPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Terabox Downloader",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
        description: "Download and watch Terabox videos directly in your browser without any app.",
        featureList: "Video Playback, Fullscreen Support, Instant Loading, No Ads",
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                        Terabox Downloader
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Paste your Terabox link below to instantly generate a watchable and downloadable video player.
                    </p>
                </div>

                <SimpleTeraboxPlayer />

                <div className="mt-16 max-w-3xl mx-auto prose dark:prose-invert">
                    <h2>How to use Terabox Downloader?</h2>
                    <ol>
                        <li>Copy the Terabox file link (e.g., specific video URL).</li>
                        <li>Paste the URL into the input box above.</li>
                        <li>Click the "Watch" button.</li>
                        <li>The video will load in a high-quality player with full-screen support.</li>
                    </ol>
                    <p>
                        Our tool allows you to bypass the need for the Terabox app and watch or download your content directly in the browser.
                    </p>
                </div>
            </div>
        </>
    );
}

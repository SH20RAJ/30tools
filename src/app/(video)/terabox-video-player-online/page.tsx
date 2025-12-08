import { SimpleTeraboxPlayer } from "@/components/tools/video/SimpleTeraboxPlayer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terabox Video Player Online | Watch Terabox Videos Without App",
    description:
        "Watch Terabox videos online in HD quality. No app download required. Using our free online Terabox player, stream your files directly in the browser.",
    keywords: [
        "terabox video player",
        "terabox player online",
        "watch terabox online",
        "stream terabox video",
        "terabox online viewer",
        "play terabox links",
        "no app terabox player",
    ].join(", "),
    openGraph: {
        title: "Terabox Video Player Online | Stream Without App",
        description:
            "Instant Terabox video player. Paste your link and watch videos in full screen without installing the Terabox application.",
        type: "website",
        url: "https://30tools.com/terabox-video-player-online",
    },
    alternates: {
        canonical: "/terabox-video-player-online",
    },
};

export default function TeraboxPlayerPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Terabox Video Player Online",
        applicationCategory: "MultimediaApplication",
        description: "Stream and watch Terabox videos online without downloading the official app.",
        featureList: "Online Streaming, HD Quality, Fullscreen Mode, Mobile Compatible",
        operatingSystem: "Any",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                        Terabox Video Player Online
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        The easiest way to watch Terabox videos online. Just paste the link and play.
                    </p>
                </div>

                <SimpleTeraboxPlayer />

                <div className="mt-16 max-w-3xl mx-auto prose dark:prose-invert">
                    <h2>Watch Terabox Videos Online</h2>
                    <p>
                        This tool provides a seamless experience for watching videos hosted on Terabox.
                        Often, viewing these videos requires installing an app or logging in.
                        With our <strong>Terabox Video Player Online</strong>, you can bypass these requirements.
                    </p>
                    <h3>Features</h3>
                    <ul>
                        <li><strong>No App Needed:</strong> Watch directly in your Chrome, Safari, or Firefox browser.</li>
                        <li><strong>Full Screen:</strong> Enjoy your content in immersive full-screen mode.</li>
                        <li><strong>Fast Loading:</strong> Optimized playback with minimal buffering.</li>
                        <li><strong>Secure:</strong> We do not store your links or personal data.</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

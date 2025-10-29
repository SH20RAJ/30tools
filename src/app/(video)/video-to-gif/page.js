import VideoToGifTool from '@/components/tools/video/VideoToGifTool';

export const metadata = {
    title: "Free Video to GIF Converter - Create Animated GIFs",
    description: "Convert videos to animated GIFs online for free. Trim videos, adjust frame rate, and create high-quality GIFs for social media. No watermarks, fast processing.",
    keywords: "video to gif converter, convert video to gif, animated gif maker, mp4 to gif, gif creator, video gif converter, make gif from video, create animated gif",
    alternates: {
        canonical: "https://30tools.com/video-to-gif"
    },
    openGraph: {
        title: "Free Video to GIF Converter Online - Create Animated GIFs",
        description: "Convert videos to animated GIFs online. Trim videos, adjust quality, and create perfect GIFs for social media sharing.",
        url: "https://30tools.com/video-to-gif",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/video-to-gif.jpg",
                width: 1200,
                height: 630,
                alt: "Free Video to GIF Converter Tool - 30tools"
            }
        ],
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Free Video to GIF Converter Online - Create Animated GIFs",
        description: "Convert videos to animated GIFs online. Perfect for social media, websites, and presentations.",
        images: ["/og-images/video-to-gif.jpg"],
        creator: '@30tools'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    }
};

export default function VideoToGifPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Video to GIF Converter - Free Animated GIF Maker",
        "description": "Convert videos to animated GIFs online with advanced trimming, frame rate control, and quality optimization. Perfect for social media and web use.",
        "url": "https://30tools.com/video-to-gif",
        "applicationCategory": "WebApplication",
        "operatingSystem": "Web Browser",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "creator": {
            "@type": "Organization",
            "name": "30tools",
            "url": "https://30tools.com"
        },
        "featureList": [
            "Video trimming controls",
            "Frame rate adjustment",
            "Quality optimization",
            "Size compression",
            "Preview before conversion",
            "Multiple video formats",
            "No watermarks",
            "Fast processing"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "reviewCount": "3421"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <VideoToGifTool />
        </>
    );
}

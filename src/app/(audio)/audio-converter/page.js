import AudioConverterTool from '@/components/tools/audio/AudioConverterTool';

export const metadata = {
    title: "Free Audio Converter Online - MP3, WAV, FLAC, AAC | 30tools",
    description: "Convert audio formats online for free. Transform MP3, WAV, FLAC, AAC, OGG, M4A files with quality control. Fast batch conversion, no watermarks.",
    keywords: "audio converter, mp3 converter, wav to mp3, flac converter, audio format converter, convert audio online, m4a to mp3, ogg converter",    alternates: {
        canonical: "https://30tools.com/audio-converter"
    },
    openGraph: {
        title: "Free Audio Converter Online - Convert MP3, WAV, FLAC",
        description: "Convert between audio formats with quality control. Support for MP3, WAV, FLAC, AAC, OGG, M4A. Batch processing, metadata preservation.",
        url: "https://30tools.com/audio-converter",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/audio-converter.jpg",
                width: 1200,
                height: 630,
                alt: "Free Audio Converter Tool - 30tools"
            }
        ],
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Free Audio Converter Online - Convert MP3, WAV, FLAC",
        description: "Convert audio formats with quality control. Batch processing and metadata preservation.",
        images: ["/og-images/audio-converter.jpg"],
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

export default function AudioConverterPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Audio Converter - Free Online Audio Format Converter",
        "description": "Convert audio files between popular formats including MP3, WAV, FLAC, AAC, OGG, and M4A. High-quality conversion with metadata preservation.",
        "url": "https://30tools.com/audio-converter",
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
            "Multiple audio format support",
            "Batch conversion",
            "Quality control settings",
            "Metadata preservation",
            "Custom bitrate settings",
            "Sample rate adjustment",
            "No file size limits",
            "Fast processing"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "reviewCount": "2341"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <AudioConverterTool />
        </>
    );
}

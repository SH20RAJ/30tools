import MarkdownToTextTool from '@/components/tools/text/MarkdownToTextTool';

export const metadata = {
    title: "Markdown to Text Converter - Convert MD to Plain Text Online",
    description: "Convert Markdown to plain text instantly. Remove all markdown formatting and get clean, readable text. Perfect for content creators and developers.",
    keywords: "markdown to text, md to text converter, markdown converter, remove markdown formatting, plain text converter, markdown parser, text converter, md converter",    alternates: {
        canonical: "https://30tools.com/markdown-to-text"
    },
    openGraph: {
        title: "Markdown to Text Converter - Convert MD to Plain Text",
        description: "Convert Markdown to plain text instantly. Remove all markdown formatting and get clean, readable text.",
        url: "https://30tools.com/markdown-to-text",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/markdown-to-text.jpg",
                width: 1200,
                height: 630,
                alt: "Markdown to Text Converter - 30tools"
            },
        ],
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Markdown to Text Converter - Convert MD to Plain Text",
        description: "Convert Markdown to plain text instantly. Remove all markdown formatting and get clean, readable text.",
        images: ["/og-images/markdown-to-text.jpg"],
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
    },
};

export default function MarkdownToTextPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Markdown to Text Converter",
        "description": "Convert Markdown to plain text instantly. Remove all markdown formatting and get clean, readable text.",
        "url": "https://30tools.com/markdown-to-text",
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
            "Convert Markdown to plain text",
            "Remove all formatting",
            "Preserve text structure",
            "Handle tables and lists",
            "Instant conversion",
            "Copy to clipboard",
            "Download as text file",
            "Privacy-first processing"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1856"
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <MarkdownToTextTool />
        </>
    );
}
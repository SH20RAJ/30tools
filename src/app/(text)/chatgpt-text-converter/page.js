import ChatGPTTextConverterTool from '@/components/tools/text/ChatGPTTextConverterTool';

export const metadata = {
    title: "ChatGPT Text to Normal Text Converter - 30tools",
    description: "Convert Process instantly with our free chatgpt text converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
    keywords: "chatgpt text converter, markdown to text, remove markdown formatting, clean ai text, chatgpt markdown converter, text formatter, ai text cleaner, remove bold italic, convert markdown",    alternates: {
        canonical: "https://30tools.com/chatgpt-text-converter"
    },
    openGraph: {
        title: "ChatGPT Text to Normal Text Converter - Remove Markdown",
        description: "Convert ChatGPT markdown text to clean, normal text. Remove formatting like bold, italic, headers, and lists instantly.",
        url: "https://30tools.com/chatgpt-text-converter",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/chatgpt-text-converter.jpg",
                width: 1200,
                height: 630,
                alt: "ChatGPT Text to Normal Text Converter - 30tools"
            }
        ],
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: "ChatGPT Text to Normal Text Converter - Remove Markdown",
        description: "Convert ChatGPT markdown text to clean, normal text. Remove formatting instantly.",
        images: ["/og-images/chatgpt-text-converter.jpg"],
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

export default function ChatGPTTextConverterPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "ChatGPT Text to Normal Text Converter",
        "description": "Convert ChatGPT markdown text to clean, normal text. Remove formatting like bold, italic, headers, and lists instantly.",
        "url": "https://30tools.com/chatgpt-text-converter",
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
            "Remove markdown formatting",
            "Convert bold and italic text",
            "Clean headers and lists",
            "Preserve text structure",
            "Instant conversion",
            "Copy to clipboard",
            "Mobile-friendly interface",
            "Privacy-first processing"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "1247"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ChatGPTTextConverterTool />
        </>
    );
}
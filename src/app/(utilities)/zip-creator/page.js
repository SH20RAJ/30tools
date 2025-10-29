import ZipCreatorTool from '@/components/tools/utilities/ZipCreatorTool';

export const metadata = {
    title: "Free ZIP File Creator - Compress Multiple Files",
    description: "Create ZIP files online for free. Compress multiple files and folders into a single archive. Fast, secure, and no file size limits.",
    keywords: "zip creator, create zip file, compress files, zip maker, online archive, file compression, zip multiple files, compress folder",    alternates: {
        canonical: "https://30tools.com/zip-creator"
    },
    openGraph: {
        title: "Free ZIP File Creator Online - Compress Multiple Files",
        description: "Create ZIP archives online by compressing multiple files and folders. Perfect for email attachments and file organization.",
        url: "https://30tools.com/zip-creator",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/zip-creator.jpg",
                width: 1200,
                height: 630,
                alt: "Free ZIP Creator Tool - 30tools"
            }
        ],
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Free ZIP File Creator Online - Compress Multiple Files",
        description: "Create ZIP archives online. Compress files and folders for easy sharing and storage.",
        images: ["/og-images/zip-creator.jpg"],
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

export default function ZipCreatorPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "ZIP Creator - Free Online File Compression Tool",
        "description": "Create ZIP files online by compressing multiple files and folders. Perfect for file organization, email attachments, and storage optimization.",
        "url": "https://30tools.com/zip-creator",
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
            "Multiple file compression",
            "Folder support",
            "Password protection",
            "Compression level control",
            "Drag and drop interface",
            "No file size limits",
            "Fast compression",
            "Batch processing"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.6",
            "reviewCount": "1847"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ZipCreatorTool />
        </>
    );
}

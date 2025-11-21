import LengthConverterTool from "@/components/tools/calculators/LengthConverterTool";

export const metadata = {
    title: "Length Converter - Convert Meters, Feet, Inches & More | 30tools",
    description:
        "Free length converter for meters, kilometers, feet, inches, yards, miles, and more. Convert length units instantly.",
    keywords: [
        "length converter",
        "distance converter",
        "meter to feet",
        "feet to meters",
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/length-converter",
    },

    openGraph: {
        title: "Length Converter - Convert Meters, Feet, Inches & More",
        description:
            "Convert meters, feet, inches, and other length units",
        url: "https://30tools.com/length-converter",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/length-converter.jpg",
                width: 1200,
                height: 630,
                alt: "Length Converter",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Length Converter - Convert Meters, Feet, Inches & More",
        description:
            "Convert length units",
        images: ["/og-images/length-converter.jpg"],
        creator: "@30tools",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Length Converter",
    description:
        "Convert meters, feet, inches, and other length units",
    url: "https://30tools.com/length-converter",
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
};

export default function LengthConverterPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">Length Converter</h1>
                        <p className="text-xl text-muted-foreground">
                            Convert meters, feet, inches, and other length units
                        </p>
                    </div>

                    <LengthConverterTool />
                </div>
            </div>
        </>
    );
}

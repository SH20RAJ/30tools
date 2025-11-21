import WeightConverterTool from "@/components/tools/calculators/WeightConverterTool";

export const metadata = {
    title: "Weight Converter - Convert Kilograms, Pounds, Ounces & More | 30tools",
    description:
        "Free weight converter for kilograms, pounds, ounces, grams, tons, and more. Convert weight units instantly.",
    keywords: [
        "weight converter",
        "mass converter",
        "kg to lbs",
        "pounds to kg",
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/weight-converter",
    },

    openGraph: {
        title: "Weight Converter - Convert Kilograms, Pounds, Ounces & More",
        description:
            "Convert kilograms, pounds, ounces, and other weights",
        url: "https://30tools.com/weight-converter",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/weight-converter.jpg",
                width: 1200,
                height: 630,
                alt: "Weight Converter",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Weight Converter - Convert Kilograms, Pounds, Ounces & More",
        description:
            "Convert weight units",
        images: ["/og-images/weight-converter.jpg"],
        creator: "@30tools",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Weight Converter",
    description:
        "Convert kilograms, pounds, ounces, and other weights",
    url: "https://30tools.com/weight-converter",
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

export default function WeightConverterPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">Weight Converter</h1>
                        <p className="text-xl text-muted-foreground">
                            Convert kilograms, pounds, ounces, and other weights
                        </p>
                    </div>

                    <WeightConverterTool />
                </div>
            </div>
        </>
    );
}

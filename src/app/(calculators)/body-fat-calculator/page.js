import BodyFatCalculatorTool from "@/components/tools/calculators/BodyFatCalculatorTool";

export const metadata = {
    title: "Body Fat Calculator - Calculate Body Fat Percentage | 30tools",
    description:
        "Free body fat calculator using Navy Method. Calculate body fat percentage based on measurements for accurate health assessment.",
    keywords: [
        "body fat calculator",
        "body fat percentage calculator",
        "navy method body fat",
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/body-fat-calculator",
    },

    openGraph: {
        title: "Body Fat Calculator - Calculate Body Fat Percentage",
        description:
            "Calculate body fat percentage using measurements",
        url: "https://30tools.com/body-fat-calculator",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/body-fat-calculator.jpg",
                width: 1200,
                height: 630,
                alt: "Body Fat Calculator",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Body Fat Calculator - Calculate Body Fat Percentage",
        description:
            "Calculate body fat percentage",
        images: ["/og-images/body-fat-calculator.jpg"],
        creator: "@30tools",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Body Fat Calculator",
    description:
        "Calculate body fat percentage using measurements",
    url: "https://30tools.com/body-fat-calculator",
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

export default function BodyFatCalculatorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">Body Fat Calculator</h1>
                        <p className="text-xl text-muted-foreground">
                            Calculate body fat percentage using measurements
                        </p>
                    </div>

                    <BodyFatCalculatorTool />
                </div>
            </div>
        </>
    );
}

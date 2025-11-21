import HeartRateCalculatorTool from "@/components/tools/calculators/HeartRateCalculatorTool";

export const metadata = {
    title: "Heart Rate Calculator - Calculate Target Heart Rate Zones | 30tools",
    description:
        "Free heart rate calculator to determine target heart rate zones for different exercise intensities based on age and resting heart rate.",
    keywords: [
        "heart rate calculator",
        "target heart rate calculator",
        "heart rate zones",
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/heart-rate-calculator",
    },

    openGraph: {
        title: "Heart Rate Calculator - Calculate Target Heart Rate Zones",
        description:
            "Calculate target heart rate zones for exercise",
        url: "https://30tools.com/heart-rate-calculator",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/heart-rate-calculator.jpg",
                width: 1200,
                height: 630,
                alt: "Heart Rate Calculator",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Heart Rate Calculator - Calculate Target Heart Rate Zones",
        description:
            "Calculate target heart rate zones",
        images: ["/og-images/heart-rate-calculator.jpg"],
        creator: "@30tools",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Heart Rate Calculator",
    description:
        "Calculate target heart rate zones for exercise",
    url: "https://30tools.com/heart-rate-calculator",
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

export default function HeartRateCalculatorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">Heart Rate Calculator</h1>
                        <p className="text-xl text-muted-foreground">
                            Calculate target heart rate zones for exercise
                        </p>
                    </div>

                    <HeartRateCalculatorTool />
                </div>
            </div>
        </>
    );
}

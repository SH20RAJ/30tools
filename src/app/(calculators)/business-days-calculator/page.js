import BusinessDaysCalculatorTool from "@/components/tools/calculators/BusinessDaysCalculatorTool";

export const metadata = {
    title: "Business Days Calculator - Calculate Working Days | 30tools",
    description:
        "Free business days calculator to calculate working days between dates excluding weekends and holidays. Perfect for project planning.",
    keywords: [
        "business days calculator",
        "working days calculator",
        "weekday calculator",
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/business-days-calculator",
    },

    openGraph: {
        title: "Business Days Calculator - Calculate Working Days",
        description:
            "Calculate working days excluding weekends and holidays",
        url: "https://30tools.com/business-days-calculator",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/business-days-calculator.jpg",
                width: 1200,
                height: 630,
                alt: "Business Days Calculator",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Business Days Calculator - Calculate Working Days",
        description:
            "Calculate working days",
        images: ["/og-images/business-days-calculator.jpg"],
        creator: "@30tools",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Business Days Calculator",
    description:
        "Calculate working days excluding weekends and holidays",
    url: "https://30tools.com/business-days-calculator",
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

export default function BusinessDaysCalculatorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">Business Days Calculator</h1>
                        <p className="text-xl text-muted-foreground">
                            Calculate working days excluding weekends and holidays
                        </p>
                    </div>

                    <BusinessDaysCalculatorTool />
                </div>
            </div>
        </>
    );
}

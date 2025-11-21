import DateCalculatorTool from "@/components/tools/calculators/DateCalculatorTool";

export const metadata = {
    title: "Date Calculator - Calculate Days Between Dates | 30tools",
    description:
        "Free date calculator to calculate days between dates, add/subtract days from dates, and find specific dates. Easy date math.",
    keywords: [
        "date calculator",
        "days between dates",
        "date difference calculator",
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/date-calculator",
    },

    openGraph: {
        title: "Date Calculator - Calculate Days Between Dates",
        description:
            "Calculate days between dates and add/subtract days",
        url: "https://30tools.com/date-calculator",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/date-calculator.jpg",
                width: 1200,
                height: 630,
                alt: "Date Calculator",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Date Calculator - Calculate Days Between Dates",
        description:
            "Calculate days between dates",
        images: ["/og-images/date-calculator.jpg"],
        creator: "@30tools",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Date Calculator",
    description:
        "Calculate days between dates and add/subtract days",
    url: "https://30tools.com/date-calculator",
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

export default function DateCalculatorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">Date Calculator</h1>
                        <p className="text-xl text-muted-foreground">
                            Calculate days between dates and add/subtract days
                        </p>
                    </div>

                    <DateCalculatorTool />
                </div>
            </div>
        </>
    );
}

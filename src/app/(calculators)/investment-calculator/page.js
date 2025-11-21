import InvestmentCalculatorTool from "@/components/tools/calculators/InvestmentCalculatorTool";

export const metadata = {
    title: "Investment Calculator - Calculate Returns & Growth | 30tools",
    description:
        "Free investment calculator to calculate returns, growth, and future value with regular contributions. Plan your investment strategy with accurate projections.",
    keywords: [
        "investment calculator",
        "investment growth calculator",
        "ROI calculator",
        "compound investment calculator",
        "retirement investment calculator",
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/investment-calculator",
    },

    openGraph: {
        title: "Investment Calculator - Calculate Returns & Growth",
        description:
            "Calculate investment returns and growth with regular contributions.",
        url: "https://30tools.com/investment-calculator",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/investment-calculator.jpg",
                width: 1200,
                height: 630,
                alt: "Investment Calculator",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Investment Calculator - Calculate Returns & Growth",
        description:
            "Calculate investment returns and growth.",
        images: ["/og-images/investment-calculator.jpg"],
        creator: "@30tools",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Investment Calculator",
    description:
        "Calculate investment returns and growth over time with regular contributions",
    url: "https://30tools.com/investment-calculator",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    permissions: "browser",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
    featureList: [
        "Calculate future investment value",
        "Monthly contribution support",
        "ROI calculation",
        "Total earnings display",
    ],
    author: {
        "@type": "Organization",
        name: "30tools",
        url: "https://30tools.com",
    },
};

export default function InvestmentCalculatorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">Investment Calculator</h1>
                        <p className="text-xl text-muted-foreground">
                            Calculate investment returns and growth over time
                        </p>
                    </div>

                    <InvestmentCalculatorTool />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">
                                How Investment Growth Works
                            </h2>
                            <p className="text-muted-foreground mb-4">
                                Your investments grow through compound returns. Regular monthly contributions
                                combined with market returns can significantly increase your wealth over time.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        📈 Compound Growth
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Earn returns on your returns, leading to exponential growth
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        💰 Regular Contributions
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Monthly investments amplify your total returns over time
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

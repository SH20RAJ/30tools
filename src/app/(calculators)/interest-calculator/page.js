import InterestCalculatorTool from "@/components/tools/calculators/InterestCalculatorTool";

export const metadata = {
    title: "Interest Calculator - Simple & Compound Interest Calculator | 30tools",
    description:
        "Free interest calculator for simple and compound interest calculations. Calculate interest earned on investments and savings with multiple compounding frequencies.",
    keywords: [
        "interest calculator",
        "compound interest calculator",
        "simple interest calculator",
        "investment interest calculator",
        "savings interest calculator",
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/interest-calculator",
    },

    openGraph: {
        title: "Interest Calculator - Simple & Compound Interest",
        description:
            "Calculate simple and compound interest on investments and savings.",
        url: "https://30tools.com/interest-calculator",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/interest-calculator.jpg",
                width: 1200,
                height: 630,
                alt: "Interest Calculator",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Interest Calculator - Simple & Compound Interest",
        description:
            "Calculate simple and compound interest on investments.",
        images: ["/og-images/interest-calculator.jpg"],
        creator: "@30tools",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Interest Calculator",
    description:
        "Calculate simple and compound interest with various compounding frequencies",
    url: "https://30tools.com/interest-calculator",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    permissions: "browser",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
    featureList: [
        "Simple interest calculation",
        "Compound interest calculation",
        "Multiple compounding frequencies",
        "Interest and total amount display",
    ],
    author: {
        "@type": "Organization",
        name: "30tools",
        url: "https://30tools.com",
    },
};

export default function InterestCalculatorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">Interest Calculator</h1>
                        <p className="text-xl text-muted-foreground">
                            Calculate simple and compound interest on your investments
                        </p>
                    </div>

                    <InterestCalculatorTool />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">
                                Interest Types
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        📊 Simple Interest
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        Interest calculated only on the principal amount
                                    </p>
                                    <p className="text-xs font-mono bg-muted p-2 rounded">
                                        I = P × r × t
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        📈 Compound Interest
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        Interest calculated on principal plus accumulated interest
                                    </p>
                                    <p className="text-xs font-mono bg-muted p-2 rounded">
                                        A = P(1 + r/n)^(nt)
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

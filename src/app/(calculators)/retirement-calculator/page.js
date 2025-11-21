import RetirementCalculatorTool from "@/components/tools/calculators/RetirementCalculatorTool";

export const metadata = {
    title: "Retirement Calculator - Plan Your Retirement Savings | 30tools",
    description:
        "Free retirement calculator to plan your savings. Calculate how much you need to retire comfortably based on your goals and current savings.",
    keywords: [
        "retirement calculator",
        "retirement planning",
        "retirement savings calculator",
        "how much to retire",
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/retirement-calculator",
    },

    openGraph: {
        title: "Retirement Calculator - Plan Your Retirement Savings",
        description:
            "Plan your retirement savings and calculate future value",
        url: "https://30tools.com/retirement-calculator",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/retirement-calculator.jpg",
                width: 1200,
                height: 630,
                alt: "Retirement Calculator",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Retirement Calculator - Plan Your Retirement Savings",
        description:
            "Plan your retirement savings",
        images: ["/og-images/retirement-calculator.jpg"],
        creator: "@30tools",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Retirement Calculator",
    description:
        "Plan your retirement savings and calculate future value",
    url: "https://30tools.com/retirement-calculator",
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

export default function RetirementCalculatorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">Retirement Calculator</h1>
                        <p className="text-xl text-muted-foreground">
                            Plan your retirement savings and calculate future value
                        </p>
                    </div>

                    <RetirementCalculatorTool />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">
                                Retirement Planning Tips
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        🎯 Start Early
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        The earlier you start saving, the more time your money has to grow through compound returns.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        📊 Consistent Contributions
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Regular monthly contributions can significantly increase your retirement savings.
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

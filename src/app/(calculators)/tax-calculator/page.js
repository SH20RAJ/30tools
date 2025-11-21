import TaxCalculatorTool from "@/components/tools/calculators/TaxCalculatorTool";

export const metadata = {
    title: "Tax Calculator - Calculate Income Tax & Take-Home Pay | 30tools",
    description:
        "Free tax calculator to calculate income tax and take-home pay. Estimate your tax liability and net income after deductions.",
    keywords: [
        "tax calculator",
        "income tax calculator",
        "tax estimator",
        "take home pay calculator",
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/tax-calculator",
    },

    openGraph: {
        title: "Tax Calculator - Calculate Income Tax & Take-Home Pay",
        description:
            "Calculate income tax and take-home pay",
        url: "https://30tools.com/tax-calculator",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/tax-calculator.jpg",
                width: 1200,
                height: 630,
                alt: "Tax Calculator",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Tax Calculator - Calculate Income Tax & Take-Home Pay",
        description:
            "Calculate income tax",
        images: ["/og-images/tax-calculator.jpg"],
        creator: "@30tools",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Tax Calculator",
    description:
        "Calculate income tax and take-home pay",
    url: "https://30tools.com/tax-calculator",
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

export default function TaxCalculatorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">Tax Calculator</h1>
                        <p className="text-xl text-muted-foreground">
                            Calculate income tax and take-home pay
                        </p>
                    </div>

                    <TaxCalculatorTool />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">
                                Understanding Your Taxes
                            </h2>
                            <p className="text-muted-foreground">
                                Use this calculator to estimate your tax liability and net income.
                                Enter your gross income, deductions, and tax rate to see your take-home pay.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

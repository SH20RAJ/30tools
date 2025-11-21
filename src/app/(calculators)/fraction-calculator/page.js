import FractionCalculatorTool from "@/components/tools/calculators/FractionCalculatorTool";

export const metadata = {
    title: "Fraction Calculator - Add, Subtract, Multiply, Divide Fractions | 30tools",
    description:
        "Free fraction calculator to add, subtract, multiply, and divide fractions. Automatic simplification and mixed number conversion. Easy-to-use interface.",
    keywords: [
        "fraction calculator",
        "add fractions calculator",
        "subtract fractions",
        "multiply fractions",
        "divide fractions",
        "simplify fractions calculator",
        "fraction calculator with steps",
        "mixed number calculator",
        "fraction to decimal calculator",
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/fraction-calculator",
    },

    openGraph: {
        title: "Fraction Calculator - Add, Subtract, Multiply, Divide Fractions",
        description:
            "Free fraction calculator with automatic simplification and mixed number conversion.",
        url: "https://30tools.com/fraction-calculator",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/fraction-calculator.jpg",
                width: 1200,
                height: 630,
                alt: "Fraction Calculator",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Fraction Calculator - Add, Subtract, Multiply, Divide Fractions",
        description:
            "Free fraction calculator with automatic simplification.",
        images: ["/og-images/fraction-calculator.jpg"],
        creator: "@30tools",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Fraction Calculator",
    description:
        "Calculate fractions with automatic simplification and mixed number conversion",
    url: "https://30tools.com/fraction-calculator",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    permissions: "browser",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
    featureList: [
        "Add fractions",
        "Subtract fractions",
        "Multiply fractions",
        "Divide fractions",
        "Automatic simplification",
        "Mixed number conversion",
        "Decimal conversion",
    ],
    author: {
        "@type": "Organization",
        name: "30tools",
        url: "https://30tools.com",
    },
};

export default function FractionCalculatorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">Fraction Calculator</h1>
                        <p className="text-xl text-muted-foreground">
                            Add, subtract, multiply, and divide fractions with automatic simplification
                        </p>
                    </div>

                    <FractionCalculatorTool />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">
                                How to Use the Fraction Calculator
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        📝 Input Fractions
                                    </h3>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Enter the numerator (top number)</li>
                                        <li>• Enter the denominator (bottom number)</li>
                                        <li>• Enter both fractions to calculate</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        🔢 Calculate
                                    </h3>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Select operation (+, −, ×, ÷)</li>
                                        <li>• Click Calculate button</li>
                                        <li>• View simplified result instantly</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Features</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        ✨ Auto-Simplification
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Results are automatically simplified to lowest terms
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        🔄 Mixed Numbers
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Converts improper fractions to mixed numbers
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        💯 Decimal Form
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Shows decimal equivalent of the result
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

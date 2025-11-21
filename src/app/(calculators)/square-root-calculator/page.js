import SquareRootCalculatorTool from "@/components/tools/calculators/SquareRootCalculatorTool";

export const metadata = {
    title: "Square Root Calculator - Calculate √, ∛, and Nth Roots | 30tools",
    description:
        "Free square root calculator for calculating square roots, cube roots, and nth roots. Instant accurate results with verification. Perfect for students and professionals.",
    keywords: [
        "square root calculator",
        "cube root calculator",
        "nth root calculator",
        "root calculator online",
        "calculate square root",
        "radical calculator",
        "root finder",
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/square-root-calculator",
    },

    openGraph: {
        title: "Square Root Calculator - Calculate √, ∛, and Nth Roots",
        description:
            "Free calculator for square roots, cube roots, and nth roots with instant results.",
        url: "https://30tools.com/square-root-calculator",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/square-root-calculator.jpg",
                width: 1200,
                height: 630,
                alt: "Square Root Calculator",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Square Root Calculator - Calculate √, ∛, and Nth Roots",
        description:
            "Free calculator for square roots, cube roots, and nth roots.",
        images: ["/og-images/square-root-calculator.jpg"],
        creator: "@30tools",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Square Root Calculator",
    description:
        "Calculate square roots, cube roots, and nth roots with verification",
    url: "https://30tools.com/square-root-calculator",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    permissions: "browser",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
    featureList: [
        "Square root (√) calculations",
        "Cube root (∛) calculations",
        "4th root calculations",
        "Custom nth root calculations",
        "Result verification",
        "High precision output",
    ],
    author: {
        "@type": "Organization",
        name: "30tools",
        url: "https://30tools.com",
    },
};

export default function SquareRootCalculatorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">Square Root Calculator</h1>
                        <p className="text-xl text-muted-foreground">
                            Calculate square roots, cube roots, and nth roots instantly
                        </p>
                    </div>

                    <SquareRootCalculatorTool />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">
                                What is a Square Root?
                            </h2>
                            <p className="text-muted-foreground mb-4">
                                A square root of a number is a value that, when multiplied by itself, gives the original number.
                                For example, the square root of 16 is 4 because 4 × 4 = 16.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        √ Square Root
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        The most common root. √x² = x
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        ∛ Cube Root
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Third root. ∛x³ = x
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        ⁿ√ Nth Root
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        General root. ⁿ√xⁿ = x
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Common Uses</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        📐 Geometry
                                    </h3>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Finding side lengths of squares</li>
                                        <li>• Calculating distances</li>
                                        <li>• Area and volume calculations</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        🔬 Science
                                    </h3>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Physics formulas</li>
                                        <li>• Statistical calculations</li>
                                        <li>• Engineering problems</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

import AlgebraCalculatorTool from "@/components/tools/calculators/AlgebraCalculatorTool";

export const metadata = {
    title: "Algebra Calculator - Solve Linear & Quadratic Equations | 30tools",
    description:
        "Free algebra calculator to solve linear and quadratic equations with step-by-step solutions. Perfect for students learning algebra and mathematics.",
    keywords: [
        "algebra calculator",
        "equation solver",
        "linear equation solver",
        "quadratic equation calculator",
        "solve for x calculator",
        "algebra solver with steps",
        "math equation solver",
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/algebra-calculator",
    },

    openGraph: {
        title: "Algebra Calculator - Solve Linear & Quadratic Equations",
        description:
            "Free algebra calculator with step-by-step solutions for linear and quadratic equations.",
        url: "https://30tools.com/algebra-calculator",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/algebra-calculator.jpg",
                width: 1200,
                height: 630,
                alt: "Algebra Calculator",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Algebra Calculator - Solve Linear & Quadratic Equations",
        description:
            "Free algebra calculator with step-by-step solutions.",
        images: ["/og-images/algebra-calculator.jpg"],
        creator: "@30tools",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Algebra Calculator",
    description:
        "Solve linear and quadratic equations with step-by-step solutions",
    url: "https://30tools.com/algebra-calculator",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    permissions: "browser",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
    featureList: [
        "Solve linear equations (ax + b = 0)",
        "Solve quadratic equations (ax² + bx + c = 0)",
        "Step-by-step solutions",
        "Handle complex roots",
        "Discriminant calculation",
    ],
    author: {
        "@type": "Organization",
        name: "30tools",
        url: "https://30tools.com",
    },
};

export default function AlgebraCalculatorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">Algebra Calculator</h1>
                        <p className="text-xl text-muted-foreground">
                            Solve linear and quadratic equations with step-by-step solutions
                        </p>
                    </div>

                    <AlgebraCalculatorTool />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">
                                Supported Equations
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        📏 Linear Equations
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        Format: ax + b = 0
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Example: 3x + 6 = 0 → x = -2
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        📐 Quadratic Equations
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        Format: ax² + bx + c = 0
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Example: x² - 5x + 6 = 0 → x = 2 or x = 3
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">
                                Quadratic Formula
                            </h2>
                            <div className="bg-muted/50 p-4 rounded-lg text-center mb-4">
                                <p className="text-xl font-mono">x = (-b ± √(b² - 4ac)) / 2a</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div>
                                    <h3 className="font-medium mb-1 text-primary text-sm">
                                        Discriminant \u003e 0
                                    </h3>
                                    <p className="text-xs text-muted-foreground">Two real solutions</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1 text-primary text-sm">
                                        Discriminant = 0
                                    </h3>
                                    <p className="text-xs text-muted-foreground">One repeated solution</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1 text-primary text-sm">
                                        Discriminant \u003c 0
                                    </h3>
                                    <p className="text-xs text-muted-foreground">Complex solutions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

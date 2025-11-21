import ScientificCalculatorTool from "@/components/tools/calculators/ScientificCalculatorTool";

export const metadata = {
    title: "Scientific Calculator - Advanced Online Calculator with Functions | 30tools",
    description:
        "Free scientific calculator with trigonometric, logarithmic, and exponential functions. Perfect for students and professionals. Sin, cos, tan, log, ln, and more.",
    keywords: [
        "scientific calculator",
        "advanced calculator online",
        "trigonometric calculator",
        "math calculator scientific",
        "online scientific calculator free",
        "calculator with sin cos tan",
        "logarithmic calculator",
        "exponential calculator",
        "scientific calculator online",
        "free scientific calculator",
        "scientific calculator trigonometry",
        "scientific calculator logarithm",
        "scientific calculator factorial",
        "scientific calculator square root",
        "scientific calculator powers",
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/scientific-calculator",
    },

    openGraph: {
        title: "Scientific Calculator - Advanced Calculator with Functions",
        description:
            "Free scientific calculator with trigonometric, logarithmic, and exponential functions. Sin, cos, tan, log, ln, and more.",
        url: "https://30tools.com/scientific-calculator",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/scientific-calculator.jpg",
                width: 1200,
                height: 630,
                alt: "Scientific Calculator - Advanced Calculator",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Scientific Calculator - Advanced Calculator with Functions",
        description:
            "Free scientific calculator with trigonometric, logarithmic, and exponential functions.",
        images: ["/og-images/scientific-calculator.jpg"],
        creator: "@30tools",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Scientific Calculator",
    description:
        "Advanced scientific calculator with trigonometric, logarithmic, exponential, and statistical functions",
    url: "https://30tools.com/scientific-calculator",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    permissions: "browser",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
    featureList: [
        "Trigonometric functions (sin, cos, tan)",
        "Logarithmic functions (log, ln)",
        "Exponential functions",
        "Factorial calculations",
        "Power and root functions",
        "Angle mode toggle (degrees/radians)",
        "Memory functions",
        "Scientific notation support",
    ],
    author: {
        "@type": "Organization",
        name: "30tools",
        url: "https://30tools.com",
    },
};

export default function ScientificCalculatorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">Scientific Calculator</h1>
                        <p className="text-xl text-muted-foreground">
                            Advanced calculator with trigonometric, logarithmic, and exponential functions
                        </p>
                    </div>

                    <ScientificCalculatorTool />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">
                                Scientific Functions
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        🔬 Trigonometric
                                    </h3>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• <strong>sin:</strong> Sine function</li>
                                        <li>• <strong>cos:</strong> Cosine function</li>
                                        <li>• <strong>tan:</strong> Tangent function</li>
                                        <li>• Toggle between degrees and radians</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        📊 Logarithmic
                                    </h3>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• <strong>ln:</strong> Natural logarithm (base e)</li>
                                        <li>• <strong>log:</strong> Common logarithm (base 10)</li>
                                        <li>• <strong>e^x:</strong> Exponential function</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        ⚡ Advanced
                                    </h3>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• <strong>x²:</strong> Square</li>
                                        <li>• <strong>x^y:</strong> Power</li>
                                        <li>• <strong>√:</strong> Square root</li>
                                        <li>• <strong>x!:</strong> Factorial</li>
                                        <li>• <strong>1/x:</strong> Reciprocal</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        📐 Basic Operations
                                    </h3>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Enter numbers using the number pad</li>
                                        <li>• Select the operation you want to perform</li>
                                        <li>• Press equals (=) to calculate the result</li>
                                        <li>• Use AC to clear all calculations</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        🔧 Scientific Functions
                                    </h3>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Enter a number first</li>
                                        <li>• Click the function button (sin, cos, etc.)</li>
                                        <li>• Result is calculated immediately</li>
                                        <li>• Toggle DEG/RAD for angle mode</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Common Uses</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        🎓 Students
                                    </h3>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Trigonometry homework</li>
                                        <li>• Calculus problems</li>
                                        <li>• Physics calculations</li>
                                        <li>• Chemistry formulas</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">
                                        💼 Professionals
                                    </h3>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Engineering calculations</li>
                                        <li>• Scientific research</li>
                                        <li>• Data analysis</li>
                                        <li>• Technical design</li>
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

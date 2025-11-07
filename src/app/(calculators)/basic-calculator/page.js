import BasicCalculatorTool from '@/components/tools/calculators/BasicCalculatorTool';

export const metadata = {
    title: "Basic Calculator - Free Online Calculator | 30tools",
    description: "Free basic calculator for simple arithmetic operations. Add, subtract, multiply, divide with instant results. Large buttons, easy to use on desktop and mobile.",
    keywords: [
        // Primary high-volume keywords
        "basic calculator",
        "calculator online free",
        "simple calculator",
        "online calculator",
        "free calculator",
        "calculator",
        "math calculator",
        "arithmetic calculator",
        "basic calculator online",
        "calculator online",
        "web calculator",
        "internet calculator",
        "digital calculator",
        "electronic calculator",
        "calculator tool",
        "calculator app",
        "calculator widget",
        "calculator free",
        "calculator simple",
        "calculator basic",
        "calculator easy",
        "calculator large",
        "calculator big buttons",

        // Long-tail keywords for SEO ranking
        "basic calculator online free no download",
        "simple calculator large buttons easy use",
        "online calculator free instant results",
        "basic calculator addition subtraction multiplication division",
        "calculator online free no registration unlimited",
        "simple calculator for students homework",
        "basic calculator mobile friendly responsive",
        "online calculator with memory functions",
        "free calculator tool for quick calculations",
        "basic calculator percentage square root",
        "simple calculator clear display large numbers",
        "online calculator keyboard shortcuts support",
        "basic calculator for business office use",
        "calculator online free accurate reliable"
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/basic-calculator"
    },

  openGraph: {
    title: "Basic Calculator - Free Online Calculator | Instant Results",
    description: "Free basic calculator with instant accurate results. Process online calculator for students, professionals & everyone. Easy to use, mobile-friendly interface.",
    url: "https://30tools.com/basic-calculator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/basic-calculator.jpg",
        width: 1200,
        height: 630,
        alt: "Basic Calculator - Free Online Calculator | Instant Results"
      },
    ],
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Basic Calculator - Free Online Calculator | Instant Results",
    description: "Free basic calculator with instant accurate results. Process online calculator for students, professionals & everyone. Easy to use, mobile-friendly interface.",
    images: ["/og-images/basic-calculator.jpg"],
    creator: "@30tools"
  },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Basic Calculator",
    "description": "Free online basic calculator for simple arithmetic operations with large buttons and instant results",
    "url": "https://30tools.com/basic-calculator",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "permissions": "browser",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": [
        "Basic arithmetic operations",
        "Large, easy-to-use buttons",
        "Memory functions (M+, M-, MR, MC)",
        "Percentage calculations",
        "Square root function",
        "Clear and all-clear functions",
        "Keyboard support",
        "Mobile-friendly design"
    ],
    "author": {
        "@type": "Organization",
        "name": "30tools",
        "url": "https://30tools.com"
    },
};

export default function BasicCalculatorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">Basic Calculator</h1>
                        <p className="text-xl text-muted-foreground">
                            Simple, fast, and reliable calculator for everyday calculations
                        </p>
                    </div>

                    <BasicCalculatorTool />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Calculator Functions</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">🧮 Basic Operations</h3>
                                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                                        <li>• <strong>Addition (+):</strong> Add two or more numbers</li>
                                        <li>• <strong>Subtraction (-):</strong> Subtract one number from another</li>
                                        <li>• <strong>Multiplication (×):</strong> Multiply numbers together</li>
                                        <li>• <strong>Division (÷):</strong> Divide one number by another</li>
                                        <li>• <strong>Equals (=):</strong> Calculate and display result</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">🔧 Additional Functions</h3>
                                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                                        <li>• <strong>Percentage (%):</strong> Calculate percentages</li>
                                        <li>• <strong>Square Root (√):</strong> Find square root of numbers</li>
                                        <li>• <strong>Clear (C):</strong> Clear current entry</li>
                                        <li>• <strong>All Clear (AC):</strong> Clear all calculations</li>
                                        <li>• <strong>Memory:</strong> Store and recall numbers</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">How to Use the Calculator</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">1</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Enter Numbers</h3>
                                    <p className="text-sm text-muted-foreground">Click number buttons or use your keyboard to enter numbers</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">2</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Choose Operation</h3>
                                    <p className="text-sm text-muted-foreground">Select the operation you want to perform (+, -, ×, ÷)</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">3</span>
                                    </div>
                                    <h3 className="font-medium mb-2">Get Result</h3>
                                    <p className="text-sm text-muted-foreground">Press equals (=) to calculate and display the result</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Keyboard Shortcuts</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">⌨️ Number Keys</h3>
                                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                                        <li>• <strong>0-9:</strong> Enter numbers</li>
                                        <li>• <strong>. (period):</strong> Decimal point</li>
                                        <li>• <strong>Enter:</strong> Calculate result</li>
                                        <li>• <strong>Escape:</strong> Clear all</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">🔣 Operation Keys</h3>
                                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                                        <li>• <strong>+ (plus):</strong> Addition</li>
                                        <li>• <strong>- (minus):</strong> Subtraction</li>
                                        <li>• <strong>* (asterisk):</strong> Multiplication</li>
                                        <li>• <strong>/ (slash):</strong> Division</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Calculator Tips</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">💡 Usage Tips</h3>
                                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                                        <li>• Use parentheses for complex calculations</li>
                                        <li>• Double-check your entries before calculating</li>
                                        <li>• Use memory functions for repeated calculations</li>
                                        <li>• Clear the calculator between different problems</li>
                                        <li>• Round results appropriately for your needs</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">⚠️ Common Mistakes</h3>
                                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                                        <li>• Forgetting to clear previous calculations</li>
                                        <li>• Mixing up multiplication and addition signs</li>
                                        <li>• Not using proper order of operations</li>
                                        <li>• Entering decimal points incorrectly</li>
                                        <li>• Dividing by zero (undefined result)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">More Calculators</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <a
                                    href="/scientific-calculator"
                                    className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                                >
                                    <h3 className="font-semibold mb-2 group-hover:text-primary">🔬 Scientific Calculator</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Advanced calculator with scientific functions.
                                    </p>
                                    <span className="text-xs text-primary mt-2 inline-block">Calculate →</span>
                                </a>

                                <a
                                    href="/percentage-calculator"
                                    className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                                >
                                    <h3 className="font-semibold mb-2 group-hover:text-primary">📊 Percentage Calculator</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Calculate percentages, increases, and decreases.
                                    </p>
                                    <span className="text-xs text-primary mt-2 inline-block">Calculate →</span>
                                </a>

                                <a
                                    href="/fraction-calculator"
                                    className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                                >
                                    <h3 className="font-semibold mb-2 group-hover:text-primary">🔢 Fraction Calculator</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Add, subtract, multiply, and divide fractions.
                                    </p>
                                    <span className="text-xs text-primary mt-2 inline-block">Calculate →</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
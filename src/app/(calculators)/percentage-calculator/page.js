import PercentageCalculatorTool from '@/components/tools/calculators/PercentageCalculatorTool';

export const metadata = {
    title: "Percentage Calculator - Calculate Percentages Online Free | 30tools",
    description: "Free percentage calculator to find percentages, increases, decreases, and changes. Calculate discounts and percentages instantly.",
    keywords: [
        // Primary high-volume keywords
        "percentage calculator",
        "percentage calculator of marks",
        "percentage formula",
        "percentage calculator money",
        "percentage increase calculator",
        "percentage off calculator",
        "percentage change calculator",
        "how to calculate percentage of a number",
        "percentage calculator online",
        "percentage calculator free",
        "calculate percentage",
        "percent calculator",
        "percentage finder",
        "percentage calculator with steps",
        "percentage calculator discount",
        "percentage calculator grade",
        "percentage calculator tip",
        "percentage calculator tax",
        "percentage calculator profit",
        "percentage calculator loss",
        "percentage calculator cgpa",
        "percentage calculator marks out of total",
        "percentage calculator increase decrease",

        // Long-tail keywords for SEO ranking
        "percentage calculator online free no registration unlimited",
        "calculate percentage of marks obtained in exam",
        "percentage increase decrease calculator with formula",
        "percentage calculator for discount shopping sales",
        "percentage calculator money finance investment",
        "percentage change calculator before after values",
        "percentage calculator grade marks cgpa gpa",
        "percentage calculator tip restaurant bill splitting",
        "percentage calculator tax income sales vat",
        "percentage calculator profit loss business finance",
        "percentage calculator compound interest investment",
        "percentage calculator body fat weight loss",
        "percentage calculator population growth statistics",
        "percentage calculator survey results data analysis"
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/percentage-calculator"
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Percentage Calculator",
    "description": "Free online percentage calculator to calculate percentages, percentage increase/decrease, and percentage change",
    "url": "https://30tools.com/percentage-calculator",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "permissions": "browser",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": [
        "Calculate what is X% of Y",
        "Calculate percentage increase/decrease",
        "Calculate percentage change",
        "Calculate what percentage X is of Y",
        "Calculate percentage of marks",
        "Calculate discounts and tips",
        "Step-by-step calculations",
        "Multiple percentage formulas"
    ],
    "author": {
        "@type": "Organization",
        "name": "30tools",
        "url": "https://30tools.com"
    }
};

export default function PercentageCalculatorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">Percentage Calculator</h1>
                        <p className="text-xl text-muted-foreground">
                            Calculate percentages, increases, decreases, and changes instantly
                        </p>
                    </div>

                    <PercentageCalculatorTool />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">How to Use Percentage Calculator</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-blue-600">📊 Basic Percentage</h3>
                                    <p className="text-sm text-muted-foreground mb-2">What is X% of Y?</p>
                                    <p className="text-xs text-muted-foreground mb-4">Example: What is 25% of 200? Answer: 50</p>

                                    <h3 className="font-medium mb-2 text-blue-600">📈 Percentage Increase</h3>
                                    <p className="text-sm text-muted-foreground mb-2">Calculate percentage increase from old to new value</p>
                                    <p className="text-xs text-muted-foreground mb-4">Example: From 100 to 120 = 20% increase</p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-blue-600">📉 Percentage Decrease</h3>
                                    <p className="text-sm text-muted-foreground mb-2">Calculate percentage decrease from old to new value</p>
                                    <p className="text-xs text-muted-foreground mb-4">Example: From 100 to 80 = 20% decrease</p>

                                    <h3 className="font-medium mb-2 text-blue-600">🔍 Find Percentage</h3>
                                    <p className="text-sm text-muted-foreground mb-2">What percentage is X of Y?</p>
                                    <p className="text-xs text-muted-foreground mb-4">Example: What % is 25 of 100? Answer: 25%</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Common Percentage Calculations</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-green-600">🎓 Academic Use</h3>
                                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                                        <li>• Calculate exam marks percentage</li>
                                        <li>• Convert CGPA to percentage</li>
                                        <li>• Calculate grade percentages</li>
                                        <li>• Attendance percentage calculation</li>
                                        <li>• Assignment score percentages</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-purple-600">💰 Financial Use</h3>
                                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                                        <li>• Calculate discounts and sales</li>
                                        <li>• Calculate tips at restaurants</li>
                                        <li>• Calculate tax percentages</li>
                                        <li>• Calculate profit and loss</li>
                                        <li>• Calculate interest rates</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Percentage Formulas</h2>
                            <div className="space-y-4">
                                <div className="p-4 bg-blue-50 rounded-lg">
                                    <h3 className="font-medium mb-2">Basic Percentage Formula</h3>
                                    <p className="text-sm text-muted-foreground">Percentage = (Part / Whole) × 100</p>
                                </div>
                                <div className="p-4 bg-green-50 rounded-lg">
                                    <h3 className="font-medium mb-2">Percentage Increase Formula</h3>
                                    <p className="text-sm text-muted-foreground">% Increase = ((New Value - Old Value) / Old Value) × 100</p>
                                </div>
                                <div className="p-4 bg-red-50 rounded-lg">
                                    <h3 className="font-medium mb-2">Percentage Decrease Formula</h3>
                                    <p className="text-sm text-muted-foreground">% Decrease = ((Old Value - New Value) / Old Value) × 100</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">More Math Calculators</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <a
                                    href="/basic-calculator"
                                    className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                                >
                                    <h3 className="font-semibold mb-2 group-hover:text-primary">🧮 Basic Calculator</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Simple arithmetic calculator for everyday calculations.
                                    </p>
                                    <span className="text-xs text-primary mt-2 inline-block">Calculate →</span>
                                </a>

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
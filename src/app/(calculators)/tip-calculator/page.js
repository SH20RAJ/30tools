import TipCalculatorTool from '@/components/tools/calculators/TipCalculatorTool';

export const metadata = {
    title: "Tip Calculator - Calculate Tips and Split Bills Online Free | 30tools",
    description: "Free tip calculator to calculate tips for restaurants, delivery, and services. Split bills among multiple people and calculate individual amounts instantly.",
    keywords: [
        // Primary high-volume keywords
        "tip calculator",
        "tip calculator restaurant",
        "tip calculator app",
        "tip calculator percentage",
        "tip calculator split bill",
        "calculate tip",
        "restaurant tip calculator",
        "bill split calculator",
        "tip calculator online",
        "tip calculator free",
        "gratuity calculator",
        "service tip calculator",
        "delivery tip calculator",
        "tip calculator with tax",
        "tip calculator 15 percent",
        "tip calculator 20 percent",
        "tip calculator custom",
        "tip calculator round up",
        "tip calculator multiple people",
        "tip calculator group",
        "tip calculator party",
        "tip calculator dinner",
        "tip calculator lunch",

        // Long-tail keywords for SEO ranking
        "tip calculator restaurant bill splitting multiple people",
        "calculate tip percentage 15 20 25 percent options",
        "tip calculator with tax before after calculation",
        "restaurant tip calculator split bill evenly group",
        "tip calculator delivery food service gratuity",
        "tip calculator custom percentage amount options",
        "tip calculator round up down nearest dollar",
        "bill split calculator tip included per person",
        "tip calculator for good bad service quality",
        "tip calculator wedding party large group events",
        "tip calculator bartender server waiter waitress",
        "tip calculator hair salon spa beauty services",
        "tip calculator taxi uber lyft ride sharing",
        "tip calculator hotel housekeeping concierge services"
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/tip-calculator"
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Tip Calculator",
    "description": "Free online tip calculator to calculate tips for restaurants and services, split bills among multiple people",
    "url": "https://30tools.com/tip-calculator",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "permissions": "browser",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": [
        "Calculate tips by percentage",
        "Split bills among multiple people",
        "Calculate tip before or after tax",
        "Custom tip percentages",
        "Round up/down options",
        "Total per person calculation",
        "Service quality suggestions",
        "Multiple currency support"
    ],
    "author": {
        "@type": "Organization",
        "name": "30tools",
        "url": "https://30tools.com"
    }
};

export default function TipCalculatorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">Tip Calculator</h1>
                        <p className="text-xl text-muted-foreground">
                            Calculate tips and split bills for restaurants and services
                        </p>
                    </div>

                    <TipCalculatorTool />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Tipping Guidelines</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-green-600">🍽️ Restaurant Service</h3>
                                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                                        <li>• <strong>Excellent service:</strong> 20-25%</li>
                                        <li>• <strong>Good service:</strong> 18-20%</li>
                                        <li>• <strong>Average service:</strong> 15-18%</li>
                                        <li>• <strong>Poor service:</strong> 10-15%</li>
                                        <li>• <strong>Takeout:</strong> 10-15%</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-blue-600">🚗 Other Services</h3>
                                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                                        <li>• <strong>Taxi/Uber:</strong> 15-20%</li>
                                        <li>• <strong>Hair salon:</strong> 15-20%</li>
                                        <li>• <strong>Delivery:</strong> 15-20%</li>
                                        <li>• <strong>Hotel housekeeping:</strong> $2-5 per day</li>
                                        <li>• <strong>Bartender:</strong> $1-2 per drink</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Tipping Etiquette</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-purple-600">✅ Good Practices</h3>
                                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                                        <li>• Tip based on pre-tax amount</li>
                                        <li>• Consider service quality</li>
                                        <li>• Tip in cash when possible</li>
                                        <li>• Be generous for exceptional service</li>
                                        <li>• Round up to nearest dollar</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-purple-600">❌ Things to Avoid</h3>
                                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                                        <li>• Don't tip on tax amount</li>
                                        <li>• Don't over-tip to show off</li>
                                        <li>• Don't under-tip for minor issues</li>
                                        <li>• Don't forget about service charges</li>
                                        <li>• Don't tip twice (check receipt)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">More Financial Calculators</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                                    href="/tax-calculator"
                                    className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                                >
                                    <h3 className="font-semibold mb-2 group-hover:text-primary">💰 Tax Calculator</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Calculate income tax and take-home pay.
                                    </p>
                                    <span className="text-xs text-primary mt-2 inline-block">Calculate →</span>
                                </a>

                                <a
                                    href="/discount-calculator"
                                    className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                                >
                                    <h3 className="font-semibold mb-2 group-hover:text-primary">🏷️ Discount Calculator</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Calculate discounts and sale prices.
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
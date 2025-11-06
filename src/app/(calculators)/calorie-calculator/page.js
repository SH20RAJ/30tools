import CalorieCalculatorTool from '@/components/tools/calculators/CalorieCalculatorTool';

export const metadata = {
    title: "Calorie Calculator - Free Online Calculator | Instant Results",
    description: "Free calorie calculator with instant accurate results. Process online calculator for students, professionals & everyone. Easy to use, mobile-friendly interface.",
    keywords: [
        // Primary high-volume keywords
        "calorie calculator",
        "daily calorie calculator",
        "calorie needs calculator",
        "bmr calculator",
        "tdee calculator",
        "calories per day calculator",
        "calorie calculator weight loss",
        "calorie calculator weight gain",
        "maintenance calories calculator",
        "calorie intake calculator",
        "calorie requirement calculator",
        "calories needed calculator",
        "daily calorie intake calculator",
        "calorie calculator online",
        "calorie calculator free",
        "basal metabolic rate calculator",
        "total daily energy expenditure",
        "calorie calculator for men",
        "calorie calculator for women",
        "calorie calculator with activity level",
        "calorie calculator macro",
        "calorie calculator fitness",
        "calorie calculator diet",

        // Long-tail keywords for SEO ranking
        "daily calorie calculator weight loss gain maintenance",
        "calorie needs calculator age gender activity level",
        "bmr calculator basal metabolic rate accurate",
        "tdee calculator total daily energy expenditure",
        "calorie calculator for weight management goals",
        "daily calorie intake calculator personalized",
        "calorie requirement calculator fitness goals",
        "calories needed per day calculator health",
        "calorie calculator with macro breakdown",
        "calorie calculator sedentary active lifestyle",
        "calorie calculator muscle gain fat loss",
        "calorie calculator pregnancy breastfeeding",
        "calorie calculator athletes sports nutrition",
        "calorie calculator meal planning diet"
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/calorie-calculator"
    }
,
  openGraph: {
    title: "Calorie Calculator - Free Online Calculator | Instant Results",
    description: "Free calorie calculator with instant accurate results. Process online calculator for students, professionals & everyone. Easy to use, mobile-friendly interface.",
    url: "https://30tools.com/calorie-calculator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/calorie-calculator.jpg",
        width: 1200,
        height: 630,
        alt: "Calorie Calculator - Free Online Calculator | Instant Results"
      }
    ],
    type: "website"
  }
,
  twitter: {
    card: "summary_large_image",
    title: "Calorie Calculator - Free Online Calculator | Instant Results",
    description: "Free calorie calculator with instant accurate results. Process online calculator for students, professionals & everyone. Easy to use, mobile-friendly interface.",
    images: ["/og-images/calorie-calculator.jpg"],
    creator: "@30tools"
  }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Calorie Calculator",
    "description": "Free online calorie calculator to determine daily calorie needs for weight management and health goals",
    "url": "https://30tools.com/calorie-calculator",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Any",
    "permissions": "browser",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": [
        "Daily calorie needs calculation",
        "BMR and TDEE calculation",
        "Weight goal planning",
        "Activity level adjustment",
        "Macro nutrient breakdown",
        "Multiple calculation methods",
        "Personalized recommendations",
        "Health goal tracking"
    ],
    "author": {
        "@type": "Organization",
        "name": "30tools",
        "url": "https://30tools.com"
    }
};

export default function CalorieCalculatorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">Calorie Calculator</h1>
                        <p className="text-xl text-muted-foreground">
                            Calculate your daily calorie needs for weight loss, gain, or maintenance
                        </p>
                    </div>

                    <CalorieCalculatorTool />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Understanding Calorie Needs</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">🔥 BMR vs TDEE</h3>
                                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                                        <li>• <strong>BMR:</strong> Calories burned at rest (basic functions)</li>
                                        <li>• <strong>TDEE:</strong> Total calories including activity</li>
                                        <li>• <strong>Maintenance:</strong> Calories to maintain current weight</li>
                                        <li>• <strong>Deficit:</strong> Eat less than TDEE to lose weight</li>
                                        <li>• <strong>Surplus:</strong> Eat more than TDEE to gain weight</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-primary">⚖️ Weight Goals</h3>
                                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                                        <li>• <strong>Weight Loss:</strong> 500-1000 calorie deficit per day</li>
                                        <li>• <strong>Weight Gain:</strong> 300-500 calorie surplus per day</li>
                                        <li>• <strong>Maintenance:</strong> Eat at TDEE level</li>
                                        <li>• <strong>Muscle Gain:</strong> Slight surplus with protein focus</li>
                                        <li>• <strong>Fat Loss:</strong> Moderate deficit with exercise</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">More Health Calculators</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <a
                                    href="/bmi-calculator"
                                    className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                                >
                                    <h3 className="font-semibold mb-2 group-hover:text-primary">📊 BMI Calculator</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Calculate Body Mass Index and assess health status.
                                    </p>
                                    <span className="text-xs text-primary mt-2 inline-block">Calculate BMI →</span>
                                </a>

                                <a
                                    href="/body-fat-calculator"
                                    className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                                >
                                    <h3 className="font-semibold mb-2 group-hover:text-primary">📏 Body Fat Calculator</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Calculate body fat percentage using measurements.
                                    </p>
                                    <span className="text-xs text-primary mt-2 inline-block">Calculate Body Fat →</span>
                                </a>

                                <a
                                    href="/macro-calculator"
                                    className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                                >
                                    <h3 className="font-semibold mb-2 group-hover:text-primary">🥗 Macro Calculator</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Calculate protein, carbs, and fat requirements.
                                    </p>
                                    <span className="text-xs text-primary mt-2 inline-block">Calculate Macros →</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
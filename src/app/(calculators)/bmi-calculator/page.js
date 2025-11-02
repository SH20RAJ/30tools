import BMICalculatorTool from '@/components/tools/calculators/BMICalculatorTool';

export const metadata = {
    title: "BMI Calculator - Calculate Body Mass Index Online Free | 30tools",
    description: "Free BMI calculator to check Body Mass Index for adults and children. Includes BMI chart and health recommendations.",
    keywords: [
        // Primary high-volume keywords
        "bmi calculator",
        "bmi calculator female",
        "bmi formula",
        "bmi chart",
        "bmi calculator male",
        "bmi calculator kg with age",
        "bmi calculator pregnancy",
        "bmi calculator kg and feet",
        "bmi calculator for kids",
        "body mass index calculator",
        "bmi calculator online",
        "bmi calculator free",
        "calculate bmi",
        "bmi calculator metric",
        "bmi calculator imperial",
        "bmi calculator adults",
        "bmi calculator children",
        "bmi calculator teenagers",
        "bmi calculator seniors",
        "bmi calculator accurate",
        "bmi calculator with age",
        "bmi calculator height weight",
        "bmi calculator cm kg",

        // Long-tail keywords for SEO ranking
        "bmi calculator online free no registration accurate",
        "body mass index calculator with age gender",
        "bmi calculator female male adults children",
        "bmi calculator kg cm metric system",
        "bmi calculator feet inches pounds imperial",
        "bmi calculator with bmi chart categories",
        "bmi calculator pregnancy safe weight gain",
        "bmi calculator for kids children teenagers",
        "bmi calculator with health recommendations",
        "bmi calculator underweight normal overweight obese",
        "bmi calculator ideal weight range healthy",
        "bmi calculator fitness health assessment",
        "bmi calculator weight loss management",
        "bmi calculator medical health screening"
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/bmi-calculator"
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "BMI Calculator",
    "description": "Free online BMI calculator to calculate Body Mass Index and assess health status",
    "url": "https://30tools.com/bmi-calculator",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Any",
    "permissions": "browser",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": [
        "Calculate BMI for adults and children",
        "Support for metric and imperial units",
        "BMI categories and health status",
        "Ideal weight range calculation",
        "Health recommendations",
        "BMI chart and interpretation",
        "Age and gender considerations",
        "Privacy protected calculations"
    ],
    "author": {
        "@type": "Organization",
        "name": "30tools",
        "url": "https://30tools.com"
    }
};

export default function BMICalculatorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">BMI Calculator</h1>
                        <p className="text-xl text-muted-foreground">
                            Calculate your Body Mass Index and assess your health status
                        </p>
                    </div>

                    <BMICalculatorTool />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Understanding BMI Categories</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-3 text-blue-600">BMI Categories for Adults</h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between p-2 bg-blue-50 rounded">
                                            <span className="text-sm font-medium">Underweight</span>
                                            <span className="text-sm">Below 18.5</span>
                                        </div>
                                        <div className="flex justify-between p-2 bg-green-50 rounded">
                                            <span className="text-sm font-medium">Normal weight</span>
                                            <span className="text-sm">18.5 - 24.9</span>
                                        </div>
                                        <div className="flex justify-between p-2 bg-yellow-50 rounded">
                                            <span className="text-sm font-medium">Overweight</span>
                                            <span className="text-sm">25.0 - 29.9</span>
                                        </div>
                                        <div className="flex justify-between p-2 bg-red-50 rounded">
                                            <span className="text-sm font-medium">Obese</span>
                                            <span className="text-sm">30.0 and above</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-3 text-blue-600">Health Implications</h3>
                                    <ul className="text-sm text-muted-foreground space-y-2">
                                        <li>• <strong>Underweight:</strong> May indicate malnutrition or health issues</li>
                                        <li>• <strong>Normal:</strong> Associated with lowest health risks</li>
                                        <li>• <strong>Overweight:</strong> Increased risk of health problems</li>
                                        <li>• <strong>Obese:</strong> High risk of serious health conditions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">How to Calculate BMI</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-green-600">📏 Metric Formula</h3>
                                    <div className="p-4 bg-green-50 rounded-lg mb-4">
                                        <p className="font-medium">BMI = weight (kg) / height² (m²)</p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Example: 70 kg ÷ (1.75 m)² = 22.9 BMI
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-green-600">📐 Imperial Formula</h3>
                                    <div className="p-4 bg-green-50 rounded-lg mb-4">
                                        <p className="font-medium">BMI = (weight (lbs) / height² (in²)) × 703</p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Example: (154 lbs ÷ (69 in)²) × 703 = 22.7 BMI
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">BMI Limitations and Considerations</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-orange-600">⚠️ BMI Limitations</h3>
                                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                                        <li>• Doesn't distinguish between muscle and fat</li>
                                        <li>• May not be accurate for athletes</li>
                                        <li>• Doesn't account for bone density</li>
                                        <li>• Age and gender variations not considered</li>
                                        <li>• Different standards for different ethnicities</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-orange-600">💡 Additional Factors</h3>
                                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                                        <li>• Waist circumference measurement</li>
                                        <li>• Body fat percentage</li>
                                        <li>• Overall fitness level</li>
                                        <li>• Medical history and conditions</li>
                                        <li>• Lifestyle and activity level</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">Healthy Weight Management Tips</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2 text-blue-600">🥗 Nutrition Tips</h3>
                                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                                        <li>• Eat a balanced, nutritious diet</li>
                                        <li>• Control portion sizes</li>
                                        <li>• Stay hydrated with water</li>
                                        <li>• Limit processed and sugary foods</li>
                                        <li>• Include fruits and vegetables</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2 text-blue-600">🏃 Exercise Tips</h3>
                                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                                        <li>• Aim for 150 minutes of moderate activity weekly</li>
                                        <li>• Include strength training exercises</li>
                                        <li>• Start slowly and gradually increase</li>
                                        <li>• Find activities you enjoy</li>
                                        <li>• Consult healthcare providers before starting</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">More Health Calculators</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <a
                                    href="/calorie-calculator"
                                    className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                                >
                                    <h3 className="font-semibold mb-2 group-hover:text-primary">🔥 Calorie Calculator</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Calculate daily calorie needs for weight management.
                                    </p>
                                    <span className="text-xs text-primary mt-2 inline-block">Calculate →</span>
                                </a>

                                <a
                                    href="/body-fat-calculator"
                                    className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                                >
                                    <h3 className="font-semibold mb-2 group-hover:text-primary">📊 Body Fat Calculator</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Calculate body fat percentage using measurements.
                                    </p>
                                    <span className="text-xs text-primary mt-2 inline-block">Calculate →</span>
                                </a>

                                <a
                                    href="/ideal-weight-calculator"
                                    className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                                >
                                    <h3 className="font-semibold mb-2 group-hover:text-primary">⚖️ Ideal Weight Calculator</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Calculate your ideal weight based on height and age.
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
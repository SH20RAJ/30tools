import Link from 'next/link';

export const metadata = {
    title: 'Free Online Calculators - Math, Finance, Health & More | 30tools',
    description: "Free calculators with instant accurate results. Process online calculator for students, professionals & everyone. Easy to use, mobile-friendly interface.",
    keywords: [
        // Primary high-volume keywords
        "online calculators",
        "free calculators",
        "calculator online",
        "math calculator",
        "percentage calculator",
        "mortgage calculator",
        "bmi calculator",
        "loan calculator",
        "scientific calculator",
        "basic calculator",

        // Long-tail keywords for SEO ranking
        "online calculators free no registration unlimited",
        "math calculator scientific basic advanced functions",
        "percentage calculator increase decrease change",
        "mortgage calculator monthly payment interest rate",
        "bmi calculator body mass index health fitness",
        "loan calculator personal auto home mortgage",
        "calculator online free instant results accurate",
        "financial calculators investment retirement savings",
        "health calculators bmi calorie age pregnancy",
        "conversion calculators unit currency temperature"
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/calculators"
    },

  openGraph: {
    title: "Calculators - Free Online Calculator | Instant Results",
    description: "Free calculators with instant accurate results. Process online calculator for students, professionals & everyone. Easy to use, mobile-friendly interface.",
    url: "https://30tools.com/calculators",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/calculators.jpg",
        width: 1200,
        height: 630,
        alt: "Calculators - Free Online Calculator | Instant Results"
      },
    ],
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Calculators - Free Online Calculator | Instant Results",
    description: "Free calculators with instant accurate results. Process online calculator for students, professionals & everyone. Easy to use, mobile-friendly interface.",
    images: ["/og-images/calculators.jpg"],
    creator: "@30tools"
  },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Free Online Calculators",
    "description": "Collection of 25+ free online calculators for math, finance, health, and everyday calculations",
    "url": "https://30tools.com/calculators",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "permissions": "browser",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": [
        "Math and scientific calculators",
        "Financial and mortgage calculators",
        "Health and fitness calculators",
        "Unit conversion calculators",
        "Percentage and ratio calculators",
        "Date and time calculators",
        "No registration required",
        "Instant accurate results"
    ],
    "author": {
        "@type": "Organization",
        "name": "30tools",
        "url": "https://30tools.com"
    },
};

const calculatorCategories = [
    {
        title: "Math & Scientific Calculators",
        icon: "🧮",
        color: "blue",
        tools: [
            { name: "Basic Calculator", href: "/basic-calculator", description: "Simple arithmetic calculator for everyday calculations" },
            { name: "Scientific Calculator", href: "/scientific-calculator", description: "Advanced calculator with trigonometric and logarithmic functions" },
            { name: "Percentage Calculator", href: "/percentage-calculator", description: "Calculate percentages, increases, decreases, and changes" },
            { name: "Fraction Calculator", href: "/fraction-calculator", description: "Add, subtract, multiply, and divide fractions" },
            { name: "Square Root Calculator", href: "/square-root-calculator", description: "Calculate square roots and cube roots instantly" },
            { name: "Algebra Calculator", href: "/algebra-calculator", description: "Solve algebraic equations and expressions" }
        ]
    },
    {
        title: "Financial Calculators",
        icon: "💰",
        color: "green",
        tools: [
            { name: "Mortgage Calculator", href: "/mortgage-calculator", description: "Calculate monthly mortgage payments and total interest" },
            { name: "Loan Calculator", href: "/loan-calculator", description: "Calculate loan payments for personal, auto, and business loans" },
            { name: "Interest Calculator", href: "/interest-calculator", description: "Calculate simple and compound interest on investments" },
            { name: "Investment Calculator", href: "/investment-calculator", description: "Calculate investment returns and growth over time" },
            { name: "Retirement Calculator", href: "/retirement-calculator", description: "Plan your retirement savings and calculate future value" },
            { name: "Tax Calculator", href: "/tax-calculator", description: "Calculate income tax and take-home pay" },
            { name: "Tip Calculator", href: "/tip-calculator", description: "Calculate tips and split bills for restaurants" }
        ]
    },
    {
        title: "Health & Fitness Calculators",
        icon: "🏥",
        color: "red",
        tools: [
            { name: "BMI Calculator", href: "/bmi-calculator", description: "Calculate Body Mass Index and health status" },
            { name: "Calorie Calculator", href: "/calorie-calculator", description: "Calculate daily calorie needs for weight management" },
            { name: "Age Calculator", href: "/age-calculator", description: "Calculate exact age in years, months, and days" },
            { name: "Pregnancy Calculator", href: "/pregnancy-calculator", description: "Calculate due date and pregnancy milestones" },
            { name: "Body Fat Calculator", href: "/body-fat-calculator", description: "Calculate body fat percentage using measurements" },
            { name: "Heart Rate Calculator", href: "/heart-rate-calculator", description: "Calculate target heart rate zones for exercise" }
        ]
    },
    {
        title: "Conversion Calculators",
        icon: "🔄",
        color: "purple",
        tools: [
            { name: "Unit Converter", href: "/unit-converter", description: "Convert between different units of measurement" },
            { name: "Currency Converter", href: "/currency-converter", description: "Convert between world currencies with live rates" },
            { name: "Temperature Converter", href: "/temperature-converter", description: "Convert Celsius, Fahrenheit, and Kelvin temperatures" },
            { name: "Length Converter", href: "/length-converter", description: "Convert meters, feet, inches, and other length units" },
            { name: "Weight Converter", href: "/weight-converter", description: "Convert kilograms, pounds, ounces, and other weights" }
        ]
    },
    {
        title: "Date & Time Calculators",
        icon: "📅",
        color: "orange",
        tools: [
            { name: "Date Calculator", href: "/date-calculator", description: "Calculate days between dates and add/subtract days" },
            { name: "Time Calculator", href: "/time-calculator", description: "Add, subtract, and convert time durations" },
            { name: "Business Days Calculator", href: "/business-days-calculator", description: "Calculate working days excluding weekends and holidays" }
        ]
    },
];

export default function CalculatorsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Free Online Calculators</h1>
                        <p className="text-xl text-muted-foreground mb-6">
                            Access 25+ professional calculators for math, finance, health, and everyday calculations
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                            <span className="bg-muted text-foreground px-3 py-1 rounded-full">✓ 100% Free</span>
                            <span className="bg-muted text-foreground px-3 py-1 rounded-full">✓ No Registration</span>
                            <span className="bg-muted text-foreground px-3 py-1 rounded-full">✓ Instant Results</span>
                            <span className="bg-muted text-primary px-3 py-1 rounded-full">✓ Mobile Friendly</span>
                        </div>
                    </div>

                    {calculatorCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="mb-12">
                            <div className="flex items-center mb-6">
                                <span className="text-3xl mr-3">{category.icon}</span>
                                <h2 className="text-2xl font-semibold">{category.title}</h2>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {category.tools.map((tool, toolIndex) => (
                                    <Link
                                        key={toolIndex}
                                        href={tool.href}
                                        className="block p-6 border rounded-lg hover:border-primary hover:shadow-md transition-all group bg-card"
                                    >
                                        <h3 className="font-semibold mb-2 group-hover:text-primary">
                                            {tool.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            {tool.description}
                                        </p>
                                        <span className="text-xs text-primary">
                                            Calculate Now →
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="mt-16 bg-card rounded-lg p-8 border">
                        <h2 className="text-2xl font-semibold mb-4">Why Use Our Online Calculators?</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-medium mb-2 text-primary">🚀 Fast & Accurate</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Get instant, precise calculations with our professionally designed calculators. No waiting, no errors, just reliable results every time.
                                </p>

                                <h3 className="font-medium mb-2 text-primary">📱 Mobile Optimized</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    All calculators work perfectly on desktop, tablet, and mobile devices. Calculate anywhere, anytime with responsive design.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-medium mb-2 text-primary">🔒 Privacy Protected</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    All calculations are performed locally in your browser. We never store or transmit your data, ensuring complete privacy and security.
                                </p>

                                <h3 className="font-medium mb-2 text-primary">💯 Always Free</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    No hidden fees, no registration required, no limits. Use all our calculators completely free forever.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 bg-card rounded-lg p-6 border">
                        <h2 className="text-2xl font-semibold mb-4">Popular Calculator Categories</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="text-center p-4">
                                <div className="text-2xl mb-2">🧮</div>
                                <h3 className="font-medium mb-1">Math Calculators</h3>
                                <p className="text-xs text-muted-foreground">Basic, scientific, percentage, fraction calculators</p>
                            </div>
                            <div className="text-center p-4">
                                <div className="text-2xl mb-2">💰</div>
                                <h3 className="font-medium mb-1">Finance Calculators</h3>
                                <p className="text-xs text-muted-foreground">Mortgage, loan, investment, retirement calculators</p>
                            </div>
                            <div className="text-center p-4">
                                <div className="text-2xl mb-2">🏥</div>
                                <h3 className="font-medium mb-1">Health Calculators</h3>
                                <p className="text-xs text-muted-foreground">BMI, calorie, age, pregnancy calculators</p>
                            </div>
                            <div className="text-center p-4">
                                <div className="text-2xl mb-2">🔄</div>
                                <h3 className="font-medium mb-1">Converters</h3>
                                <p className="text-xs text-muted-foreground">Unit, currency, temperature converters</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
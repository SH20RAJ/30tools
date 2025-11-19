import MortgageCalculatorTool from "@/components/tools/calculators/MortgageCalculatorTool";

export const metadata = {
  title: "Mortgage Calculator - Free Online Calculator | Instant Results",
  description:
    "Free mortgage calculator for monthly payments, total interest, and amortization schedule. Include taxes, insurance, and PMI.",
  keywords: [
    // Primary high-volume keywords
    "mortgage calculator",
    "mortgage calculator ca",
    "mortgage calculator google",
    "mortgage calculator usa",
    "simple mortgage calculator",
    "mortgage calculator colorado",
    "mortgage calculator massachusetts",
    "free mortgage calculator",
    "mortgage calculator ramsey",
    "home loan calculator",
    "mortgage payment calculator",
    "mortgage calculator online",
    "mortgage calculator with taxes",
    "mortgage calculator with pmi",
    "mortgage calculator with insurance",
    "mortgage calculator amortization",
    "mortgage calculator refinance",
    "mortgage calculator extra payments",
    "mortgage calculator affordability",
    "mortgage calculator interest rate",
    "mortgage calculator down payment",
    "mortgage calculator monthly payment",
    "mortgage calculator total cost",

    // Long-tail keywords for SEO ranking
    "mortgage calculator online free no registration accurate",
    "mortgage payment calculator with taxes insurance pmi",
    "home loan calculator monthly payment interest total",
    "mortgage calculator with amortization schedule table",
    "mortgage calculator compare different loan options",
    "mortgage calculator extra payments early payoff",
    "mortgage calculator refinance break even analysis",
    "mortgage calculator affordability how much house",
    "mortgage calculator first time home buyer",
    "mortgage calculator investment property rental",
    "mortgage calculator fixed adjustable rate comparison",
    "mortgage calculator closing costs total expenses",
    "mortgage calculator bi weekly payments savings",
    "mortgage calculator rent vs buy comparison",
  ].join(", "),
  alternates: {
    canonical: "https://30tools.com/mortgage-calculator",
  },

  openGraph: {
    title: "Mortgage Calculator - Free Online Calculator | Instant Results",
    description:
      "Free mortgage calculator tool with professional results. No registration required, instant processing, secure & unlimited use.",
    url: "https://30tools.com/mortgage-calculator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/mortgage-calculator.jpg",
        width: 1200,
        height: 630,
        alt: "Mortgage Calculator - Free Online Calculator | Instant Results",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mortgage Calculator - Free Online Calculator | Instant Results",
    description:
      "Free mortgage calculator tool with professional results. No registration required, instant processing, secure & unlimited use.",
    images: ["/og-images/mortgage-calculator.jpg"],
    creator: "@30tools",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Mortgage Calculator",
  description:
    "Free online mortgage calculator to calculate monthly payments, total interest, and amortization schedule",
  url: "https://30tools.com/mortgage-calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Calculate monthly mortgage payments",
    "Include taxes, insurance, and PMI",
    "Amortization schedule generation",
    "Compare different loan scenarios",
    "Extra payment calculations",
    "Refinance analysis",
    "Affordability assessment",
    "Total cost breakdown",
  ],
  author: {
    "@type": "Organization",
    name: "30tools",
    url: "https://30tools.com",
  },
};

export default function MortgageCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Mortgage Calculator</h1>
            <p className="text-xl text-muted-foreground">
              Calculate monthly mortgage payments, total interest, and
              amortization schedule
            </p>
          </div>

          <MortgageCalculatorTool />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                How to Use Mortgage Calculator
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    🏠 Basic Information
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>
                      • <strong>Home Price:</strong> Total purchase price of the
                      home
                    </li>
                    <li>
                      • <strong>Down Payment:</strong> Amount paid upfront
                      (typically 10-20%)
                    </li>
                    <li>
                      • <strong>Loan Term:</strong> Length of mortgage (15, 20,
                      30 years)
                    </li>
                    <li>
                      • <strong>Interest Rate:</strong> Annual percentage rate
                      (APR)
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    💰 Additional Costs
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>
                      • <strong>Property Tax:</strong> Annual property tax
                      amount
                    </li>
                    <li>
                      • <strong>Home Insurance:</strong> Annual homeowner's
                      insurance
                    </li>
                    <li>
                      • <strong>PMI:</strong> Private mortgage insurance (if
                      down payment &lt; 20%)
                    </li>
                    <li>
                      • <strong>HOA Fees:</strong> Homeowner association fees
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Understanding Mortgage Payments
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    📊 PITI Breakdown
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between p-2 bg-muted/50 rounded">
                      <span className="text-sm font-medium">Principal</span>
                      <span className="text-sm">Loan amount repayment</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted/50 rounded">
                      <span className="text-sm font-medium">Interest</span>
                      <span className="text-sm">Cost of borrowing money</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted/50 rounded">
                      <span className="text-sm font-medium">Taxes</span>
                      <span className="text-sm">Property tax payments</span>
                    </div>
                    <div className="flex justify-between p-2 bg-destructive/10 rounded">
                      <span className="text-sm font-medium">Insurance</span>
                      <span className="text-sm">Homeowner's insurance</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    💡 Key Factors
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>
                      • <strong>Loan Amount:</strong> Home price minus down
                      payment
                    </li>
                    <li>
                      • <strong>Interest Rate:</strong> Higher rates = higher
                      payments
                    </li>
                    <li>
                      • <strong>Loan Term:</strong> Longer terms = lower monthly
                      payments
                    </li>
                    <li>
                      • <strong>Down Payment:</strong> More down = lower loan
                      amount
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Mortgage Tips and Strategies
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    💰 Save Money Tips
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Make a larger down payment to avoid PMI</li>
                    <li>• Shop around for the best interest rates</li>
                    <li>
                      • Consider shorter loan terms for less total interest
                    </li>
                    <li>• Make extra principal payments when possible</li>
                    <li>• Improve credit score before applying</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    📈 Payment Strategies
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Bi-weekly payments can save thousands in interest</li>
                    <li>• Round up monthly payments to nearest $50 or $100</li>
                    <li>• Apply tax refunds and bonuses to principal</li>
                    <li>• Refinance when rates drop significantly</li>
                    <li>• Consider 15-year vs 30-year loan trade-offs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Mortgage Types Comparison
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Loan Type</th>
                      <th className="text-left p-2">Term</th>
                      <th className="text-left p-2">Monthly Payment</th>
                      <th className="text-left p-2">Total Interest</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="p-2">30-Year Fixed</td>
                      <td className="p-2">360 months</td>
                      <td className="p-2">Lower</td>
                      <td className="p-2">Higher</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">15-Year Fixed</td>
                      <td className="p-2">180 months</td>
                      <td className="p-2">Higher</td>
                      <td className="p-2">Lower</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">5/1 ARM</td>
                      <td className="p-2">Variable</td>
                      <td className="p-2">Initially Lower</td>
                      <td className="p-2">Variable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                More Financial Calculators
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a
                  href="/loan-calculator"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    💳 Loan Calculator
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Calculate payments for personal, auto, and business loans.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">
                    Calculate →
                  </span>
                </a>

                <a
                  href="/refinance-calculator"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    🔄 Refinance Calculator
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Calculate savings from mortgage refinancing.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">
                    Calculate →
                  </span>
                </a>

                <a
                  href="/affordability-calculator"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    🏠 Affordability Calculator
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Calculate how much house you can afford.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">
                    Calculate →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import LoanCalculatorTool from "@/components/tools/calculators/LoanCalculatorTool";

export const metadata = {
  title: "Loan Calculator - Free Online Calculator | Instant Results",
  description:
    "Free loan calculator for personal, auto, and business loans. Calculate monthly payments, total interest, and amortization schedule.",
  keywords: [
    // Primary high-volume keywords
    "loan calculator",
    "personal loan calculator",
    "auto loan calculator",
    "car loan calculator",
    "business loan calculator",
    "loan payment calculator",
    "loan calculator online",
    "loan calculator free",
    "calculate loan payment",
    "loan interest calculator",
    "loan amortization calculator",
    "monthly payment calculator",
    "loan calculator with extra payments",
    "loan calculator early payoff",
    "loan calculator refinance",
    "loan calculator comparison",
    "loan calculator simple",
    "loan calculator accurate",
    "loan calculator instant",
    "loan calculator mobile",
    "loan calculator app",
    "loan calculator tool",
    "loan calculator widget",

    // Long-tail keywords for SEO ranking
    "loan calculator online free no registration accurate",
    "personal loan calculator monthly payment interest rate",
    "auto loan calculator car financing monthly payment",
    "business loan calculator commercial financing options",
    "loan payment calculator with amortization schedule",
    "loan calculator extra payments early payoff savings",
    "loan calculator compare different interest rates",
    "loan calculator refinance break even analysis",
    "loan calculator total cost interest over time",
    "loan calculator affordability how much borrow",
    "loan calculator fixed variable rate comparison",
    "loan calculator bi weekly payments benefits",
    "loan calculator prepayment penalty considerations",
    "loan calculator debt consolidation options",
  ].join(", "),
  alternates: {
    canonical: "https://30tools.com/loan-calculator",
  },

  openGraph: {
    title: "Loan Calculator - Free Online Calculator | Instant Results",
    description:
      "Free loan calculator with instant accurate results. Process online calculator for students, professionals & everyone. Easy to use, mobile-friendly interface.",
    url: "https://30tools.com/loan-calculator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/loan-calculator.jpg",
        width: 1200,
        height: 630,
        alt: "Loan Calculator - Free Online Calculator | Instant Results",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Loan Calculator - Free Online Calculator | Instant Results",
    description:
      "Free loan calculator with instant accurate results. Process online calculator for students, professionals & everyone. Easy to use, mobile-friendly interface.",
    images: ["/og-images/loan-calculator.jpg"],
    creator: "@30tools",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Loan Calculator",
  description:
    "Free online loan calculator to calculate monthly payments, total interest, and amortization schedule for personal, auto, and business loans",
  url: "https://30tools.com/loan-calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Calculate monthly loan payments",
    "Personal, auto, and business loans",
    "Amortization schedule generation",
    "Extra payment calculations",
    "Total interest calculation",
    "Loan comparison tools",
    "Early payoff analysis",
    "Refinancing calculations",
  ],
  author: {
    "@type": "Organization",
    name: "30tools",
    url: "https://30tools.com",
  },
};

export default function LoanCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Loan Calculator</h1>
            <p className="text-xl text-muted-foreground">
              Calculate monthly payments for personal, auto, and business loans
            </p>
          </div>

          <LoanCalculatorTool />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Types of Loans</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-medium mb-2 text-primary">
                    💳 Personal Loans
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Debt consolidation</li>
                    <li>• Home improvements</li>
                    <li>• Medical expenses</li>
                    <li>• Wedding costs</li>
                    <li>• Emergency expenses</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-medium mb-2 text-primary">
                    🚗 Auto Loans
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• New car financing</li>
                    <li>• Used car loans</li>
                    <li>• Motorcycle loans</li>
                    <li>• RV financing</li>
                    <li>• Boat loans</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-medium mb-2 text-primary">
                    🏢 Business Loans
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Equipment financing</li>
                    <li>• Working capital</li>
                    <li>• Business expansion</li>
                    <li>• Inventory financing</li>
                    <li>• Commercial real estate</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Loan Payment Factors
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    📊 Key Variables
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>
                      • <strong>Principal Amount:</strong> The total loan amount
                      borrowed
                    </li>
                    <li>
                      • <strong>Interest Rate:</strong> Annual percentage rate
                      (APR)
                    </li>
                    <li>
                      • <strong>Loan Term:</strong> Length of time to repay
                      (months/years)
                    </li>
                    <li>
                      • <strong>Payment Frequency:</strong> Monthly, bi-weekly,
                      weekly
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    💰 Payment Components
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>
                      • <strong>Principal:</strong> Amount that reduces loan
                      balance
                    </li>
                    <li>
                      • <strong>Interest:</strong> Cost of borrowing money
                    </li>
                    <li>
                      • <strong>Fees:</strong> Origination, processing, or
                      service fees
                    </li>
                    <li>
                      • <strong>Insurance:</strong> Optional loan protection
                      insurance
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Loan Comparison Tips
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-destructive">
                    🔍 What to Compare
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Annual Percentage Rate (APR)</li>
                    <li>• Monthly payment amount</li>
                    <li>• Total interest paid over loan term</li>
                    <li>• Loan fees and closing costs</li>
                    <li>• Prepayment penalty terms</li>
                    <li>• Loan approval requirements</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-destructive">
                    💡 Money-Saving Tips
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Shop around with multiple lenders</li>
                    <li>• Improve credit score before applying</li>
                    <li>• Consider shorter loan terms</li>
                    <li>• Make extra principal payments</li>
                    <li>• Avoid unnecessary loan insurance</li>
                    <li>• Negotiate interest rates and fees</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Loan Term Comparison
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Loan Term</th>
                      <th className="text-left p-2">Monthly Payment</th>
                      <th className="text-left p-2">Total Interest</th>
                      <th className="text-left p-2">Pros & Cons</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="p-2">Short Term (2-3 years)</td>
                      <td className="p-2">Higher</td>
                      <td className="p-2">Lower</td>
                      <td className="p-2">Less interest, faster payoff</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Medium Term (4-5 years)</td>
                      <td className="p-2">Moderate</td>
                      <td className="p-2">Moderate</td>
                      <td className="p-2">Balanced payment and interest</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Long Term (6-7 years)</td>
                      <td className="p-2">Lower</td>
                      <td className="p-2">Higher</td>
                      <td className="p-2">Lower payments, more interest</td>
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
                  href="/mortgage-calculator"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    🏠 Mortgage Calculator
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Calculate monthly mortgage payments and total interest.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">
                    Calculate →
                  </span>
                </a>

                <a
                  href="/interest-calculator"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    📈 Interest Calculator
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Calculate simple and compound interest on investments.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">
                    Calculate →
                  </span>
                </a>

                <a
                  href="/debt-payoff-calculator"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    💳 Debt Payoff Calculator
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Calculate how long it takes to pay off debt.
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

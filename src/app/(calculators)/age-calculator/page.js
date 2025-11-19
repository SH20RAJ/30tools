import AgeCalculatorTool from "@/components/tools/calculators/AgeCalculatorTool";

export const metadata = {
  title: "Age Calculator - Free Online Calculator | Instant Results",
  description:
    "Free age calculator to calculate exact age in years, months, and days. Find age difference between dates, calculate birthday countdown, and more instantly.",
  keywords: [
    // Primary high-volume keywords
    "age calculator",
    "calculate age",
    "age calculator in years months days",
    "birthday calculator",
    "age difference calculator",
    "how old am i",
    "age calculator from date of birth",
    "exact age calculator",
    "age calculator online",
    "age calculator free",
    "calculate my age",
    "age finder",
    "age counter",
    "birthday countdown",
    "age in days calculator",
    "age in months calculator",
    "age in hours calculator",
    "age calculator precise",
    "age calculator accurate",
    "date of birth calculator",
    "chronological age calculator",
    "age calculator with time",
    "age calculator detailed",

    // Long-tail keywords for SEO ranking
    "age calculator exact years months days hours",
    "calculate age from date of birth to today",
    "age calculator birthday to current date",
    "age difference calculator between two people",
    "how old am i calculator precise calculation",
    "age calculator with leap year consideration",
    "calculate exact age in days hours minutes",
    "age calculator for official documents",
    "age calculator retirement planning",
    "age calculator school admission eligibility",
    "age calculator visa application requirements",
    "age calculator insurance premium calculation",
    "age calculator medical age determination",
    "age calculator legal age verification",
  ].join(", "),
  alternates: {
    canonical: "https://30tools.com/age-calculator",
  },
  openGraph: {
    title: "Age Calculator - Free Online Calculator | Instant Results",
    description:
      "Free age calculator with instant accurate results. Process online calculator for students, professionals & everyone. Easy to use, mobile-friendly interface.",
    url: "https://30tools.com/age-calculator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/age-calculator.jpg",
        width: 1200,
        height: 630,
        alt: "Age Calculator - Free Online Calculator | Instant Results",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Age Calculator - Free Online Calculator | Instant Results",
    description:
      "Free age calculator with instant accurate results. Process online calculator for students, professionals & everyone. Easy to use, mobile-friendly interface.",
    images: ["/og-images/age-calculator.jpg"],
    creator: "@30tools",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Age Calculator",
  description:
    "Free online age calculator to calculate exact age in years, months, days, and hours from date of birth",
  url: "https://30tools.com/age-calculator",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Exact age calculation",
    "Years, months, days breakdown",
    "Age difference calculation",
    "Birthday countdown",
    "Leap year handling",
    "Multiple date formats",
    "Precise time calculation",
    "Age in various units",
  ],
  author: {
    "@type": "Organization",
    name: "30tools",
    url: "https://30tools.com",
  },
};

const faqContent = [
  {
    question: "How precise is this age calculator?",
    answer:
      "We use timezone-aware math and leap-year support to return age down to seconds, which is the format Bing snippets prefer when answering “how old am I” searches.",
  },
  {
    question: "Can I calculate the age difference between two people?",
    answer:
      "Yes. Enter both birth dates and the tool returns the gap in years, months, days, and hours so you can copy the exact wording into Bing Chat or reports.",
  },
  {
    question: "Does the calculator support multiple date formats?",
    answer:
      "You can paste ISO, US, EU, or textual month formats. We normalize the input before calculating, keeping the output consistent for Bing indexing.",
  },
  {
    question: "Will leap years and daylight savings be handled?",
    answer:
      "Leap years are automatically included and daylight-saving transitions are converted to UTC internally, so the displayed age stays accurate.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqContent.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const bingSnapshotHighlights = [
  {
    title: "Snippet-friendly answers",
    description:
      'Outputs full sentences ("You are 27 years, 3 months, 5 days old") that Bing can lift directly into the results page.',
  },
  {
    title: "Copilot context blocks",
    description:
      "Structured data + labelled sections explain use cases so Bing Copilot can summarize how to use the calculator.",
  },
  {
    title: "Entity coverage",
    description:
      "Targets queries like age finder, DOB calculator, and age difference for stronger Bing coverage.",
  },
];

const relatedBingLinks = [
  { href: "/calculators", label: "All Calculators" },
  { href: "/tip-calculator", label: "Tip Calculator" },
  { href: "/mortgage-calculator", label: "Mortgage Calculator" },
];

export default function AgeCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Age Calculator</h1>
            <p className="text-xl text-muted-foreground">
              Calculate your exact age in years, months, days, and hours
            </p>
          </div>

          <AgeCalculatorTool />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Age Calculator Uses
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    📋 Official Documents
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Passport and visa applications</li>
                    <li>• School admission forms</li>
                    <li>• Insurance applications</li>
                    <li>• Employment verification</li>
                    <li>• Legal age verification</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    🎉 Personal Use
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Birthday planning</li>
                    <li>• Milestone celebrations</li>
                    <li>• Age difference calculations</li>
                    <li>• Retirement planning</li>
                    <li>• Health and fitness tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-6 border border-dashed">
              <h2 className="text-2xl font-semibold mb-4">
                Optimized Answers for Bing Search
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {bingSnapshotHighlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="bg-background rounded-lg p-4 shadow-sm border"
                  >
                    <h3 className="font-semibold text-primary mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                {relatedBingLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                More Date & Time Calculators
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a
                  href="/date-calculator"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    📅 Date Calculator
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Calculate days between dates and add/subtract days.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">
                    Calculate Dates →
                  </span>
                </a>

                <a
                  href="/time-calculator"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    ⏰ Time Calculator
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Add, subtract, and convert time durations.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">
                    Calculate Time →
                  </span>
                </a>

                <a
                  href="/business-days-calculator"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    💼 Business Days
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Calculate working days excluding weekends.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">
                    Calculate Business Days →
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Age Calculator FAQ
              </h2>
              <div className="space-y-4">
                {faqContent.map((item) => (
                  <div key={item.question}>
                    <h3 className="font-medium mb-2">{item.question}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

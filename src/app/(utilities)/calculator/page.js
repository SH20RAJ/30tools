import Calculator from "@/components/tools/utilities/CalculatorTool";

export const metadata = {
  title: 'Advanced Calculator - Scientific Calculator | 30tools',
  description: "Free calculator with instant accurate results. Process online calculator for students, professionals & everyone. Easy to use, mobile-friendly interface.",
  keywords: 'calculator, scientific calculator, advanced calculator, math calculator, trigonometry, logarithm',
  openGraph: {
    title: 'Advanced Calculator - Scientific Calculator | 30tools',
    description: 'Scientific calculator with advanced functions.',
    type: 'website',
  },
,
  twitter: {
    card: "summary_large_image",
    title: "Calculator - Free Online Calculator | Instant Results",
    description: "Free calculator with instant accurate results. Process online calculator for students, professionals & everyone. Easy to use, mobile-friendly interface.",
    images: ["/og-images/calculator.jpg"],
    creator: "@30tools"
  }
,
  alternates: {
    canonical: "https://30tools.com/calculator"
  }
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Calculator",
  "description": "Free calculator with instant accurate results. Process online calculator for students, professionals & everyone. Easy to use, mobile-friendly interface.",
  "url": "https://30tools.com/calculator",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  }
};

export default function CalculatorPage() {
  return <Calculator />;
}

import TextSizeCalculatorTool from '@/components/tools/text/TextSizeCalculatorTool';

export const metadata = {
  title: 'Text Size Calculator - Calculate Text Length & Size | 30tools',
  description: 'Calculate text size in bytes, characters, words, and lines. Analyze text length, file size, and get detailed text statistics with our calculator.',
  keywords: [
    "text size calculator",
    "text size calculator online",
    "free text size calculator",
    "text size calculator tool",
    "online text size calculator free",
    "professional text size calculator",
    "text size calculator online tool",
    "best text size calculator free",
    "text size calculator web app",
    "text size calculator utility",
    "calculator online free",
    "math tools online",
    "calculation utilities",
    "business calculator",
    "scientific calculator"
  ],
  openGraph: {
    title: 'Text Size Calculator - Calculate Text Length & Size | 30tools',
    description: 'Calculate text size in bytes, characters, words, and lines. Analyze text length, file size, and get detailed text statistics with our calculator.',
    type: 'website',
    url: 'https://30tools.com/text-size-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Text Size Calculator - Calculate Text Length & Size | 30tools',
    description: 'Calculate text size in bytes, characters, words, and lines. Analyze text length, file size, and get detailed text statistics with our calculator.',
  },
  canonical: 'https://30tools.com/text-size-calculator',
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Text Size Calculator",
  "description": "Free text size calculator tool with professional results. No registration required, instant processing, secure & unlimited use.",
  "url": "https://30tools.com/text-size-calculator",
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

export default function TextSizeCalculatorPage() {
  return <TextSizeCalculatorTool />;
}
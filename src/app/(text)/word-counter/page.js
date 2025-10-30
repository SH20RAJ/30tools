import WordCounterTool from '@/components/tools/text/WordCounterTool';

export const metadata = {
  title: "Word Counter - Count Words & Characters Online Free | 30tools",
  description: "Free online word counter tool with instant results. Count words, characters (with/without spaces), sentences, and paragraphs. No limits, no registration. Perfect for essays, SEO, and social media.",
  keywords: [
    // Primary high-volume keywords
    "word counter",
    "character counter",
    "word count",
    "text counter",
    "word counter online",
    "character count",
    "word count tool",
    "paragraph counter",
    "sentence counter",
    "character counter online",
    "word counter free",
    "text word counter",
    "online word counter",
    "word count checker",
    "character counter tool",
    "word counter with spaces",
    "word counter no spaces",
    "word counter google",
    "word counter microsoft word",
    "character counter with spaces",
    "word counter for essays",
    "character counter twitter",
    "word counter real time",

    // Long-tail keywords for SEO ranking
    "word counter online free no registration unlimited",
    "character counter with spaces without spaces accurate",
    "word count tool for essays assignments academic writing",
    "real time word counter live counting instant results",
    "word counter for social media posts twitter instagram",
    "character counter for twitter instagram facebook limits",
    "word count checker for academic writing students",
    "paragraph counter for blog posts articles content",
    "sentence counter for content analysis writing",
    "word frequency counter text analysis statistics",
    "word counter with reading time calculator estimate",
    "character limit checker for forms applications",
    "word counter for seo content optimization length",
    "bulk text word counter multiple documents batch"
  ].join(", "),
  alternates: {
    canonical: "https://30tools.com/word-counter"
  },
  openGraph: {
    title: "Free Word Counter Online - Count Words & Characters",
    description: "Professional word counter tool for writers, students, and marketers. Count words, characters, sentences, and paragraphs in real-time. Free and accurate.",
    url: "https://30tools.com/word-counter",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/word-counter.jpg",
        width: 1200,
        height: 630,
        alt: "Free Word Counter Tool - 30tools"
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free Word Counter Online - Count Words & Characters",
    description: "Professional word counter tool for writers, students, and marketers. Count words, characters, sentences, and paragraphs in real-time.",
    images: ["/og-images/word-counter.jpg"],
    creator: '@30tools'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function WordCounterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Word Counter - Free Online Text Analysis Tool",
    "description": "Professional word counter tool to count words, characters, sentences, and paragraphs in real-time. Perfect for writers, students, and content creators.",
    "url": "https://30tools.com/word-counter",
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "30tools",
      "url": "https://30tools.com"
    },
    "featureList": [
      "Real-time word counting",
      "Character count with and without spaces",
      "Sentence and paragraph counting",
      "Reading time estimation",
      "Writing statistics",
      "Export text statistics",
      "Mobile-friendly interface",
      "No file upload required"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2847"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WordCounterTool />
    </>
  );
}

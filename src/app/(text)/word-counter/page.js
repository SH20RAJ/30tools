import WordCounterTool from '@/components/tools/text/WordCounterTool';

export const metadata = {
  title: "Free Word Counter Online - Count Words, Characters, Sentences | 30tools",
  description: "Professional word counter tool to count words, characters, sentences, and paragraphs in real-time. Perfect for essays, articles, social media posts, and SEO content. Free and accurate.",
  keywords: "word counter, character counter, word count tool, count words online, text counter, word counter online free, character count, sentence counter, paragraph counter, writing tools",
  canonical: "https://30tools.com/word-counter",
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

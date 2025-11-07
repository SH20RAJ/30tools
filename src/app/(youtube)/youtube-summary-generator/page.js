import YouTubeSummaryGenerator from '@/components/tools/youtube/YouTubeSummaryGenerator';

export const metadata = {
  title: "Youtube Summary Generator - Free Tool | 30tools",
  description: 'Generate intelligent AI summaries of YouTube videos. Extract key insights, topics, and takeaways from any video using advanced artificial intelligence.',
  keywords: [
    "youtube summary generator",
    "youtube summary generator online",
    "free youtube summary generator",
    "youtube summary generator tool",
    "online youtube summary generator free",
    "professional youtube summary generator",
    "youtube summary generator online tool",
    "best youtube summary generator free",
    "youtube summary generator web app",
    "youtube summary generator utility",
    "online tool",
    "free utility",
    "web application"
  ],
  openGraph: {
    title: 'AI YouTube Summary Generator - Intelligent Video Analysis',
    description: 'Transform any YouTube video into comprehensive summaries with AI. Perfect for researchers, students, and content creators.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI YouTube Summary Generator',
    description: 'Generate intelligent summaries of YouTube videos with AI',
  },

  alternates: {
    canonical: "https://30tools.com/youtube-summary-generator"
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Youtube Summary Generator",
  "description": "Free youtube summary generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
  "url": "https://30tools.com/youtube-summary-generator",
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
  },
};

export default function YouTubeSummaryGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <YouTubeSummaryGenerator />
      </div>
    </>
  );
}

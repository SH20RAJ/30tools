import ProductivityRoastGeneratorTool from '@/components/tools/generators/ProductivityRoastGeneratorTool';

export const metadata = {
  title: "Productivity Roast Generator - Get Roasted for Your Habits | 30tools",
  description: "Get hilariously roasted for your productivity habits with AI. Fun self-deprecating humor about work habits, procrastination, and daily routines.",
  keywords: "productivity roast, habit roast, procrastination humor, work habits, productivity memes, self deprecating humor, productivity jokes",
  canonical: "https://30tools.com/productivity-roast-generator",
  openGraph: {
    title: "Productivity Roast Generator - Get Roasted for Your Habits",
    description: "Get hilariously roasted for your productivity habits with AI. Fun self-deprecating humor about work and life.",
    url: "https://30tools.com/productivity-roast-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/productivity-roast-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Productivity Roast Generator"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Productivity Roast Generator - Get Roasted for Your Habits",
    description: "Get hilariously roasted for your productivity habits with AI. Fun self-deprecating humor about work and life.",
    images: ["/og-images/productivity-roast-generator.jpg"],
    creator: "@30tools_com"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Productivity Roast Generator",
  "description": "Get hilariously roasted for your productivity habits with AI-generated humor and motivational twists.",
  "url": "https://30tools.com/productivity-roast-generator",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Habit analysis input",
    "Humorous roasting styles",
    "Motivational twist endings",
    "Shareable roast cards",
    "Personalized humor"
  ]
};

export default function ProductivityRoastGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductivityRoastGeneratorTool />
    </>
  );
}
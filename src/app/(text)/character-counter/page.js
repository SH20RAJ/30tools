
import CharacterCounterTool from '@/components/tools/text/CharacterCounterTool';

export const metadata = {
  title: "Character Counter - Free Text Tool | Professional Text Processing",
  description: "Professional character counter to Process text instantly. Free online text tool with advanced features. Perfect for writers, students & professionals.",
  keywords: [
    "character counter",
    "character counter online",
    "free character counter",
    "character counter tool",
    "online character counter free",
    "text tool",
    "online text tool",
    "free text tool",
    "text processing",
    "text editor",
    "text analyzer",
    "text converter",
    "text formatter",
    "professional text tool",
    "writer tool",
    "student tool",
    "text utility",
    "instant text processing",
    "advanced text features"
  ].join(", "),
  openGraph: {
    title: "Character Counter - Free Text Tool | Professional Text Processing",
    description: "Professional character counter to Process text instantly. Free online text tool with advanced features. Perfect for writers, students & professionals.",
    url: "https://30tools.com/character-counter",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/character-counter.jpg",
        width: 1200,
        height: 630,
        alt: "Character Counter - Free Text Tool | Professional Text Processing"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Character Counter - Free Text Tool | Professional Text Processing",
    description: "Professional character counter to Process text instantly. Free online text tool with advanced features. Perfect for writers, students & professionals.",
    images: ["/og-images/character-counter.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/character-counter"
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
  },
  category: 'Text Tools',
  other: {
    'application-name': '30tools',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Character Counter - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Character Counter",
  "description": "Professional character counter to Process text instantly. Free online text tool with advanced features. Perfect for writers, students & professionals.",
  "url": "https://30tools.com/character-counter",
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
import { redirect } from 'next/navigation';

// Redirect character-counter to word-counter for SEO consolidation
export default function CharacterCounterPage() {
  redirect('/word-counter');
}

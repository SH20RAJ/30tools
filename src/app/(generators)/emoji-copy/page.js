import EmojiCopyTool from '@/components/tools/generators/EmojiCopyTool';

export const metadata = {
  title: "Emoji Copy - Copy & Paste Emojis Easily | 30tools",
  description: "Copy and paste emojis easily with our comprehensive emoji library. Find the perfect emoji for your messages, social media posts, and content.",
  keywords: "emoji copy, emoji paste, emoji library, emojis, unicode emojis, social media emojis, text emojis, emoji search",
  canonical: "https://30tools.com/emoji-copy",
  openGraph: {
    title: "Emoji Copy - Copy & Paste Emojis Easily",
    description: "Copy and paste emojis easily with our comprehensive emoji library. Find the perfect emoji for your content.",
    url: "https://30tools.com/emoji-copy",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/emoji-copy.jpg",
        width: 1200,
        height: 630,
        alt: "Emoji Copy Tool"
      },
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Emoji Copy - Copy & Paste Emojis Easily",
    description: "Copy and paste emojis easily with our comprehensive emoji library. Find the perfect emoji for your content.",
    images: ["/og-images/emoji-copy.jpg"],
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
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Emoji Copy",
  "description": "Copy and paste emojis easily with comprehensive emoji library and search functionality.",
  "url": "https://30tools.com/emoji-copy",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Comprehensive emoji library",
    "Easy copy and paste",
    "Emoji search functionality",
    "Category organization",
    "Recently used emojis"
  ]
};

export default function EmojiCopyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EmojiCopyTool />
    </>
  );
}
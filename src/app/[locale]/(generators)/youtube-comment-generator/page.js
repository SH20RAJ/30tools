import YouTubeCommentGeneratorTool from "@/components/tools/generators/YouTubeCommentGeneratorTool";

export const metadata = {
  title: "YouTube Comment Generator - Create Viral Comments | 30tools",
  description:
    "Generate dramatic, funny, and trending YouTube comments with AI. Perfect for content creators, memes, and social media engagement.",
  keywords:
    "youtube comments, comment generator, viral comments, youtube memes, dramatic comments, social media content, youtube engagement",
  canonical: "https://30tools.com/youtube-comment-generator",
  openGraph: {
    title: "YouTube Comment Generator - Create Viral Comments",
    description:
      "Generate dramatic, funny, and trending YouTube comments with AI. Perfect for memes and social media content.",
    url: "https://30tools.com/youtube-comment-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/youtube-comment-generator.jpg",
        width: 1200,
        height: 630,
        alt: "YouTube Comment Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Comment Generator - Create Viral Comments",
    description:
      "Generate dramatic, funny, and trending YouTube comments with AI. Perfect for memes and social media content.",
    images: ["/og-images/youtube-comment-generator.jpg"],
    creator: "@30tools_com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "YouTube Comment Generator",
  description:
    "Generate dramatic and funny YouTube comments with AI for social media content and memes.",
  url: "https://30tools.com/youtube-comment-generator",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Dramatic comment styles",
    "Trending comment patterns",
    "Emoji integration",
    "Platform-specific formatting",
    "Viral comment templates",
  ],
};

export default function YouTubeCommentGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <YouTubeCommentGeneratorTool />
    </>
  );
}

import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";

export const metadata = {
  title: "YouTube Channel ID Finder - Get Channel ID | 30tools",
  description:
    "Find YouTube channel ID from channel URL or name. Get channel statistics, subscriber count, and detailed channel information with our finder tool.",
  keywords: [
    "youtube channel id finder",
    "youtube channel id finder online",
    "free youtube channel id finder",
    "youtube channel id finder tool",
    "online youtube channel id finder free",
    "professional youtube channel id finder",
    "youtube channel id finder online tool",
    "best youtube channel id finder free",
    "youtube channel id finder web app",
    "youtube channel id finder utility",
    "online tool",
    "free utility",
    "web application",
  ],
  openGraph: {
    title: "YouTube Channel ID Finder - Get Channel ID | 30tools",
    description:
      "Find YouTube channel ID from channel URL or name. Get channel statistics, subscriber count, and detailed channel information with our finder tool.",
    type: "website",
    url: "https://30tools.com/youtube-channel-id-finder",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Channel ID Finder - Get Channel ID | 30tools",
    description:
      "Find YouTube channel ID from channel URL or name. Get channel statistics, subscriber count, and detailed channel information with our finder tool.",
  },
  canonical: "https://30tools.com/youtube-channel-id-finder",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Youtube Channel Id Finder",
  description:
    "Professional youtube channel id finder tool. Free online processing with high-quality results. No registration required, instant results.",
  url: "https://30tools.com/youtube-channel-id-finder",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "30tools",
    url: "https://30tools.com",
  },
};

export default function YouTubeChannelIDFinderPage() {
  return <YouTubeChannelIDFinderTool />;
}

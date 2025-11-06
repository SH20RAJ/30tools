import TikTokTagGeneratorClient from './TikTokTagGeneratorClient';

export const metadata = {
  title: "TikTok Tag Generator - Generate Hashtags for TikTok Videos",
  description: "Free tiktok tag generator tool with professional results. No registration required, instant processing, secure & unlimited use."s reach and engagement. Get relevant hashtags to improve your TikTok content discoverability.",
  keywords: "tiktok hashtags, tiktok tag generator, tiktok trends, viral hashtags, tiktok seo, hashtag generator, tiktok keywords",
  openGraph: {
    title: "TikTok Tag Generator - Generate Hashtags for TikTok Videos",
    description: "Generate trending TikTok hashtags to boost your video's reach and engagement. Get relevant hashtags to improve discoverability.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Tag Generator - Generate Hashtags for TikTok Videos",
    description: "Generate trending TikTok hashtags to boost your video's reach and engagement. Get relevant hashtags to improve discoverability.",
  }
,
  alternates: {
    canonical: "https://30tools.com/tiktok-tag-generator"
  }
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Tiktok Tag Generator",
  "description": "Free tiktok tag generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
  "url": "https://30tools.com/tiktok-tag-generator",
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

export default function TikTokTagGeneratorPage() {
  return <TikTokTagGeneratorClient />;
}

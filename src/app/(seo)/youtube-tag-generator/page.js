import YouTubeTagGeneratorClient from "./YouTubeTagGeneratorClient";

export const metadata = {
  title: "YouTube Tag Generator - Generate SEO Tags for YouTube Videos",
  description:
    "Free youtube tag generator tool with professional results. No registration required, instant processing, secure & unlimited use. Improve your video's discoverability. Get relevant, trending tags to boost your YouTube SEO and increase views.",
  keywords:
    "youtube tags, youtube tag generator, youtube seo, video tags, youtube optimization, video seo tags, youtube keywords",
  openGraph: {
    title: "YouTube Tag Generator - Generate SEO Tags for YouTube Videos",
    description:
      "Generate optimized YouTube tags to improve your video's discoverability. Get relevant, trending tags to boost your YouTube SEO.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Tag Generator - Generate SEO Tags for YouTube Videos",
    description:
      "Generate optimized YouTube tags to improve your video's discoverability. Get relevant, trending tags to boost your YouTube SEO.",
  },

  alternates: {
    canonical: "https://30tools.com/youtube-tag-generator",
  },
};

const _jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Youtube Tag Generator",
  description:
    "Free youtube tag generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
  url: "https://30tools.com/youtube-tag-generator",
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

export default function YouTubeTagGeneratorPage() {
  return <YouTubeTagGeneratorClient />;
}

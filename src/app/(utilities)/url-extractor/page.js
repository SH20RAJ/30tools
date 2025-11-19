import URLExtractorTool from "@/components/tools/text/URLExtractorTool";

export const metadata = {
  title: "URL/Link Extractor - Extract URLs from Text | 30tools",
  description:
    "Extract all URLs and links from text, documents, or web pages. Find and extract website links using our free URL extractor tool.",
  keywords: [
    "url extractor",
    "url extractor online",
    "free url extractor",
    "url extractor tool",
    "online url extractor free",
    "professional url extractor",
    "url extractor online tool",
    "best url extractor free",
    "url extractor web app",
    "url extractor utility",
    "online tool",
    "free utility",
    "web application",
  ],
  openGraph: {
    title: "URL/Link Extractor - Extract URLs from Text | 30tools",
    description:
      "Extract all URLs and links from text, documents, or web pages. Find and extract website links using our free URL extractor tool.",
    type: "website",
    url: "https://30tools.com/url-extractor",
  },
  twitter: {
    card: "summary_large_image",
    title: "URL/Link Extractor - Extract URLs from Text | 30tools",
    description:
      "Extract all URLs and links from text, documents, or web pages. Find and extract website links using our free URL extractor tool.",
  },
  canonical: "https://30tools.com/url-extractor",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Url Extractor",
  description:
    "Professional url extractor tool. Free online processing with high-quality results. No registration required, instant results.",
  url: "https://30tools.com/url-extractor",
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

export default function URLExtractorPage() {
  return <URLExtractorTool />;
}

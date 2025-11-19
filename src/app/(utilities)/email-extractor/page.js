import EmailExtractorTool from "@/components/tools/text/EmailExtractorTool";

export const metadata = {
  title: "Email Extractor - Extract Email Addresses from Text | 30tools",
  description:
    "Extract email addresses from any text, documents, or websites. Find and extract all email addresses using our powerful email extractor tool.",
  keywords: [
    "email extractor",
    "email extractor online",
    "free email extractor",
    "email extractor tool",
    "online email extractor free",
    "professional email extractor",
    "email extractor online tool",
    "best email extractor free",
    "email extractor web app",
    "email extractor utility",
    "online tool",
    "free utility",
    "web application",
  ],
  openGraph: {
    title: "Email Extractor - Extract Email Addresses from Text | 30tools",
    description:
      "Extract email addresses from any text, documents, or websites. Find and extract all email addresses using our powerful email extractor tool.",
    type: "website",
    url: "https://30tools.com/email-extractor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Extractor - Extract Email Addresses from Text | 30tools",
    description:
      "Extract email addresses from any text, documents, or websites. Find and extract all email addresses using our powerful email extractor tool.",
  },
  canonical: "https://30tools.com/email-extractor",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Email Extractor",
  description:
    "Professional email extractor tool. Free online processing with high-quality results. No registration required, instant results.",
  url: "https://30tools.com/email-extractor",
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

export default function EmailExtractorPage() {
  return <EmailExtractorTool />;
}

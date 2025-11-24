import DuplicateLineRemoverTool from "@/components/tools/text/DuplicateLineRemoverTool";

export const metadata = {
  title: "Duplicate Line Remover - Free Online Tool | Professional Results",
  description:
    "Free online tool to remove duplicate lines from text and lists. Clean your data by removing repeated entries with options for case sensitivity and sorting.",
  keywords: [
    "duplicate line remover",
    "duplicate line remover online",
    "free duplicate line remover",
    "duplicate line remover tool",
    "online duplicate line remover free",
    "professional duplicate line remover",
    "duplicate line remover online tool",
    "best duplicate line remover free",
    "duplicate line remover web app",
    "duplicate line remover utility",
    "text processing tool",
    "text editor online",
    "text analysis free",
    "writing tools online",
    "text formatter free",
  ],
  longTailKeywords: [
    "remove duplicate lines from text",
    "text duplicate finder",
    "unique lines extractor",
    "duplicate text remover online",
    "clean duplicate entries",
    "remove repeated lines from list",
    "text deduplication tool free",
    "list duplicate remover online",
  ],
  primaryKeyword: "duplicate line remover",
  openGraph: {
    title: "Duplicate Line Remover - Remove Duplicate Lines from Text Online",
    description:
      "Free online tool to remove duplicate lines from text and lists. Clean your data by removing repeated entries.",
    url: "https://30tools.com/duplicate-line-remover",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/duplicate-line-remover.jpg",
        width: 1200,
        height: 630,
        alt: "Free Duplicate Line Remover Tool",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duplicate Line Remover - Remove Duplicate Lines from Text",
    description:
      "Free online tool to remove duplicate lines from text and lists. Clean your data instantly.",
    images: ["/og-images/duplicate-line-remover.jpg"],
  },

  alternates: {
    canonical: "https://30tools.com/duplicate-line-remover",
  },
};

const _jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Duplicate Line Remover",
  description:
    "Professional duplicate line remover to Process text instantly. Free online text tool with advanced features. Perfect for writers, students & professionals.",
  url: "https://30tools.com/duplicate-line-remover",
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

export default function DuplicateLineRemoverPage() {
  return <DuplicateLineRemoverTool />;
}

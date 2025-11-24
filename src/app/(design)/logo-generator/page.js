import LogoGeneratorTool from "@/components/tools/design/LogoGeneratorTool";

export const metadata = {
  title: "Logo Generator - Free Online Generator | Create Instantly",
  description:
    "Generate Process instantly with our free logo generator. Professional quality results, unlimited generations. Perfect for creators, developers & businesses.",
  keywords: [
    "logo generator",
    "logo generator online",
    "free logo generator",
    "logo generator tool",
    "online logo generator free",
    "professional logo generator",
    "logo generator online tool",
    "best logo generator free",
    "logo generator web app",
    "logo generator utility",
    "online tool",
    "free utility",
    "web application",
  ],
  longTailKeywords: [
    "free logo generator no watermark",
    "simple logo maker online",
    "business logo creator free",
    "text based logo generator",
    "professional logo design tool",
    "custom logo maker with fonts",
    "logo generator for small business",
    "create logo online free download",
  ],
  primaryKeyword: "logo generator",
  openGraph: {
    title: "Free Logo Generator - Create Professional Business Logos Online",
    description:
      "Create professional logos instantly with our free logo generator. Choose from text-based designs, custom fonts, colors, and effects.",
    url: "https://30tools.com/logo-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/logo-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Free Logo Generator Tool",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Logo Generator - Create Professional Business Logos",
    description:
      "Create professional logos instantly with our free logo generator. No design skills required.",
    images: ["/og-images/logo-generator.jpg"],
  },

  alternates: {
    canonical: "https://30tools.com/logo-generator",
  },
};

const _jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Logo Generator",
  description:
    "Generate Process instantly with our free logo generator. Professional quality results, unlimited generations. Perfect for creators, developers & businesses.",
  url: "https://30tools.com/logo-generator",
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

export default function LogoGeneratorPage() {
  return <LogoGeneratorTool />;
}

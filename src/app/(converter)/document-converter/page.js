import DocumentConverter from "@/components/tools/converter/DocumentConverterTool";

export const metadata = {
  title: "Document Converter - Convert DOC, DOCX, PDF, TXT | 30tools",
  description:
    "Convert Process instantly with our free document converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
  keywords:
    "document converter, doc converter, docx converter, pdf converter, txt converter",
  openGraph: {
    title: "Document Converter - Convert Document Formats | 30tools",
    description: "Convert between document formats easily.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Document Converter - Free Online Converter | Instant Conversion",
    description:
      "Convert Process instantly with our free document converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
    images: ["/og-images/document-converter.jpg"],
    creator: "@30tools",
  },

  alternates: {
    canonical: "https://30tools.com/document-converter",
  },
};

const _jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Document Converter",
  description:
    "Convert Process instantly with our free document converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
  url: "https://30tools.com/document-converter",
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

export default function DocumentConverterPage() {
  return <DocumentConverter />;
}

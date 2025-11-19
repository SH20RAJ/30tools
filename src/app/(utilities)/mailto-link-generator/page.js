import MailtoLinkGeneratorTool from "@/components/tools/utilities/MailtoLinkGeneratorTool";

export const metadata = {
  title: "Mailto Link Generator - Create Email Links | 30tools",
  description:
    "Generate mailto links with subject, body, CC, and BCC fields. Create clickable email links for websites with our free mailto link generator tool.",
  keywords: [
    "mailto link generator",
    "mailto link generator online",
    "free mailto link generator",
    "mailto link generator tool",
    "online mailto link generator free",
    "professional mailto link generator",
    "mailto link generator online tool",
    "best mailto link generator free",
    "mailto link generator web app",
    "mailto link generator utility",
    "online tool",
    "free utility",
    "web application",
  ],
  openGraph: {
    title: "Mailto Link Generator - Create Email Links | 30tools",
    description:
      "Generate mailto links with subject, body, CC, and BCC fields. Create clickable email links for websites with our free mailto link generator tool.",
    type: "website",
    url: "https://30tools.com/mailto-link-generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mailto Link Generator - Create Email Links | 30tools",
    description:
      "Generate mailto links with subject, body, CC, and BCC fields. Create clickable email links for websites with our free mailto link generator tool.",
  },
  canonical: "https://30tools.com/mailto-link-generator",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Mailto Link Generator",
  description:
    "Free mailto link generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
  url: "https://30tools.com/mailto-link-generator",
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

export default function MailtoLinkGeneratorPage() {
  return <MailtoLinkGeneratorTool />;
}

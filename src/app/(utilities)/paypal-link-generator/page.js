import PayPalLinkGeneratorTool from "@/components/tools/utilities/PayPalLinkGeneratorTool";

export const metadata = {
  title: "PayPal Link Generator - Create Payment Links | 30tools",
  description:
    "Generate PayPal payment links for donations, products, and services. Create custom PayPal.me links and payment buttons with our free generator.",
  keywords: [
    "paypal link generator",
    "paypal link generator online",
    "free paypal link generator",
    "paypal link generator tool",
    "online paypal link generator free",
    "professional paypal link generator",
    "paypal link generator online tool",
    "best paypal link generator free",
    "paypal link generator web app",
    "paypal link generator utility",
    "online tool",
    "free utility",
    "web application",
  ],
  openGraph: {
    title: "PayPal Link Generator - Create Payment Links | 30tools",
    description:
      "Generate PayPal payment links for donations, products, and services. Create custom PayPal.me links and payment buttons with our free generator.",
    type: "website",
    url: "https://30tools.com/paypal-link-generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "PayPal Link Generator - Create Payment Links | 30tools",
    description:
      "Generate PayPal payment links for donations, products, and services. Create custom PayPal.me links and payment buttons with our free generator.",
  },
  canonical: "https://30tools.com/paypal-link-generator",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Paypal Link Generator",
  description:
    "Free paypal link generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
  url: "https://30tools.com/paypal-link-generator",
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

export default function PayPalLinkGeneratorPage() {
  return <PayPalLinkGeneratorTool />;
}

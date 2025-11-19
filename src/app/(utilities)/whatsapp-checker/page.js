import WhatsAppCheckerTool from "@/components/tools/utilities/WhatsAppCheckerTool";

export const metadata = {
  title: "WhatsApp Checker - Check if Number is on WhatsApp | 30tools",
  description:
    "Check if a phone number is active on WhatsApp. Verify WhatsApp numbers without saving contacts using our free WhatsApp checker tool.",
  keywords: [
    "whatsapp checker",
    "whatsapp checker online",
    "free whatsapp checker",
    "whatsapp checker tool",
    "online whatsapp checker free",
    "professional whatsapp checker",
    "whatsapp checker online tool",
    "best whatsapp checker free",
    "whatsapp checker web app",
    "whatsapp checker utility",
    "online tool",
    "free utility",
    "web application",
  ],
  openGraph: {
    title: "WhatsApp Checker - Check if Number is on WhatsApp | 30tools",
    description:
      "Check if a phone number is active on WhatsApp. Verify WhatsApp numbers without saving contacts using our free WhatsApp checker tool.",
    type: "website",
    url: "https://30tools.com/whatsapp-checker",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Checker - Check if Number is on WhatsApp | 30tools",
    description:
      "Check if a phone number is active on WhatsApp. Verify WhatsApp numbers without saving contacts using our free WhatsApp checker tool.",
  },
  canonical: "https://30tools.com/whatsapp-checker",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Whatsapp Checker",
  description:
    "Professional whatsapp checker tool. Free online processing with high-quality results. No registration required, instant results.",
  url: "https://30tools.com/whatsapp-checker",
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

export default function WhatsAppCheckerPage() {
  return <WhatsAppCheckerTool />;
}

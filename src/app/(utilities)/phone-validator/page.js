import PhoneValidatorTool from "@/components/tools/utilities/PhoneValidatorTool";

export const metadata = {
  title: "Phone Number Validator - Verify Mobile Numbers | 30tools",
  description:
    "Validate phone numbers from any country. Check mobile number format, carrier info, and verify if phone numbers are valid with our free validator tool.",
  keywords: [
    "phone validator",
    "phone validator online",
    "free phone validator",
    "phone validator tool",
    "online phone validator free",
    "professional phone validator",
    "phone validator online tool",
    "best phone validator free",
    "phone validator web app",
    "phone validator utility",
    "online tool",
    "free utility",
    "web application",
  ],
  openGraph: {
    title: "Phone Number Validator - Verify Mobile Numbers | 30tools",
    description:
      "Validate phone numbers from any country. Check mobile number format, carrier info, and verify if phone numbers are valid with our free validator tool.",
    type: "website",
    url: "https://30tools.com/phone-validator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phone Number Validator - Verify Mobile Numbers | 30tools",
    description:
      "Validate phone numbers from any country. Check mobile number format, carrier info, and verify if phone numbers are valid with our free validator tool.",
  },
  canonical: "https://30tools.com/phone-validator",
};

const _jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Phone Validator",
  description:
    "Professional phone validator tool. Free online processing with high-quality results. No registration required, instant results.",
  url: "https://30tools.com/phone-validator",
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

export default function PhoneValidatorPage() {
  return <PhoneValidatorTool />;
}

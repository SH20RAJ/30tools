import PasswordGeneratorTool from "@/components/tools/security/PasswordGeneratorTool";

export const metadata = {
  title: "Password Generator - Generate Secure Random Passwords",
  description:
    "Free password generator2 tool with professional results. No registration required, instant processing, secure & unlimited use.",
  keywords:
    "password generator, secure password generator, random password generator, strong password creator, password strength checker",
  alternates: {
    canonical: "https://30tools.com/password-generator2",
  },
  openGraph: {
    title: "Password Generator - Generate Secure Random Passwords",
    description:
      "Generate strong, secure passwords with customizable options and strength analysis.",
    url: "https://30tools.com/password-generator2",
    images: [
      {
        url: "/og-images/password-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Password Generator Tool",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Password Generator2 - Free Online Generator | Create Instantly",
    description:
      "Free password generator2 tool with professional results. No registration required, instant processing, secure & unlimited use.",
    images: ["/og-images/password-generator2.jpg"],
    creator: "@30tools",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Password Generator2",
  description:
    "Free password generator2 tool with professional results. No registration required, instant processing, secure & unlimited use.",
  url: "https://30tools.com/password-generator2",
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

export default function PasswordGeneratorPage() {
  return <PasswordGeneratorTool />;
}

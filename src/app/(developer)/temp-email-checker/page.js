import TempEmailCheckerTool from '@/components/tools/developer/TempEmailCheckerTool';

export const metadata = {
  title: "Temporary Email Checker - Detect Disposable Email Addresses",
  description: "Free temporary email checker to detect disposable and temporary email addresses. Validate emails against comprehensive blocklist and allowlist databases.",
  keywords: "temporary email checker, disposable email detector, temp mail checker, email validation, fake email detector, throwaway email checker",
  longTailKeywords: [
    "temporary email address checker online",
    "disposable email domain detector",
    "temp mail validation tool free",
    "fake email address checker",
    "throwaway email detector online",
    "email domain validation tool"
  ],
  primaryKeyword: "temporary email checker",
  openGraph: {
    title: "Temporary Email Checker - Detect Disposable Email Addresses",
    description: "Free temporary email checker to detect disposable and temporary email addresses. Validate emails against comprehensive databases.",
    url: "https://30tools.com/temp-email-checker",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/temp-email-checker.jpg",
        width: 1200,
        height: 630,
        alt: "Free Temporary Email Checker Tool"
      },
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Temporary Email Checker - Detect Disposable Email Addresses",
    description: "Free temporary email checker to detect disposable and temporary email addresses.",
    images: ["/og-images/temp-email-checker.jpg"]
  },

  alternates: {
    canonical: "https://30tools.com/temp-email-checker"
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Temp Email Checker",
  "description": "Professional temp email checker for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
  "url": "https://30tools.com/temp-email-checker",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  },
};

export default function TempEmailCheckerPage() {
  return <TempEmailCheckerTool />;
}
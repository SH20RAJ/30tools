import EmailBreachCheckerTool from '@/components/tools/developer/EmailBreachCheckerTool';

export const metadata = {
  title: "Email Breach Checker - Check if Your Email is Compromised",
  description: "Free email breach checker to see if your email has been compromised in data breaches. Check against billions of breached accounts using HaveIBeenPwned database.",
  keywords: "email breach checker, data breach checker, email security, compromised email, haveibeenpwned, email breach check",
  openGraph: {
    title: "Email Breach Checker - Check if Your Email is Compromised",
    description: "Free tool to check if your email has been compromised in data breaches. Protect your online security.",
    url: "https://30tools.com/email-breach-checker",
    images: [
      {
        url: "/og-images/email-breach-checker.jpg",
        width: 1200,
        height: 630,
        alt: "Email Breach Checker Tool"
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Email Breach Checker - Free Developer Tool | Professional Coding",
    description: "Professional email breach checker for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
    images: ["/og-images/email-breach-checker.jpg"],
    creator: "@30tools"
  },

  alternates: {
    canonical: "https://30tools.com/email-breach-checker"
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Email Breach Checker",
  "description": "Professional email breach checker for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
  "url": "https://30tools.com/email-breach-checker",
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

export default function EmailBreachCheckerPage() {
  return <EmailBreachCheckerTool />;
}
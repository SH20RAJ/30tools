import PasswordBreachCheckerTool from '@/components/tools/developer/PasswordBreachCheckerTool';

export const metadata = {
  title: "Password Breach Checker - Free Online Tool | Professional Results",
  description: "Free password breach checker to see if your email or password has been compromised in data breaches. Check against billions of breached accounts instantly.",
  keywords: "password breach checker, email breach check, data breach checker, password security, compromised password, haveibeenpwned, security check",
  openGraph: {
    title: "Password Breach Checker - 30tools",
    description: "Free tool to check if your email or password has been compromised in data breaches. Protect your online security.",
    url: "https://30tools.com/password-breach-checker",
    images: [
      {
        url: "/og-images/password-breach-checker.jpg",
        width: 1200,
        height: 630,
        alt: "Password Breach Checker Tool"
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Password Breach Checker - Free Online Tool | 30tools",
    description: "Professional password breach checker for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
    images: ["/og-images/password-breach-checker.jpg"],
    creator: "@30tools"
  },

  alternates: {
    canonical: "https://30tools.com/password-breach-checker"
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Password Breach Checker",
  "description": "Professional password breach checker for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
  "url": "https://30tools.com/password-breach-checker",
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

export default function PasswordBreachCheckerPage() {
  return <PasswordBreachCheckerTool />;
}
import PasswordGeneratorTool from '@/components/tools/text/PasswordGeneratorTool';

export const metadata = {
  title: "Password Generator - Create Strong Secure Passwords",
  description: "Generate strong, secure passwords instantly with our free password generator. Customize length, include special characters, numbers, and symbols. Perfect for online security.",
  keywords: "password generator, secure password generator, strong password generator, random password generator, password creator, secure password maker, password generator online free, generate password",
  alternates: {
    canonical: "https://30tools.com/password-generator"
  },
  openGraph: {
    title: "Free Password Generator - Create Strong Secure Passwords",
    description: "Generate strong, secure passwords instantly. Customize length, include special characters, numbers, and symbols for maximum security.",
    url: "https://30tools.com/password-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/password-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Free Password Generator Tool - 30tools"
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free Password Generator - Create Strong Secure Passwords",
    description: "Generate strong, secure passwords instantly. Customize length and character types for maximum security.",
    images: ["/og-images/password-generator.jpg"],
    creator: '@30tools'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function PasswordGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Password Generator - Free Secure Password Creator",
    "description": "Generate strong, secure passwords with customizable length and character sets. Perfect for creating unique passwords for all your accounts.",
    "url": "https://30tools.com/password-generator",
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "30tools",
      "url": "https://30tools.com"
    },
    "featureList": [
      "Customizable password length",
      "Include/exclude character types",
      "Uppercase and lowercase letters",
      "Numbers and special characters",
      "Password strength indicator",
      "Copy to clipboard",
      "Generate multiple passwords",
      "No storage or logging"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1567"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PasswordGeneratorTool />
    </>
  );
}

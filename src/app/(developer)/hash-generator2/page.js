import HashGeneratorTool from '@/components/tools/security/HashGeneratorTool';

export const metadata = {
  title: "Hash Generator - MD5, SHA-1, SHA-256, SHA-512, SHA-3",
  description: "Generate cryptographic hashes with multiple algorithms. MD5, SHA-1, SHA-256, SHA-512, and SHA-3 hash generator. File and text support with instant results.",
  keywords: "hash generator, md5 generator, sha256 generator, sha512 generator, cryptographic hash, checksum generator",
  openGraph: {
    title: "Hash Generator - MD5, SHA-1, SHA-256, SHA-512, SHA-3",
    description: "Generate cryptographic hashes with multiple algorithms and file support.",
    url: "https://30tools.com/hash-generator",
    images: [
      {
        url: "/og-images/hash-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Hash Generator Tool"
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hash Generator2 - Free Online Generator | Create Instantly",
    description: "Generate Process instantly with our free hash generator2. Professional quality results, unlimited generations. Perfect for creators, developers & businesses.",
    images: ["/og-images/hash-generator2.jpg"],
    creator: "@30tools"
  },

  alternates: {
    canonical: "https://30tools.com/hash-generator2"
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Hash Generator2",
  "description": "Generate Process instantly with our free hash generator2. Professional quality results, unlimited generations. Perfect for creators, developers & businesses.",
  "url": "https://30tools.com/hash-generator2",
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

export default function HashGeneratorPage() {
  return <HashGeneratorTool />;
}

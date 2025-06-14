import HashGeneratorTool from '@/components/tools/developer/HashGeneratorTool';

export const metadata = {
  title: "Free Hash Generator Online - MD5, SHA-256, SHA-512 Hash Calculator | 30tools",
  description: "Generate secure cryptographic hashes from text or files. Support for MD5, SHA-1, SHA-256, SHA-512, and more. Perfect for data integrity verification and security applications.",
  keywords: "hash generator, md5 generator, sha256 generator, sha512 generator, cryptographic hash, checksum calculator, hash calculator online, data integrity",
  openGraph: {
    title: "Free Hash Generator Online - MD5, SHA-256, SHA-512 Hash Calculator",
    description: "Generate secure cryptographic hashes from text or files. Support for MD5, SHA-256, SHA-512, and more.",
    url: "https://30tools.com/hash-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/hash-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Free Hash Generator Online"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Hash Generator Online - MD5, SHA-256, SHA-512 Hash Calculator",
    description: "Generate secure cryptographic hashes from text or files. Perfect for developers and security applications.",
    images: ["/og-images/hash-generator.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/hash-generator"
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
  },
  category: 'Developer Tools',
  other: {
    'application-name': '30tools',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Hash Generator - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};

export default function HashGeneratorPage() {
  return <HashGeneratorTool />;
}

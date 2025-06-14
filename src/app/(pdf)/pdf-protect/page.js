import PdfProtectTool from '@/components/tools/pdf/PdfProtectTool';

export const metadata = {
  title: "Free PDF Password Protector - Add Password Protection to PDF | 30tools",
  description: "Add password protection to PDF files with custom permissions. Secure your documents with 256-bit encryption instantly. Free, secure, no watermarks.",
  keywords: "pdf password protect, add password to pdf, pdf security, protect pdf online, pdf encryption, secure pdf, password protect pdf free",
  openGraph: {
    title: "Free PDF Password Protector - Secure Your PDF Files",
    description: "Add password protection to PDF files with military-grade encryption and custom permissions.",
    url: "https://30tools.com/pdf-protect",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/pdf-protect.jpg",
        width: 1200,
        height: 630,
        alt: "Free PDF Password Protector"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PDF Password Protector - Secure Your PDF Files",
    description: "Add password protection with 256-bit encryption and custom permissions.",
    images: ["/og-images/pdf-protect.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/pdf-protect"
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
  category: 'PDF Tools',
  other: {
    'application-name': '30tools',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'PDF Protect - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};

export default function PdfProtectPage() {
  return <PdfProtectTool />;
}

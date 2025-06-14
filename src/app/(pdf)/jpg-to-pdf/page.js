import JpgToPdfTool from '@/components/tools/pdf/JpgToPdfTool';

export const metadata = {
  title: "Free JPG to PDF Converter - Convert Images to PDF Online | 30tools",
  description: "Convert JPG, JPEG, PNG, and other images to PDF documents. Combine multiple images into a single PDF with custom layouts. Free, secure, high quality.",
  keywords: "jpg to pdf, jpeg to pdf, png to pdf, image to pdf converter, convert images to pdf, photos to pdf, picture to pdf online",
  openGraph: {
    title: "Free JPG to PDF Converter - Convert Images to PDF Online",
    description: "Convert JPG, PNG, and other images to PDF with custom layouts and high quality output.",
    url: "https://30tools.com/jpg-to-pdf",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/jpg-to-pdf.jpg",
        width: 1200,
        height: 630,
        alt: "Free JPG to PDF Converter"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free JPG to PDF Converter - Convert Images to PDF Online",
    description: "Convert up to 50 images to PDF with custom layouts. Perfect for portfolios and albums.",
    images: ["/og-images/jpg-to-pdf.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/jpg-to-pdf"
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
    'apple-mobile-web-app-title': 'JPG to PDF - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};

export default function JpgToPdfPage() {
  return <JpgToPdfTool />;
}

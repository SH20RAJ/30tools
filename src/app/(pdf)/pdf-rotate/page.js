import PdfRotateTool from '@/components/tools/pdf/PdfRotateTool';

export const metadata = {
  title: "Free PDF Rotate Tool - Rotate PDF Pages Online | 30tools",
  description: "Rotate PDF pages to correct orientation. Fix upside-down pages, align mixed orientations, and prepare documents perfectly. Free, secure, instant processing.",
  keywords: "pdf rotate, rotate pdf pages, fix pdf orientation, rotate pdf online, pdf page rotation, correct pdf pages, rotate pdf free",
  openGraph: {
    title: "Free PDF Rotate Tool - Fix Page Orientation Instantly",
    description: "Rotate PDF pages to correct orientation with live preview and batch operations.",
    url: "https://30tools.com/pdf-rotate",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/pdf-rotate.jpg",
        width: 1200,
        height: 630,
        alt: "Free PDF Rotate Tool"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PDF Rotate Tool - Fix Page Orientation Instantly",
    description: "Rotate PDF pages with live preview. Perfect for fixing scanned documents.",
    images: ["/og-images/pdf-rotate.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/pdf-rotate"
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
    'apple-mobile-web-app-title': 'PDF Rotate - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};

export default function PdfRotatePage() {
  return <PdfRotateTool />;
}

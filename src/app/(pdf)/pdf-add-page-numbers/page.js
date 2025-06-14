import PdfAddPageNumbersTool from '@/components/tools/pdf/PdfAddPageNumbersTool';

export const metadata = {
  title: "Free PDF Add Page Numbers Tool - Number PDF Pages Online | 30tools",
  description: "Add customizable page numbers to PDF documents. Choose position, format, styling, and advanced options for professional document numbering. Free, secure, instant.",
  keywords: "add page numbers to pdf, pdf page numbering, number pdf pages, pdf page numbers online, add page numbers pdf free",
  openGraph: {
    title: "Free PDF Add Page Numbers Tool - Professional Document Numbering",
    description: "Add customizable page numbers to PDF with full control over position, format, and styling.",
    url: "https://30tools.com/pdf-add-page-numbers",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/pdf-add-page-numbers.jpg",
        width: 1200,
        height: 630,
        alt: "Free PDF Add Page Numbers Tool"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PDF Add Page Numbers Tool - Professional Document Numbering",
    description: "Add customizable page numbers with live preview. Perfect for business documents.",
    images: ["/og-images/pdf-add-page-numbers.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/pdf-add-page-numbers"
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
    'apple-mobile-web-app-title': 'PDF Add Page Numbers - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};

export default function PdfAddPageNumbersPage() {
  return <PdfAddPageNumbersTool />;
}

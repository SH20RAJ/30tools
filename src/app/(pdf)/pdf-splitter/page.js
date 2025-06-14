import PdfSplitterTool from '@/components/tools/pdf/PdfSplitterTool';

export const metadata = {
  title: "Free PDF Splitter Online - Split PDF into Separate Files | 30tools",
  description: "Split PDF files into separate documents by pages, ranges, or intervals. Extract specific pages or divide large PDFs instantly. No watermarks, secure processing.",
  keywords: "pdf splitter, split pdf online, separate pdf pages, extract pdf pages, pdf page extractor, divide pdf document, pdf separator tool, split pdf free",
  openGraph: {
    title: "Free PDF Splitter Online - Split PDF into Separate Files",
    description: "Split PDF files into separate documents by pages, ranges, or intervals. Extract specific pages instantly.",
    url: "https://30tools.com/pdf-splitter",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/pdf-splitter.jpg",
        width: 1200,
        height: 630,
        alt: "Free PDF Splitter Online"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PDF Splitter Online - Split PDF into Separate Files",
    description: "Split PDF files by pages, ranges, or intervals. Perfect for organizing documents.",
    images: ["/og-images/pdf-splitter.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/pdf-splitter"
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
    'apple-mobile-web-app-title': 'PDF Splitter - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};

export default function PdfSplitterPage() {
  return <PdfSplitterTool />;
}

import JpgToPdfTool from '@/components/tools/pdf/JpgToPdfTool';

export const metadata = {
  title: "Free PNG to PDF Converter - Convert PNG Images to PDF | 30tools",
  description: "Convert PNG images to PDF documents with transparency support. Combine multiple PNG files into a single PDF with custom layouts. Free, secure, high quality.",
  keywords: "png to pdf, convert png to pdf, png images to pdf, transparency to pdf, png pdf converter online, batch png to pdf",
  openGraph: {
    title: "Free PNG to PDF Converter - Convert PNG Images to PDF",
    description: "Convert PNG images to PDF with transparency support and custom layouts.",
    url: "https://30tools.com/png-to-pdf",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/png-to-pdf.jpg",
        width: 1200,
        height: 630,
        alt: "Free PNG to PDF Converter"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PNG to PDF Converter - Convert PNG Images to PDF",
    description: "Convert PNG images with transparency to PDF. Perfect for graphics and logos.",
    images: ["/og-images/png-to-pdf.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/png-to-pdf"
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
    'apple-mobile-web-app-title': 'PNG to PDF - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};

// Custom component wrapper for PNG-specific messaging
function PngToPdfTool() {
  return (
    <div>
      {/* Override the title and description for PNG-specific messaging */}
      <style jsx global>{`
        h1 { display: none; }
      `}</style>
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Free PNG to PDF Converter</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Convert PNG images to PDF documents with full transparency support. 
            Perfect for logos, graphics, and designs that need transparent backgrounds.
          </p>
        </div>
      </div>
      
      <JpgToPdfTool />
    </div>
  );
}

export default function PngToPdfPage() {
  return <PngToPdfTool />;
}

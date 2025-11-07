import PDFToolsNavbar from '@/components/navigation/PDFToolsNavbar';
import PDFToolsFooter from '@/components/footers/PDFToolsFooter';

export const metadata = {
  title: "PDF Tools - Free Online PDF Processing | 30tools",
  description: "Professional PDF tools for merging, splitting, compression, and conversion. Free online PDF processing with batch support and no watermarks.",
  keywords: "pdf tools, pdf merger, pdf splitter, pdf compressor, free pdf tools online",
  openGraph: {
    title: "PDF Tools - Free Online PDF Processing",
    description: "Professional PDF tools for merging, splitting, compression, and conversion.",
    url: "https://30tools.com/pdf-tools",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/pdf-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Free PDF Tools"
      },
    ],
    type: "website"
  },
};

export default function PDFToolsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <PDFToolsNavbar />
      <main className="flex-1">
        {children}
      </main>
      <PDFToolsFooter />
    </div>
  );
}

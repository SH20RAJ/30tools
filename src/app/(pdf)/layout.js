import PDFToolsNavbar from "@/components/navigation/PDFToolsNavbar";
import PDFToolsFooter from "@/components/footers/PDFToolsFooter";

export const metadata = {
  title: "PDF Tools - Free Online PDF Processing | 30tools",
  description:
    "Professional PDF tools for merging, splitting, compression, and conversion. Free online PDF processing with batch support and no watermarks.",
  keywords:
    "pdf tools, pdf merger, pdf splitter, pdf compressor, free pdf tools online, online pdf editor, convert pdf to word, image to pdf converter, secure pdf tools, pdf utilities, 30tools pdf, unlock pdf, protect pdf, compress pdf online free",
  openGraph: {
    title: "PDF Tools - Free Online PDF Processing",
    description:
      "Professional PDF tools for merging, splitting, compression, and conversion.",
    url: "https://30tools.com/pdf-tools",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/pdf-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Free PDF Tools",
      },
    ],
    type: "website",
  },
};

export default function PDFToolsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <PDFToolsNavbar />
      <main className="flex-1">{children}</main>
      <PDFToolsFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Free Online PDF Tools Collection",
            description: "A complete suite of free online PDF tools to merge, split, compress, and convert PDF files securely.",
            url: "https://30tools.com/pdf-tools",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                { "@type": "ListItem", position: 1, url: "https://30tools.com/pdf-merger", name: "PDF Merger" },
                { "@type": "ListItem", position: 2, url: "https://30tools.com/pdf-splitter", name: "PDF Splitter" },
                { "@type": "ListItem", position: 3, url: "https://30tools.com/pdf-compressor", name: "PDF Compressor" },
                { "@type": "ListItem", position: 4, url: "https://30tools.com/pdf-to-word", name: "PDF to Word" },
                { "@type": "ListItem", position: 5, url: "https://30tools.com/image-to-pdf", name: "Image to PDF" },
                { "@type": "ListItem", position: 6, url: "https://30tools.com/pdf-editor", name: "PDF Editor" },
                { "@type": "ListItem", position: 7, url: "https://30tools.com/pdf-protect", name: "PDF Protect" },
                { "@type": "ListItem", position: 8, url: "https://30tools.com/pdf-unlocker", name: "PDF Unlocker" }
              ]
            }
          }),
        }}
      />
    </div>
  );
}

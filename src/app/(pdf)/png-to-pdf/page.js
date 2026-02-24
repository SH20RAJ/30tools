import Link from 'next/link';
import ImagesToPdf from "@/components/tools/pdf/ImagesToPdf";

export const metadata = {
  title: "PNG to PDF Converter - Free Online Tool | 30tools",
  description: "Convert PNG images to PDF documents quickly and easily. High quality, fast, and 100% free online tool.",
  keywords: "png to pdf, convert png to pdf, image to pdf, free online converter",
  openGraph: {
    title: "PNG to PDF Converter (2026) - Free Tool",
    description: "⚡ Convert PNG images to PDF documents quickly and easily.",
    url: "https://30tools.com/png-to-pdf",
    siteName: "30tools",
    type: "website",
  },
  alternates: { canonical: "https://30tools.com/png-to-pdf" },
  robots: { index: true, follow: true }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function PngToPdfPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li>/</li>
              <li><Link href="/pdf-tools" className="hover:text-primary">PDF Tools</Link></li>
              <li>/</li>
              <li className="text-foreground font-medium">PNG to PDF</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">PNG to PDF</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Easily convert PNG images to PDF documents without losing quality. Completely free to use.
            </p>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <ImagesToPdf acceptedFormats=".png,image/png" defaultTitle="PNG to PDF Converter" />
          </div>
        </div>
      </div>
    </>
  );
}

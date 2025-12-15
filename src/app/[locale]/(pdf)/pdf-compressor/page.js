import PdfCompressorTool from "@/components/tools/pdf/PdfCompressorTool";
import {
  BreadcrumbsEnhanced,
  FAQSection,
  ReviewSnippets,
  RelatedTools,
  UserComments,
  QuickActions,
} from "@/components/seo";
import {
  GeneratorToolFeatures,
  GeneratorToolExamples,
} from "@/components/seo/GeneratorToolsHub";
import { getPdfToolFAQs } from "@/constants/seo/pdf-faqs";

export const metadata = {
  title: "Free PDF Compressor (2026) - Reduce Size Online | 30Tools",
  description: "Compress PDF documents online for free (Updated 2026). Reduce PDF size by up to 80% without quality loss. Secure, private & no watermarks.",
  keywords: [
    "pdf compressor 2026",
    "compress pdf online free",
    "reduce pdf size without losing quality",
    "pdf size reducer online",
    "shrink pdf file size free",
    "online pdf optimizer",
    "compress large pdf",
    "updated 2026",
    "pdf compression tool"
  ].join(", "),
  alternates: {
    canonical: "https://30tools.com/pdf-compressor",
  },
  openGraph: {
    title: "Free PDF Compressor (2026) - Reduce PDF Size Online",
    description: "⚡ Compress PDF documents online for free! Reduce size by 80% with no quality loss (Updated 2026).",
    url: "https://30tools.com/pdf-compressor",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/pdf-compressor.jpg",
        width: 1200,
        height: 630,
        alt: "Free PDF Compressor 2026 - Secure Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PDF Compressor (2026) - Secure Online Tool",
    description: "⚡ Reduce PDF size online free. Updated 2026!",
    images: ["/og-images/pdf-compressor.jpg"],
    creator: "@30tools",
  },
  category: "PDF Tools",
};

export default function PdfCompressorPage() {
  // Tool-specific data
  const toolData = {
    id: "pdf-compressor",
    name: "PDF Compressor",
    description: "Reduce PDF file size while maintaining quality",
    category: "pdf",
    route: "/pdf-compressor",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "PDF Tools", url: "/pdf-tools" },
    { name: "PDF Compressor", url: "/pdf-compressor" },
  ];

  // Tool features
  const features = [
    "Smart Compression Algorithm",
    "Adjustable Quality Levels",
    "Preserve Document Quality",
    "Batch Compression Support",
    "100% Secure Client-Side Processing",
    "No File Size Limits",
    "Works on Mobile & Desktop",
    "No Watermarks Added",
  ];

  // Usage examples
  const examples = [
    {
      title: "Email Attachments",
      description: "Shrink PDFs to fit email limits",
      input: "Large_Report.pdf (25MB)",
      output: "Report_Optimized.pdf (4MB)",
    },
    {
      title: "Web Uploads",
      description: "Optimize for faster loading",
      input: "Portfolio.pdf (50MB)",
      output: "Portfolio_Web.pdf (8MB)",
    },
    {
      title: "Archive Storage",
      description: "Save disk space",
      input: "Scanned_Docs_Folder (1GB)",
      output: "Scanned_Docs_Compressed (300MB)",
    },
  ];

  // FAQ data
  const faqs = getPdfToolFAQs("pdf-compressor");

  // Related tools
  const relatedTools = [
    {
      id: "pdf-merger",
      name: "PDF Merger",
      description: "Combine multiple PDFs",
      route: "/pdf-merger",
      category: "pdf",
    },
    {
      id: "pdf-splitter",
      name: "PDF Splitter",
      description: "Split PDF pages",
      route: "/pdf-splitter",
      category: "pdf",
    },
    {
      id: "jpg-to-pdf",
      name: "JPG to PDF",
      description: "Convert images to PDF",
      route: "/jpg-to-pdf",
      category: "pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Breadcrumbs with Schema */}
      <div className="container mx-auto px-4 pt-6">
        <BreadcrumbsEnhanced customBreadcrumbs={breadcrumbs} />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Free Online PDF Compressor
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Reduce PDF file size significantly without compromising quality.
            Choose your compression level and optimize your documents for email,
            web, or storage.
          </p>

          <QuickActions
            toolName="PDF Compressor"
            toolUrl="https://30tools.com/pdf-compressor"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <PdfCompressorTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples
          tool={toolData}
          examples={examples}
          title="Why Compress PDFs?"
        />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="pdf-compressor"
            title="User Reviews"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Compress PDF Files
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Upload PDF</h3>
              <p className="text-muted-foreground text-sm">
                Select the PDF file you want to compress.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Select Quality</h3>
              <p className="text-muted-foreground text-sm">
                Choose your desired compression level (Low, Medium, High).
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Download</h3>
              <p className="text-muted-foreground text-sm">
                Click "Compress PDF" and download your optimized file.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="PDF Compressor FAQ"
            categoryTitle="PDF Compression"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="pdf-compressor"
            category="pdf"
            tools={relatedTools}
            title="More PDF Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="pdf-compressor"
          toolName="PDF Compressor"
          showStats={true}
          allowComments={true}
        />
      </main>

      {/* Structured Data for Tool */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Free PDF Compressor",
              description:
                "Compress PDF files online for free. Reduce file size while maintaining quality.",
              url: "https://30tools.com/pdf-compressor",
              applicationCategory: "UtilityApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              creator: {
                "@type": "Organization",
                name: "30tools",
                url: "https://30tools.com",
              },
              featureList: features,
              screenshot: "https://30tools.com/screenshots/pdf-compressor.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "1500",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Compress PDF Files",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload PDF",
                  text: "Select the PDF file you want to compress.",
                  url: "https://30tools.com/pdf-compressor#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Select Quality",
                  text: "Choose your desired compression level (Low, Medium, High).",
                  url: "https://30tools.com/pdf-compressor#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Download",
                  text: "Click 'Compress PDF' and download your optimized file.",
                  url: "https://30tools.com/pdf-compressor#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}

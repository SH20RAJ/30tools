import PdfSplitterTool from "@/components/tools/pdf/PdfSplitterTool";
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
  title: "Free Online PDF Splitter (2026) - Extract & Divide PDF | 30Tools",
  description:
    "Best free online pdf splitter to extract pages from PDF or divide large files into multiple documents. split pdf by range or extract individual pages safely.",
  keywords:
    "pdf splitter 2026, split pdf, extract pdf pages, separate pdf, divide pdf, pdf cutter, split pdf online free, pdf page extractor, free pdf tools, smallpdf split, ilovepdf split",
  alternates: {
    canonical: "https://30tools.com/pdf-splitter",
  },
  openGraph: {
    title: "Free PDF Splitter - Split PDF into Separate Files Online",
    description:
      "Split PDF files online for free. Extract pages, separate documents, or split by range. Fast, secure, and no watermarks.",
    url: "https://30tools.com/pdf-splitter",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/pdf-splitter.jpg",
        width: 1200,
        height: 630,
        alt: "PDF Splitter - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PDF Splitter - Split PDF into Separate Files Online",
    description:
      "Split PDF files online for free. Extract pages, separate documents, or split by range. Fast, secure, and no watermarks.",
    images: ["/og-images/pdf-splitter.jpg"],
    creator: "@30tools",
  },
  category: "PDF Tools",
};

export default function PdfSplitterPage() {
  // Tool-specific data
  const toolData = {
    id: "pdf-splitter",
    name: "PDF Splitter",
    description: "Split PDF files into separate documents",
    category: "pdf",
    route: "/pdf-splitter",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "PDF Tools", url: "/pdf-tools" },
    { name: "PDF Splitter", url: "/pdf-splitter" },
  ];

  // Tool features
  const features = [
    "Split by Page Ranges",
    "Extract Individual Pages",
    "Split Every N Pages",
    "Instant Browser Processing",
    "100% Secure & Private",
    "No File Size Limits",
    "Works on All Devices",
    "No Watermarks",
  ];

  // Usage examples
  const examples = [
    {
      title: "Extract Chapters",
      description: "Save specific chapters as new files",
      input: "Textbook.pdf (Pages 10-25)",
      output: "Chapter_1.pdf",
    },
    {
      title: "Separate Invoices",
      description: "Split monthly invoice batch",
      input: "Invoices_2024.pdf (Split every 1 page)",
      output: "Invoice_001.pdf, Invoice_002.pdf...",
    },
    {
      title: "Remove Unwanted Pages",
      description: "Keep only what you need",
      input: "Document.pdf (Pages 1-5, 8-10)",
      output: "Clean_Document.pdf",
    },
  ];

  // FAQ data
  const faqs = getPdfToolFAQs("pdf-splitter");

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
      id: "pdf-compressor",
      name: "PDF Compressor",
      description: "Reduce PDF size",
      route: "/pdf-compressor",
      category: "pdf",
    },
    {
      id: "pdf-to-word",
      name: "PDF to Word",
      description: "Convert PDF to editable Word",
      route: "/pdf-to-word",
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
            Free Online PDF Splitter
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Split PDF files into separate documents instantly. Extract specific
            pages, split by range, or divide large files into smaller parts.
            Secure, fast, and free.
          </p>

          <QuickActions
            toolName="PDF Splitter"
            toolUrl="https://30tools.com/pdf-splitter"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <PdfSplitterTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples
          tool={toolData}
          examples={examples}
          title="Ways to Split PDFs"
        />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="pdf-splitter"
            title="User Reviews"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Split PDF Files
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Upload PDF</h3>
              <p className="text-muted-foreground text-sm">
                Select the PDF file you want to split or extract pages from.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Choose Method</h3>
              <p className="text-muted-foreground text-sm">
                Select page ranges, individual pages, or split intervals.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Download</h3>
              <p className="text-muted-foreground text-sm">
                Click "Split PDF" and download your new separate files.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="PDF Splitter FAQ"
            categoryTitle="PDF Splitting"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="pdf-splitter"
            category="pdf"
            tools={relatedTools}
            title="More PDF Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="pdf-splitter"
          toolName="PDF Splitter"
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
              name: "Free PDF Splitter",
              description:
                "Split PDF files online for free. Extract pages, separate documents, or split by range.",
              url: "https://30tools.com/pdf-splitter",
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
              screenshot: "https://30tools.com/screenshots/pdf-splitter.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "980",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Split PDF Files",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload PDF",
                  text: "Select the PDF file you want to split or extract pages from.",
                  url: "https://30tools.com/pdf-splitter#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Choose Method",
                  text: "Select page ranges, individual pages, or split intervals.",
                  url: "https://30tools.com/pdf-splitter#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Download",
                  text: "Click 'Split PDF' and download your new separate files.",
                  url: "https://30tools.com/pdf-splitter#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}

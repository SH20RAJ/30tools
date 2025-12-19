import PDFEditorTool from "@/components/tools/pdf/PDFEditorTool";
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
  title: "Free Online PDF Editor (2026) - Manage & Edit PDF Pages | 30Tools",
  description: "Best free online pdf editor to extract, delete, rotate, and reorder PDF pages instantly. manage your documents securely without watermarks or installation.",
  keywords: [
    "pdf editor 2026", "edit pdf online free", "delete pdf pages online", "extract pages from pdf",
    "rotate pdf pages permanent", "manage pdf documents", "free pdf organizer", "best pdf editor",
    "smallpdf editor", "ilovepdf editor", "pdf to go editor", "soda pdf editor"
  ].join(", "),
  alternates: {
    canonical: "https://30tools.com/pdf-editor",
  },
  openGraph: {
    title: "Free PDF Editor (2026) - Edit & Manage Pages",
    description: "⚡ Edit PDF files online: Extract, Delete, Rotate or Reorder pages! Free & Secure (Updated 2026).",
    url: "https://30tools.com/pdf-editor",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/pdf-editor.jpg",
        width: 1200,
        height: 630,
        alt: "Free PDF Editor 2026 - Online Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PDF Editor (2026) - Edit Pages Online",
    description: "⚡ Edit, Rotate & Manage PDF pages online. Updated 2026!",
    images: ["/og-images/pdf-editor.jpg"],
    creator: "@30tools",
  },
  category: "PDF Tools",
};

export default function PDFEditorPage() {
  // Tool-specific data
  const toolData = {
    id: "pdf-editor",
    name: "PDF Editor",
    description: "Edit and manage PDF pages and content",
    category: "pdf",
    route: "/pdf-editor",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "PDF Tools", url: "/pdf-tools" },
    { name: "PDF Editor", url: "/pdf-editor" },
  ];

  // Tool features
  const features = [
    "Extract PDF Pages",
    "Delete Unwanted Pages",
    "Rotate Pages",
    "Merge PDFs",
    "Client-Side Processing",
    "No File Upload Limit",
    "Secure & Private",
    "100% Free",
  ];

  // Usage examples
  const examples = [
    {
      title: "Remove Pages",
      description: "Delete unnecessary pages",
      input: "Report.pdf (100 pages)",
      output: "Report_Clean.pdf (95 pages)",
    },
    {
      title: "Extract Content",
      description: "Save specific pages",
      input: "Book.pdf",
      output: "Chapter1.pdf",
    },
    {
      title: "Fix Orientation",
      description: "Rotate mixed pages",
      input: "Scanned_Docs.pdf",
      output: "Corrected_Docs.pdf",
    },
  ];

  // FAQ data
  const faqs = getPdfToolFAQs("pdf-editor");

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
      description: "Split PDF into pages",
      route: "/pdf-splitter",
      category: "pdf",
    },
    {
      id: "pdf-rotate",
      name: "PDF Rotate",
      description: "Rotate PDF pages",
      route: "/pdf-rotate",
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
          <h1 className="text-4xl font-bold mb-4">Free PDF Editor</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Edit and manage your PDF documents online. Extract specific pages,
            delete unwanted content, rotate pages, and organize your files
            securely.
          </p>

          <QuickActions
            toolName="PDF Editor"
            toolUrl="https://30tools.com/pdf-editor"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <PDFEditorTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples
          tool={toolData}
          examples={examples}
          title="What Can You Do?"
        />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="pdf-editor"
            title="User Reviews"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Edit PDF Files
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Upload PDF</h3>
              <p className="text-muted-foreground text-sm">
                Select the PDF file you want to edit.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Select Pages</h3>
              <p className="text-muted-foreground text-sm">
                Enter page numbers to extract, delete, or rotate.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Process</h3>
              <p className="text-muted-foreground text-sm">
                Apply your changes and download the new PDF.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="PDF Editor FAQ"
            categoryTitle="PDF Editing"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="pdf-editor"
            category="pdf"
            tools={relatedTools}
            title="More PDF Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="pdf-editor"
          toolName="PDF Editor"
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
              name: "Free PDF Editor Tool",
              description:
                "Edit PDF files online for free. Extract, delete, and rotate pages.",
              url: "https://30tools.com/pdf-editor",
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
              screenshot: "https://30tools.com/screenshots/pdf-editor.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                reviewCount: "280",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Edit PDF Files",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload PDF",
                  text: "Select the PDF file you want to edit.",
                  url: "https://30tools.com/pdf-editor#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Select Pages",
                  text: "Enter page numbers to extract, delete, or rotate.",
                  url: "https://30tools.com/pdf-editor#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Process",
                  text: "Apply your changes and download the new PDF.",
                  url: "https://30tools.com/pdf-editor#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}

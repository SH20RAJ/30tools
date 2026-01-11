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
    "pdf editor 2026, edit pdf online free, delete pdf pages online, extract pages from pdf, rotate pdf pages permanent, manage pdf documents, free pdf organizer, best pdf editor, remove pages from pdf, separate pdf pages, reorder pdf pages, organize pdf, change pdf page order",
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

        {/* Professional Use Cases Section (SEO & Internal Linking) */}
        <section className="mb-12 bg-gradient-to-br from-cyan-50 to-transparent dark:from-cyan-950/20 p-8 md:p-12 rounded-3xl border border-cyan-100 dark:border-cyan-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Efficient <span className="text-primary">Document Management</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">Thesis & Research Papers</h3>
                  <p className="text-sm text-muted-foreground">
                    Finalizing your dissertation? Remove accidental blank pages or reorder your chapters for a perfect submission.
                    If your file is too large for the portal, use our{" "}
                    <a href="/pdf-compressor" className="text-primary hover:underline font-medium">
                      PDF Compressor
                    </a>{" "}
                    after editing.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Legal Discovery</h3>
                  <p className="text-sm text-muted-foreground">
                    Extract only the relevant case files from a massive 1000-page scan.
                    Need to isolate specific evidence? You can also use our{" "}
                    <a href="/pdf-splitter" className="text-primary hover:underline font-medium">
                      PDF Splitter
                    </a>{" "}
                    for more granular control.
                  </p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-sm border border-border/50">
                <h4 className="font-bold mb-4 border-b border-border/50 pb-2">Editor Capabilities</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span>Page Reordering</span>
                    <span className="font-bold text-green-600">Drag & Drop</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Page Deletion</span>
                    <span className="font-bold text-red-600">Instant</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Rotation</span>
                    <span className="font-bold text-blue-600">90° / 180°</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

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

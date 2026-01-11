import PDFMergerTool from "@/components/tools/pdf/PDFMergerTool";
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
import { FileText, Briefcase, Calculator, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Free PDF Merger Online (2026) - Combine & Join PDFs | 30Tools",
  description: "Best free online pdf merger to combine multiple PDF files into one document instantly. join pdf documents securely with no watermarks or registration required.",
  keywords: [
    "pdf merger 2026", "merge pdf files free", "combine pdf online secure", "join pdf documents",
    "pdf combiner tool", "merge pdf no watermark", "online pdf merger free", "join pdfs",
    "smallpdf merge", "ilovepdf merge", "pdf to go", "soda pdf merge", "pdf maker", "pdf joiner"
  ].join(", "),
  alternates: {
    canonical: "https://30tools.com/pdf-merger",
  },
  openGraph: {
    title: "Free PDF Merger (2026) - Combine PDF Files Securely",
    description: "⚡ Merge multiple PDF files into one for free! Secure, private & no watermarks (Updated 2026).",
    url: "https://30tools.com/pdf-merger",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/pdf-merger.jpg",
        width: 1200,
        height: 630,
        alt: "Free PDF Merger 2026 - Secure Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PDF Merger (2026) - Secure Online Tool",
    description: "⚡ Combine PDF files securely online. Updated 2026!",
    images: ["/og-images/pdf-merger.jpg"],
    creator: "@30tools",
  },
  category: "PDF Tools",
};

export default function PDFMergerPage() {
  // Tool-specific data
  const toolData = {
    id: "pdf-merger",
    name: "PDF Merger",
    description: "Combine multiple PDFs into one",
    category: "pdf",
    route: "/pdf-merger",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "PDF Tools", url: "/pdf-tools" },
    { name: "PDF Merger", url: "/pdf-merger" },
  ];

  // Tool features
  const features = [
    "Merge Unlimited PDF Files",
    "Drag & Drop Reordering",
    "Preserve Original Quality",
    "No Watermarks Added",
    "100% Secure Client-Side Processing",
    "Works on Mobile & Desktop",
    "No Registration Required",
    "Fast & Efficient",
  ];

  // Usage examples
  const examples = [
    {
      title: "Business Reports",
      description: "Combine monthly reports",
      input: "Report Jan.pdf + Report Feb.pdf",
      output: "Q1_Reports.pdf",
    },
    {
      title: "Job Applications",
      description: "Merge resume and cover letter",
      input: "Resume.pdf + CoverLetter.pdf",
      output: "Application.pdf",
    },
    {
      title: "Study Materials",
      description: "Join lecture notes",
      input: "Lecture1.pdf + Lecture2.pdf",
      output: "Course_Notes.pdf",
    },
  ];

  // FAQ data
  const faqs = getPdfToolFAQs("pdf-merger");

  // Related tools
  const relatedTools = [
    {
      id: "pdf-splitter",
      name: "PDF Splitter",
      description: "Split PDF pages",
      route: "/pdf-splitter",
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
            Free Online PDF Merger
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Combine multiple PDF files into one document instantly. Drag and drop
            to reorder pages, merge unlimited files, and download your secure
            PDF without any watermarks.
          </p>

          <QuickActions
            toolName="PDF Merger"
            toolUrl="https://30tools.com/pdf-merger"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <PDFMergerTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples
          tool={toolData}
          examples={examples}
          title="Why Merge PDFs?"
        />

        {/* Financial Document Management Section (High CPC) */}
        <section className="mb-12 bg-gradient-to-br from-amber-50 to-transparent dark:from-amber-950/20 p-8 md:p-12 rounded-3xl border border-amber-100 dark:border-amber-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Financial Document <span className="text-primary">Management</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-background rounded-xl shadow-sm">
                    <Calculator className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Tax Preparation & Audits</h3>
                    <p className="text-sm text-muted-foreground">
                      Simplify your tax season by merging receipts, invoices, and <strong>tax preparation software</strong> exports into a single file. Essential for organized <strong>audit defense</strong>.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-background rounded-xl shadow-sm">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Loan Applications</h3>
                    <p className="text-sm text-muted-foreground">
                      Banks require consolidated <strong>loan application documentation</strong>. Merge your bank statements, ID proofs, and <strong>business contracts</strong> into of professional packet.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-background rounded-xl shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Secure & Protect</h3>
                    <p className="text-sm text-muted-foreground">
                      After you <strong>combine pdf documents</strong> containing sensitive data like insurance claims or bank statements, use our{" "}
                      <a href="/pdf-protect" className="text-primary hover:underline font-medium">
                        PDF Protect Tool
                      </a>{" "}
                      to encrypt the final merged file with a password for <strong>bank-grade security</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background p-6 rounded-2xl shadow-sm border border-border/50">
                <h4 className="font-bold mb-4 border-b border-border/50 pb-2">Business Efficiency Stats</h4>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Paperless Savings</span>
                      <span className="font-bold text-green-600">30%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[30%]"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Audit Speed</span>
                      <span className="font-bold text-blue-600">50% Faster</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[50%]"></div>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-xs text-muted-foreground">
                  *Effective <strong>digital invoicing</strong> and document handling creates a true <strong>paperless office</strong> environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="pdf-merger"
            title="User Reviews"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Combine PDF Files
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Upload Files</h3>
              <p className="text-muted-foreground text-sm">
                Select or drag and drop the PDF files you want to combine.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Reorder</h3>
              <p className="text-muted-foreground text-sm">
                Drag the files to arrange them in the exact order you need.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Merge</h3>
              <p className="text-muted-foreground text-sm">
                Click "Merge PDF" and download your single combined document.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="PDF Merger FAQ"
            categoryTitle="PDF Merging"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="pdf-merger"
            category="pdf"
            tools={relatedTools}
            title="More PDF Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="pdf-merger"
          toolName="PDF Merger"
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
              name: "Free PDF Merger",
              description:
                "Merge PDF files online for free. Combine multiple PDF documents into one file with professional results.",
              url: "https://30tools.com/pdf-merger",
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
              screenshot: "https://30tools.com/screenshots/pdf-merger.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "1250",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Merge PDF Files",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload Files",
                  text: "Select or drag and drop the PDF files you want to combine.",
                  url: "https://30tools.com/pdf-merger#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Reorder",
                  text: "Drag the files to arrange them in the exact order you need.",
                  url: "https://30tools.com/pdf-merger#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Merge",
                  text: "Click 'Merge PDF' and download your single combined document.",
                  url: "https://30tools.com/pdf-merger#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}

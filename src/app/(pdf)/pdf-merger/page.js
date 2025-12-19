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

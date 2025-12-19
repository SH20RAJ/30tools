import PDFToWordTool from "@/components/tools/pdf/PDFToWordTool";
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
  title: "PDF to Word Converter Online (2026) - PDF to DOCX Free | 30Tools",
  description:
    "Best free online pdf to word converter. transform PDF files to editable DOCX documents with high accuracy. convert pdf to word free without registration.",
  keywords:
    "pdf to word 2026, pdf to doc, pdf to docx, convert pdf to word, pdf converter, free pdf to word, online pdf converter, editable word document, best pdf to word",
  alternates: {
    canonical: "https://30tools.com/pdf-to-word",
  },
  openGraph: {
    title: "PDF to Word Converter - Convert PDF to DOCX Free",
    description:
      "Convert PDF files to editable Word documents online for free. Extract text, images, and layout accurately. Secure, fast, and no installation required.",
    url: "https://30tools.com/pdf-to-word",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/pdf-to-word.jpg",
        width: 1200,
        height: 630,
        alt: "Free PDF to Word Converter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF to Word Converter - Convert PDF to DOCX Free",
    description:
      "Convert PDF files to editable Word documents online for free. Extract text, images, and layout accurately. Secure, fast, and no installation required.",
    images: ["/og-images/pdf-to-word.jpg"],
    creator: "@30tools",
  },
  category: "PDF Tools",
};

export default function PDFToWordPage() {
  // Tool-specific data
  const toolData = {
    id: "pdf-to-word",
    name: "PDF to Word",
    description: "Convert PDF documents to editable Word format",
    category: "pdf",
    route: "/pdf-to-word",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "PDF Tools", url: "/pdf-tools" },
    { name: "PDF to Word", url: "/pdf-to-word" },
  ];

  // Tool features
  const features = [
    "Convert PDF to DOCX",
    "Editable Text Output",
    "Preserve Layout",
    "Extract Images",
    "Client-Side Processing",
    "No File Size Limit",
    "Secure & Private",
    "100% Free",
  ];

  // Usage examples
  const examples = [
    {
      title: "Edit Contracts",
      description: "Modify PDF agreements",
      input: "Contract.pdf",
      output: "Contract_Editable.docx",
    },
    {
      title: "Reuse Content",
      description: "Extract text from reports",
      input: "Annual_Report.pdf",
      output: "Report_Content.docx",
    },
    {
      title: "Fix Errors",
      description: "Correct typos in PDFs",
      input: "Final_Draft.pdf",
      output: "Draft_v2.docx",
    },
  ];

  // FAQ data
  const faqs = getPdfToolFAQs("pdf-to-word");

  // Related tools
  const relatedTools = [
    {
      id: "word-to-pdf",
      name: "Word to PDF",
      description: "Convert Word to PDF",
      route: "/word-to-pdf",
      category: "pdf",
    },
    {
      id: "pdf-editor",
      name: "PDF Editor",
      description: "Edit PDF files",
      route: "/pdf-editor",
      category: "pdf",
    },
    {
      id: "pdf-merger",
      name: "PDF Merger",
      description: "Combine multiple PDFs",
      route: "/pdf-merger",
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
            Free PDF to Word Converter
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Convert your PDF files to editable Word documents (DOCX) instantly.
            Extract text, images, and formatting accurately with our secure
            online converter.
          </p>

          <QuickActions
            toolName="PDF to Word"
            toolUrl="https://30tools.com/pdf-to-word"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <PDFToWordTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples
          tool={toolData}
          examples={examples}
          title="Why Convert PDF to Word?"
        />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="pdf-to-word"
            title="User Reviews"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Convert PDF to Word
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Upload PDF</h3>
              <p className="text-muted-foreground text-sm">
                Select the PDF file you want to convert.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Convert</h3>
              <p className="text-muted-foreground text-sm">
                Click convert to transform your file to Word.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Download</h3>
              <p className="text-muted-foreground text-sm">
                Save your editable Word document.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="PDF to Word FAQ"
            categoryTitle="Document Conversion"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="pdf-to-word"
            category="pdf"
            tools={relatedTools}
            title="More PDF Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="pdf-to-word"
          toolName="PDF to Word"
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
              name: "Free PDF to Word Converter",
              description:
                "Convert PDF files to editable Word documents online for free.",
              url: "https://30tools.com/pdf-to-word",
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
              screenshot: "https://30tools.com/screenshots/pdf-to-word.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "450",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Convert PDF to Word",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload PDF",
                  text: "Select the PDF file you want to convert.",
                  url: "https://30tools.com/pdf-to-word#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Convert",
                  text: "Click convert to transform your file to Word.",
                  url: "https://30tools.com/pdf-to-word#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Download",
                  text: "Save your editable Word document.",
                  url: "https://30tools.com/pdf-to-word#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}

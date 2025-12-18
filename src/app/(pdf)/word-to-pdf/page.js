import WordToPDFTool from "@/components/tools/pdf/WordToPDFTool";
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
  title: "Word to PDF Converter (2026) - DOC/DOCX to PDF | 30Tools",
  description: "Convert Word documents to PDF online for free (Updated 2026). Supports DOC & DOCX files. Preserves formatting, fonts & layout. Secure & Private.",
  keywords: [
    "word to pdf converter 2026",
    "convert docx to pdf free",
    "doc to pdf secure online",
    "microsoft word to pdf",
    "save word as pdf online",
    "word document to pdf",
    "free pdf processing",
    "updated 2026",
    "no watermarks"
  ].join(", "),
  alternates: {
    canonical: "https://30tools.com/word-to-pdf",
  },
  openGraph: {
    title: "Word to PDF Converter (2026) - Free DOCX to PDF",
    description: "⚡ Convert Word documents (DOC, DOCX) to PDF online! Preserves exact formatting (Updated 2026).",
    url: "https://30tools.com/word-to-pdf",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/word-to-pdf.jpg",
        width: 1200,
        height: 630,
        alt: "Word to PDF Converter 2026 - Free Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Word to PDF Converter (2026) - Free Tool",
    description: "⚡ Convert DOC/DOCX to PDF online. formatting preserved. Updated 2026!",
    images: ["/og-images/word-to-pdf.jpg"],
    creator: "@30tools",
  },
  category: "PDF Tools",
};

export default function WordToPDFPage() {
  // Tool-specific data
  const toolData = {
    id: "word-to-pdf",
    name: "Word to PDF",
    description: "Convert Word documents to PDF format",
    category: "pdf",
    route: "/word-to-pdf",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "PDF Tools", url: "/pdf-tools" },
    { name: "Word to PDF", url: "/word-to-pdf" },
  ];

  // Tool features
  const features = [
    "Convert DOC & DOCX",
    "Preserve Formatting",
    "Maintain Fonts & Images",
    "Batch Conversion",
    "Client-Side Processing",
    "No File Size Limit",
    "Secure & Private",
    "100% Free",
  ];

  // Usage examples
  const examples = [
    {
      title: "Resumes",
      description: "Professional format",
      input: "Resume.docx",
      output: "Resume.pdf",
    },
    {
      title: "Contracts",
      description: "Secure sharing",
      input: "Contract_Draft.doc",
      output: "Contract_Final.pdf",
    },
    {
      title: "Assignments",
      description: "Submission ready",
      input: "Homework.docx",
      output: "Homework.pdf",
    },
  ];

  // FAQ data
  const faqs = getPdfToolFAQs("word-to-pdf");

  // Related tools
  const relatedTools = [
    {
      id: "pdf-to-word",
      name: "PDF to Word",
      description: "Convert PDF to Word",
      route: "/pdf-to-word",
      category: "pdf",
    },
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
            Free Word to PDF Converter
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Convert your Word documents (DOC, DOCX) to PDF format instantly.
            Preserve your original layout, fonts, and images with our secure
            online converter.
          </p>

          <QuickActions
            toolName="Word to PDF"
            toolUrl="https://30tools.com/word-to-pdf"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <WordToPDFTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples
          tool={toolData}
          examples={examples}
          title="Why Convert Word to PDF?"
        />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="word-to-pdf"
            title="User Reviews"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Convert Word to PDF
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Upload Word</h3>
              <p className="text-muted-foreground text-sm">
                Select your DOC or DOCX file.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Convert</h3>
              <p className="text-muted-foreground text-sm">
                Click convert to transform your file to PDF.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Download</h3>
              <p className="text-muted-foreground text-sm">
                Save your new PDF document.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="Word to PDF FAQ"
            categoryTitle="Document Conversion"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="word-to-pdf"
            category="pdf"
            tools={relatedTools}
            title="More PDF Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="word-to-pdf"
          toolName="Word to PDF"
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
              name: "Free Word to PDF Converter",
              description:
                "Convert Word documents to PDF online for free. Supports DOC and DOCX formats.",
              url: "https://30tools.com/word-to-pdf",
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
              screenshot: "https://30tools.com/screenshots/word-to-pdf.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "520",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Convert Word to PDF",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload Word",
                  text: "Select your DOC or DOCX file.",
                  url: "https://30tools.com/word-to-pdf#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Convert",
                  text: "Click convert to transform your file to PDF.",
                  url: "https://30tools.com/word-to-pdf#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Download",
                  text: "Save your new PDF document.",
                  url: "https://30tools.com/word-to-pdf#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}

import PdfAddPageNumbersTool from "@/components/tools/pdf/PdfAddPageNumbersTool";
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
  title: "Add Page Numbers to PDF - Free Online Tool | 30tools",
  description:
    "Add page numbers to PDF documents online for free. Customize position, format, font, and style. Professional numbering for reports and legal documents.",
  keywords:
    "add page numbers to pdf, pdf page numbering, number pdf pages, pdf page numbers online, add page numbers pdf free, custom pdf numbering, bates numbering pdf",
  alternates: {
    canonical: "https://30tools.com/pdf-add-page-numbers",
  },
  openGraph: {
    title: "Add Page Numbers to PDF - Professional Document Numbering",
    description:
      "Add page numbers to PDF documents online for free. Customize position, format, font, and style. Professional numbering for reports and legal documents.",
    url: "https://30tools.com/pdf-add-page-numbers",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/pdf-add-page-numbers.jpg",
        width: 1200,
        height: 630,
        alt: "Free PDF Add Page Numbers Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Add Page Numbers to PDF - Professional Document Numbering",
    description:
      "Add page numbers to PDF documents online for free. Customize position, format, font, and style. Professional numbering for reports and legal documents.",
    images: ["/og-images/pdf-add-page-numbers.jpg"],
    creator: "@30tools",
  },
  category: "PDF Tools",
};

export default function PdfAddPageNumbersPage() {
  // Tool-specific data
  const toolData = {
    id: "pdf-add-page-numbers",
    name: "PDF Page Numbers",
    description: "Add customizable page numbers to PDF documents",
    category: "pdf",
    route: "/pdf-add-page-numbers",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "PDF Tools", url: "/pdf-tools" },
    { name: "Add Page Numbers", url: "/pdf-add-page-numbers" },
  ];

  // Tool features
  const features = [
    "Customizable Position",
    "Multiple Number Formats",
    "Font Style & Size Control",
    "Custom Margins",
    "Skip Cover Page",
    "Live Preview",
    "Batch Processing",
    "100% Free & Secure",
  ];

  // Usage examples
  const examples = [
    {
      title: "Business Reports",
      description: "Professional numbering",
      input: "Annual_Report.pdf",
      output: "Page 1 of 50 (Bottom Right)",
    },
    {
      title: "Legal Documents",
      description: "Bates numbering style",
      input: "Contract.pdf",
      output: "0001, 0002... (Top Right)",
    },
    {
      title: "Theses & Books",
      description: "Roman numerals for intro",
      input: "Thesis.pdf",
      output: "i, ii, iii... then 1, 2, 3...",
    },
  ];

  // FAQ data
  const faqs = getPdfToolFAQs("pdf-add-page-numbers");

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
      id: "pdf-protect",
      name: "PDF Protect",
      description: "Add password protection",
      route: "/pdf-protect",
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
          <h1 className="text-4xl font-bold mb-4">
            Add Page Numbers to PDF Free
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Add customizable page numbers to your PDF documents. Choose
            position, format, styling, and advanced options for professional
            document numbering.
          </p>

          <QuickActions
            toolName="PDF Page Numbers"
            toolUrl="https://30tools.com/pdf-add-page-numbers"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <PdfAddPageNumbersTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples
          tool={toolData}
          examples={examples}
          title="Why Add Page Numbers?"
        />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="pdf-add-page-numbers"
            title="User Reviews"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Add Page Numbers to PDF
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Upload PDF</h3>
              <p className="text-muted-foreground text-sm">
                Select the PDF file you want to number.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Customize</h3>
              <p className="text-muted-foreground text-sm">
                Choose position, format, font, and margins.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Download</h3>
              <p className="text-muted-foreground text-sm">
                Get your professionally numbered PDF document.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="Page Numbering FAQ"
            categoryTitle="PDF Editing"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="pdf-add-page-numbers"
            category="pdf"
            tools={relatedTools}
            title="More PDF Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="pdf-add-page-numbers"
          toolName="PDF Page Numbers"
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
              name: "Free PDF Add Page Numbers Tool",
              description:
                "Add page numbers to PDF documents online for free. Customize position, format, font, and style.",
              url: "https://30tools.com/pdf-add-page-numbers",
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
              screenshot:
                "https://30tools.com/screenshots/pdf-add-page-numbers.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.6",
                reviewCount: "320",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Add Page Numbers to PDF",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload PDF",
                  text: "Select the PDF file you want to number.",
                  url: "https://30tools.com/pdf-add-page-numbers#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Customize",
                  text: "Choose position, format, font, and margins.",
                  url: "https://30tools.com/pdf-add-page-numbers#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Download",
                  text: "Get your professionally numbered PDF document.",
                  url: "https://30tools.com/pdf-add-page-numbers#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}

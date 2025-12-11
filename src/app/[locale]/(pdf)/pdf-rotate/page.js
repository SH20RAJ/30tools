import PdfRotateTool from "@/components/tools/pdf/PdfRotateTool";
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
  title: "Free PDF Rotate Tool - Rotate PDF Pages Online | 30tools",
  description:
    "Rotate PDF pages permanently. Fix orientation of individual pages or entire documents. Free, secure, and easy to use online tool.",
  keywords:
    "pdf rotate, rotate pdf pages, fix pdf orientation, rotate pdf online, pdf page rotation, correct pdf pages, rotate pdf free, change pdf orientation",
  alternates: {
    canonical: "https://30tools.com/pdf-rotate",
  },
  openGraph: {
    title: "Free PDF Rotate Tool - Fix Page Orientation Instantly",
    description:
      "Rotate PDF pages permanently. Fix orientation of individual pages or entire documents. Free, secure, and easy to use online tool.",
    url: "https://30tools.com/pdf-rotate",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/pdf-rotate.jpg",
        width: 1200,
        height: 630,
        alt: "Free PDF Rotate Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PDF Rotate Tool - Fix Page Orientation Instantly",
    description:
      "Rotate PDF pages permanently. Fix orientation of individual pages or entire documents. Free, secure, and easy to use online tool.",
    images: ["/og-images/pdf-rotate.jpg"],
    creator: "@30tools",
  },
  category: "PDF Tools",
};

export default function PdfRotatePage() {
  // Tool-specific data
  const toolData = {
    id: "pdf-rotate",
    name: "PDF Rotate",
    description: "Rotate PDF pages to correct orientation",
    category: "pdf",
    route: "/pdf-rotate",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "PDF Tools", url: "/pdf-tools" },
    { name: "PDF Rotate", url: "/pdf-rotate" },
  ];

  // Tool features
  const features = [
    "Rotate Individual Pages",
    "Batch Rotation Support",
    "90-Degree Increments",
    "Live Preview",
    "Permanent Rotation",
    "No Watermarks",
    "Client-Side Processing",
    "100% Free & Secure",
  ];

  // Usage examples
  const examples = [
    {
      title: "Scanned Documents",
      description: "Fix upside-down scans",
      input: "Scanned_Doc.pdf (Upside Down)",
      output: "Corrected_Doc.pdf (Upright)",
    },
    {
      title: "Mixed Orientation",
      description: "Standardize page layout",
      input: "Report.pdf (Mixed Landscape/Portrait)",
      output: "Report_Final.pdf (All Portrait)",
    },
    {
      title: "Presentation Slides",
      description: "Adjust slide orientation",
      input: "Slides.pdf (Portrait)",
      output: "Slides_Landscape.pdf",
    },
  ];

  // FAQ data
  const faqs = getPdfToolFAQs("pdf-rotate");

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
          <h1 className="text-4xl font-bold mb-4">Free PDF Rotate Tool</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Rotate PDF pages to correct orientation. Rotate individual pages,
            selected pages, or all pages with precise 90-degree increments.
          </p>

          <QuickActions
            toolName="PDF Rotate"
            toolUrl="https://30tools.com/pdf-rotate"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <PdfRotateTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples
          tool={toolData}
          examples={examples}
          title="Why Rotate PDF Pages?"
        />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="pdf-rotate"
            title="User Reviews"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Rotate PDF Pages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Upload PDF</h3>
              <p className="text-muted-foreground text-sm">
                Select the PDF file you want to rotate.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Rotate Pages</h3>
              <p className="text-muted-foreground text-sm">
                Click on pages to rotate them individually or use "Rotate All".
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Download</h3>
              <p className="text-muted-foreground text-sm">
                Apply changes and download your corrected PDF.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="PDF Rotation FAQ"
            categoryTitle="PDF Editing"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="pdf-rotate"
            category="pdf"
            tools={relatedTools}
            title="More PDF Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="pdf-rotate"
          toolName="PDF Rotate"
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
              name: "Free PDF Rotate Tool",
              description:
                "Rotate PDF pages permanently. Fix orientation of individual pages or entire documents.",
              url: "https://30tools.com/pdf-rotate",
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
              screenshot: "https://30tools.com/screenshots/pdf-rotate.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "450",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Rotate PDF Pages",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload PDF",
                  text: "Select the PDF file you want to rotate.",
                  url: "https://30tools.com/pdf-rotate#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Rotate Pages",
                  text: "Click on pages to rotate them individually or use 'Rotate All'.",
                  url: "https://30tools.com/pdf-rotate#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Download",
                  text: "Apply changes and download your corrected PDF.",
                  url: "https://30tools.com/pdf-rotate#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}

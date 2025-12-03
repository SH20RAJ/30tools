import PdfUnlockerTool from "@/components/tools/pdf/PdfUnlockerTool";
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
  title: "Free PDF Unlocker - Remove Passwords & Restrictions | 30tools",
  description:
    "Unlock PDF files online for free. Remove passwords and restrictions on printing, copying, and editing. Secure, fast, and no installation required.",
  keywords:
    "pdf unlocker, remove pdf password, unlock pdf online, pdf password remover, decrypt pdf, remove pdf restrictions, free pdf unlocker, unlock secured pdf",
  alternates: {
    canonical: "https://30tools.com/pdf-unlocker",
  },
  openGraph: {
    title: "Free PDF Unlocker - Remove Passwords & Restrictions",
    description:
      "Unlock PDF files online for free. Remove passwords and restrictions on printing, copying, and editing. Secure, fast, and no installation required.",
    url: "https://30tools.com/pdf-unlocker",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/pdf-unlocker.jpg",
        width: 1200,
        height: 630,
        alt: "PDF Unlocker - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PDF Unlocker - Remove Passwords & Restrictions",
    description:
      "Unlock PDF files online for free. Remove passwords and restrictions on printing, copying, and editing. Secure, fast, and no installation required.",
    images: ["/og-images/pdf-unlocker.jpg"],
    creator: "@30tools",
  },
  category: "PDF Tools",
};

export default function PdfUnlockerPage() {
  // Tool-specific data
  const toolData = {
    id: "pdf-unlocker",
    name: "PDF Unlocker",
    description: "Remove passwords and restrictions from PDF files",
    category: "pdf",
    route: "/pdf-unlocker",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "PDF Tools", url: "/pdf-tools" },
    { name: "PDF Unlocker", url: "/pdf-unlocker" },
  ];

  // Tool features
  const features = [
    "Remove PDF Passwords",
    "Unlock Printing & Copying",
    "Decrypt Owner Passwords",
    "Batch Processing Support",
    "Client-Side Decryption",
    "No Server Uploads",
    "Instant Processing",
    "100% Free & Secure",
  ];

  // Usage examples
  const examples = [
    {
      title: "Forgot Password",
      description: "Recover access to files",
      input: "Locked_File.pdf + Common Passwords",
      output: "Unlocked_File.pdf",
    },
    {
      title: "Remove Restrictions",
      description: "Enable printing & editing",
      input: "Restricted_Doc.pdf",
      output: "Editable_Doc.pdf",
    },
    {
      title: "Batch Unlock",
      description: "Unlock multiple files",
      input: "File1.pdf + File2.pdf",
      output: "Unlocked_Files.zip",
    },
  ];

  // FAQ data
  const faqs = getPdfToolFAQs("pdf-unlocker");

  // Related tools
  const relatedTools = [
    {
      id: "pdf-protect",
      name: "PDF Protect",
      description: "Add password protection",
      route: "/pdf-protect",
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
          <h1 className="text-4xl font-bold mb-4">Free PDF Unlocker</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Remove passwords and security restrictions from your PDF files.
            Unlock printing, copying, and editing capabilities instantly and
            securely in your browser.
          </p>

          <QuickActions
            toolName="PDF Unlocker"
            toolUrl="https://30tools.com/pdf-unlocker"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <PdfUnlockerTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples
          tool={toolData}
          examples={examples}
          title="When to Use PDF Unlocker"
        />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="pdf-unlocker"
            title="User Reviews"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Unlock a PDF
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Upload PDF</h3>
              <p className="text-muted-foreground text-sm">
                Select the password-protected PDF file.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Unlock</h3>
              <p className="text-muted-foreground text-sm">
                Enter the password if known, or let us try common ones.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Download</h3>
              <p className="text-muted-foreground text-sm">
                Save your unlocked, restriction-free PDF file.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="PDF Unlocker FAQ"
            categoryTitle="PDF Decryption"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="pdf-unlocker"
            category="pdf"
            tools={relatedTools}
            title="More PDF Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="pdf-unlocker"
          toolName="PDF Unlocker"
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
              name: "Free PDF Unlocker",
              description:
                "Unlock PDF files online for free. Remove passwords and restrictions.",
              url: "https://30tools.com/pdf-unlocker",
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
              screenshot: "https://30tools.com/screenshots/pdf-unlocker.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "580",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Unlock a PDF",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload PDF",
                  text: "Select the password-protected PDF file.",
                  url: "https://30tools.com/pdf-unlocker#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Unlock",
                  text: "Enter the password if known, or let us try common ones.",
                  url: "https://30tools.com/pdf-unlocker#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Download",
                  text: "Save your unlocked, restriction-free PDF file.",
                  url: "https://30tools.com/pdf-unlocker#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}

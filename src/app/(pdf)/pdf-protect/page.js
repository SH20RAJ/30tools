import PdfProtectTool from "@/components/tools/pdf/PdfProtectTool";
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
  title: "Free PDF Password Protector - Encrypt & Secure PDF Files | 30tools",
  description:
    "Secure your PDF files with strong AES encryption. Add passwords, restrict printing and copying, and protect your sensitive documents online for free.",
  keywords:
    "pdf password protect, encrypt pdf, secure pdf, add password to pdf, pdf security, protect pdf online, pdf encryption, free pdf tools",
  alternates: {
    canonical: "https://30tools.com/pdf-protect",
  },
  openGraph: {
    title: "Free PDF Password Protector - Encrypt & Secure PDF Files",
    description:
      "Secure your PDF files with strong AES encryption. Add passwords, restrict printing and copying, and protect your sensitive documents online for free.",
    url: "https://30tools.com/pdf-protect",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/pdf-protect.jpg",
        width: 1200,
        height: 630,
        alt: "PDF Password Protector - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PDF Password Protector - Encrypt & Secure PDF Files",
    description:
      "Secure your PDF files with strong AES encryption. Add passwords, restrict printing and copying, and protect your sensitive documents online for free.",
    images: ["/og-images/pdf-protect.jpg"],
    creator: "@30tools",
  },
  category: "PDF Tools",
};

export default function PdfProtectPage() {
  // Tool-specific data
  const toolData = {
    id: "pdf-protect",
    name: "PDF Password Protect",
    description: "Secure PDF files with encryption and permissions",
    category: "pdf",
    route: "/pdf-protect",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "PDF Tools", url: "/pdf-tools" },
    { name: "PDF Protect", url: "/pdf-protect" },
  ];

  // Tool features
  const features = [
    "Strong AES Encryption",
    "Custom User Passwords",
    "Restrict Printing & Copying",
    "Prevent Modifications",
    "Client-Side Encryption",
    "No Server Uploads",
    "Instant Processing",
    "100% Free & Secure",
  ];

  // Usage examples
  const examples = [
    {
      title: "Confidential Contracts",
      description: "Secure legal documents",
      input: "Contract_Draft.pdf + Password",
      output: "Encrypted_Contract.pdf",
    },
    {
      title: "Financial Reports",
      description: "Protect sensitive data",
      input: "Q3_Report.pdf + Restrictions",
      output: "Protected_Report.pdf",
    },
    {
      title: "Personal Records",
      description: "Keep personal info safe",
      input: "Medical_Records.pdf + Password",
      output: "Secure_Records.pdf",
    },
  ];

  // FAQ data
  const faqs = getPdfToolFAQs("pdf-protect");

  // Related tools
  const relatedTools = [
    {
      id: "pdf-unlocker",
      name: "PDF Unlocker",
      description: "Remove PDF passwords",
      route: "/pdf-unlocker",
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
            Free PDF Password Protector
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Secure your PDF documents with strong encryption. Add passwords, set
            permissions, and protect your sensitive information directly in your
            browser.
          </p>

          <QuickActions
            toolName="PDF Protect"
            toolUrl="https://30tools.com/pdf-protect"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <PdfProtectTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples
          tool={toolData}
          examples={examples}
          title="Why Protect Your PDFs?"
        />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="pdf-protect"
            title="User Reviews"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Password Protect a PDF
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Upload PDF</h3>
              <p className="text-muted-foreground text-sm">
                Select the PDF file you want to secure.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Set Password</h3>
              <p className="text-muted-foreground text-sm">
                Enter a strong password and choose permissions.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Protect</h3>
              <p className="text-muted-foreground text-sm">
                Click "Protect PDF" and download your encrypted file.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="PDF Protection FAQ"
            categoryTitle="PDF Security"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="pdf-protect"
            category="pdf"
            tools={relatedTools}
            title="More PDF Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="pdf-protect"
          toolName="PDF Protect"
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
              name: "Free PDF Password Protector",
              description:
                "Secure your PDF files with strong AES encryption. Add passwords and restrict permissions.",
              url: "https://30tools.com/pdf-protect",
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
              screenshot: "https://30tools.com/screenshots/pdf-protect.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "620",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Password Protect a PDF",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload PDF",
                  text: "Select the PDF file you want to secure.",
                  url: "https://30tools.com/pdf-protect#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Set Password",
                  text: "Enter a strong password and choose permissions.",
                  url: "https://30tools.com/pdf-protect#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Protect",
                  text: "Click 'Protect PDF' and download your encrypted file.",
                  url: "https://30tools.com/pdf-protect#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}

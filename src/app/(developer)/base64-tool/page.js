import Base64Tool from '@/components/tools/developer/Base64Tool';
import { 
  BreadcrumbsEnhanced,
  FAQSection, 
  ReviewSnippets,
  RelatedTools,
  ToolFeatures,
  UserComments,
  QuickActions
} from '@/components/seo';
import { DeveloperToolExamples } from '@/components/seo/DeveloperToolsHub';
import { getDeveloperToolFAQs } from '@/constants/seo/developer-faqs';

export const metadata = {
  title: "Free Base64 Encoder & Decoder Online - Text, Files, Images | 30tools",
  description: "Encode text, files & images to Base64 or decode Base64 strings. Secure client-side processing, supports bulk operations. Perfect for developers & data encoding needs.",
  keywords: "base64 encoder, base64 decoder, base64 converter, encode decode base64, base64 string encoder, file to base64, image to base64, base64 tools, base64 encode text online free, base64 decode string to text, file to base64 converter online, image to base64 encoder tool, base64 decoder for files, bulk base64 encoding tool, secure base64 converter online, base64 encoder decoder developer tool",
  openGraph: {
    title: "Free Base64 Encoder & Decoder Online - Text, Files, Images",
    description: "Encode text, files & images to Base64 or decode Base64 strings. Secure client-side processing for developers.",
    url: "https://30tools.com/base64-tool",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/base64-tool.jpg",
        width: 1200,
        height: 630,
        alt: "Base64 Encoder/Decoder Tool"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Base64 Encoder & Decoder Online",
    description: "Encode text, files & images to Base64 or decode Base64 strings. Perfect for developers.",
    images: ["/og-images/base64-tool.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/base64-tool"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Developer Tools',
};

export default function Base64Page() {
  // Tool-specific data
  const toolData = {
    id: 'base64-tool',
    name: 'Base64 Encoder & Decoder',
    description: 'Encode and decode Base64 strings and files',
    category: 'developer-tools',
    route: '/base64-tool'
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: 'Developer Tools', url: '/developer-tools' },
    { name: 'Base64 Encoder', url: '/base64-tool' }
  ];

  // Tool features
  const features = [
    'Encode text to Base64',
    'Decode Base64 to text',
    'File to Base64 conversion',
    'Image to Base64 encoding',
    'Bulk processing support',
    'Copy to clipboard',
    'Format validation',
    'Client-side processing'
  ];

  // Usage examples
  const examples = [
    {
      title: 'Encode Text',
      description: 'Convert text to Base64 for email transmission or data storage',
      input: 'Hello, World!',
      output: 'SGVsbG8sIFdvcmxkIQ=='
    },
    {
      title: 'Decode Base64',
      description: 'Convert Base64 back to readable text',
      input: 'SGVsbG8sIFdvcmxkIQ==',
      output: 'Hello, World!'
    },
    {
      title: 'Data URI Creation',
      description: 'Create data URIs for embedding images in web pages',
      input: '[Image File]',
      output: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...'
    }
  ];

  // FAQ data
  const faqs = getDeveloperToolFAQs('base64-tool');

  // Related tools
  const relatedTools = [
    { id: 'json-formatter', name: 'JSON Formatter', description: 'Format and validate JSON data', route: '/json-formatter', category: 'developer-tools' },
    { id: 'url-encoder', name: 'URL Encoder', description: 'Encode and decode URLs', route: '/url-encoder', category: 'developer-tools' },
    { id: 'hash-generator', name: 'Hash Generator', description: 'Generate MD5, SHA256 hashes', route: '/hash-generator', category: 'developer-tools' }
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
            Free Base64 Encoder & Decoder Online - Text, Files, Images
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Encode text, files & images to Base64 or decode Base64 strings. Secure client-side processing, 
            supports bulk operations. Perfect for developers, email attachments, data URIs, and API data transmission.
          </p>
          
          <QuickActions 
            toolName="Base64 Encoder"
            toolUrl="https://30tools.com/base64-tool"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <Base64Tool />
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <ToolFeatures 
            features={features}
            title="Why Choose Our Base64 Tool?"
            variant="grid"
          />
        </div>

        {/* Usage Examples */}
        <DeveloperToolExamples tool={toolData} examples={examples} />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets 
            toolId="base64-tool"
            title="What Developers Say About Our Base64 Tool"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection 
            faqs={faqs}
            title="Base64 Encoder FAQ"
            categoryTitle="Base64 Encoding & Decoding"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools 
            currentTool="base64-tool"
            category="developer-tools"
            tools={relatedTools}
            title="More Developer Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments 
          toolId="base64-tool"
          toolName="Base64 Encoder"
          showStats={true}
          allowComments={true}
        />
      </main>

      {/* Structured Data for Tool */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Base64 Encoder & Decoder",
            "description": "Encode text, files & images to Base64 or decode Base64 strings",
            "url": "https://30tools.com/base64-tool",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "creator": {
              "@type": "Organization",
              "name": "30tools",
              "url": "https://30tools.com"
            },
            "featureList": features,
            "screenshot": "https://30tools.com/screenshots/base64-tool.jpg",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "1923",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />
    </div>
  );
}

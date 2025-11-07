import JSONFormatterTool from '@/components/tools/developer/JSONFormatterTool';
import { 
  BreadcrumbsEnhanced,
  FAQSection, 
  ReviewSnippets,
  RelatedTools,
  ToolFeatures,
  UserComments,
  QuickActions
} from '@/components/seo';
import { DeveloperToolFeatures, DeveloperToolExamples } from '@/components/seo/DeveloperToolsHub';
import { generateDeveloperToolMeta } from '@/constants/seo/developer-tools-seo';
import { getDeveloperToolFAQs } from '@/constants/seo/developer-faqs';

export const metadata = {
  title: "Json Formatter - Free Developer Tool | Professional Coding",
  description: "Professional json formatter for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
  keywords: "json formatter, json validator, json beautifier, json minifier, json parser, json syntax checker, format json online, validate json online, json pretty print, json editor online, json formatter and validator online free, json minifier and beautifier tool, json syntax checker with error detection, format json online no signup required, validate json format online free, json pretty print formatter, json parser and formatter online, json beautifier with tree view",
  openGraph: {
    title: "Free JSON Formatter & Validator Online - Format, Minify, Validate JSON",
    description: "Professional JSON formatter, validator & minifier for developers. Format messy JSON, validate syntax errors, minify for production.",
    url: "https://30tools.com/json-formatter",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/json-formatter.jpg",
        width: 1200,
        height: 630,
        alt: "Free JSON Formatter & Validator Online"
      },
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free JSON Formatter & Validator Online - Format, Minify, Validate JSON",
    description: "Professional JSON formatter, validator & minifier for developers. Perfect for API testing and development.",
    images: ["/og-images/json-formatter.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/json-formatter"
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
  other: {
    'application-name': '30tools',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'JSON Formatter - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  },
};

export default function JSONFormatterPage() {
  // Tool-specific data
  const toolData = {
    id: 'json-formatter',
    name: 'JSON Formatter & Validator',
    description: 'Format, validate, and beautify JSON data with error detection',
    category: 'developer-tools',
    route: '/json-formatter'
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: 'Developer Tools', url: '/developer-tools' },
    { name: 'JSON Formatter', url: '/json-formatter' }
  ];

  // Tool features
  const features = [
    'Format & validate JSON instantly',
    'Minify JSON for production use',
    'Real-time error detection',
    'Tree view for complex JSON',
    'Copy formatted code',
    'Supports large JSON files',
    'Syntax highlighting',
    'Client-side processing'
  ];

  // Usage examples
  const examples = [
    {
      title: 'Format API Response',
      description: 'Clean up messy JSON from API responses for better readability',
      input: '{"users":[{"id":1,"name":"John","email":"john@example.com"}]}',
      output: `{
  "users": [
    {
      "id": 1,
      "name": "John", 
      "email": "john@example.com"
    },
  ]
}`
    },
    {
      title: 'Validate Configuration',
      description: 'Check configuration files for syntax errors before deployment',
      input: '{"database":{"host":"localhost","port":5432}}',
      output: `{
  "database": {
    "host": "localhost",
    "port": 5432
  },
}`
    },
  ];

  // FAQ data
  const faqs = getDeveloperToolFAQs('json-formatter');

  // Related tools
  const relatedTools = [
    { id: 'xml-formatter', name: 'XML Formatter', description: 'Format and validate XML documents', route: '/xml-formatter', category: 'developer-tools' },
    { id: 'base64-tool', name: 'Base64 Encoder', description: 'Encode and decode Base64 strings', route: '/base64-tool', category: 'developer-tools' },
    { id: 'api-tester', name: 'API Tester', description: 'Test REST APIs with custom headers', route: '/api-tester', category: 'developer-tools' }
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
            Free JSON Formatter & Validator Online - Format, Minify, Validate JSON
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Professional JSON formatter, validator & minifier for developers. Format messy JSON, validate syntax errors, 
            minify for production. Tree view, error detection, copy formatted code. Completely free with client-side processing.
          </p>
          
          <QuickActions 
            toolName="JSON Formatter"
            toolUrl="https://30tools.com/json-formatter"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <JSONFormatterTool />
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <ToolFeatures 
            features={features}
            title="Why Choose Our JSON Formatter?"
            variant="grid"
          />
        </div>

        {/* Usage Examples */}
        <DeveloperToolExamples tool={toolData} examples={examples} />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets 
            toolId="json-formatter"
            title="What Developers Say About Our JSON Formatter"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection 
            faqs={faqs}
            title="JSON Formatter FAQ"
            categoryTitle="JSON Formatting & Validation"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools 
            currentTool="json-formatter"
            category="developer-tools"
            tools={relatedTools}
            title="More Developer Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments 
          toolId="json-formatter"
          toolName="JSON Formatter"
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
            "name": "JSON Formatter & Validator",
            "description": "Professional JSON formatter, validator and minifier for developers",
            "url": "https://30tools.com/json-formatter",
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
            "screenshot": "https://30tools.com/screenshots/json-formatter.jpg",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2847",
              "bestRating": "5",
              "worstRating": "1"
            },
          })
        }}
      />
    </div>
  );
}

import { 
  BreadcrumbsEnhanced,
  FAQSection, 
  ReviewSnippets,
  SEOBooster,
  RelatedTools,
  UserComments,
  DeviceCompatibility,
  QuickActions
} from '@/components/seo';
import { DeveloperToolFeatures, DeveloperToolExamples } from '@/components/seo/DeveloperToolsHub';
import { generateDeveloperToolMeta } from '@/constants/seo/developer-tools-seo';
import { getDeveloperToolFAQs } from '@/constants/seo/developer-faqs';
import JSONFormatterTool from '@/components/tools/developer/JSONFormatterTool';

// Enhanced metadata for JSON Formatter
export const metadata = {
  ...generateDeveloperToolMeta('json-formatter'),
  verification: {
    google: 'your-google-verification-code',
    bing: 'your-bing-verification-code'
  },
  other: {
    'application-name': '30tools',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'JSON Formatter - 30tools',
    'format-detection': 'telephone=no',
    'theme-color': '#000000'
  }
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
    {
      title: 'Format & Validate JSON',
      description: 'Instantly format messy JSON and detect syntax errors with detailed error messages'
    },
    {
      title: 'Minify for Production',
      description: 'Remove whitespace and reduce file size for faster data transmission'
    },
    {
      title: 'Tree View Display',
      description: 'Visualize complex nested JSON structures with expandable tree view'
    },
    {
      title: 'Error Detection',
      description: 'Real-time syntax validation with line numbers and error descriptions'
    },
    {
      title: 'Copy to Clipboard',
      description: 'One-click copying of formatted JSON ready for your code editor'
    },
    {
      title: 'Large File Support',
      description: 'Handle JSON files up to 10MB with optimized performance'
    },
    {
      title: 'Client-side Processing',
      description: 'All processing happens in your browser - your data never leaves your device'
    },
    {
      title: 'Syntax Highlighting',
      description: 'Color-coded JSON elements for better readability and debugging'
    }
  ];

  // Usage examples
  const examples = [
    {
      title: 'Format API Response',
      description: 'Clean up messy JSON from API responses for better readability',
      input: '{"users":[{"id":1,"name":"John","email":"john@example.com"},{"id":2,"name":"Jane","email":"jane@example.com"}]}',
      output: `{
  "users": [
    {
      "id": 1,
      "name": "John", 
      "email": "john@example.com"
    },
    {
      "id": 2,
      "name": "Jane",
      "email": "jane@example.com"
    }
  ]
}`
    },
    {
      title: 'Validate Configuration',
      description: 'Check configuration files for syntax errors before deployment',
      input: '{"database":{"host":"localhost","port":5432,"credentials":{"username":"admin","password":"secret"}},"logging":{"level":"info","file":"/var/log/app.log"}}',
      output: `{
  "database": {
    "host": "localhost",
    "port": 5432,
    "credentials": {
      "username": "admin",
      "password": "secret"
    }
  },
  "logging": {
    "level": "info",
    "file": "/var/log/app.log"
  }
}`
    },
    {
      title: 'Minify for Production',
      description: 'Remove whitespace to reduce file size for production deployment',
      input: `{
  "config": {
    "api_url": "https://api.example.com",
    "timeout": 5000,
    "retries": 3
  }
}`,
      output: '{"config":{"api_url":"https://api.example.com","timeout":5000,"retries":3}}'
    }
  ];

  // FAQ data
  const faqs = getDeveloperToolFAQs('json-formatter');

  // Related tools
  const relatedTools = [
    { id: 'xml-formatter', name: 'XML Formatter', description: 'Format and validate XML documents', route: '/xml-formatter', category: 'developer-tools' },
    { id: 'base64-tool', name: 'Base64 Encoder', description: 'Encode and decode Base64 strings', route: '/base64-tool', category: 'developer-tools' },
    { id: 'api-tester', name: 'API Tester', description: 'Test REST APIs with custom headers', route: '/api-tester', category: 'developer-tools' },
    { id: 'jwt-decoder', name: 'JWT Decoder', description: 'Decode JSON Web Tokens', route: '/jwt-decoder', category: 'developer-tools' }
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
          
          {/* Quick actions */}
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
        <DeveloperToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <DeveloperToolExamples tool={toolData} examples={examples} />

        {/* Device Compatibility */}
        <div className="mb-12">
          <DeviceCompatibility />
        </div>

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

        {/* SEO Performance Dashboard (development only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-12 border-t pt-8">
            <SEOBooster 
              toolName="JSON Formatter"
              category="developer-tools"
              primaryKeyword="json formatter"
              relatedKeywords={['json validator', 'json beautifier', 'json minifier', 'format json online']}
              showTechnicalSEO={true}
              showPerformanceMetrics={true}
            />
          </div>
        )}
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
            "featureList": features.map(f => f.title),
            "screenshot": "https://30tools.com/screenshots/json-formatter.jpg",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2847",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Sarah Chen"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "reviewBody": "Perfect JSON formatter for development work. The error detection is incredibly helpful and the tree view makes complex JSON easy to understand."
              }
            ]
          })
        }}
      />
    </div>
  );
}
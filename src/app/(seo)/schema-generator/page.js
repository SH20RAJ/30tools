import SchemaGenerator from '@/components/tools/seo/SchemaGenerator';

export const metadata = {
  title: "Schema Markup Generator - Free JSON-LD Schema Creator | 30tools",
  description: "Generate structured data markup for rich snippets. Create JSON-LD schema for local business, products, articles, reviews, and more. Free schema generator tool for better SEO.",
  keywords: [
    // Primary keywords
    "schema markup generator",
    "json-ld generator",
    "structured data generator",
    "schema creator",
    "rich snippets generator",
    
    // Long-tail keywords for SEO ranking
    "local business schema generator",
    "product schema markup generator",
    "article schema json-ld generator",
    "review schema markup creator",
    "organization schema generator",
    "website schema markup tool",
    "structured data testing tool",
    "google rich snippets generator",
    "microdata to json-ld converter",
    "schema.org markup generator",
    "seo schema markup tool",
    "free schema generator online"
  ].join(", "),
  openGraph: {
    title: "Free Schema Markup Generator - JSON-LD Schema Creator",
    description: "Generate structured data markup for rich snippets. Create JSON-LD schema for better SEO and Google rich results. Free online schema generator.",
    url: "https://30tools.com/schema-generator",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/schema-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Schema Markup Generator - SEO Tool"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Schema Markup Generator - Free JSON-LD Tool",
    description: "Generate structured data markup for rich snippets and better search results. Free schema generator for all schema.org types.",
    images: ["/og-images/schema-generator.jpg"]
  },
  alternates: {
    canonical: "https://30tools.com/schema-generator"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Schema Markup Generator",
  "description": "Free online tool to generate JSON-LD structured data markup for websites to improve SEO and enable rich snippets in search results",
  "url": "https://30tools.com/schema-generator",
  "applicationCategory": "SEOApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Local Business Schema",
    "Product Schema",
    "Article Schema", 
    "Review Schema",
    "Organization Schema",
    "Person Schema",
    "Event Schema",
    "FAQ Schema",
    "JSON-LD Format",
    "Schema Validation"
  ]
};

export default function SchemaGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              Schema Markup Generator
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Generate structured data markup for rich snippets and better search results. Create JSON-LD schema markup for local businesses, products, articles, reviews, and more. Our free schema generator follows Schema.org standards to help your website appear in Google rich results and improve SEO rankings.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ JSON-LD Format</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ All Schema Types</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Rich Snippets Ready</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Google Validated</span>
            </div>
          </div>

          <SchemaGenerator />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">How to Use Schema Markup Generator</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-500 font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Choose Schema Type</h3>
                  <p className="text-sm text-muted-foreground">Select the type of structured data you want to create (Business, Product, Article, etc.)</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-500 font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Fill in Details</h3>
                  <p className="text-sm text-muted-foreground">Enter your business, product, or content information in the form fields</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-500 font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Copy & Implement</h3>
                  <p className="text-sm text-muted-foreground">Copy the generated JSON-LD code and add it to your website's HTML head</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Benefits of Schema Markup</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-green-600">🌟 Rich Snippets in Search</h3>
                  <p className="text-sm text-muted-foreground mb-4">Schema markup helps your website appear with enhanced information in search results, including ratings, prices, images, and more details that attract clicks.</p>

                  <h3 className="font-medium mb-2 text-green-600">📍 Local Business Visibility</h3>
                  <p className="text-sm text-muted-foreground mb-4">Local business schema helps you appear in Google Maps, local search results, and knowledge panels with accurate business information and customer reviews.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-green-600">📈 Higher Click-Through Rates</h3>
                  <p className="text-sm text-muted-foreground mb-4">Rich snippets with structured data stand out in search results, leading to higher click-through rates and more organic traffic to your website.</p>

                  <h3 className="font-medium mb-2 text-green-600">🤖 Better Search Understanding</h3>
                  <p className="text-sm text-muted-foreground mb-4">Structured data helps search engines understand your content better, leading to more accurate indexing and improved relevance in search results.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Popular Schema Types</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Local Business</h3>
                  <p className="text-sm text-muted-foreground">For restaurants, stores, services, and local companies with physical locations.</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Product</h3>
                  <p className="text-sm text-muted-foreground">For e-commerce products with prices, availability, and customer reviews.</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Article</h3>
                  <p className="text-sm text-muted-foreground">For blog posts, news articles, and editorial content with author and publication info.</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Review</h3>
                  <p className="text-sm text-muted-foreground">For customer reviews and ratings of products, services, or businesses.</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Event</h3>
                  <p className="text-sm text-muted-foreground">For concerts, conferences, workshops, and other events with dates and locations.</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">FAQ</h3>
                  <p className="text-sm text-muted-foreground">For frequently asked questions that can appear as rich snippets in search.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Schema Implementation Tips</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">JSON-LD Format</h3>
                  <p className="text-sm text-muted-foreground">JSON-LD is Google's recommended format for structured data. Place the generated code in your HTML &lt;head&gt; section or before the closing &lt;/body&gt; tag.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Validate Your Markup</h3>
                  <p className="text-sm text-muted-foreground">Always test your structured data using Google's Rich Results Test tool to ensure it's properly formatted and eligible for rich snippets.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Keep Information Accurate</h3>
                  <p className="text-sm text-muted-foreground">Ensure all information in your schema markup matches the visible content on your webpage. Inconsistencies can lead to penalties.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Update Regularly</h3>
                  <p className="text-sm text-muted-foreground">Keep your structured data up-to-date with any changes to your business information, product details, or content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
import { Metadata } from 'next';
import DeveloperToolsHub from '@/components/seo/DeveloperToolsHub';
import { 
  BreadcrumbsEnhanced,
  FAQSection,
  ReviewSnippets,
  TrustIndicators
} from '@/components/seo';
import { DEVELOPER_TOOLS_SEO } from '@/constants/seo/developer-tools-seo';
import { getDeveloperToolFAQs } from '@/constants/seo/developer-faqs';

export const metadata: Metadata = {
  title: DEVELOPER_TOOLS_SEO.category.title,
  description: DEVELOPER_TOOLS_SEO.category.description,
  keywords: [...DEVELOPER_TOOLS_SEO.category.keywords, ...DEVELOPER_TOOLS_SEO.category.longTailKeywords].join(', '),
  openGraph: {
    title: "Free Developer Tools Online - JSON, Base64, Hash, Regex | 30tools",
    description: "Professional developer tools for JSON formatting, Base64 encoding, hash generation, regex testing & more. Free, secure, client-side processing.",
    url: "https://30tools.com/developer-tools",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/developer-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Free Developer Tools Online - Professional Utilities for Developers"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Developer Tools Online - JSON, Base64, Hash, Regex",
    description: "Professional developer tools collection. Free, secure, client-side processing for all your development needs.",
    images: ["/og-images/developer-tools.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/developer-tools"
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
  category: 'Developer Tools'
};

export default function DeveloperToolsPage() {
  // Developer tools data
  const developerTools = [
    {
      id: 'json-formatter',
      name: 'JSON Formatter & Validator',
      description: 'Format, validate, and beautify JSON data with error detection',
      route: '/json-formatter',
      popular: true,
      category: 'formatter'
    },
    {
      id: 'base64-tool',
      name: 'Base64 Encoder/Decoder',
      description: 'Encode and decode Base64 strings and files',
      route: '/base64-tool',
      popular: true,
      category: 'encoder'
    },
    {
      id: 'hash-generator',
      name: 'Hash Generator',
      description: 'Generate MD5, SHA1, SHA256 hashes from text',
      route: '/hash-generator',
      popular: true,
      category: 'generator'
    },
    {
      id: 'regex-tester',
      name: 'Regex Tester',
      description: 'Test and validate regular expressions with real-time matching',
      route: '/regex-tester',
      popular: true,
      category: 'tester'
    },
    {
      id: 'api-tester',
      name: 'API Tester',
      description: 'Test REST APIs with custom headers and parameters',
      route: '/api-tester',
      popular: true,
      category: 'tester'
    },
    {
      id: 'jwt-decoder',
      name: 'JWT Decoder',
      description: 'Decode and validate JSON Web Tokens',
      route: '/jwt-decoder',
      popular: true,
      category: 'decoder'
    },
    {
      id: 'url-encoder',
      name: 'URL Encoder/Decoder',
      description: 'Encode and decode URLs and query parameters',
      route: '/url-encoder',
      popular: false,
      category: 'encoder'
    },
    {
      id: 'code-formatter',
      name: 'Code Formatter',
      description: 'Format and beautify HTML, CSS, JavaScript code',
      route: '/code-formatter',
      popular: true,
      category: 'formatter'
    }
  ];

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: 'Developer Tools', url: '/developer-tools' }
  ];

  // FAQ data
  const faqs = getDeveloperToolFAQs('general');

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Breadcrumbs with Schema */}
      <div className="container mx-auto px-4 pt-6">
        <BreadcrumbsEnhanced customBreadcrumbs={breadcrumbs} />
      </div>

      {/* Main Content */}
      <main>
        {/* Developer Tools Hub Component */}
        <DeveloperToolsHub 
          tools={developerTools}
          faqs={faqs}
        />

        {/* Trust Indicators */}
        <TrustIndicators />

        {/* User Reviews */}
        <div className="py-12">
          <ReviewSnippets 
            toolId="developer-tools"
            title="What Developers Say About Our Tools"
            showRatingSummary={true}
            variant="grid"
            limit={9}
          />
        </div>

        {/* FAQ Section */}
        <div className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <FAQSection 
              faqs={faqs}
              title="Developer Tools FAQ"
              categoryTitle="Developer Tools & Utilities"
              variant="accordion"
              showSchema={true}
            />
          </div>
        </div>

        {/* Developer Resources Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Developers Choose 30tools</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Professional-grade developer tools trusted by 100,000+ developers worldwide. 
                All tools feature client-side processing for maximum security and privacy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Privacy First',
                  description: 'All processing happens in your browser. Your code and data never leave your device.',
                  icon: '🔒'
                },
                {
                  title: 'Lightning Fast',
                  description: 'Instant results with optimized algorithms. No server round-trips required.',
                  icon: '⚡'
                },
                {
                  title: 'Always Free',
                  description: 'No registration, subscriptions, or hidden costs. Professional tools for everyone.',
                  icon: '💯'
                },
                {
                  title: 'Mobile Ready',
                  description: 'Fully responsive design works perfectly on desktop, tablet, and mobile devices.',
                  icon: '📱'
                }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Structured Data for Developer Tools Category */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Developer Tools Collection",
            "description": "Professional developer tools for JSON formatting, Base64 encoding, hash generation, and more",
            "url": "https://30tools.com/developer-tools",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": developerTools.length,
              "itemListElement": developerTools.map((tool, index) => ({
                "@type": "SoftwareApplication",
                "position": index + 1,
                "name": tool.name,
                "url": `https://30tools.com${tool.route}`,
                "description": tool.description,
                "applicationCategory": "DeveloperApplication",
                "operatingSystem": "Web Browser",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                }
              }))
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://30tools.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Developer Tools",
                  "item": "https://30tools.com/developer-tools"
                }
              ]
            }
          })
        }}
      />
    </div>
  );
}
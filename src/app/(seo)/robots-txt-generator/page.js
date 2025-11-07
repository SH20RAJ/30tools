import RobotsTxtGenerator from '@/components/tools/seo/RobotsTxtGenerator';

export const metadata = {
  title: "Robots.txt Generator - Free SEO Robots File Creator | 30tools",
  description: "Free robots txt generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
  keywords: [
    // Primary keywords
    "robots txt generator",
    "robots.txt",
    "robots file generator",
    "seo robots txt",
    "robots txt creator",
    
    // Long-tail keywords for SEO ranking
    "robots txt generator wordpress",
    "robots txt validator and tester",
    "create robots txt file online",
    "robots txt sitemap generator",
    "robots txt file creator free",
    "generate robots txt for website",
    "seo robots txt optimization",
    "robots txt disallow generator",
    "custom robots txt generator",
    "robots txt best practices",
    "robots txt allow disallow",
    "website crawling optimization"
  ].join(", "),
  openGraph: {
    title: "Free Robots.txt Generator - SEO Robots File Creator",
    description: "Generate optimized robots.txt files for better search engine crawling. Create robots.txt with custom rules, sitemaps, and crawl directives.",
    url: "https://30tools.com/robots-txt-generator",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/robots-txt-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Robots.txt Generator - SEO Tool"
      },
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Robots.txt Generator - Free SEO Tool",
    description: "Generate optimized robots.txt files for better search engine crawling and indexing. Free online robots.txt creator.",
    images: ["/og-images/robots-txt-generator.jpg"]
  },
  alternates: {
    canonical: "https://30tools.com/robots-txt-generator"
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Robots.txt Generator",
  "description": "Free online tool to generate robots.txt files for websites to control search engine crawling and improve SEO",
  "url": "https://30tools.com/robots-txt-generator",
  "applicationCategory": "SEOApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Custom user-agent rules",
    "Allow/Disallow directives",
    "Sitemap URL inclusion",
    "Crawl-delay settings",
    "Multiple user agents",
    "Comment annotations",
    "Syntax validation",
    "SEO best practices"
  ]
};

export default function RobotsTxtGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-background">
              Robots.txt Generator
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Generate SEO-optimized robots.txt files to control search engine crawling of your website. Create custom robots.txt with user-agent rules, allow/disallow directives, sitemap URLs, and crawl delays. Our free robots.txt generator helps improve your website's SEO and search engine indexing efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ SEO Optimized</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Custom Rules</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Sitemap Integration</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Syntax Validation</span>
            </div>
          </div>

          <RobotsTxtGenerator />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">How to Use Robots.txt Generator</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Configure Rules</h3>
                  <p className="text-sm text-muted-foreground">Set user-agent rules, allow/disallow paths, and crawl delays</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Add Sitemaps</h3>
                  <p className="text-sm text-muted-foreground">Include your XML sitemap URLs for better indexing</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Download & Upload</h3>
                  <p className="text-sm text-muted-foreground">Download the robots.txt file and upload it to your website root</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">What is Robots.txt?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">🤖 Search Engine Instructions</h3>
                  <p className="text-sm text-muted-foreground mb-4">Robots.txt is a file that tells search engines which pages or sections of your website they should or shouldn't crawl and index.</p>

                  <h3 className="font-medium mb-2 text-primary">📁 Website Root Location</h3>
                  <p className="text-sm text-muted-foreground mb-4">The robots.txt file must be placed in the root directory of your website (e.g., https://yoursite.com/robots.txt) to be effective.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">🎯 Crawl Control</h3>
                  <p className="text-sm text-muted-foreground mb-4">Use robots.txt to block access to private areas, prevent duplicate content issues, and optimize your crawl budget for important pages.</p>

                  <h3 className="font-medium mb-2 text-primary">🗺️ Sitemap Declaration</h3>
                  <p className="text-sm text-muted-foreground mb-4">Include your XML sitemap URLs in robots.txt to help search engines discover and index your content more efficiently.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Robots.txt Best Practices</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Essential Directives</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• <strong>User-agent:</strong> Specify which crawlers the rules apply to (* for all)</li>
                    <li>• <strong>Disallow:</strong> Block access to specific paths or pages</li>
                    <li>• <strong>Allow:</strong> Explicitly allow access to paths within disallowed directories</li>
                    <li>• <strong>Sitemap:</strong> Include URLs to your XML sitemaps</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Common Use Cases</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Block admin panels: <code>Disallow: /admin/</code></li>
                    <li>• Prevent private directories: <code>Disallow: /private/</code></li>
                    <li>• Block duplicate content: <code>Disallow: /*?</code> (URL parameters)</li>
                    <li>• Control crawl speed: <code>Crawl-delay: 1</code></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Important Notes</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Robots.txt is a public file - don't list sensitive URLs</li>
                    <li>• It's a directive, not a guarantee - bots can ignore it</li>
                    <li>• Test your robots.txt file regularly for syntax errors</li>
                    <li>• Use Google Search Console to test robots.txt effectiveness</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Example Robots.txt Files</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Basic E-commerce Site</h3>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <pre className="text-sm text-foreground dark:text-gray-200">
{`User-agent: *
Disallow: /admin/
Disallow: /cart/
Disallow: /checkout/
Disallow: /*?*
Allow: /

Sitemap: https://yoursite.com/sitemap.xml`}
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Blog/Content Site</h3>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <pre className="text-sm text-foreground dark:text-gray-200">
{`User-agent: *
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /cgi-bin/
Allow: /wp-content/uploads/

Sitemap: https://yoursite.com/sitemap.xml
Sitemap: https://yoursite.com/sitemap-images.xml`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
import SSLChecker from '@/components/tools/seo/SSLChecker';

export const metadata = {
  title: "SSL Checker - Free SSL Certificate Tester | 30tools",
  description: "Check SSL certificate status, expiry date, and security details for any website. Free SSL checker tool to verify HTTPS configuration and certificate validity.",
  keywords: [
    // Primary keywords
    "ssl checker",
    "ssl certificate checker",
    "ssl tester",
    "check ssl certificate",
    "ssl validator",
    
    // Long-tail keywords for SEO ranking
    "ssl certificate expiry checker",
    "check ssl certificate online free",
    "ssl chain validator tool",
    "website ssl security check",
    "ssl certificate status checker",
    "https ssl certificate tester",
    "ssl certificate information tool",
    "ssl certificate verification online",
    "check website ssl certificate",
    "ssl certificate validity checker",
    "ssl certificate chain analyzer",
    "free ssl certificate checker"
  ].join(", "),
  openGraph: {
    title: "Free SSL Checker - Test SSL Certificate Security",
    description: "Check SSL certificate status, expiry, and security details for any website. Free SSL checker tool for HTTPS verification.",
    url: "https://30tools.com/ssl-checker",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/ssl-checker.jpg",
        width: 1200,
        height: 630,
        alt: "SSL Checker - Security Tool"
      },
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "SSL Checker - Free Security Tool",
    description: "Check SSL certificate status and security details for any website. Free SSL certificate checker and validator.",
    images: ["/og-images/ssl-checker.jpg"]
  },
  alternates: {
    canonical: "https://30tools.com/ssl-checker"
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "SSL Checker",
  "description": "Free online tool to check SSL certificate status, expiry date, and security configuration for websites",
  "url": "https://30tools.com/ssl-checker",
  "applicationCategory": "SecurityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "SSL certificate validation",
    "Certificate expiry check",
    "Certificate chain analysis",
    "Security grade assessment",
    "Issuer information",
    "Domain validation",
    "Protocol support check",
    "Certificate transparency logs"
  ]
};

export default function SSLCheckerPage() {
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
              SSL Certificate Checker
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Check SSL certificate status, expiry date, and security configuration for any website. Our free SSL checker validates HTTPS certificates, analyzes certificate chains, and provides detailed security information to ensure your website's SSL implementation is secure and properly configured.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Certificate Validation</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Expiry Check</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Chain Analysis</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Security Grade</span>
            </div>
          </div>

          <SSLChecker />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">How to Use SSL Checker</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Enter Website URL</h3>
                  <p className="text-sm text-muted-foreground">Enter the domain or full URL you want to check (e.g., example.com)</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Run SSL Check</h3>
                  <p className="text-sm text-muted-foreground">Our tool will analyze the SSL certificate and security configuration</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Review Results</h3>
                  <p className="text-sm text-muted-foreground">Get detailed certificate information and security recommendations</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Why SSL Certificates Matter</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">🔒 Data Encryption</h3>
                  <p className="text-sm text-muted-foreground mb-4">SSL certificates encrypt data transmitted between users and your website, protecting sensitive information like passwords, credit card numbers, and personal data from interceptors.</p>

                  <h3 className="font-medium mb-2 text-primary">🏆 Trust & Credibility</h3>
                  <p className="text-sm text-muted-foreground mb-4">Websites with valid SSL certificates display a padlock icon and "https://" in the browser, showing visitors that the site is secure and trustworthy, which increases user confidence.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">📈 SEO Benefits</h3>
                  <p className="text-sm text-muted-foreground mb-4">Google and other search engines prioritize HTTPS websites in search results. Having a valid SSL certificate is a ranking factor that can improve your website's search engine visibility.</p>

                  <h3 className="font-medium mb-2 text-primary">✅ Compliance Requirements</h3>
                  <p className="text-sm text-muted-foreground mb-4">Many industries and regulations (like PCI DSS for payment processing) require SSL certificates. They're essential for e-commerce sites and any website handling sensitive data.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">SSL Certificate Information</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Certificate Validity</h3>
                  <p className="text-sm text-muted-foreground">Checks if the certificate is currently valid and properly configured</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Expiry Date</h3>
                  <p className="text-sm text-muted-foreground">Shows when the certificate expires and if renewal is needed</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Certificate Authority</h3>
                  <p className="text-sm text-muted-foreground">Identifies who issued the certificate and their trustworthiness</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Domain Validation</h3>
                  <p className="text-sm text-muted-foreground">Verifies that the certificate matches the domain being checked</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Certificate Chain</h3>
                  <p className="text-sm text-muted-foreground">Analyzes the complete certificate chain for proper configuration</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Security Grade</h3>
                  <p className="text-sm text-muted-foreground">Provides an overall security rating based on configuration</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Common SSL Issues & Solutions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2 text-destructive">Certificate Expired</h3>
                  <p className="text-sm text-muted-foreground">Your SSL certificate has passed its expiry date. Contact your certificate provider or hosting company to renew the certificate immediately to avoid security warnings.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">Domain Mismatch</h3>
                  <p className="text-sm text-muted-foreground">The certificate doesn't match the domain name. Ensure the certificate covers all domains/subdomains your site uses, or get a wildcard certificate.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">Incomplete Certificate Chain</h3>
                  <p className="text-sm text-muted-foreground">The intermediate certificates are missing. Install the complete certificate chain including all intermediate certificates from your CA.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">Mixed Content</h3>
                  <p className="text-sm text-muted-foreground">Your HTTPS page loads HTTP resources. Update all internal links, images, scripts, and stylesheets to use HTTPS URLs to avoid security warnings.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">SSL Best Practices</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3">Certificate Management</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Monitor certificate expiry dates and set renewal reminders</li>
                    <li>• Use strong encryption algorithms (RSA 2048-bit or ECC 256-bit)</li>
                    <li>• Implement proper certificate chain configuration</li>
                    <li>• Consider wildcard certificates for multiple subdomains</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Security Configuration</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Enable HTTP Strict Transport Security (HSTS)</li>
                    <li>• Disable outdated SSL/TLS protocols (SSLv3, TLS 1.0, 1.1)</li>
                    <li>• Configure strong cipher suites</li>
                    <li>• Implement Certificate Transparency logging</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
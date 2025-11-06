import PasswordCheckerTool from '@/components/tools/security/PasswordCheckerTool';

export const metadata = {
  title: "Password Strength Checker - Free Online Tool | 30tools",
  description: "Professional password strength checker to Process text instantly. Free online text tool with advanced features. Perfect for writers, students & professionals.",
  keywords: [
    // Primary high-volume keywords
    "password strength checker",
    "password security checker",
    "password analyzer",
    "password tester",
    "check password strength",
    "password security test",
    "password strength test",
    "password validator",
    "password security analyzer",
    "password strength meter",
    "password checker online",
    "password security tool",
    "password strength tool",
    "test password strength",
    "password security check",
    "password analyzer online",
    "password tester online",
    "password validator online",
    "password security meter",
    "password strength score",
    "password crack time",
    "password entropy checker",
    "password complexity checker",

    // Long-tail keywords for SEO ranking
    "password strength checker online free no registration",
    "check password strength security score instantly",
    "password security analyzer crack time estimation",
    "password tester with security recommendations tips",
    "password strength checker privacy protected local",
    "password analyzer entropy complexity calculator",
    "password security test brute force resistance",
    "password strength meter visual indicator score",
    "check password strength against common passwords",
    "password security checker dictionary attack test",
    "password analyzer with improvement suggestions",
    "password strength test meets security requirements",
    "password security analyzer for business accounts",
    "password checker tool cybersecurity best practices"
  ].join(", "),
  openGraph: {
    title: "Password Strength Checker - Free Security Tool",
    description: "Check password strength and generate secure passwords with our free online tool.",
    url: "https://30tools.com/password-strength-checker",
    images: [
      {
        url: "/og-images/password-checker.jpg",
        width: 1200,
        height: 630,
        alt: "Password Strength Checker Tool"
      }
    ],
  },
,
  twitter: {
    card: "summary_large_image",
    title: "Password Strength Checker - Free Online Tool | 30tools",
    description: "Professional password strength checker to Process text instantly. Free online text tool with advanced features. Perfect for writers, students & professionals.",
    images: ["/og-images/password-strength-checker.jpg"],
    creator: "@30tools"
  }
,
  alternates: {
    canonical: "https://30tools.com/password-strength-checker"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Password Strength Checker",
  "description": "Free online tool to check password strength, analyze security, and get recommendations for stronger passwords",
  "url": "https://30tools.com/password-strength-checker",
  "applicationCategory": "SecurityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Check password strength and security",
    "Estimate password crack time",
    "Analyze password complexity",
    "Security recommendations",
    "Dictionary attack testing",
    "Brute force resistance analysis",
    "Privacy protected - passwords not stored",
    "Instant security scoring"
  ],
  "author": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  }
};

export default function PasswordCheckerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Password Strength Checker</h1>
            <p className="text-xl text-muted-foreground">
              Test your password security and get recommendations for stronger passwords
            </p>
          </div>

          <PasswordCheckerTool />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">How to Check Password Strength</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-yellow-500 font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Enter Password</h3>
                  <p className="text-sm text-muted-foreground">Type your password in the secure input field</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-yellow-500 font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">View Analysis</h3>
                  <p className="text-sm text-muted-foreground">See strength score, crack time, and security analysis</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-yellow-500 font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Get Recommendations</h3>
                  <p className="text-sm text-muted-foreground">Follow suggestions to improve password security</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Password Security Analysis</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-yellow-600">🔍 Comprehensive Testing</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Length and complexity analysis</li>
                    <li>• Character variety assessment</li>
                    <li>• Dictionary attack resistance</li>
                    <li>• Common password detection</li>
                    <li>• Pattern recognition analysis</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-yellow-600">📊 Security Metrics</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Strength score (0-100)</li>
                    <li>• Estimated crack time</li>
                    <li>• Entropy calculation</li>
                    <li>• Brute force resistance</li>
                    <li>• Security recommendations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Password Security Best Practices</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-green-600">✅ Strong Password Guidelines</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Use at least 12 characters</li>
                    <li>• Include uppercase and lowercase letters</li>
                    <li>• Add numbers and special characters</li>
                    <li>• Avoid dictionary words</li>
                    <li>• Don't use personal information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-red-600">❌ Common Password Mistakes</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Using the same password everywhere</li>
                    <li>• Simple substitutions (@ for a)</li>
                    <li>• Sequential characters (123, abc)</li>
                    <li>• Personal dates and names</li>
                    <li>• Common passwords (password123)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">More Security Tools</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a
                  href="/password-generator"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">🔐 Password Generator</h3>
                  <p className="text-sm text-muted-foreground">
                    Generate strong, secure passwords with customizable options.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">Generate Password →</span>
                </a>

                <a
                  href="/hash-generator"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">🔒 Hash Generator</h3>
                  <p className="text-sm text-muted-foreground">
                    Generate MD5, SHA1, SHA256 hashes for security purposes.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">Generate Hashes →</span>
                </a>

                <a
                  href="/base64-encoder"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">🔄 Base64 Encoder</h3>
                  <p className="text-sm text-muted-foreground">
                    Encode and decode Base64 strings for data transmission.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">Encode Base64 →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

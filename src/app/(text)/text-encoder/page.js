import TextEncoder from "@/components/tools/text/TextEncoderTool";

export const metadata = {
  title: "Text Encoder - Free Text Tool | Professional Text Processing",
  description: 'Encode and decode text using URL encoding, Base64, HTML entities, and more. Free online text encoder decoder tool with multiple encoding formats.',
  keywords: [
    // Primary high-volume keywords
    "text encoder",
    "text decoder",
    "url encoder",
    "base64 encoder",
    "html encoder",
    "text encoding",
    "text decoding",
    "encode text",
    "decode text",
    "url encoding",
    "base64 encoding",
    "html encoding",
    "text encoder online",
    "text decoder online",
    "url encoder online",
    "base64 encoder online",
    "html encoder online",
    "text encoding online",
    "text decoding online",
    "encode text online",
    "decode text online",
    "url encoding online",
    "base64 encoding online",
    "html encoding online",
    "uri encoder",
    "percent encoding",
    "html entity encoder",
    "text converter",
    "encoding decoder",
    "string encoder",

    // Long-tail keywords for SEO ranking
    "url encode decode text special characters online",
    "base64 encode decode text images files online",
    "html entity encoder decoder special characters",
    "text encoder decoder multiple formats url base64",
    "encode decode text for web development programming",
    "url percent encoding decoder for query parameters",
    "base64 text encoder decoder no file size limit",
    "html character entity encoder decoder tool",
    "text encoding decoding tool utf8 ascii unicode",
    "encode decode text strings for apis databases",
    "url safe text encoding decoder web applications",
    "base64 string encoder decoder email attachments",
    "html escape unescape text special characters",
    "text encoder decoder tool for developers programmers"
  ].join(", "),
  openGraph: {
    title: 'Text Encoder Decoder - URL, Base64, HTML Encoding | 30tools',
    description: 'Encode and decode text using URL encoding, Base64, HTML entities, and more.',
    type: 'website',
    url: 'https://30tools.com/text-encoder',
    images: [
      {
        url: 'https://30tools.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Text Encoder Decoder Tool'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Text Encoder Decoder - URL, Base64, HTML Encoding',
    description: 'Encode and decode text using URL encoding, Base64, HTML entities, and more.',
    images: ['https://30tools.com/og-image.jpg']
  },
  alternates: {
    canonical: 'https://30tools.com/text-encoder'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Text Encoder Decoder",
  "description": "Free online tool to encode and decode text using URL encoding, Base64, HTML entities, and other encoding formats",
  "url": "https://30tools.com/text-encoder",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "URL encode and decode text",
    "Base64 encode and decode text",
    "HTML entity encode and decode",
    "URI component encoding",
    "Percent encoding support",
    "Multiple encoding formats",
    "Batch text processing",
    "Privacy protected - no data stored"
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

export default function TextEncoderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Text Encoder & Decoder</h1>
            <p className="text-xl text-muted-foreground">
              Encode and decode text using URL encoding, Base64, HTML entities, and more
            </p>
          </div>

          <TextEncoder />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">How to Encode & Decode Text</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Enter Your Text</h3>
                  <p className="text-sm text-muted-foreground">Type or paste the text you want to encode/decode</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Choose Encoding Type</h3>
                  <p className="text-sm text-muted-foreground">Select from URL, Base64, HTML, or other encoding formats</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Get Results</h3>
                  <p className="text-sm text-muted-foreground">Copy the encoded or decoded text instantly</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Encoding Formats</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">🔗 URL Encoding</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Encode special characters for URLs</li>
                    <li>• Percent encoding (%20, %21, etc.)</li>
                    <li>• Safe for query parameters</li>
                    <li>• Handle spaces and symbols</li>
                    <li>• RFC 3986 compliant</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">📝 Base64 Encoding</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Binary-safe text encoding</li>
                    <li>• Email and data transmission</li>
                    <li>• Image and file encoding</li>
                    <li>• ASCII-safe character set</li>
                    <li>• Standard and URL-safe variants</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">🌐 HTML Encoding</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• HTML entity encoding</li>
                    <li>• Escape special characters</li>
                    <li>• Prevent XSS attacks</li>
                    <li>• Named and numeric entities</li>
                    <li>• Unicode character support</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">When to Use Text Encoding</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">🌐 Web Development</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• URL parameter encoding</li>
                    <li>• Form data submission</li>
                    <li>• HTML content escaping</li>
                    <li>• API request formatting</li>
                    <li>• JavaScript string handling</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">💻 Data Processing</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Email attachment encoding</li>
                    <li>• Database text storage</li>
                    <li>• File transfer protocols</li>
                    <li>• Configuration file handling</li>
                    <li>• XML and JSON data</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Encoding Examples</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">URL Encoding:</h3>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <div><strong>Original:</strong> Hello World! @#$%</div>
                      <div><strong>Encoded:</strong> Hello%20World%21%20%40%23%24%25</div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Base64 Encoding:</h3>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <div><strong>Original:</strong> Hello World!</div>
                      <div><strong>Encoded:</strong> SGVsbG8gV29ybGQh</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">HTML Entity Encoding:</h3>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <div><strong>Original:</strong> &lt;script&gt;alert('hello')&lt;/script&gt;</div>
                      <div><strong>Encoded:</strong> &amp;lt;script&amp;gt;alert('hello')&amp;lt;/script&amp;gt;</div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">URI Component Encoding:</h3>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <div><strong>Original:</strong> user@example.com</div>
                      <div><strong>Encoded:</strong> user%40example.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Common Use Cases</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-border pl-4">
                  <h3 className="font-medium mb-2">🔗 URL Parameters</h3>
                  <p className="text-sm text-muted-foreground">
                    When passing data through URL query strings, special characters like spaces, ampersands, and symbols need to be URL-encoded to ensure proper transmission.
                  </p>
                </div>
                
                <div className="border-l-4 border-border pl-4">
                  <h3 className="font-medium mb-2">📧 Email Attachments</h3>
                  <p className="text-sm text-muted-foreground">
                    Base64 encoding is commonly used for email attachments and embedded images, ensuring binary data can be transmitted safely through text-based protocols.
                  </p>
                </div>
                
                <div className="border-l-4 border-border pl-4">
                  <h3 className="font-medium mb-2">🛡️ HTML Security</h3>
                  <p className="text-sm text-muted-foreground">
                    HTML entity encoding prevents XSS attacks by converting dangerous characters like &lt;, &gt;, and &amp; into safe HTML entities.
                  </p>
                </div>
                
                <div className="border-l-4 border-border pl-4">
                  <h3 className="font-medium mb-2">🔄 Data Exchange</h3>
                  <p className="text-sm text-muted-foreground">
                    APIs and web services often require specific text encoding formats to ensure data integrity during transmission between different systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">More Developer Tools</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a
                  href="/regex-tester"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">🔍 Regex Tester</h3>
                  <p className="text-sm text-muted-foreground">
                    Test and validate regular expressions with real-time matching.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">Test Regex →</span>
                </a>

                <a
                  href="/text-formatter"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">✨ Text Formatter</h3>
                  <p className="text-sm text-muted-foreground">
                    Format and clean up your text with various options.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">Format Text →</span>
                </a>

                <a
                  href="/binary-converter"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">🔢 Binary Converter</h3>
                  <p className="text-sm text-muted-foreground">
                    Convert text to binary and binary to text instantly.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">Convert Binary →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
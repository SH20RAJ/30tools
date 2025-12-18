import BinaryConverterTool from "@/components/tools/text/BinaryConverterTool";

export const metadata = {
  title: "Binary Converter - Free Online Converter | Instant Conversion",
  description:
    "Convert text to binary and binary to text instantly. Free online binary converter with UTF-8 encoding support for developers, students, and programmers.",
  keywords: [
    // Primary high-volume keywords
    "binary converter",
    "text to binary",
    "binary to text",
    "ascii converter",
    "binary encoder",
    "binary decoder",
    "binary translator",
    "text to binary converter",
    "binary to text converter",
    "binary code converter",
    "ascii to binary",
    "binary to ascii",
    "binary text converter",
    "convert text to binary",
    "convert binary to text",
    "binary conversion tool",
    "binary encoder decoder",
    "text binary converter",
    "binary translator online",
    "binary code translator",
    "ascii binary converter",
    "binary string converter",
    "binary message converter",

    // Long-tail keywords for SEO ranking
    "binary converter online free no registration unlimited",
    "text to binary converter with utf8 encoding support",
    "binary to text converter decode binary messages",
    "ascii converter text to binary code translation",
    "binary encoder for programming computer science",
    "binary decoder convert binary code to readable text",
    "binary translator for students learning programming",
    "text to binary converter copy paste ready",
    "binary to text converter instant results accurate",
    "binary code converter for developers programmers",
    "ascii to binary converter character encoding",
    "binary text converter educational tool learning",
    "binary conversion tool for data encoding decoding",
    "binary encoder decoder privacy protected local",
  ].join(", "),
  openGraph: {
    title: "Binary Converter - Text to Binary & Binary to Text | 30tools",
    description:
      "Convert text to binary and binary to text with instant results.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Binary Converter - Free Online Converter | Instant Conversion",
    description:
      "Convert Process instantly with our free binary converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
    images: ["/og-images/binary-converter.jpg"],
    creator: "@30tools",
  },

  alternates: {
    canonical: "https://30tools.com/binary-converter",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Binary Converter",
  description:
    "Free online tool to convert text to binary and binary to text with UTF-8 encoding support",
  url: "https://30tools.com/binary-converter",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Convert text to binary code",
    "Convert binary to readable text",
    "UTF-8 encoding support",
    "ASCII character conversion",
    "Instant conversion results",
    "Copy to clipboard functionality",
    "Educational tool for learning",
    "Privacy protected - no data stored",
  ],
  author: {
    "@type": "Organization",
    name: "30tools",
    url: "https://30tools.com",
  },
  publisher: {
    "@type": "Organization",
    name: "30tools",
    url: "https://30tools.com",
  },
};

export default function BinaryConverterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Binary Converter</h1>
            <p className="text-xl text-muted-foreground">
              Convert text to binary and binary to text instantly
            </p>
          </div>

          <BinaryConverterTool />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                How to Use Binary Converter
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    📝 Text to Binary
                  </h3>
                  <ol className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>1. Enter your text in the input field</li>
                    <li>2. Click "Convert to Binary" button</li>
                    <li>3. Copy the binary code result</li>
                    <li>4. Use the binary code as needed</li>
                  </ol>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    🔢 Binary to Text
                  </h3>
                  <ol className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>1. Paste binary code in the input field</li>
                    <li>2. Click "Convert to Text" button</li>
                    <li>3. Read the decoded text result</li>
                    <li>4. Copy the readable text</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Understanding Binary Code
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    💻 What is Binary?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Binary is a base-2 number system using only 0s and 1s. It's
                    the fundamental language of computers, where each character
                    is represented by a unique sequence of binary digits (bits).
                  </p>

                  <h3 className="font-medium mb-2 text-primary">
                    🔤 ASCII Encoding
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Each character has a corresponding ASCII value that gets
                    converted to an 8-bit binary representation. For example,
                    'A' = 65 = 01000001 in binary.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    🌐 UTF-8 Support
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our converter supports UTF-8 encoding, allowing conversion
                    of international characters, emojis, and special symbols
                    beyond basic ASCII characters.
                  </p>

                  <h3 className="font-medium mb-2 text-primary">
                    📚 Educational Value
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Perfect for computer science students, programmers learning
                    about data representation, and anyone curious about how
                    computers store text information.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Binary Converter Use Cases
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    🎓 Education & Learning
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Computer science coursework</li>
                    <li>• Understanding data representation</li>
                    <li>• Learning binary number system</li>
                    <li>• Programming fundamentals</li>
                    <li>• Digital literacy education</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    💻 Development & Programming
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Data encoding and decoding</li>
                    <li>• Debugging binary data</li>
                    <li>• Network protocol analysis</li>
                    <li>• File format understanding</li>
                    <li>• Low-level programming tasks</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                More Developer Tools
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a
                  href="/base64-encoder"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    🔄 Base64 Encoder
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Encode and decode Base64 strings for data transmission.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">
                    Encode Base64 →
                  </span>
                </a>

                <a
                  href="/hash-generator"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    🔒 Hash Generator
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Generate MD5, SHA1, SHA256 hashes for security purposes.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">
                    Generate Hashes →
                  </span>
                </a>

                <a
                  href="/url-encoder"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    🌐 URL Encoder
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Encode and decode URLs for web development.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">
                    Encode URLs →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

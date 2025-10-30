import TextFormatter from "@/components/tools/text/TextFormatterTool";

export const metadata = {
  title: 'Text Formatter - Format and Clean Text Online Free | 30tools',
  description: 'Format and clean up text with various options. Remove extra spaces, fix line breaks, apply text formatting, and clean messy text instantly. Free online text formatter tool.',
  keywords: [
    // Primary high-volume keywords
    "text formatter",
    "text cleaner",
    "format text",
    "clean text",
    "text formatting tool",
    "text processor",
    "text editor online",
    "text beautifier",
    "text organizer",
    "text fixer",
    "remove extra spaces",
    "fix line breaks",
    "text cleanup tool",
    "format text online",
    "clean text online",
    "text formatting online",
    "text cleaner online",
    "text processor online",
    "text editor free",
    "text beautifier online",
    "text organizer tool",
    "text fixer online",
    "remove spaces tool",

    // Long-tail keywords for SEO ranking
    "text formatter online free no registration unlimited",
    "text cleaner remove extra spaces line breaks",
    "format text tool clean messy copy paste",
    "clean text online remove unwanted characters",
    "text formatting tool for writers editors",
    "text processor bulk text cleaning formatting",
    "text editor online format clean organize",
    "text beautifier make text readable clean",
    "text organizer fix formatting issues problems",
    "text fixer repair broken formatting structure",
    "remove extra spaces between words sentences",
    "fix line breaks paragraph formatting issues",
    "text cleanup tool for copied pasted content",
    "format text online instant results copy ready"
  ].join(", "),
  openGraph: {
    title: 'Text Formatter - Format and Clean Text | 30tools',
    description: 'Format and clean up text with various options.',
    type: 'website',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Text Formatter",
  "description": "Free online tool to format and clean text with various options including removing extra spaces and fixing line breaks",
  "url": "https://30tools.com/text-formatter",
  "applicationCategory": "ProductivityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Remove extra spaces and whitespace",
    "Fix line breaks and paragraph formatting",
    "Clean messy copied text",
    "Format text for readability",
    "Bulk text processing",
    "Instant text cleaning",
    "Copy to clipboard functionality",
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

export default function TextFormatterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Text Formatter</h1>
            <p className="text-xl text-muted-foreground">
              Format and clean up your text with various formatting options
            </p>
          </div>

          <TextFormatter />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">How to Format Text</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-indigo-500 font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Paste Your Text</h3>
                  <p className="text-sm text-muted-foreground">Copy and paste messy or unformatted text into the editor</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-indigo-500 font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Choose Options</h3>
                  <p className="text-sm text-muted-foreground">Select formatting options like removing spaces or fixing line breaks</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-indigo-500 font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Get Clean Text</h3>
                  <p className="text-sm text-muted-foreground">Copy the formatted, clean text ready for use</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Text Formatting Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-indigo-600">🧹 Text Cleaning</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Remove extra spaces between words</li>
                    <li>• Clean up multiple line breaks</li>
                    <li>• Remove unwanted characters</li>
                    <li>• Fix paragraph spacing</li>
                    <li>• Trim whitespace from beginning and end</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-indigo-600">✨ Text Formatting</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Standardize line endings</li>
                    <li>• Fix indentation issues</li>
                    <li>• Normalize text structure</li>
                    <li>• Remove HTML tags (if applicable)</li>
                    <li>• Format for readability</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">When to Use Text Formatter</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-green-600">📄 Content Creation</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Clean copied text from websites</li>
                    <li>• Format text for blog posts</li>
                    <li>• Prepare content for social media</li>
                    <li>• Clean up email content</li>
                    <li>• Format text for presentations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-blue-600">💼 Professional Use</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Clean data for spreadsheets</li>
                    <li>• Format text for documents</li>
                    <li>• Prepare content for publishing</li>
                    <li>• Clean up imported text</li>
                    <li>• Format code comments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">More Text Tools</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a
                  href="/word-counter"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">📊 Word Counter</h3>
                  <p className="text-sm text-muted-foreground">
                    Count words, characters, paragraphs with real-time statistics.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">Count Words →</span>
                </a>

                <a
                  href="/text-case-converter"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">🔤 Text Case Converter</h3>
                  <p className="text-sm text-muted-foreground">
                    Convert text to uppercase, lowercase, title case, and more.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">Convert Text Case →</span>
                </a>

                <a
                  href="/text-diff"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">🔍 Text Diff Checker</h3>
                  <p className="text-sm text-muted-foreground">
                    Compare two texts and highlight the differences.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">Compare Text →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

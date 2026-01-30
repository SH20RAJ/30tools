import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Type,
  FileText,
  Hash,
  AlignLeft,
  Eye,
  Search,
  Shuffle,
  Key,
} from "lucide-react";

export const metadata = {
  title: { absolute: "Text Tools: Free Online Processing & Analysis | 30Tools" },
  description:
    "Professional text tools to Process text instantly. Free online text tool with advanced features. Perfect for writers, students & professionals.",
  keywords:
    "text tools, text processing, text formatter, case converter, word counter, password generator, text analysis, string manipulation, text editor, free text tools",
  openGraph: {
    title: "Free Text Tools - Text Processing & Analysis",
    description:
      "Professional text processing tools for formatting, analysis, and manipulation. Password generator, case converter, word counter, and more.",
    type: "website",
    url: "https://30tools.com/text-tools",
    images: [
      {
        url: "https://30tools.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Text Tools Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Text Tools - Text Processing & Analysis",
    description:
      "Professional text processing tools for formatting, analysis, and manipulation.",
    images: ["https://30tools.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://30tools.com/text-tools",
  },
};

const textTools = [
  {
    name: "Password Generator",
    description:
      "Generate secure passwords with customizable length and character sets",
    href: "/password-generator",
    icon: Key,
    category: "Security",
    featured: true,
  },
  {
    name: "Text Formatter",
    description: "Format and clean text with various formatting options",
    href: "/text-formatter",
    icon: AlignLeft,
    category: "Formatting",
  },
  {
    name: "Case Converter",
    description:
      "Convert text between different cases (uppercase, lowercase, title case)",
    href: "/case-converter",
    icon: Type,
    category: "Formatting",
  },
  {
    name: "Word Counter",
    description: "Count words, characters, sentences, and paragraphs in text",
    href: "/word-counter",
    icon: Hash,
    category: "Analysis",
  },
  {
    name: "Text Diff",
    description: "Compare two texts and highlight differences",
    href: "/text-diff",
    icon: Eye,
    category: "Comparison",
  },
  {
    name: "Lorem Ipsum Generator",
    description: "Generate placeholder text for design and development",
    href: "/lorem-ipsum",
    icon: FileText,
    category: "Generation",
  },
  {
    name: "Text to Binary",
    description: "Convert text to binary and binary to text",
    href: "/binary-converter",
    icon: Hash,
    category: "Conversion",
    featured: true,
  },
  {
    name: "Text Reverser",
    description: "Reverse text characters or words order",
    href: "/text-reverser",
    icon: Shuffle,
    category: "Manipulation",
  },
  {
    name: "Remove Duplicates",
    description: "Remove duplicate lines from text",
    href: "/remove-duplicates",
    icon: FileText,
    category: "Cleaning",
  },
  {
    name: "Line Sorter",
    description: "Sort text lines alphabetically or numerically",
    href: "/line-sorter",
    icon: AlignLeft,
    category: "Sorting",
  },
  {
    name: "Text Encoder/Decoder",
    description: "Encode and decode text using various methods",
    href: "/text-encoder",
    icon: Hash,
    category: "Encoding",
  },
  {
    name: "Regex Tester",
    description: "Test and validate regular expressions",
    href: "/code-tools",
    icon: Search,
    category: "Validation",
  },
];

const categories = [
  { name: "Security", count: 1, color: "bg-destructive/20 text-destructive" },
  { name: "Formatting", count: 3, color: "bg-muted text-foreground" },
  { name: "Analysis", count: 1, color: "bg-muted text-foreground" },
  { name: "Conversion", count: 2, color: "bg-muted text-foreground" },
  { name: "Generation", count: 1, color: "bg-muted text-primary" },
  { name: "Manipulation", count: 2, color: "bg-muted text-primary" },
  { name: "Other", count: 3, color: "bg-gray-100 text-foreground" },
];

export default function TextToolsPage() {
  const featuredTools = textTools.filter((tool) => tool.featured);
  const allTools = textTools;

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Type className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">Text Tools</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Professional text processing and analysis tools for formatting,
          manipulation, and content creation. All tools work directly in your
          browser.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">
              {textTools.length}+
            </div>
            <div className="text-sm text-muted-foreground">Text Tools</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Free</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">0</div>
            <div className="text-sm text-muted-foreground">Registration</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">∞</div>
            <div className="text-sm text-muted-foreground">Usage</div>
          </CardContent>
        </Card>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category.name}
              variant="secondary"
              className={category.color}
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>
      </div>

      {/* Featured Tools */}
      {featuredTools.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Featured Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <Card
                  key={tool.name}
                  className="hover:shadow-lg transition-shadow border-primary/20"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {tool.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {tool.description}
                    </CardDescription>
                    <Link href={tool.href}>
                      <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                        Try Now
                      </button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* All Tools */}
      <div>
        <h2 className="text-2xl font-bold mb-4">All Text Tools</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allTools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <Card
                key={tool.name}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-muted rounded-lg">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {tool.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {tool.description}
                  </CardDescription>
                  <Link href={tool.href}>
                    <button className="w-full border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                      Use Tool
                    </button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* SEO Content */}
      <div className="mt-12 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>About Text Processing Tools</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Text processing tools are essential utilities for anyone working
              with written content, from developers and content creators to
              students and professionals. Our comprehensive collection of text
              tools helps you format, analyze, manipulate, and convert text
              efficiently.
            </p>

            <h3>Why Use Text Tools?</h3>
            <ul>
              <li>
                <strong>Productivity:</strong> Automate repetitive text tasks
                and save time
              </li>
              <li>
                <strong>Accuracy:</strong> Eliminate manual errors in text
                processing
              </li>
              <li>
                <strong>Convenience:</strong> Process text directly in your
                browser
              </li>
              <li>
                <strong>Versatility:</strong> Handle various text formats and
                requirements
              </li>
              <li>
                <strong>Privacy:</strong> All processing happens locally in your
                browser
              </li>
            </ul>

            <h3>Common Use Cases:</h3>
            <ul>
              <li>Content creation and editing</li>
              <li>Data cleaning and preparation</li>
              <li>Programming and development</li>
              <li>Academic writing and research</li>
              <li>SEO and digital marketing</li>
              <li>Security and password management</li>
            </ul>

            <h3>Tool Categories:</h3>
            <ul>
              <li>
                <strong>Security Tools:</strong> Password generators and
                validators
              </li>
              <li>
                <strong>Formatting Tools:</strong> Case converters and text
                formatters
              </li>
              <li>
                <strong>Analysis Tools:</strong> Word counters and text
                analyzers
              </li>
              <li>
                <strong>Conversion Tools:</strong> Encoding, decoding, and
                format conversion
              </li>
              <li>
                <strong>Generation Tools:</strong> Lorem ipsum and placeholder
                text
              </li>
              <li>
                <strong>Manipulation Tools:</strong> Text reversal, sorting, and
                cleaning
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Text Tools Collection",
            description:
              "Comprehensive collection of free text processing and analysis tools",
            url: "https://30tools.com/text-tools",
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: textTools.length,
              itemListElement: textTools.map((tool, index) => ({
                "@type": "SoftwareApplication",
                position: index + 1,
                name: tool.name,
                description: tool.description,
                url: `https://30tools.com${tool.href}`,
                applicationCategory: "UtilityApplication",
                operatingSystem: "Any",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                },
              })),
            },
            provider: {
              "@type": "Organization",
              name: "30tools",
              url: "https://30tools.com",
            },
          }),
        }}
      />
    </div>
  );
}

import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "More Developer Utilitys by 30Tools - Online Tools Collection",
  description: "Professional more tools with instant results. Free online tool for students, professionals, and businesses worldwide. Used by millions worldwide for reliable, fast results.",
  keywords: [
    "more tools",
    "more tools online",
    "free more tools",
    "more tools tool",
    "online more tools free",
    "professional more tools",
    "more tools online tool",
    "best more tools free",
    "more tools web app",
    "more tools utility",
    "online tool",
    "free utility",
    "web application"
  ].join(", "),
  openGraph: {
    title: "More Developer & Utility Tools by 30Tools",
    description: "Comprehensive collection of free developer tools and online utilities for professionals",
    url: "https://30tools.com/more-tools",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/more-tools.jpg",
        width: 1200,
        height: 630,
        alt: "More Developer & Utility Tools by 30Tools"
      },
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "More Developer & Utility Tools by 30Tools",
    description: "Comprehensive collection of free developer tools and online utilities",
    images: ["/og-images/more-tools.jpg"]
  },
  alternates: {
    canonical: "https://30tools.com/more-tools"
  },
};

const tools = [
  {
    name: "Coders - Developer Tools",
    url: "https://coders.30tools.com/",
    icon: "🚀",
    description: "Essential developer tools including JSON formatter, code beautifier, API tester, and complexity analyzer. Built by developers, for developers.",
    category: "Developer Tools",
    features: ["JSON Formatter", "API Tester", "Code Beautifier", "Complexity Analyzer"]
  },
  {
    name: "Online Tools",
    url: "https://online-tools.30tools.com/",
    icon: "🔧",
    description: "Comprehensive online utilities for hashing (MD5, SHA256), encoding (Base64, Base32), encryption (AES, RSA), and format conversion.",
    category: "Utilities",
    features: ["Hash Generators", "Encoding Tools", "Encryption", "Format Converters"]
  },
  {
    name: "DevTools",
    url: "https://devtools.30tools.com/",
    icon: "⚙️",
    description: "Professional development tools featuring hash generators, cryptography utilities, JSON/XML formatters, and case converters.",
    category: "Developer Tools",
    features: ["Hash Tools", "Cryptography", "JSON/XML Formatters", "Case Converters"]
  },
  {
    name: "IT-Tools",
    url: "https://it-tools.30tools.com/",
    icon: "🛠️",
    description: "Handy IT tools collection with 80+ utilities including token generators, UUID/ULID generators, QR code creator, and JWT parser.",
    category: "IT Tools",
    features: ["80+ Tools", "Token Generators", "QR Code Creator", "JWT Parser"]
  },
  {
    name: "30Tools - Main Platform",
    url: "https://tools.30tools.com/",
    icon: "🎯",
    description: "Your ultimate online toolkit with 140+ professional tools. Fast, secure, and privacy-focused tools for image, video, PDF, audio processing and more.",
    category: "All-in-One Platform",
    features: ["140+ Tools", "Image Tools", "Video Tools", "PDF Tools", "Privacy First"]
  },
  {
    name: "TeraBox Downloader",
    url: "https://terabox.beer/",
    icon: "📦",
    description: "Free TeraBox video downloader with inline player. Download and play TeraBox videos directly in your browser with our Telegram bot support.",
    category: "Media Tools",
    features: ["Video Downloader", "Inline Player", "Telegram Bot", "Free Downloads"]
  },
  {
    name: "AI Agents Directory",
    url: "https://ai-agents.30tools.com/",
    icon: "🤖",
    description: "Discover 557+ AI agents across 19 categories. Find the perfect AI solution for coding, productivity, customer service, content creation and more.",
    category: "AI Tools",
    features: ["557+ AI Agents", "19 Categories", "Agent Discovery", "Free Directory"]
  },
  {
    name: "Converto",
    url: "https://converto.30tools.com/",
    icon: "🔄",
    description: "Universal file converter supporting multiple formats. Convert documents, images, audio, and video files quickly and securely.",
    category: "Converters",
    features: ["Universal Converter", "Multiple Formats", "Fast Processing", "Secure"]
  },
  {
    name: "Piano Notes",
    url: "https://piano-notes.30tools.com/",
    icon: "🎹",
    description: "Interactive piano learning tool with notes, chords, and music theory resources. Perfect for beginners and professionals alike.",
    category: "Music Tools",
    features: ["Piano Keyboard", "Music Theory", "Chord Library", "Learning Resources"]
  },
];

const categories = [...new Set(tools.map(tool => tool.category))];


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "More Tools",
  "description": "Professional more tools tool. Free online processing with high-quality results. No registration required, instant results.",
  "url": "https://30tools.com/more-tools",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  },
};

export default function MoreToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            More Developer & Utility Tools
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Explore our comprehensive ecosystem of specialized tools and platforms, each designed to solve specific challenges and boost your productivity.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ 9 Specialized Platforms</span>
            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ 800+ Total Tools</span>
            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Always Free</span>
            <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Regular Updates</span>
          </div>
        </div>

        {/* Browse by Category */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-card border rounded-lg hover:border-primary hover:shadow-md transition-all text-sm font-medium"
              >
                {category}
              </a>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              id={tool.category.toLowerCase().replace(/\s+/g, '-')}
            >
              <Card className="h-full border-2 hover:border-primary hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{tool.icon}</span>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                  
                  <div className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mb-3">
                    {tool.category}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Key Features:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {tool.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-secondary px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <span className="text-sm text-primary font-medium group-hover:underline">
                      Visit {tool.name} →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Why Choose Our Tools Section */}
        <div className="mb-12">
          <Card className="border-2">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Why Choose 30Tools Ecosystem?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-muted dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="font-semibold mb-2">Specialized Solutions</h3>
                  <p className="text-sm text-muted-foreground">
                    Each platform focuses on specific use cases, providing deep functionality
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-muted dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🔒</span>
                  </div>
                  <h3 className="font-semibold mb-2">Privacy First</h3>
                  <p className="text-sm text-muted-foreground">
                    Client-side processing ensures your data never leaves your device
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-muted dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="font-semibold mb-2">Lightning Fast</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimized performance with instant results and no waiting times
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-muted dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💯</span>
                  </div>
                  <h3 className="font-semibold mb-2">Always Free</h3>
                  <p className="text-sm text-muted-foreground">
                    No subscriptions, no hidden fees - completely free forever
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-primary/10 to-blue-500/10 border-2">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">800+</div>
                  <div className="text-sm text-muted-foreground">Total Tools</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">9</div>
                  <div className="text-sm text-muted-foreground">Platforms</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">2M+</div>
                  <div className="text-sm text-muted-foreground">Happy Users</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Productivity?</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join millions of users who trust 30Tools for their daily workflow. Start exploring our ecosystem of specialized tools today!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Back to Main Site
                </Link>
                <a
                  href="https://tools.30tools.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
                >
                  Explore 140+ Tools
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Wrench, Code, Hash, Lock, Database, Boxes, FileText, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Our Developer & Utility Tools Collection | 30tools Network",
  description: "Professional our tools with instant results. Free online tool for students, professionals, and businesses worldwide. Used by millions worldwide for reliable, fast results.",
  keywords: [
    "our tools",
    "our tools online",
    "free our tools",
    "our tools tool",
    "online our tools free",
    "professional our tools",
    "our tools online tool",
    "best our tools free",
    "our tools web app",
    "our tools utility",
    "online tool",
    "free utility",
    "web application"
  ].join(", "),
  openGraph: {
    title: "Developer & Utility Tools Collection - 30tools Network",
    description: "Complete collection of professional developer tools and online utilities. Free, fast, and privacy-focused tools for developers and IT professionals.",
    url: "https://30tools.com/our-tools",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/our-tools.jpg",
        width: 1200,
        height: 630,
        alt: "30tools Developer & Utility Tools Collection"
      },
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer & Utility Tools Collection - 30tools",
    description: "Professional developer tools and online utilities - all free and open source",
    images: ["/og-images/our-tools.jpg"]
  },
  alternates: {
    canonical: "https://30tools.com/our-tools"
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Developer & Utility Tools Collection",
  "description": "Complete collection of professional developer tools and online utilities by 30tools",
  "url": "https://30tools.com/our-tools",
  "publisher": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  },
};

const toolsCollection = [
  {
    name: "Coders - Developer Tools",
    url: "https://coders.30tools.com/",
    icon: Code,
    color: "blue",
    description: "Essential developer tools including JSON formatter, code beautifier, API tester, and complexity analyzer. Built for developers, by developers.",
    features: [
      "JSON Formatter & Validator",
      "Code Beautifier & Minifier",
      "API Testing Tools",
      "Complexity Analyzer",
      "Performance Metrics",
      "Security Analysis"
    ],
    stats: {
      tools: "30+",
      category: "Development"
    },
  },
  {
    name: "Online Tools",
    url: "https://online-tools.30tools.com/",
    icon: Wrench,
    color: "green",
    description: "Comprehensive online utilities for hashing (MD5, SHA256), encoding (Base64, Base32), encryption (AES, RSA), and format conversion.",
    features: [
      "Hash Generators (MD5, SHA, etc.)",
      "Base64/Base32 Encoding",
      "AES/RSA Encryption",
      "JSON/XML Formatters",
      "Case Converters",
      "QR Code Generator"
    ],
    stats: {
      tools: "50+",
      category: "Utilities"
    },
  },
  {
    name: "DevTools",
    url: "https://devtools.30tools.com/",
    icon: Hash,
    color: "purple",
    description: "Professional development tools featuring hash generators, cryptography utilities, JSON/XML formatters, and case converters.",
    features: [
      "CRC & MD Hash Tools",
      "SHA Family (SHA1, SHA2, SHA3)",
      "Keccak & BLAKE Hashing",
      "ECDSA & RSA Cryptography",
      "Format Validators",
      "Encoding/Decoding Tools"
    ],
    stats: {
      tools: "60+",
      category: "Development"
    },
  },
  {
    name: "IT-Tools",
    url: "https://it-tools.30tools.com/",
    icon: Boxes,
    color: "orange",
    description: "Handy IT tools collection with token generators, UUID/ULID generators, QR code creator, JWT parser, and 80+ more utilities.",
    features: [
      "Token & UUID Generators",
      "Password Strength Analyzer",
      "JWT Parser & Decoder",
      "Device Information",
      "Crontab Generator",
      "Docker Compose Converter"
    ],
    stats: {
      tools: "80+",
      category: "IT & DevOps"
    },
  },
  {
    name: "TeraBox Downloader",
    url: "https://terabox.beer/",
    icon: Database,
    color: "red",
    description: "Free TeraBox video downloader with inline player. Download and play TeraBox videos directly in your browser with our Telegram bot.",
    features: [
      "Direct Video Downloads",
      "Inline Video Player",
      "Telegram Bot Integration",
      "No File Size Limits",
      "Mobile-Friendly Design",
      "Free & Secure"
    ],
    stats: {
      tools: "1",
      category: "Media & Files"
    },
  },
];

const colorClasses = {
  blue: {
    border: "border-border hover:border-border",
    bg: "bg-muted/50 dark:bg-blue-950/20",
    text: "text-primary dark:text-primary",
    badge: "bg-muted text-primary dark:bg-primary/30 dark:text-blue-300"
  },
  green: {
    border: "border-border hover:border-border",
    bg: "bg-muted/50 dark:bg-green-950/20",
    text: "text-primary dark:text-primary",
    badge: "bg-muted text-primary dark:bg-primary/30 dark:text-green-300"
  },
  purple: {
    border: "border-border hover:border-border",
    bg: "bg-muted/50 dark:bg-purple-950/20",
    text: "text-primary dark:text-primary",
    badge: "bg-muted text-primary dark:bg-primary/30 dark:text-purple-300"
  },
  orange: {
    border: "border-border hover:border-border",
    bg: "bg-muted/50 dark:bg-orange-950/20",
    text: "text-primary dark:text-primary",
    badge: "bg-muted text-primary dark:bg-primary/30 dark:text-orange-300"
  },
  red: {
    border: "border-destructive/50 hover:border-border",
    bg: "bg-destructive/10 dark:bg-red-950/20",
    text: "text-destructive dark:text-destructive",
    badge: "bg-destructive/20 text-destructive dark:bg-primary/30 dark:text-red-300"
  },
};

export default function OurToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-primary/5 to-background border-b">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">30tools Network</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Developer & Utility Tools Collection
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Your complete toolkit for development, encryption, hashing, formatting, and more. 
                All tools are free, open-source, and privacy-focused. No registration required.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Badge variant="outline" className="px-4 py-2">
                  <FileText className="w-4 h-4 mr-2" />
                  200+ Tools Total
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Lock className="w-4 h-4 mr-2" />
                  100% Privacy First
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Zap className="w-4 h-4 mr-2" />
                  Lightning Fast
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Code className="w-4 h-4 mr-2" />
                  Open Source
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Collection */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Explore Our Tool Collections</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each platform is specialized for different use cases. Choose the one that fits your needs best.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {toolsCollection.map((tool, index) => {
                const Icon = tool.icon;
                const colors = colorClasses[tool.color];
                
                return (
                  <Card 
                    key={index}
                    className={`${colors.border} hover:shadow-xl transition-all duration-300 group`}
                  >
                    <CardHeader className={colors.bg}>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-lg ${colors.bg} border ${colors.border}`}>
                          <Icon className={`w-8 h-8 ${colors.text}`} />
                        </div>
                        <div className="flex gap-2">
                          <Badge className={colors.badge}>
                            {tool.stats.tools} Tools
                          </Badge>
                          <Badge variant="outline">
                            {tool.stats.category}
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                        {tool.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-6">
                        {tool.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                          Key Features
                        </h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {tool.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <span className={`mr-2 ${colors.text}`}>•</span>
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-lg font-medium transition-all ${colors.bg} ${colors.text} hover:shadow-lg group-hover:scale-105`}
                      >
                        Visit {tool.name}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="bg-muted/50 border-y">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose 30tools Network?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Privacy First</h3>
                  <p className="text-sm text-muted-foreground">
                    All tools run client-side when possible. We don't store your data or track your usage.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Lightning Fast</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimized for performance with instant results. No waiting, no loading screens.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Open Source</h3>
                  <p className="text-sm text-muted-foreground">
                    Built by developers, for developers. Contribute on GitHub and help us improve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Productivity?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of developers who trust 30tools for their daily workflow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Explore Main Tools
                </button>
              </Link>
              <a 
                href="https://github.com/SH20RAJ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 border border-input bg-background rounded-lg font-medium hover:bg-accent transition-colors inline-flex items-center gap-2"
              >
                <Code className="w-5 h-5" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

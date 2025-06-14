'use client';

import { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import toolsDirectory from '@/constants/tools-directory.json';
import {
  ImageIcon,
  VideoIcon,
  MusicIcon,
  FileTextIcon,
  FileIcon,
  ArrowRightIcon,
  ZapIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  SearchIcon,
  StarIcon,
  TrendingUpIcon,
  UsersIcon
} from "lucide-react";

const iconMap = {
  ImageIcon,
  VideoIcon,
  MusicIcon,
  FileTextIcon,
  FileIcon
};

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const toolCategories = Object.entries(toolsDirectory.categories).map(([key, category]) => ({
    ...category,
    icon: iconMap[category.icon] || ImageIcon,
    key
  }));

  // Get all tools for search
  const allTools = useMemo(() => {
    const tools = [];
    Object.values(toolsDirectory.categories).forEach(category => {
      if (category.tools) {
        tools.push(...category.tools.map(tool => ({
          ...tool,
          categoryName: category.name
        })));
      }
    });
    return tools;
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const features = [
    {
      icon: ZapIcon,
      title: "Blazing Fast",
      description: "Lightning-fast processing with optimized algorithms",
      stat: "< 1.5s",
      label: "Load Time"
    },
    {
      icon: ShieldCheckIcon,
      title: "Privacy First",
      description: "No data stored, all processing happens locally",
      stat: "100%",
      label: "Private"
    },
    {
      icon: SmartphoneIcon,
      title: "Mobile Friendly",
      description: "Works perfectly on all devices and screen sizes",
      stat: "98%",
      label: "Mobile Score"
    }
  ];

  const stats = [
    { icon: UsersIcon, value: "10K+", label: "Happy Users" },
    { icon: TrendingUpIcon, value: "99.9%", label: "Uptime" },
    { icon: ZapIcon, value: "30+", label: "Free Tools" },
    { icon: StarIcon, value: "4.9", label: "User Rating" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <ZapIcon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold">30tools</h1>
              <Badge variant="secondary" className="ml-2">Free</Badge>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/search" className="text-muted-foreground hover:text-foreground transition-colors">
                Browse Tools
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Free Online Tools for Everyone
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Compress images, merge PDFs, convert videos, and process files instantly.
              <strong className="text-foreground"> No sign-up required.</strong>
              <strong className="text-green-600"> 100% privacy guaranteed.</strong>
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <form onSubmit={handleSearch} className="relative">
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search for tools... (e.g., image compressor, pdf merger, video converter)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-24 h-14 text-lg bg-background/50 backdrop-blur border-2 focus:border-primary"
                />
                <Button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10"
                  disabled={!searchQuery.trim()}
                >
                  Search
                </Button>
              </form>

              {/* Quick Search Tags */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['image compressor', 'pdf merger', 'video converter', 'word counter'].map((tag) => (
                  <Button
                    key={tag}
                    variant="outline"
                    size="sm"
                    className="text-xs hover:bg-primary hover:text-primary-foreground"
                    onClick={() => {
                      setSearchQuery(tag);
                      router.push(`/search?q=${encodeURIComponent(tag)}`);
                    }}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-5 w-5 text-primary mr-2" />
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tool Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive collection of tools organized by type. Each category offers powerful utilities for your daily workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {toolCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.key} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      {category.name}
                      <Badge variant="secondary" className="ml-auto">
                        {category.tools?.length || 0} tools
                      </Badge>
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.tools && category.tools.length > 0 && (
                        <div className="space-y-2">
                          {category.tools.slice(0, 2).map((tool, idx) => (
                            <div key={idx} className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                              <span className="text-sm font-medium">{tool.name}</span>
                              <Link href={tool.url}>
                                <Button size="sm" variant="ghost">
                                  <ArrowRightIcon className="h-3 w-3" />
                                </Button>
                              </Link>
                            </div>
                          ))}
                          {category.tools.length > 2 && (
                            <p className="text-xs text-muted-foreground text-center">
                              +{category.tools.length - 2} more tools
                            </p>
                          )}
                        </div>
                      )}

                      {(!category.tools || category.tools.length === 0) && (
                        <div className="text-center py-4">
                          <p className="text-muted-foreground text-sm mb-2">Coming Soon</p>
                          <Badge variant="outline">In Development</Badge>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose 30tools?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built with modern technology and user privacy in mind. All tools work directly in your browser for maximum security and speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <span className="text-2xl font-bold text-primary">{feature.stat}</span>
                      <span className="text-sm text-muted-foreground">{feature.label}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Free Online Tools for Every Need</h2>
              <p className="text-lg text-muted-foreground">
                30tools.com offers a comprehensive suite of free online tools designed to help you process files quickly and securely.
                From image compression to PDF manipulation, our tools are built with privacy and performance in mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">🖼️ Image Processing Tools</h3>
                <p className="text-muted-foreground mb-4">
                  Compress JPEG, PNG, and WebP images without losing quality. Our advanced image compression algorithms
                  reduce file sizes by up to 80% while maintaining visual clarity. Perfect for web optimization,
                  email attachments, and storage management.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Batch image compression for multiple files</li>
                  <li>• Support for JPEG, PNG, WebP, GIF formats</li>
                  <li>• Adjustable quality settings for optimal results</li>
                  <li>• No file size limits or watermarks</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">📄 PDF Management Tools</h3>
                <p className="text-muted-foreground mb-4">
                  Merge multiple PDFs into one document, split large PDFs into smaller files, or compress PDFs to reduce file size.
                  Our PDF tools work entirely in your browser, ensuring your documents remain private and secure.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Merge unlimited PDF files instantly</li>
                  <li>• Split PDFs by page range or file size</li>
                  <li>• Password protection and removal tools</li>
                  <li>• Convert PDFs to images and vice versa</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Privacy-First File Processing</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Unlike other online tools that upload your files to servers, 30tools.com processes everything locally in your browser.
                This means your sensitive documents, images, and files never leave your device, providing ultimate privacy and security.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🔒</div>
                  <h4 className="font-semibold">100% Private</h4>
                  <p className="text-sm text-muted-foreground">Files never uploaded to servers</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <h4 className="font-semibold">Lightning Fast</h4>
                  <p className="text-sm text-muted-foreground">No upload/download delays</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💰</div>
                  <h4 className="font-semibold">Completely Free</h4>
                  <p className="text-sm text-muted-foreground">No subscriptions or hidden costs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                  <ZapIcon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">30tools</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Free online tools for image compression, PDF processing, and file conversion.
                Privacy-first, lightning-fast, and completely free.
              </p>
              <div className="flex space-x-4">
                <Badge variant="outline">Privacy First</Badge>
                <Badge variant="outline">Free Forever</Badge>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Popular Tools</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/image-compressor" className="text-muted-foreground hover:text-foreground transition-colors">Image Compressor</Link></li>
                <li><Link href="/search?q=pdf+merger" className="text-muted-foreground hover:text-foreground transition-colors">PDF Merger</Link></li>
                <li><Link href="/search?q=video+converter" className="text-muted-foreground hover:text-foreground transition-colors">Video Converter</Link></li>
                <li><Link href="/search?q=audio+converter" className="text-muted-foreground hover:text-foreground transition-colors">Audio Converter</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/search?category=image" className="text-muted-foreground hover:text-foreground transition-colors">Image Tools</Link></li>
                <li><Link href="/search?category=pdf" className="text-muted-foreground hover:text-foreground transition-colors">PDF Tools</Link></li>
                <li><Link href="/search?category=video" className="text-muted-foreground hover:text-foreground transition-colors">Video Tools</Link></li>
                <li><Link href="/search?category=text" className="text-muted-foreground hover:text-foreground transition-colors">Text Tools</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2025 30tools.com. All rights reserved.</p>
            <p>Built with ❤️ for privacy and performance.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import Link from "next/link";
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
  UsersIcon,
  TrendingUpIcon,
  StarIcon,
  SearchIcon,
  CheckCircleIcon,
  GlobeIcon,
  SmartphoneIcon
} from 'lucide-react';

// SEO metadata for homepage
export const metadata = {
  title: "30tools - Free Online Tools for Images, PDFs, Videos & More",
  description: "Professional online toolkit with 100+ free tools for image compression, PDF manipulation, video conversion, and text processing. No watermarks, no registration required.",
  keywords: "free online tools, image compressor, pdf merger, video converter, text tools, file converter, online toolkit, web utilities, photo editor, document tools",
  canonical: "https://30tools.com",
  alternates: {
    canonical: "https://30tools.com"
  },
  openGraph: {
    title: "30tools - Free Online Toolkit",
    description: "100+ professional online tools for images, PDFs, videos, audio, and text. Free, fast, and secure with no watermarks.",
    url: "https://30tools.com",
    siteName: "30tools",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "30tools - Free Online Toolkit"
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "30tools - Free Online Toolkit",
    description: "100+ professional online tools for images, PDFs, videos, audio, and text. Free, fast, and secure.",
    images: ["/og-image.jpg"],
    creator: '@30tools'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code'
  },
  other: {
    'application-name': '30tools',
    'apple-mobile-web-app-title': '30tools',
    'format-detection': 'telephone=no'
  }
};

export default function HomePage() {
  const iconMap = {
    ImageIcon,
    VideoIcon,
    MusicIcon,
    FileTextIcon,
    FileIcon
  };

  // Get all categories with enhanced SEO data
  const toolCategories = Object.entries(toolsDirectory.categories).map(([key, category]) => ({
    ...category,
    icon: iconMap[category.icon] || ImageIcon,
    key,
    completedCount: category.tools?.filter(t => t.completed).length || 0,
    totalCount: category.tools?.length || 0,
    popularTools: category.tools?.filter(t => t.popular).slice(0, 3) || []
  }));

  // Get featured tools (completed and popular)
  const featuredTools = [];
  Object.values(toolsDirectory.categories).forEach(category => {
    if (category.tools) {
      const completed = category.tools.filter(t => t.completed && t.popular);
      featuredTools.push(...completed);
    }
  });

  // Stats for the homepage
  const stats = [
    { icon: ZapIcon, value: "100+", label: "Free Tools", description: "Professional online utilities" },
    { icon: UsersIcon, value: "50K+", label: "Happy Users", description: "Trusted by professionals worldwide" },
    { icon: TrendingUpIcon, value: "99.9%", label: "Uptime", description: "Always available when you need it" },
    { icon: StarIcon, value: "4.9", label: "User Rating", description: "Excellent user satisfaction" }
  ];

  // Popular search terms for SEO
  const popularSearches = [
    { term: "image compressor", searches: "165K/month", intent: "high" },
    { term: "pdf merger", searches: "201K/month", intent: "high" },
    { term: "video converter", searches: "187K/month", intent: "high" },
    { term: "resize image", searches: "89K/month", intent: "medium" },
    { term: "compress video", searches: "156K/month", intent: "high" }
  ];

  // Benefits for users
  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: "Privacy First",
      description: "All processing happens in your browser. Your files never leave your device, ensuring complete privacy and security."
    },
    {
      icon: ZapIcon,
      title: "Lightning Fast",
      description: "Optimized algorithms provide instant results. No waiting, no server delays - just fast, efficient processing."
    },
    {
      icon: GlobeIcon,
      title: "Always Free",
      description: "No subscriptions, no hidden fees, no watermarks. All tools are completely free forever for everyone."
    },
    {
      icon: SmartphoneIcon,
      title: "Mobile Optimized",
      description: "Perfect experience on all devices. Desktop, tablet, or mobile - our tools work seamlessly everywhere."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "30tools - Free Online Toolkit",
            "url": "https://30tools.com",
            "description": "Professional online toolkit with 100+ free tools for image compression, PDF manipulation, video conversion, and text processing.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://30tools.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": "30tools",
              "url": "https://30tools.com",
              "logo": "https://30tools.com/icons/apple-touch-icon.png"
            }
          })
        }}
      />

      {/* Header with navigation */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <ZapIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">30tools</h1>
                <p className="text-sm text-muted-foreground">Free Online Toolkit</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/search" className="text-muted-foreground hover:text-foreground transition-colors">
                All Tools
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="/search">
                <Button size="sm">
                  <SearchIcon className="h-4 w-4 mr-2" />
                  Search Tools
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section with enhanced SEO content */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Free Online Tools for Everything
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Professional toolkit with 100+ free online tools for image compression, PDF manipulation, 
                video conversion, audio editing, and text processing. No watermarks, no registration, 
                no limits - just powerful tools that work instantly in your browser.
              </p>

              {/* Search bar for better UX and SEO */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search for tools... (e.g., image compressor, pdf merger)"
                    className="pl-12 pr-4 py-4 text-lg border-2 border-muted"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        const query = e.target.value;
                        if (query.trim()) {
                          window.location.href = `/search?q=${encodeURIComponent(query)}`;
                        }
                      }
                    }}
                  />
                </div>
              </div>

              {/* Popular searches for SEO */}
              <div className="mb-8">
                <p className="text-sm text-muted-foreground mb-3">Popular searches:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {popularSearches.map((search) => (
                    <Link key={search.term} href={`/search?q=${encodeURIComponent(search.term)}`}>
                      <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80 transition-colors">
                        {search.term}
                        <span className="ml-2 text-xs opacity-70">{search.searches}</span>
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/search">
                  <Button size="lg" className="min-w-[200px]">
                    Browse All Tools
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                {featuredTools.length > 0 && (
                  <Link href={featuredTools[0].routes[0]}>
                    <Button variant="outline" size="lg" className="min-w-[200px]">
                      Try {featuredTools[0].shortName || featuredTools[0].name}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm font-medium mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tools Section */}
        {featuredTools.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Featured Tools</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our most popular and powerful tools, ready to use instantly. 
                  No sign-up required, no watermarks added.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredTools.slice(0, 6).map((tool) => (
                  <Card key={tool.id} className="hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {tool.name}
                          </CardTitle>
                          <CardDescription className="mt-2">
                            {tool.description}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="ml-2 shrink-0">
                          <CheckCircleIcon className="h-3 w-3 mr-1" />
                          Ready
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-1">
                          {tool.features?.slice(0, 3).map((feature, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-muted-foreground">
                            {tool.monthlySearches ? `${Math.round(tool.monthlySearches/1000)}K+ searches/month` : 'Popular tool'}
                          </div>
                          <Link href={tool.routes[0]}>
                            <Button size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                              Use Tool
                              <ArrowRightIcon className="ml-1 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Tool Categories Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">All Tool Categories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive collection of online tools, organized by category 
                for easy discovery. From image editing to document processing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolCategories.map((category) => (
                <Card key={category.key} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <Link href={`/search?category=${category.key}`}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <category.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{category.name}</CardTitle>
                          <CardDescription>{category.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-1">
                          {category.popularTools.map((tool, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {tool.name}
                            </Badge>
                          ))}
                          {category.totalCount > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{category.totalCount - 3} more
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-muted-foreground">
                              {category.completedCount}/{category.totalCount} tools
                            </span>
                            {category.completedCount > 0 && (
                              <Badge variant="secondary" className="text-xs">
                                {category.completedCount} Ready
                              </Badge>
                            )}
                          </div>
                          <ArrowRightIcon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose 30tools?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Built with privacy, speed, and user experience in mind. 
                Professional-grade tools that respect your data and time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of professionals who trust 30tools for their daily file processing needs. 
                Start using our free tools today - no registration required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/search">
                  <Button size="lg">
                    Explore All Tools
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                {featuredTools.length > 0 && (
                  <Link href={featuredTools[0].routes[0]}>
                    <Button variant="outline" size="lg">
                      Start with {featuredTools[0].shortName || featuredTools[0].name}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer with SEO content */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                  <ZapIcon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold">30tools</h3>
                  <p className="text-sm text-muted-foreground">Free Online Toolkit</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional online tools for image compression, PDF manipulation, video conversion, 
                and text processing. Always free, always private, always fast.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Popular Tools</h4>
              <ul className="space-y-2 text-sm">
                {featuredTools.slice(0, 5).map((tool) => (
                  <li key={tool.id}>
                    <Link href={tool.routes[0]} className="text-muted-foreground hover:text-foreground transition-colors">
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                {toolCategories.slice(0, 5).map((category) => (
                  <li key={category.key}>
                    <Link href={`/search?category=${category.key}`} className="text-muted-foreground hover:text-foreground transition-colors">
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link href="/help" className="text-muted-foreground hover:text-foreground transition-colors">Help & FAQ</Link></li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2025 30tools.com - All rights reserved. Made with ❤️ for productivity.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span>Follow us:</span>
              <Link href="#" className="hover:text-foreground transition-colors">Twitter</Link>
              <Link href="#" className="hover:text-foreground transition-colors">GitHub</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

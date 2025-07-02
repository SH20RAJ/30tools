import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import toolsData from '@/constants/tools.json';
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
  PaletteIcon,
  PenToolIcon,
  CodeIcon,
  BracesIcon,
  TypeIcon,
  SettingsIcon,
  RefreshCwIcon
} from 'lucide-react';
import { UserButton } from "@stackframe/stack";

export default function LandingPage() {
  const iconMap = {
    ImageIcon,
    VideoIcon,
    MusicIcon,
    FileTextIcon,
    FileIcon,
    PaletteIcon,
    PenToolIcon,
    SearchIcon,
    CodeIcon,
    BracesIcon,
    TypeIcon,
    SettingsIcon,
    RefreshCwIcon
  };

  const toolCategories = Object.entries(toolsData.categories).map(([key, category]) => ({
    ...category,
    icon: iconMap[category.icon] || ImageIcon,
    key
  }));

  // Get premium tools from all categories
  const premiumTools = Object.values(toolsData.categories)
    .flatMap(category => category.tools || [])
    .filter(tool => tool.premium === true)
    .slice(0, 6); // Show first 6 premium tools

  // get session from stack
  const session = 1; // Replace with actual session retrieval logic

  const quickSearchTags = ["image compressor", "video converter", "pdf merger", "text counter"];

  const stats = [
    { icon: UsersIcon, value: "10K+", label: "Happy Users" },
    { icon: TrendingUpIcon, value: "99.9%", label: "Uptime" },
    { icon: ZapIcon, value: "75+", label: "Free Tools" },
    { icon: StarIcon, value: "4.9", label: "User Rating" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
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

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link href="/search">
                <Button variant="ghost">
                  <SearchIcon className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </Link>
              <Link href="/search?">
                <Button variant="ghost">
                  Other Tools
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline">About</Button>
              </Link>
              {session ? (
                <UserButton />
              ) : (
                <Link href="/handler/sign-in">
                  <Button variant="secondary">Sign In</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              {/* Main heading with animated gradient */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-gradient bg-gradient-to-r from-primary via-secondary to-primary bg-300% bg-clip-text text-transparent">
                Your Ultimate Online Toolkit
              </h1>

              {/* Subheading with better spacing */}
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Fast, free, and privacy-focused tools for all your file processing needs.
                No sign-up required, no watermarks added.
              </p>

              {/* Quick search tags with hover effects */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {quickSearchTags.map((tag) => (
                  <Link key={tag} href={`/search?q=${encodeURIComponent(tag)}`}>
                    <Badge
                      variant="secondary"
                      className="px-4 py-2 text-sm cursor-pointer transform transition-all hover:scale-105 hover:bg-secondary/90"
                    >
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>

              {/* CTA buttons with hover animations */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/search">
                  <Button
                    size="lg"
                    className="min-w-[200px] transform transition-all hover:scale-105 hover:shadow-lg"
                  >
                    Browse All Tools
                    <ArrowRightIcon className="ml-2 h-5 w-5 animate-bounce-x" />
                  </Button>
                </Link>
                <Link href="/image-compressor">
                  <Button
                    variant="outline"
                    size="lg"
                    className="min-w-[200px] transform transition-all hover:scale-105 hover:shadow-lg hover:bg-secondary/10"
                  >
                    Try Image Compressor
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Banner - Design Tools Directory */}
        <section className="py-12  border-2  relative overflow-hidden">
          <div className="absolute inset-0 " />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIyIi8+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iMTAiIHI9IjIiLz4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iMTAiIGN5PSI1MCIgcj0iMiIvPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIyIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=')] opacity-10" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  <Badge className="bg-white text-purple-700 border-0 hover:bg-white/90 font-semibold shadow-lg">
                    🎨 New Premium Resource
                  </Badge>
                  <Badge className="bg-amber-500 text-foreground border-0 font-semibold shadow-lg">
                    <StarIcon className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 drop-shadow-2xl [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]">
                  Professional Design Tools Directory
                </h2>

                <p className="text-foreground text-lg mb-6 max-w-2xl drop-shadow-xl [text-shadow:_1px_1px_2px_rgb(0_0_0_/_60%)]">
                  Discover 1600+ carefully curated design tools, resources, and inspiration.
                  From icons and illustrations to mockups and typography - everything designers need in one place.
                </p>

                <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                  <Badge variant="secondary" className="bg-white text-purple-700 border-0 font-medium shadow-md">
                    🎨 180+ Inspiration Tools
                  </Badge>
                  <Badge variant="secondary" className="bg-white text-purple-700 border-0 font-medium shadow-md">
                    ✨ 92+ Icon Libraries
                  </Badge>
                  <Badge variant="secondary" className="bg-white text-purple-700 border-0 font-medium shadow-md">
                    🖼️ 123+ Illustration Resources
                  </Badge>
                  <Badge variant="secondary" className="bg-white text-purple-700 border-0 font-medium shadow-md">
                    📚 110+ Learning Resources
                  </Badge>
                </div>
              </div>

              <div className="flex-shrink-0">
                <div className="text-center">
                  <a
                    href="https://design.30tools.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      size="lg"
                      className="bg-white text-purple-600 hover:bg-white/90 shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl min-w-[200px] font-semibold"
                    >
                      <PaletteIcon className="mr-2 h-5 w-5" />
                      Explore Design Directory
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Button>
                  </a>

                  <div className="flex items-center justify-center gap-4 mt-4 text-foreground text-sm drop-shadow-xl [text-shadow:_1px_1px_2px_rgb(0_0_0_/_60%)]">
                    <div className="flex items-center gap-1 font-bold">
                      <UsersIcon className="h-4 w-4" />
                      <span>1600+ Tools</span>
                    </div>
                    <div className="flex items-center gap-1 font-bold">
                      <RefreshCwIcon className="h-4 w-4" />
                      <span>Regularly Updated</span>
                    </div>
                    <div className="flex items-center gap-1 font-bold">
                      <StarIcon className="h-4 w-4 text-amber-300" />
                      <span>Curated</span>
                    </div>
                  </div>
                </div>
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
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Categories Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Tool Categories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose from our comprehensive collection of free online tools,
                organized by category for easy discovery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolCategories.map((category) => (
                <Link key={category.key} href={`/search?category=${category.key}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer group h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <category.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">{category.name}</CardTitle>
                          <CardDescription className="group-hover:text-foreground transition-colors">{category.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-1">
                          {category.tools?.slice(0, 4).map((tool, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {tool.name}
                            </Badge>
                          ))}
                          {category.tools?.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{category.tools.length - 4} more
                            </Badge>
                          )}
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            {category.tools?.length || 0} tools
                          </span>
                          <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                            View All
                            <ArrowRightIcon className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose 30tools?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Built with privacy, speed, and user experience in mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                    <ShieldCheckIcon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                <p className="text-muted-foreground">
                  All processing happens in your browser. Your files never leave your device.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                    <ZapIcon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Optimized for speed with instant processing and no server delays.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                    <StarIcon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Always Free</h3>
                <p className="text-muted-foreground">
                  No subscriptions, no hidden fees. All tools are completely free forever.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Tools Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full">
                  <StarIcon className="h-4 w-4 text-foreground" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Premium Tools
                </h2>
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full">
                  <StarIcon className="h-4 w-4 text-foreground" />
                </div>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional-grade tools with advanced features and capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumTools.map((tool) => (
                tool.external ? (
                  <a key={tool.id} href={tool.route} target="_blank" rel="noopener noreferrer">
                    <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group h-full border-2 hover:border-primary/20 bg-gradient-to-br from-white to-primary/5">
                      <CardHeader className="relative">
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-foreground border-0">
                            <StarIcon className="h-3 w-3 mr-1" />
                            Premium
                          </Badge>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors pr-20">
                          {tool.name}
                        </CardTitle>
                        <CardDescription className="group-hover:text-foreground transition-colors">
                          {tool.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <Badge variant="outline" className="capitalize">
                            {tool.category}
                          </Badge>
                          <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                            Visit Site
                            <ArrowRightIcon className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ) : (
                  <Link key={tool.id} href={tool.route}>
                    <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group h-full border-2 hover:border-primary/20 bg-gradient-to-br from-white to-primary/5">
                      <CardHeader className="relative">
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-foreground border-0">
                            <StarIcon className="h-3 w-3 mr-1" />
                            Premium
                          </Badge>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors pr-20">
                          {tool.name}
                        </CardTitle>
                        <CardDescription className="group-hover:text-foreground transition-colors">
                          {tool.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <Badge variant="outline" className="capitalize">
                            {tool.category}
                          </Badge>
                          <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                            Try Now
                            <ArrowRightIcon className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/search?premium=true">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                  View All Premium Tools
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of users who trust 30tools for their daily file processing needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/search">
                  <Button size="lg">
                    Explore All Tools
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/image-compressor">
                  <Button variant="outline" size="lg">
                    Start with Image Compressor
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
                Your ultimate destination for free online tools. Fast, secure, and always free.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Popular Tools</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/image-compressor" className="text-muted-foreground hover:text-foreground">Image Compressor</Link></li>
                <li><Link href="/search?q=video converter" className="text-muted-foreground hover:text-foreground">Video Converter</Link></li>
                <li><Link href="/search?q=pdf merger" className="text-muted-foreground hover:text-foreground">PDF Merger</Link></li>
                <li><Link href="/search?q=text counter" className="text-muted-foreground hover:text-foreground">Text Counter</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/search?category=image" className="text-muted-foreground hover:text-foreground">Image Tools</Link></li>
                <li><Link href="/search?category=video" className="text-muted-foreground hover:text-foreground">Video Tools</Link></li>
                <li><Link href="/search?category=audio" className="text-muted-foreground hover:text-foreground">Audio Tools</Link></li>
                <li><Link href="/search?category=pdf" className="text-muted-foreground hover:text-foreground">PDF Tools</Link></li>
                <li><Link href="/search?" className="text-muted-foreground hover:text-foreground">Other Tools</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
                <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 30tools.com - All rights reserved. Made with ❤️ for the web.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

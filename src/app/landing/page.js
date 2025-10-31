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
              <Link href="/more-tools">
                <Button variant="ghost" className="hidden sm:flex">
                  More Tools
                </Button>
              </Link>
              <Link href="/search?">
                <Button variant="ghost" className="hidden md:flex">
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
        {/* Enhanced Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-800/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            
            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full animate-bounce delay-300" />
            <div className="absolute top-40 right-20 w-6 h-6 bg-secondary/30 rounded-full animate-bounce delay-700" />
            <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent/30 rounded-full animate-bounce delay-1000" />
            <div className="absolute bottom-20 right-10 w-5 h-5 bg-primary/30 rounded-full animate-bounce delay-500" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge with animation */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-in">
                <ZapIcon className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">141+ Professional Tools</span>
                <Badge variant="secondary" className="text-xs">Free Forever</Badge>
              </div>

              {/* Main heading with enhanced animations */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
                <span className="block bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent animate-fade-in-up">
                  Your Ultimate
                </span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in-up delay-200 bg-300% animate-gradient">
                  Online Toolkit
                </span>
              </h1>

              {/* Enhanced subheading */}
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400">
                <span className="font-semibold text-foreground">Fast, free, and privacy-focused</span> tools for all your creative and professional needs.
                <br className="hidden md:block" />
                <span className="text-lg">No sign-up required – No watermarks – No limits</span>
              </p>

              {/* Feature highlights */}
              <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up delay-600">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-200 dark:border-green-800">
                  <ShieldCheckIcon className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">100% Private</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-200 dark:border-blue-800">
                  <ZapIcon className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Lightning Fast</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-full border border-purple-200 dark:border-purple-800">
                  <StarIcon className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Professional Quality</span>
                </div>
              </div>

              {/* Quick search tags with enhanced styling */}
              <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up delay-700">
                {quickSearchTags.map((tag, index) => (
                  <Link key={tag} href={`/search?q=${encodeURIComponent(tag)}`}>
                    <Badge
                      variant="outline"
                      className="px-4 py-2 text-sm cursor-pointer transform transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg animate-fade-in-up"
                      style={{ animationDelay: `${800 + index * 100}ms` }}
                    >
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>

              {/* Enhanced CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-1000">
                <Link href="/search">
                  <Button
                    size="lg"
                    className="min-w-[220px] h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 group"
                  >
                    <SearchIcon className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                    Explore All Tools
                    <ArrowRightIcon className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/image-compressor">
                  <Button
                    variant="outline"
                    size="lg"
                    className="min-w-[220px] h-14 text-lg font-semibold border-2 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-secondary/50 group"
                  >
                    <ImageIcon className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                    Try Image Tools
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in-up delay-1200">
                <div className="flex items-center gap-2">
                  <UsersIcon className="h-4 w-4" />
                  <span>Trusted by 2M+ users</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUpIcon className="h-4 w-4" />
                  <span>50M+ files processed</span>
                </div>
                <div className="flex items-center gap-2">
                  <StarIcon className="h-4 w-4 fill-current text-yellow-500" />
                  <span>4.9/5 user rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
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
                    <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group h-full border-2 hover:border-primary/20  ">
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

        {/* More Developer & Utility Tools Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Explore Our Specialized Platforms
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Beyond this platform, discover our comprehensive ecosystem of 9 specialized tools and platforms, each designed to solve specific challenges.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                <Badge variant="secondary">🚀 800+ Total Tools</Badge>
                <Badge variant="secondary">🌐 9 Platforms</Badge>
                <Badge variant="secondary">💯 Always Free</Badge>
                <Badge variant="secondary">⚡ Lightning Fast</Badge>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Coders */}
              <a href="https://coders.30tools.com/" target="_blank" rel="noopener noreferrer" className="block group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-4xl">🚀</span>
                      <Badge variant="outline">Developer Tools</Badge>
                    </div>
                    <CardTitle className="group-hover:text-blue-600 transition-colors">
                      Coders
                    </CardTitle>
                    <CardDescription>
                      Essential developer tools including JSON formatter, code beautifier, API tester, and complexity analyzer.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-primary font-medium group-hover:underline">
                      Explore Coders →
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* IT-Tools */}
              <a href="https://it-tools.30tools.com/" target="_blank" rel="noopener noreferrer" className="block group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-4xl">🛠️</span>
                      <Badge variant="outline">IT Tools</Badge>
                    </div>
                    <CardTitle className="group-hover:text-blue-600 transition-colors">
                      IT-Tools
                    </CardTitle>
                    <CardDescription>
                      Handy tools collection with 80+ utilities including token generators, UUID generators, QR codes, and JWT parser.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-primary font-medium group-hover:underline">
                      Explore IT-Tools →
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* AI Agents */}
              <a href="https://ai-agents.30tools.com/" target="_blank" rel="noopener noreferrer" className="block group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-4xl">🤖</span>
                      <Badge variant="outline">AI Tools</Badge>
                    </div>
                    <CardTitle className="group-hover:text-blue-600 transition-colors">
                      AI Agents Directory
                    </CardTitle>
                    <CardDescription>
                      Discover 557+ AI agents across 19 categories for coding, productivity, customer service, and more.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-primary font-medium group-hover:underline">
                      Explore AI Agents →
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>

            <div className="text-center">
              <Link href="/more-tools">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg">
                  <ZapIcon className="mr-2 h-5 w-5" />
                  View All 9 Platforms
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground mt-4">
                Explore TeraBox downloader, Online Tools, DevTools, Piano Notes, Converto and more!
              </p>
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
                <li><Link href="/more-tools" className="text-muted-foreground hover:text-foreground">More Platforms</Link></li>
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
          <a href="https://visitorbadge.io/status?path=https%3A%2F%2F30tools.com%2F"><img src="https://api.visitorbadge.io/api/combined?path=https%3A%2F%2F30tools.com%2F&countColor=%23263759&style=flat-square" /></a>
        </div>
      </footer>
    </div>
  );
}

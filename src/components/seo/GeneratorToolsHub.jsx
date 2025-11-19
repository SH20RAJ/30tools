"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sparkles,
  Wand2,
  Stars,
  Palette,
  MessageSquare,
  Lightbulb,
  Clock,
  Star,
  Users,
  TrendingUp,
  Zap,
  Heart,
  Download,
  Copy,
  Search,
  Rocket,
  Brain,
  Wand,
  CheckCircle2,
  ArrowRight,
  Instagram,
  Twitter,
} from "lucide-react";
import Link from "next/link";

// Generator tool icons mapping
const TOOL_ICONS = {
  "aesthetic-bio-generator": Instagram,
  "startup-name-generator": Rocket,
  "fake-chat-generator": MessageSquare,
  "excuse-generator": Lightbulb,
  "ai-image-generator": Palette,
  "ai-poetry-generator": Stars,
  "ai-voice-generator": Wand2,
  "chatgpt-persona-generator": Brain,
};

// Tool statistics (would come from analytics in real app)
const TOOL_STATS = {
  "aesthetic-bio-generator": { users: "125K", usage: "+45%", rating: 4.9 },
  "startup-name-generator": { users: "89K", usage: "+38%", rating: 4.8 },
  "fake-chat-generator": { users: "156K", usage: "+52%", rating: 4.9 },
  "excuse-generator": { users: "67K", usage: "+28%", rating: 4.7 },
  "ai-image-generator": { users: "234K", usage: "+67%", rating: 4.8 },
  "ai-poetry-generator": { users: "45K", usage: "+23%", rating: 4.6 },
  "ai-voice-generator": { users: "78K", usage: "+34%", rating: 4.7 },
};

export default function GeneratorToolsHub({
  tools = [],
  faqs = [],
  tutorials = [],
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Generators", icon: Sparkles },
    { id: "social", name: "Social Media", icon: Instagram },
    { id: "business", name: "Business", icon: Rocket },
    { id: "ai", name: "AI Powered", icon: Brain },
    { id: "creative", name: "Creative", icon: Palette },
  ];

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularTools = tools.filter((tool) => tool.popular).slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50/20 to-background dark:via-purple-950/10">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-background/30 dark:to-pink-900/30 text-primary dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            AI-Powered Content Generators
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-muted/20 bg-clip-text text-transparent">
            Free AI Generators
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Create viral content with AI-powered generators. Aesthetic bios,
            fake chats, startup names, AI images & more. Perfect for social
            media, content creation, and creative projects.
          </p>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { icon: Wand, title: "AI-Powered", desc: "Advanced algorithms" },
              {
                icon: Zap,
                title: "Instant Results",
                desc: "Generate in seconds",
              },
              { icon: Heart, title: "500K+ Users", desc: "Loved by creators" },
              {
                icon: CheckCircle2,
                title: "Always Free",
                desc: "No hidden costs",
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search generators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg border-border focus:border-border"
            />
          </div>
        </div>
      </section>

      {/* Popular Generators Showcase */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Most Popular Generators</h2>
            <p className="text-muted-foreground">
              The content creation tools everyone loves
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTools.map((tool, index) => {
              const Icon = TOOL_ICONS[tool.id] || Sparkles;
              const stats = TOOL_STATS[tool.id] || {
                users: "0",
                usage: "0%",
                rating: 4.0,
              };

              return (
                <Card
                  key={tool.id}
                  className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-border dark:hover:border-border"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-background/30 dark:to-pink-900/30 rounded-lg group-hover:scale-110 transition-transform">
                          <Icon className="h-5 w-5 text-primary dark:text-primary" />
                        </div>
                        <Badge
                          variant="secondary"
                          className="text-xs bg-muted text-primary dark:bg-primary/30 dark:text-purple-300"
                        >
                          #{index + 1} Popular
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-primary fill-current" />
                        <span className="text-sm font-medium">
                          {stats.rating}
                        </span>
                      </div>
                    </div>

                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {tool.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {tool.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{stats.users} users</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        <span>{stats.usage} this week</span>
                      </div>
                    </div>

                    <Button asChild className="w-full bgtbd" size="sm">
                      <Link href={tool.route}>
                        Create Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? "bg-background"
                      : "border-border hover:border-border"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </Button>
              );
            })}
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTools.map((tool) => {
              const Icon = TOOL_ICONS[tool.id] || Sparkles;
              const stats = TOOL_STATS[tool.id];

              return (
                <Card
                  key={tool.id}
                  className="group hover:shadow-lg transition-all duration-300 hover:border-border dark:hover:border-border"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-5 w-5 text-primary dark:text-primary" />
                      {tool.popular && (
                        <Badge
                          variant="secondary"
                          className="text-xs bg-background/30 dark:to-pink-900/30 dark:text-purple-300"
                        >
                          Popular
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {tool.description}
                    </p>

                    {stats && (
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span>{stats.users} users</span>
                        <span>{stats.rating} ⭐</span>
                      </div>
                    )}

                    <Button
                      asChild
                      className="w-full"
                      size="sm"
                      variant="outline"
                    >
                      <Link href={tool.route}>Try Generator</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <Sparkles className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No generators found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or category filter
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Generator Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our Generators
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              AI-powered content creation tools designed for creators,
              marketers, and anyone who wants to make amazing content quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI-Powered",
                description:
                  "Advanced machine learning creates high-quality, creative content tailored to your needs.",
                icon: "🤖",
              },
              {
                title: "Social Ready",
                description:
                  "Content optimized for Instagram, TikTok, Twitter, and other social media platforms.",
                icon: "📱",
              },
              {
                title: "Instant Results",
                description:
                  "Generate content in seconds, not hours. Perfect for when you need quick creative solutions.",
                icon: "⚡",
              },
              {
                title: "Viral Potential",
                description:
                  "Create content designed to engage audiences and increase your social media presence.",
                icon: "🚀",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-12 px-4 bg-gradient-to-r from-purple-600/5 to-pink-600/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">
            Loved by Content Creators Worldwide
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "500K+", label: "Content Creators", icon: Users },
              { value: "10M+", label: "Content Generated", icon: Sparkles },
              { value: "150+", label: "Countries", icon: TrendingUp },
              { value: "4.8/5", label: "User Rating", icon: Star },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

// Specialized component for generator features showcase
export function GeneratorToolFeatures({ tool, features = [] }) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          Key Features
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-muted/500 rounded-full mt-2" />
              <div>
                <h4 className="font-medium text-sm">
                  {feature.title || feature}
                </h4>
                {feature.description && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {feature.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Generator usage examples component
export function GeneratorToolExamples({ tool, examples = [] }) {
  const [activeExample, setActiveExample] = useState(0);

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-primary" />
          Usage Examples
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {examples.map((example, index) => (
              <Button
                key={index}
                variant={activeExample === index ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveExample(index)}
                className={activeExample === index ? "bg-background" : ""}
              >
                {example.title}
              </Button>
            ))}
          </div>

          {examples[activeExample] && (
            <div className="space-y-3">
              <h4 className="font-medium">{examples[activeExample].title}</h4>
              <p className="text-sm text-muted-foreground">
                {examples[activeExample].description}
              </p>

              {examples[activeExample].input && (
                <div>
                  <label className="text-xs font-medium text-muted-foreground">
                    Input:
                  </label>
                  <div className="mt-1 p-3 bg-muted rounded-lg font-mono text-sm">
                    {examples[activeExample].input}
                  </div>
                </div>
              )}

              {examples[activeExample].output && (
                <div>
                  <label className="text-xs font-medium text-muted-foreground">
                    Output:
                  </label>
                  <div className="mt-1 p-3 bg-background/20 dark:to-pink-950/20 rounded-lg text-sm">
                    {examples[activeExample].output}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

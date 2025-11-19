"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Code2,
  Terminal,
  Braces,
  Hash,
  Key,
  TestTube,
  Clock,
  Star,
  Users,
  TrendingUp,
  Zap,
  Shield,
  Download,
  Copy,
  Search,
  BookOpen,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

// Developer tool icons mapping
const TOOL_ICONS = {
  "json-formatter": Braces,
  "base64-tool": Key,
  "hash-generator": Hash,
  "regex-tester": TestTube,
  "api-tester": Terminal,
  "jwt-decoder": Shield,
  "url-encoder": ExternalLink,
  "code-formatter": Code2,
};

// Tool statistics (would come from analytics in real app)
const TOOL_STATS = {
  "json-formatter": { users: "45K", usage: "+23%", rating: 4.9 },
  "base64-tool": { users: "38K", usage: "+18%", rating: 4.8 },
  "hash-generator": { users: "32K", usage: "+15%", rating: 4.7 },
  "regex-tester": { users: "29K", usage: "+20%", rating: 4.8 },
  "api-tester": { users: "41K", usage: "+25%", rating: 4.9 },
  "jwt-decoder": { users: "35K", usage: "+22%", rating: 4.8 },
  "url-encoder": { users: "28K", usage: "+12%", rating: 4.6 },
};

export default function DeveloperToolsHub({
  tools = [],
  faqs = [],
  tutorials = [],
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Tools", icon: Code2 },
    { id: "formatter", name: "Formatters", icon: Braces },
    { id: "encoder", name: "Encoders", icon: Key },
    { id: "tester", name: "Testers", icon: TestTube },
    { id: "generator", name: "Generators", icon: Hash },
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
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Code2 className="h-4 w-4" />
            Professional Developer Tools
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
            Free Developer Tools
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Professional-grade developer utilities for JSON formatting, Base64
            encoding, hash generation, regex testing, and more. All tools run
            client-side for maximum security and privacy.
          </p>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {[
              {
                icon: Shield,
                title: "Privacy First",
                desc: "Client-side processing",
              },
              { icon: Zap, title: "Lightning Fast", desc: "Instant results" },
              {
                icon: Users,
                title: "100K+ Developers",
                desc: "Trusted worldwide",
              },
              {
                icon: CheckCircle2,
                title: "Always Free",
                desc: "No registration required",
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
              placeholder="Search developer tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Popular Tools Showcase */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Most Popular Developer Tools
            </h2>
            <p className="text-muted-foreground">
              The tools developers use most for daily coding tasks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTools.map((tool, index) => {
              const Icon = TOOL_ICONS[tool.id] || Code2;
              const stats = TOOL_STATS[tool.id] || {
                users: "0",
                usage: "0%",
                rating: 4.0,
              };

              return (
                <Card
                  key={tool.id}
                  className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
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

                    <Button asChild className="w-full" size="sm">
                      <Link href={tool.route}>
                        Use Tool
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
      <section className="py-8 px-4 bg-muted/30">
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
                  className="flex items-center gap-2"
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
              const Icon = TOOL_ICONS[tool.id] || Code2;
              const stats = TOOL_STATS[tool.id];

              return (
                <Card
                  key={tool.id}
                  className="group hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-5 w-5 text-primary" />
                      {tool.popular && (
                        <Badge variant="secondary" className="text-xs">
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
                      <Link href={tool.route}>Open Tool</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <Code2 className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No tools found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or category filter
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Developer Resources</h2>
            <p className="text-muted-foreground">
              Tutorials, guides, and best practices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Quick Start Guide */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Quick Start Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn how to use our developer tools effectively with
                  step-by-step tutorials.
                </p>
                <Button variant="outline" size="sm">
                  View Guide
                </Button>
              </CardContent>
            </Card>

            {/* Best Practices */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Security tips, performance optimization, and professional
                  development workflows.
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* API Documentation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-primary" />
                  API Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Integrate our tools into your workflow with our developer APIs
                  and webhooks.
                </p>
                <Button variant="outline" size="sm">
                  View Docs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-12 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">
            Trusted by Developers Worldwide
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "100K+", label: "Active Developers", icon: Users },
              { value: "2M+", label: "Tools Used Monthly", icon: Code2 },
              { value: "50+", label: "Countries", icon: TrendingUp },
              { value: "99.9%", label: "Uptime", icon: Clock },
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

// Specialized component for tool features showcase
export function DeveloperToolFeatures({ tool, features = [] }) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-primary" />
          Key Features
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
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

// Tool usage examples component
export function DeveloperToolExamples({ tool, examples = [] }) {
  const [activeExample, setActiveExample] = useState(0);

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code2 className="h-5 w-5 text-primary" />
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
                  <Textarea
                    value={examples[activeExample].input}
                    readOnly
                    className="mt-1 font-mono text-xs"
                    rows={3}
                  />
                </div>
              )}

              {examples[activeExample].output && (
                <div>
                  <label className="text-xs font-medium text-muted-foreground">
                    Output:
                  </label>
                  <Textarea
                    value={examples[activeExample].output}
                    readOnly
                    className="mt-1 font-mono text-xs"
                    rows={3}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

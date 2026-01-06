"use client";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Star,
  ArrowRight,
  Grid3X3,
  Filter,
  Zap,
  Wrench,
  Settings,
  Code,
  Palette,
  FileText,
  Layers,
} from "lucide-react";
import { useState, useMemo } from "react";

const categoryIcons = {
  converter: FileText,
  developer: Code,
  design: Palette,
  utilities: Settings,
  code: Code,
  other: Wrench,
};

export default function OtherToolsPage({ categories, otherTools }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get other categories (not main ones)
  const otherCategories = categories?.otherCategories || [];
  const allOtherTools = otherTools?.allOtherTools || [];

  // Filter tools based on search and category
  const filteredTools = useMemo(() => {
    let filtered = allOtherTools;

    if (searchTerm) {
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tool.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tool.keywords?.some((keyword) =>
            keyword.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (tool) => tool.categorySlug === selectedCategory,
      );
    }

    return filtered;
  }, [allOtherTools, searchTerm, selectedCategory]);

  // Group filtered tools by category
  const groupedFilteredTools = useMemo(() => {
    const grouped = {};
    filteredTools.forEach((tool) => {
      if (!grouped[tool.categorySlug]) {
        grouped[tool.categorySlug] = {
          categoryName: tool.categoryName,
          tools: [],
        };
      }
      grouped[tool.categorySlug].tools.push(tool);
    });
    return grouped;
  }, [filteredTools]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg">
              <Grid3X3 className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Discover Other Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Explore our comprehensive collection of specialized online tools and
            utilities beyond the main categories. From advanced converters to
            niche utilities, find the perfect tool for your specific
            professional needs. Discover hidden gems in our toolkit that can
            streamline your workflow and boost productivity.
          </p>

          {/* Search and Filter Section */}
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search for specialized tools, converters, utilities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg border-2 border-primary/20 focus:border-primary/50 rounded-xl"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
                className="rounded-full"
              >
                <Filter className="w-4 h-4 mr-1" />
                All Categories
              </Button>
              {otherCategories.map((category) => {
                const IconComponent = categoryIcons[category.slug] || Wrench;
                return (
                  <Button
                    key={category.slug}
                    variant={
                      selectedCategory === category.slug ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category.slug)}
                    className="rounded-full"
                  >
                    <IconComponent className="w-4 h-4 mr-1" />
                    {category.name}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center">
            <CardContent className="p-4">
              <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{allOtherTools.length}</div>
              <div className="text-sm text-muted-foreground">Other Tools</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <Layers className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold">{otherCategories.length}</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <Star className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">
                {allOtherTools.filter((tool) => tool.popular).length}
              </div>
              <div className="text-sm text-muted-foreground">Popular</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <Settings className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{filteredTools.length}</div>
              <div className="text-sm text-muted-foreground">Showing</div>
            </CardContent>
          </Card>
        </div>

        {/* Tools Grid */}
        {Object.keys(groupedFilteredTools).length > 0 ? (
          <div className="space-y-12">
            {Object.entries(groupedFilteredTools).map(
              ([categorySlug, categoryData]) => {
                const IconComponent = categoryIcons[categorySlug] || Wrench;
                return (
                  <div key={categorySlug}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">
                        {categoryData.categoryName}
                      </h2>
                      <Badge variant="secondary" className="ml-2">
                        {categoryData.tools.length} tools
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryData.tools.map((tool) => (
                        <Link key={tool.id} href={tool.route}>
                          <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer h-full border-2 hover:border-primary/20 bg-gradient-to-br from-card to-primary/5">
                            <CardHeader>
                              <div className="flex items-start justify-between">
                                <CardTitle className="text-lg group-hover:text-primary transition-colors flex items-center gap-2">
                                  <IconComponent className="w-5 h-5" />
                                  {tool.name}
                                </CardTitle>
                                {tool.popular && (
                                  <Badge className="bg-background">
                                    <Star className="h-3 w-3 mr-1" />
                                    Popular
                                  </Badge>
                                )}
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                {tool.description}
                              </p>

                              {tool.features && (
                                <div className="space-y-2 mb-4">
                                  <div className="text-xs font-medium text-muted-foreground">
                                    Key Features:
                                  </div>
                                  <div className="flex flex-wrap gap-1">
                                    {tool.features
                                      .slice(0, 3)
                                      .map((feature, index) => (
                                        <Badge
                                          key={index}
                                          variant="outline"
                                          className="text-xs"
                                        >
                                          {feature}
                                        </Badge>
                                      ))}
                                  </div>
                                </div>
                              )}

                              <div className="flex items-center justify-between mt-4">
                                <div className="text-xs text-muted-foreground">
                                  Free Tool
                                </div>
                                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              },
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="flex justify-center mb-4">
              <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-full">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">No tools found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search terms or category filter to find what
              you're looking for.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Need a Specific Tool?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our comprehensive toolkit
            includes hundreds of specialized utilities. Explore our main
            categories or suggest a new tool for our collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Search className="w-4 h-4 mr-2" />
                Browse All Tools
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Suggest a Tool
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

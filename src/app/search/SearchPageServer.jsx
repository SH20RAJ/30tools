'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SearchIcon, ArrowRightIcon, TrendingUpIcon, ZapIcon, FilterIcon } from 'lucide-react';
import Link from 'next/link';
import toolsData from '@/constants/tools.json';

export default function SearchPageServer({ initialTools, initialQuery, initialCategory, allTools }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [results, setResults] = useState(initialTools);
  const [loading, setLoading] = useState(false);

  // Get categories for filter
  const categories = useMemo(() => {
    const cats = Object.entries(toolsData.categories).map(([key, category]) => ({
      value: key,
      label: category.name,
      count: category.tools.length
    }));
    return [{ value: 'all', label: 'All Categories', count: allTools.length }, ...cats];
  }, [allTools.length]);

  // Popular search terms
  const popularSearches = [
    'image compressor',
    'video converter',
    'pdf merger',
    'password generator',
    'color picker',
    'qr code',
    'base64',
    'text counter'
  ];

  // Filter tools based on search
  const searchTools = (searchQuery, selectedCategory) => {
    setLoading(true);

    let filtered = allTools;

    if (searchQuery.trim()) {
      const searchTerm = searchQuery.toLowerCase();
      filtered = allTools.filter(tool =>
        tool.name.toLowerCase().includes(searchTerm) ||
        tool.description.toLowerCase().includes(searchTerm) ||
        tool.category.toLowerCase().includes(searchTerm)
      );
    }

    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(tool => tool.category === selectedCategory);
    }

    setResults(filtered);
    setLoading(false);

    // Update URL
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set('q', searchQuery);
    if (selectedCategory && selectedCategory !== 'all') params.set('category', selectedCategory);

    const queryString = params.toString();
    const newUrl = queryString ? `/search?${queryString}` : '/search';
    router.push(newUrl, { scroll: false });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchTools(query, category);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    searchTools(query, newCategory);
  };

  const handlePopularSearch = (term) => {
    setQuery(term);
    searchTools(term, category);
  };

  const formatToolName = (name) => {
    return name.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <ZapIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">30tools</h1>
                <p className="text-sm text-muted-foreground">Free Online Toolkit</p>
              </div>
            </Link>
            <div>
              <Link href="/about">
                <Button variant="outline">About</Button>
              </Link>
              <Link href="/handler/sign-in">
                <Button variant="secondary">Sign In</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Find the Perfect Tool
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Search through our collection of {allTools.length}+ free online tools.
              Everything you need for file processing and conversion.
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search tools... (e.g., image compressor, pdf merger)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>

            <Select value={category} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-full md:w-48 h-12">
                <FilterIcon className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label} ({cat.count})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button type="submit" size="lg" className="h-12 px-8">
              Search
            </Button>
          </form>

          {/* Popular Searches */}
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-sm text-muted-foreground mr-2">Popular:</span>
            {popularSearches.map((term) => (
              <Button
                key={term}
                variant="ghost"
                size="sm"
                onClick={() => handlePopularSearch(term)}
                className="h-8 text-xs"
              >
                {term}
              </Button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">
              {query || category !== 'all' ? (
                <>
                  {loading ? 'Searching...' : `${results.length} tools found`}
                  {query && <span className="text-muted-foreground ml-2">for "{query}"</span>}
                </>
              ) : (
                'All Tools'
              )}
            </h2>

            {results.length > 0 && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUpIcon className="h-4 w-4" />
                <span>{results.filter(tool => tool.popular).length} popular tools</span>
              </div>
            )}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-full"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-10 bg-muted rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((tool) => (
                <Link key={tool.id} href={tool.route} className="block">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer group h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">{formatToolName(tool.name)}</CardTitle>
                        {tool.popular && (
                          <Badge variant="secondary" className="ml-2">
                            <TrendingUpIcon className="h-3 w-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-sm group-hover:text-foreground transition-colors">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="capitalize">
                          {tool.category.replace('-', ' ')}
                        </Badge>
                        <div className="inline-flex items-center justify-center text-sm px-3 py-1 bg-transparent rounded-md group-hover:bg-primary/10 transition-colors">
                          Try it
                          <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <SearchIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No tools found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or browse all categories
              </p>
              <Button onClick={() => { setQuery(''); setCategory('all'); searchTools('', 'all'); }}>
                Show All Tools
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

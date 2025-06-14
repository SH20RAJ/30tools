'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { SearchIcon, FilterIcon, ArrowLeftIcon, StarIcon } from 'lucide-react';
import toolsDirectory from '@/constants/tools-directory.json';

export default function SearchPageComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const categories = useMemo(() => {
    return Object.entries(toolsDirectory.categories).map(([key, cat]) => ({
      id: key,
      name: cat.name
    }));
  }, []);

  const searchTools = async (searchQuery, selectedCategory) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (searchQuery) params.set('q', searchQuery);
      if (selectedCategory && selectedCategory !== 'all') params.set('category', selectedCategory);

      const response = await fetch(`/api/search?${params}`);
      const data = await response.json();

      setResults(data.results || []);
      setTotal(data.total || 0);
    } catch (error) {
      console.error('Search failed:', error);
      setResults([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initialQuery = searchParams.get('q') || '';
    const initialCategory = searchParams.get('category') || 'all';

    if (initialQuery || initialCategory !== 'all') {
      searchTools(initialQuery, initialCategory);
    }
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (category && category !== 'all') params.set('category', category);

    const searchUrl = params.toString() ? `/search?${params}` : '/search';
    router.push(searchUrl);

    searchTools(query, category);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);

    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (newCategory && newCategory !== 'all') params.set('category', newCategory);

    const searchUrl = params.toString() ? `/search?${params}` : '/search';
    router.push(searchUrl);

    searchTools(query, newCategory);
  };

  const popularSearches = [
    'image compressor',
    'video converter',
    'pdf merger',
    'text counter',
    'audio converter'
  ];

  const formatToolName = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="flex-1">
              <h1 className="text-2xl font-bold">Search Tools</h1>
              <p className="text-muted-foreground">
                Find the perfect tool for your needs
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Search Form */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for tools..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={category} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-full md:w-48">
                <FilterIcon className="h-4 w-4 mr-2" />
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button type="submit" disabled={loading}>
              {loading ? 'Searching...' : 'Search'}
            </Button>
          </form>
        </div>

        {/* Popular Searches */}
        {!query && category === 'all' && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Popular Searches</h2>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search) => (
                <Button
                  key={search}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setQuery(search);
                    searchTools(search, category);
                  }}
                >
                  {search}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {(query || category !== 'all') && (
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                Search Results {total > 0 && `(${total} found)`}
              </h2>
              {query && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setQuery('');
                    setCategory('all');
                    setResults([]);
                    setTotal(0);
                    router.push('/search');
                  }}
                >
                  Clear Search
                </Button>
              )}
            </div>

            {query && (
              <p className="text-muted-foreground mt-1">
                Showing results for "{query}"
                {category !== 'all' && ` in ${categories.find(c => c.id === category)?.name}`}
              </p>
            )}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-20" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Results */}
        {!loading && results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((tool) => (
              <Card key={tool.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {tool.description}
                      </p>
                    </div>
                    {tool.popular && (
                      <Badge variant="secondary" className="ml-2">
                        <StarIcon className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {tool.features?.slice(0, 3).map((feature, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {tool.routes?.map((route) => (
                        <Link key={route} href={route}>
                          <Button size="sm" className="text-xs">
                            Use Tool
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* No Results */}
        {!loading && (query || category !== 'all') && results.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <SearchIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No tools found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or browse all categories.
              </p>
              <div className="space-x-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setQuery('');
                    setCategory('all');
                    setResults([]);
                    setTotal(0);
                    router.push('/search');
                  }}
                >
                  Clear Search
                </Button>
                <Link href="/">
                  <Button>Browse All Tools</Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Category Suggestions */}
        {!query && category === 'all' && (
          <div className="mt-12">
            <h2 className="text-lg font-semibold mb-6">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <Card
                  key={cat.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{cat.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {toolsDirectory.categories[cat.id]?.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {toolsDirectory.categories[cat.id]?.tools?.slice(0, 4).map((tool, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tool.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Download, 
  TrendingUp, 
  TrendingDown, 
  Minus,
  Star,
  Globe,
  Shield,
  Monitor,
  HelpCircle,
  Smartphone,
  XCircle,
  Clock
} from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { performKeywordResearch } from '@/lib/keyword-research-actions';

export default function KeywordResearchTool({ searchEngine = 'bing' }) {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const [isResearching, setIsResearching] = useState(false);
  const [error, setError] = useState('');
  const [searchType, setSearchType] = useState('bing');

  const handleKeywordResearch = async () => {
    if (!keyword.trim()) {
      setError('Please enter a keyword');
      return;
    }

    setIsResearching(true);
    setError('');
    setResults([]);

    try {
      const researchResults = await performKeywordResearch(keyword, searchType);
      setResults(researchResults);
    } catch (err) {
      setError(err.message || 'An error occurred while researching keywords');
    } finally {
      setIsResearching(false);
    }
  };

  const exportResults = () => {
    if (results.length === 0) return;

    const csvContent = [
      ['Keyword', 'Tag', 'Search Volume', 'Difficulty', 'CPC', 'Competition', 'Trend'].join(','),
      ...results.map(r => [
        `"${r.keyword}"`,
        r.tag,
        r.searchVolume,
        r.difficulty,
        `$${r.cpc}`,
        r.competition,
        r.trend
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `keyword-research-${keyword.replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
 };

  const getTagBadge = (tag) => {
    const tagStyles = {
      'tools': 'bg-blue-100 text-blue-800',
      'questions': 'bg-green-100 text-green-800',
      'comparison': 'bg-purple-100 text-purple-800',
      'lists': 'bg-yellow-100 text-yellow-800',
      'videos': 'bg-red-100 text-red-800',
      'tutorials': 'bg-indigo-100 text-indigo-800',
      'reviews': 'bg-pink-100 text-pink-800',
      'alternatives': 'bg-orange-100 text-orange-800'
    };
    
    return <Badge className={tagStyles[tag] || 'bg-gray-100 text-gray-800'}>{tag}</Badge>;
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-primary" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-destructive" />;
      default: return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const stats = {
    total: results.length,
    tools: results.filter(r => r.tag === 'tools').length,
    questions: results.filter(r => r.tag === 'questions').length,
    comparisons: results.filter(r => r.tag === 'comparison').length
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
          <Globe className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground">
          {searchType === 'bing' ? 'Bing' : 'Google'} Keyword Research Tool
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Research {searchType === 'bing' ? 'Bing' : 'Google'} keywords and discover related terms with search volumes, difficulty scores, and competition data.
        </p>
      </div>

      {/* Input Form */}
      <Card>
        <CardHeader>
          <CardTitle>Research Keywords</CardTitle>
          <CardDescription>
            Enter a keyword to research related terms and phrases for {searchType === 'bing' ? 'Bing' : 'Google'}.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="keyword">Keyword</Label>
              <Input
                id="keyword"
                placeholder="Enter a keyword (e.g., facebook video downloader)"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                disabled={isResearching}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="searchType">Search Engine</Label>
              <Select value={searchType} onValueChange={setSearchType} disabled={isResearching}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bing">Bing</SelectItem>
                  <SelectItem value="google">Google</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <XCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleKeywordResearch} 
              disabled={isResearching}
              className="flex-1"
            >
              {isResearching ? (
                <>
                  <Clock className="mr-2 h-4 w-4 animate-spin" />
                  Researching Keywords...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Research Keywords
                </>
              )}
            </Button>
            
            {results.length > 0 && (
              <Button onClick={exportResults} variant="outline" className="w-full sm:w-auto">
                <Download className="mr-2 h-4 w-4" />
                Export CSV
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Results Stats */}
      {results.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.total}</div>
              <div className="text-sm text-muted-foreground">Total Keywords</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.tools}</div>
              <div className="text-sm text-muted-foreground">Tool Keywords</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{stats.questions}</div>
              <div className="text-sm text-muted-foreground">Question Keywords</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{stats.comparisons}</div>
              <div className="text-sm text-muted-foreground">Comparison Keywords</div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Results Table */}
      {results.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Keyword Research Results</CardTitle>
            <CardDescription>
              Keyword research results for "{keyword}" on {searchType === 'bing' ? 'Bing' : 'Google'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Keyword</th>
                    <th className="text-left p-3 font-medium">Tag</th>
                    <th className="text-left p-3 font-medium">Search Volume</th>
                    <th className="text-left p-3 font-medium">Difficulty</th>
                    <th className="text-left p-3 font-medium">CPC</th>
                    <th className="text-left p-3 font-medium">Competition</th>
                    <th className="text-left p-3 font-medium">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{result.keyword}</td>
                      <td className="p-3">{getTagBadge(result.tag)}</td>
                      <td className="p-3">{result.searchVolume.toLocaleString()}</td>
                      <td className="p-3">
                        <Badge variant={result.difficulty > 70 ? 'destructive' : result.difficulty > 40 ? 'secondary' : 'default'}>
                          {result.difficulty}%
                        </Badge>
                      </td>
                      <td className="p-3">${result.cpc}</td>
                      <td className="p-3">
                        <Badge variant={result.competition === 'High' ? 'destructive' : result.competition === 'Medium' ? 'secondary' : 'default'}>
                          {result.competition}
                        </Badge>
                      </td>
                      <td className="p-3">{getTrendIcon(result.trend)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* SEO Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Keyword Research Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h4 className="font-semibold mb-2">Keyword Strategy</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Target long-tail keywords with lower competition</li>
                <li>• Focus on keywords with high search volume and low difficulty</li>
                <li>• Use question-based keywords for featured snippets</li>
                <li>• Include comparison keywords for product reviews</li>
                <li>• Leverage tool-related keywords for utility websites</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Tag Categories</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <span className="font-medium">Tools:</span> Keywords related to utility websites</li>
                <li>• <span className="font-medium">Questions:</span> Keywords starting with who, what, when, where, why</li>
                <li>• <span className="font-medium">Comparison:</span> Keywords comparing products or services</li>
                <li>• <span className="font-medium">Lists:</span> Keywords for listicles and roundups</li>
                <li>• <span className="font-medium">Tutorials:</span> How-to and educational keywords</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advanced SEO Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Advanced Keyword Research Guide
          </CardTitle>
          <CardDescription>
            Master the art of keyword research for better search rankings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h4 className="font-semibold mb-3">Keyword Difficulty Analysis</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Low (0-30):</span>
                  <span className="text-green-600 font-medium">Easy to rank</span>
                </div>
                <div className="flex justify-between">
                  <span>Medium (31-60):</span>
                  <span className="text-yellow-600 font-medium">Moderate competition</span>
                </div>
                <div className="flex justify-between">
                  <span>High (61-100):</span>
                  <span className="text-red-600 font-medium">Very competitive</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Search Intent Types</h4>
              <ul className="text-sm space-y-1">
                <li><strong>Informational:</strong> How-to, what is, why</li>
                <li><strong>Navigational:</strong> Brand or website specific</li>
                <li><strong>Transactional:</strong> Buy, download, sign up</li>
                <li><strong>Commercial:</strong> Best, top, review</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Long-Tail Keywords Strategy</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Long-tail keywords are longer, more specific phrases that are easier to rank for and often have higher conversion rates.
            </p>
            <div className="bg-muted p-3 rounded-lg">
              <p className="text-sm font-medium mb-2">Examples:</p>
              <ul className="text-sm space-y-1">
                <li>• "best free keyword research tools 2024" (vs "keyword research")</li>
                <li>• "how to do keyword research for beginners" (vs "keyword research")</li>
                <li>• "free keyword research tool with search volume" (vs "keyword research")</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Keyword Research FAQs
          </CardTitle>
          <CardDescription>
            Everything you need to know about keyword research
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold">What is keyword research?</h4>
            <p className="text-sm text-muted-foreground">
              Keyword research is the process of discovering and analyzing search terms that people enter into search engines.
              It helps you understand what your target audience is searching for and how to optimize your content.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Why is keyword research important for SEO?</h4>
            <p className="text-sm text-muted-foreground">
              Keyword research helps you create content that matches what people are actually searching for. It guides your content strategy,
              helps you identify content gaps, and ensures you're targeting terms with the right balance of search volume and competition.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">What's the difference between Bing and Google keyword research?</h4>
            <p className="text-sm text-muted-foreground">
              While there are similarities, Bing and Google have different user bases and algorithms. Bing tends to favor more traditional SEO factors,
              while Google emphasizes user experience and quality content. Researching both can help you optimize for multiple search engines.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">How often should I do keyword research?</h4>
            <p className="text-sm text-muted-foreground">
              Keyword research should be done regularly. Search trends change, new keywords emerge, and competition evolves.
              We recommend doing comprehensive research quarterly and spot checks monthly for your main keywords.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">What makes a good keyword?</h4>
            <p className="text-sm text-muted-foreground">
              A good keyword has high search volume, low to medium competition, and matches your content's topic.
              It should also align with user intent - what people actually want when they search for that term.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">How do I use keyword research results?</h4>
            <p className="text-sm text-muted-foreground">
              Use the results to create content that targets high-value keywords, optimize existing pages,
              identify content gaps, and develop a comprehensive SEO strategy that drives organic traffic.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* User Reviews */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            What SEO Professionals Say
          </CardTitle>
          <CardDescription>
            Reviews from digital marketers and SEO experts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">Jennifer Martinez, SEO Consultant</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "This keyword research tool has transformed my workflow. The Bing integration is a game-changer for clients targeting that search engine.
                  The data quality is excellent and the interface is intuitive."
                </p>
                <p className="text-xs text-muted-foreground mt-2">November 14, 2024</p>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">Alex Thompson, Content Marketer</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Finally, a keyword tool that gives me both Google and Bing data! The keyword suggestions are spot-on and have helped me
                  discover untapped opportunities for my clients."
                </p>
                <p className="text-xs text-muted-foreground mt-2">November 11, 2024</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                  <span className="text-sm font-medium">Sarah Chen, Digital Strategist</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Great tool for comprehensive keyword research. The categorization feature helps me quickly identify question-based keywords
                  for featured snippets. Would love to see more export options."
                </p>
                <p className="text-xs text-muted-foreground mt-2">November 9, 2024</p>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">Marcus Rodriguez, SEO Agency Owner</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "This tool has become essential for my agency's workflow. The ability to research keywords for both search engines
                  gives us a competitive edge. Highly recommended for serious SEO professionals."
                </p>
                <p className="text-xs text-muted-foreground mt-2">November 7, 2024</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related SEO Tools */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Related SEO Tools
          </CardTitle>
          <CardDescription>
            Complete your SEO toolkit with these complementary tools
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium mb-1">Meta Tags Generator</h4>
              <p className="text-sm text-muted-foreground">Create optimized meta tags for better SERP appearance</p>
            </div>

            <div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium mb-1">Sitemap Generator</h4>
              <p className="text-sm text-muted-foreground">Generate XML sitemaps for search engines</p>
            </div>

            <div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium mb-1">SSL Checker</h4>
              <p className="text-sm text-muted-foreground">Verify SSL certificates and security</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SEO Content Section */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Mastering Keyword Research in 2024</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <h3>The Complete Guide to Keyword Research</h3>
            <p>
              Keyword research is the foundation of successful SEO strategy. By understanding what your target audience
              searches for, you can create content that answers their questions and solves their problems. Our advanced
              keyword research tool provides comprehensive data from both Google and Bing, giving you a complete picture
              of search behavior across multiple platforms.
            </p>

            <h3>Why Keyword Research Matters</h3>
            <p>
              Effective keyword research helps you:
            </p>
            <ul>
              <li>Discover high-value search terms with commercial intent</li>
              <li>Identify content gaps in your niche</li>
              <li>Understand user search behavior and intent</li>
              <li>Optimize existing content for better rankings</li>
              <li>Create content calendars based on search demand</li>
              <li>Track competitors' keyword strategies</li>
            </ul>

            <h3>Advanced Keyword Research Techniques</h3>
            <p>
              Beyond basic keyword research, successful SEO professionals use advanced techniques like:
            </p>
            <ul>
              <li><strong>Search Intent Analysis:</strong> Understanding why people search for specific terms</li>
              <li><strong>Competitor Keyword Analysis:</strong> Discovering what keywords competitors rank for</li>
              <li><strong>Seasonal Keyword Research:</strong> Identifying trending topics and seasonal opportunities</li>
              <li><strong>Long-tail Keyword Optimization:</strong> Targeting specific, conversational search queries</li>
              <li><strong>Voice Search Optimization:</strong> Preparing for natural language search queries</li>
            </ul>

            <h3>Keyword Research Best Practices</h3>
            <div className="bg-muted p-4 rounded-lg">
              <h4>Do's and Don'ts:</h4>
              <div className="grid md:grid-cols-2 gap-4 mt-3">
                <div>
                  <h5 className="font-semibold text-green-600">✓ Do's</h5>
                  <ul className="text-sm mt-2 space-y-1">
                    <li>• Focus on user intent over search volume</li>
                    <li>• Target long-tail keywords for easier ranking</li>
                    <li>• Research both head and tail keywords</li>
                    <li>• Analyze competitor keyword strategies</li>
                    <li>• Update keyword research regularly</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-red-600">✗ Don'ts</h5>
                  <ul className="text-sm mt-2 space-y-1">
                    <li>• Ignore keyword difficulty scores</li>
                    <li>• Target only high-volume keywords</li>
                    <li>• Forget about mobile search behavior</li>
                    <li>• Neglect voice search optimization</li>
                    <li>• Stop researching after initial setup</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3>Measuring Keyword Research Success</h3>
            <p>
              Track the success of your keyword research by monitoring:
            </p>
            <ul>
              <li><strong>Ranking Improvements:</strong> Track keyword positions in search results</li>
              <li><strong>Traffic Growth:</strong> Monitor organic search traffic increases</li>
              <li><strong>Conversion Rates:</strong> Measure if targeted keywords drive conversions</li>
              <li><strong>Content Performance:</strong> Analyze which keyword-targeted content performs best</li>
              <li><strong>ROI Metrics:</strong> Calculate return on investment for SEO efforts</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
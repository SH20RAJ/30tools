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
  Globe,
  Monitor,
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
    <div className="max-w-6xl mx-auto p-6 space-y-8">
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
          <div className="grid md:grid-cols-2 gap-4">
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

          <div className="flex gap-4">
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
              <Button onClick={exportResults} variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export CSV
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Results Stats */}
      {results.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
          <div className="grid md:grid-cols-2 gap-6">
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
    </div>
  );
}
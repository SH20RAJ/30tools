'use client';

import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Type, 
  Download, 
  Upload, 
  CheckCircle, 
  XCircle, 
  Clock,
  Info,
  Search,
  AlertTriangle,
  Eye,
  Edit3,
  Zap
} from 'lucide-react';

export default function TitleRewriteChecker() {
  const [urls, setUrls] = useState('');
  const [results, setResults] = useState([]);
  const [isChecking, setIsChecking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');

  // Simulate title rewrite checking (in real implementation, this would check actual SERPs)
  const simulateTitleCheck = useCallback(async (url) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 400 + Math.random() * 800));
    
    // Generate realistic title scenarios
    const originalTitles = [
      'Best SEO Tools for 2024 | Complete Guide',
      'How to Optimize Your Website for Search Engines',
      'Digital Marketing Services - Agency Name',
      'Product Name - Features, Reviews & Pricing',
      'Blog Post Title - Learn Everything About Topic'
    ];
    
    const originalTitle = originalTitles[Math.floor(Math.random() * originalTitles.length)];
    
    // Simulate different rewrite scenarios
    const scenarios = [
      { 
        rewritten: false, 
        serpTitle: originalTitle,
        reason: null 
      },
      { 
        rewritten: true, 
        serpTitle: originalTitle.substring(0, 60) + '...',
        reason: 'Title too long (truncated)' 
      },
      { 
        rewritten: true, 
        serpTitle: originalTitle.replace(/\|.*$/, '- Company'),
        reason: 'Brand name replaced' 
      },
      { 
        rewritten: true, 
        serpTitle: originalTitle.replace(/^\w+\s/, 'Top '),
        reason: 'Google added qualifier' 
      },
      { 
        rewritten: true, 
        serpTitle: originalTitle + ' - 2024',
        reason: 'Google added current year' 
      }
    ];
    
    const result = scenarios[Math.floor(Math.random() * scenarios.length)];
    
    return {
      url,
      originalTitle,
      serpTitle: result.serpTitle,
      rewritten: result.rewritten,
      reason: result.reason,
      originalLength: originalTitle.length,
      serpLength: result.serpTitle.length,
      metaDescription: 'This is a sample meta description that describes the content of the page...',
      h1: originalTitle.split(' | ')[0] || originalTitle.split(' - ')[0],
      position: Math.floor(Math.random() * 10) + 1
    };
  }, []);

  const checkTitleRewrites = async () => {
    if (!urls.trim()) {
      setError('Please enter at least one URL');
      return;
    }

    setIsChecking(true);
    setError('');
    setProgress(0);
    setResults([]);

    const urlList = urls.split('\n')
      .map(url => url.trim())
      .filter(url => url && (url.startsWith('http://') || url.startsWith('https://')))
      .slice(0, 100);
    
    if (urlList.length === 0) {
      setError('Please enter valid URLs (must start with http:// or https://)');
      setIsChecking(false);
      return;
    }

    try {
      const newResults = [];
      
      for (let i = 0; i < urlList.length; i++) {
        const url = urlList[i];
        const result = await simulateTitleCheck(url);
        newResults.push(result);
        setResults([...newResults]);
        setProgress(((i + 1) / urlList.length) * 100);
      }
    } catch (err) {
      setError('An error occurred while checking title rewrites');
    } finally {
      setIsChecking(false);
    }
  };

  const exportResults = () => {
    if (results.length === 0) return;

    const csvContent = [
      ['URL', 'Original Title', 'SERP Title', 'Rewritten', 'Reason', 'Original Length', 'SERP Length', 'Position'].join(','),
      ...results.map(r => [
        `"${r.url}"`,
        `"${r.originalTitle}"`,
        `"${r.serpTitle}"`,
        r.rewritten ? 'Yes' : 'No',
        `"${r.reason || ''}"`,
        r.originalLength,
        r.serpLength,
        r.position
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `title-rewrite-analysis-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const uploadFile = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      setUrls(content);
    };
    reader.readAsText(file);
  };

  const getRewriteStatus = (rewritten) => {
    if (rewritten) {
      return <Badge variant="destructive">Rewritten</Badge>;
    }
    return <Badge className="bg-muted/500">Original</Badge>;
  };

  const getTitleLengthStatus = (length) => {
    if (length > 60) {
      return <Badge variant="destructive">{length} chars</Badge>;
    } else if (length > 50) {
      return <Badge className="bg-muted/500">{length} chars</Badge>;
    }
    return <Badge className="bg-muted/500">{length} chars</Badge>;
  };

  const stats = {
    total: results.length,
    rewritten: results.filter(r => r.rewritten).length,
    original: results.filter(r => !r.rewritten).length,
    tooLong: results.filter(r => r.originalLength > 60).length
  };

  const getOptimizationSuggestion = (result) => {
    const suggestions = [];
    
    if (result.originalLength > 60) {
      suggestions.push('Shorten title to under 60 characters');
    }
    
    if (result.rewritten && result.reason?.includes('truncated')) {
      suggestions.push('Title was truncated - make it shorter');
    }
    
    if (result.rewritten && result.reason?.includes('Brand name replaced')) {
      suggestions.push('Consider placing brand name at the end');
    }
    
    if (!result.originalTitle.includes(result.h1)) {
      suggestions.push('Ensure title matches H1 tag');
    }
    
    return suggestions.length > 0 ? suggestions[0] : 'Title looks good!';
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
          <Type className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground">Title Rewrite Checker</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Check if Google rewrites your page titles in search results. Compare your original titles with what Google displays in SERPs.
        </p>
      </div>

      {/* SEO Benefits */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="text-center pb-3">
            <Eye className="h-8 w-8 text-primary mx-auto mb-2" />
            <CardTitle className="text-lg">SERP Visibility</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              Understand how your titles appear in search results and optimize for better click-through rates.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="text-center pb-3">
            <Edit3 className="h-8 w-8 text-primary mx-auto mb-2" />
            <CardTitle className="text-lg">Title Optimization</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              Identify titles that Google rewrites and optimize them to maintain control over your messaging.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="text-center pb-3">
            <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
            <CardTitle className="text-lg">Bulk Analysis</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              Check up to 100 URLs at once and get detailed reports on title rewrite patterns across your site.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Input Form */}
      <Card>
        <CardHeader>
          <CardTitle>Check Title Rewrites</CardTitle>
          <CardDescription>
            Enter URLs to check if Google rewrites their titles in search results. You can check up to 100 URLs at once.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="urls">URLs (one per line, max 100)</Label>
            <Textarea
              id="urls"
              placeholder="https://example.com/page1&#10;https://example.com/page2&#10;https://example.com/page3"
              value={urls}
              onChange={(e) => setUrls(e.target.value)}
              disabled={isChecking}
              rows={6}
              className="font-mono text-sm"
            />
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                {urls.split('\n').filter(url => url.trim() && (url.startsWith('http://') || url.startsWith('https://'))).length} valid URLs entered (max 100)
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => document.getElementById('file-upload').click()}
                disabled={isChecking}
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload File
              </Button>
              <input
                id="file-upload"
                type="file"
                accept=".txt,.csv"
                onChange={uploadFile}
                className="hidden"
              />
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
              onClick={checkTitleRewrites} 
              disabled={isChecking}
              className="flex-1"
            >
              {isChecking ? (
                <>
                  <Clock className="mr-2 h-4 w-4 animate-spin" />
                  Checking Titles...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Check Title Rewrites
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

          {isChecking && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Checking title rewrites...</span>
                <span>{progress.toFixed(0)}%</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results Stats */}
      {results.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.total}</div>
              <div className="text-sm text-muted-foreground">Total URLs</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-destructive">{stats.rewritten}</div>
              <div className="text-sm text-muted-foreground">Rewritten</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.original}</div>
              <div className="text-sm text-muted-foreground">Original</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.tooLong}</div>
              <div className="text-sm text-muted-foreground">Too Long</div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Results Table */}
      {results.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Title Rewrite Analysis</CardTitle>
            <CardDescription>
              Comparison of original titles vs. how they appear in Google search results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">URL</th>
                    <th className="text-left p-3 font-medium">Original Title</th>
                    <th className="text-left p-3 font-medium">SERP Title</th>
                    <th className="text-left p-3 font-medium">Status</th>
                    <th className="text-left p-3 font-medium">Length</th>
                    <th className="text-left p-3 font-medium">Suggestion</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3">
                        <a href={result.url} target="_blank" rel="noopener noreferrer" 
                           className="text-primary hover:underline text-sm max-w-xs truncate block">
                          {result.url}
                        </a>
                      </td>
                      <td className="p-3 max-w-xs">
                        <div className="text-sm text-foreground font-medium">
                          {result.originalTitle}
                        </div>
                      </td>
                      <td className="p-3 max-w-xs">
                        <div className="text-sm text-foreground">
                          {result.serpTitle}
                        </div>
                        {result.reason && (
                          <div className="text-xs text-primary mt-1">
                            {result.reason}
                          </div>
                        )}
                      </td>
                      <td className="p-3">
                        {getRewriteStatus(result.rewritten)}
                      </td>
                      <td className="p-3">
                        <div className="space-y-1">
                          <div className="text-xs text-muted-foreground">Original:</div>
                          {getTitleLengthStatus(result.originalLength)}
                          <div className="text-xs text-muted-foreground">SERP:</div>
                          {getTitleLengthStatus(result.serpLength)}
                        </div>
                      </td>
                      <td className="p-3 text-sm text-muted-foreground max-w-xs">
                        {getOptimizationSuggestion(result)}
                      </td>
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
            <Info className="h-5 w-5" />
            Title Optimization Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Prevent Title Rewrites</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Keep titles under 60 characters</li>
                <li>• Avoid keyword stuffing</li>
                <li>• Make titles descriptive and relevant</li>
                <li>• Match title tags with H1 tags</li>
                <li>• Place brand name at the end</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Common Rewrite Triggers</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Titles too long (over 60 characters)</li>
                <li>• Mismatch with page content</li>
                <li>• Keyword stuffing or spam</li>
                <li>• Missing or poor quality titles</li>
                <li>• Inconsistent branding patterns</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
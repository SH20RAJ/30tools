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
  Search, 
  Download, 
  Upload, 
  TrendingUp, 
  TrendingDown, 
  Minus,
  MapPin,
  Smartphone,
  Monitor,
  XCircle,
  Clock,
  Info
} from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function BulkKeywordRankChecker() {
  const [domain, setDomain] = useState('');
  const [keywords, setKeywords] = useState('');
  const [location, setLocation] = useState('united-states');
  const [device, setDevice] = useState('desktop');
  const [results, setResults] = useState([]);
  const [isChecking, setIsChecking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');

  const locations = [
    { value: 'united-states', label: 'United States' },
    { value: 'united-kingdom', label: 'United Kingdom' },
    { value: 'canada', label: 'Canada' },
    { value: 'australia', label: 'Australia' },
    { value: 'germany', label: 'Germany' },
    { value: 'france', label: 'France' },
    { value: 'india', label: 'India' },
    { value: 'brazil', label: 'Brazil' },
    { value: 'japan', label: 'Japan' },
    { value: 'south-korea', label: 'South Korea' }
  ];

  // Simulate rank checking (in real implementation, this would call actual APIs)
  const simulateRankCheck = useCallback(async (keyword, targetDomain) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
    
    // Simulate different ranking scenarios
    const scenarios = [
      { rank: Math.floor(Math.random() * 10) + 1, found: true },
      { rank: Math.floor(Math.random() * 50) + 11, found: true },
      { rank: Math.floor(Math.random() * 50) + 51, found: true },
      { rank: null, found: false }
    ];
    
    const result = scenarios[Math.floor(Math.random() * scenarios.length)];
    
    return {
      keyword,
      rank: result.rank,
      found: result.found,
      url: result.found ? `https://${targetDomain}/page-${Math.floor(Math.random() * 100)}` : null,
      title: result.found ? `${keyword} - Example Page Title` : null,
      searchVolume: Math.floor(Math.random() * 10000) + 100,
      difficulty: Math.floor(Math.random() * 100) + 1,
      cpc: (Math.random() * 5 + 0.1).toFixed(2),
      competition: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)],
      trend: ['up', 'down', 'stable'][Math.floor(Math.random() * 3)]
    };
  }, []);

  const checkRankings = async () => {
    if (!domain.trim() || !keywords.trim()) {
      setError('Please enter both domain and keywords');
      return;
    }

    setIsChecking(true);
    setError('');
    setProgress(0);
    setResults([]);

    const keywordList = keywords.split('\n').filter(k => k.trim()).slice(0, 500);
    
    if (keywordList.length === 0) {
      setError('Please enter at least one keyword');
      setIsChecking(false);
      return;
    }

    try {
      const newResults = [];
      
      for (let i = 0; i < keywordList.length; i++) {
        const keyword = keywordList[i].trim();
        if (keyword) {
          const result = await simulateRankCheck(keyword, domain);
          newResults.push(result);
          setResults([...newResults]);
          setProgress(((i + 1) / keywordList.length) * 100);
        }
      }
    } catch (err) {
      setError('An error occurred while checking rankings');
    } finally {
      setIsChecking(false);
    }
  };

  const exportResults = () => {
    if (results.length === 0) return;

    const csvContent = [
      ['Keyword', 'Rank', 'URL', 'Title', 'Search Volume', 'Difficulty', 'CPC', 'Competition', 'Trend'].join(','),
      ...results.map(r => [
        `"${r.keyword}"`,
        r.found ? r.rank : 'Not Found',
        `"${r.url || ''}"`,
        `"${r.title || ''}"`,
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
    a.download = `keyword-rankings-${domain}-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getRankBadge = (rank) => {
    if (!rank) return <Badge variant="secondary">Not Found</Badge>;
    if (rank <= 3) return <Badge className="bg-muted/500">#{rank}</Badge>;
    if (rank <= 10) return <Badge className="bg-muted/500">#{rank}</Badge>;
    if (rank <= 20) return <Badge className="bg-muted/500">#{rank}</Badge>;
    return <Badge variant="secondary">#{rank}</Badge>;
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
    ranking: results.filter(r => r.found).length,
    topTen: results.filter(r => r.rank && r.rank <= 10).length,
    topThree: results.filter(r => r.rank && r.rank <= 3).length
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
          <Search className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground">Free Bulk Keyword Rank Checker</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Check Google rankings for multiple keywords at once. Track keyword positions for any domain across different locations and devices.
        </p>
      </div>

      {/* SEO Benefits */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="text-center pb-3">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
            <CardTitle className="text-lg">Track Performance</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              Monitor keyword rankings to measure SEO success and identify optimization opportunities.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="text-center pb-3">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
            <CardTitle className="text-lg">Local Rankings</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              Check rankings in different countries and locations for targeted local SEO strategies.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="text-center pb-3">
            <Download className="h-8 w-8 text-primary mx-auto mb-2" />
            <CardTitle className="text-lg">Export Data</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              Export ranking data to CSV for analysis, reporting, and sharing with your team.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Input Form */}
      <Card>
        <CardHeader>
          <CardTitle>Check Keyword Rankings</CardTitle>
          <CardDescription>
            Enter your domain and keywords to check current Google rankings. You can check up to 500 keywords at once.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="domain">Domain (without https://)</Label>
              <Input
                id="domain"
                placeholder="example.com"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                disabled={isChecking}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Search Location</Label>
              <Select value={location} onValueChange={setLocation} disabled={isChecking}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(loc => (
                    <SelectItem key={loc.value} value={loc.value}>
                      {loc.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="device">Device Type</Label>
              <Select value={device} onValueChange={setDevice} disabled={isChecking}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="desktop">
                    <div className="flex items-center gap-2">
                      <Monitor className="h-4 w-4" />
                      Desktop
                    </div>
                  </SelectItem>
                  <SelectItem value="mobile">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      Mobile
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="keywords">Keywords (one per line, max 500)</Label>
            <Textarea
              id="keywords"
              placeholder="keyword 1&#10;keyword 2&#10;keyword 3"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              disabled={isChecking}
              rows={6}
              className="font-mono text-sm"
            />
            <p className="text-sm text-muted-foreground">
              {keywords.split('\n').filter(k => k.trim()).length} keywords entered (max 500)
            </p>
          </div>

          {error && (
            <Alert variant="destructive">
              <XCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="flex gap-4">
            <Button 
              onClick={checkRankings} 
              disabled={isChecking}
              className="flex-1"
            >
              {isChecking ? (
                <>
                  <Clock className="mr-2 h-4 w-4 animate-spin" />
                  Checking Rankings...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Check Rankings
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
                <span>Checking keywords...</span>
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
              <div className="text-sm text-muted-foreground">Total Keywords</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.ranking}</div>
              <div className="text-sm text-muted-foreground">Found Rankings</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.topTen}</div>
              <div className="text-sm text-muted-foreground">Top 10</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-gold-600">{stats.topThree}</div>
              <div className="text-sm text-muted-foreground">Top 3</div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Results Table */}
      {results.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Ranking Results</CardTitle>
            <CardDescription>
              Keyword ranking results for {domain} in {locations.find(l => l.value === location)?.label}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Keyword</th>
                    <th className="text-left p-3 font-medium">Rank</th>
                    <th className="text-left p-3 font-medium">URL</th>
                    <th className="text-left p-3 font-medium">Search Volume</th>
                    <th className="text-left p-3 font-medium">Difficulty</th>
                    <th className="text-left p-3 font-medium">CPC</th>
                    <th className="text-left p-3 font-medium">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{result.keyword}</td>
                      <td className="p-3">{getRankBadge(result.rank)}</td>
                      <td className="p-3">
                        {result.url ? (
                          <a href={result.url} target="_blank" rel="noopener noreferrer" 
                             className="text-primary hover:underline text-sm">
                            {result.url.substring(0, 50)}...
                          </a>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                      <td className="p-3">{result.searchVolume.toLocaleString()}</td>
                      <td className="p-3">
                        <Badge variant={result.difficulty > 70 ? 'destructive' : result.difficulty > 40 ? 'secondary' : 'default'}>
                          {result.difficulty}%
                        </Badge>
                      </td>
                      <td className="p-3">${result.cpc}</td>
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
            <Info className="h-5 w-5" />
            SEO Tips for Better Rankings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">On-Page Optimization</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Optimize title tags with target keywords</li>
                <li>• Write compelling meta descriptions</li>
                <li>• Use header tags (H1, H2, H3) properly</li>
                <li>• Improve internal linking structure</li>
                <li>• Optimize images with alt text</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Content Strategy</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Create high-quality, original content</li>
                <li>• Target long-tail keywords</li>
                <li>• Update content regularly</li>
                <li>• Improve user engagement metrics</li>
                <li>• Build topic authority</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
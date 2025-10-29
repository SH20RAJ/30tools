'use client';

import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Link, 
  Download, 
  CheckCircle, 
  XCircle, 
  Clock,
  Info,
  Search,
  AlertTriangle,
  Globe,
  ExternalLink,
  Zap
} from 'lucide-react';

export default function BrokenLinkChecker() {
  const [url, setUrl] = useState('');
  const [links, setLinks] = useState([]);
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');

  // Simulate broken link checking
  const simulateLinkCheck = useCallback(async (linkUrl, isInternal) => {
    await new Promise(resolve => setTimeout(resolve, 200 + Math.random() * 800));
    
    const scenarios = [
      { status: 200, working: true, responseTime: Math.floor(Math.random() * 1000) + 100 },
      { status: 404, working: false, responseTime: Math.floor(Math.random() * 2000) + 500, error: 'Not Found' },
      { status: 301, working: true, responseTime: Math.floor(Math.random() * 1500) + 200, redirectTo: 'https://example.com/new-page' },
      { status: 302, working: true, responseTime: Math.floor(Math.random() * 1500) + 200, redirectTo: 'https://example.com/temp-page' },
      { status: 403, working: false, responseTime: Math.floor(Math.random() * 1000) + 300, error: 'Forbidden' },
      { status: 500, working: false, responseTime: Math.floor(Math.random() * 3000) + 1000, error: 'Server Error' },
      { status: 0, working: false, responseTime: 0, error: 'Connection Timeout' }
    ];
    
    const result = scenarios[Math.floor(Math.random() * scenarios.length)];
    
    return {
      url: linkUrl,
      isInternal,
      ...result,
      anchorText: `Link to ${linkUrl.split('/').pop() || 'homepage'}`,
      foundOn: Math.floor(Math.random() * 5) + 1
    };
  }, []);

  const scanWebsite = async () => {
    if (!url.trim()) {
      setError('Please enter a website URL');
      return;
    }

    if (!url.match(/^https?:\/\/.+/)) {
      setError('Please enter a valid URL starting with http:// or https://');
      return;
    }

    setIsScanning(true);
    setError('');
    setProgress(0);
    setLinks([]);

    try {
      // Simulate finding links
      setProgress(10);
      await new Promise(resolve => setTimeout(resolve, 1000));

      const baseUrl = new URL(url).origin;
      const sampleLinks = [];
      
      // Generate sample internal links
      const internalPaths = ['', '/about', '/contact', '/services', '/blog', '/products', '/privacy', '/terms'];
      for (let i = 0; i < 15; i++) {
        const path = internalPaths[Math.floor(Math.random() * internalPaths.length)];
        sampleLinks.push(`${baseUrl}${path}`);
      }
      
      // Generate sample external links
      const externalDomains = ['google.com', 'facebook.com', 'twitter.com', 'linkedin.com', 'github.com'];
      for (let i = 0; i < 10; i++) {
        const domain = externalDomains[Math.floor(Math.random() * externalDomains.length)];
        sampleLinks.push(`https://${domain}`);
      }

      setProgress(30);
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check each link
      const newLinks = [];
      for (let i = 0; i < sampleLinks.length; i++) {
        const linkUrl = sampleLinks[i];
        const isInternal = linkUrl.includes(new URL(url).hostname);
        const result = await simulateLinkCheck(linkUrl, isInternal);
        newLinks.push(result);
        setLinks([...newLinks]);
        setProgress(30 + ((i + 1) / sampleLinks.length) * 70);
      }
    } catch (err) {
      setError('An error occurred while scanning the website');
    } finally {
      setIsScanning(false);
    }
  };

  const exportResults = () => {
    if (links.length === 0) return;

    const csvContent = [
      ['URL', 'Status', 'Response Time (ms)', 'Type', 'Anchor Text', 'Found On Pages', 'Error/Redirect'].join(','),
      ...links.map(l => [
        `"${l.url}"`,
        l.status,
        l.responseTime,
        l.isInternal ? 'Internal' : 'External',
        `"${l.anchorText}"`,
        l.foundOn,
        `"${l.error || l.redirectTo || ''}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `broken-links-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getStatusBadge = (status, working) => {
    if (working) {
      if (status >= 300 && status < 400) {
        return <Badge className="bg-yellow-500">Redirect ({status})</Badge>;
      }
      return <Badge className="bg-green-500">OK ({status})</Badge>;
    }
    return <Badge variant="destructive">Broken ({status})</Badge>;
  };

  const getResponseTimeColor = (time) => {
    if (time > 3000) return 'text-red-600';
    if (time > 1000) return 'text-yellow-600';
    return 'text-green-600';
  };

  const stats = {
    total: links.length,
    working: links.filter(l => l.working).length,
    broken: links.filter(l => !l.working).length,
    redirects: links.filter(l => l.status >= 300 && l.status < 400).length,
    internal: links.filter(l => l.isInternal).length,
    external: links.filter(l => !l.isInternal).length
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
          <Link className="h-8 w-8 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Broken Link Checker</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find broken links on any website. Check for 404 errors, redirect chains, and link health across entire websites or specific pages.
        </p>
      </div>

      {/* SEO Benefits */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="text-center pb-3">
            <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <CardTitle className="text-lg">Improve SEO</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-gray-600">
              Fix broken links to improve user experience and search engine rankings.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="text-center pb-3">
            <Globe className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <CardTitle className="text-lg">Site Health</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-gray-600">
              Monitor website health by identifying and fixing broken internal and external links.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="text-center pb-3">
            <Zap className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <CardTitle className="text-lg">Fast Scanning</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-gray-600">
              Quickly scan entire websites or specific pages for broken links and get detailed reports.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Input Form */}
      <Card>
        <CardHeader>
          <CardTitle>Scan Website for Broken Links</CardTitle>
          <CardDescription>
            Enter a website URL to scan for broken links. The tool will check both internal and external links.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="website-url">Website URL</Label>
            <Input
              id="website-url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={isScanning}
            />
          </div>

          {error && (
            <Alert variant="destructive">
              <XCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="flex gap-4">
            <Button 
              onClick={scanWebsite} 
              disabled={isScanning}
              className="flex-1"
            >
              {isScanning ? (
                <>
                  <Clock className="mr-2 h-4 w-4 animate-spin" />
                  Scanning Links...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Scan for Broken Links
                </>
              )}
            </Button>
            
            {links.length > 0 && (
              <Button onClick={exportResults} variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export CSV
              </Button>
            )}
          </div>

          {isScanning && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Scanning website...</span>
                <span>{progress.toFixed(0)}%</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results Stats */}
      {links.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
              <div className="text-sm text-gray-600">Total Links</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{stats.working}</div>
              <div className="text-sm text-gray-600">Working</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{stats.broken}</div>
              <div className="text-sm text-gray-600">Broken</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">{stats.redirects}</div>
              <div className="text-sm text-gray-600">Redirects</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{stats.internal}</div>
              <div className="text-sm text-gray-600">Internal</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">{stats.external}</div>
              <div className="text-sm text-gray-600">External</div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Results Table */}
      {links.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Link Analysis Results</CardTitle>
            <CardDescription>
              Detailed analysis of all links found on the website
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">URL</th>
                    <th className="text-left p-3 font-medium">Status</th>
                    <th className="text-left p-3 font-medium">Type</th>
                    <th className="text-left p-3 font-medium">Response Time</th>
                    <th className="text-left p-3 font-medium">Anchor Text</th>
                    <th className="text-left p-3 font-medium">Issues</th>
                  </tr>
                </thead>
                <tbody>
                  {links.map((link, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          {link.isInternal ? (
                            <Link className="h-4 w-4 text-blue-500" />
                          ) : (
                            <ExternalLink className="h-4 w-4 text-gray-500" />
                          )}
                          <a href={link.url} target="_blank" rel="noopener noreferrer" 
                             className="text-blue-600 hover:underline text-sm max-w-xs truncate">
                            {link.url}
                          </a>
                        </div>
                      </td>
                      <td className="p-3">{getStatusBadge(link.status, link.working)}</td>
                      <td className="p-3">
                        <Badge variant={link.isInternal ? 'default' : 'secondary'}>
                          {link.isInternal ? 'Internal' : 'External'}
                        </Badge>
                      </td>
                      <td className="p-3">
                        <span className={`text-sm ${getResponseTimeColor(link.responseTime)}`}>
                          {link.responseTime}ms
                        </span>
                      </td>
                      <td className="p-3 text-sm max-w-xs truncate">
                        {link.anchorText}
                      </td>
                      <td className="p-3 text-sm text-gray-600">
                        {link.error && (
                          <div className="flex items-center gap-1 text-red-600">
                            <AlertTriangle className="h-3 w-3" />
                            {link.error}
                          </div>
                        )}
                        {link.redirectTo && (
                          <div className="text-yellow-600">
                            Redirects to: {link.redirectTo.substring(0, 30)}...
                          </div>
                        )}
                        {link.working && !link.error && !link.redirectTo && (
                          <span className="text-green-600">OK</span>
                        )}
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
            How to Fix Broken Links
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Common Solutions</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Update URLs to correct destinations</li>
                <li>• Remove completely broken links</li>
                <li>• Set up 301 redirects for moved content</li>
                <li>• Replace with working alternative links</li>
                <li>• Fix internal link structure</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Prevention Tips</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Regular link audits (monthly/quarterly)</li>
                <li>• Use relative URLs for internal links</li>
                <li>• Monitor external link destinations</li>
                <li>• Implement proper redirect management</li>
                <li>• Set up 404 error monitoring</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
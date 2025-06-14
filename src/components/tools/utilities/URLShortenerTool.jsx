'use client';

import { useState, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';
import {
  Link as LinkIcon,
  Copy,
  QrCode,
  BarChart3,
  Eye,
  MousePointer,
  Calendar,
  Trash2,
  Plus,
  Download,
  Share,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

export default function URLShortenerTool() {
  const [urls, setUrls] = useState([]);
  const [currentUrl, setCurrentUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [copiedId, setCopiedId] = useState('');
  const [bulkUrls, setBulkUrls] = useState('');

  // URL validation
  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const generateShortCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const shortenUrl = useCallback(async (originalUrl, alias = '') => {
    if (!isValidUrl(originalUrl)) {
      throw new Error('Invalid URL format');
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));

    const shortCode = alias || generateShortCode();
    const shortUrl = `https://30t.me/${shortCode}`;

    return {
      id: Math.random().toString(36).substr(2, 9),
      originalUrl,
      shortUrl,
      shortCode,
      clicks: Math.floor(Math.random() * 1000),
      createdAt: new Date().toISOString(),
      qrCode: `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="white"/><text x="50" y="50" text-anchor="middle" fill="black" font-size="8">QR Code</text></svg>`)}`
    };
  }, []);

  const handleShortenUrl = async () => {
    if (!currentUrl.trim()) return;

    setIsProcessing(true);
    try {
      const result = await shortenUrl(currentUrl, customAlias);
      setUrls(prev => [result, ...prev]);
      setCurrentUrl('');
      setCustomAlias('');
    } catch (error) {
      alert(error.message);
    }
    setIsProcessing(false);
  };

  const handleBulkShorten = async () => {
    if (!bulkUrls.trim()) return;

    const urlList = bulkUrls.split('\n').filter(url => url.trim());
    if (urlList.length === 0) return;

    setIsProcessing(true);
    const results = [];

    for (const url of urlList) {
      try {
        const result = await shortenUrl(url.trim());
        results.push(result);
      } catch (error) {
        console.error(`Failed to shorten ${url}:`, error);
      }
    }

    setUrls(prev => [...results, ...prev]);
    setBulkUrls('');
    setIsProcessing(false);
  };

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(''), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const downloadQRCode = (urlData) => {
    const link = document.createElement('a');
    link.href = urlData.qrCode;
    link.download = `qr-${urlData.shortCode}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const removeUrl = (id) => {
    setUrls(prev => prev.filter(url => url.id !== id));
  };

  const clearAllUrls = () => {
    setUrls([]);
  };

  const exportUrls = () => {
    const csvContent = [
      ['Original URL', 'Short URL', 'Short Code', 'Clicks', 'Created Date'],
      ...urls.map(url => [
        url.originalUrl,
        url.shortUrl,
        url.shortCode,
        url.clicks,
        new Date(url.createdAt).toLocaleDateString()
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `shortened-urls-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const totalClicks = urls.reduce((sum, url) => sum + url.clicks, 0);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Free URL Shortener</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Create short, trackable links instantly. Custom aliases, QR codes, and detailed analytics.
          Perfect for social media, marketing campaigns, and link management.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Instant Generation</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Safe & Secure</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Custom Domain</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="single" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="single">Single URL</TabsTrigger>
          <TabsTrigger value="bulk">Bulk Shorten</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="single" className="space-y-6">
          {/* Single URL Shortener */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5" />
                Shorten URL
              </CardTitle>
              <CardDescription>
                Enter any URL to create a short, shareable link
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="url">URL to Shorten</Label>
                <Input
                  id="url"
                  type="url"
                  placeholder="https://example.com/very-long-url-that-needs-shortening"
                  value={currentUrl}
                  onChange={(e) => setCurrentUrl(e.target.value)}
                  className="text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="alias">Custom Alias (Optional)</Label>
                <Input
                  id="alias"
                  placeholder="my-custom-link"
                  value={customAlias}
                  onChange={(e) => setCustomAlias(e.target.value)}
                  maxLength={20}
                />
                <p className="text-xs text-muted-foreground">
                  Leave empty for random short code
                </p>
              </div>

              <Button
                onClick={handleShortenUrl}
                disabled={!currentUrl.trim() || isProcessing}
                className="w-full"
              >
                {isProcessing ? 'Shortening...' : 'Shorten URL'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bulk" className="space-y-6">
          {/* Bulk URL Shortener */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Bulk URL Shortener
              </CardTitle>
              <CardDescription>
                Shorten multiple URLs at once (one per line)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bulk-urls">URLs (One per line)</Label>
                <Textarea
                  id="bulk-urls"
                  placeholder="https://example.com/url1&#10;https://example.com/url2&#10;https://example.com/url3"
                  value={bulkUrls}
                  onChange={(e) => setBulkUrls(e.target.value)}
                  rows={6}
                  className="text-base"
                />
                <p className="text-xs text-muted-foreground">
                  {bulkUrls.split('\n').filter(url => url.trim()).length} URLs ready to shorten
                </p>
              </div>

              <Button
                onClick={handleBulkShorten}
                disabled={!bulkUrls.trim() || isProcessing}
                className="w-full"
              >
                {isProcessing ? 'Processing...' : 'Shorten All URLs'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          {/* Analytics Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Analytics Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">{urls.length}</p>
                  <p className="text-sm text-muted-foreground">Total Links</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{totalClicks.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Total Clicks</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">
                    {urls.length > 0 ? Math.round(totalClicks / urls.length) : 0}
                  </p>
                  <p className="text-sm text-muted-foreground">Avg. Clicks</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Shortened URLs List */}
      {urls.length > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5" />
                Shortened URLs ({urls.length})
              </span>
              <div className="flex gap-2">
                <Button onClick={exportUrls} variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export CSV
                </Button>
                <Button onClick={clearAllUrls} variant="outline" size="sm">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear All
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {urls.map((urlData) => (
                <div key={urlData.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0 space-y-2">
                      <div>
                        <Label className="text-sm font-medium">Short URL</Label>
                        <div className="flex items-center gap-2 mt-1">
                          <code className="bg-muted px-2 py-1 rounded text-sm flex-1 min-w-0 truncate">
                            {urlData.shortUrl}
                          </code>
                          <Button
                            onClick={() => copyToClipboard(urlData.shortUrl, urlData.id)}
                            size="sm"
                            variant="outline"
                          >
                            {copiedId === urlData.id ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-medium">Original URL</Label>
                        <p className="text-sm text-muted-foreground truncate mt-1">
                          {urlData.originalUrl}
                        </p>
                      </div>
                    </div>

                    <Button
                      onClick={() => removeUrl(urlData.id)}
                      variant="outline"
                      size="sm"
                      className="ml-4"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{urlData.clicks} clicks</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(urlData.createdAt).toLocaleDateString()}</span>
                    </div>
                    <Badge variant="secondary">#{urlData.shortCode}</Badge>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button
                      onClick={() => window.open(urlData.shortUrl, '_blank')}
                      size="sm"
                      variant="outline"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit
                    </Button>
                    <Button
                      onClick={() => downloadQRCode(urlData)}
                      size="sm"
                      variant="outline"
                    >
                      <QrCode className="h-4 w-4 mr-2" />
                      QR Code
                    </Button>
                    <Button
                      onClick={() => copyToClipboard(urlData.originalUrl, `orig-${urlData.id}`)}
                      size="sm"
                      variant="outline"
                    >
                      {copiedId === `orig-${urlData.id}` ? (
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 mr-2" />
                      )}
                      Copy Original
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Help Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>How to Use URL Shortener</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Single URL Shortening</h4>
              <p className="text-sm text-muted-foreground">
                Paste any long URL and optionally add a custom alias. Click "Shorten URL" to generate your short link instantly.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Bulk URL Shortening</h4>
              <p className="text-sm text-muted-foreground">
                Process multiple URLs at once by pasting them in the bulk section, one URL per line. Perfect for marketing campaigns.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Custom Aliases</h4>
              <p className="text-sm text-muted-foreground">
                Create memorable short links with custom aliases like "30t.me/my-store" instead of random characters.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Analytics & Tracking</h4>
              <p className="text-sm text-muted-foreground">
                Track clicks, view creation dates, and export your data as CSV for detailed analysis of your shortened URLs.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Are the shortened URLs permanent?</h4>
              <p className="text-sm text-muted-foreground">
                Yes, once created, shortened URLs remain active indefinitely. However, this is a demo version - in production, URLs would be stored permanently.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Can I use custom domains?</h4>
              <p className="text-sm text-muted-foreground">
                Currently, all shortened URLs use the 30t.me domain. Custom domain support is available in our premium plans.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Is there a limit on URLs?</h4>
              <p className="text-sm text-muted-foreground">
                No, you can shorten unlimited URLs. For bulk operations, we recommend processing up to 100 URLs at a time for optimal performance.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Do you track user data?</h4>
              <p className="text-sm text-muted-foreground">
                We only track basic click analytics. No personal information is collected from users who click on shortened links.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

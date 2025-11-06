'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Link, Copy, Check, Download, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

export default function URLExtractorTool() {
  const [inputText, setInputText] = useState('');
  const [extractedUrls, setExtractedUrls] = useState([]);
  const [copied, setCopied] = useState(false);

  const extractUrls = () => {
    if (!inputText.trim()) {
      toast.error('Please enter some text');
      return;
    }

    // URL regex pattern to match various URL formats
    const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?)/gi;
    const matches = inputText.match(urlRegex) || [];
    
    // Process and normalize URLs
    const processedUrls = matches.map((url, index) => {
      let normalizedUrl = url.trim();
      
      // Remove trailing punctuation
      normalizedUrl = normalizedUrl.replace(/[.,;:!?)]+$/, '');
      
      // Add protocol if missing
      if (normalizedUrl.startsWith('www.')) {
        normalizedUrl = 'https://' + normalizedUrl;
      } else if (!normalizedUrl.startsWith('http://') && !normalizedUrl.startsWith('https://')) {
        normalizedUrl = 'https://' + normalizedUrl;
      }

      // Extract domain for display
      let domain = '';
      try {
        const urlObj = new URL(normalizedUrl);
        domain = urlObj.hostname;
      } catch (e) {
        domain = normalizedUrl.split('/')[0];
      }

      return {
        id: index + 1,
        original: url,
        normalized: normalizedUrl,
        domain: domain,
        isValid: isValidUrl(normalizedUrl)
      };
    });

    // Remove duplicates
    const uniqueUrls = processedUrls.filter((url, index, self) => 
      index === self.findIndex((u) => u.normalized === url.normalized)
    );

    setExtractedUrls(uniqueUrls);
    toast.success(`Found ${uniqueUrls.length} unique URLs`);
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const copyAllUrls = async () => {
    if (extractedUrls.length === 0) return;
    
    const urlList = extractedUrls.map(url => url.normalized).join('\n');
    try {
      await navigator.clipboard.writeText(urlList);
      setCopied(true);
      toast.success('All URLs copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error('Failed to copy URLs');
    }
  };

  const copyUrl = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success('URL copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy URL');
    }
  };

  const downloadUrls = () => {
    if (extractedUrls.length === 0) return;
    
    const urlList = extractedUrls.map((url, index) => 
      `${index + 1}. ${url.normalized} (Domain: ${url.domain})`
    ).join('\n');
    
    const content = `Extracted URLs\n==============\n\n${urlList}\n\nTotal URLs found: ${extractedUrls.length}\nExtracted on: ${new Date().toLocaleString()}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'extracted_urls.txt';
    a.click();
    URL.revokeObjectURL(url);
    toast.success('URLs downloaded!');
  };

  const openUrl = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const clearText = () => {
    setInputText('');
    setExtractedUrls([]);
    toast.success('Text cleared!');
  };

  const loadSampleText = () => {
    const sample = `Check out these websites:
https://www.google.com for search
Visit https://github.com/octocat for code repositories
You can also go to www.stackoverflow.com for programming help
Don't forget about youtube.com and wikipedia.org
Email us at contact@example.com or visit our site at https://example.com/contact
ftp://files.example.com/downloads/
http://subdomain.example.org/path/to/resource?param=value#section`;
    
    setInputText(sample);
    toast.success('Sample text loaded!');
  };

  const getStats = () => {
    const validUrls = extractedUrls.filter(url => url.isValid).length;
    const domains = [...new Set(extractedUrls.map(url => url.domain))];
    
    return {
      total: extractedUrls.length,
      valid: validUrls,
      invalid: extractedUrls.length - validUrls,
      uniqueDomains: domains.length
    };
  };

  const stats = getStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            URL/Link Extractor
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Extract all URLs and links from text, documents, or web content. Find and organize website links efficiently.
          </p>
        </div>

        {/* Input Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Link className="h-5 w-5" />
              Text Input
            </CardTitle>
            <CardDescription>
              Paste text containing URLs to extract all links
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Paste your text here... URLs will be automatically detected and extracted."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows={10}
              className="resize-y"
            />
            
            <div className="flex flex-col sm:flex-row gap-2">
              <Button 
                onClick={extractUrls}
                disabled={!inputText.trim()}
                className="flex-1"
              >
                <Link className="h-4 w-4 mr-2" />
                Extract URLs
              </Button>
              <Button onClick={loadSampleText} variant="outline">
                Load Sample Text
              </Button>
              <Button onClick={clearText} variant="outline">
                Clear Text
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        {extractedUrls.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Extraction Results
                <div className="flex gap-2">
                  <Button
                    onClick={copyAllUrls}
                    variant="outline"
                    size="sm"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                  <Button
                    onClick={downloadUrls}
                    variant="outline"
                    size="sm"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
                  <div className="text-sm text-gray-600">Total URLs</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{stats.valid}</div>
                  <div className="text-sm text-gray-600">Valid URLs</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{stats.invalid}</div>
                  <div className="text-sm text-gray-600">Invalid URLs</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{stats.uniqueDomains}</div>
                  <div className="text-sm text-gray-600">Unique Domains</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Extracted URLs */}
        {extractedUrls.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Extracted URLs ({extractedUrls.length})</CardTitle>
              <CardDescription>
                Click on any URL to open it, or use the copy button to copy individual links
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {extractedUrls.map((urlData) => (
                  <div 
                    key={urlData.id}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge 
                          variant={urlData.isValid ? 'default' : 'destructive'}
                          className="text-xs"
                        >
                          {urlData.isValid ? 'Valid' : 'Invalid'}
                        </Badge>
                        <span className="text-sm text-gray-500">{urlData.domain}</span>
                      </div>
                      <div className="font-mono text-sm truncate">
                        {urlData.normalized}
                      </div>
                      {urlData.original !== urlData.normalized && (
                        <div className="text-xs text-gray-500 truncate">
                          Original: {urlData.original}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      {urlData.isValid && (
                        <Button
                          onClick={() => openUrl(urlData.normalized)}
                          variant="outline"
                          size="sm"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        onClick={() => copyUrl(urlData.normalized)}
                        variant="outline"
                        size="sm"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Link className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Smart Detection</h3>
                <p className="text-sm text-gray-600">
                  Automatically detect and extract all URL formats
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Copy className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Easy Export</h3>
                <p className="text-sm text-gray-600">
                  Copy individual URLs or download all as a file
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <ExternalLink className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Quick Access</h3>
                <p className="text-sm text-gray-600">
                  Open URLs directly or validate link integrity
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
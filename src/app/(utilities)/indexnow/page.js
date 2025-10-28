'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, CheckCircle, XCircle, Send, Globe } from 'lucide-react';

export default function IndexNowPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [customUrls, setCustomUrls] = useState('');

  const submitAllUrls = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/indexnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'submit-all'
        })
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({
        success: false,
        message: 'Failed to submit URLs',
        error: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  const submitCustomUrls = async () => {
    if (!customUrls.trim()) {
      setResult({
        success: false,
        message: 'Please enter at least one URL'
      });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const urls = customUrls
        .split('\n')
        .map(url => url.trim())
        .filter(url => url.length > 0);

      const response = await fetch('/api/indexnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ urls })
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({
        success: false,
        message: 'Failed to submit URLs',
        error: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <Globe className="w-10 h-10 text-primary" />
            IndexNow Integration
          </h1>
          <p className="text-xl text-muted-foreground">
            Submit URLs to search engines instantly using IndexNow protocol
          </p>
        </div>

        <div className="grid gap-6 mb-6">
          {/* Submit All Tools */}
          <Card>
            <CardHeader>
              <CardTitle>Submit All Tool Pages</CardTitle>
              <CardDescription>
                Submit all tool pages, category pages, and important pages to IndexNow. This will notify search engines about all your content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={submitAllUrls}
                disabled={loading}
                className="w-full"
                size="lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit All URLs to IndexNow
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Submit Custom URLs */}
          <Card>
            <CardHeader>
              <CardTitle>Submit Custom URLs</CardTitle>
              <CardDescription>
                Submit specific URLs manually. Enter one URL per line.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="https://30tools.com/image-compressor
https://30tools.com/video-converter
https://30tools.com/pdf-merger"
                value={customUrls}
                onChange={(e) => setCustomUrls(e.target.value)}
                rows={6}
                className="font-mono text-sm"
              />
              <Button
                onClick={submitCustomUrls}
                disabled={loading || !customUrls.trim()}
                className="w-full"
                size="lg"
                variant="outline"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Custom URLs
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Result */}
          {result && (
            <Alert className={result.success ? 'border-green-500 bg-green-50 dark:bg-green-950' : 'border-red-500 bg-red-50 dark:bg-red-950'}>
              <div className="flex items-start gap-2">
                {result.success ? (
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5" />
                )}
                <AlertDescription className={result.success ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}>
                  <div className="font-semibold mb-1">{result.message}</div>
                  {result.count && (
                    <div className="text-sm">Submitted {result.count} URL{result.count !== 1 ? 's' : ''}</div>
                  )}
                  {result.error && (
                    <div className="text-sm mt-1">Error: {result.error}</div>
                  )}
                </AlertDescription>
              </div>
            </Alert>
          )}

          {/* Info Card */}
          <Card>
            <CardHeader>
              <CardTitle>About IndexNow</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div>
                <strong className="text-foreground">What is IndexNow?</strong>
                <p className="mt-1">
                  IndexNow is a protocol that allows website owners to instantly notify search engines when content is created, updated, or deleted.
                </p>
              </div>
              <div>
                <strong className="text-foreground">API Key:</strong>
                <code className="block mt-1 bg-secondary p-2 rounded text-xs">
                  634a2c77198a45429967eb9dc1252278
                </code>
              </div>
              <div>
                <strong className="text-foreground">Key Location:</strong>
                <code className="block mt-1 bg-secondary p-2 rounded text-xs">
                  https://30tools.com/634a2c77198a45429967eb9dc1252278.txt
                </code>
              </div>
              <div>
                <strong className="text-foreground">Supported Search Engines:</strong>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Microsoft Bing</li>
                  <li>Yandex</li>
                  <li>Seznam.cz</li>
                  <li>Naver</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Download, AlertCircle, CheckCircle2 } from 'lucide-react';

const FacebookStoryDownloader = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleDownload = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    // Basic validation
    if (!url.includes('facebook.com') && !url.includes('fb.watch')) {
      setError('Please enter a valid Facebook URL.');
      setLoading(false);
      return;
    }

    try {
      // Mocking the API call for now as actual scraping requires backend logic/proxies
      // In a real implementation, this would call an API route
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate success for demonstration purposes
      // This is a placeholder for the actual download logic
      setResult({
        success: true,
        message: "Video found! (Mock)",
        thumbnail: "https://placehold.co/600x400/png?text=Facebook+Story+Thumbnail", // Placeholder
        downloadUrl: "#" 
      });

    } catch (err) {
      setError('Failed to process URL. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <Card className="border-none shadow-lg bg-card text-card-foreground">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl font-bold">Facebook Story Downloader</CardTitle>
          <CardDescription>
            Download Facebook stories and videos in high quality.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleDownload} className="space-y-4">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Paste Facebook Story URL here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 h-12"
                required
              />
              <Button type="submit" disabled={loading} className="h-12 px-8">
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
                <span className="ml-2 hidden sm:inline">Download</span>
              </Button>
            </div>
          </form>

          {error && (
            <Alert variant="destructive" className="mt-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {result && (
            <div className="mt-8 p-6 bg-muted/50 rounded-xl animate-in fade-in slide-in-from-bottom-4">
              <div className="flex flex-col items-center gap-4">
                <CheckCircle2 className="w-12 h-12 text-green-500" />
                <h3 className="text-xl font-semibold text-center">Ready to Download!</h3>
                <p className="text-muted-foreground text-center text-sm">
                  We found your video. Click the button below to save it.
                </p>
                
                {/* Visual placeholder for the video thumbnail */}
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black/10 my-2">
                    <img src={result.thumbnail} alt="Thumbnail" className="w-full h-full object-cover opacity-80" />
                </div>

                <Button className="w-full sm:w-auto min-w-[200px]" size="lg">
                  <Download className="mr-2 h-5 w-5" /> Download HD Video
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                    * By downloading, you agree to our Terms of Service.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Lightweight Features Section */}
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="p-4 rounded-lg bg-muted/30">
            <h3 className="font-semibold mb-2">Fast & Free</h3>
            <p className="text-sm text-muted-foreground">Download stories instantly without any hidden fees.</p>
        </div>
        <div className="p-4 rounded-lg bg-muted/30">
            <h3 className="font-semibold mb-2">No Registration</h3>
            <p className="text-sm text-muted-foreground">No sign-up required. Just paste the link and download.</p>
        </div>
        <div className="p-4 rounded-lg bg-muted/30">
            <h3 className="font-semibold mb-2">Secure</h3>
            <p className="text-sm text-muted-foreground">We do not store your downloads or track your history.</p>
        </div>
      </div>
    </div>
  );
};

export default FacebookStoryDownloader;

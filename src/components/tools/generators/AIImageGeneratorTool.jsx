'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RefreshCwIcon, ImageIcon, DownloadIcon, CopyIcon } from 'lucide-react';

export default function AIImageGeneratorTool() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setError('');
    setImageUrl('');
    try {
      const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;
      setImageUrl(url);
    } catch (e) {
      setError('Failed to generate image.');
    }
    setLoading(false);
  };

  const handleCopy = async () => {
    if (imageUrl) {
      await navigator.clipboard.writeText(imageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5 text-blue-500" />
            AI Image Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Input
              placeholder="Describe your image (e.g. A cat surfing a wave)"
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              disabled={loading}
              className="mb-2"
            />
            <Button onClick={handleGenerate} disabled={loading || !prompt} className="w-full">
              {loading ? <RefreshCwIcon className="animate-spin h-4 w-4 mr-2" /> : <ImageIcon className="h-4 w-4 mr-2" />}
              Generate Image
            </Button>
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          {imageUrl && (
            <div className="flex flex-col items-center gap-2 mt-4">
              <img src={imageUrl} alt="AI generated" className="rounded border max-w-full max-h-80" loading="lazy" />
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm" onClick={() => window.open(imageUrl, '_blank')}>
                  <DownloadIcon className="h-4 w-4 mr-1" /> Download
                </Button>
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  <CopyIcon className="h-4 w-4 mr-1" /> {copied ? 'Copied!' : 'Copy Link'}
                </Button>
              </div>
            </div>
          )}
          <div className="flex gap-2 mt-4">
            <Badge variant="secondary">Free AI</Badge>
            <Badge variant="secondary">No Signup</Badge>
            <Badge variant="secondary">Instant Results</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RefreshCwIcon, Volume2Icon, DownloadIcon, CopyIcon } from 'lucide-react';

export default function AIVoiceGeneratorTool() {
  const [text, setText] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setError('');
    setAudioUrl('');
    try {
      const url = `https://text.pollinations.ai/${encodeURIComponent(text)}?model=openai-audio&voice=nova`;
      setAudioUrl(url);
    } catch (e) {
      setError('Failed to generate audio.');
    }
    setLoading(false);
  };

  const handleCopy = async () => {
    if (audioUrl) {
      await navigator.clipboard.writeText(audioUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Volume2Icon className="h-5 w-5 text-primary" />
            AI Voice Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Input
              placeholder="Enter text to convert to speech (e.g. Hello world!)"
              value={text}
              onChange={e => setText(e.target.value)}
              disabled={loading}
              className="mb-2"
            />
            <Button onClick={handleGenerate} disabled={loading || !text} className="w-full text-xl px-12 py-5 shadow-lg">
              {loading ? <RefreshCwIcon className="animate-spin h-4 w-4 mr-2" /> : <Volume2Icon className="h-4 w-4 mr-2" />}
              Generate Voice
            </Button>
          </div>
          {error && <div className="text-destructive text-sm">{error}</div>}
          {audioUrl && (
            <div className="flex flex-col items-center gap-2 mt-4">
              <audio controls src={audioUrl} className="w-full" />
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm" onClick={() => window.open(audioUrl, '_blank')}>
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
'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { LinkIcon, WandIcon, RefreshCwIcon, LoaderIcon } from 'lucide-react';
import { toast } from 'sonner';

export default function TeraboxUrlInput({ 
  teraboxUrl, 
  onUrlChange, 
  onLoadVideo, 
  isLoading 
}) {
  const debounceRef = useRef(null);

  const sampleUrl = 'https://teraboxapp.com/s/1EWkWY66FhZKS2WfxwBgd0Q';

  const handleUrlChange = (value) => {
    onUrlChange(value);

    // Clear previous debounce
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    // Auto-load video when URL is pasted
    if (value && value.includes('teraboxapp.com')) {
      debounceRef.current = setTimeout(() => {
        onLoadVideo(value);
      }, 1000); // Wait 1 second after user stops typing
    }
  };

  const loadSampleData = () => {
    onUrlChange(sampleUrl);
    onLoadVideo(sampleUrl);
    toast.success('Sample video loaded!');
  };

  const clearForm = () => {
    onUrlChange('');
    toast.success('Form cleared!');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <LinkIcon className="h-5 w-5 mr-2" />
          Terabox URL
        </CardTitle>
        <CardDescription>
          Paste your Terabox video link - video will load automatically
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="terabox-url">Video URL</Label>
          <div className="relative">
            <Input
              id="terabox-url"
              placeholder="https://teraboxapp.com/s/..."
              value={teraboxUrl}
              onChange={(e) => handleUrlChange(e.target.value)}
              disabled={isLoading}
            />
            {isLoading && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <LoaderIcon className="h-4 w-4 animate-spin text-blue-500" />
              </div>
            )}
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={loadSampleData}
            disabled={isLoading}
          >
            <WandIcon className="h-4 w-4 mr-2" />
            Load Sample
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={clearForm}
            disabled={isLoading}
          >
            <RefreshCwIcon className="h-4 w-4 mr-2" />
            Clear
          </Button>
        </div>

        {teraboxUrl && !teraboxUrl.includes('teraboxapp.com') && (
          <div className="text-sm text-orange-600 dark:text-orange-400">
            Please enter a valid Terabox URL (teraboxapp.com)
          </div>
        )}
      </CardContent>
    </Card>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ClockIcon, 
  CopyIcon, 
  ArrowLeftIcon,
  CalendarIcon,
  RefreshCwIcon
} from 'lucide-react';
import Link from 'next/link';

export default function EpochConverterTool() {
  const [timestamp, setTimestamp] = useState('');
  const [humanDate, setHumanDate] = useState('');
  const [currentTime, setCurrentTime] = useState(Date.now());

  // Update current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Initialize with current timestamp
  useEffect(() => {
    const now = Math.floor(Date.now() / 1000);
    setTimestamp(now.toString());
    setHumanDate(new Date(now * 1000).toISOString().slice(0, 16));
  }, []);

  const timestampToHuman = (ts) => {
    try {
      const date = new Date(parseInt(ts) * 1000);
      return date.toISOString().slice(0, 16);
    } catch (error) {
      return '';
    }
  };

  const humanToTimestamp = (dateStr) => {
    try {
      const date = new Date(dateStr);
      return Math.floor(date.getTime() / 1000).toString();
    } catch (error) {
      return '';
    }
  };

  const handleTimestampChange = (value) => {
    setTimestamp(value);
    setHumanDate(timestampToHuman(value));
  };

  const handleHumanChange = (value) => {
    setHumanDate(value);
    setTimestamp(humanToTimestamp(value));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const setCurrentTimestamp = () => {
    const now = Math.floor(Date.now() / 1000);
    handleTimestampChange(now.toString());
  };

  const formatDate = (timestamp) => {
    try {
      const date = new Date(parseInt(timestamp) * 1000);
      return {
        iso: date.toISOString(),
        local: date.toLocaleString(),
        utc: date.toUTCString(),
        relative: getRelativeTime(date)
      };
    } catch (error) {
      return {
        iso: 'Invalid timestamp',
        local: 'Invalid timestamp',
        utc: 'Invalid timestamp',
        relative: 'Invalid timestamp'
      };
    }
  };

  const getRelativeTime = (date) => {
    const now = new Date();
    const diffMs = now - date;
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffSecs < 60) return `${diffSecs} seconds ago`;
    if (diffMins < 60) return `${diffMins} minutes ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    return `${diffDays} days ago`;
  };

  const formattedDates = formatDate(timestamp);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
              <ClockIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Epoch Timestamp Converter</h1>
              <p className="text-muted-foreground">Convert between Unix timestamps and human-readable dates</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">Unix Timestamp</Badge>
            <Badge variant="secondary">Human Date</Badge>
            <Badge variant="secondary">Multiple Formats</Badge>
            <Badge variant="secondary">Live Clock</Badge>
          </div>
        </div>

        {/* Current Time Display */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-mono font-bold mb-2">
                {Math.floor(currentTime / 1000)}
              </div>
              <div className="text-muted-foreground">
                Current Unix Timestamp
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {new Date(currentTime).toLocaleString()}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Converter
                <Button onClick={setCurrentTimestamp} variant="ghost" size="sm">
                  <RefreshCwIcon className="h-4 w-4" />
                </Button>
              </CardTitle>
              <CardDescription>
                Convert between timestamp and human-readable date
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Timestamp Input */}
              <div>
                <Label htmlFor="timestamp">Unix Timestamp (seconds)</Label>
                <div className="flex gap-2 mt-1">
                  <Input
                    id="timestamp"
                    value={timestamp}
                    onChange={(e) => handleTimestampChange(e.target.value)}
                    placeholder="1640995200"
                    className="font-mono"
                  />
                  <Button onClick={() => copyToClipboard(timestamp)} variant="outline" size="sm">
                    <CopyIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Human Date Input */}
              <div>
                <Label htmlFor="humanDate">Human Date</Label>
                <div className="flex gap-2 mt-1">
                  <Input
                    id="humanDate"
                    type="datetime-local"
                    value={humanDate}
                    onChange={(e) => handleHumanChange(e.target.value)}
                    className="font-mono"
                  />
                  <Button onClick={() => copyToClipboard(humanDate)} variant="outline" size="sm">
                    <CopyIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button onClick={setCurrentTimestamp} className="w-full">
                Use Current Time
              </Button>
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                Formatted Dates
              </CardTitle>
              <CardDescription>
                Multiple date format representations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="formats" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="formats">Formats</TabsTrigger>
                  <TabsTrigger value="info">Info</TabsTrigger>
                </TabsList>
                
                <TabsContent value="formats" className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <Label className="text-xs text-muted-foreground">ISO 8601</Label>
                      <div className="flex gap-2">
                        <code className="flex-1 text-sm bg-muted p-2 rounded font-mono">
                          {formattedDates.iso}
                        </code>
                        <Button onClick={() => copyToClipboard(formattedDates.iso)} variant="outline" size="sm">
                          <CopyIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-xs text-muted-foreground">Local Time</Label>
                      <div className="flex gap-2">
                        <code className="flex-1 text-sm bg-muted p-2 rounded font-mono">
                          {formattedDates.local}
                        </code>
                        <Button onClick={() => copyToClipboard(formattedDates.local)} variant="outline" size="sm">
                          <CopyIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-xs text-muted-foreground">UTC</Label>
                      <div className="flex gap-2">
                        <code className="flex-1 text-sm bg-muted p-2 rounded font-mono">
                          {formattedDates.utc}
                        </code>
                        <Button onClick={() => copyToClipboard(formattedDates.utc)} variant="outline" size="sm">
                          <CopyIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-xs text-muted-foreground">Relative</Label>
                      <div className="flex gap-2">
                        <code className="flex-1 text-sm bg-muted p-2 rounded font-mono">
                          {formattedDates.relative}
                        </code>
                        <Button onClick={() => copyToClipboard(formattedDates.relative)} variant="outline" size="sm">
                          <CopyIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="info" className="space-y-4">
                  <div className="text-sm space-y-3">
                    <div>
                      <div className="font-medium">Timestamp</div>
                      <div className="text-muted-foreground">{timestamp} seconds since Jan 1, 1970</div>
                    </div>
                    <div>
                      <div className="font-medium">Milliseconds</div>
                      <div className="text-muted-foreground">{parseInt(timestamp) * 1000}</div>
                    </div>
                    <div>
                      <div className="font-medium">Days Since Epoch</div>
                      <div className="text-muted-foreground">{Math.floor(parseInt(timestamp) / 86400)}</div>
                    </div>
                    <div>
                      <div className="font-medium">Years Since Epoch</div>
                      <div className="text-muted-foreground">{(parseInt(timestamp) / (365.25 * 24 * 3600)).toFixed(2)}</div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Information */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>About Unix Timestamps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">What is Unix Time?</h4>
                <p className="text-muted-foreground">
                  Unix timestamp represents the number of seconds that have elapsed since 
                  January 1, 1970, 00:00:00 UTC (the Unix epoch).
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Why Use Timestamps?</h4>
                <p className="text-muted-foreground">
                  Timestamps provide a universal way to represent time across different 
                  systems, timezones, and programming languages.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Common Use Cases</h4>
                <p className="text-muted-foreground">
                  Database storage, API responses, log files, cache expiration, 
                  and cross-system time synchronization.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BinaryIcon, 
  CopyIcon, 
  ArrowLeftIcon,
  RefreshCwIcon,
  ArrowRightIcon,
  ArrowLeftRightIcon
} from 'lucide-react';
import Link from 'next/link';

export default function BinaryConverterTool() {
  const [text, setText] = useState('Hello World');
  const [binary, setBinary] = useState('');
  const [mode, setMode] = useState('text-to-binary');

  const textToBinary = (text) => {
    return text
      .split('')
      .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
      .join(' ');
  };

  const binaryToText = (binary) => {
    try {
      return binary
        .split(' ')
        .filter(bin => bin.length === 8)
        .map(bin => String.fromCharCode(parseInt(bin, 2)))
        .join('');
    } catch (error) {
      return 'Invalid binary format';
    }
  };

  const handleTextChange = (newText) => {
    setText(newText);
    if (mode === 'text-to-binary') {
      setBinary(textToBinary(newText));
    }
  };

  const handleBinaryChange = (newBinary) => {
    setBinary(newBinary);
    if (mode === 'binary-to-text') {
      setText(binaryToText(newBinary));
    }
  };

  const switchMode = () => {
    if (mode === 'text-to-binary') {
      setMode('binary-to-text');
      setText(binaryToText(binary));
    } else {
      setMode('text-to-binary');
      setBinary(textToBinary(text));
    }
  };

  const copyToClipboard = (content) => {
    navigator.clipboard.writeText(content);
    alert('Copied to clipboard!');
  };

  const clearAll = () => {
    setText('');
    setBinary('');
  };

  // Initialize binary on component mount
  useState(() => {
    setBinary(textToBinary(text));
  }, []);

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
              <BinaryIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Text to Binary Converter</h1>
              <p className="text-muted-foreground">Convert text to binary and binary to text instantly</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">Text to Binary</Badge>
            <Badge variant="secondary">Binary to Text</Badge>
            <Badge variant="secondary">UTF-8 Encoding</Badge>
            <Badge variant="secondary">Copy & Download</Badge>
          </div>
        </div>

        {/* Mode Switcher */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center justify-center gap-4">
              <Button
                variant={mode === 'text-to-binary' ? 'default' : 'outline'}
                onClick={() => setMode('text-to-binary')}
              >
                Text → Binary
              </Button>
              <Button onClick={switchMode} variant="ghost" size="sm">
                <ArrowLeftRightIcon className="h-4 w-4" />
              </Button>
              <Button
                variant={mode === 'binary-to-text' ? 'default' : 'outline'}
                onClick={() => setMode('binary-to-text')}
              >
                Binary → Text
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {mode === 'text-to-binary' ? 'Text Input' : 'Binary Input'}
                <Button onClick={clearAll} variant="ghost" size="sm">
                  <RefreshCwIcon className="h-4 w-4" />
                </Button>
              </CardTitle>
              <CardDescription>
                {mode === 'text-to-binary' 
                  ? 'Enter text to convert to binary'
                  : 'Enter binary code (space-separated 8-bit groups)'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {mode === 'text-to-binary' ? (
                <div className="space-y-4">
                  <Textarea
                    value={text}
                    onChange={(e) => handleTextChange(e.target.value)}
                    placeholder="Enter text here..."
                    className="min-h-[200px] font-mono"
                  />
                  <div className="flex gap-2">
                    <Button
                      onClick={() => copyToClipboard(text)}
                      variant="outline"
                      className="flex-1"
                    >
                      <CopyIcon className="h-4 w-4 mr-2" />
                      Copy Text
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Characters: {text.length} | Bytes: {new Blob([text]).size}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <Textarea
                    value={binary}
                    onChange={(e) => handleBinaryChange(e.target.value)}
                    placeholder="Enter binary code here... (e.g., 01001000 01100101 01101100 01101100 01101111)"
                    className="min-h-[200px] font-mono text-sm"
                  />
                  <div className="flex gap-2">
                    <Button
                      onClick={() => copyToClipboard(binary)}
                      variant="outline"
                      className="flex-1"
                    >
                      <CopyIcon className="h-4 w-4 mr-2" />
                      Copy Binary
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Binary groups: {binary.split(' ').filter(b => b.length === 8).length}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowRightIcon className="h-4 w-4" />
                {mode === 'text-to-binary' ? 'Binary Output' : 'Text Output'}
              </CardTitle>
              <CardDescription>
                {mode === 'text-to-binary' 
                  ? 'Generated binary representation'
                  : 'Decoded text from binary'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {mode === 'text-to-binary' ? (
                <div className="space-y-4">
                  <Textarea
                    value={binary}
                    readOnly
                    className="min-h-[200px] font-mono text-sm bg-muted"
                  />
                  <div className="flex gap-2">
                    <Button
                      onClick={() => copyToClipboard(binary)}
                      className="flex-1"
                    >
                      <CopyIcon className="h-4 w-4 mr-2" />
                      Copy Binary
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Binary length: {binary.replace(/\s/g, '').length} bits
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <Textarea
                    value={text}
                    readOnly
                    className="min-h-[200px] font-mono bg-muted"
                  />
                  <div className="flex gap-2">
                    <Button
                      onClick={() => copyToClipboard(text)}
                      className="flex-1"
                    >
                      <CopyIcon className="h-4 w-4 mr-2" />
                      Copy Text
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Decoded characters: {text.length}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Binary Information */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Binary Encoding Information</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="basics" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="basics">Basics</TabsTrigger>
                <TabsTrigger value="examples">Examples</TabsTrigger>
                <TabsTrigger value="uses">Use Cases</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basics" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">What is Binary?</h4>
                    <p className="text-muted-foreground">
                      Binary is a base-2 number system using only 0s and 1s. Each character is represented 
                      by an 8-bit binary number (byte) corresponding to its ASCII or UTF-8 value.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">How it Works</h4>
                    <p className="text-muted-foreground">
                      Each character gets converted to its decimal ASCII value, then to binary. 
                      For example, 'A' = 65 in decimal = 01000001 in binary.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="examples" className="space-y-4">
                <div className="space-y-3">
                  <div className="border rounded-lg p-3">
                    <div className="font-mono text-sm">
                      <div>Text: "Hi"</div>
                      <div className="text-muted-foreground">H = 72 = 01001000</div>
                      <div className="text-muted-foreground">i = 105 = 01101001</div>
                      <div className="text-primary">Binary: 01001000 01101001</div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-3">
                    <div className="font-mono text-sm">
                      <div>Text: "123"</div>
                      <div className="text-muted-foreground">1 = 49 = 00110001</div>
                      <div className="text-muted-foreground">2 = 50 = 00110010</div>
                      <div className="text-muted-foreground">3 = 51 = 00110011</div>
                      <div className="text-primary">Binary: 00110001 00110010 00110011</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="uses" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Educational</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Learn binary number system</li>
                      <li>• Understand computer data representation</li>
                      <li>• Practice ASCII encoding/decoding</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Programming</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Debug binary data</li>
                      <li>• Low-level programming</li>
                      <li>• Data transmission analysis</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

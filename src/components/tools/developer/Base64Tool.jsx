'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeftIcon, 
  CodeIcon, 
  CopyIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  RefreshCwIcon,
  UploadIcon,
  DownloadIcon,
  FileIcon,
  ImageIcon,
  ArrowRightIcon,
  ArrowLeftIcon as DecodeIcon,
  ZapIcon,
  ShieldIcon
} from 'lucide-react';
import Link from 'next/link';
import SocialShareButtons from '@/components/shared/SocialShareButtons';

export default function Base64Tool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState('encode');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [fileInfo, setFileInfo] = useState(null);

  const processText = useCallback((text, operation) => {
    try {
      setError('');
      if (!text) {
        setOutput('');
        return;
      }

      if (operation === 'encode') {
        const encoded = btoa(unescape(encodeURIComponent(text)));
        setOutput(encoded);
      } else {
        const decoded = decodeURIComponent(escape(atob(text)));
        setOutput(decoded);
      }
    } catch (err) {
      setError(`Invalid Base64 input: ${err.message}`);
      setOutput('');
    }
  }, []);

  const handleInputChange = (value) => {
    setInput(value);
    processText(value, mode);
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    if (input) {
      processText(input, newMode);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearAll = () => {
    setInput('');
    setOutput('');
    setError('');
    setFileInfo(null);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    
    reader.onload = (e) => {
      const result = e.target.result;
      const base64 = result.split(',')[1]; // Remove data:mime;base64, prefix
      
      setFileInfo({
        name: file.name,
        size: file.size,
        type: file.type
      });
      
      if (mode === 'encode') {
        setInput(file.name); // Show filename as input
        setOutput(base64);
      } else {
        setInput(base64);
        setOutput(`File: ${file.name}`);
      }
    };

    reader.readAsDataURL(file);
  };

  const downloadOutput = () => {
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `base64-${mode}d.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exampleUsages = {
    encode: [
      'Hello, World!',
      'This is a test message',
      'Base64 encoding example',
      '{"name": "John", "age": 30}'
    ],
    decode: [
      'SGVsbG8sIFdvcmxkIQ==',
      'VGhpcyBpcyBhIHRlc3QgbWVzc2FnZQ==',
      'QmFzZTY0IGVuY29kaW5nIGV4YW1wbGU=',
      'eyJuYW1lIjogIkpvaG4iLCAiYWdlIjogMzB9'
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <Link href="/">
        <Button variant="ghost" className="mb-4">
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
          <CodeIcon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Base64 Encoder/Decoder</h1>
          <p className="text-muted-foreground">Encode and decode text and files to/from Base64 format</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Text Encoding</Badge>
        <Badge variant="secondary">File Upload</Badge>
        <Badge variant="secondary">Batch Processing</Badge>
        <Badge variant="secondary">Copy & Download</Badge>
      </div>

      {/* Mode Selector */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Operation Mode</CardTitle>
          <CardDescription>Choose whether to encode or decode Base64</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={mode} onValueChange={handleModeChange}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="encode" className="flex items-center gap-2">
                <ArrowRightIcon className="h-4 w-4" />
                Encode to Base64
              </TabsTrigger>
              <TabsTrigger value="decode" className="flex items-center gap-2">
                <DecodeIcon className="h-4 w-4" />
                Decode from Base64
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Input {mode === 'encode' ? '(Text/File)' : '(Base64)'}</span>
                <Button size="sm" variant="outline" onClick={clearAll}>
                  <RefreshCwIcon className="h-4 w-4 mr-2" />
                  Clear
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* File Upload for Encoding */}
              {mode === 'encode' && (
                <div>
                  <Label htmlFor="file-upload" className="text-sm font-medium">
                    Upload File (Optional)
                  </Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center">
                    <input
                      id="file-upload"
                      type="file"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <Label htmlFor="file-upload" className="cursor-pointer">
                      <UploadIcon className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload a file or drag and drop
                      </p>
                    </Label>
                  </div>
                </div>
              )}

              {/* Text Input */}
              <div>
                <Label htmlFor="input-text" className="text-sm font-medium">
                  {mode === 'encode' ? 'Text to Encode' : 'Base64 to Decode'}
                </Label>
                <Textarea
                  id="input-text"
                  value={input}
                  onChange={(e) => handleInputChange(e.target.value)}
                  placeholder={mode === 'encode' 
                    ? 'Enter text to encode to Base64...' 
                    : 'Enter Base64 string to decode...'
                  }
                  className="min-h-[200px] font-mono text-sm input-cute"
                />
              </div>

              {/* File Info */}
              {fileInfo && (
                <Alert>
                  <FileIcon className="h-4 w-4" />
                  <AlertDescription>
                    <strong>File:</strong> {fileInfo.name} ({(fileInfo.size / 1024).toFixed(1)} KB)
                    <br />
                    <strong>Type:</strong> {fileInfo.type || 'Unknown'}
                  </AlertDescription>
                </Alert>
              )}

              {/* Examples */}
              <div>
                <Label className="text-sm font-medium">Quick Examples</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exampleUsages[mode].map((example, index) => (
                    <Button
                      key={index}
                      size="sm"
                      variant="outline"
                      onClick={() => handleInputChange(example)}
                      className="text-xs"
                    >
                      Example {index + 1}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Output Section */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Output {mode === 'encode' ? '(Base64)' : '(Text)'}</span>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={copyToClipboard}
                    disabled={!output}
                  >
                    {copied ? (
                      <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                    ) : (
                      <CopyIcon className="h-4 w-4 mr-2" />
                    )}
                    {copied ? 'Copied!' : 'Copy'}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={downloadOutput}
                    disabled={!output}
                  >
                    <DownloadIcon className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {error ? (
                <Alert>
                  <AlertCircleIcon className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              ) : (
                <Textarea
                  value={output}
                  readOnly
                  placeholder="Output will appear here..."
                  className="min-h-[200px] font-mono text-sm bg-muted"
                />
              )}
            </CardContent>
          </Card>

          {/* Statistics */}
          {output && !error && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Input Length:</span>
                    <div className="text-muted-foreground">{input.length} characters</div>
                  </div>
                  <div>
                    <span className="font-medium">Output Length:</span>
                    <div className="text-muted-foreground">{output.length} characters</div>
                  </div>
                  <div>
                    <span className="font-medium">Size Change:</span>
                    <div className="text-muted-foreground">
                      {mode === 'encode' 
                        ? `+${Math.round((output.length / input.length - 1) * 100)}%`
                        : `${Math.round((output.length / input.length - 1) * 100)}%`
                      }
                    </div>
                  </div>
                  <div>
                    <span className="font-medium">Operation:</span>
                    <div className="text-muted-foreground capitalize">{mode}d</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Information Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <ZapIcon className="h-5 w-5" />
              Fast Processing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Instant encoding and decoding. All processing happens locally in your browser for maximum speed.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <ShieldIcon className="h-5 w-5" />
              Secure & Private
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Your data never leaves your device. Everything is processed client-side for complete privacy.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileIcon className="h-5 w-5" />
              File Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Encode any file type to Base64. Perfect for embedding images, documents, or binary data.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Information */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>What is Base64?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format. 
              It's commonly used in various applications including:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Common Use Cases</h4>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Email attachments (MIME)</li>
                  <li>• Embedding images in HTML/CSS</li>
                  <li>• Data URLs for web assets</li>
                  <li>• API authentication tokens</li>
                  <li>• Storing binary data in JSON</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Key Features</h4>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Safe for text-based protocols</li>
                  <li>• Reversible encoding process</li>
                  <li>• Platform independent</li>
                  <li>• Widely supported standard</li>
                  <li>• No data loss during encoding</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Share */}
      <div className="mt-8">
        <SocialShareButtons
          toolName="Base64 Encoder/Decoder"
          toolDescription="Free online Base64 encoder and decoder tool. Encode text and files to Base64 or decode Base64 strings back to original format"
          toolUrl="https://30tools.com/base64-tool"
          category="developer"
        />
      </div>
    </div>
  );
}

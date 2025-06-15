'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  ArrowLeftIcon, 
  HashIcon, 
  CopyIcon,
  CheckCircleIcon,
  FileTextIcon,
  UploadIcon,
  ShieldIcon,
  ZapIcon,
  EyeIcon,
  RefreshCwIcon
} from 'lucide-react';
import Link from 'next/link';
import SocialShareButtons from '@/components/shared/SocialShareButtons';

export default function HashGeneratorTool() {
  const [inputText, setInputText] = useState('');
  const [hashes, setHashes] = useState({});
  const [copied, setCopied] = useState('');
  const [file, setFile] = useState(null);
  const [isHashing, setIsHashing] = useState(false);

  const hashAlgorithms = [
    { name: 'MD5', description: '128-bit hash, fast but not cryptographically secure' },
    { name: 'SHA-1', description: '160-bit hash, deprecated for security purposes' },
    { name: 'SHA-256', description: '256-bit hash, cryptographically secure' },
    { name: 'SHA-512', description: '512-bit hash, high security applications' },
    { name: 'SHA-3', description: 'Latest SHA standard, quantum-resistant' }
  ];

  const sampleTexts = [
    'Hello, World!',
    'The quick brown fox jumps over the lazy dog',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Password123!@#',
    'This is a sample text for hashing demonstration.'
  ];

  useEffect(() => {
    if (inputText) {
      generateHashes(inputText);
    } else {
      setHashes({});
    }
  }, [inputText]);

  const generateHashes = async (text) => {
    setIsHashing(true);
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    
    try {
      const results = {};

      // MD5 (using crypto-js CDN)
      if (window.CryptoJS) {
        results.MD5 = window.CryptoJS.MD5(text).toString();
        results['SHA-1'] = window.CryptoJS.SHA1(text).toString();
        results['SHA-256'] = window.CryptoJS.SHA256(text).toString();
        results['SHA-512'] = window.CryptoJS.SHA512(text).toString();
        results['SHA-3'] = window.CryptoJS.SHA3(text).toString();
      } else {
        // Fallback to Web Crypto API for supported algorithms
        if (crypto.subtle) {
          try {
            const sha256Buffer = await crypto.subtle.digest('SHA-256', data);
            results['SHA-256'] = Array.from(new Uint8Array(sha256Buffer))
              .map(b => b.toString(16).padStart(2, '0')).join('');

            const sha1Buffer = await crypto.subtle.digest('SHA-1', data);
            results['SHA-1'] = Array.from(new Uint8Array(sha1Buffer))
              .map(b => b.toString(16).padStart(2, '0')).join('');

            const sha512Buffer = await crypto.subtle.digest('SHA-512', data);
            results['SHA-512'] = Array.from(new Uint8Array(sha512Buffer))
              .map(b => b.toString(16).padStart(2, '0')).join('');
          } catch (error) {
            console.error('Error generating hashes:', error);
          }
        }

        // Load crypto-js if not available
        if (!window.CryptoJS) {
          await loadCryptoJS();
          if (window.CryptoJS) {
            results.MD5 = window.CryptoJS.MD5(text).toString();
            results['SHA-1'] = window.CryptoJS.SHA1(text).toString();
            results['SHA-256'] = window.CryptoJS.SHA256(text).toString();
            results['SHA-512'] = window.CryptoJS.SHA512(text).toString();
            results['SHA-3'] = window.CryptoJS.SHA3(text).toString();
          }
        }
      }

      setHashes(results);
    } catch (error) {
      console.error('Error generating hashes:', error);
    } finally {
      setIsHashing(false);
    }
  };

  const loadCryptoJS = () => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js';
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  const copyToClipboard = (text, algorithm) => {
    navigator.clipboard.writeText(text);
    setCopied(algorithm);
    setTimeout(() => setCopied(''), 2000);
  };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        setInputText(content);
      };
      reader.readAsText(uploadedFile);
    }
  };

  const loadSampleText = (sample) => {
    setInputText(sample);
  };

  const clearAll = () => {
    setInputText('');
    setFile(null);
    setHashes({});
  };

  const downloadHashes = () => {
    const content = Object.entries(hashes)
      .map(([algorithm, hash]) => `${algorithm}: ${hash}`)
      .join('\n');
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'hashes.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const compareHashes = (hash1, hash2) => {
    return hash1.toLowerCase() === hash2.toLowerCase();
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <Link href="/">
        <Button variant="ghost" className="mb-4">
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
          <HashIcon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Hash Generator</h1>
          <p className="text-muted-foreground">Generate MD5, SHA-1, SHA-256, SHA-512, and SHA-3 hashes from text or files</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Multiple Algorithms</Badge>
        <Badge variant="secondary">File Support</Badge>
        <Badge variant="secondary">Instant Generation</Badge>
        <Badge variant="secondary">Hash Comparison</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Hash Generator */}
        <div className="lg:col-span-2 space-y-6">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileTextIcon className="h-5 w-5" />
                Input Text
              </CardTitle>
              <CardDescription>
                Enter text to generate hashes or upload a file
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs defaultValue="text" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="text">Text Input</TabsTrigger>
                  <TabsTrigger value="file">File Upload</TabsTrigger>
                </TabsList>

                <TabsContent value="text" className="space-y-4">
                  <Textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Enter your text here to generate hashes..."
                    className="min-h-[150px] font-mono"
                  />
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      {inputText.length} characters
                    </div>
                    <Button onClick={clearAll} variant="outline" size="sm">
                      <RefreshCwIcon className="h-4 w-4 mr-2" />
                      Clear
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="file" className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <UploadIcon className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <Label htmlFor="file-upload" className="cursor-pointer">
                      <span className="text-primary font-medium">Click to upload</span> or drag and drop
                    </Label>
                    <Input
                      id="file-upload"
                      type="file"
                      onChange={handleFileUpload}
                      className="hidden"
                      accept=".txt,.json,.xml,.csv,.log"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Supports text files up to 10MB
                    </p>
                  </div>
                  
                  {file && (
                    <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                      <FileTextIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">{file.name}</span>
                      <span className="text-xs text-muted-foreground">
                        ({(file.size / 1024).toFixed(1)} KB)
                      </span>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Hash Results */}
          {Object.keys(hashes).length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <HashIcon className="h-5 w-5" />
                    Generated Hashes
                  </span>
                  {isHashing && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full"></div>
                      Generating...
                    </div>
                  )}
                </CardTitle>
                <CardDescription>
                  Click to copy any hash value
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {hashAlgorithms.map((algorithm) => {
                  const hash = hashes[algorithm.name];
                  if (!hash) return null;

                  return (
                    <div key={algorithm.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="font-medium">{algorithm.name}</Label>
                          <p className="text-xs text-muted-foreground">
                            {algorithm.description}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(hash, algorithm.name)}
                        >
                          {copied === algorithm.name ? (
                            <CheckCircleIcon className="h-4 w-4 text-green-600" />
                          ) : (
                            <CopyIcon className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      <div className="font-mono text-sm bg-muted p-3 rounded-lg break-all">
                        {hash}
                      </div>
                    </div>
                  );
                })}

                <div className="pt-4 border-t">
                  <Button onClick={downloadHashes} variant="outline" className="w-full">
                    <FileTextIcon className="h-4 w-4 mr-2" />
                    Download All Hashes
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Hash Comparison */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <EyeIcon className="h-5 w-5" />
                Hash Comparison
              </CardTitle>
              <CardDescription>
                Compare two hash values to check if they match
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="hash1">Hash 1</Label>
                  <Input
                    id="hash1"
                    placeholder="Enter first hash..."
                    className="font-mono"
                  />
                </div>
                <div>
                  <Label htmlFor="hash2">Hash 2</Label>
                  <Input
                    id="hash2"
                    placeholder="Enter second hash..."
                    className="font-mono"
                  />
                </div>
              </div>
              
              <Button
                onClick={() => {
                  const hash1 = document.getElementById('hash1').value;
                  const hash2 = document.getElementById('hash2').value;
                  if (hash1 && hash2) {
                    const match = compareHashes(hash1, hash2);
                    alert(match ? 'Hashes match!' : 'Hashes do not match.');
                  }
                }}
                className="w-full"
              >
                Compare Hashes
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Sample Texts */}
          <Card>
            <CardHeader>
              <CardTitle>Sample Texts</CardTitle>
              <CardDescription>
                Click to load sample text for testing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {sampleTexts.map((sample, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto p-3"
                    onClick={() => loadSampleText(sample)}
                  >
                    <div className="truncate text-sm">
                      {sample}
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Algorithm Info */}
          <Card>
            <CardHeader>
              <CardTitle>Hash Algorithms</CardTitle>
              <CardDescription>
                Information about each algorithm
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {hashAlgorithms.map((algorithm, index) => (
                <div key={index} className="space-y-1">
                  <div className="font-medium text-sm">{algorithm.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {algorithm.description}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Security Notice */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldIcon className="h-5 w-5" />
                Security Note
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <strong>• MD5 & SHA-1:</strong> Not recommended for security purposes due to known vulnerabilities.
              </div>
              <div>
                <strong>• SHA-256/512:</strong> Cryptographically secure, widely used in security applications.
              </div>
              <div>
                <strong>• SHA-3:</strong> Latest standard, designed to be quantum-resistant.
              </div>
              <div>
                <strong>• Client-side:</strong> All hashing is done in your browser for privacy.
              </div>
            </CardContent>
          </Card>

          {/* Use Cases */}
          <Card>
            <CardHeader>
              <CardTitle>Common Use Cases</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>• File integrity verification</div>
              <div>• Password storage</div>
              <div>• Digital signatures</div>
              <div>• Data deduplication</div>
              <div>• Blockchain applications</div>
              <div>• Checksum generation</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <ZapIcon className="h-5 w-5" />
              Multiple Algorithms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Support for MD5, SHA-1, SHA-256, SHA-512, and SHA-3 hash algorithms.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <UploadIcon className="h-5 w-5" />
              File Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Hash text files directly or paste content for instant hash generation.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <ShieldIcon className="h-5 w-5" />
              Privacy First
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              All hashing is performed locally in your browser. No data is sent to servers.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Social Share */}
      <div className="mt-8">
        <SocialShareButtons
          toolName="Hash Generator"
          toolDescription="Generate MD5, SHA-1, SHA-256, SHA-512, and SHA-3 hashes from text or files. Free online hash generator tool"
          toolUrl="https://30tools.com/hash-generator"
          category="security"
        />
      </div>
    </div>
  );
}

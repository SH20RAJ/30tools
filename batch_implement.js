const fs = require('fs');
const path = require('path');

// Tool implementations
const toolImplementations = {
  // JWT Decoder Tool
  'JWTDecoderTool.jsx': `'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ArrowLeftIcon, CopyIcon, RefreshCwIcon, Key, CheckCircleIcon, AlertTriangleIcon } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

export default function JWTDecoder() {
  const [jwtToken, setJwtToken] = useState('');
  const [header, setHeader] = useState('');
  const [payload, setPayload] = useState('');
  const [signature, setSignature] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [copied, setCopied] = useState('');

  const decodeJWT = () => {
    try {
      if (!jwtToken.trim()) {
        toast.error('Please enter a JWT token');
        return;
      }

      const parts = jwtToken.split('.');
      if (parts.length !== 3) {
        throw new Error('Invalid JWT format');
      }

      // Decode header
      const decodedHeader = JSON.parse(atob(parts[0].replace(/-/g, '+').replace(/_/g, '/')));
      setHeader(JSON.stringify(decodedHeader, null, 2));

      // Decode payload
      const decodedPayload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
      setPayload(JSON.stringify(decodedPayload, null, 2));

      // Set signature
      setSignature(parts[2]);
      setIsValid(true);

      toast.success('JWT decoded successfully!');
    } catch (error) {
      toast.error('Invalid JWT token format');
      setHeader('');
      setPayload('');
      setSignature('');
      setIsValid(false);
    }
  };

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      toast.success(\`\${type} copied to clipboard!\`);
      setTimeout(() => setCopied(''), 2000);
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const clearAll = () => {
    setJwtToken('');
    setHeader('');
    setPayload('');
    setSignature('');
    setIsValid(null);
  };

  const sampleJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
              <Key className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">JWT Decoder</h1>
              <p className="text-muted-foreground">Decode and analyze JSON Web Tokens</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">JWT Decoding</Badge>
            <Badge variant="secondary">Token Analysis</Badge>
            <Badge variant="secondary">Security</Badge>
            <Badge variant="secondary">Free Forever</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>JWT Token Input</CardTitle>
                <CardDescription>
                  Paste your JWT token below to decode it
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="jwt">JWT Token</Label>
                  <Textarea
                    id="jwt"
                    placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                    value={jwtToken}
                    onChange={(e) => setJwtToken(e.target.value)}
                    className="min-h-[120px] font-mono text-sm"
                  />
                </div>

                <div className="flex gap-2">
                  <Button onClick={decodeJWT} className="flex-1">
                    Decode JWT
                  </Button>
                  <Button onClick={() => setJwtToken(sampleJWT)} variant="outline">
                    Load Sample
                  </Button>
                  <Button onClick={clearAll} variant="outline">
                    <RefreshCwIcon className="h-4 w-4 mr-2" />
                    Clear
                  </Button>
                </div>

                {isValid !== null && (
                  <div className={\`flex items-center gap-2 p-3 rounded-lg \${isValid ? 'bg-green-50 dark:bg-green-950' : 'bg-red-50 dark:bg-red-950'}\`}>
                    {isValid ? (
                      <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertTriangleIcon className="h-5 w-5 text-red-600" />
                    )}
                    <span className={\`text-sm font-medium \${isValid ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}\`}>
                      {isValid ? 'Valid JWT Format' : 'Invalid JWT Format'}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Decoded Header</CardTitle>
                <CardDescription>JWT header contains algorithm and token type</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  value={header}
                  readOnly
                  placeholder="Decoded header will appear here..."
                  className="min-h-[100px] font-mono text-sm bg-muted"
                />
                <Button
                  onClick={() => copyToClipboard(header, 'Header')}
                  disabled={!header}
                  variant="outline"
                  size="sm"
                >
                  <CopyIcon className="h-4 w-4 mr-2" />
                  {copied === 'Header' ? 'Copied!' : 'Copy Header'}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Decoded Payload</CardTitle>
                <CardDescription>JWT payload contains the claims and data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  value={payload}
                  readOnly
                  placeholder="Decoded payload will appear here..."
                  className="min-h-[150px] font-mono text-sm bg-muted"
                />
                <Button
                  onClick={() => copyToClipboard(payload, 'Payload')}
                  disabled={!payload}
                  variant="outline"
                  size="sm"
                >
                  <CopyIcon className="h-4 w-4 mr-2" />
                  {copied === 'Payload' ? 'Copied!' : 'Copy Payload'}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Signature</CardTitle>
                <CardDescription>JWT signature for verification</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-muted rounded-lg font-mono text-sm break-all">
                  {signature || 'Signature will appear here...'}
                </div>
                <Button
                  onClick={() => copyToClipboard(signature, 'Signature')}
                  disabled={!signature}
                  variant="outline"
                  size="sm"
                >
                  <CopyIcon className="h-4 w-4 mr-2" />
                  {copied === 'Signature' ? 'Copied!' : 'Copy Signature'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-green-500" />
                  Decode JWT header and payload
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-green-500" />
                  Extract signature information
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-green-500" />
                  Validate JWT format
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-green-500" />
                  Copy decoded parts separately
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-green-500" />
                  Sample JWT for testing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-green-500" />
                  No server communication
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security & Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">Client-Side Only</h4>
                <p className="text-sm text-muted-foreground">
                  All JWT decoding happens in your browser. Tokens are never sent to our servers.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-1">What is JWT?</h4>
                <p className="text-sm text-muted-foreground">
                  JSON Web Token is a compact, URL-safe means of representing claims securely between two parties.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-1">Verification Note</h4>
                <p className="text-sm text-muted-foreground">
                  This tool only decodes JWTs. Signature verification requires the secret key.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}`,

  // API Tester Tool
  'APITesterTool.jsx': `'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { ArrowLeftIcon, SendIcon, CopyIcon, RefreshCwIcon, Globe, CheckCircleIcon, XCircleIcon } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

export default function APITester() {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');
  const [headers, setHeaders] = useState('{"Content-Type": "application/json"}');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'];

  const sendRequest = async () => {
    if (!url.trim()) {
      toast.error('Please enter a URL');
      return;
    }

    setLoading(true);
    try {
      const requestOptions = {
        method: method,
        headers: headers ? JSON.parse(headers) : {},
      };

      if (method !== 'GET' && method !== 'HEAD' && body) {
        requestOptions.body = body;
      }

      const startTime = Date.now();
      const res = await fetch(url, requestOptions);
      const endTime = Date.now();

      const responseText = await res.text();
      
      setStatus({
        code: res.status,
        statusText: res.statusText,
        time: endTime - startTime,
        headers: Object.fromEntries(res.headers.entries())
      });

      // Try to format JSON response
      try {
        const jsonResponse = JSON.parse(responseText);
        setResponse(JSON.stringify(jsonResponse, null, 2));
      } catch {
        setResponse(responseText);
      }

      toast.success(\`Request completed (\${res.status})\`);
    } catch (error) {
      setStatus({
        code: 0,
        statusText: 'Network Error',
        time: 0,
        headers: {}
      });
      setResponse(\`Error: \${error.message}\`);
      toast.error('Request failed');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success('Response copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy response');
    }
  };

  const clearAll = () => {
    setUrl('');
    setHeaders('{"Content-Type": "application/json"}');
    setBody('');
    setResponse('');
    setStatus(null);
  };

  const loadExample = (type) => {
    const examples = {
      get: {
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'GET',
        headers: '{"Accept": "application/json"}'
      },
      post: {
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'POST',
        headers: '{"Content-Type": "application/json"}',
        body: '{"title": "Test Post", "body": "This is a test", "userId": 1}'
      }
    };

    const example = examples[type];
    setMethod(example.method);
    setUrl(example.url);
    setHeaders(example.headers);
    setBody(example.body || '');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">API Tester</h1>
              <p className="text-muted-foreground">Test REST APIs and HTTP endpoints</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">REST API</Badge>
            <Badge variant="secondary">HTTP Testing</Badge>
            <Badge variant="secondary">Response Viewer</Badge>
            <Badge variant="secondary">Free Forever</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Request Configuration</CardTitle>
                <CardDescription>
                  Configure your API request parameters
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-4 gap-2">
                  <Select value={method} onValueChange={setMethod}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {methods.map((m) => (
                        <SelectItem key={m} value={m}>{m}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Enter API URL..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="col-span-3"
                  />
                </div>

                <Tabs defaultValue="headers">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="headers">Headers</TabsTrigger>
                    <TabsTrigger value="body">Body</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="headers" className="space-y-2">
                    <Label>Request Headers (JSON)</Label>
                    <Textarea
                      placeholder='{"Content-Type": "application/json"}'
                      value={headers}
                      onChange={(e) => setHeaders(e.target.value)}
                      className="min-h-[100px] font-mono text-sm"
                    />
                  </TabsContent>
                  
                  <TabsContent value="body" className="space-y-2">
                    <Label>Request Body</Label>
                    <Textarea
                      placeholder="Enter request body..."
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      className="min-h-[100px] font-mono text-sm"
                    />
                  </TabsContent>
                </Tabs>

                <div className="flex gap-2">
                  <Button onClick={sendRequest} disabled={loading} className="flex-1">
                    <SendIcon className="h-4 w-4 mr-2" />
                    {loading ? 'Sending...' : 'Send Request'}
                  </Button>
                  <Button onClick={clearAll} variant="outline">
                    <RefreshCwIcon className="h-4 w-4 mr-2" />
                    Clear
                  </Button>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Quick Examples</Label>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => loadExample('get')}>
                      GET Example
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => loadExample('post')}>
                      POST Example
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {status && (
              <Card>
                <CardHeader>
                  <CardTitle>Response Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      {status.code >= 200 && status.code < 300 ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircleIcon className="h-5 w-5 text-red-500" />
                      )}
                      <span className="font-mono">
                        {status.code} {status.statusText}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Time: {status.time}ms
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Response</CardTitle>
                <CardDescription>
                  API response data
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  value={response}
                  readOnly
                  placeholder="Response will appear here..."
                  className="min-h-[300px] font-mono text-sm bg-muted"
                />
                <Button
                  onClick={() => copyToClipboard(response)}
                  disabled={!response}
                  variant="outline"
                  size="sm"
                >
                  <CopyIcon className="h-4 w-4 mr-2" />
                  {copied ? 'Copied!' : 'Copy Response'}
                </Button>
              </CardContent>
            </Card>

            {status?.headers && (
              <Card>
                <CardHeader>
                  <CardTitle>Response Headers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 font-mono text-sm">
                    {Object.entries(status.headers).map(([key, value]) => (
                      <div key={key} className="grid grid-cols-3 gap-2">
                        <span className="font-medium">{key}:</span>
                        <span className="col-span-2 break-all">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-green-500" />
                  Support for all HTTP methods
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-green-500" />
                  Custom headers configuration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-green-500" />
                  Request body for POST/PUT requests
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-green-500" />
                  Response time measurement
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-green-500" />
                  Response headers viewer
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-green-500" />
                  JSON response formatting
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Usage Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">CORS Limitations</h4>
                <p className="text-sm text-muted-foreground">
                  Some APIs may block requests due to CORS policy. This is a browser security feature.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-1">Headers Format</h4>
                <p className="text-sm text-muted-foreground">
                  Headers must be valid JSON format with key-value pairs.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-1">Authentication</h4>
                <p className="text-sm text-muted-foreground">
                  Add authentication headers like "Authorization": "Bearer token" in the headers section.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}`,

  // XML Formatter Tool
  'XMLFormatterTool.jsx': `'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { ArrowLeftIcon, CopyIcon, RefreshCwIcon, FileTextIcon, CheckCircleIcon, AlertTriangleIcon } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

export default function XMLFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [indentSize, setIndentSize] = useState([2]);
  const [isValid, setIsValid] = useState(null);
  const [copied, setCopied] = useState(false);

  const formatXML = () => {
    if (!input.trim()) {
      toast.error('Please enter XML to format');
      return;
    }

    try {
      // Basic XML formatting
      const parser = new DOMParser();
      const doc = parser.parseFromString(input, 'application/xml');
      
      // Check for parsing errors
      const errorNode = doc.querySelector('parsererror');
      if (errorNode) {
        throw new Error('Invalid XML');
      }

      const formatted = formatXMLString(input.trim(), indentSize[0]);
      setOutput(formatted);
      setIsValid(true);
      toast.success('XML formatted successfully!');
    } catch (error) {
      setIsValid(false);
      toast.error('Invalid XML format');
    }
  };

  const formatXMLString = (xml, indent) => {
    const PADDING = ' '.repeat(indent);
    const reg = /(>)(<)(\/*)"/g;
    let formatted = xml.replace(reg, '\$1\\r\\n\$2\$3');
    
    let pad = 0;
    return formatted.split('\\r\\n').map(line => {
      let indentLevel = 0;
      if (line.match(/.+<\\/\\w[^>]*>\$/) || line.match(/^<\\/\\w/) || line.match(/^<\\w[^>]*[^/]>\$/)) {
        indentLevel = 0;
      } else if (line.match(/^<\\w[^>]*[^/]>\$/)) {
        indentLevel = 1;
      } else if (line.match(/^<\\/\\w/) && pad !== 0) {
        pad -= 1;
      }
      
      const padding = PADDING.repeat(pad);
      if (indentLevel === 1) pad += 1;
      
      return padding + line;
    }).join('\\n');
  };

  const minifyXML = () => {
    if (!input.trim()) {
      toast.error('Please enter XML to minify');
      return;
    }

    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(input, 'application/xml');
      
      const errorNode = doc.querySelector('parsererror');
      if (errorNode) {
        throw new Error('Invalid XML');
      }

      const minified = input.replace(/\\s+</g, '<').replace(/>\\s+/g, '>').trim();
      setOutput(minified);
      setIsValid(true);
      toast.success('XML minified successfully!');
    } catch (error) {
      setIsValid(false);
      toast.error('Invalid XML format');
    }
  };

  const validateXML = () => {
    if (!input.trim()) {
      toast.error('Please enter XML to validate');
      return;
    }

    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(input, 'application/xml');
      
      const errorNode = doc.querySelector('parsererror');
      if (errorNode) {
        throw new Error('Invalid XML');
      }

      setIsValid(true);
      toast.success('XML is valid!');
    } catch (error) {
      setIsValid(false);
      toast.error('Invalid XML format');
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      toast.success('Formatted XML copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy XML');
    }
  };

  const clearAll = () => {
    setInput('');
    setOutput('');
    setIsValid(null);
  };

  const loadSample = () => {
    const sampleXML = \`<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
<book id="1">
<title>The Great Gatsby</title>
<author>F. Scott Fitzgerald</author>
<price currency="USD">12.99</price>
<published>1925</published>
</book>
<book id="2">
<title>To Kill a Mockingbird</title>
<author>Harper Lee</author>
<price currency="USD">14.99</price>
<published>1960</published>
</book>
</bookstore>\`;
    setInput(sampleXML);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
              <FileTextIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">XML Formatter</h1>
              <p className="text-muted-foreground">Format, minify, and validate XML documents</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">XML Formatting</Badge>
            <Badge variant="secondary">XML Validation</Badge>
            <Badge variant="secondary">Minification</Badge>
            <Badge variant="secondary">Free Forever</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>XML Input</CardTitle>
                <CardDescription>
                  Paste your XML document below
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Enter or paste XML content here..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="min-h-[300px] font-mono text-sm"
                />

                <div className="space-y-3">
                  <Label>Indent Size: {indentSize[0]} spaces</Label>
                  <Slider
                    value={indentSize}
                    onValueChange={setIndentSize}
                    min={1}
                    max={8}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button onClick={formatXML} className="flex-1">
                    Format XML
                  </Button>
                  <Button onClick={minifyXML} variant="outline">
                    Minify
                  </Button>
                  <Button onClick={validateXML} variant="outline">
                    Validate
                  </Button>
                </div>

                <div className="flex gap-2">
                  <Button onClick={loadSample} variant="outline" size="sm">
                    Load Sample
                  </Button>
                  <Button onClick={clearAll} variant="outline" size="sm">
                    <RefreshCwIcon className="h-4 w-4 mr-2" />
                    Clear All
                  </Button>
                </div>

                {isValid !== null && (
                  <div className={\`flex items-center gap-2 p-3 rounded-lg \${isValid ? 'bg-green-50 dark:bg-green-950' : 'bg-red-50 dark:bg-red-950'}\`}>
                    {isValid ? (
                      <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertTriangleIcon className="h-5 w-5 text-red-600" />
                    )}
                    <span className={\`text-sm font-medium \${isValid ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}\`}>
                      {isValid ? 'Valid XML' : 'Invalid XML'}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Formatted Output</CardTitle>
                <CardDescription>
                  Formatted XML will appear here
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  value={output}
                  readOnly
                  placeholder="Formatted XML will appear here..."
                  className="min-h-[300px] font-mono text-sm bg-muted"
                />

                <Button
                  onClick={copyToClipboard}
                  disabled={!output}
                  variant="outline"
                >
                  <CopyIcon className="h-4 w-4 mr-2" />
                  {copied ? 'Copied!' : 'Copy Formatted XML'}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-500" />
                    Format XML with custom indentation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-500" />
                    Minify XML for production use
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-500" />
                    Validate XML syntax
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-500" />
                    Copy formatted output
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-500" />
                    Sample XML for testing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-500" />
                    Client-side processing
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}`
};

// Function to update each tool file
function updateToolFile(toolPath, implementation) {
  const fullPath = path.join(__dirname, 'src/components/tools', toolPath);
  
  try {
    fs.writeFileSync(fullPath, implementation);
    console.log(\`Updated: \${toolPath}\`);
  } catch (error) {
    console.error(\`Error updating \${toolPath}:\`, error.message);
  }
}

// Update tool files
Object.entries(toolImplementations).forEach(([toolPath, implementation]) => {
  if (toolPath === 'JWTDecoderTool.jsx') {
    updateToolFile('developer/JWTDecoderTool.jsx', implementation);
  } else if (toolPath === 'APITesterTool.jsx') {
    updateToolFile('developer/APITesterTool.jsx', implementation);
  } else if (toolPath === 'XMLFormatterTool.jsx') {
    updateToolFile('code/XMLFormatterTool.jsx', implementation);
  }
});

console.log('Batch implementation completed!');
'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { 
  FileCode, 
  CheckCircle, 
  AlertCircle, 
  Copy, 
  Download, 
  RefreshCw,
  Zap,
  Shield,
  Eye,
  BarChart3,
  FileJson,
  Search,
  Minimize2,
  Maximize2
} from 'lucide-react';
import SocialShareButtons from '@/components/shared/SocialShareButtons';

export default function JsonFormatterTool() {
  const [jsonInput, setJsonInput] = useState('');
  const [formattedJson, setFormattedJson] = useState('');
  const [minifiedJson, setMinifiedJson] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [error, setError] = useState('');
  const [stats, setStats] = useState(null);
  const [activeTab, setActiveTab] = useState('formatter');
  const [searchTerm, setSearchTerm] = useState('');
  const [indentSize, setIndentSize] = useState(2);

  const sampleData = {
    simple: `{
  "name": "John Doe",
  "age": 30,
  "city": "New York"
}`,
    complex: `{
  "users": [
    {
      "id": 1,
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "profile": {
        "avatar": "https://example.com/avatar1.jpg",
        "preferences": {
          "theme": "dark",
          "notifications": true,
          "language": "en"
        }
      },
      "roles": ["admin", "user"],
      "metadata": {
        "created_at": "2023-01-15T10:30:00Z",
        "last_login": "2024-06-14T08:45:00Z",
        "login_count": 142
      }
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "email": "bob@example.com",
      "profile": {
        "avatar": null,
        "preferences": {
          "theme": "light",
          "notifications": false,
          "language": "es"
        }
      },
      "roles": ["user"],
      "metadata": {
        "created_at": "2023-03-22T14:20:00Z",
        "last_login": "2024-06-13T16:30:00Z",
        "login_count": 67
      }
    }
  ],
  "pagination": {
    "total": 2,
    "page": 1,
    "per_page": 10,
    "has_more": false
  },
  "api_version": "1.2.3",
  "timestamp": "2024-06-14T12:00:00Z"
}`
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const calculateStats = (original, formatted, minified) => {
    const originalSize = new Blob([original]).size;
    const formattedSize = new Blob([formatted]).size;
    const minifiedSize = new Blob([minified]).size;
    
    return {
      originalSize: formatFileSize(originalSize),
      formattedSize: formatFileSize(formattedSize),
      minifiedSize: formatFileSize(minifiedSize),
      formattedIncrease: formattedSize > originalSize ? 
        `+${Math.round(((formattedSize - originalSize) / originalSize) * 100)}%` : '0%',
      minifiedReduction: originalSize > minifiedSize ? 
        `-${Math.round(((originalSize - minifiedSize) / originalSize) * 100)}%` : '0%'
    };
  };

  const analyzeJson = (jsonString) => {
    try {
      const parsed = JSON.parse(jsonString);
      
      const countProperties = (obj, depth = 0) => {
        let count = { objects: 0, arrays: 0, strings: 0, numbers: 0, booleans: 0, nulls: 0, maxDepth: depth };
        
        if (Array.isArray(obj)) {
          count.arrays++;
          count.maxDepth = Math.max(count.maxDepth, depth);
          obj.forEach(item => {
            const subCount = countProperties(item, depth + 1);
            count.objects += subCount.objects;
            count.arrays += subCount.arrays;
            count.strings += subCount.strings;
            count.numbers += subCount.numbers;
            count.booleans += subCount.booleans;
            count.nulls += subCount.nulls;
            count.maxDepth = Math.max(count.maxDepth, subCount.maxDepth);
          });
        } else if (obj !== null && typeof obj === 'object') {
          count.objects++;
          count.maxDepth = Math.max(count.maxDepth, depth);
          Object.values(obj).forEach(value => {
            const subCount = countProperties(value, depth + 1);
            count.objects += subCount.objects;
            count.arrays += subCount.arrays;
            count.strings += subCount.strings;
            count.numbers += subCount.numbers;
            count.booleans += subCount.booleans;
            count.nulls += subCount.nulls;
            count.maxDepth = Math.max(count.maxDepth, subCount.maxDepth);
          });
        } else if (typeof obj === 'string') {
          count.strings++;
        } else if (typeof obj === 'number') {
          count.numbers++;
        } else if (typeof obj === 'boolean') {
          count.booleans++;
        } else if (obj === null) {
          count.nulls++;
        }
        
        return count;
      };

      return countProperties(parsed);
    } catch {
      return null;
    }
  };

  const validateAndFormat = useCallback(() => {
    if (!jsonInput.trim()) {
      setError('Please enter JSON data to validate and format.');
      setIsValid(false);
      return;
    }

    try {
      const parsed = JSON.parse(jsonInput);
      const formatted = JSON.stringify(parsed, null, indentSize);
      const minified = JSON.stringify(parsed);
      
      setFormattedJson(formatted);
      setMinifiedJson(minified);
      setIsValid(true);
      setError('');
      
      // Calculate statistics
      const statistics = calculateStats(jsonInput, formatted, minified);
      const analysis = analyzeJson(jsonInput);
      setStats({ ...statistics, analysis });
      
    } catch (err) {
      setIsValid(false);
      setError(`Invalid JSON: ${err.message}`);
      setFormattedJson('');
      setMinifiedJson('');
      setStats(null);
    }
  }, [jsonInput, indentSize]);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // In a real app, you'd show a toast notification here
      alert('Copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownload = (content, filename) => {
    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const loadSample = (type) => {
    setJsonInput(sampleData[type]);
    setTimeout(validateAndFormat, 100);
  };

  const clearAll = () => {
    setJsonInput('');
    setFormattedJson('');
    setMinifiedJson('');
    setIsValid(null);
    setError('');
    setStats(null);
    setSearchTerm('');
  };

  const highlightSearchTerm = (text) => {
    if (!searchTerm || !text) return text;
    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Free JSON Formatter & Validator</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Format, validate, and analyze JSON data with detailed statistics and error reporting. 
          Perfect for developers working with APIs and data structures.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Real-time Validation</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Detailed Analytics</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Client-Side Processing</span>
          </div>
        </div>
      </div>

      {/* Input Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCode className="h-5 w-5" />
            JSON Input
          </CardTitle>
          <CardDescription>
            Paste your JSON data below to validate, format, and analyze
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <Button onClick={() => loadSample('simple')} variant="outline" size="sm">
              Load Simple Sample
            </Button>
            <Button onClick={() => loadSample('complex')} variant="outline" size="sm">
              Load Complex Sample
            </Button>
            <Button onClick={clearAll} variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Clear All
            </Button>
            <div className="flex items-center gap-2 ml-auto">
              <Label htmlFor="indent-size" className="text-sm">Indent:</Label>
              <Input
                id="indent-size"
                type="number"
                min="1"
                max="8"
                value={indentSize}
                onChange={(e) => setIndentSize(parseInt(e.target.value) || 2)}
                className="w-16 h-8"
              />
            </div>
          </div>
          
          <Textarea
            placeholder="Paste your JSON data here..."
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="min-h-[300px] font-mono text-sm"
          />
          
          <div className="flex gap-2">
            <Button onClick={validateAndFormat} className="flex-1">
              <CheckCircle className="h-4 w-4 mr-2" />
              Validate & Format JSON
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Error Display */}
      {error && (
        <Alert className="mb-6" variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Success Status */}
      {isValid === true && (
        <Alert className="mb-6" variant="default">
          <CheckCircle className="h-4 w-4 text-primary" />
          <AlertDescription>
            <span className="text-primary font-medium">Valid JSON!</span> Your JSON data is properly formatted and valid.
          </AlertDescription>
        </Alert>
      )}

      {/* Statistics */}
      {stats && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              JSON Analysis & Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {/* File Size Stats */}
              <div className="space-y-3">
                <h4 className="font-medium text-sm">File Sizes</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Original:</span>
                    <span className="font-mono">{stats.originalSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Formatted:</span>
                    <span className="font-mono">{stats.formattedSize} <span className="text-primary">({stats.formattedIncrease})</span></span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Minified:</span>
                    <span className="font-mono">{stats.minifiedSize} <span className="text-primary">({stats.minifiedReduction})</span></span>
                  </div>
                </div>
              </div>

              {/* Structure Stats */}
              {stats.analysis && (
                <>
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Structure</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Objects:</span>
                        <Badge variant="outline">{stats.analysis.objects}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Arrays:</span>
                        <Badge variant="outline">{stats.analysis.arrays}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Max Depth:</span>
                        <Badge variant="outline">{stats.analysis.maxDepth}</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Data Types</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Strings:</span>
                        <Badge variant="outline">{stats.analysis.strings}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Numbers:</span>
                        <Badge variant="outline">{stats.analysis.numbers}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Booleans:</span>
                        <Badge variant="outline">{stats.analysis.booleans}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Nulls:</span>
                        <Badge variant="outline">{stats.analysis.nulls}</Badge>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Output Tabs */}
      {formattedJson && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileJson className="h-5 w-5" />
              Formatted Output
            </CardTitle>
            <CardDescription>
              Choose between formatted (readable) or minified (compressed) output
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex items-center justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="formatter" className="flex items-center gap-2">
                    <Maximize2 className="h-4 w-4" />
                    Formatted
                  </TabsTrigger>
                  <TabsTrigger value="minified" className="flex items-center gap-2">
                    <Minimize2 className="h-4 w-4" />
                    Minified
                  </TabsTrigger>
                </TabsList>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search in JSON..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9 w-40"
                      size="sm"
                    />
                  </div>
                </div>
              </div>

              <TabsContent value="formatter" className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label>Formatted JSON (Human Readable)</Label>
                  <div className="flex gap-2">
                    <Button onClick={() => handleCopy(formattedJson)} variant="outline" size="sm">
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                    <Button onClick={() => handleDownload(formattedJson, 'formatted.json')} variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
                <Textarea
                  value={formattedJson}
                  readOnly
                  className="min-h-[300px] font-mono text-sm bg-muted"
                />
              </TabsContent>

              <TabsContent value="minified" className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label>Minified JSON (Compressed)</Label>
                  <div className="flex gap-2">
                    <Button onClick={() => handleCopy(minifiedJson)} variant="outline" size="sm">
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                    <Button onClick={() => handleDownload(minifiedJson, 'minified.json')} variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
                <Textarea
                  value={minifiedJson}
                  readOnly
                  className="min-h-[150px] font-mono text-sm bg-muted"
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}

      {/* Features Grid */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <CheckCircle className="h-5 w-5" />
              Real-time Validation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Instant JSON validation with detailed error messages and line-by-line analysis.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BarChart3 className="h-5 w-5" />
              Detailed Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Comprehensive statistics including structure analysis, data type counts, and size metrics.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Shield className="h-5 w-5" />
              Secure Processing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              All processing happens locally in your browser. Your JSON data never leaves your device.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Use Cases */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Perfect For</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-3">API Development</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Validate API response formats</li>
                <li>• Format JSON for documentation</li>
                <li>• Debug malformed JSON data</li>
                <li>• Analyze data structure complexity</li>
                <li>• Optimize payload sizes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Data Processing</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Clean up messy JSON files</li>
                <li>• Prepare data for databases</li>
                <li>• Validate configuration files</li>
                <li>• Format export data</li>
                <li>• Analyze data structures</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">What makes JSON invalid?</h4>
              <p className="text-sm text-muted-foreground">
                Common issues include missing quotes around strings, trailing commas, unescaped characters, and mismatched brackets or braces.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">What's the difference between formatted and minified JSON?</h4>
              <p className="text-sm text-muted-foreground">
                Formatted JSON includes indentation and line breaks for readability. Minified JSON removes all unnecessary whitespace to reduce file size.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Is there a size limit for JSON input?</h4>
              <p className="text-sm text-muted-foreground">
                The tool can handle large JSON files, but very large files ( - 10MB) may slow down your browser due to client-side processing.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Can I use this for JSON with comments?</h4>
              <p className="text-sm text-muted-foreground">
                Standard JSON doesn't support comments. This tool validates strict JSON. For JSON with comments (JSONC), remove comments first.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Share */}
      <div className="mt-8">
        <SocialShareButtons
          toolName="JSON Formatter"
          toolDescription="Free online JSON formatter and validator. Format, minify, and validate JSON with syntax highlighting and error detection"
          toolUrl="https://30tools.com/json-formatter"
          category="developer"
        />
      </div>
    </div>
  );
}

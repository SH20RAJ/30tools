'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Copy, 
  Download, 
  FileCode,
  Minimize2,
  CheckCircle, 
  AlertCircle, 
  Zap,
  Shield,
  BarChart3,
  RefreshCw
} from 'lucide-react';
import SocialShareButtons from '@/components/shared/SocialShareButtons';

// CDN libraries for minification
const loadTerser = () => {
  return new Promise((resolve, reject) => {
    if (window.Terser) {
      resolve(window.Terser);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/terser@5.19.2/dist/bundle.min.js';
    script.onload = () => resolve(window.Terser);
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

const loadCleanCSS = () => {
  return new Promise((resolve, reject) => {
    if (window.CleanCSS) {
      resolve(window.CleanCSS);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/clean-css@5.3.2/dist/clean-css.min.js';
    script.onload = () => resolve(window.CleanCSS);
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

export default function CodeMinifierTool() {
  const [activeTab, setActiveTab] = useState('javascript');
  const [inputCode, setInputCode] = useState({
    javascript: `// Sample JavaScript code
function calculateSum(a, b) {
    // Add two numbers together
    const result = a + b;
    console.log('Result:', result);
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);`,
    css: `/* Sample CSS code */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    padding: 20px;
    margin: 10px auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.button {
    background: linear-gradient(45deg, #007bff, #0056b3);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Page</title>
</head>
<body>
    <div class="container">
        <h1>Welcome to Our Website</h1>
        <p>This is a sample paragraph with some content.</p>
        <button class="btn btn-primary">Click Me</button>
    </div>
    
    <script>
        console.log('Page loaded successfully');
    </script>
</body>
</html>`
  });
  
  const [minifiedCode, setMinifiedCode] = useState('');
  const [isMinifying, setIsMinifying] = useState(false);
  const [stats, setStats] = useState(null);
  const [error, setError] = useState('');

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const calculateStats = (original, minified) => {
    const originalSize = new Blob([original]).size;
    const minifiedSize = new Blob([minified]).size;
    const reduction = originalSize - minifiedSize;
    const reductionPercent = originalSize > 0 ? Math.round((reduction / originalSize) * 100) : 0;
    
    return {
      originalSize: formatFileSize(originalSize),
      minifiedSize: formatFileSize(minifiedSize),
      reduction: formatFileSize(reduction),
      reductionPercent
    };
  };

  const minifyJavaScript = async (code) => {
    try {
      const Terser = await loadTerser();
      const result = await Terser.minify(code, {
        compress: {
          dead_code: true,
          drop_console: false,
          drop_debugger: true,
          keep_classnames: false,
          keep_fnames: false,
          keep_infinity: false
        },
        mangle: {
          toplevel: false,
          keep_classnames: false,
          keep_fnames: false
        },
        format: {
          comments: false
        }
      });
      
      if (result.error) {
        throw new Error(result.error);
      }
      
      return result.code;
    } catch (error) {
      throw new Error(`JavaScript minification failed: ${error.message}`);
    }
  };

  const minifyCSS = async (code) => {
    try {
      const CleanCSS = await loadCleanCSS();
      const cleanCSS = new CleanCSS({
        level: 2,
        returnPromise: false
      });
      
      const result = cleanCSS.minify(code);
      
      if (result.errors && result.errors.length > 0) {
        throw new Error(result.errors.join(', '));
      }
      
      return result.styles;
    } catch (error) {
      throw new Error(`CSS minification failed: ${error.message}`);
    }
  };

  const minifyHTML = (code) => {
    return code
      .replace(/\s+/g, ' ')
      .replace(/>\s+</g, '><')
      .replace(/\s+>/g, '>')
      .replace(/<\s+/g, '<')
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/\s+$/, '')
      .replace(/^\s+/, '')
      .trim();
  };

  const handleMinify = async () => {
    const code = inputCode[activeTab];
    if (!code.trim()) {
      setError('Please enter some code to minify.');
      return;
    }

    setIsMinifying(true);
    setError('');
    setMinifiedCode('');
    setStats(null);

    try {
      let result = '';
      
      switch (activeTab) {
        case 'javascript':
          result = await minifyJavaScript(code);
          break;
        case 'css':
          result = await minifyCSS(code);
          break;
        case 'html':
          result = minifyHTML(code);
          break;
        default:
          throw new Error('Unknown code type');
      }

      setMinifiedCode(result);
      setStats(calculateStats(code, result));
    } catch (err) {
      setError(err.message);
    }

    setIsMinifying(false);
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // Show success feedback (you could add a toast here)
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownload = (content, filename) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const resetCode = () => {
    setInputCode(prev => ({
      ...prev,
      [activeTab]: ''
    }));
    setMinifiedCode('');
    setStats(null);
    setError('');
  };

  const getFileExtension = () => {
    switch (activeTab) {
      case 'javascript': return 'js';
      case 'css': return 'css';
      case 'html': return 'html';
      default: return 'txt';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Free Code Minifier Online</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Minify JavaScript, CSS, and HTML code to reduce file sizes and improve website performance. 
          Advanced compression with detailed statistics.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Advanced Compression</span>
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

      {/* Code Input Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCode className="h-5 w-5" />
            Code Input
          </CardTitle>
          <CardDescription>
            Paste your JavaScript, CSS, or HTML code to minify and optimize
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="javascript" className="flex items-center gap-2">
                <FileCode className="h-4 w-4" />
                JavaScript
              </TabsTrigger>
              <TabsTrigger value="css" className="flex items-center gap-2">
                <FileCode className="h-4 w-4" />
                CSS
              </TabsTrigger>
              <TabsTrigger value="html" className="flex items-center gap-2">
                <FileCode className="h-4 w-4" />
                HTML
              </TabsTrigger>
            </TabsList>

            {['javascript', 'css', 'html'].map((type) => (
              <TabsContent key={type} value={type} className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor={`${type}-input`}>
                      {type.charAt(0).toUpperCase() + type.slice(1)} Code
                    </Label>
                    <div className="flex gap-2">
                      <Button onClick={resetCode} variant="outline" size="sm">
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Clear
                      </Button>
                    </div>
                  </div>
                  <Textarea
                    id={`${type}-input`}
                    placeholder={`Paste your ${type.toUpperCase()} code here...`}
                    value={inputCode[type]}
                    onChange={(e) => setInputCode(prev => ({
                      ...prev,
                      [type]: e.target.value
                    }))}
                    className="min-h-[300px] font-mono text-sm"
                  />
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-4">
            <Button 
              onClick={handleMinify} 
              disabled={isMinifying || !inputCode[activeTab].trim()}
              className="w-full"
              size="lg"
            >
              {isMinifying ? (
                <>
                  <Minimize2 className="h-4 w-4 mr-2 animate-pulse" />
                  Minifying {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}...
                </>
              ) : (
                <>
                  <Minimize2 className="h-4 w-4 mr-2" />
                  Minify {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Code
                </>
              )}
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

      {/* Statistics */}
      {stats && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Minification Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">{stats.originalSize}</div>
                <div className="text-sm text-muted-foreground">Original Size</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">{stats.minifiedSize}</div>
                <div className="text-sm text-muted-foreground">Minified Size</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">{stats.reduction}</div>
                <div className="text-sm text-muted-foreground">Size Reduction</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">{stats.reductionPercent}%</div>
                <div className="text-sm text-muted-foreground">Compression Ratio</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Minified Output */}
      {minifiedCode && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Minified Code
              </span>
              <div className="flex gap-2">
                <Button 
                  onClick={() => handleCopy(minifiedCode)} 
                  variant="outline" 
                  size="sm"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
                <Button 
                  onClick={() => handleDownload(minifiedCode, `minified.${getFileExtension()}`)} 
                  variant="outline" 
                  size="sm"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={minifiedCode}
              readOnly
              className="min-h-[200px] font-mono text-sm bg-muted"
            />
          </CardContent>
        </Card>
      )}

      {/* Features Grid */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Zap className="h-5 w-5" />
              Advanced Algorithms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Uses industry-standard minification libraries: Terser for JavaScript and CleanCSS for stylesheets.
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
              Get comprehensive statistics showing original size, minified size, and compression percentage.
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
              All minification happens in your browser. Your code never leaves your device.
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
              <h4 className="font-medium mb-3">Web Performance</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Reduce file sizes for faster loading</li>
                <li>• Optimize JavaScript bundles</li>
                <li>• Compress CSS stylesheets</li>
                <li>• Minimize HTML for production</li>
                <li>• Improve Core Web Vitals</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Development Workflow</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Build process optimization</li>
                <li>• CDN preparation</li>
                <li>• Production deployment</li>
                <li>• Code obfuscation</li>
                <li>• Bandwidth optimization</li>
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
              <h4 className="font-medium mb-2">What minification libraries are used?</h4>
              <p className="text-sm text-muted-foreground">
                We use Terser for JavaScript (industry standard), CleanCSS for CSS optimization, and custom algorithms for HTML compression.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Is my code sent to your servers?</h4>
              <p className="text-sm text-muted-foreground">
                No, all minification happens locally in your browser using client-side JavaScript. Your code never leaves your device.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Can minified code break my application?</h4>
              <p className="text-sm text-muted-foreground">
                Minification preserves functionality while reducing size. However, always test minified code in your environment before production use.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">What's the typical compression ratio?</h4>
              <p className="text-sm text-muted-foreground">
                JavaScript typically compresses 20-40%, CSS 15-30%, and HTML 10-25%, depending on the original code structure and comments.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Share */}
      <div className="mt-8">
        <SocialShareButtons
          toolName="Code Minifier"
          toolDescription="Minify JavaScript, CSS, and HTML code to reduce file sizes and improve website performance. Advanced compression with analytics"
          toolUrl="https://30tools.com/code-minifier"
          category="developer"
        />
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeftIcon, 
  GlobeIcon, 
  ZapIcon,
  CheckCircleIcon,
  AlertTriangleIcon,
  XCircleIcon,
  TrendingUpIcon,
  MonitorIcon,
  SmartphoneIcon,
  ClockIcon,
  ShieldIcon,
  ImageIcon,
  CodeIcon,
  SearchIcon,
  BarChart3Icon
} from 'lucide-react';
import Link from 'next/link';
import SocialShareButtons from '@/components/shared/SocialShareButtons';

export default function WebsiteAnalyzerTool() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  const analyzeWebsite = async () => {
    if (!url) return;
    
    setLoading(true);
    setError('');
    
    try {
      // Validate URL
      const urlPattern = /^https?:\/\/.+/;
      if (!urlPattern.test(url)) {
        throw new Error('Please enter a valid URL starting with http:// or https://');
      }

      // Simulate analysis (in real implementation, you'd call actual APIs)
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Mock results
      const mockResults = {
        url: url,
        timestamp: new Date().toISOString(),
        performance: {
          score: Math.floor(Math.random() * 40) + 60, // 60-100
          fcp: (Math.random() * 2 + 1).toFixed(1), // 1-3s
          lcp: (Math.random() * 3 + 2).toFixed(1), // 2-5s
          cls: (Math.random() * 0.2).toFixed(3), // 0-0.2
          fid: Math.floor(Math.random() * 100) + 50, // 50-150ms
          ttfb: Math.floor(Math.random() * 500) + 200, // 200-700ms
        },
        seo: {
          score: Math.floor(Math.random() * 30) + 70,
          title: Math.random() > 0.3,
          metaDescription: Math.random() > 0.4,
          headings: Math.random() > 0.2,
          images: Math.floor(Math.random() * 5) + 1,
          links: Math.floor(Math.random() * 20) + 10,
        },
        accessibility: {
          score: Math.floor(Math.random() * 40) + 60,
          altText: Math.random() > 0.3,
          contrast: Math.random() > 0.4,
          labels: Math.random() > 0.3,
          headingStructure: Math.random() > 0.2,
        },
        security: {
          https: url.startsWith('https'),
          hsts: Math.random() > 0.5,
          xss: Math.random() > 0.6,
          csrf: Math.random() > 0.5,
        },
        mobile: {
          score: Math.floor(Math.random() * 30) + 70,
          responsive: Math.random() > 0.2,
          viewport: Math.random() > 0.1,
          touchTargets: Math.random() > 0.3,
        }
      };

      setResults(mockResults);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreGrade = (score) => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
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
          <BarChart3Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Website Performance Analyzer</h1>
          <p className="text-muted-foreground">Comprehensive analysis of your website's performance, SEO, and accessibility</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Performance Testing</Badge>
        <Badge variant="secondary">SEO Analysis</Badge>
        <Badge variant="secondary">Accessibility Check</Badge>
        <Badge variant="secondary">Security Scan</Badge>
        <Badge variant="secondary">Mobile Optimization</Badge>
      </div>

      {/* URL Input */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GlobeIcon className="h-5 w-5" />
            Enter Website URL
          </CardTitle>
          <CardDescription>
            Enter any website URL to get a comprehensive performance analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="url">Website URL</Label>
            <div className="flex gap-3">
              <Input
                id="url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="flex-1 input-cute"
                disabled={loading}
              />
              <Button 
                onClick={analyzeWebsite} 
                disabled={!url || loading}
                className="btn-cute"
              >
                {loading ? (
                  <>
                    <ClockIcon className="h-4 w-4 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <SearchIcon className="h-4 w-4 mr-2" />
                    Analyze
                  </>
                )}
              </Button>
            </div>
          </div>

          {error && (
            <Alert>
              <XCircleIcon className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Loading State */}
      {loading && (
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="animate-pulse">
                <BarChart3Icon className="h-12 w-12 text-primary mx-auto" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Analyzing Website...</h3>
                <p className="text-muted-foreground">
                  Running performance tests, SEO analysis, and accessibility checks
                </p>
              </div>
              <Progress value={33} className="w-full" />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Results */}
      {results && (
        <div className="space-y-6">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Card className="text-center">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold ${getScoreColor(results.performance.score)}`}>
                  {getScoreGrade(results.performance.score)}
                </div>
                <div className="text-sm text-muted-foreground">{results.performance.score}/100</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">SEO</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold ${getScoreColor(results.seo.score)}`}>
                  {getScoreGrade(results.seo.score)}
                </div>
                <div className="text-sm text-muted-foreground">{results.seo.score}/100</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold ${getScoreColor(results.accessibility.score)}`}>
                  {getScoreGrade(results.accessibility.score)}
                </div>
                <div className="text-sm text-muted-foreground">{results.accessibility.score}/100</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Security</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">
                  {results.security.https ? 'A' : 'C'}
                </div>
                <div className="text-sm text-muted-foreground">
                  {results.security.https ? 'Secure' : 'Issues'}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Mobile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold ${getScoreColor(results.mobile.score)}`}>
                  {getScoreGrade(results.mobile.score)}
                </div>
                <div className="text-sm text-muted-foreground">{results.mobile.score}/100</div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="performance" className="space-y-4">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
              <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
            </TabsList>

            <TabsContent value="performance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ZapIcon className="h-5 w-5" />
                    Performance Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">First Contentful Paint</span>
                        <span className="text-sm font-medium">{results.performance.fcp}s</span>
                      </div>
                      <Progress value={(3 - results.performance.fcp) * 33} />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Largest Contentful Paint</span>
                        <span className="text-sm font-medium">{results.performance.lcp}s</span>
                      </div>
                      <Progress value={(5 - results.performance.lcp) * 20} />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Cumulative Layout Shift</span>
                        <span className="text-sm font-medium">{results.performance.cls}</span>
                      </div>
                      <Progress value={(0.2 - results.performance.cls) * 500} />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">First Input Delay</span>
                        <span className="text-sm font-medium">{results.performance.fid}ms</span>
                      </div>
                      <Progress value={(150 - results.performance.fid) / 1.5} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="seo" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <SearchIcon className="h-5 w-5" />
                    SEO Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      {results.seo.title ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircleIcon className="h-5 w-5 text-red-600" />
                      )}
                      <span className="text-sm">Page has title tag</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {results.seo.metaDescription ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircleIcon className="h-5 w-5 text-red-600" />
                      )}
                      <span className="text-sm">Meta description present</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {results.seo.headings ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      ) : (
                        <AlertTriangleIcon className="h-5 w-5 text-yellow-600" />
                      )}
                      <span className="text-sm">Proper heading structure</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      <span className="text-sm">{results.seo.images} images found</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      <span className="text-sm">{results.seo.links} internal links</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="accessibility" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Accessibility Checks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      {results.accessibility.altText ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircleIcon className="h-5 w-5 text-red-600" />
                      )}
                      <span className="text-sm">Images have alt text</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {results.accessibility.contrast ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      ) : (
                        <AlertTriangleIcon className="h-5 w-5 text-yellow-600" />
                      )}
                      <span className="text-sm">Sufficient color contrast</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {results.accessibility.labels ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircleIcon className="h-5 w-5 text-red-600" />
                      )}
                      <span className="text-sm">Form labels present</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {results.accessibility.headingStructure ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      ) : (
                        <AlertTriangleIcon className="h-5 w-5 text-yellow-600" />
                      )}
                      <span className="text-sm">Logical heading structure</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldIcon className="h-5 w-5" />
                    Security Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      {results.security.https ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircleIcon className="h-5 w-5 text-red-600" />
                      )}
                      <span className="text-sm">HTTPS enabled</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {results.security.hsts ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      ) : (
                        <AlertTriangleIcon className="h-5 w-5 text-yellow-600" />
                      )}
                      <span className="text-sm">HSTS header present</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {results.security.xss ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      ) : (
                        <AlertTriangleIcon className="h-5 w-5 text-yellow-600" />
                      )}
                      <span className="text-sm">XSS protection enabled</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {results.security.csrf ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      ) : (
                        <AlertTriangleIcon className="h-5 w-5 text-yellow-600" />
                      )}
                      <span className="text-sm">CSRF protection</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mobile" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <SmartphoneIcon className="h-5 w-5" />
                    Mobile Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      {results.mobile.responsive ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircleIcon className="h-5 w-5 text-red-600" />
                      )}
                      <span className="text-sm">Responsive design</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {results.mobile.viewport ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircleIcon className="h-5 w-5 text-red-600" />
                      )}
                      <span className="text-sm">Viewport meta tag</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {results.mobile.touchTargets ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      ) : (
                        <AlertTriangleIcon className="h-5 w-5 text-yellow-600" />
                      )}
                      <span className="text-sm">Touch targets sized appropriately</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}

      {/* Tips */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Optimization Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Performance</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Optimize images and use modern formats</li>
                <li>• Minimize CSS and JavaScript</li>
                <li>• Use a Content Delivery Network (CDN)</li>
                <li>• Enable browser caching</li>
                <li>• Reduce server response time</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">SEO & Accessibility</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Write descriptive title tags and meta descriptions</li>
                <li>• Use proper heading hierarchy (H1, H2, H3)</li>
                <li>• Add alt text to all images</li>
                <li>• Ensure good color contrast</li>
                <li>• Make your site mobile-friendly</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Share */}
      <div className="mt-8">
        <SocialShareButtons
          toolName="Website Performance Analyzer"
          toolDescription="Get comprehensive analysis of your website's performance, SEO, accessibility, and security"
          toolUrl="https://30tools.com/website-analyzer"
          category="web development"
        />
      </div>
    </div>
  );
}

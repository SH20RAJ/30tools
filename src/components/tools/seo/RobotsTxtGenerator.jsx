'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Copy, Download, Plus, Trash2, Robot, Globe, FileText } from 'lucide-react';
import { toast } from 'sonner';

export default function RobotsTxtGenerator() {
  const [rules, setRules] = useState([
    { userAgent: '*', directive: 'Disallow', path: '/admin/' },
    { userAgent: '*', directive: 'Disallow', path: '/private/' }
  ]);
  const [sitemaps, setSitemaps] = useState(['']);
  const [crawlDelay, setCrawlDelay] = useState('');
  const [customRules, setCustomRules] = useState('');
  const [generatedRobots, setGeneratedRobots] = useState('');

  const commonUserAgents = [
    { value: '*', label: 'All Crawlers (*)' },
    { value: 'Googlebot', label: 'Google (Googlebot)' },
    { value: 'Bingbot', label: 'Bing (Bingbot)' },
    { value: 'Slurp', label: 'Yahoo (Slurp)' },
    { value: 'DuckDuckBot', label: 'DuckDuckGo (DuckDuckBot)' },
    { value: 'Baiduspider', label: 'Baidu (Baiduspider)' },
    { value: 'YandexBot', label: 'Yandex (YandexBot)' },
    { value: 'facebookexternalhit', label: 'Facebook' },
    { value: 'Twitterbot', label: 'Twitter' },
    { value: 'LinkedInBot', label: 'LinkedIn' }
  ];

  const commonPaths = [
    '/admin/',
    '/wp-admin/',
    '/private/',
    '/temp/',
    '/cache/',
    '/search/',
    '/*?*',
    '/cgi-bin/',
    '/wp-includes/',
    '/wp-content/plugins/',
    '/checkout/',
    '/cart/',
    '/account/',
    '/login/',
    '/register/'
  ];

  const addRule = () => {
    setRules([...rules, { userAgent: '*', directive: 'Disallow', path: '' }]);
  };

  const removeRule = (index) => {
    const newRules = rules.filter((_, i) => i !== index);
    setRules(newRules);
  };

  const updateRule = (index, field, value) => {
    const newRules = [...rules];
    newRules[index][field] = value;
    setRules(newRules);
  };

  const addSitemap = () => {
    setSitemaps([...sitemaps, '']);
  };

  const removeSitemap = (index) => {
    const newSitemaps = sitemaps.filter((_, i) => i !== index);
    setSitemaps(newSitemaps);
  };

  const updateSitemap = (index, value) => {
    const newSitemaps = [...sitemaps];
    newSitemaps[index] = value;
    setSitemaps(newSitemaps);
  };

  const generateRobotsTxt = () => {
    let robotsContent = '';

    // Group rules by user agent
    const groupedRules = rules.reduce((acc, rule) => {
      if (!rule.userAgent || !rule.path) return acc;
      
      if (!acc[rule.userAgent]) {
        acc[rule.userAgent] = [];
      }
      acc[rule.userAgent].push({ directive: rule.directive, path: rule.path });
      return acc;
    }, {});

    // Generate rules for each user agent
    Object.entries(groupedRules).forEach(([userAgent, agentRules]) => {
      robotsContent += `User-agent: ${userAgent}\n`;
      
      agentRules.forEach(rule => {
        robotsContent += `${rule.directive}: ${rule.path}\n`;
      });
      
      // Add crawl delay if specified and user agent is *
      if (crawlDelay && userAgent === '*') {
        robotsContent += `Crawl-delay: ${crawlDelay}\n`;
      }
      
      robotsContent += '\n';
    });

    // Add custom rules if provided
    if (customRules.trim()) {
      robotsContent += `# Custom Rules\n${customRules.trim()}\n\n`;
    }

    // Add sitemaps
    const validSitemaps = sitemaps.filter(sitemap => sitemap.trim());
    if (validSitemaps.length > 0) {
      validSitemaps.forEach(sitemap => {
        robotsContent += `Sitemap: ${sitemap.trim()}\n`;
      });
    }

    // Remove trailing newlines and ensure proper formatting
    robotsContent = robotsContent.trim();
    
    if (!robotsContent) {
      robotsContent = `User-agent: *
Disallow:

Sitemap: https://yoursite.com/sitemap.xml`;
    }

    setGeneratedRobots(robotsContent);
    toast.success('Robots.txt generated successfully!');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedRobots);
    toast.success('Robots.txt copied to clipboard!');
  };

  const downloadRobotsTxt = () => {
    const blob = new Blob([generatedRobots], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'robots.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Robots.txt downloaded!');
  };

  const useTemplate = (template) => {
    switch (template) {
      case 'ecommerce':
        setRules([
          { userAgent: '*', directive: 'Disallow', path: '/admin/' },
          { userAgent: '*', directive: 'Disallow', path: '/cart/' },
          { userAgent: '*', directive: 'Disallow', path: '/checkout/' },
          { userAgent: '*', directive: 'Disallow', path: '/account/' },
          { userAgent: '*', directive: 'Disallow', path: '/*?*' },
          { userAgent: '*', directive: 'Allow', path: '/' }
        ]);
        setSitemaps(['https://yoursite.com/sitemap.xml']);
        break;
      case 'blog':
        setRules([
          { userAgent: '*', directive: 'Disallow', path: '/wp-admin/' },
          { userAgent: '*', directive: 'Disallow', path: '/wp-includes/' },
          { userAgent: '*', directive: 'Disallow', path: '/cgi-bin/' },
          { userAgent: '*', directive: 'Allow', path: '/wp-content/uploads/' }
        ]);
        setSitemaps(['https://yoursite.com/sitemap.xml', 'https://yoursite.com/sitemap-images.xml']);
        break;
      case 'corporate':
        setRules([
          { userAgent: '*', directive: 'Disallow', path: '/admin/' },
          { userAgent: '*', directive: 'Disallow', path: '/private/' },
          { userAgent: '*', directive: 'Disallow', path: '/temp/' },
          { userAgent: '*', directive: 'Allow', path: '/' }
        ]);
        setSitemaps(['https://yoursite.com/sitemap.xml']);
        break;
    }
    toast.success('Template applied!');
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Configuration Panel */}
        <Card className="border-2 border-orange-500/20 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-900/20">
            <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
              <Robot className="w-6 h-6 text-orange-500" />
              Robots.txt Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* Quick Templates */}
            <div className="space-y-2">
              <Label>Quick Templates</Label>
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => useTemplate('ecommerce')}
                >
                  E-commerce
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => useTemplate('blog')}
                >
                  Blog/WordPress
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => useTemplate('corporate')}
                >
                  Corporate
                </Button>
              </div>
            </div>

            {/* Crawl Rules */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Crawl Rules</Label>
                <Button size="sm" onClick={addRule} variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Rule
                </Button>
              </div>
              
              {rules.map((rule, index) => (
                <div key={index} className="grid grid-cols-12 gap-2 items-end">
                  <div className="col-span-4">
                    <Label className="text-xs">User Agent</Label>
                    <Select 
                      value={rule.userAgent} 
                      onValueChange={(value) => updateRule(index, 'userAgent', value)}
                    >
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {commonUserAgents.map(agent => (
                          <SelectItem key={agent.value} value={agent.value}>
                            {agent.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="col-span-3">
                    <Label className="text-xs">Directive</Label>
                    <Select 
                      value={rule.directive} 
                      onValueChange={(value) => updateRule(index, 'directive', value)}
                    >
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Disallow">Disallow</SelectItem>
                        <SelectItem value="Allow">Allow</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="col-span-4">
                    <Label className="text-xs">Path</Label>
                    <Input
                      value={rule.path}
                      onChange={(e) => updateRule(index, 'path', e.target.value)}
                      placeholder="/path/"
                      className="h-8 text-xs"
                    />
                  </div>
                  
                  <div className="col-span-1">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => removeRule(index)}
                      className="h-8 w-8 p-0"
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
              
              {/* Common paths helper */}
              <div className="text-xs text-muted-foreground">
                <p className="mb-2">Common paths to disallow:</p>
                <div className="flex flex-wrap gap-1">
                  {commonPaths.map(path => (
                    <button
                      key={path}
                      onClick={() => addRule() || updateRule(rules.length, 'path', path)}
                      className="px-2 py-1 bg-muted rounded text-xs hover:bg-muted/80"
                    >
                      {path}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Crawl Delay */}
            <div className="space-y-2">
              <Label htmlFor="crawl-delay">Crawl Delay (seconds)</Label>
              <Input
                id="crawl-delay"
                type="number"
                placeholder="1"
                value={crawlDelay}
                onChange={(e) => setCrawlDelay(e.target.value)}
                className="max-w-24"
              />
              <p className="text-xs text-muted-foreground">Optional: Add delay between requests</p>
            </div>

            {/* Sitemaps */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Sitemap URLs</Label>
                <Button size="sm" onClick={addSitemap} variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Sitemap
                </Button>
              </div>
              
              {sitemaps.map((sitemap, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={sitemap}
                    onChange={(e) => updateSitemap(index, e.target.value)}
                    placeholder="https://yoursite.com/sitemap.xml"
                    className="flex-1"
                  />
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => removeSitemap(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Custom Rules */}
            <div className="space-y-2">
              <Label htmlFor="custom-rules">Custom Rules</Label>
              <Textarea
                id="custom-rules"
                placeholder="Add any custom rules or comments here..."
                value={customRules}
                onChange={(e) => setCustomRules(e.target.value)}
                rows={3}
              />
            </div>

            <Button 
              onClick={generateRobotsTxt} 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            >
              <Robot className="w-4 h-4 mr-2" />
              Generate Robots.txt
            </Button>
          </CardContent>
        </Card>

        {/* Generated Output */}
        <Card className="border-2 border-blue-500/20 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-900/20">
            <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
              <FileText className="w-6 h-6 text-blue-500" />
              Generated Robots.txt
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {generatedRobots ? (
              <div className="space-y-4">
                <div className="flex gap-2 mb-4">
                  <Button onClick={copyToClipboard} size="sm" variant="outline">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                  <Button onClick={downloadRobotsTxt} size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 max-h-96 overflow-auto">
                  <pre className="text-sm whitespace-pre-wrap break-words font-mono">
                    {generatedRobots}
                  </pre>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Implementation Instructions:</h4>
                  <ol className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-decimal list-inside">
                    <li>Save the file as "robots.txt" (without quotes)</li>
                    <li>Upload it to your website's root directory</li>
                    <li>Verify it's accessible at yoursite.com/robots.txt</li>
                    <li>Test using Google Search Console</li>
                  </ol>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <Robot className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Configure your crawl rules and generate your robots.txt file</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
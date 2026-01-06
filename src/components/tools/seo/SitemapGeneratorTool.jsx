"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  MapIcon,
  DownloadIcon,
  PlusIcon,
  XIcon,
  ArrowLeftIcon,
  LinkIcon,
  CalendarIcon,
} from "lucide-react";
import Link from "next/link";

export default function SitemapGeneratorTool() {
  const [urls, setUrls] = useState([
    { url: "", changefreq: "weekly", priority: "0.8" },
  ]);
  const [baseUrl, setBaseUrl] = useState("");
  const [generatedXml, setGeneratedXml] = useState("");

  const addUrl = () => {
    setUrls([...urls, { url: "", changefreq: "weekly", priority: "0.8" }]);
  };

  const removeUrl = (index) => {
    if (urls.length > 1) {
      setUrls(urls.filter((_, i) => i !== index));
    }
  };

  const updateUrl = (index, field, value) => {
    const newUrls = [...urls];
    newUrls[index][field] = value;
    setUrls(newUrls);
  };

  const generateSitemap = () => {
    const validUrls = urls.filter((item) => item.url.trim() !== "");

    if (validUrls.length === 0) {
      alert("Please add at least one URL");
      return;
    }

    const currentDate = new Date().toISOString().split("T")[0];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    validUrls.forEach((item) => {
      const fullUrl = item.url.startsWith("http")
        ? item.url
        : `${baseUrl.replace(/\/$/, "")}/${item.url.replace(/^\//, "")}`;
      xml += `  <url>\n`;
      xml += `    <loc>${fullUrl}</loc>\n`;
      xml += `    <lastmod>${currentDate}</lastmod>\n`;
      xml += `    <changefreq>${item.changefreq}</changefreq>\n`;
      xml += `    <priority>${item.priority}</priority>\n`;
      xml += `  </url>\n`;
    });

    xml += `</urlset>`;

    setGeneratedXml(xml);
  };

  const downloadSitemap = () => {
    if (!generatedXml) return;

    const blob = new Blob([generatedXml], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sitemap.xml";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedXml);
    alert("Sitemap copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
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
              <MapIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">XML Sitemap Generator</h2>
              <p className="text-muted-foreground">
                Generate XML sitemaps for better SEO and search engine indexing
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">SEO Optimized</Badge>
            <Badge variant="secondary">XML Format</Badge>
            <Badge variant="secondary">Search Engine Ready</Badge>
            <Badge variant="secondary">Free Download</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LinkIcon className="h-5 w-5" />
                  Website Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="baseUrl">Base URL (Optional)</Label>
                  <Input
                    id="baseUrl"
                    value={baseUrl}
                    onChange={(e) => setBaseUrl(e.target.value)}
                    placeholder="https://example.com"
                    className="mt-1"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Will be prepended to relative URLs
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>URLs to Include</CardTitle>
                <CardDescription>
                  Add the pages you want to include in your sitemap
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {urls.map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>URL {index + 1}</Label>
                      {urls.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeUrl(index)}
                        >
                          <XIcon className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    <Input
                      value={item.url}
                      onChange={(e) => updateUrl(index, "url", e.target.value)}
                      placeholder="/about-us or https://example.com/page"
                    />

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label className="text-xs">Change Frequency</Label>
                        <select
                          value={item.changefreq}
                          onChange={(e) =>
                            updateUrl(index, "changefreq", e.target.value)
                          }
                          className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                        >
                          <option value="always">Always</option>
                          <option value="hourly">Hourly</option>
                          <option value="daily">Daily</option>
                          <option value="weekly">Weekly</option>
                          <option value="monthly">Monthly</option>
                          <option value="yearly">Yearly</option>
                          <option value="never">Never</option>
                        </select>
                      </div>

                      <div>
                        <Label className="text-xs">Priority</Label>
                        <select
                          value={item.priority}
                          onChange={(e) =>
                            updateUrl(index, "priority", e.target.value)
                          }
                          className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                        >
                          <option value="1.0">1.0 (Highest)</option>
                          <option value="0.9">0.9</option>
                          <option value="0.8">0.8</option>
                          <option value="0.7">0.7</option>
                          <option value="0.6">0.6</option>
                          <option value="0.5">0.5</option>
                          <option value="0.4">0.4</option>
                          <option value="0.3">0.3</option>
                          <option value="0.2">0.2</option>
                          <option value="0.1">0.1 (Lowest)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}

                <Button onClick={addUrl} variant="outline" className="w-full">
                  <PlusIcon className="h-4 w-4 mr-2" />
                  Add Another URL
                </Button>

                <Button onClick={generateSitemap} className="w-full" size="lg">
                  <MapIcon className="h-4 w-4 mr-2" />
                  Generate Sitemap
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DownloadIcon className="h-5 w-5" />
                  Generated Sitemap
                </CardTitle>
              </CardHeader>
              <CardContent>
                {generatedXml ? (
                  <div className="space-y-4">
                    <Textarea
                      value={generatedXml}
                      readOnly
                      className="font-mono text-sm h-64"
                    />

                    <div className="flex gap-2">
                      <Button onClick={downloadSitemap} className="flex-1">
                        <DownloadIcon className="h-4 w-4 mr-2" />
                        Download sitemap.xml
                      </Button>
                      <Button onClick={copyToClipboard} variant="outline">
                        Copy to Clipboard
                      </Button>
                    </div>

                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>
                        • Upload the sitemap.xml file to your website's root
                        directory
                      </p>
                      <p>• Submit the sitemap URL to Google Search Console</p>
                      <p>• Add sitemap location to your robots.txt file</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <MapIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-medium mb-2">
                      No Sitemap Generated
                    </h3>
                    <p className="text-muted-foreground">
                      Add URLs and click "Generate Sitemap" to create your XML
                      sitemap
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* SEO Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  SEO Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Update Frequency</p>
                    <p className="text-muted-foreground">
                      Set appropriate change frequencies based on how often
                      content updates
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Priority Settings</p>
                    <p className="text-muted-foreground">
                      Use higher priorities (0.8-1.0) for important pages like
                      homepage and key content
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Submit to Search Engines</p>
                    <p className="text-muted-foreground">
                      Submit your sitemap to Google Search Console and Bing
                      Webmaster Tools
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

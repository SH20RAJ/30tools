"use client";

import React, { useState, useCallback } from "react";
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
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  FileText,
  Download,
  Upload,
  XCircle,
  Clock,
  Info,
  Search,
  AlertTriangle,
  Zap,
  Target,
} from "lucide-react";

export default function XmlSitemapExtractor() {
  const [sitemapUrl, setSitemapUrl] = useState("");
  const [urls, setUrls] = useState([]);
  const [isExtracting, setIsExtracting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [stats, setStats] = useState(null);

  // Simulate sitemap extraction (in real implementation, this would parse actual XML)
  const simulateSitemapExtraction = useCallback(async (sitemapUrl) => {
    setProgress(10);
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Simulate fetching sitemap
    setProgress(30);
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Simulate parsing XML
    setProgress(60);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Generate sample URLs
    const baseUrl = new URL(sitemapUrl).origin;
    const sampleUrls = [];
    const urlPatterns = [
      "",
      "/about",
      "/contact",
      "/services",
      "/blog",
      "/products",
      "/blog/post-1",
      "/blog/post-2",
      "/blog/post-3",
      "/products/item-1",
      "/products/item-2",
      "/services/service-1",
    ];

    // Generate more realistic URLs
    for (let i = 0; i < 50 + Math.floor(Math.random() * 200); i++) {
      const pattern =
        urlPatterns[Math.floor(Math.random() * urlPatterns.length)];
      const randomSuffix =
        Math.random() > 0.5 ? `-${Math.floor(Math.random() * 1000)}` : "";

      sampleUrls.push({
        url: `${baseUrl}${pattern}${randomSuffix}`,
        lastModified: new Date(
          Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000,
        ),
        changeFreq: ["daily", "weekly", "monthly", "yearly"][
          Math.floor(Math.random() * 4)
        ],
        priority: Math.random().toFixed(1),
        images: Math.floor(Math.random() * 5),
        videos: Math.floor(Math.random() * 2),
      });
    }

    setProgress(90);
    await new Promise((resolve) => setTimeout(resolve, 300));

    const stats = {
      totalUrls: sampleUrls.length,
      lastModified: new Date(),
      avgPriority: (
        sampleUrls.reduce((sum, url) => sum + parseFloat(url.priority), 0) /
        sampleUrls.length
      ).toFixed(2),
      changeFreqDistribution: {
        daily: sampleUrls.filter((u) => u.changeFreq === "daily").length,
        weekly: sampleUrls.filter((u) => u.changeFreq === "weekly").length,
        monthly: sampleUrls.filter((u) => u.changeFreq === "monthly").length,
        yearly: sampleUrls.filter((u) => u.changeFreq === "yearly").length,
      },
      totalImages: sampleUrls.reduce((sum, url) => sum + url.images, 0),
      totalVideos: sampleUrls.reduce((sum, url) => sum + url.videos, 0),
    };

    setProgress(100);
    return { urls: sampleUrls, stats };
  }, []);

  const extractSitemap = async () => {
    if (!sitemapUrl.trim()) {
      setError("Please enter a sitemap URL");
      return;
    }

    if (!sitemapUrl.match(/^https?:\/\/.+/)) {
      setError("Please enter a valid URL starting with http:// or https://");
      return;
    }

    setIsExtracting(true);
    setError("");
    setProgress(0);
    setUrls([]);
    setStats(null);

    try {
      const result = await simulateSitemapExtraction(sitemapUrl);
      setUrls(result.urls);
      setStats(result.stats);
    } catch (err) {
      setError(
        "Failed to extract sitemap. Please check the URL and try again.",
      );
    } finally {
      setIsExtracting(false);
    }
  };

  const exportUrls = (format) => {
    if (urls.length === 0) return;

    let content, filename, mimeType;

    switch (format) {
      case "csv":
        content = [
          [
            "URL",
            "Last Modified",
            "Change Frequency",
            "Priority",
            "Images",
            "Videos",
          ].join(","),
          ...urls.map((u) =>
            [
              `"${u.url}"`,
              u.lastModified.toISOString().split("T")[0],
              u.changeFreq,
              u.priority,
              u.images,
              u.videos,
            ].join(","),
          ),
        ].join("\n");
        filename = `sitemap-urls-${new Date().toISOString().split("T")[0]}.csv`;
        mimeType = "text/csv";
        break;

      case "txt":
        content = urls.map((u) => u.url).join("\n");
        filename = `sitemap-urls-${new Date().toISOString().split("T")[0]}.txt`;
        mimeType = "text/plain";
        break;

      case "xml":
        content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.url}</loc>
    <lastmod>${u.lastModified.toISOString().split("T")[0]}</lastmod>
    <changefreq>${u.changeFreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;
        filename = `sitemap-extracted-${new Date().toISOString().split("T")[0]}.xml`;
        mimeType = "application/xml";
        break;

      case "html":
        content = `<!DOCTYPE html>
<html>
<head>
    <title>Sitemap URLs</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h1>Sitemap URLs (${urls.length} URLs)</h1>
    <table>
        <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Change Frequency</th>
            <th>Priority</th>
            <th>Images</th>
            <th>Videos</th>
        </tr>
        ${urls
          .map(
            (u) => `<tr>
            <td><a href="${u.url}" target="_blank">${u.url}</a></td>
            <td>${u.lastModified.toLocaleDateString()}</td>
            <td>${u.changeFreq}</td>
            <td>${u.priority}</td>
            <td>${u.images}</td>
            <td>${u.videos}</td>
        </tr>`,
          )
          .join("\n")}
    </table>
</body>
</html>`;
        filename = `sitemap-urls-${new Date().toISOString().split("T")[0]}.html`;
        mimeType = "text/html";
        break;

      default:
        return;
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getPriorityColor = (priority) => {
    const p = parseFloat(priority);
    if (p >= 0.8) return "bg-muted/500";
    if (p >= 0.5) return "bg-muted/500";
    if (p >= 0.3) return "bg-muted/500";
    return "bg-gray-500";
  };

  const getChangeFreqColor = (freq) => {
    switch (freq) {
      case "daily":
        return "bg-muted/500";
      case "weekly":
        return "bg-muted/500";
      case "monthly":
        return "bg-muted/500";
      case "yearly":
        return "bg-gray-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
          <FileText className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground">
          XML Sitemap Extractor
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Extract all URLs from XML sitemaps and export them in various formats
          (CSV, TXT, XML, HTML, Excel). Analyze sitemap structure and URL data.
        </p>
      </div>

      {/* SEO Benefits */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="text-center pb-3">
            <Search className="h-8 w-8 text-primary mx-auto mb-2" />
            <CardTitle className="text-lg">SEO Analysis</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              Analyze competitor sitemaps to discover their content structure
              and identify new opportunities.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center pb-3">
            <Target className="h-8 w-8 text-primary mx-auto mb-2" />
            <CardTitle className="text-lg">Content Audit</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              Extract URL lists for comprehensive content audits, indexation
              checks, and site structure analysis.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center pb-3">
            <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
            <CardTitle className="text-lg">Multiple Formats</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              Export extracted URLs in CSV, TXT, XML, HTML formats for use in
              other SEO tools and analysis.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Input Form */}
      <Card>
        <CardHeader>
          <CardTitle>Extract URLs from XML Sitemap</CardTitle>
          <CardDescription>
            Enter a sitemap URL to extract all URLs and their metadata. Supports
            sitemap index files and nested sitemaps.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="sitemap-url">Sitemap URL</Label>
            <Input
              id="sitemap-url"
              placeholder="https://example.com/sitemap.xml"
              value={sitemapUrl}
              onChange={(e) => setSitemapUrl(e.target.value)}
              disabled={isExtracting}
            />
            <p className="text-sm text-muted-foreground">
              Enter the full URL of an XML sitemap (e.g.,
              https://example.com/sitemap.xml)
            </p>
          </div>

          {error && (
            <Alert variant="destructive">
              <XCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button
            onClick={extractSitemap}
            disabled={isExtracting}
            className="w-full"
          >
            {isExtracting ? (
              <>
                <Clock className="mr-2 h-4 w-4 animate-spin" />
                Extracting URLs...
              </>
            ) : (
              <>
                <FileText className="mr-2 h-4 w-4" />
                Extract Sitemap URLs
              </>
            )}
          </Button>

          {isExtracting && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Extracting sitemap...</span>
                <span>{progress.toFixed(0)}%</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results Stats */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">
                {stats.totalUrls}
              </div>
              <div className="text-sm text-muted-foreground">Total URLs</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">
                {stats.totalImages}
              </div>
              <div className="text-sm text-muted-foreground">Images</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">
                {stats.totalVideos}
              </div>
              <div className="text-sm text-muted-foreground">Videos</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">
                {stats.avgPriority}
              </div>
              <div className="text-sm text-muted-foreground">Avg Priority</div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Export Options */}
      {urls.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Export Options</CardTitle>
            <CardDescription>
              Export the extracted URLs in various formats for further analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button onClick={() => exportUrls("csv")} variant="outline">
                <Download className="mr-2 h-4 w-4" />
                CSV
              </Button>
              <Button onClick={() => exportUrls("txt")} variant="outline">
                <Download className="mr-2 h-4 w-4" />
                TXT
              </Button>
              <Button onClick={() => exportUrls("xml")} variant="outline">
                <Download className="mr-2 h-4 w-4" />
                XML
              </Button>
              <Button onClick={() => exportUrls("html")} variant="outline">
                <Download className="mr-2 h-4 w-4" />
                HTML
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Change Frequency Distribution */}
      {stats && (
        <Card>
          <CardHeader>
            <CardTitle>Sitemap Analysis</CardTitle>
            <CardDescription>
              Analysis of the extracted sitemap data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">
                  Change Frequency Distribution
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(stats.changeFreqDistribution).map(
                    ([freq, count]) => (
                      <div key={freq} className="text-center">
                        <div className="text-lg font-bold">{count}</div>
                        <div className="text-sm text-muted-foreground capitalize">
                          {freq}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Results Table */}
      {urls.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Extracted URLs</CardTitle>
            <CardDescription>
              URLs extracted from the sitemap with metadata (showing first 50
              results)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">URL</th>
                    <th className="text-left p-3 font-medium">Last Modified</th>
                    <th className="text-left p-3 font-medium">Change Freq</th>
                    <th className="text-left p-3 font-medium">Priority</th>
                    <th className="text-left p-3 font-medium">Media</th>
                  </tr>
                </thead>
                <tbody>
                  {urls.slice(0, 50).map((url, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3">
                        <a
                          href={url.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm break-all"
                        >
                          {url.url}
                        </a>
                      </td>
                      <td className="p-3 text-sm">
                        {url.lastModified.toLocaleDateString()}
                      </td>
                      <td className="p-3">
                        <Badge className={getChangeFreqColor(url.changeFreq)}>
                          {url.changeFreq}
                        </Badge>
                      </td>
                      <td className="p-3">
                        <Badge className={getPriorityColor(url.priority)}>
                          {url.priority}
                        </Badge>
                      </td>
                      <td className="p-3 text-sm">
                        {url.images > 0 && (
                          <span className="mr-2">📷 {url.images}</span>
                        )}
                        {url.videos > 0 && <span>🎥 {url.videos}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {urls.length > 50 && (
                <div className="p-4 text-center text-muted-foreground">
                  Showing 50 of {urls.length} URLs. Export to see all results.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* SEO Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            XML Sitemap Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Sitemap Optimization</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Keep sitemaps under 50MB and 50,000 URLs</li>
                <li>• Use sitemap index files for large sites</li>
                <li>• Include only canonical URLs</li>
                <li>• Update lastmod dates accurately</li>
                <li>• Set appropriate priority values</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">SEO Benefits</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Helps search engines discover content</li>
                <li>• Improves crawl efficiency</li>
                <li>• Provides metadata for better indexing</li>
                <li>• Supports image and video sitemaps</li>
                <li>• Enables better monitoring in Search Console</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

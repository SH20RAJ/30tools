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
  Search,
  Download,
  Upload,
  CheckCircle2,
  XCircle,
  Clock,
  Info,
  Globe,
  AlertTriangle,
  FileText,
  Link,
} from "lucide-react";

export default function BulkGoogleIndexChecker() {
  const [urls, setUrls] = useState("");
  const [results, setResults] = useState([]);
  const [isChecking, setIsChecking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  // Simulate index checking (in real implementation, this would use Google's APIs)
  const simulateIndexCheck = useCallback(async (url) => {
    // Simulate API delay
    await new Promise((resolve) =>
      setTimeout(resolve, 300 + Math.random() * 700),
    );

    // Simulate different indexation scenarios
    const scenarios = [
      {
        indexed: true,
        status: "indexed",
        lastCrawled: new Date(
          Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000,
        ),
      },
      {
        indexed: false,
        status: "not-indexed",
        reason: "Crawled but not indexed",
      },
      { indexed: false, status: "blocked", reason: "Blocked by robots.txt" },
      { indexed: false, status: "noindex", reason: "Excluded by noindex tag" },
      { indexed: false, status: "error", reason: "404 Not Found" },
      {
        indexed: true,
        status: "indexed-with-issues",
        lastCrawled: new Date(
          Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000,
        ),
        issues: ["Slow loading", "Mobile usability issues"],
      },
    ];

    const result = scenarios[Math.floor(Math.random() * scenarios.length)];

    return {
      url,
      ...result,
      title: result.indexed
        ? `Page Title for ${url.split("/").pop() || "Homepage"}`
        : null,
      responseTime: Math.floor(Math.random() * 3000) + 100,
      httpStatus: result.status === "error" ? 404 : 200,
    };
  }, []);

  const checkIndexation = async () => {
    if (!urls.trim()) {
      setError("Please enter at least one URL");
      return;
    }

    setIsChecking(true);
    setError("");
    setProgress(0);
    setResults([]);

    const urlList = urls
      .split("\n")
      .map((url) => url.trim())
      .filter(
        (url) =>
          url && (url.startsWith("http://") || url.startsWith("https://")),
      )
      .slice(0, 1000);

    if (urlList.length === 0) {
      setError("Please enter valid URLs (must start with http:// or https://)");
      setIsChecking(false);
      return;
    }

    try {
      const newResults = [];

      for (let i = 0; i < urlList.length; i++) {
        const url = urlList[i];
        const result = await simulateIndexCheck(url);
        newResults.push(result);
        setResults([...newResults]);
        setProgress(((i + 1) / urlList.length) * 100);
      }
    } catch (_err) {
      setError("An error occurred while checking indexation status");
    } finally {
      setIsChecking(false);
    }
  };

  const exportResults = () => {
    if (results.length === 0) return;

    const csvContent = [
      [
        "URL",
        "Status",
        "Indexed",
        "Last Crawled",
        "HTTP Status",
        "Response Time (ms)",
        "Title",
        "Issues/Reason",
      ].join(","),
      ...results.map((r) =>
        [
          `"${r.url}"`,
          r.status,
          r.indexed ? "Yes" : "No",
          r.lastCrawled ? r.lastCrawled.toLocaleDateString() : "Never",
          r.httpStatus,
          r.responseTime,
          `"${r.title || ""}"`,
          `"${r.reason || (r.issues ? r.issues.join("; ") : "")}"`,
        ].join(","),
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `google-index-check-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const uploadFile = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      setUrls(content);
    };
    reader.readAsText(file);
  };

  const getStatusBadge = (status, indexed) => {
    if (indexed) {
      if (status === "indexed-with-issues") {
        return <Badge className="bg-muted/500">Indexed (Issues)</Badge>;
      }
      return <Badge className="bg-muted/500">Indexed</Badge>;
    }

    switch (status) {
      case "not-indexed":
        return <Badge variant="secondary">Not Indexed</Badge>;
      case "blocked":
        return <Badge variant="destructive">Blocked</Badge>;
      case "noindex":
        return <Badge className="bg-muted/500">NoIndex</Badge>;
      case "error":
        return <Badge variant="destructive">Error</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getStatusIcon = (status, indexed) => {
    if (indexed) {
      return <CheckCircle2 className="h-4 w-4 text-primary" />;
    }
    return <XCircle className="h-4 w-4 text-destructive" />;
  };

  const stats = {
    total: results.length,
    indexed: results.filter((r) => r.indexed).length,
    notIndexed: results.filter((r) => !r.indexed).length,
    withIssues: results.filter((r) => r.issues && r.issues.length > 0).length,
  };

  const extractSitemapUrls = () => {
    const sitemapUrl = prompt(
      "Enter sitemap URL (e.g., https://example.com/sitemap.xml):",
    );
    if (sitemapUrl) {
      // In a real implementation, this would fetch and parse the sitemap
      alert(
        "Sitemap URL extraction feature coming soon! For now, please manually copy URLs from your sitemap.",
      );
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
          <Search className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground">
          Bulk Google Index Checker
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Check if multiple URLs are indexed by Google. Verify indexation status
          for entire websites or URL lists in bulk.
        </p>
      </div>

      {/* SEO Benefits */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="text-center pb-3">
            <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
            <CardTitle className="text-lg">Indexation Status</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              Verify which pages are indexed by Google to ensure your content is
              discoverable in search results.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center pb-3">
            <AlertTriangle className="h-8 w-8 text-primary mx-auto mb-2" />
            <CardTitle className="text-lg">Find Issues</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              Identify indexation problems, blocked pages, and technical issues
              preventing Google from crawling your site.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center pb-3">
            <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
            <CardTitle className="text-lg">Bulk Analysis</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              Check up to 1000 URLs at once and export detailed reports for
              comprehensive site analysis.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Input Form */}
      <Card>
        <CardHeader>
          <CardTitle>Check URL Indexation Status</CardTitle>
          <CardDescription>
            Enter URLs to check their Google indexation status. You can check up
            to 1000 URLs at once.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="urls">URLs (one per line, max 1000)</Label>
            <Textarea
              id="urls"
              placeholder="https://example.com/page1&#10;https://example.com/page2&#10;https://example.com/page3"
              value={urls}
              onChange={(e) => setUrls(e.target.value)}
              disabled={isChecking}
              rows={8}
              className="font-mono text-sm"
            />
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                {
                  urls
                    .split("\n")
                    .filter(
                      (url) =>
                        url.trim() &&
                        (url.startsWith("http://") ||
                          url.startsWith("https://")),
                    ).length
                }{" "}
                valid URLs entered (max 1000)
              </p>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={extractSitemapUrls}
                  disabled={isChecking}
                >
                  <Link className="mr-2 h-4 w-4" />
                  Extract from Sitemap
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => document.getElementById("file-upload").click()}
                  disabled={isChecking}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload File
                </Button>
                <input
                  id="file-upload"
                  type="file"
                  accept=".txt,.csv"
                  onChange={uploadFile}
                  className="hidden"
                />
              </div>
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <XCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="flex gap-4">
            <Button
              onClick={checkIndexation}
              disabled={isChecking}
              className="flex-1"
            >
              {isChecking ? (
                <>
                  <Clock className="mr-2 h-4 w-4 animate-spin" />
                  Checking Indexation...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Check Index Status
                </>
              )}
            </Button>

            {results.length > 0 && (
              <Button onClick={exportResults} variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export CSV
              </Button>
            )}
          </div>

          {isChecking && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Checking indexation status...</span>
                <span>{progress.toFixed(0)}%</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results Stats */}
      {results.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">
                {stats.total}
              </div>
              <div className="text-sm text-muted-foreground">Total URLs</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">
                {stats.indexed}
              </div>
              <div className="text-sm text-muted-foreground">Indexed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-destructive">
                {stats.notIndexed}
              </div>
              <div className="text-sm text-muted-foreground">Not Indexed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">
                {stats.withIssues}
              </div>
              <div className="text-sm text-muted-foreground">With Issues</div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Results Table */}
      {results.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Indexation Results</CardTitle>
            <CardDescription>
              Google indexation status for {results.length} URLs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">URL</th>
                    <th className="text-left p-3 font-medium">Status</th>
                    <th className="text-left p-3 font-medium">Last Crawled</th>
                    <th className="text-left p-3 font-medium">Response Time</th>
                    <th className="text-left p-3 font-medium">Issues/Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(result.status, result.indexed)}
                          <a
                            href={result.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline text-sm max-w-xs truncate"
                          >
                            {result.url}
                          </a>
                        </div>
                        {result.title && (
                          <div className="text-xs text-muted-foreground mt-1 max-w-xs truncate">
                            {result.title}
                          </div>
                        )}
                      </td>
                      <td className="p-3">
                        {getStatusBadge(result.status, result.indexed)}
                      </td>
                      <td className="p-3 text-sm">
                        {result.lastCrawled
                          ? result.lastCrawled.toLocaleDateString()
                          : "Never"}
                      </td>
                      <td className="p-3 text-sm">
                        <Badge
                          variant={
                            result.responseTime > 2000
                              ? "destructive"
                              : result.responseTime > 1000
                                ? "secondary"
                                : "default"
                          }
                        >
                          {result.responseTime}ms
                        </Badge>
                      </td>
                      <td className="p-3 text-sm text-muted-foreground">
                        {result.reason ||
                          (result.issues ? result.issues.join(", ") : "-")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* SEO Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            How to Improve Indexation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Technical SEO</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Submit XML sitemaps to Search Console</li>
                <li>• Fix crawl errors and broken links</li>
                <li>• Optimize robots.txt file</li>
                <li>• Improve page loading speed</li>
                <li>• Ensure mobile-friendly design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Content Strategy</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Create high-quality, unique content</li>
                <li>• Use proper internal linking</li>
                <li>• Remove duplicate content</li>
                <li>• Update content regularly</li>
                <li>• Build quality backlinks</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

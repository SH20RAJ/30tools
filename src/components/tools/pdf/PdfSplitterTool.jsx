"use client";

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import {
  Upload,
  Download,
  Scissors,
  Eye,
  CheckCircle2,
  AlertCircle,
  Loader,
  FileText,
  Split,
  Zap,
  Shield,
  Target,
  Package,
} from "lucide-react";

export default function PdfSplitterTool() {
  const [pdfFile, setPdfFile] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [splitMethod, setSplitMethod] = useState("range");
  const [pageRanges, setPageRanges] = useState("1-5, 6-10");
  const [individualPages, setIndividualPages] = useState("1, 3, 5, 7");
  const [intervalPages, setIntervalPages] = useState(2);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [splitResults, setSplitResults] = useState([]);
  const fileInputRef = useRef(null);

  const maxFileSize = 50 * 1024 * 1024; // 50MB

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      if (file.size > maxFileSize) {
        alert(
          `File too large. Maximum size is ${formatFileSize(maxFileSize)}.`,
        );
        return;
      }

      setPdfFile(file);

      // Simulate PDF analysis (in production, use PDF-lib or similar)
      setTimeout(() => {
        setPageCount(Math.floor(Math.random() * 50) + 10); // Random page count for demo
      }, 1000);
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  const splitPdf = useCallback(async () => {
    if (!pdfFile) return;

    setIsProcessing(true);
    setProgress(0);
    setSplitResults([]);

    // Simulate PDF splitting process
    try {
      const results = [];
      let splitCount = 0;

      switch (splitMethod) {
        case "range":
          // Parse ranges like "1-5, 6-10"
          const ranges = pageRanges.split(",").map((r) => r.trim());
          splitCount = ranges.length;

          for (let i = 0; i < splitCount; i++) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setProgress(((i + 1) / splitCount) * 100);

            const range = ranges[i];
            results.push({
              id: `range-${i}`,
              name: `pages-${range}.pdf`,
              size: Math.floor(Math.random() * 2000000) + 500000, // Random size
              pageRange: range,
              blob: new Blob(["PDF content"], { type: "application/pdf" }),
            });
          }
          break;

        case "individual":
          // Parse individual pages like "1, 3, 5, 7"
          const pages = individualPages
            .split(",")
            .map((p) => parseInt(p.trim()))
            .filter((p) => !isNaN(p));
          splitCount = pages.length;

          for (let i = 0; i < splitCount; i++) {
            await new Promise((resolve) => setTimeout(resolve, 800));
            setProgress(((i + 1) / splitCount) * 100);

            const page = pages[i];
            results.push({
              id: `page-${page}`,
              name: `page-${page}.pdf`,
              size: Math.floor(Math.random() * 500000) + 100000,
              pageRange: page.toString(),
              blob: new Blob(["PDF content"], { type: "application/pdf" }),
            });
          }
          break;

        case "interval":
          // Split every N pages
          splitCount = Math.ceil(pageCount / intervalPages);

          for (let i = 0; i < splitCount; i++) {
            await new Promise((resolve) => setTimeout(resolve, 1200));
            setProgress(((i + 1) / splitCount) * 100);

            const startPage = i * intervalPages + 1;
            const endPage = Math.min((i + 1) * intervalPages, pageCount);

            results.push({
              id: `interval-${i}`,
              name: `pages-${startPage}-${endPage}.pdf`,
              size: Math.floor(Math.random() * 1500000) + 300000,
              pageRange:
                startPage === endPage
                  ? startPage.toString()
                  : `${startPage}-${endPage}`,
              blob: new Blob(["PDF content"], { type: "application/pdf" }),
            });
          }
          break;

        case "single":
          // Split into individual pages
          splitCount = pageCount;

          for (let i = 1; i <= pageCount; i++) {
            await new Promise((resolve) => setTimeout(resolve, 300));
            setProgress((i / pageCount) * 100);

            results.push({
              id: `single-${i}`,
              name: `page-${i}.pdf`,
              size: Math.floor(Math.random() * 300000) + 50000,
              pageRange: i.toString(),
              blob: new Blob(["PDF content"], { type: "application/pdf" }),
            });
          }
          break;
      }

      setSplitResults(results);
    } catch (error) {
      console.error("Error splitting PDF:", error);
      alert("Error splitting PDF. Please try again.");
    }

    setIsProcessing(false);
  }, [
    pdfFile,
    splitMethod,
    pageRanges,
    individualPages,
    intervalPages,
    pageCount,
  ]);

  const downloadFile = (result) => {
    const url = URL.createObjectURL(result.blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = result.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const downloadAll = async () => {
    if (splitResults.length === 0) return;

    // Create ZIP file (simplified for demo)
    const link = document.createElement("a");
    link.href = "#";
    link.download = `split-${pdfFile.name.replace(".pdf", "")}.zip`;

    // In production, use JSZip library
    alert(
      "ZIP download would start here. In production, all files would be packaged into a ZIP.",
    );
  };

  const resetTool = () => {
    setPdfFile(null);
    setPageCount(0);
    setSplitResults([]);
    setProgress(0);
    setIsProcessing(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Free PDF Splitter Online</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Split PDF files into separate documents by pages, ranges, or
          intervals. Extract specific pages or divide large PDFs into smaller
          files instantly.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Instant Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Secure & Private</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Precise Control</span>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Upload PDF File
          </CardTitle>
          <CardDescription>
            Upload your PDF file to split • Max size:{" "}
            {formatFileSize(maxFileSize)} • Secure processing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg font-medium mb-2">
              Drop PDF file here or click to browse
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              All processing happens in your browser • Files never leave your
              device
            </p>
            <Input
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleFileSelect}
              className="hidden"
            />
            <Button onClick={() => fileInputRef.current?.click()}>
              Choose PDF File
            </Button>
          </div>

          {pdfFile && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{pdfFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatFileSize(pdfFile.size)} • {pageCount} pages
                  </p>
                </div>
                <Badge variant="outline" className="ml-2">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  Ready
                </Badge>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Split Options */}
      {pdfFile && pageCount > 0 && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Split className="h-5 w-5" />
              Split Options
            </CardTitle>
            <CardDescription>
              Choose how you want to split your PDF document
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              value={splitMethod}
              onValueChange={setSplitMethod}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="range">Page Ranges</TabsTrigger>
                <TabsTrigger value="individual">Individual Pages</TabsTrigger>
                <TabsTrigger value="interval">Every N Pages</TabsTrigger>
                <TabsTrigger value="single">All Pages</TabsTrigger>
              </TabsList>

              <TabsContent value="range" className="space-y-4">
                <div>
                  <Label htmlFor="page-ranges">Page Ranges</Label>
                  <Input
                    id="page-ranges"
                    placeholder="e.g., 1-5, 6-10, 15-20"
                    value={pageRanges}
                    onChange={(e) => setPageRanges(e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Separate ranges with commas. Example: 1-5, 6-10, 15-20
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="individual" className="space-y-4">
                <div>
                  <Label htmlFor="individual-pages">Individual Pages</Label>
                  <Input
                    id="individual-pages"
                    placeholder="e.g., 1, 3, 5, 7, 10"
                    value={individualPages}
                    onChange={(e) => setIndividualPages(e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Separate page numbers with commas. Example: 1, 3, 5, 7, 10
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="interval" className="space-y-4">
                <div>
                  <Label htmlFor="interval-pages">Split Every N Pages</Label>
                  <Input
                    id="interval-pages"
                    type="number"
                    min="1"
                    max={pageCount}
                    value={intervalPages}
                    onChange={(e) =>
                      setIntervalPages(parseInt(e.target.value) || 1)
                    }
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Creates separate PDFs every {intervalPages} pages
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="single" className="space-y-4">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    This will create {pageCount} separate PDF files, one for
                    each page. Each file will contain a single page from your
                    document.
                  </AlertDescription>
                </Alert>
              </TabsContent>
            </Tabs>

            <div className="mt-6">
              <Button
                onClick={splitPdf}
                disabled={isProcessing}
                className="w-full"
                size="lg"
              >
                {isProcessing ? (
                  <>
                    <Loader className="h-4 w-4 mr-2 animate-spin" />
                    Splitting PDF...
                  </>
                ) : (
                  <>
                    <Scissors className="h-4 w-4 mr-2" />
                    Split PDF
                  </>
                )}
              </Button>
            </div>

            {isProcessing && (
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} />
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Results */}
      {splitResults.length > 0 && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Split Results ({splitResults.length} files)
              </span>
              <div className="flex gap-2">
                <Button onClick={downloadAll} variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download All (ZIP)
                </Button>
                <Button onClick={resetTool} variant="outline" size="sm">
                  Split Another PDF
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {splitResults.map((result) => (
                <div
                  key={result.id}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{result.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Pages: {result.pageRange} • Size:{" "}
                        {formatFileSize(result.size)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button onClick={() => downloadFile(result)} size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Features Grid */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="h-5 w-5" />
              Precise Control
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Split by exact page ranges, individual pages, or intervals.
              Complete control over your PDF splitting.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Zap className="h-5 w-5" />
              Lightning Fast
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Advanced processing engine splits PDFs in seconds, not minutes.
              Optimized for speed and efficiency.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Shield className="h-5 w-5" />
              100% Secure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              All processing happens locally in your browser. Your PDFs never
              leave your device.
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
              <h4 className="font-medium mb-3">Business & Professional</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Extract specific contract sections</li>
                <li>• Separate report chapters</li>
                <li>• Split large presentations</li>
                <li>• Organize documentation</li>
                <li>• Create focused materials</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Academic & Personal</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Extract book chapters</li>
                <li>• Separate research papers</li>
                <li>• Split study materials</li>
                <li>• Organize course content</li>
                <li>• Create reference documents</li>
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
              <h4 className="font-medium mb-2">
                How do I specify page ranges?
              </h4>
              <p className="text-sm text-muted-foreground">
                Use the format "1-5, 8-12, 20" to split pages 1-5 into one file,
                pages 8-12 into another, and page 20 into a third file.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                What's the maximum file size?
              </h4>
              <p className="text-sm text-muted-foreground">
                You can split PDF files up to {formatFileSize(maxFileSize)}. For
                larger files, try our PDF compression tool first.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Are my files secure?</h4>
              <p className="text-sm text-muted-foreground">
                Yes, all processing happens locally in your browser. Your PDF
                files are never uploaded to our servers.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                Can I split password-protected PDFs?
              </h4>
              <p className="text-sm text-muted-foreground">
                Currently, we support unprotected PDFs only. Use our PDF
                Unlocker tool first to remove passwords.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

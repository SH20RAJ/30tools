"use client";

import { useState, useRef, useCallback } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeftIcon,
  UploadIcon,
  DownloadIcon,
  FileTextIcon,
  TrashIcon,
  GripVerticalIcon,
  AlertCircleIcon,
  CheckCircleIcon,
  RefreshCwIcon,
  FolderIcon,
  PlusIcon,
} from "lucide-react";
import Link from "next/link";

export default function PDFMergerTool() {
  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mergedPdf, setMergedPdf] = useState(null);
  const fileInputRef = useRef(null);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const loadPDFLib = useCallback(async () => {
    if (typeof window !== "undefined" && !window.PDFLib) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js";
      document.head.appendChild(script);

      return new Promise((resolve) => {
        script.onload = () => resolve(window.PDFLib);
      });
    }
    return window.PDFLib;
  }, []);

  const handleFileSelect = async (event) => {
    const selectedFiles = Array.from(event.target.files);
    const validFiles = selectedFiles.filter(
      (file) => file.type === "application/pdf",
    );

    if (validFiles.length !== selectedFiles.length) {
      alert("Please select only PDF files.");
    }

    const newFiles = await Promise.all(
      validFiles.map(async (file, index) => {
        const arrayBuffer = await file.arrayBuffer();

        return {
          id: Date.now() + index,
          file,
          name: file.name,
          size: file.size,
          arrayBuffer,
          pageCount: await getPDFPageCount(arrayBuffer),
          status: "ready",
        };
      }),
    );

    setFiles((prev) => [...prev, ...newFiles]);
  };

  const getPDFPageCount = async (arrayBuffer) => {
    try {
      const PDFLib = await loadPDFLib();
      const pdf = await PDFLib.PDFDocument.load(arrayBuffer);
      return pdf.getPageCount();
    } catch (error) {
      console.error("Error reading PDF:", error);
      return 0;
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const removeFile = (id) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  };

  const clearAllFiles = () => {
    setFiles([]);
    setMergedPdf(null);
  };

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();

    if (draggedIndex === null || draggedIndex === dropIndex) return;

    const newFiles = [...files];
    const draggedFile = newFiles[draggedIndex];

    newFiles.splice(draggedIndex, 1);
    newFiles.splice(dropIndex, 0, draggedFile);

    setFiles(newFiles);
    setDraggedIndex(null);
  };

  const mergePDFs = async () => {
    if (files.length < 2) {
      alert("Please select at least 2 PDF files to merge.");
      return;
    }

    setIsProcessing(true);
    setProgress(0);

    try {
      const PDFLib = await loadPDFLib();
      const mergedPdf = await PDFLib.PDFDocument.create();

      for (let i = 0; i < files.length; i++) {
        setProgress(((i + 1) / files.length) * 90);

        const file = files[i];
        const sourcePdf = await PDFLib.PDFDocument.load(file.arrayBuffer);
        const pageIndices = sourcePdf.getPageIndices();

        const copiedPages = await mergedPdf.copyPages(sourcePdf, pageIndices);
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      setProgress(95);

      const pdfBytes = await mergedPdf.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });

      setMergedPdf({
        blob,
        size: blob.size,
        pageCount: mergedPdf.getPageCount(),
        name: `merged-${files.length}-files.pdf`,
      });

      setProgress(100);
    } catch (error) {
      console.error("Error merging PDFs:", error);
      alert("Error merging PDFs. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadMergedPDF = () => {
    if (mergedPdf) {
      const url = URL.createObjectURL(mergedPdf.blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = mergedPdf.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const totalPages = files.reduce((sum, file) => sum + file.pageCount, 0);
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);

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
              <FileTextIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">
                PDF Merger - Free Online PDF Combiner
              </h1>
              <p className="text-muted-foreground">
                Merge PDF files free, combine multiple PDF documents into one
                file, join PDFs online
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">IlovePDF Alternative</Badge>
            <Badge variant="secondary">PDF Joiner</Badge>
            <Badge variant="secondary">Combine PDF Free</Badge>
            <Badge variant="secondary">Merge PDF Online</Badge>
            <Badge variant="secondary">Free PDF Tools</Badge>
            <Badge variant="secondary">No Registration</Badge>
            <Badge variant="secondary">Secure Processing</Badge>
            <Badge variant="secondary">No Watermarks</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* File Upload & Management */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upload Area */}
            <Card>
              <CardHeader>
                <CardTitle>Upload PDF Files to Merge</CardTitle>
                <CardDescription>
                  Select PDF files to merge online free. Combine multiple PDF
                  documents, join PDF files, and create a single merged PDF.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full h-20 border-dashed border-2"
                    variant="outline"
                  >
                    <div className="text-center">
                      <UploadIcon className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <div className="text-sm">
                        <span className="font-medium">
                          Choose PDF files to merge
                        </span>
                        <span className="text-muted-foreground">
                          {" "}
                          - Free PDF merger, combine PDFs online
                        </span>
                      </div>
                    </div>
                  </Button>

                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,application/pdf"
                    onChange={handleFileSelect}
                    className="hidden"
                  />

                  {files.length > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {files.length} file(s) selected
                      </span>
                      <Button variant="ghost" size="sm" onClick={clearAllFiles}>
                        <TrashIcon className="h-4 w-4 mr-2" />
                        Clear All
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* File List */}
            {files.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>PDF Files to Merge Online</CardTitle>
                  <CardDescription>
                    Drag PDF files to reorder them. Combine PDF documents in
                    your preferred order using our free PDF merger.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {files.map((file, index) => (
                      <div
                        key={file.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, index)}
                        className="flex items-center gap-3 p-3 border rounded-lg cursor-move hover:bg-muted/50 transition-colors"
                      >
                        <GripVerticalIcon className="h-4 w-4 text-muted-foreground" />

                        <div className="flex items-center gap-2 text-primary">
                          <span className="text-sm font-medium bg-primary/10 px-2 py-1 rounded">
                            #{index + 1}
                          </span>
                          <FileTextIcon className="h-4 w-4" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">
                            {file.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {file.pageCount} pages • {formatFileSize(file.size)}
                          </div>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(file.id)}
                        >
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Summary & Actions */}
          <div className="space-y-6">
            {/* Merge Summary */}
            <Card>
              <CardHeader>
                <CardTitle>PDF Merge Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>PDF Files:</span>
                    <span className="font-medium">{files.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Total Pages:</span>
                    <span className="font-medium">{totalPages}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Total Size:</span>
                    <span className="font-medium">
                      {formatFileSize(totalSize)}
                    </span>
                  </div>
                </div>

                <Separator />

                <Button
                  onClick={mergePDFs}
                  disabled={files.length < 2 || isProcessing}
                  className="w-full"
                  size="lg"
                >
                  {isProcessing ? (
                    <>
                      <RefreshCwIcon className="h-4 w-4 mr-2 animate-spin" />
                      Merging PDFs - Free PDF Combiner...
                    </>
                  ) : (
                    <>
                      <FileTextIcon className="h-4 w-4 mr-2" />
                      Merge PDFs Free Online
                    </>
                  )}
                </Button>

                {isProcessing && (
                  <div className="space-y-2">
                    <Progress value={progress} />
                    <div className="text-xs text-muted-foreground text-center">
                      {Math.round(progress)}% complete
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Download Results */}
            {mergedPdf && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-primary" />
                    PDF Merge Complete - Free Download
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>File Name:</span>
                      <span className="font-medium">{mergedPdf.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pages:</span>
                      <span className="font-medium">{mergedPdf.pageCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Size:</span>
                      <span className="font-medium">
                        {formatFileSize(mergedPdf.size)}
                      </span>
                    </div>
                  </div>

                  <Button
                    onClick={downloadMergedPDF}
                    className="w-full"
                    size="lg"
                  >
                    <DownloadIcon className="h-4 w-4 mr-2" />
                    Download Merged PDF Free
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Help & Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Tips for Best PDF Merging Results</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • Drag files to reorder before using{" "}
                    <strong>merge PDF online free</strong>
                  </li>
                  <li>
                    • Original file quality preserved when you{" "}
                    <strong>combine PDF online</strong>
                  </li>
                  <li>
                    • No file size limits for <strong>free PDF merger</strong>{" "}
                    usage
                  </li>
                  <li>
                    • Bookmarks and links maintained in{" "}
                    <strong>merged PDF file</strong>
                  </li>
                  <li>
                    • All <strong>PDF merge</strong> processing happens in your
                    browser
                  </li>
                  <li>
                    • <strong>Join PDF online</strong> securely - no files
                    uploaded to servers
                  </li>
                  <li>
                    • Works better than <strong>SmallPDF merge PDF</strong> - no
                    limitations
                  </li>
                  <li>
                    • <strong>Combine PDF files free</strong> - no watermarks
                    added
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 space-y-12">
          {/* Popular Keywords Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              Free PDF Merger Online - Professional PDF Combiner Tool
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">
                    Merge PDF Files Free
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Our <strong>free PDF merger</strong> lets you combine
                    multiple PDF documents into one file without any cost. Merge
                    PDFs free online with no watermarks or limitations.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">
                      merge pdf files free
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      free pdf merger
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      merge pdfs free
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">
                    Combine PDF Online
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Combine PDF files online</strong> with our
                    professional PDF combiner. Join PDF documents, merge PDF
                    pages, and create comprehensive documents easily.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">
                      combine pdf online
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      pdf combiner
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      join pdf
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">
                    PDF Merge Online Free
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Experience the best <strong>PDF merge online free</strong>{" "}
                    service. Our online PDF merger works like SmallPDF merge,
                    but completely free with unlimited usage.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">
                      pdf merge online
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      online pdf merger
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      pdf joiner
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">
                    Alternative to Adobe PDF Merger
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Skip expensive <strong>Adobe Acrobat merge PDF</strong>{" "}
                    subscriptions. Our tool offers the same functionality as
                    Adobe PDF merger but completely free online.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">
                      adobe pdf merger
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      adobe merge pdf
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      pdf merger free
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">
                    I Love PDF Alternative
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Experience <strong>IlovePDF merge</strong> functionality
                    without limits. Our tool works like
                    <strong>i love pdf merge</strong> but with better
                    performance and no restrictions.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">
                      ilovepdf merge
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      i love pdf
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      love pdf merge
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">
                    Multi-Language Support
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Supports global users: <strong>fusionner PDF</strong>{" "}
                    (French), <strong>combinar PDF</strong> (Spanish),
                    <strong>unir PDF</strong> (Spanish), and{" "}
                    <strong>دمج PDF</strong> (Arabic).
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">
                      fusionner pdf
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      combinar pdf
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      unir pdf
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How to Use */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              How to Merge PDF Files Online Free
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <UploadIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">
                    1. Upload PDF Files to Merge
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Select multiple PDF files from your computer. Our{" "}
                    <strong>free PDF merger</strong> supports unlimited file
                    uploads with no size restrictions. Merge PDF files free
                    download.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <GripVerticalIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">
                    2. Arrange PDF Merge Order
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Drag and drop PDF files to arrange them in your preferred
                    order. <strong>Combine PDF online free</strong>
                    with full control over document sequence and organization.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <DownloadIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">
                    3. Download Merged PDF Free
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Click merge and download your combined PDF file instantly.{" "}
                    <strong>PDF merge online free</strong>
                    with professional quality and no watermarks added.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Use Cases */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              When to Use Our Free PDF Merger Tool
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Business & Professional PDF Merging
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • <strong>Business Reports:</strong> Combine quarterly
                    reports, financial statements, and presentations using our{" "}
                    <strong>free PDF merger online</strong>
                  </li>
                  <li>
                    • <strong>Legal Documents:</strong> Merge contracts,
                    agreements, and supporting documents with professional
                    quality <strong>PDF combiner</strong>
                  </li>
                  <li>
                    • <strong>Project Proposals:</strong> Join cover letters,
                    proposals, and appendices into one comprehensive document
                  </li>
                  <li>
                    • <strong>Invoice Collections:</strong>{" "}
                    <strong>Combine PDF files free</strong> for accounting and
                    billing purposes
                  </li>
                  <li>
                    • <strong>Marketing Materials:</strong> Merge brochures,
                    catalogs, and product sheets using our{" "}
                    <strong>online PDF merger</strong>
                  </li>
                  <li>
                    • <strong>Training Manuals:</strong>{" "}
                    <strong>Merge PDF documents</strong> to create comprehensive
                    training resources
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Academic & Personal Document Merging
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • <strong>Research Papers:</strong> Combine literature
                    reviews, methodology, and results using{" "}
                    <strong>PDF merge online free</strong>
                  </li>
                  <li>
                    • <strong>Study Materials:</strong>{" "}
                    <strong>Join PDF online</strong> to merge lecture notes,
                    assignments, and reference materials
                  </li>
                  <li>
                    • <strong>Application Documents:</strong> Combine resumes,
                    cover letters, and certificates for job applications
                  </li>
                  <li>
                    • <strong>Travel Documents:</strong>{" "}
                    <strong>Merge PDF files online</strong> for tickets,
                    itineraries, and confirmations
                  </li>
                  <li>
                    • <strong>Personal Archives:</strong> Use our{" "}
                    <strong>free PDF merger</strong> to combine family documents
                    and records
                  </li>
                  <li>
                    • <strong>Academic Portfolios:</strong>{" "}
                    <strong>Combine PDF online</strong> to create comprehensive
                    student portfolios
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Comparison Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              Why Choose Our Free PDF Merger Over Alternatives?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">
                    vs SmallPDF Merge PDF
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                      <span>Completely free (no premium required)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                      <span>Unlimited file uploads</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                      <span>No watermarks on merged PDFs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                      <span>Faster processing speed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">
                    vs Adobe Acrobat Merge PDF
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                      <span>No subscription fees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                      <span>Works in any web browser</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                      <span>No software installation required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                      <span>Same professional quality output</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">
                    vs IlovePDF Merge
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                      <span>Better privacy protection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                      <span>No file size limitations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                      <span>Client-side processing only</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                      <span>More intuitive interface</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              Frequently Asked Questions - Free PDF Merger
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    Is it free to merge PDF files online?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! Our <strong>PDF merger free online</strong> service is
                    completely free with no hidden fees, watermarks, or file
                    limits.
                    <strong>Merge PDF files free</strong> without any
                    restrictions or premium subscriptions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    How secure is your free PDF merger?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely secure! Our{" "}
                    <strong>PDF merge online free</strong> tool processes
                    everything in your browser. Your files never leave your
                    device, ensuring complete privacy when you{" "}
                    <strong>combine PDF online</strong>.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    What's the maximum file size for PDF merge?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    There are no file size limits!{" "}
                    <strong>Merge PDF files online</strong> of any size. Our{" "}
                    <strong>free PDF merger</strong>
                    handles large PDFs, hundreds of pages, and high-resolution
                    documents without restrictions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    Does PDF quality decrease after merging?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    No! Our <strong>PDF combiner free</strong> preserves
                    original quality. Text, images, and formatting remain
                    exactly as they were.{" "}
                    <strong>Combine PDF files free</strong> with
                    professional-grade results.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    Can I merge password-protected PDF files?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Currently, password-protected PDFs need to be unlocked
                    before using our <strong>online PDF merger</strong>. We
                    recommend removing passwords first, then using our{" "}
                    <strong>free PDF merge</strong> tool.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    How many PDF files can I merge at once?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    You can <strong>merge unlimited PDF files</strong> in a
                    single operation. Our <strong>PDF joiner</strong>{" "}
                    automatically handles large batches efficiently, whether you
                    need to <strong>join PDF online</strong> for 2 files or 200+
                    files.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    How does this compare to Adobe PDF merger?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our tool offers the same functionality as{" "}
                    <strong>Adobe merge PDF</strong> but completely free. No
                    subscription required like{" "}
                    <strong>Adobe Acrobat merge PDF</strong>, and works directly
                    in your browser.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    Is this better than SmallPDF merge PDF?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! Unlike <strong>SmallPDF merge PDF</strong> which has
                    limitations, our <strong>free PDF merger online</strong>
                    offers unlimited merging, no watermarks, and faster
                    processing speeds completely free.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* SEO Footer */}
          <section className="bg-muted/30 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Professional Free PDF Merger - Merge PDF Files Online Free
            </h2>
            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p className="mb-4">
                <strong>Merge PDF files online free</strong> with our
                professional <strong>PDF merger free online</strong> tool.
                <strong>Combine PDF files free</strong>,{" "}
                <strong>join PDF online</strong>, and create comprehensive
                documents with drag-and-drop simplicity. Perfect for businesses,
                students, and professionals who need to{" "}
                <strong>merge PDF documents</strong>
                quickly and securely. Our <strong>
                  online PDF merger
                </strong>{" "}
                works like <strong>SmallPDF merge PDF</strong> and
                <strong>Adobe PDF merger</strong> but completely free.
              </p>
              <p className="mb-4">
                <strong>Key features of our PDF combiner:</strong>{" "}
                <strong>merge PDFs free</strong> with unlimited file uploads,
                drag-and-drop reordering, preserved bookmarks and metadata, no
                watermarks or branding, client-side processing for privacy,
                support for large files, and professional-quality output. Our{" "}
                <strong>free PDF merger</strong> supports all popular formats
                and works entirely in your browser, ensuring your sensitive
                documents never leave your device when you
                <strong>combine PDF online</strong>.
              </p>
              <p className="mb-4">
                <strong>Popular use cases for PDF merge online free:</strong>{" "}
                <strong>Merge PDF files</strong> for business reports and
                presentations,
                <strong>combine PDF documents</strong> for legal contracts and
                agreements, <strong>join PDF online</strong> for academic papers
                and research materials, consolidate invoices and financial
                documents, merge application materials for job applications, and
                create comprehensive project documentation. Whether you need to{" "}
                <strong>merge two PDFs</strong> or combine hundreds of
                documents, our <strong>PDF joiner</strong> handles it all.
              </p>
              <p>
                <strong>Trusted alternative to premium services:</strong> Skip
                expensive subscriptions and use our{" "}
                <strong>free PDF merge</strong> tool instead of paid services
                like <strong>Adobe Acrobat merge PDF</strong>,{" "}
                <strong>SmallPDF merge</strong>, or{" "}
                <strong>IlovePDF merge PDF</strong>. Our{" "}
                <strong>PDF combiner free</strong> offers the same professional
                results with better privacy protection and unlimited usage.
                <strong>Merge PDF online</strong> with confidence - no
                registration required, no watermarks added, and no file size
                restrictions.
              </p>
            </div>
          </section>

          {/* Hidden SEO Keywords Section */}
          <section className="sr-only">
            <h3>PDF Tool Keywords for Search Engines</h3>
            <p>
              i love pdf extract, online pdf combiner free, merge pdf gratis,
              pdf splitter online free, ilovepdf free, pdf love pdf, pdf join,
              ilovepdf dividir, ilovepdf 結合, ilovepdf عربي, i love to pdf,
              ilovepdf converter, i love my pdf converter, recortar pdf
              ilovepdf, we love pdf, i love pdf free, ilovepdf juntar, ilovepdf
              compresser, fusionner pdf ilovepdf, i live pdf, ilovepdf unire,
              word ke pdf gratis ilovepdf, pdf merge ilovepdf, i ilovepdf,
              ilovepdf edit pdf, pdf i love, i love pdf.com, love my pdf,
              ilovepdf editar pdf, word para pdf ilovepdf, ilovepdf jpg a pdf,
              pdf a imagen ilovepdf, jpg a pdf ilovepdf, i love pdf gratis,
              firmar pdf ilovepdf, pdf i love pdf, pdf a jpg ilovepdf,
              transformar pdf em word ilovepdf, pdf lovers, l love pdf,
              convertir pdf a word ilovepdf gratis, my love pdf, edit pdf
              ilovepdf, ilovepdf convertir, convert word to pdf ilovepdf, pdf
              ilovepdf, www.ilovepdf.com pdf, pdf para word ilovepdf, juntar pdf
              ilovepdf, ilovepdf 日本語, ilovepdf compressed, www.ilovepdf.com
              ​​​​, converter pdf em word ilovepdf, separar pdf ilovepdf,
              ilovepdf pdf to excel, gabung pdf ilovepdf, ilovepdf jpg to pdf,
              ilovepdf editar, ilov, i heart pdf, i love pdf en ligne, love pdf,
              dividir pdf ilovepdf, ilovepdf split, pdf to jpg ilovepdf, jpeg to
              pdf ilovepdf, ilovepdf pdf to jpg, pdf lover, i love pdf français,
              in love pdf, ilovepdf merge pdf, jpg to pdf ilovepdf, pdflove,
              ilovepdf comprimir, word to pdf converter ilovepdf, ilovepdf
              fusionner, da pdf a word ilovepdf, ipdf, convert word to pdf
              online, editar pdf ilovepdf, ilovepdf在线转换, convert pdf to word
              ilovepdf, ilovepdf.com, merge pdf ilovepdf, ilovepdf gratis, word
              to pdf ilovepdf, ilovepdf compress, ilovepdf juntar pdf, ilovepdf
              to word, pdf tools, ilovepdf edit, i love you pdf, comprimir pdf
              ilovepdf, ilovepdf word to pdf, love pdf converter, i love pdf
              merge pdf, yo amo pdf, pdf a word ilovepdf, ilovepdf online, i
              love pdf español, i love pdfs, ilovepdf pdf, ilovepdf español,
              ilovepdf en français, pdf to word converter ilovepdf, ilovepdf
              unir, 我爱pdf, ilovepdf unir pdf, merge pdf i love pdf, de pdf a
              word ilovepdf, i love pdf unir, ilovepdf português, i love pdf
              gratuit, ilovepdf pdf a word, pdf to word ilovepdf, pdf to word
              free, convert pdf to word free, ilovepdf pdf para word, convert to
              pdf, pdf creator, separar pdf, pdf combiner, ilovepdf en español,
              i love pdf converter, ilovepdf在线转换官网, i lovepdf, unir pdf
              ilovepdf, i love, i love my pdf, ilovepdf merge, convert pdf to
              jpg, ilove, i love pdf merge, love, pdf love, pdf merge, pdf
              converter, convert word to pdf, combine pdf, ilovepdf pdf to word,
              pdf merger, i love pdf to word, ilove pdf, unir pdf, convert pdf
              to word, merge pdf, pdf to word converter, pdf, pdf to word, i
              love pdf
            </p>
            <h4>Alternative PDF Tools</h4>
            <p>
              ilovepdf alternative, smallpdf alternative, sejda alternative,
              soda pdf alternative, pdf24 alternative, hipdf alternative,
              easypdf alternative, pdfcandy alternative, lightpdf alternative,
              freepdfconvert alternative, pdf converter ultimate alternative,
              pdfescape alternative, foxit online alternative, nitro pdf
              alternative, adobe acrobat alternative, pdf expert alternative,
              pdfpro alternative
            </p>
            <h4>PDF Tool Features</h4>
            <p>
              free pdf tools online, professional pdf processing, secure pdf
              handling, no watermarks pdf tools, unlimited pdf conversion, fast
              pdf processing, browser based pdf tools, client side pdf
              processing, privacy focused pdf tools, enterprise pdf solutions,
              bulk pdf processing, automated pdf workflows
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

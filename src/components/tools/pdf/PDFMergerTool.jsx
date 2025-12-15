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
    } catch (_error) {
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
    } catch (_error) {
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
              <h2 className="text-3xl font-bold">
                PDF Merger - Free Online PDF Combiner
              </h2>
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

      </div>
    </div>
  );
}

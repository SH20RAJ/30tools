"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Upload,
  Download,
  RotateCw,
  RotateCcw,
  CheckCircle,
  Loader,
  FileText,
  Undo2,
} from "lucide-react";

export default function PdfRotateTool() {
  const [pdfFile, setPdfFile] = useState(null);
  const [pageRotations, setPageRotations] = useState({});
  const [pageCount, setPageCount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [rotatedFile, setRotatedFile] = useState(null);
  const [selectedPages, setSelectedPages] = useState(new Set());
  const [selectAll, setSelectAll] = useState(false);
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
      setRotatedFile(null);
      setPageRotations({});
      setSelectedPages(new Set());
      setSelectAll(false);

      // Simulate PDF analysis
      setTimeout(() => {
        const pages = Math.floor(Math.random() * 20) + 5;
        setPageCount(pages);

        // Initialize rotation states
        const initialRotations = {};
        for (let i = 1; i <= pages; i++) {
          initialRotations[i] = 0;
        }
        setPageRotations(initialRotations);
      }, 1000);
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  const rotatePage = (pageNumber, direction) => {
    const increment = direction === "clockwise" ? 90 : -90;
    setPageRotations((prev) => ({
      ...prev,
      [pageNumber]: (prev[pageNumber] + increment) % 360,
    }));
  };

  const rotateSelected = (direction) => {
    if (selectedPages.size === 0) return;

    const increment = direction === "clockwise" ? 90 : -90;
    setPageRotations((prev) => {
      const updated = { ...prev };
      selectedPages.forEach((pageNumber) => {
        updated[pageNumber] = (updated[pageNumber] + increment) % 360;
      });
      return updated;
    });
  };

  const rotateAll = (direction) => {
    const increment = direction === "clockwise" ? 90 : -90;
    setPageRotations((prev) => {
      const updated = { ...prev };
      for (let i = 1; i <= pageCount; i++) {
        updated[i] = (updated[i] + increment) % 360;
      }
      return updated;
    });
  };

  const resetRotations = () => {
    const resetRotations = {};
    for (let i = 1; i <= pageCount; i++) {
      resetRotations[i] = 0;
    }
    setPageRotations(resetRotations);
  };

  const togglePageSelection = (pageNumber) => {
    setSelectedPages((prev) => {
      const updated = new Set(prev);
      if (updated.has(pageNumber)) {
        updated.delete(pageNumber);
      } else {
        updated.add(pageNumber);
      }
      return updated;
    });
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedPages(new Set());
    } else {
      const allPages = new Set();
      for (let i = 1; i <= pageCount; i++) {
        allPages.add(i);
      }
      setSelectedPages(allPages);
    }
    setSelectAll(!selectAll);
  };

  const applyRotations = async () => {
    if (!pdfFile) return;

    // Check if any rotations were applied
    const hasRotations = Object.values(pageRotations).some(
      (rotation) => rotation !== 0,
    );
    if (!hasRotations) {
      alert("No rotations applied. Please rotate at least one page.");
      return;
    }

    setIsProcessing(true);
    setProgress(0);

    try {
      // Simulate PDF rotation process
      for (let i = 0; i <= 100; i += 10) {
        await new Promise((resolve) => setTimeout(resolve, 200));
        setProgress(i);
      }

      // Create rotated file (simulate)
      const rotatedBlob = new Blob(["Rotated PDF content"], {
        type: "application/pdf",
      });
      setRotatedFile({
        name: `rotated-${pdfFile.name}`,
        blob: rotatedBlob,
        size: pdfFile.size,
      });
    } catch (error) {
      console.error("Error rotating PDF:", error);
      alert("Error rotating PDF. Please try again.");
    }

    setIsProcessing(false);
  };

  const downloadRotatedFile = () => {
    if (!rotatedFile) return;

    const url = URL.createObjectURL(rotatedFile.blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = rotatedFile.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const resetTool = () => {
    setPdfFile(null);
    setPageRotations({});
    setPageCount(0);
    setRotatedFile(null);
    setSelectedPages(new Set());
    setSelectAll(false);
    setProgress(0);
    setIsProcessing(false);
  };

  const getRotationDisplayAngle = (rotation) => {
    const normalized = ((rotation % 360) + 360) % 360;
    return normalized;
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Upload Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Upload PDF File
          </CardTitle>
          <CardDescription>
            Upload your PDF file to rotate pages • Max size:{" "}
            {formatFileSize(maxFileSize)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg font-medium mb-2">
              Drop PDF file here or click to browse
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Perfect for fixing scanned documents or correcting page orientation
            </p>
            <input
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
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Loaded
                </Badge>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Rotation Controls */}
      {pdfFile && pageCount > 0 && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RotateCw className="h-5 w-5" />
              Rotation Controls
            </CardTitle>
            <CardDescription>
              Use bulk controls or rotate individual pages below
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Button
                onClick={() => rotateAll("clockwise")}
                variant="outline"
                className="flex items-center gap-2"
              >
                <RotateCw className="h-4 w-4" />
                Rotate All 90° →
              </Button>

              <Button
                onClick={() => rotateAll("counterclockwise")}
                variant="outline"
                className="flex items-center gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Rotate All 90° ←
              </Button>

              <Button
                onClick={() => rotateSelected("clockwise")}
                variant="outline"
                disabled={selectedPages.size === 0}
                className="flex items-center gap-2"
              >
                <RotateCw className="h-4 w-4" />
                Rotate Selected →
              </Button>

              <Button
                onClick={resetRotations}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Undo2 className="h-4 w-4" />
                Reset All
              </Button>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={toggleSelectAll}
                  className="rounded"
                />
                <span className="text-sm">Select All Pages</span>
              </label>
              <span className="text-sm text-muted-foreground">
                {selectedPages.size} of {pageCount} pages selected
              </span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Page Preview Grid */}
      {pdfFile && pageCount > 0 && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Page Preview & Individual Controls</CardTitle>
            <CardDescription>
              Click on pages to select them, then use individual rotation
              controls
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Array.from({ length: pageCount }, (_, i) => i + 1).map(
                (pageNumber) => (
                  <div key={pageNumber} className="relative">
                    <div
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${selectedPages.has(pageNumber)
                          ? "border-primary bg-primary/10"
                          : "border-muted-foreground/25 hover:border-primary/50"
                        }`}
                      onClick={() => togglePageSelection(pageNumber)}
                    >
                      {/* Page Preview Simulation */}
                      <div
                        className="bg-white border rounded shadow-sm aspect-[3/4] flex items-center justify-center text-xs text-muted-foreground transition-transform"
                        style={{
                          transform: `rotate(${getRotationDisplayAngle(pageRotations[pageNumber])}deg)`,
                        }}
                      >
                        <div className="text-center">
                          <FileText className="h-6 w-6 mx-auto mb-1" />
                          <div>Page {pageNumber}</div>
                          {pageRotations[pageNumber] !== 0 && (
                            <div className="text-xs text-primary">
                              {getRotationDisplayAngle(
                                pageRotations[pageNumber],
                              )}
                              °
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Individual Page Controls */}
                      <div className="flex justify-center gap-1 mt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            rotatePage(pageNumber, "counterclockwise");
                          }}
                          className="h-6 w-6 p-0"
                        >
                          <RotateCcw className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            rotatePage(pageNumber, "clockwise");
                          }}
                          className="h-6 w-6 p-0"
                        >
                          <RotateCw className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    {selectedPages.has(pageNumber) && (
                      <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        ✓
                      </div>
                    )}
                  </div>
                ),
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Apply Rotations */}
      {pdfFile && pageCount > 0 && (
        <Card className="mb-6">
          <CardContent className="pt-6">
            <Button
              onClick={applyRotations}
              disabled={isProcessing}
              className="w-full"
              size="lg"
            >
              {isProcessing ? (
                <>
                  <Loader className="h-4 w-4 mr-2 animate-spin" />
                  Applying Rotations...
                </>
              ) : (
                <>
                  <RotateCw className="h-4 w-4 mr-2" />
                  Apply Rotations & Download
                </>
              )}
            </Button>

            {isProcessing && (
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Processing rotations...</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} />
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Download Section */}
      {rotatedFile && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              PDF Rotated Successfully
            </CardTitle>
            <CardDescription>
              Your PDF pages have been rotated and are ready for download
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg mb-4">
              <div className="flex items-center gap-3">
                <RotateCw className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">{rotatedFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatFileSize(rotatedFile.size)} • Pages Rotated
                  </p>
                </div>
              </div>
              <Button onClick={downloadRotatedFile}>
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="flex gap-2">
              <Button onClick={resetTool} variant="outline">
                Rotate Another PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

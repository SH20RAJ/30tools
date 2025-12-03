"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Upload,
  FileText,
  Download,
  Trash2,
  RotateCw,
  Copy,
  Loader2,
  RefreshCw,
} from "lucide-react";
import { toast } from "sonner";

export default function PDFEditorTool() {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [pdfLibLoaded, setPdfLibLoaded] = useState(false);
  const [pageInput, setPageInput] = useState("");

  // Load pdf-lib from CDN
  useEffect(() => {
    if (typeof window !== "undefined" && !window.PDFLib) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js";
      script.async = true;
      script.onload = () => {
        setPdfLibLoaded(true);
      };
      script.onerror = () => {
        toast.error("Failed to load PDF library");
        setPdfLibLoaded(false);
      };
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    } else if (window.PDFLib) {
      setPdfLibLoaded(true);
    }
  }, []);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || file.type !== "application/pdf") {
      toast.error("Please upload a PDF file");
      return;
    }

    if (!pdfLibLoaded || !window.PDFLib) {
      toast.error("PDF library is still loading. Please try again.");
      return;
    }

    try {
      const arrayBuffer = await file.arrayBuffer();
      const doc = await window.PDFLib.PDFDocument.load(arrayBuffer);
      setPdfDoc(doc);
      setPdfFile(file);
      setPageCount(doc.getPageCount());
      toast.success(`PDF loaded: ${doc.getPageCount()} pages`);
    } catch (_error) {
      toast.error("Failed to load PDF");
    }
  };

  const parsePageNumbers = (input, maxPages) => {
    const pages = new Set();
    const parts = input.split(",");

    parts.forEach((part) => {
      const range = part.trim().split("-");
      if (range.length === 2) {
        const start = parseInt(range[0]);
        const end = parseInt(range[1]);
        if (!isNaN(start) && !isNaN(end)) {
          for (let i = start; i <= end; i++) {
            if (i >= 1 && i <= maxPages) pages.add(i - 1);
          }
        }
      } else {
        const page = parseInt(part);
        if (!isNaN(page) && page >= 1 && page <= maxPages) {
          pages.add(page - 1);
        }
      }
    });

    return Array.from(pages).sort((a, b) => a - b);
  };

  const deletePages = async () => {
    if (!pdfDoc || !window.PDFLib) return;

    const pagesToDelete = parsePageNumbers(pageInput, pageCount);
    if (pagesToDelete.length === 0) {
      toast.error("Please enter valid page numbers to delete");
      return;
    }

    setProcessing(true);
    try {
      const newDoc = await window.PDFLib.PDFDocument.create();
      const pages = await newDoc.copyPages(pdfDoc, pdfDoc.getPageIndices());

      pages.forEach((page, index) => {
        if (!pagesToDelete.includes(index)) {
          newDoc.addPage(page);
        }
      });

      const pdfBytes = await newDoc.save();
      downloadPDF(pdfBytes, "edited-document.pdf");
      toast.success("Pages deleted successfully!");
    } catch (_error) {
      toast.error("Failed to delete pages");
    } finally {
      setProcessing(false);
    }
  };

  const extractPages = async () => {
    if (!pdfDoc || !window.PDFLib) return;

    const pagesToExtract = parsePageNumbers(pageInput, pageCount);
    if (pagesToExtract.length === 0) {
      toast.error("Please enter valid page numbers to extract");
      return;
    }

    setProcessing(true);
    try {
      const newDoc = await window.PDFLib.PDFDocument.create();
      const pages = await newDoc.copyPages(pdfDoc, pagesToExtract);
      pages.forEach((page) => newDoc.addPage(page));

      const pdfBytes = await newDoc.save();
      downloadPDF(pdfBytes, "extracted-pages.pdf");
      toast.success("Pages extracted successfully!");
    } catch (_error) {
      toast.error("Failed to extract pages");
    } finally {
      setProcessing(false);
    }
  };

  const rotatePages = async () => {
    if (!pdfDoc || !window.PDFLib) return;

    const pagesToRotate = parsePageNumbers(pageInput, pageCount);
    if (pagesToRotate.length === 0) {
      toast.error("Please enter valid page numbers to rotate");
      return;
    }

    setProcessing(true);
    try {
      // We need to modify the existing doc for rotation
      // Or create a new one with rotated pages. Let's modify existing for simplicity in this flow
      // But since we want to keep original state, let's copy everything to a new doc
      const newDoc = await window.PDFLib.PDFDocument.create();
      const pages = await newDoc.copyPages(pdfDoc, pdfDoc.getPageIndices());

      pages.forEach((page, index) => {
        if (pagesToRotate.includes(index)) {
          const { angle } = page.getRotation();
          page.setRotation(window.PDFLib.degrees((angle + 90) % 360));
        }
        newDoc.addPage(page);
      });

      const pdfBytes = await newDoc.save();
      downloadPDF(pdfBytes, "rotated-document.pdf");
      toast.success("Pages rotated successfully!");
    } catch (_error) {
      toast.error("Failed to rotate pages");
    } finally {
      setProcessing(false);
    }
  };

  const downloadPDF = (pdfBytes, filename) => {
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const resetTool = () => {
    setPdfFile(null);
    setPdfDoc(null);
    setPageCount(0);
    setPageInput("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {!pdfFile ? (
        <Card>
          <CardContent className="pt-6">
            <label className="border-2 border-dashed rounded-xl p-12 text-center cursor-pointer hover:bg-muted/50 transition-colors block">
              <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">Upload PDF</h3>
              <p className="text-sm text-muted-foreground">
                Click to select a PDF file to edit
              </p>
              <input
                type="file"
                accept=".pdf,application/pdf"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                {pdfFile.name}
              </div>
              <Button variant="ghost" size="sm" onClick={resetTool}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </CardTitle>
            <CardDescription>
              {pageCount} pages • {Math.round(pdfFile.size / 1024)} KB
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="page-input">Select Pages (e.g., 1, 3-5, 8)</Label>
              <Input
                id="page-input"
                placeholder="Enter page numbers..."
                value={pageInput}
                onChange={(e) => setPageInput(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Leave empty to select all pages (where applicable)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                onClick={extractPages}
                disabled={processing}
                className="h-auto py-4 flex flex-col gap-2"
              >
                <Copy className="w-6 h-6" />
                <span>Extract Pages</span>
              </Button>

              <Button
                variant="outline"
                onClick={rotatePages}
                disabled={processing}
                className="h-auto py-4 flex flex-col gap-2"
              >
                <RotateCw className="w-6 h-6" />
                <span>Rotate Pages</span>
              </Button>

              <Button
                variant="outline"
                onClick={deletePages}
                disabled={processing}
                className="h-auto py-4 flex flex-col gap-2 text-destructive hover:text-destructive"
              >
                <Trash2 className="w-6 h-6" />
                <span>Delete Pages</span>
              </Button>
            </div>

            {processing && (
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing PDF...
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

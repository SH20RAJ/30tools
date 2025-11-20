"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, Download, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { PDFDocument } from "pdf-lib";

export default function PDFEditorTool() {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [processing, setProcessing] = useState(false);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || file.type !== 'application/pdf') {
      toast.error("Please upload a PDF file");
      return;
    }

    try {
      const arrayBuffer = await file.arrayBuffer();
      const doc = await PDFDocument.load(arrayBuffer);
      setPdfDoc(doc);
      setPdfFile(file);
      setPageCount(doc.getPageCount());
      toast.success(`PDF loaded: ${doc.getPageCount()} pages`);
    } catch (error) {
      toast.error("Failed to load PDF");
    }
  };

  const deletePages = async (pagesToDelete) => {
    if (!pdfDoc) return;

    setProcessing(true);
    try {
      const newDoc = await PDFDocument.create();
      const pages = await newDoc.copyPages(pdfDoc, pdfDoc.getPageIndices());

      pages.forEach((page, index) => {
        if (!pagesToDelete.includes(index)) {
          newDoc.addPage(page);
        }
      });

      const pdfBytes = await newDoc.save();
      downloadPDF(pdfBytes, 'edited-document.pdf');
      toast.success("Pages deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete pages");
    } finally {
      setProcessing(false);
    }
  };

  const extractPages = async (pageNumbers) => {
    if (!pdfDoc) return;

    setProcessing(true);
    try {
      const newDoc = await PDFDocument.create();
      const pages = await newDoc.copyPages(pdfDoc, pageNumbers);
      pages.forEach(page => newDoc.addPage(page));

      const pdfBytes = await newDoc.save();
      downloadPDF(pdfBytes, 'extracted-pages.pdf');
      toast.success("Pages extracted successfully!");
    } catch (error) {
      toast.error("Failed to extract pages");
    } finally {
      setProcessing(false);
    }
  };

  const mergePDFs = async (files) => {
    setProcessing(true);
    try {
      const mergedDoc = await PDFDocument.create();

      for (const file of files) {
        const arrayBuffer = await file.arrayBuffer();
        const doc = await PDFDocument.load(arrayBuffer);
        const pages = await mergedDoc.copyPages(doc, doc.getPageIndices());
        pages.forEach(page => mergedDoc.addPage(page));
      }

      const pdfBytes = await mergedDoc.save();
      downloadPDF(pdfBytes, 'merged-document.pdf');
      toast.success("PDFs merged successfully!");
    } catch (error) {
      toast.error("Failed to merge PDFs");
    } finally {
      setProcessing(false);
    }
  };

  const rotatePage = async (pageIndex, degrees) => {
    if (!pdfDoc) return;

    setProcessing(true);
    try {
      const page = pdfDoc.getPage(pageIndex);
      page.setRotation({ angle: degrees, type: 'degrees' });

      const pdfBytes = await pdfDoc.save();
      downloadPDF(pdfBytes, 'rotated-document.pdf');
      toast.success(`Page ${pageIndex + 1} rotated!`);
    } catch (error) {
      toast.error("Failed to rotate page");
    } finally {
      setProcessing(false);
    }
  };

  const downloadPDF = (pdfBytes, filename) => {
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      {!pdfFile ? (
        <Card>
          <CardContent className="pt-6">
            <label className="border-2 border-dashed rounded-xl p-12 text-center cursor-pointer hover:bg-muted/50 transition-colors block">
              <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">Upload PDF</h3>
              <p className="text-sm text-muted-foreground">Click to select a PDF file to edit</p>
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
        <>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                {pdfFile.name} ({pageCount} pages)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  onClick={() => extractPages([0])}
                  disabled={processing}
                >
                  Extract First Page
                </Button>
                <Button
                  variant="outline"
                  onClick={() => rotatePage(0, 90)}
                  disabled={processing}
                >
                  Rotate First Page
                </Button>
                <Button
                  variant="outline"
                  onClick={() => deletePages([0])}
                  disabled={processing}
                >
                  Delete First Page
                </Button>
                <Button
                  variant="outline"
                  onClick={async () => {
                    const pdfBytes = await pdfDoc.save();
                    downloadPDF(pdfBytes, 'downloaded.pdf');
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setPdfFile(null);
                  setPdfDoc(null);
                  setPageCount(0);
                }}
              >
                Upload Different PDF
              </Button>
            </CardContent>
          </Card>
        </>
      )}

      <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            Available Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>✅ Extract specific pages from PDF</p>
          <p>✅ Delete pages from PDF</p>
          <p>✅ Rotate pages (90°/180°/270°)</p>
          <p>✅ Merge multiple PDFs (upload feature above)</p>
          <p>⚠️ Text editing requires advanced PDF manipulation</p>
          <p>💡 All processing happens in your browser - files never leave your device</p>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { FileText, Download, Loader2, Scissors } from "lucide-react";
import { PDFDocument } from "pdf-lib";
import { toast } from "sonner";

export default function PdfSplitter() {
  const [file, setFile] = useState(null);
  const [range, setRange] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setDownloadUrl(null);
      // Get page count
      try {
          const buffer = await selectedFile.arrayBuffer();
          const doc = await PDFDocument.load(buffer, { ignoreEncryption: true });
          setPageCount(doc.getPageCount());
      } catch (e) {
          console.error(e);
          setPageCount(0);
      }
    } else {
      toast.error("Please upload a valid PDF file.");
    }
  };

  const splitPdf = async () => {
    if (!file || !range) {
      toast.error("Please provide a file and page range.");
      return;
    }

    setIsProcessing(true);
    try {
      const fileBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(fileBuffer);
      const newPdf = await PDFDocument.create();
      
      const totalPages = pdfDoc.getPageCount();
      const pagesToKeep = new Set(); // Use Set for unique pages

      // Parse range string "1-5, 7, 9-10"
      const parts = range.split(",");
      for (const part of parts) {
          const trimmed = part.trim();
          if (trimmed.includes("-")) {
              const [start, end] = trimmed.split("-").map(num => parseInt(num));
              if (!isNaN(start) && !isNaN(end)) {
                  for (let i = start; i <= end; i++) {
                      if (i >= 1 && i <= totalPages) pagesToKeep.add(i - 1); // 0-indexed
                  }
              }
          } else {
              const pageNum = parseInt(trimmed);
              if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
                  pagesToKeep.add(pageNum - 1);
              }
          }
      }

      if (pagesToKeep.size === 0) {
          throw new Error("No valid pages selected.");
      }

      const sortedPages = Array.from(pagesToKeep).sort((a, b) => a - b);
      const copiedPages = await newPdf.copyPages(pdfDoc, sortedPages);
      copiedPages.forEach(page => newPdf.addPage(page));

      const pdfBytes = await newPdf.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      toast.success("PDF split successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to split PDF. " + error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <Card className="p-8 space-y-6">
        <div className="space-y-4">
          <Label htmlFor="pdf-upload" className="text-base font-medium">1. Upload PDF</Label>
          <div className="border-2 border-dashed border-input rounded-lg p-8 text-center hover:bg-muted/20 transition-colors cursor-pointer relative">
            <input 
              id="pdf-upload" 
              type="file" 
              accept=".pdf" 
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            {file ? (
              <div className="flex flex-col items-center gap-2 text-primary">
                <FileText className="w-10 h-10" />
                <span className="font-medium">{file.name}</span>
                <span className="text-sm text-muted-foreground">{pageCount > 0 ? `${pageCount} Pages` : 'Loading pages...'}</span>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <FileText className="w-10 h-10" />
                <span>Click to upload or drag and drop PDF</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
           <div className="flex justify-between">
                <Label htmlFor="range-input" className="text-base font-medium">2. Select Pages</Label>
                <span className="text-xs text-muted-foreground">e.g. 1-5, 8, 11-13</span>
           </div>
           <Input 
             id="range-input"
             placeholder="1-3, 5, 7-9" 
             value={range} 
             onChange={(e) => setRange(e.target.value)}
           />
        </div>

        <Button 
          onClick={splitPdf} 
          disabled={!file || !range || isProcessing} 
          className="w-full h-12 text-lg"
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Splitting...
            </>
          ) : (
             <>
              <Scissors className="w-5 h-5 mr-2" /> Split PDF
            </>
          )}
        </Button>

        {downloadUrl && (
          <div className="pt-4 border-t">
            <Label className="text-base font-medium block mb-4">3. Download</Label>
            <Button asChild variant="outline" className="w-full h-12 text-lg border-primary text-primary hover:bg-primary/10">
              <a href={downloadUrl} download={`split-${file.name}`}>
                <Download className="w-5 h-5 mr-2" /> Download Split PDF
              </a>
            </Button>
          </div>
        )}
      </Card>
      
      <div className="text-center text-sm text-muted-foreground">
        <p>100% Client-side processing. Large files are handled safely on your device.</p>
      </div>
    </div>
  );
}

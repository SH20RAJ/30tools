"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { FileText, Download, Loader2, X, MoveUp, MoveDown, Plus } from "lucide-react";
import { PDFDocument } from "pdf-lib";
import { toast } from "sonner";

export default function PdfMerger() {
  const [files, setFiles] = useState([]); // Array of { file, name, id }
  const [isProcessing, setIsProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const validFiles = newFiles
      .filter(file => file.type === "application/pdf")
      .map(file => ({
        file,
        name: file.name,
        id: Math.random().toString(36).substr(2, 9)
      }));

    if (validFiles.length > 0) {
      setFiles(prev => [...prev, ...validFiles]);
      setDownloadUrl(null);
    } else {
        toast.error("Please select valid PDF files.");
    }
    // Reset input
    e.target.value = null; 
  };

  const removeFile = (id) => {
    setFiles(prev => prev.filter(f => f.id !== id));
    setDownloadUrl(null);
  };

  const moveFile = (index, direction) => {
    const newFiles = [...files];
    if (direction === -1 && index > 0) {
      [newFiles[index], newFiles[index - 1]] = [newFiles[index - 1], newFiles[index]];
    } else if (direction === 1 && index < newFiles.length - 1) {
      [newFiles[index], newFiles[index + 1]] = [newFiles[index + 1], newFiles[index]];
    }
    setFiles(newFiles);
    setDownloadUrl(null);
  };

  const mergePdfs = async () => {
    if (files.length < 2) {
        toast.error("Please select at least 2 PDF files to merge.");
        return;
    }

    setIsProcessing(true);
    try {
      const mergedPdf = await PDFDocument.create();

      for (const fileObj of files) {
        const fileBuffer = await fileObj.file.arrayBuffer();
        const pdf = await PDFDocument.load(fileBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const pdfBytes = await mergedPdf.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      toast.success("PDFs merged successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to merge PDFs. One of the files might be encrypted or corrupted.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="p-8 space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
             <Label className="text-base font-medium">Files to Merge ({files.length})</Label>
             <div className="relative">
                <input 
                    id="add-more" 
                    type="file" 
                    accept=".pdf" 
                    multiple
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <Button variant="outline" size="sm" className="gap-2 pointer-events-none">
                    <Plus className="w-4 h-4" /> Add Files
                </Button>
             </div>
          </div>
          
          {files.length === 0 ? (
             <div className="border-2 border-dashed border-input rounded-lg p-12 text-center hover:bg-muted/20 transition-colors cursor-pointer relative">
                <input 
                    id="pdf-upload" 
                    type="file" 
                    accept=".pdf" 
                    multiple
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <FileText className="w-12 h-12" />
                    <span className="font-medium">Click to select PDF files</span>
                </div>
            </div>
          ) : (
            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                {files.map((file, index) => (
                    <div key={file.id} className="flex items-center justify-between p-3 bg-muted/40 rounded-lg border">
                        <div className="flex items-center gap-3 overflow-hidden">
                            <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                                {index + 1}
                            </span>
                            <span className="truncate font-medium text-sm" title={file.name}>{file.name}</span>
                            <span className="text-xs text-muted-foreground shrink-0">
                                ({(file.file.size / 1024 / 1024).toFixed(2)} MB)
                            </span>
                        </div>
                        <div className="flex items-center gap-1">
                             <Button onClick={() => moveFile(index, -1)} disabled={index === 0} variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                                <MoveUp className="w-4 h-4" />
                            </Button>
                            <Button onClick={() => moveFile(index, 1)} disabled={index === files.length - 1} variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                                <MoveDown className="w-4 h-4" />
                            </Button>
                            <Button onClick={() => removeFile(file.id)} variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive/90 hover:bg-destructive/10">
                                <X className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
          )}
        </div>

        <Button 
          onClick={mergePdfs} 
          disabled={files.length < 2 || isProcessing} 
          className="w-full h-12 text-lg"
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Merging...
            </>
          ) : (
             <>
              <Download className="w-5 h-5 mr-2" /> Merge PDFs
            </>
          )}
        </Button>

        {downloadUrl && (
          <div className="pt-4 border-t">
            <Label className="text-base font-medium block mb-4">Download Merged File</Label>
             <Button asChild variant="outline" className="w-full h-12 text-lg border-primary text-primary hover:bg-primary/10">
              <a href={downloadUrl} download="merged-document.pdf">
                <Download className="w-5 h-5 mr-2" /> Download PDF
              </a>
            </Button>
          </div>
        )}
      </Card>
       <div className="text-center text-sm text-muted-foreground">
        <p>100% Client-side processing. Your files are merged locally and never uploaded.</p>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { FileText, X } from "lucide-react";
import { toast } from "sonner";

export default function PdfReader() {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile({
        file,
        url: URL.createObjectURL(file)
      });
    } else {
      toast.error("Please select a valid PDF file.");
    }
  };

  const removeFile = () => {
    setPdfFile(null);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 h-full">
      {!pdfFile ? (
        <Card className="p-8 space-y-6">
          <div className="space-y-4">
            <Label htmlFor="pdf-upload" className="text-base font-medium">Select PDF to Read</Label>
            <div className="border-2 border-dashed border-input rounded-lg p-12 text-center hover:bg-muted/20 transition-colors cursor-pointer relative">
              <input 
                id="pdf-upload" 
                type="file" 
                accept=".pdf" 
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center gap-4 text-muted-foreground">
                <FileText className="w-16 h-16" />
                <span className="text-lg font-medium">Click to open PDF or drag and drop</span>
                <span className="text-sm">Files stay private on your device</span>
              </div>
            </div>
          </div>
        </Card>
      ) : (
        <div className="space-y-4 h-[80vh] flex flex-col">
            <div className="flex justify-between items-center bg-card p-4 rounded-lg border shadow-sm">
                <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="font-medium">{pdfFile.file.name}</span>
                </div>
                <Button onClick={removeFile} variant="ghost" size="sm">
                    <X className="w-4 h-4 mr-2" /> Close File
                </Button>
            </div>
            <div className="flex-1 w-full bg-muted rounded-lg overflow-hidden border">
                <iframe 
                    src={pdfFile.url} 
                    className="w-full h-full"
                    title="PDF Viewer"
                />
            </div>
        </div>
      )}
    </div>
  );
}

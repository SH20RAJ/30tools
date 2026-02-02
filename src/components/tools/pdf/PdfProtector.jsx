"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Lock, FileText, Download, Loader2 } from "lucide-react";
import { PDFDocument } from "pdf-lib";
import { toast } from "sonner"; // Assuming sonner is available

export default function PdfProtector() {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setDownloadUrl(null);
    } else {
      toast.error("Please upload a valid PDF file.");
    }
  };

  const processPdf = async () => {
    if (!file || !password) {
      toast.error("Please provide both a file and a password.");
      return;
    }

    setIsProcessing(true);
    try {
      const fileBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(fileBuffer);
      
      pdfDoc.encrypt({
        userPassword: password,
        ownerPassword: password,
        permissions: {
          printing: "highResolution",
          modifying: false,
          copying: false,
          annotating: false,
          fillingForms: false,
          contentAccessibility: false,
          documentAssembly: false,
        },
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      toast.success("PDF protected successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to protect PDF. The file might be corrupted or already encrypted.");
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
                <span className="text-sm text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
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
           <Label htmlFor="password-input" className="text-base font-medium">2. Set Password</Label>
           <Input 
             id="password-input"
             type="password" 
             placeholder="Enter a strong password" 
             value={password} 
             onChange={(e) => setPassword(e.target.value)}
           />
        </div>

        <Button 
          onClick={processPdf} 
          disabled={!file || !password || isProcessing} 
          className="w-full h-12 text-lg"
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Protecting...
            </>
          ) : (
             <>
              <Lock className="w-5 h-5 mr-2" /> Protect PDF
            </>
          )}
        </Button>

        {downloadUrl && (
          <div className="pt-4 border-t">
            <Label className="text-base font-medium block mb-4">3. Download</Label>
            <Button asChild variant="outline" className="w-full h-12 text-lg border-primary text-primary hover:bg-primary/10">
              <a href={downloadUrl} download={`protected-${file.name}`}>
                <Download className="w-5 h-5 mr-2" /> Download Protected PDF
              </a>
            </Button>
          </div>
        )}
      </Card>
      
      <div className="text-center text-sm text-muted-foreground">
        <p>Your files are processed securely in your browser and never uploaded to our servers.</p>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { FileImage, Download, Loader2, X, MoveUp, MoveDown } from "lucide-react";
import { PDFDocument } from "pdf-lib";
import { toast } from "sonner";

export default function ImagesToPdf() {
  const [images, setImages] = useState([]); // Array of { file, preview }
  const [isProcessing, setIsProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files
      .filter(file => file.type.startsWith("image/"))
      .map(file => ({
        file,
        preview: URL.createObjectURL(file),
        id: Math.random().toString(36).substr(2, 9)
      }));
    
    if (newImages.length > 0) {
      setImages(prev => [...prev, ...newImages]);
      setDownloadUrl(null);
    } else {
        toast.error("Please select valid image files (JPG, PNG).");
    }
  };

  const removeImage = (id) => {
    setImages(prev => prev.filter(img => img.id !== id));
    setDownloadUrl(null);
  };

  const moveImage = (index, direction) => {
    const newImages = [...images];
    if (direction === -1 && index > 0) {
      [newImages[index], newImages[index - 1]] = [newImages[index - 1], newImages[index]];
    } else if (direction === 1 && index < newImages.length - 1) {
      [newImages[index], newImages[index + 1]] = [newImages[index + 1], newImages[index]];
    }
    setImages(newImages);
    setDownloadUrl(null);
  };

  const convertToPdf = async () => {
    if (images.length === 0) return;

    setIsProcessing(true);
    try {
      const pdfDoc = await PDFDocument.create();

      for (const img of images) {
        const imageBytes = await img.file.arrayBuffer();
        let pdfImage;
        
        try {
            if (img.file.type === 'image/jpeg' || img.file.type === 'image/jpg') {
                pdfImage = await pdfDoc.embedJpg(imageBytes);
            } else if (img.file.type === 'image/png') {
                pdfImage = await pdfDoc.embedPng(imageBytes);
            } else {
                // Fallback or attempt to embed as PNG if unsure, or skip
                 // Simple check might not cover all cases (e.g. webp is not supported directly by pdf-lib without conversion)
                 // For now assume standard types.
                 console.warn("Unsupported image type:", img.file.type);
                 continue;
            }
        } catch (e) {
            console.error("Error embedding image:", e);
            toast.error(`Could not embed ${img.file.name}. It might be a format incompatible with standard PDF embedding.`);
            continue;
        }

        if (pdfImage) {
            const page = pdfDoc.addPage([pdfImage.width, pdfImage.height]);
            page.drawImage(pdfImage, {
                x: 0,
                y: 0,
                width: pdfImage.width,
                height: pdfImage.height,
            });
        }
      }

      if (pdfDoc.getPageCount() === 0) {
          throw new Error("No valid images were added to PDF.");
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      toast.success("PDF created successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to convert images to PDF. " + error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="p-8 space-y-6">
        <div className="space-y-4">
          <Label htmlFor="image-upload" className="text-base font-medium">1. Select Images</Label>
          <div className="border-2 border-dashed border-input rounded-lg p-8 text-center hover:bg-muted/20 transition-colors cursor-pointer relative">
            <input 
              id="image-upload" 
              type="file" 
              accept="image/png, image/jpeg, image/jpg" 
              multiple
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
               <FileImage className="w-10 h-10" />
               <span>Click to upload multiple JPG or PNG images</span>
            </div>
          </div>
        </div>

        {images.length > 0 && (
          <div className="space-y-4">
             <Label className="text-base font-medium">2. Organize Images ({images.length})</Label>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
               {images.map((img, index) => (
                 <div key={img.id} className="relative group border rounded-lg p-2 bg-background">
                    <img src={img.preview} alt="preview" className="w-full h-32 object-cover rounded" />
                    <button 
                        onClick={() => removeImage(img.id)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <X className="w-3 h-3" />
                    </button>
                    <div className="absolute bottom-1 left-1 right-1 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded p-1">
                        <button onClick={() => moveImage(index, -1)} disabled={index === 0} className="text-white hover:text-blue-300 disabled:opacity-30">
                            <MoveUp className="w-4 h-4" />
                        </button>
                        <button onClick={() => moveImage(index, 1)} disabled={index === images.length - 1} className="text-white hover:text-blue-300 disabled:opacity-30">
                            <MoveDown className="w-4 h-4" />
                        </button>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        )}

        <Button 
          onClick={convertToPdf} 
          disabled={images.length === 0 || isProcessing} 
          className="w-full h-12 text-lg"
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Converting...
            </>
          ) : (
             <>
              <Download className="w-5 h-5 mr-2" /> Convert to PDF
            </>
          )}
        </Button>

        {downloadUrl && (
          <div className="pt-4 border-t">
            <Label className="text-base font-medium block mb-4">3. Download</Label>
             <Button asChild variant="outline" className="w-full h-12 text-lg border-primary text-primary hover:bg-primary/10">
              <a href={downloadUrl} download="converted-images.pdf">
                <Download className="w-5 h-5 mr-2" /> Download PDF
              </a>
            </Button>
          </div>
        )}
      </Card>
       <div className="text-center text-sm text-muted-foreground">
        <p>100% Client-side processing. Your photos never leave your device.</p>
      </div>
    </div>
  );
}

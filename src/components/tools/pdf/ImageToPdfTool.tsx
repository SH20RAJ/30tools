"use client";

import React, { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { jsPDF } from "jspdf";
import { Trash2, Upload, GripVertical, FileDown, Plus } from "lucide-react";
import { toast } from "sonner";

interface ImageFile {
  id: string;
  file: File;
  previewUrl: string;
  name: string;
  size: number;
}

export default function ImageToPdfTool() {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).filter((f) => f.type.startsWith("image/"));
      
      if (newFiles.length !== e.target.files.length) {
         toast.error("Only image files are allowed.");
      }

      const newImages = newFiles.map((file) => ({
        id: crypto.randomUUID(),
        file,
        previewUrl: URL.createObjectURL(file),
        name: file.name,
        size: file.size,
      }));

      setImages((prev) => [...prev, ...newImages]);
      
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const removeImage = (id: string) => {
    setImages((prev) => {
      const filtered = prev.filter((img) => img.id !== id);
      // Clean up object URLs
      const removed = prev.find(img => img.id === id);
      if (removed) URL.revokeObjectURL(removed.previewUrl);
      return filtered;
    });
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    setImages((prev) => {
      const newImages = [...prev];
      const draggedImg = newImages[draggedIndex];
      newImages.splice(draggedIndex, 1);
      newImages.splice(index, 0, draggedImg);
      return newImages;
    });
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const loadImage = (url: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = url;
    });
  };

  const generatePDF = async () => {
    if (images.length === 0) {
      toast.error("Please add at least one image.");
      return;
    }

    setIsGenerating(true);
    const toastId = toast.loading("Generating PDF...");

    try {
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const img = await loadImage(image.previewUrl);

        if (i > 0) {
          pdf.addPage();
        }

        // Calculate aspect ratio to fit the image on the PDF page
        const imgRatio = img.width / img.height;
        const pdfRatio = pdfWidth / pdfHeight;

        let renderWidth = pdfWidth;
        let renderHeight = pdfHeight;
        let x = 0;
        let y = 0;

        if (imgRatio > pdfRatio) {
          // Image is wider than page
          renderHeight = pdfWidth / imgRatio;
          y = (pdfHeight - renderHeight) / 2;
        } else {
          // Image is taller than page
          renderWidth = pdfHeight * imgRatio;
          x = (pdfWidth - renderWidth) / 2;
        }

        pdf.addImage(img, "JPEG", x, y, renderWidth, renderHeight);
      }

      pdf.save("converted-images.pdf");
      toast.success("PDF generated successfully!", { id: toastId });
    } catch (error) {
      console.error("PDF generation failed:", error);
      toast.error("Failed to generate PDF. Please try again.", { id: toastId });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto w-full">
      <Card>
        <CardHeader>
          <CardTitle>Image to PDF Converter</CardTitle>
          <CardDescription>
            Convert JPG, PNG, WEBP, and other images to a single PDF document. Drag to reorder pages.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div 
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer hover:bg-muted/50 ${images.length === 0 ? 'py-16' : 'py-8'}`}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add("border-primary"); }}
            onDragLeave={(e) => { e.preventDefault(); e.currentTarget.classList.remove("border-primary"); }}
            onDrop={(e) => {
              e.preventDefault();
              e.currentTarget.classList.remove("border-primary");
              if (e.dataTransfer.files) {
                  // Simulate an event to reuse the change handler
                  const simulatedEvent = {
                      target: { files: e.dataTransfer.files }
                  } as unknown as React.ChangeEvent<HTMLInputElement>;
                  handleFileChange(simulatedEvent);
              }
            }}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              multiple
              accept="image/*"
            />
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-primary/10 text-primary rounded-full">
                 <Upload className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Click or drag images here</p>
                <p className="text-xs text-muted-foreground">Supports JPG, PNG, WEBP and more</p>
              </div>
            </div>
          </div>

          {images.length > 0 && (
            <div className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-sm">Selected Images ({images.length})</h3>
                <Button variant="outline" size="sm" onClick={() => setImages([])}>
                   Clear All
                </Button>
              </div>
              
              <div className="grid gap-3 sm:grid-cols-2">
                {images.map((image, index) => (
                  <div
                    key={image.id}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDragEnd={handleDragEnd}
                    className={`flex items-center gap-3 p-3 bg-card border rounded-lg group ${draggedIndex === index ? 'opacity-50' : ''} cursor-grab active:cursor-grabbing hover:border-primary/50 transition-colors`}
                  >
                    <div className="flex items-center justify-center p-1 text-muted-foreground cursor-grab active:cursor-grabbing">
                      <GripVertical className="w-4 h-4" />
                    </div>
                    <div className="w-12 h-12 rounded-md overflow-hidden bg-muted flex-shrink-0 relative border">
                      <img
                        src={image.previewUrl}
                        alt={image.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-black/60 text-white text-[10px] px-1 rounded-br-md font-medium">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate" title={image.name}>
                        {image.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatFileSize(image.size)}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeImage(image.id);
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-4 border-t flex flex-col sm:flex-row gap-3">
             <Button 
               variant="outline" 
               className="w-full sm:w-auto" 
               onClick={() => fileInputRef.current?.click()}
             >
                <Plus className="w-4 h-4 mr-2" />
                Add More Images
             </Button>
             <Button
               className="w-full sm:flex-1"
               onClick={generatePDF}
               disabled={images.length === 0 || isGenerating}
             >
               <FileDown className="w-4 h-4 mr-2" />
               {isGenerating ? "Generating..." : "Generate PDF"}
             </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Image as ImageIcon, Upload } from "lucide-react";
import { toast } from "sonner";

export default function ImageToBase64Tool() {
  const [base64String, setBase64String] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file.");
      return;
    }

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setImagePreview(result);
      setBase64String(result);
    };
    reader.onerror = () => {
      toast.error("Failed to read the file.");
    };
    reader.readAsDataURL(file);
  };

  const handleCopy = () => {
    if (!base64String) return;
    navigator.clipboard.writeText(base64String);
    toast.success("Base64 string copied to clipboard!");
  };

  const handleClear = () => {
    setBase64String("");
    setImagePreview(null);
    setFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Image to Base64 Converter</CardTitle>
          <CardDescription>
            Convert any image (PNG, JPG, WEBP, SVG) to a Base64 encoded string. The conversion happens securely in your browser.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer hover:bg-muted/50 ${!imagePreview ? 'py-16' : 'py-8'}`}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add("border-primary"); }}
            onDragLeave={(e) => { e.preventDefault(); e.currentTarget.classList.remove("border-primary"); }}
            onDrop={(e) => {
              e.preventDefault();
              e.currentTarget.classList.remove("border-primary");
              if (e.dataTransfer.files?.[0]) {
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
              accept="image/*"
            />
            {imagePreview ? (
              <div className="flex flex-col items-center space-y-4">
                <img src={imagePreview} alt="Preview" className="max-h-48 object-contain rounded-md shadow-sm border" />
                <p className="text-sm font-medium text-muted-foreground">{fileName}</p>
                <Button variant="outline" size="sm" onClick={(e) => { e.stopPropagation(); handleClear(); }}>
                  Select Different Image
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-primary/10 text-primary rounded-full">
                  <Upload className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Click or drag image here</p>
                  <p className="text-xs text-muted-foreground">Supports JPG, PNG, SVG, WEBP, GIF</p>
                </div>
              </div>
            )}
          </div>

          {base64String && (
            <div className="space-y-3 pt-4 border-t">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Base64 Output</label>
                <Button size="sm" onClick={handleCopy}>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Base64
                </Button>
              </div>
              <Textarea
                readOnly
                className="min-h-[250px] font-mono text-xs bg-muted/30 resize-none"
                value={base64String}
              />
              <p className="text-xs text-muted-foreground text-right">
                Length: {base64String.length.toLocaleString()} characters
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

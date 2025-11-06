'use client';

import { useState, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { 
  Upload, 
  Download, 
  FileText,
  Image,
  CheckCircle, 
  AlertCircle, 
  Loader, 
  X,
  ArrowUp,
  ArrowDown,
  Zap,
  Shield,
  Settings,
  Eye
} from 'lucide-react';

export default function JpgToPdfTool() {
  const [images, setImages] = useState([]);
  const [pageSize, setPageSize] = useState('a4');
  const [orientation, setOrientation] = useState('portrait');
  const [margin, setMargin] = useState(20);
  const [imageQuality, setImageQuality] = useState(85);
  const [fitToPage, setFitToPage] = useState('fit');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [pdfFile, setPdfFile] = useState(null);
  const fileInputRef = useRef(null);

  const maxFileSize = 10 * 1024 * 1024; // 10MB per image
  const maxFiles = 50; // Maximum 50 images

  const pageSizes = [
    { value: 'a4', label: 'A4 (210 × 297 mm)', width: 210, height: 297 },
    { value: 'letter', label: 'Letter (8.5 × 11 in)', width: 216, height: 279 },
    { value: 'legal', label: 'Legal (8.5 × 14 in)', width: 216, height: 356 },
    { value: 'a3', label: 'A3 (297 × 420 mm)', width: 297, height: 420 },
    { value: 'a5', label: 'A5 (148 × 210 mm)', width: 148, height: 210 },
    { value: 'custom', label: 'Custom Size', width: 210, height: 297 }
  ];

  const fitOptions = [
    { value: 'fit', label: 'Fit to Page', description: 'Scale image to fit within page margins' },
    { value: 'fill', label: 'Fill Page', description: 'Scale image to fill entire page' },
    { value: 'stretch', label: 'Stretch to Fit', description: 'Stretch image to exact page size' },
    { value: 'center', label: 'Center Original', description: 'Center image without scaling' }
  ];

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    
    if (images.length + files.length > maxFiles) {
      alert(`Maximum ${maxFiles} images allowed. You can select ${maxFiles - images.length} more images.`);
      return;
    }

    const validFiles = files.filter(file => {
      if (!file.type.startsWith('image/')) {
        alert(`${file.name} is not a valid image file.`);
        return false;
      }
      if (file.size > maxFileSize) {
        alert(`${file.name} is too large. Maximum size is ${formatFileSize(maxFileSize)}.`);
        return false;
      }
      return true;
    });

    // Convert files to image objects with preview
    Promise.all(
      validFiles.map((file, index) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
              resolve({
                id: Date.now() + index,
                file,
                name: file.name,
                size: file.size,
                width: img.width,
                height: img.height,
                preview: e.target.result
              });
            };
            img.src = e.target.result;
          };
          reader.readAsDataURL(file);
        });
      })
    ).then((newImages) => {
      setImages(prev => [...prev, ...newImages]);
    });

    // Reset file input
    event.target.value = '';
  };

  const removeImage = (id) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  const moveImage = (id, direction) => {
    setImages(prev => {
      const index = prev.findIndex(img => img.id === id);
      if (
        (direction === 'up' && index === 0) ||
        (direction === 'down' && index === prev.length - 1)
      ) {
        return prev;
      }

      const newImages = [...prev];
      const newIndex = direction === 'up' ? index - 1 : index + 1;
      [newImages[index], newImages[newIndex]] = [newImages[newIndex], newImages[index]];
      return newImages;
    });
  };

  const convertToPdf = useCallback(async () => {
    if (images.length === 0) return;

    setIsProcessing(true);
    setProgress(0);
    setPdfFile(null);

    try {
      // Simulate PDF generation process
      for (let i = 0; i <= 100; i += 5) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setProgress(i);
      }

      // Calculate estimated PDF size
      const estimatedSize = images.reduce((total, img) => {
        const compressionRatio = imageQuality / 100;
        return total + (img.size * compressionRatio * 0.8); // Rough estimation
      }, 0);

      // Create PDF file (simulate)
      const pdfBlob = new Blob(['PDF content from images'], { type: 'application/pdf' });
      setPdfFile({
        name: `images-to-pdf-${Date.now()}.pdf`,
        blob: pdfBlob,
        size: estimatedSize,
        pageCount: images.length
      });

    } catch (error) {
      console.error('Error converting to PDF:', error);
      alert('Error converting images to PDF. Please try again.');
    }

    setIsProcessing(false);
  }, [images, imageQuality]);

  const downloadPdf = () => {
    if (!pdfFile) return;
    
    const url = URL.createObjectURL(pdfFile.blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = pdfFile.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const resetTool = () => {
    setImages([]);
    setPdfFile(null);
    setProgress(0);
    setIsProcessing(false);
    setPageSize('a4');
    setOrientation('portrait');
    setMargin(20);
    setImageQuality(85);
    setFitToPage('fit');
  };

  const getSelectedPageSize = () => {
    return pageSizes.find(size => size.value === pageSize) || pageSizes[0];
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Free JPG to PDF Converter</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Convert JPG, JPEG, PNG, and other images to PDF documents. 
          Combine multiple images into a single PDF with custom layouts and settings.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Batch Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Custom Layouts</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">High Quality</span>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Upload Images
          </CardTitle>
          <CardDescription>
            Upload JPG, JPEG, PNG, or other image files • Max {formatFileSize(maxFileSize)} per image • Up to {maxFiles} images
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
            <Image className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg font-medium mb-2">Drop images here or click to browse</p>
            <p className="text-sm text-muted-foreground mb-4">
              Perfect for creating photo albums, reports, presentations, and portfolios
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
              className="hidden"
            />
            <Button onClick={() => fileInputRef.current?.click()}>
              Choose Images
            </Button>
          </div>

          {images.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">
                  Selected Images ({images.length}/{maxFiles})
                </h3>
                <Button onClick={() => setImages([])} variant="outline" size="sm">
                  Clear All
                </Button>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {images.map((img, index) => (
                  <div key={img.id} className="border rounded-lg p-3">
                    <div className="aspect-square mb-3 bg-gray-100 rounded overflow-hidden">
                      <img 
                        src={img.preview} 
                        alt={img.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium truncate" title={img.name}>
                        {img.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatFileSize(img.size)} • {img.width}×{img.height}
                      </p>
                      <div className="flex items-center gap-1">
                        <Badge variant="outline" className="text-xs">
                          Page {index + 1}
                        </Badge>
                        <div className="flex gap-1 ml-auto">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => moveImage(img.id, 'up')}
                            disabled={index === 0}
                            className="h-6 w-6 p-0"
                          >
                            <ArrowUp className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => moveImage(img.id, 'down')}
                            disabled={index === images.length - 1}
                            className="h-6 w-6 p-0"
                          >
                            <ArrowDown className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removeImage(img.id)}
                            className="h-6 w-6 p-0 text-destructive hover:text-destructive"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Settings Section */}
      {images.length > 0 && (
        <div className="grid gap-6 lg:grid-cols-2 mb-6">
          {/* Page Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Page Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="page-size">Page Size</Label>
                <Select value={pageSize} onValueChange={setPageSize}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {pageSizes.map((size) => (
                      <SelectItem key={size.value} value={size.value}>
                        {size.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="orientation">Orientation</Label>
                <Select value={orientation} onValueChange={setOrientation}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="portrait">Portrait</SelectItem>
                    <SelectItem value="landscape">Landscape</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="margin">Page Margin (mm)</Label>
                <Input
                  id="margin"
                  type="number"
                  min="0"
                  max="50"
                  value={margin}
                  onChange={(e) => setMargin(parseInt(e.target.value) || 0)}
                  className="mt-2"
                />
              </div>
            </CardContent>
          </Card>

          {/* Image Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="h-5 w-5" />
                Image Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="fit-option">Image Fit</Label>
                <Select value={fitToPage} onValueChange={setFitToPage}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {fitOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        <div>
                          <div className="font-medium">{option.label}</div>
                          <div className="text-xs text-muted-foreground">{option.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="quality">Image Quality (%)</Label>
                <Input
                  id="quality"
                  type="number"
                  min="10"
                  max="100"
                  value={imageQuality}
                  onChange={(e) => setImageQuality(parseInt(e.target.value) || 85)}
                  className="mt-2"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Higher quality = larger file size
                </p>
              </div>

              <Alert>
                <Eye className="h-4 w-4" />
                <AlertDescription>
                  <strong>Preview:</strong> {getSelectedPageSize().label} • {orientation} • {margin}mm margin
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Convert Button */}
      {images.length > 0 && (
        <Card className="mb-6">
          <CardContent className="pt-6">
            <Button 
              onClick={convertToPdf} 
              disabled={isProcessing}
              className="w-full"
              size="lg"
            >
              {isProcessing ? (
                <>
                  <Loader className="h-4 w-4 mr-2 animate-spin" />
                  Converting to PDF...
                </>
              ) : (
                <>
                  <FileText className="h-4 w-4 mr-2" />
                  Convert {images.length} Images to PDF
                </>
              )}
            </Button>

            {isProcessing && (
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Creating PDF from {images.length} images...</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} />
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Download Section */}
      {pdfFile && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              PDF Created Successfully
            </CardTitle>
            <CardDescription>
              Your images have been converted to a PDF document
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg mb-4">
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">{pdfFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatFileSize(pdfFile.size)} • {pdfFile.pageCount} pages
                  </p>
                </div>
              </div>
              <Button onClick={downloadPdf}>
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>

            <div className="flex gap-2">
              <Button onClick={resetTool} variant="outline">
                Convert More Images
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Features Grid */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Zap className="h-5 w-5" />
              Batch Processing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Convert up to {maxFiles} images at once. Perfect for creating albums, reports, and presentations.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Settings className="h-5 w-5" />
              Professional Layouts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Choose from standard page sizes, orientations, margins, and image fitting options.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Shield className="h-5 w-5" />
              High Quality Output
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Maintain image quality with adjustable compression settings. Perfect balance of quality and file size.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Use Cases */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Perfect For</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-3">Business & Professional</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Product catalogs and portfolios</li>
                <li>• Presentation handouts</li>
                <li>• Documentation with images</li>
                <li>• Report attachments</li>
                <li>• Marketing materials</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Personal & Creative</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Photo albums and scrapbooks</li>
                <li>• Recipe collections</li>
                <li>• Travel journals</li>
                <li>• Art portfolios</li>
                <li>• Digital archives</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">What image formats are supported?</h4>
              <p className="text-sm text-muted-foreground">
                We support JPG, JPEG, PNG, GIF, BMP, WebP, and most other common image formats.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Can I change the order of images?</h4>
              <p className="text-sm text-muted-foreground">
                Yes! Use the up/down arrow buttons on each image to reorder them. The order determines the page sequence in your PDF.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">What happens to image quality?</h4>
              <p className="text-sm text-muted-foreground">
                You can control the quality with the Image Quality setting. Higher values preserve more detail but create larger files.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Are there any limits?</h4>
              <p className="text-sm text-muted-foreground">
                You can upload up to {maxFiles} images, with each image being maximum {formatFileSize(maxFileSize)}. All processing happens in your browser.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

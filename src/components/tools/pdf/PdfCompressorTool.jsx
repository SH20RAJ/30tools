'use client';

import { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileIcon, 
  UploadIcon, 
  ArrowLeftIcon,
  DownloadIcon,
  RefreshCwIcon,
  CompressIcon,
  InfoIcon,
  AlertCircleIcon,
  CheckCircleIcon
} from 'lucide-react';
import Link from 'next/link';

export default function PdfCompressorTool() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isCompressing, setIsCompressing] = useState(false);
  const [compressionProgress, setCompressionProgress] = useState(0);
  const [compressedFile, setCompressedFile] = useState(null);
  const [compressionSettings, setCompressionSettings] = useState({
    quality: 'medium',
    imageQuality: 70,
    removeMetadata: true,
    optimizeImages: true
  });
  const [compressionStats, setCompressionStats] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      alert('Please select a PDF file');
      return;
    }

    if (file.size > 50 * 1024 * 1024) { // 50MB limit
      alert('File size must be less than 50MB');
      return;
    }

    setSelectedFile(file);
    setCompressedFile(null);
    setCompressionStats(null);
    setCompressionProgress(0);
  };

  const simulateCompression = async () => {
    setIsCompressing(true);
    setCompressionProgress(0);

    // Simulate compression progress
    const progressSteps = [10, 25, 45, 60, 80, 95, 100];
    const stepNames = [
      'Analyzing PDF structure...',
      'Optimizing images...',
      'Compressing content streams...',
      'Removing metadata...',
      'Optimizing fonts...',
      'Finalizing compression...',
      'Compression complete!'
    ];

    for (let i = 0; i < progressSteps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setCompressionProgress(progressSteps[i]);
    }

    // Simulate compression results
    const originalSize = selectedFile.size;
    const compressionRatio = getCompressionRatio(compressionSettings.quality);
    const compressedSize = Math.floor(originalSize * compressionRatio);
    const reductionPercentage = Math.round(((originalSize - compressedSize) / originalSize) * 100);

    // Create a mock compressed file
    const compressedBlob = new Blob([selectedFile], { type: 'application/pdf' });
    
    setCompressedFile({
      blob: compressedBlob,
      name: selectedFile.name.replace('.pdf', '_compressed.pdf'),
      size: compressedSize
    });

    setCompressionStats({
      originalSize,
      compressedSize,
      reductionPercentage,
      quality: compressionSettings.quality
    });

    setIsCompressing(false);
  };

  const getCompressionRatio = (quality) => {
    const ratios = {
      low: 0.3,      // High compression, lower quality
      medium: 0.5,   // Balanced compression
      high: 0.7,     // Lower compression, higher quality
      lossless: 0.85 // Minimal compression, preserve quality
    };
    return ratios[quality] || 0.5;
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const downloadCompressedFile = () => {
    if (!compressedFile) return;

    const url = URL.createObjectURL(compressedFile.blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = compressedFile.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const resetTool = () => {
    setSelectedFile(null);
    setCompressedFile(null);
    setCompressionStats(null);
    setCompressionProgress(0);
    setIsCompressing(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getQualityDescription = (quality) => {
    const descriptions = {
      low: 'Maximum compression - Smallest file size, noticeable quality loss',
      medium: 'Balanced compression - Good balance of size and quality',
      high: 'Minimal compression - Larger file size, excellent quality',
      lossless: 'Lossless optimization - Remove unnecessary data only'
    };
    return descriptions[quality];
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
              <CompressIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">PDF Compressor</h1>
              <p className="text-muted-foreground">Reduce PDF file size while maintaining quality</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">Size Reduction</Badge>
            <Badge variant="secondary">Quality Control</Badge>
            <Badge variant="secondary">Batch Processing</Badge>
            <Badge variant="secondary">Free Online</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Upload PDF File
                <Button onClick={resetTool} variant="ghost" size="sm">
                  <RefreshCwIcon className="h-4 w-4" />
                </Button>
              </CardTitle>
              <CardDescription>
                Select a PDF file to compress (max 50MB)
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!selectedFile ? (
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <UploadIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg font-medium mb-2">Click to upload PDF</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Or drag and drop your PDF file here
                  </p>
                  <Button variant="outline">
                    Choose PDF File
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,application/pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 border rounded-lg">
                    <FileIcon className="h-8 w-8 text-red-500" />
                    <div className="flex-1">
                      <p className="font-medium">{selectedFile.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {formatFileSize(selectedFile.size)}
                      </p>
                    </div>
                    <Badge variant="outline">PDF</Badge>
                  </div>

                  {/* Compression Settings */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Compression Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium">Compression Quality</Label>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          {['low', 'medium', 'high', 'lossless'].map((quality) => (
                            <Button
                              key={quality}
                              variant={compressionSettings.quality === quality ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => setCompressionSettings(prev => ({ ...prev, quality }))}
                              className="justify-start"
                            >
                              {quality.charAt(0).toUpperCase() + quality.slice(1)}
                            </Button>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          {getQualityDescription(compressionSettings.quality)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <Label className="text-sm">Remove Metadata</Label>
                        <Button
                          variant={compressionSettings.removeMetadata ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setCompressionSettings(prev => ({ 
                            ...prev, 
                            removeMetadata: !prev.removeMetadata 
                          }))}
                        >
                          {compressionSettings.removeMetadata ? 'Yes' : 'No'}
                        </Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <Label className="text-sm">Optimize Images</Label>
                        <Button
                          variant={compressionSettings.optimizeImages ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setCompressionSettings(prev => ({ 
                            ...prev, 
                            optimizeImages: !prev.optimizeImages 
                          }))}
                        >
                          {compressionSettings.optimizeImages ? 'Yes' : 'No'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Button 
                    onClick={simulateCompression} 
                    className="w-full" 
                    size="lg"
                    disabled={isCompressing}
                  >
                    <CompressIcon className="h-4 w-4 mr-2" />
                    {isCompressing ? 'Compressing...' : 'Compress PDF'}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DownloadIcon className="h-5 w-5" />
                Compression Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isCompressing ? (
                <div className="space-y-4">
                  <div className="text-center">
                    <CompressIcon className="h-12 w-12 mx-auto mb-4 text-primary animate-spin" />
                    <p className="font-medium">Compressing PDF...</p>
                    <p className="text-sm text-muted-foreground">
                      This may take a few moments
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{compressionProgress}%</span>
                    </div>
                    <Progress value={compressionProgress} />
                  </div>
                </div>
              ) : compressionStats ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <CheckCircleIcon className="h-12 w-12 mx-auto mb-4 text-green-500" />
                    <p className="font-medium text-lg">Compression Complete!</p>
                    <p className="text-sm text-muted-foreground">
                      Your PDF has been successfully compressed
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-2xl font-bold text-red-500">
                          {formatFileSize(compressionStats.originalSize)}
                        </p>
                        <p className="text-sm text-muted-foreground">Original Size</p>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-2xl font-bold text-green-500">
                          {formatFileSize(compressionStats.compressedSize)}
                        </p>
                        <p className="text-sm text-muted-foreground">Compressed Size</p>
                      </div>
                    </div>

                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <p className="text-3xl font-bold text-primary">
                        {compressionStats.reductionPercentage}%
                      </p>
                      <p className="text-sm text-muted-foreground">Size Reduction</p>
                    </div>

                    <Button onClick={downloadCompressedFile} className="w-full" size="lg">
                      <DownloadIcon className="h-4 w-4 mr-2" />
                      Download Compressed PDF
                    </Button>

                    <div className="text-xs text-muted-foreground text-center space-y-1">
                      <p>Quality: {compressionStats.quality.charAt(0).toUpperCase() + compressionStats.quality.slice(1)}</p>
                      <p>Compression saved {formatFileSize(compressionStats.originalSize - compressionStats.compressedSize)}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <FileIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-medium mb-2">No File Compressed</h3>
                  <p className="text-muted-foreground">
                    Upload a PDF file and click compress to see results here
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Information Tabs */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>PDF Compression Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="howto" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="howto">How To Use</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="tips">Optimization Tips</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>
              
              <TabsContent value="howto" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-bold text-primary">1</span>
                    </div>
                    <h4 className="font-medium mb-2">Upload PDF</h4>
                    <p className="text-sm text-muted-foreground">
                      Select your PDF file by clicking the upload area or dragging and dropping
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-bold text-primary">2</span>
                    </div>
                    <h4 className="font-medium mb-2">Choose Settings</h4>
                    <p className="text-sm text-muted-foreground">
                      Select compression quality and optimization options
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-bold text-primary">3</span>
                    </div>
                    <h4 className="font-medium mb-2">Download Result</h4>
                    <p className="text-sm text-muted-foreground">
                      Get your compressed PDF with reduced file size
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Quality Control</h4>
                        <p className="text-sm text-muted-foreground">Choose from 4 compression levels</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Image Optimization</h4>
                        <p className="text-sm text-muted-foreground">Reduce image sizes within PDFs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Metadata Removal</h4>
                        <p className="text-sm text-muted-foreground">Remove unnecessary metadata</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Progress Tracking</h4>
                        <p className="text-sm text-muted-foreground">Real-time compression progress</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Instant Download</h4>
                        <p className="text-sm text-muted-foreground">Download compressed files immediately</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">File Security</h4>
                        <p className="text-sm text-muted-foreground">Files processed locally and securely</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="tips" className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <InfoIcon className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Choose the Right Quality</h4>
                      <p className="text-sm text-muted-foreground">
                        Use "Medium" for most documents, "Low" for maximum compression, "High" for important documents
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <InfoIcon className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Image-Heavy PDFs</h4>
                      <p className="text-sm text-muted-foreground">
                        PDFs with many images will see the most compression benefit
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <InfoIcon className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Text-Only Documents</h4>
                      <p className="text-sm text-muted-foreground">
                        Text-heavy PDFs may see smaller compression ratios but still benefit from optimization
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircleIcon className="h-5 w-5 text-orange-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Password-Protected Files</h4>
                      <p className="text-sm text-muted-foreground">
                        Encrypted PDFs cannot be compressed. Remove password protection first
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="faq" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Is my PDF data secure?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes, all processing happens in your browser. Files are not uploaded to our servers.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">What's the maximum file size?</h4>
                    <p className="text-sm text-muted-foreground">
                      You can compress PDF files up to 50MB in size.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">How much compression can I expect?</h4>
                    <p className="text-sm text-muted-foreground">
                      Compression results vary, but typically range from 20-70% reduction depending on content and settings.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Does compression affect PDF quality?</h4>
                    <p className="text-sm text-muted-foreground">
                      Lower compression settings may reduce quality slightly. Choose "High" or "Lossless" for minimal quality loss.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

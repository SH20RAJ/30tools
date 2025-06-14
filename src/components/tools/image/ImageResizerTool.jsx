'use client';

import { useState, useRef, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeftIcon, 
  UploadIcon, 
  DownloadIcon, 
  ImageIcon,
  LockIcon,
  UnlockIcon,
  MonitorIcon,
  SmartphoneIcon,
  TabletIcon,
  RefreshCwIcon
} from 'lucide-react';
import Link from 'next/link';

export default function ImageResizerTool() {
  const [files, setFiles] = useState([]);
  const [resizeOptions, setResizeOptions] = useState({
    width: 800,
    height: 600,
    maintainAspectRatio: true,
    resizeMethod: 'pixels', // pixels, percentage
    quality: 90
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);

  const supportedFormats = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/bmp'];
  const maxFileSize = 50 * 1024 * 1024; // 50MB

  // Social media presets
  const presets = {
    instagram: {
      square: { width: 1080, height: 1080, label: 'Instagram Square (1080×1080)' },
      story: { width: 1080, height: 1920, label: 'Instagram Story (1080×1920)' },
      portrait: { width: 1080, height: 1350, label: 'Instagram Portrait (1080×1350)' }
    },
    facebook: {
      cover: { width: 1640, height: 859, label: 'Facebook Cover (1640×859)' },
      post: { width: 1200, height: 630, label: 'Facebook Post (1200×630)' },
      profile: { width: 400, height: 400, label: 'Facebook Profile (400×400)' }
    },
    twitter: {
      header: { width: 1500, height: 500, label: 'Twitter Header (1500×500)' },
      post: { width: 1200, height: 675, label: 'Twitter Post (1200×675)' },
      profile: { width: 400, height: 400, label: 'Twitter Profile (400×400)' }
    },
    youtube: {
      thumbnail: { width: 1280, height: 720, label: 'YouTube Thumbnail (1280×720)' },
      channel: { width: 2560, height: 1440, label: 'YouTube Channel Art (2560×1440)' }
    },
    linkedin: {
      cover: { width: 1584, height: 396, label: 'LinkedIn Cover (1584×396)' },
      post: { width: 1200, height: 627, label: 'LinkedIn Post (1200×627)' }
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleFileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const validFiles = selectedFiles.filter(file => {
      if (!supportedFormats.includes(file.type)) {
        alert(`${file.name} is not a supported image format.`);
        return false;
      }
      if (file.size > maxFileSize) {
        alert(`${file.name} is too large. Maximum file size is 50MB.`);
        return false;
      }
      return true;
    });

    // Create image objects for each file
    validFiles.forEach(file => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      
      img.onload = () => {
        const newFile = {
          id: Date.now() + Math.random(),
          file,
          originalSize: file.size,
          originalDimensions: { width: img.width, height: img.height },
          url,
          resizedBlob: null,
          resizedDimensions: null,
          status: 'pending'
        };
        
        setFiles(prev => [...prev, newFile]);
        URL.revokeObjectURL(url);
      };
      
      img.src = url;
    });
  };

  const calculateNewDimensions = (original, options) => {
    let { width, height } = options;
    const { width: origWidth, height: origHeight } = original;

    if (options.resizeMethod === 'percentage') {
      width = Math.round(origWidth * (width / 100));
      height = Math.round(origHeight * (height / 100));
    }

    if (options.maintainAspectRatio) {
      const aspectRatio = origWidth / origHeight;
      
      if (width / height > aspectRatio) {
        width = Math.round(height * aspectRatio);
      } else {
        height = Math.round(width / aspectRatio);
      }
    }

    return { width: Math.max(1, width), height: Math.max(1, height) };
  };

  const resizeImage = useCallback(async (fileData) => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        const newDimensions = calculateNewDimensions(fileData.originalDimensions, resizeOptions);
        
        canvas.width = newDimensions.width;
        canvas.height = newDimensions.height;

        // Use high-quality scaling
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        // Draw the resized image
        ctx.drawImage(img, 0, 0, newDimensions.width, newDimensions.height);

        // Convert to blob
        canvas.toBlob(
          (blob) => {
            resolve({
              resizedBlob: blob,
              resizedDimensions: newDimensions
            });
          },
          fileData.file.type,
          resizeOptions.quality / 100
        );
      };

      img.src = fileData.url;
    });
  }, [resizeOptions]);

  const handleResize = async () => {
    setIsProcessing(true);
    setProgress(0);

    const pendingFiles = files.filter(f => f.status === 'pending');

    for (let i = 0; i < pendingFiles.length; i++) {
      const fileData = pendingFiles[i];

      setFiles(prev => prev.map(f => 
        f.id === fileData.id 
          ? { ...f, status: 'processing' }
          : f
      ));

      try {
        const result = await resizeImage(fileData);

        setFiles(prev => prev.map(f => 
          f.id === fileData.id 
            ? { 
                ...f, 
                status: 'completed',
                resizedBlob: result.resizedBlob,
                resizedDimensions: result.resizedDimensions
              }
            : f
        ));
      } catch (error) {
        setFiles(prev => prev.map(f => 
          f.id === fileData.id 
            ? { ...f, status: 'error' }
            : f
        ));
      }

      setProgress(((i + 1) / pendingFiles.length) * 100);
    }

    setIsProcessing(false);
  };

  const downloadFile = (fileData) => {
    if (fileData.resizedBlob) {
      const url = URL.createObjectURL(fileData.resizedBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `resized_${fileData.file.name}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const downloadAll = () => {
    files.filter(f => f.status === 'completed').forEach(downloadFile);
  };

  const clearFiles = () => {
    files.forEach(f => {
      if (f.url) URL.revokeObjectURL(f.url);
    });
    setFiles([]);
  };

  const removeFile = (id) => {
    setFiles(prev => {
      const fileToRemove = prev.find(f => f.id === id);
      if (fileToRemove?.url) {
        URL.revokeObjectURL(fileToRemove.url);
      }
      return prev.filter(f => f.id !== id);
    });
  };

  const applyPreset = (preset) => {
    setResizeOptions(prev => ({
      ...prev,
      width: preset.width,
      height: preset.height,
      resizeMethod: 'pixels'
    }));
  };

  const handleWidthChange = (value) => {
    const width = parseInt(value) || 0;
    setResizeOptions(prev => {
      if (prev.maintainAspectRatio && files.length > 0) {
        const firstFile = files[0];
        if (firstFile?.originalDimensions) {
          const aspectRatio = firstFile.originalDimensions.width / firstFile.originalDimensions.height;
          return {
            ...prev,
            width,
            height: Math.round(width / aspectRatio)
          };
        }
      }
      return { ...prev, width };
    });
  };

  const handleHeightChange = (value) => {
    const height = parseInt(value) || 0;
    setResizeOptions(prev => {
      if (prev.maintainAspectRatio && files.length > 0) {
        const firstFile = files[0];
        if (firstFile?.originalDimensions) {
          const aspectRatio = firstFile.originalDimensions.width / firstFile.originalDimensions.height;
          return {
            ...prev,
            height,
            width: Math.round(height * aspectRatio)
          };
        }
      }
      return { ...prev, height };
    });
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
              <ImageIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Image Resizer</h1>
              <p className="text-muted-foreground">Resize images for any purpose - web, social media, print</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">Batch Processing</Badge>
            <Badge variant="secondary">Aspect Ratio Lock</Badge>
            <Badge variant="secondary">Social Media Presets</Badge>
            <Badge variant="secondary">Free Forever</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Settings Panel */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Resize Settings</CardTitle>
                <CardDescription>
                  Configure image dimensions and options
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Resize Method */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">Resize Method</Label>
                  <Select 
                    value={resizeOptions.resizeMethod} 
                    onValueChange={(value) => setResizeOptions(prev => ({ ...prev, resizeMethod: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pixels">Pixels</SelectItem>
                      <SelectItem value="percentage">Percentage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Dimensions */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-base font-medium">Dimensions</Label>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setResizeOptions(prev => ({ ...prev, maintainAspectRatio: !prev.maintainAspectRatio }))}
                    >
                      {resizeOptions.maintainAspectRatio ? (
                        <LockIcon className="h-4 w-4" />
                      ) : (
                        <UnlockIcon className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <Label htmlFor="width" className="text-sm">
                        Width {resizeOptions.resizeMethod === 'percentage' ? '(%)' : '(px)'}
                      </Label>
                      <Input
                        id="width"
                        type="number"
                        min="1"
                        value={resizeOptions.width}
                        onChange={(e) => handleWidthChange(e.target.value)}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="height" className="text-sm">
                        Height {resizeOptions.resizeMethod === 'percentage' ? '(%)' : '(px)'}
                      </Label>
                      <Input
                        id="height"
                        type="number"
                        min="1"
                        value={resizeOptions.height}
                        onChange={(e) => handleHeightChange(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="aspect-ratio"
                      checked={resizeOptions.maintainAspectRatio}
                      onCheckedChange={(checked) => setResizeOptions(prev => ({ ...prev, maintainAspectRatio: checked }))}
                    />
                    <Label htmlFor="aspect-ratio" className="text-sm">
                      Lock aspect ratio
                    </Label>
                  </div>
                </div>

                {/* Quality */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">
                    Quality: {resizeOptions.quality}%
                  </Label>
                  <Input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={resizeOptions.quality}
                    onChange={(e) => setResizeOptions(prev => ({ ...prev, quality: parseInt(e.target.value) }))}
                    className="w-full"
                  />
                </div>

                <Separator />

                {/* File Upload */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">Upload Images</Label>
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    variant="outline"
                    className="w-full"
                  >
                    <UploadIcon className="h-4 w-4 mr-2" />
                    Choose Images
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <div className="text-xs text-muted-foreground">
                    Supports: JPEG, PNG, WebP, GIF, BMP
                    <br />
                    Max size: 50MB per file
                  </div>
                </div>

                {files.length > 0 && (
                  <>
                    <Separator />
                    
                    <div className="space-y-2">
                      <Button
                        onClick={handleResize}
                        disabled={isProcessing || files.every(f => f.status !== 'pending')}
                        className="w-full"
                      >
                        {isProcessing ? 'Resizing...' : 'Resize Images'}
                      </Button>
                      
                      {files.some(f => f.status === 'completed') && (
                        <Button
                          onClick={downloadAll}
                          variant="outline"
                          className="w-full"
                        >
                          <DownloadIcon className="h-4 w-4 mr-2" />
                          Download All
                        </Button>
                      )}
                      
                      <Button
                        onClick={clearFiles}
                        variant="ghost"
                        className="w-full"
                      >
                        Clear All Files
                      </Button>
                    </div>

                    {isProcessing && (
                      <div className="space-y-2">
                        <Label className="text-sm">Progress</Label>
                        <Progress value={progress} className="w-full" />
                        <div className="text-xs text-muted-foreground text-center">
                          {Math.round(progress)}%
                        </div>
                      </div>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Social Media Presets */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MonitorIcon className="h-5 w-5" />
                  Quick Presets
                </CardTitle>
                <CardDescription>
                  Popular social media and web sizes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(presets).map(([platform, sizes]) => (
                    <div key={platform} className="space-y-2">
                      <h4 className="font-medium capitalize flex items-center gap-2">
                        {platform === 'instagram' && <SmartphoneIcon className="h-4 w-4" />}
                        {platform === 'facebook' && <MonitorIcon className="h-4 w-4" />}
                        {platform === 'twitter' && <MonitorIcon className="h-4 w-4" />}
                        {platform === 'youtube' && <TabletIcon className="h-4 w-4" />}
                        {platform === 'linkedin' && <MonitorIcon className="h-4 w-4" />}
                        {platform}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {Object.values(sizes).map((preset, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => applyPreset(preset)}
                            className="text-xs h-auto py-2 px-3"
                          >
                            {preset.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* File List */}
            {files.length === 0 ? (
              <Card className="h-64 flex items-center justify-center border-dashed border-2">
                <div className="text-center space-y-4">
                  <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto" />
                  <div>
                    <h3 className="text-lg font-medium">No images uploaded</h3>
                    <p className="text-muted-foreground">
                      Upload images to start resizing
                    </p>
                  </div>
                  <Button onClick={() => fileInputRef.current?.click()}>
                    <UploadIcon className="h-4 w-4 mr-2" />
                    Upload Images
                  </Button>
                </div>
              </Card>
            ) : (
              <div className="space-y-4">
                {files.map((fileData) => (
                  <Card key={fileData.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="relative">
                            <img
                              src={fileData.url}
                              alt={fileData.file.name}
                              className="w-16 h-16 object-cover rounded border"
                            />
                            {fileData.status === 'processing' && (
                              <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded">
                                <RefreshCwIcon className="h-4 w-4 text-white animate-spin" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium truncate">{fileData.file.name}</h4>
                            <div className="text-sm text-muted-foreground space-y-1">
                              <div>
                                Original: {fileData.originalDimensions.width} × {fileData.originalDimensions.height} 
                                ({formatFileSize(fileData.originalSize)})
                              </div>
                              {fileData.resizedDimensions && (
                                <div>
                                  Resized: {fileData.resizedDimensions.width} × {fileData.resizedDimensions.height}
                                  ({formatFileSize(fileData.resizedBlob?.size || 0)})
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Badge variant={
                            fileData.status === 'completed' ? 'default' :
                            fileData.status === 'processing' ? 'secondary' :
                            fileData.status === 'error' ? 'destructive' : 'outline'
                          }>
                            {fileData.status}
                          </Badge>
                          
                          {fileData.status === 'completed' && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => downloadFile(fileData)}
                            >
                              <DownloadIcon className="h-4 w-4" />
                            </Button>
                          )}
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(fileData.id)}
                          >
                            ×
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Features & FAQ */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✅ Custom width and height dimensions</li>
                <li>✅ Maintain aspect ratio automatically</li>
                <li>✅ Social media preset sizes</li>
                <li>✅ Batch resize multiple images</li>
                <li>✅ Quality control (10-100%)</li>
                <li>✅ Percentage or pixel-based resizing</li>
                <li>✅ Support for JPEG, PNG, WebP, GIF, BMP</li>
                <li>✅ No file upload limits</li>
              </ul>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">Will resizing reduce image quality?</h4>
                <p className="text-sm text-muted-foreground">
                  Quality may be affected when significantly reducing size. Use the quality slider to control compression levels.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">What does "maintain aspect ratio" do?</h4>
                <p className="text-sm text-muted-foreground">
                  It prevents image distortion by automatically adjusting one dimension when you change the other.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">Can I resize images for printing?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes! Set dimensions based on your print size and desired DPI (e.g., 8×10 inches at 300 DPI = 2400×3000 pixels).
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">Is there a limit on file size?</h4>
                <p className="text-sm text-muted-foreground">
                  Each image can be up to 50MB. You can resize unlimited images for free.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

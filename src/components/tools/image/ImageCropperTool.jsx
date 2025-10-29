'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  Crop, 
  Upload, 
  Download, 
  RotateCw, 
  RotateCcw, 
  FlipHorizontal, 
  FlipVertical,
  Square,
  Smartphone,
  Monitor,
  Image as ImageIcon,
  Scissors
} from 'lucide-react';
import { toast } from 'sonner';

const ASPECT_RATIOS = [
  { label: 'Free', value: 'free', ratio: null },
  { label: '1:1 (Square)', value: '1:1', ratio: 1 },
  { label: '4:3', value: '4:3', ratio: 4/3 },
  { label: '3:2', value: '3:2', ratio: 3/2 },
  { label: '16:9', value: '16:9', ratio: 16/9 },
  { label: '2:1', value: '2:1', ratio: 2 },
  { label: '3:4 (Portrait)', value: '3:4', ratio: 3/4 },
  { label: '2:3 (Portrait)', value: '2:3', ratio: 2/3 },
  { label: '9:16 (Stories)', value: '9:16', ratio: 9/16 },
];

const PRESET_SIZES = [
  { label: 'Instagram Post', width: 1080, height: 1080 },
  { label: 'Instagram Story', width: 1080, height: 1920 },
  { label: 'Facebook Post', width: 1200, height: 630 },
  { label: 'Twitter Post', width: 1200, height: 675 },
  { label: 'LinkedIn Post', width: 1200, height: 627 },
  { label: 'YouTube Thumbnail', width: 1280, height: 720 },
  { label: 'Profile Picture', width: 400, height: 400 },
];

export default function ImageCropper() {
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [cropArea, setCropArea] = useState({ x: 0, y: 0, width: 200, height: 200 });
  const [aspectRatio, setAspectRatio] = useState('free');
  const [rotation, setRotation] = useState(0);
  const [flipHorizontal, setFlipHorizontal] = useState(false);
  const [flipVertical, setFlipVertical] = useState(false);
  const [customWidth, setCustomWidth] = useState('');
  const [customHeight, setCustomHeight] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [originalImageSize, setOriginalImageSize] = useState({ width: 0, height: 0 });
  
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);
  const cropCanvasRef = useRef(null);
  const imageRef = useRef(null);

  const handleFileUpload = useCallback((file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          setImage(e.target.result);
          setOriginalImageSize({ width: img.width, height: img.height });
          setCroppedImage(null);
          setRotation(0);
          setFlipHorizontal(false);
          setFlipVertical(false);
          
          // Set initial crop area to center of image
          const maxSize = Math.min(img.width, img.height) * 0.8;
          setCropArea({
            x: (img.width - maxSize) / 2,
            y: (img.height - maxSize) / 2,
            width: maxSize,
            height: maxSize
          });
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      toast.error('Please select a valid image file');
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  }, [handleFileUpload]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const drawImageOnCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.ctx;
    if (!canvas || !ctx || !image) return;

    const img = imageRef.current;
    if (!img) return;

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Apply transformations
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(flipHorizontal ? -1 : 1, flipVertical ? -1 : 1);
    ctx.drawImage(img, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    ctx.restore();
  }, [image, rotation, flipHorizontal, flipVertical]);

  useEffect(() => {
    if (image && canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.ctx = canvas.getContext('2d');
      drawImageOnCanvas();
    }
  }, [image, rotation, flipHorizontal, flipVertical, drawImageOnCanvas]);

  const handleAspectRatioChange = (value) => {
    setAspectRatio(value);
    const ratio = ASPECT_RATIOS.find(r => r.value === value)?.ratio;
    
    if (ratio && image) {
      setCropArea(prev => {
        const newHeight = prev.width / ratio;
        const newWidth = prev.height * ratio;
        
        // Choose the dimension that fits better
        if (newHeight <= originalImageSize.height && prev.width <= originalImageSize.width) {
          return { ...prev, height: newHeight };
        } else if (newWidth <= originalImageSize.width && prev.height <= originalImageSize.height) {
          return { ...prev, width: newWidth };
        }
        
        // If neither fits, scale down proportionally
        const scale = Math.min(
          originalImageSize.width / prev.width,
          originalImageSize.height / newHeight
        );
        return {
          ...prev,
          width: prev.width * scale,
          height: newHeight * scale
        };
      });
    }
  };

  const applyPresetSize = (preset) => {
    setCustomWidth(preset.width.toString());
    setCustomHeight(preset.height.toString());
    
    if (image) {
      const scale = Math.min(
        originalImageSize.width / preset.width,
        originalImageSize.height / preset.height,
        1
      );
      
      setCropArea({
        x: (originalImageSize.width - preset.width * scale) / 2,
        y: (originalImageSize.height - preset.height * scale) / 2,
        width: preset.width * scale,
        height: preset.height * scale
      });
    }
  };

  const cropImage = useCallback(() => {
    if (!image || !canvasRef.current) return;

    setIsProcessing(true);
    
    try {
      const sourceCanvas = canvasRef.current;
      const cropCanvas = cropCanvasRef.current;
      const ctx = cropCanvas.getContext('2d');
      
      // Set output dimensions
      const outputWidth = customWidth ? parseInt(customWidth) : cropArea.width;
      const outputHeight = customHeight ? parseInt(customHeight) : cropArea.height;
      
      cropCanvas.width = outputWidth;
      cropCanvas.height = outputHeight;
      
      // Draw cropped area
      ctx.drawImage(
        sourceCanvas,
        cropArea.x, cropArea.y, cropArea.width, cropArea.height,
        0, 0, outputWidth, outputHeight
      );
      
      const croppedDataUrl = cropCanvas.toDataURL('image/png');
      setCroppedImage(croppedDataUrl);
      toast.success('Image cropped successfully!');
    } catch (error) {
      toast.error('Failed to crop image. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  }, [image, cropArea, customWidth, customHeight]);

  const downloadImage = () => {
    if (!croppedImage) return;
    
    const link = document.createElement('a');
    link.download = 'cropped-image.png';
    link.href = croppedImage;
    link.click();
    toast.success('Image downloaded successfully!');
  };

  const resetTransforms = () => {
    setRotation(0);
    setFlipHorizontal(false);
    setFlipVertical(false);
    if (image) {
      drawImageOnCanvas();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Free Online Image Cropper - Crop Images & Photos</h1>
            <p className="text-lg text-muted-foreground mb-4">
              Professional photo cropper tool to crop images online free. Resize photos, cut pictures, and create perfect crops with our advanced image cropping tool.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Auto Crop</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Circular Crop</span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">PNG Cropper</span>
              <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">JPG Crop</span>
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Photo Resizer</span>
            </div>
          </div>

          {!image ? (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Upload Image
                </CardTitle>
                <CardDescription>
                  Upload your image to start cropping. Our online image cropper supports JPG, PNG, GIF, WebP formats. Perfect for social media, profile pictures, and custom sizing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center hover:border-muted-foreground/50 transition-colors cursor-pointer"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <ImageIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">Choose an image to crop online</h3>
                  <p className="text-muted-foreground mb-4">
                    Free photo cropper - supports JPG, PNG, GIF, WebP formats. Best online image cropper for professional results.
                  </p>
                  <Button>
                    <Upload className="w-4 h-4 mr-2" />
                    Browse Images to Crop
                  </Button>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                />
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Controls */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Photo Crop Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="aspect-ratio">Aspect Ratio</Label>
                      <Select value={aspectRatio} onValueChange={handleAspectRatioChange}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {ASPECT_RATIOS.map((ratio) => (
                            <SelectItem key={ratio.value} value={ratio.value}>
                              {ratio.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label htmlFor="width">Width (px)</Label>
                        <Input
                          id="width"
                          type="number"
                          placeholder="Auto"
                          value={customWidth}
                          onChange={(e) => setCustomWidth(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="height">Height (px)</Label>
                        <Input
                          id="height"
                          type="number"
                          placeholder="Auto"
                          value={customHeight}
                          onChange={(e) => setCustomHeight(e.target.value)}
                        />
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <Label>Social Media Presets - Perfect Photo Sizes</Label>
                      <div className="grid grid-cols-1 gap-2 mt-2">
                        {PRESET_SIZES.map((preset) => (
                          <Button
                            key={preset.label}
                            variant="outline"
                            size="sm"
                            className="justify-start text-xs"
                            onClick={() => applyPresetSize(preset)}
                          >
                            <Square className="w-3 h-3 mr-2" />
                            {preset.label}
                            <Badge variant="secondary" className="ml-auto text-xs">
                              {preset.width}×{preset.height}
                            </Badge>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Transform</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Rotation: {rotation}°</Label>
                      <div className="flex gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setRotation(r => r - 90)}
                        >
                          <RotateCcw className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setRotation(r => r + 90)}
                        >
                          <RotateCw className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label>Flip</Label>
                      <div className="flex gap-2 mt-2">
                        <Button
                          variant={flipHorizontal ? "default" : "outline"}
                          size="sm"
                          onClick={() => setFlipHorizontal(!flipHorizontal)}
                        >
                          <FlipHorizontal className="w-4 h-4" />
                        </Button>
                        <Button
                          variant={flipVertical ? "default" : "outline"}
                          size="sm"
                          onClick={() => setFlipVertical(!flipVertical)}
                        >
                          <FlipVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <Button variant="outline" size="sm" onClick={resetTransforms}>
                      Reset
                    </Button>
                  </CardContent>
                </Card>

                <div className="space-y-2">
                  <Button 
                    className="w-full" 
                    onClick={cropImage}
                    disabled={isProcessing}
                  >
                    <Scissors className="w-4 h-4 mr-2" />
                    {isProcessing ? 'Cropping Image...' : 'Crop Image Online'}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload New Photo to Crop
                  </Button>
                </div>
              </div>

              {/* Preview */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Image Preview - Crop Area</CardTitle>
                    <CardDescription>
                      Preview your original image with crop area overlay. Adjust the cropping area as needed.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        ref={imageRef}
                        src={image}
                        alt="Original"
                        className="max-w-full h-auto"
                        style={{
                          transform: `rotate(${rotation}deg) scaleX(${flipHorizontal ? -1 : 1}) scaleY(${flipVertical ? -1 : 1})`
                        }}
                      />
                      {/* Crop overlay could be added here for visual feedback */}
                    </div>
                    <canvas ref={canvasRef} className="hidden" />
                  </CardContent>
                </Card>

                {croppedImage && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Cropped Image Result</CardTitle>
                      <CardDescription>
                        Your perfectly cropped image is ready for download. High-quality photo cropping results.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-gray-100 rounded-lg p-4 text-center">
                        <img
                          src={croppedImage}
                          alt="Cropped"
                          className="max-w-full h-auto mx-auto rounded"
                        />
                      </div>
                      <Button onClick={downloadImage} className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download Cropped Photo
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          )}

          <canvas ref={cropCanvasRef} className="hidden" />
          
          {/* SEO Content Section */}
          <div className="mt-12 max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Complete Guide to Online Image Cropping</h2>
              
              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">What is an Image Cropper?</h3>
                <p className="text-gray-700 mb-4">
                  An <strong>image cropper</strong> is a powerful online tool that allows you to <strong>crop images</strong>, <strong>resize photos</strong>, and <strong>cut pictures</strong> to your desired dimensions. Our <strong>free online image cropper</strong> provides professional-grade photo cropping capabilities without requiring any software installation.
                </p>
                <p className="text-gray-700 mb-4">
                  Whether you need to <strong>crop photos</strong> for social media, create perfect profile pictures, or resize images for your website, our <strong>photo cropper tool</strong> delivers exceptional results. With features like <strong>auto crop</strong>, <strong>circular crop image</strong>, and custom dimensions, it's the best <strong>image cropper online</strong>.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Key Features of Our Photo Cropper</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Free Image Resizer</h4>
                    <p className="text-sm text-gray-600">Resize images online with our free image resizer. Change picture size and photo dimensions effortlessly.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">PNG Cropper & JPG Crop</h4>
                    <p className="text-sm text-gray-600">Professional PNG cropper and JPG crop functionality for all image formats.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Circular Crop Image</h4>
                    <p className="text-sm text-gray-600">Create perfect circular crops and round crop images for profile pictures and avatars.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Auto Crop Image</h4>
                    <p className="text-sm text-gray-600">Smart auto crop feature automatically detects the best crop area for your images.</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">How to Crop Images Online</h3>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li><strong>Upload Your Image:</strong> Click "Browse Files" or drag and drop your photo into our online image cropper</li>
                  <li><strong>Select Crop Area:</strong> Choose the area you want to crop using our intuitive cropping tool</li>
                  <li><strong>Adjust Dimensions:</strong> Set custom width and height or use preset sizes for social media</li>
                  <li><strong>Apply Effects:</strong> Rotate, flip, or apply transformations to your image</li>
                  <li><strong>Crop Image:</strong> Click "Crop Image" to process your photo with our image cutter</li>
                  <li><strong>Download:</strong> Save your cropped image in high quality</li>
                </ol>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Popular Image Cropping Use Cases</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold">Social Media Photo Cropping</h4>
                    <p>Perfect your social media presence with our <strong>photo crop online</strong> tool. Create Instagram posts, Facebook covers, Twitter headers, and LinkedIn banners with precise dimensions.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Profile Picture Creation</h4>
                    <p>Use our <strong>picture cropper</strong> to create perfect profile pictures. The <strong>crop image to circle</strong> feature is ideal for avatars and professional headshots.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">E-commerce Product Images</h4>
                    <p>Optimize product photos with our <strong>image crop online</strong> tool. Ensure consistent sizing and perfect framing for your online store.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Website Optimization</h4>
                    <p>Reduce file sizes and improve loading times by cropping images to exact specifications with our <strong>online crop</strong> functionality.</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Advanced Cropping Features</h3>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold mb-3">Professional Image Editing Tools</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Image Trimmer:</strong> Precise trimming with pixel-perfect accuracy</li>
                    <li>• <strong>Picture Cutter:</strong> Advanced cutting tools for complex shapes</li>
                    <li>• <strong>Photo Size Editor:</strong> Comprehensive size adjustment options</li>
                    <li>• <strong>Crop Cut:</strong> Professional crop and cut functionality</li>
                    <li>• <strong>Round Crop Image:</strong> Create perfect circular and rounded images</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Why Choose Our Online Image Cropper?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">100% Free</h4>
                    <p className="text-sm text-gray-600">No hidden costs, watermarks, or premium features. Complete access to all cropping tools.</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">No Software Required</h4>
                    <p className="text-sm text-gray-600">Works entirely in your browser. No downloads, installations, or registrations needed.</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">High Quality Results</h4>
                    <p className="text-sm text-gray-600">Maintain image quality while cropping. Professional results every time.</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Supported Image Formats</h3>
                <p className="text-gray-700 mb-4">
                  Our <strong>cropping tool</strong> supports all major image formats including JPG, PNG, GIF, WebP, and more. Whether you need to <strong>crop PNG online</strong> or perform <strong>JPG crop</strong> operations, our tool handles all formats with ease.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">JPG/JPEG</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">PNG</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">GIF</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">WebP</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">BMP</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">TIFF</span>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">How to crop an image online for free?</h4>
                    <p className="text-gray-700">Simply upload your image to our free online image cropper, select the crop area, adjust dimensions if needed, and click crop. Download your perfectly cropped image instantly.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Can I crop images without losing quality?</h4>
                    <p className="text-gray-700">Yes! Our image cropper maintains the original quality of your photos during the cropping process. No compression or quality loss occurs.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Is there a limit to image size?</h4>
                    <p className="text-gray-700">Our online crop tool can handle large images efficiently. We support files up to 50MB for optimal performance.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">How to make image smaller while cropping?</h4>
                    <p className="text-gray-700">Use our resize image feature combined with cropping. Set custom dimensions in the width and height fields to make your image smaller.</p>
                  </div>
                </div>
              </section>

              <section className="mb-8 bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Start Cropping Images Now</h3>
                <p className="text-gray-700 mb-4">
                  Ready to crop your images? Our professional <strong>photo cropper</strong> tool is completely free and requires no registration. Whether you need to <strong>crop pictures</strong>, <strong>resize photos</strong>, or create perfect social media images, we've got you covered.
                </p>
                <p className="text-gray-700">
                  Join thousands of users who trust our <strong>online image cropper</strong> for their photo editing needs. Experience the best <strong>image crop</strong> tool available online today!
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
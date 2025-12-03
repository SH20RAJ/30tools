"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Upload,
  Download,
  RotateCw,
  RotateCcw,
  FlipHorizontal,
  FlipVertical,
  Square,
  Image as ImageIcon,
  Scissors,
} from "lucide-react";
import { toast } from "sonner";

const ASPECT_RATIOS = [
  { label: "Free", value: "free", ratio: null },
  { label: "1:1 (Square)", value: "1:1", ratio: 1 },
  { label: "4:3", value: "4:3", ratio: 4 / 3 },
  { label: "3:2", value: "3:2", ratio: 3 / 2 },
  { label: "16:9", value: "16:9", ratio: 16 / 9 },
  { label: "2:1", value: "2:1", ratio: 2 },
  { label: "3:4 (Portrait)", value: "3:4", ratio: 3 / 4 },
  { label: "2:3 (Portrait)", value: "2:3", ratio: 2 / 3 },
  { label: "9:16 (Stories)", value: "9:16", ratio: 9 / 16 },
];

const PRESET_SIZES = [
  { label: "Instagram Post", width: 1080, height: 1080 },
  { label: "Instagram Story", width: 1080, height: 1920 },
  { label: "Facebook Post", width: 1200, height: 630 },
  { label: "Twitter Post", width: 1200, height: 675 },
  { label: "LinkedIn Post", width: 1200, height: 627 },
  { label: "YouTube Thumbnail", width: 1280, height: 720 },
  { label: "Profile Picture", width: 400, height: 400 },
];

export default function ImageCropper({ initialAspectRatio = "free" }) {
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [cropArea, setCropArea] = useState({
    x: 0,
    y: 0,
    width: 200,
    height: 200,
  });
  const [aspectRatio, setAspectRatio] = useState(initialAspectRatio);
  const [rotation, setRotation] = useState(0);
  const [flipHorizontal, setFlipHorizontal] = useState(false);
  const [flipVertical, setFlipVertical] = useState(false);
  const [customWidth, setCustomWidth] = useState("");
  const [customHeight, setCustomHeight] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [originalImageSize, setOriginalImageSize] = useState({
    width: 0,
    height: 0,
  });

  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);
  const cropCanvasRef = useRef(null);
  const imageRef = useRef(null);

  const handleFileUpload = useCallback(
    (file) => {
      if (file && file.type.startsWith("image/")) {
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

            // Apply initial aspect ratio if set
            let initialWidth = maxSize;
            let initialHeight = maxSize;

            if (initialAspectRatio !== "free") {
              const ratioObj = ASPECT_RATIOS.find(
                (r) => r.value === initialAspectRatio,
              );
              if (ratioObj && ratioObj.ratio) {
                if (ratioObj.ratio > 1) {
                  initialHeight = initialWidth / ratioObj.ratio;
                } else {
                  initialWidth = initialHeight * ratioObj.ratio;
                }
              }
            }

            setCropArea({
              x: (img.width - initialWidth) / 2,
              y: (img.height - initialHeight) / 2,
              width: initialWidth,
              height: initialHeight,
            });
          };
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        toast.error("Please select a valid image file");
      }
    },
    [initialAspectRatio],
  );

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) {
        handleFileUpload(file);
      }
    },
    [handleFileUpload],
  );

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
    ctx.drawImage(
      img,
      -canvas.width / 2,
      -canvas.height / 2,
      canvas.width,
      canvas.height,
    );
    ctx.restore();
  }, [image, rotation, flipHorizontal, flipVertical]);

  useEffect(() => {
    if (image && canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.ctx = canvas.getContext("2d");
      drawImageOnCanvas();
    }
  }, [image, rotation, flipHorizontal, flipVertical, drawImageOnCanvas]);

  const handleAspectRatioChange = (value) => {
    setAspectRatio(value);
    const ratio = ASPECT_RATIOS.find((r) => r.value === value)?.ratio;

    if (ratio && image) {
      setCropArea((prev) => {
        const newHeight = prev.width / ratio;
        const newWidth = prev.height * ratio;

        // Choose the dimension that fits better
        if (
          newHeight <= originalImageSize.height &&
          prev.width <= originalImageSize.width
        ) {
          return { ...prev, height: newHeight };
        } else if (
          newWidth <= originalImageSize.width &&
          prev.height <= originalImageSize.height
        ) {
          return { ...prev, width: newWidth };
        }

        // If neither fits, scale down proportionally
        const scale = Math.min(
          originalImageSize.width / prev.width,
          originalImageSize.height / newHeight,
        );
        return {
          ...prev,
          width: prev.width * scale,
          height: newHeight * scale,
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
        1,
      );

      setCropArea({
        x: (originalImageSize.width - preset.width * scale) / 2,
        y: (originalImageSize.height - preset.height * scale) / 2,
        width: preset.width * scale,
        height: preset.height * scale,
      });
    }
  };

  const cropImage = useCallback(() => {
    if (!image || !canvasRef.current) return;

    setIsProcessing(true);

    try {
      const sourceCanvas = canvasRef.current;
      const cropCanvas = cropCanvasRef.current;
      const ctx = cropCanvas.getContext("2d");

      // Set output dimensions
      const outputWidth = customWidth ? parseInt(customWidth) : cropArea.width;
      const outputHeight = customHeight
        ? parseInt(customHeight)
        : cropArea.height;

      cropCanvas.width = outputWidth;
      cropCanvas.height = outputHeight;

      // Draw cropped area
      ctx.drawImage(
        sourceCanvas,
        cropArea.x,
        cropArea.y,
        cropArea.width,
        cropArea.height,
        0,
        0,
        outputWidth,
        outputHeight,
      );

      const croppedDataUrl = cropCanvas.toDataURL("image/png");
      setCroppedImage(croppedDataUrl);
      toast.success("Image cropped successfully!");
    } catch (_error) {
      toast.error("Failed to crop image. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  }, [image, cropArea, customWidth, customHeight]);

  const downloadImage = () => {
    if (!croppedImage) return;

    const link = document.createElement("a");
    link.download = "cropped-image.png";
    link.href = croppedImage;
    link.click();
    toast.success("Image downloaded successfully!");
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
    <div className="w-full max-w-6xl mx-auto">
      {!image ? (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Upload Image
            </CardTitle>
            <CardDescription>
              Upload your image to start cropping. Our online image cropper
              supports JPG, PNG, GIF, WebP formats. Perfect for social media,
              profile pictures, and custom sizing.
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
              <h3 className="text-xl font-semibold mb-2">
                Choose an image to crop online
              </h3>
              <p className="text-muted-foreground mb-4">
                Free photo cropper - supports JPG, PNG, GIF, WebP formats. Best
                online image cropper for professional results.
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
              onChange={(e) =>
                e.target.files?.[0] && handleFileUpload(e.target.files[0])
              }
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
                  <Select
                    value={aspectRatio}
                    onValueChange={handleAspectRatioChange}
                  >
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
                      onClick={() => setRotation((r) => r - 90)}
                    >
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setRotation((r) => r + 90)}
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
                {isProcessing ? "Cropping Image..." : "Crop Image Online"}
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
                  Preview your original image with crop area overlay. Adjust the
                  cropping area as needed.
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
                      transform: `rotate(${rotation}deg) scaleX(${flipHorizontal ? -1 : 1}) scaleY(${flipVertical ? -1 : 1})`,
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
                    Your perfectly cropped image is ready for download.
                    High-quality photo cropping results.
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
    </div>
  );
}

'use client';

import { useState, useRef, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import {
    ArrowLeftIcon,
    UploadIcon,
    DownloadIcon,
    ImageIcon,
    CodeIcon,
    CheckCircleIcon,
    StarIcon,
    SmartphoneIcon,
    MonitorIcon,
    TabletIcon
} from 'lucide-react';
import Link from 'next/link';

export default function FaviconGeneratorTool() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedFavicons, setGeneratedFavicons] = useState([]);
    const [progress, setProgress] = useState(0);
    const fileInputRef = useRef(null);
    const canvasRef = useRef(null);

    const faviconSizes = [
        { size: 16, name: 'favicon-16x16.png', description: 'Browser tab icon' },
        { size: 32, name: 'favicon-32x32.png', description: 'Browser tab icon (HD)' },
        { size: 48, name: 'favicon-48x48.png', description: 'Windows taskbar' },
        { size: 64, name: 'favicon-64x64.png', description: 'Windows taskbar (HD)' },
        { size: 96, name: 'favicon-96x96.png', description: 'Desktop shortcut' },
        { size: 128, name: 'favicon-128x128.png', description: 'Chrome Web Store' },
        { size: 152, name: 'apple-touch-icon-152x152.png', description: 'iPad home screen' },
        { size: 167, name: 'apple-touch-icon-167x167.png', description: 'iPad Pro home screen' },
        { size: 180, name: 'apple-touch-icon-180x180.png', description: 'iPhone home screen' },
        { size: 192, name: 'android-chrome-192x192.png', description: 'Android home screen' },
        { size: 256, name: 'favicon-256x256.png', description: 'Windows shortcut' },
        { size: 512, name: 'android-chrome-512x512.png', description: 'Android splash screen' }
    ];

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            alert('Please select a valid image file.');
            return;
        }

        if (file.size > 10 * 1024 * 1024) { // 10MB limit
            alert('Image file is too large. Please select an image under 10MB.');
            return;
        }

        setSelectedImage(file);

        // Create preview
        const reader = new FileReader();
        reader.onload = (e) => {
            setImagePreview(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    const resizeImage = useCallback((img, size) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = size;
        canvas.height = size;

        // Enable image smoothing for better quality
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        // Draw image with proper scaling
        ctx.drawImage(img, 0, 0, size, size);

        return canvas.toDataURL('image/png');
    }, []);

    const generateFavicons = async () => {
        if (!selectedImage) return;

        setIsGenerating(true);
        setProgress(0);
        setGeneratedFavicons([]);

        try {
            // Load the image
            const img = new Image();
            img.onload = async () => {
                const favicons = [];

                for (let i = 0; i < faviconSizes.length; i++) {
                    const favicon = faviconSizes[i];
                    const dataUrl = resizeImage(img, favicon.size);

                    favicons.push({
                        ...favicon,
                        dataUrl,
                        blob: await fetch(dataUrl).then(r => r.blob())
                    });

                    setProgress(((i + 1) / faviconSizes.length) * 100);

                    // Small delay to show progress
                    await new Promise(resolve => setTimeout(resolve, 100));
                }

                setGeneratedFavicons(favicons);
                setIsGenerating(false);
            };

            img.src = imagePreview;
        } catch (error) {
            console.error('Error generating favicons:', error);
            setIsGenerating(false);
            alert('Error generating favicons. Please try again.');
        }
    };

    const downloadFavicon = (favicon) => {
        const link = document.createElement('a');
        link.href = favicon.dataUrl;
        link.download = favicon.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const downloadAllFavicons = async () => {
        if (generatedFavicons.length === 0) return;

        // Create a zip-like bundle by downloading all files
        for (const favicon of generatedFavicons) {
            downloadFavicon(favicon);
            // Small delay between downloads
            await new Promise(resolve => setTimeout(resolve, 200));
        }
    };

    const generateHTMLCode = () => {
        if (generatedFavicons.length === 0) return '';

        return `<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">

<!-- Apple Touch Icons -->
<link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
<link rel="apple-touch-icon" sizes="167x167" href="/apple-touch-icon-167x167.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">

<!-- Android Chrome Icons -->
<link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png">
<link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png">

<!-- Additional Sizes -->
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="128x128" href="/favicon-128x128.png">
<link rel="icon" type="image/png" sizes="256x256" href="/favicon-256x256.png">

<!-- Web App Manifest -->
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#ffffff">`;
    };

    const generateWebManifest = () => {
        return `{
  "name": "Your App Name",
  "short_name": "App",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone",
  "start_url": "/"
}`;
    };

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error('Failed to copy to clipboard:', err);
        }
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
                            <StarIcon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">Favicon Generator</h1>
                            <p className="text-muted-foreground">Create favicons from any image for your website</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">All Sizes</Badge>
                        <Badge variant="secondary">Apple Icons</Badge>
                        <Badge variant="secondary">Android Icons</Badge>
                        <Badge variant="secondary">Free Forever</Badge>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Upload Section */}
                    <div className="lg:col-span-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>Upload Image</CardTitle>
                                <CardDescription>
                                    Upload an image to generate favicons in all required sizes
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* File Upload */}
                                <div className="space-y-3">
                                    <Label>Select Image File</Label>
                                    <div
                                        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${imagePreview ? 'border-primary/50 bg-primary/5' : 'border-muted-foreground/25 hover:border-primary/50'
                                            }`}
                                        onClick={() => fileInputRef.current?.click()}
                                    >
                                        {imagePreview ? (
                                            <div className="space-y-3">
                                                <img
                                                    src={imagePreview}
                                                    alt="Preview"
                                                    className="mx-auto w-24 h-24 object-cover rounded-lg"
                                                />
                                                <p className="text-sm text-muted-foreground">
                                                    Click to change image
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="space-y-3">
                                                <UploadIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                                                <div>
                                                    <p className="font-medium">Click to upload image</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        PNG, JPG, SVG up to 10MB
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />
                                </div>

                                {/* Generation Button */}
                                {selectedImage && (
                                    <div className="space-y-3">
                                        <Button
                                            onClick={generateFavicons}
                                            disabled={isGenerating}
                                            className="w-full"
                                            size="lg"
                                        >
                                            {isGenerating ? 'Generating...' : 'Generate Favicons'}
                                        </Button>

                                        {isGenerating && (
                                            <div className="space-y-2">
                                                <Progress value={progress} className="w-full" />
                                                <p className="text-sm text-center text-muted-foreground">
                                                    {Math.round(progress)}% complete
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Tips */}
                                <div className="bg-muted/50 p-4 rounded-lg">
                                    <h4 className="font-medium mb-2">💡 Tips for best results:</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Use square images (1:1 aspect ratio)</li>
                                        <li>• Minimum 512x512 pixels recommended</li>
                                        <li>• Simple designs work best at small sizes</li>
                                        <li>• High contrast colors are more visible</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Results Section */}
                    <div className="lg:col-span-2 space-y-6">
                        {generatedFavicons.length > 0 ? (
                            <>
                                {/* Download All */}
                                <Card>
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <CardTitle>Generated Favicons</CardTitle>
                                                <CardDescription>
                                                    {generatedFavicons.length} favicon sizes generated successfully
                                                </CardDescription>
                                            </div>
                                            <Button onClick={downloadAllFavicons}>
                                                <DownloadIcon className="h-4 w-4 mr-2" />
                                                Download All
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                            {generatedFavicons.map((favicon, index) => (
                                                <div key={index} className="text-center space-y-2">
                                                    <div className="bg-muted/50 p-3 rounded-lg">
                                                        <img
                                                            src={favicon.dataUrl}
                                                            alt={`${favicon.size}x${favicon.size}`}
                                                            className="mx-auto"
                                                            style={{
                                                                width: Math.min(favicon.size, 48),
                                                                height: Math.min(favicon.size, 48)
                                                            }}
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium">{favicon.size}×{favicon.size}</p>
                                                        <p className="text-xs text-muted-foreground">{favicon.description}</p>
                                                    </div>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        onClick={() => downloadFavicon(favicon)}
                                                        className="w-full"
                                                    >
                                                        <DownloadIcon className="h-3 w-3 mr-1" />
                                                        Download
                                                    </Button>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* HTML Code */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <CodeIcon className="h-5 w-5" />
                                            HTML Code
                                        </CardTitle>
                                        <CardDescription>
                                            Copy and paste this code into your HTML &lt;head&gt; section
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <Textarea
                                            value={generateHTMLCode()}
                                            readOnly
                                            rows={12}
                                            className="font-mono text-sm"
                                        />
                                        <Button
                                            onClick={() => copyToClipboard(generateHTMLCode())}
                                            variant="outline"
                                            className="w-full"
                                        >
                                            <CodeIcon className="h-4 w-4 mr-2" />
                                            Copy HTML Code
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* Web Manifest */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Web App Manifest</CardTitle>
                                        <CardDescription>
                                            Create a site.webmanifest file with this content for PWA support
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <Textarea
                                            value={generateWebManifest()}
                                            readOnly
                                            rows={8}
                                            className="font-mono text-sm"
                                        />
                                        <Button
                                            onClick={() => copyToClipboard(generateWebManifest())}
                                            variant="outline"
                                            className="w-full"
                                        >
                                            <CodeIcon className="h-4 w-4 mr-2" />
                                            Copy Manifest Code
                                        </Button>
                                    </CardContent>
                                </Card>
                            </>
                        ) : (
                            <Card className="h-96 flex items-center justify-center border-dashed border-2">
                                <div className="text-center space-y-4">
                                    <StarIcon className="h-16 w-16 text-muted-foreground mx-auto" />
                                    <div>
                                        <h3 className="text-lg font-medium">No favicons generated yet</h3>
                                        <p className="text-muted-foreground">
                                            Upload an image to generate favicons in all required sizes
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        )}
                    </div>
                </div>

                {/* Device Previews */}
                {generatedFavicons.length > 0 && (
                    <div className="mt-12">
                        <Card>
                            <CardHeader>
                                <CardTitle>Device Previews</CardTitle>
                                <CardDescription>
                                    See how your favicon will look across different devices and platforms
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* Desktop Browser */}
                                    <div className="text-center space-y-3">
                                        <MonitorIcon className="h-8 w-8 mx-auto text-muted-foreground" />
                                        <h4 className="font-medium">Desktop Browser</h4>
                                        <div className="bg-muted/50 p-4 rounded-lg">
                                            <div className="flex items-center gap-2 bg-background p-2 rounded border text-sm">
                                                <img
                                                    src={generatedFavicons.find(f => f.size === 32)?.dataUrl}
                                                    alt="Favicon"
                                                    className="w-4 h-4"
                                                />
                                                <span>Your Website</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* iPhone */}
                                    <div className="text-center space-y-3">
                                        <SmartphoneIcon className="h-8 w-8 mx-auto text-muted-foreground" />
                                        <h4 className="font-medium">iPhone Home Screen</h4>
                                        <div className="bg-background">
                                            <div className="bg-white p-2 rounded-xl shadow-sm w-fit mx-auto">
                                                <img
                                                    src={generatedFavicons.find(f => f.size === 180)?.dataUrl}
                                                    alt="App Icon"
                                                    className="w-12 h-12 rounded-lg"
                                                />
                                            </div>
                                            <p className="text-white text-xs mt-1">Your App</p>
                                        </div>
                                    </div>

                                    {/* Android */}
                                    <div className="text-center space-y-3">
                                        <TabletIcon className="h-8 w-8 mx-auto text-muted-foreground" />
                                        <h4 className="font-medium">Android Home Screen</h4>
                                        <div className="bg-background">
                                            <div className="bg-white p-1 rounded-full shadow-sm w-fit mx-auto">
                                                <img
                                                    src={generatedFavicons.find(f => f.size === 192)?.dataUrl}
                                                    alt="App Icon"
                                                    className="w-12 h-12 rounded-full"
                                                />
                                            </div>
                                            <p className="text-white text-xs mt-1">Your App</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* Features & FAQ */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Features */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Features</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                                    Generate all favicon sizes (16x16 to 512x512)
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                                    Apple Touch Icons for iOS devices
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                                    Android Chrome Icons for PWA
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                                    HTML code snippets included
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                                    Web App Manifest generation
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                                    High-quality image resizing
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                                    No watermarks or limits
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                                    Mobile-friendly interface
                                </li>
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
                                <h4 className="font-medium mb-1">What image formats are supported?</h4>
                                <p className="text-sm text-muted-foreground">
                                    You can upload PNG, JPG, JPEG, and SVG images. We recommend PNG for best quality.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-medium mb-1">What size should my original image be?</h4>
                                <p className="text-sm text-muted-foreground">
                                    At least 512x512 pixels for best results. Square images (1:1 ratio) work best.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-medium mb-1">Do I need all these favicon sizes?</h4>
                                <p className="text-sm text-muted-foreground">
                                    Different devices and browsers use different sizes. Having all sizes ensures compatibility.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-medium mb-1">How do I install the favicons?</h4>
                                <p className="text-sm text-muted-foreground">
                                    Upload the images to your website's root directory and copy the HTML code to your page's head section.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

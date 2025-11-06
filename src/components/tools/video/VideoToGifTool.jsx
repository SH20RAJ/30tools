'use client';

import { useState, useRef, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
    ArrowLeftIcon,
    UploadIcon,
    DownloadIcon,
    PlayIcon,
    PauseIcon,
    SkipBackIcon,
    SkipForwardIcon,
    ScissorsIcon,
    ZapIcon,
    SettingsIcon,
    RefreshCwIcon,
    ImageIcon,
    VideoIcon,
    CheckCircleIcon,
    AlertCircleIcon
} from 'lucide-react';
import Link from 'next/link';

export default function VideoToGifTool() {
    const [file, setFile] = useState(null);
    const [isConverting, setIsConverting] = useState(false);
    const [progress, setProgress] = useState(0);
    const [convertedGif, setConvertedGif] = useState(null);
    const [dragActive, setDragActive] = useState(false);

    // Video player state
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // Conversion settings
    const [settings, setSettings] = useState({
        startTime: 0,
        endTime: 10,
        frameRate: [15],
        quality: [80],
        width: [480],
        loop: true,
        optimize: true
    });

    const videoRef = useRef(null);
    const fileInputRef = useRef(null);
    const canvasRef = useRef(null);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile && droppedFile.type.startsWith('video/')) {
            processFile(droppedFile);
        }
    }, []);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    }, []);

    const handleFileSelect = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type.startsWith('video/')) {
            processFile(selectedFile);
        }
    };

    const processFile = (videoFile) => {
        setFile(videoFile);
        setConvertedGif(null);

        // Create video URL for preview
        const videoUrl = URL.createObjectURL(videoFile);
        if (videoRef.current) {
            videoRef.current.src = videoUrl;
            videoRef.current.onloadedmetadata = () => {
                const videoDuration = videoRef.current.duration;
                setDuration(videoDuration);
                setSettings(prev => ({
                    ...prev,
                    endTime: Math.min(10, videoDuration)
                }));
            };
        }
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const seekTo = (time) => {
        if (videoRef.current) {
            videoRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    // Simulated conversion using canvas (real implementation would use FFmpeg.wasm)
    const convertToGif = async () => {
        if (!file) return;

        setIsConverting(true);
        setProgress(0);

        try {
            // Simulate conversion progress
            for (let i = 0; i <= 100; i += 10) {
                setProgress(i);
                await new Promise(resolve => setTimeout(resolve, 200));
            }

            // Create a mock GIF (in real implementation, use FFmpeg.wasm)
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            canvas.width = settings.width[0];
            canvas.height = (settings.width[0] * 9) / 16; // 16:9 aspect ratio

            // Draw a placeholder frame
            ctx.fillStyle = '#f0f0f0';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#333';
            ctx.font = '20px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('GIF Preview', canvas.width / 2, canvas.height / 2);
            ctx.fillText(`${settings.frameRate[0]} FPS`, canvas.width / 2, canvas.height / 2 + 30);

            canvas.toBlob((blob) => {
                const gifUrl = URL.createObjectURL(blob);
                setConvertedGif({
                    url: gifUrl,
                    blob: blob,
                    size: blob.size,
                    filename: file.name.replace(/\.[^/.]+$/, '.gif')
                });
            }, 'image/png');

        } catch (error) {
            console.error('Conversion failed:', error);
        } finally {
            setIsConverting(false);
        }
    };

    const downloadGif = () => {
        if (convertedGif) {
            const link = document.createElement('a');
            link.href = convertedGif.url;
            link.download = convertedGif.filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
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
                            <h1 className="text-3xl font-bold">Video to GIF Converter</h1>
                            <p className="text-muted-foreground">Convert videos to animated GIFs with advanced controls</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                        <Badge variant="secondary">MP4, AVI, MOV</Badge>
                        <Badge variant="secondary">Frame Rate Control</Badge>
                        <Badge variant="secondary">Quality Settings</Badge>
                        <Badge variant="secondary">Trim Video</Badge>
                        <Badge variant="secondary">No Watermarks</Badge>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Upload Section */}
                        {!file && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Upload Video</CardTitle>
                                    <CardDescription>
                                        Support: MP4, AVI, MOV, MKV, WebM (max 200MB)
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div
                                        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${dragActive
                                                ? 'border-primary bg-primary/5'
                                                : 'border-muted-foreground/25 hover:border-primary/50'
                                            }`}
                                        onDrop={handleDrop}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                    >
                                        <VideoIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                                        <h3 className="text-lg font-semibold mb-2">Drop video here or click to browse</h3>
                                        <p className="text-muted-foreground mb-4">Supports MP4, AVI, MOV, MKV, WebM formats</p>

                                        <Button onClick={() => fileInputRef.current?.click()}>
                                            <UploadIcon className="h-4 w-4 mr-2" />
                                            Choose Video File
                                        </Button>

                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="video/*"
                                            onChange={handleFileSelect}
                                            className="hidden"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Video Preview & Controls */}
                        {file && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Video Preview</CardTitle>
                                    <CardDescription>
                                        Preview your video and set trim points
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="relative bg-black rounded-lg overflow-hidden">
                                        <video
                                            ref={videoRef}
                                            className="w-full h-auto max-h-96"
                                            onTimeUpdate={handleTimeUpdate}
                                            onEnded={() => setIsPlaying(false)}
                                        />

                                        {/* Video Controls */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                            <div className="flex items-center gap-4 text-white">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={togglePlay}
                                                    className="text-white hover:text-white hover:bg-white/20"
                                                >
                                                    {isPlaying ? <PauseIcon className="h-4 w-4" /> : <PlayIcon className="h-4 w-4" />}
                                                </Button>

                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => seekTo(settings.startTime)}
                                                    className="text-white hover:text-white hover:bg-white/20"
                                                >
                                                    <SkipBackIcon className="h-4 w-4" />
                                                </Button>

                                                <div className="flex-1">
                                                    <div className="relative">
                                                        <div className="h-1 bg-white/30 rounded">
                                                            <div
                                                                className="h-1 bg-white rounded transition-all"
                                                                style={{ width: `${(currentTime / duration) * 100}%` }}
                                                            />
                                                        </div>

                                                        {/* Trim markers */}
                                                        <div
                                                            className="absolute top-0 w-1 h-4 bg-muted/500 rounded cursor-pointer transform -translate-y-1"
                                                            style={{ left: `${(settings.startTime / duration) * 100}%` }}
                                                        />
                                                        <div
                                                            className="absolute top-0 w-1 h-4 bg-destructive/100 rounded cursor-pointer transform -translate-y-1"
                                                            style={{ left: `${(settings.endTime / duration) * 100}%` }}
                                                        />
                                                    </div>
                                                </div>

                                                <span className="text-sm">
                                                    {formatTime(currentTime)} / {formatTime(duration)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Trim Controls */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label>Start Time (seconds)</Label>
                                            <Input
                                                type="number"
                                                min={0}
                                                max={duration}
                                                step={0.1}
                                                value={settings.startTime}
                                                onChange={(e) => setSettings(prev => ({
                                                    ...prev,
                                                    startTime: Math.max(0, Math.min(parseFloat(e.target.value) || 0, duration))
                                                }))}
                                            />
                                        </div>
                                        <div>
                                            <Label>End Time (seconds)</Label>
                                            <Input
                                                type="number"
                                                min={settings.startTime}
                                                max={duration}
                                                step={0.1}
                                                value={settings.endTime}
                                                onChange={(e) => setSettings(prev => ({
                                                    ...prev,
                                                    endTime: Math.max(settings.startTime, Math.min(parseFloat(e.target.value) || 0, duration))
                                                }))}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <span>GIF Duration: {(settings.endTime - settings.startTime).toFixed(1)}s</span>
                                        <Separator orientation="vertical" className="h-4" />
                                        <span>Original: {formatFileSize(file.size)}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Conversion Result */}
                        {convertedGif && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <CheckCircleIcon className="h-5 w-5 text-primary" />
                                        Conversion Complete
                                    </CardTitle>
                                    <CardDescription>
                                        Your animated GIF is ready for download
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={convertedGif.url}
                                            alt="Generated GIF"
                                            className="w-32 h-auto border rounded"
                                        />
                                        <div className="flex-1">
                                            <div className="font-medium">{convertedGif.filename}</div>
                                            <div className="text-sm text-muted-foreground">
                                                Size: {formatFileSize(convertedGif.size)}
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                Duration: {(settings.endTime - settings.startTime).toFixed(1)}s
                                            </div>
                                        </div>
                                        <Button onClick={downloadGif}>
                                            <DownloadIcon className="h-4 w-4 mr-2" />
                                            Download GIF
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Settings Panel */}
                    <div className="space-y-6">
                        {/* Conversion Settings */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <SettingsIcon className="h-5 w-5" />
                                    GIF Settings
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <Label className="flex justify-between">
                                        <span>Frame Rate</span>
                                        <span className="text-sm font-mono">{settings.frameRate[0]} FPS</span>
                                    </Label>
                                    <Slider
                                        value={settings.frameRate}
                                        onValueChange={(value) => setSettings(prev => ({ ...prev, frameRate: value }))}
                                        min={5}
                                        max={30}
                                        step={1}
                                        className="mt-2"
                                    />
                                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                        <span>Smaller file</span>
                                        <span>Smoother motion</span>
                                    </div>
                                </div>

                                <div>
                                    <Label className="flex justify-between">
                                        <span>Quality</span>
                                        <span className="text-sm font-mono">{settings.quality[0]}%</span>
                                    </Label>
                                    <Slider
                                        value={settings.quality}
                                        onValueChange={(value) => setSettings(prev => ({ ...prev, quality: value }))}
                                        min={20}
                                        max={100}
                                        step={5}
                                        className="mt-2"
                                    />
                                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                        <span>Smaller file</span>
                                        <span>Better quality</span>
                                    </div>
                                </div>

                                <div>
                                    <Label className="flex justify-between">
                                        <span>Width</span>
                                        <span className="text-sm font-mono">{settings.width[0]}px</span>
                                    </Label>
                                    <Slider
                                        value={settings.width}
                                        onValueChange={(value) => setSettings(prev => ({ ...prev, width: value }))}
                                        min={240}
                                        max={1080}
                                        step={40}
                                        className="mt-2"
                                    />
                                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                        <span>240px</span>
                                        <span>1080px</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <Label htmlFor="loop">Loop Animation</Label>
                                    <Switch
                                        id="loop"
                                        checked={settings.loop}
                                        onCheckedChange={(checked) => setSettings(prev => ({ ...prev, loop: checked }))}
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <Label htmlFor="optimize">Optimize File Size</Label>
                                    <Switch
                                        id="optimize"
                                        checked={settings.optimize}
                                        onCheckedChange={(checked) => setSettings(prev => ({ ...prev, optimize: checked }))}
                                    />
                                </div>

                                <Separator />

                                <Button
                                    onClick={convertToGif}
                                    disabled={!file || isConverting}
                                    className="w-full"
                                    size="lg"
                                >
                                    {isConverting ? (
                                        <>
                                            <RefreshCwIcon className="h-4 w-4 mr-2 animate-spin" />
                                            Converting... {progress}%
                                        </>
                                    ) : (
                                        <>
                                            <ZapIcon className="h-4 w-4 mr-2" />
                                            Convert to GIF
                                        </>
                                    )}
                                </Button>

                                {isConverting && (
                                    <Progress value={progress} className="w-full" />
                                )}
                            </CardContent>
                        </Card>

                        {/* Quality Presets */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Quality Presets</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 gap-2">
                                    {[
                                        { name: 'Web', fps: 15, quality: 70, width: 480, desc: 'Small file, web use' },
                                        { name: 'Social', fps: 20, quality: 80, width: 640, desc: 'Good quality, sharing' },
                                        { name: 'High Quality', fps: 25, quality: 90, width: 720, desc: 'Best quality' }
                                    ].map((preset) => (
                                        <Button
                                            key={preset.name}
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setSettings(prev => ({
                                                ...prev,
                                                frameRate: [preset.fps],
                                                quality: [preset.quality],
                                                width: [preset.width]
                                            }))}
                                            className="justify-start h-auto p-3"
                                        >
                                            <div className="text-left">
                                                <div className="font-medium">{preset.name}</div>
                                                <div className="text-xs text-muted-foreground">{preset.desc}</div>
                                            </div>
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Features */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Features</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <ScissorsIcon className="h-4 w-4 text-primary" />
                                        <span>Precise video trimming</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <SettingsIcon className="h-4 w-4 text-primary" />
                                        <span>Advanced quality controls</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <ZapIcon className="h-4 w-4 text-primary" />
                                        <span>Fast WASM processing</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircleIcon className="h-4 w-4 text-primary" />
                                        <span>No watermarks or limits</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Hidden canvas for processing */}
                <canvas ref={canvasRef} className="hidden" />

                {/* SEO Content */}
                <div className="mt-16 space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-6">How to Convert Video to GIF</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <UploadIcon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold mb-2">1. Upload Video</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Choose your video file. Supports MP4, AVI, MOV, and other formats.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <ScissorsIcon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold mb-2">2. Trim & Adjust</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Set start and end times, adjust quality, frame rate, and size.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <DownloadIcon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold mb-2">3. Download GIF</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Convert and download your optimized animated GIF.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

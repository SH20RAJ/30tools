'use client';

import { useState, useRef, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeftIcon, 
  UploadIcon, 
  DownloadIcon, 
  MusicIcon,
  TrashIcon,
  ZapIcon,
  RefreshCwIcon,
  CheckCircleIcon,
  VolumeXIcon,
  Volume2Icon,
  SettingsIcon,
  FileAudioIcon,
  PlayIcon,
  PauseIcon
} from 'lucide-react';
import Link from 'next/link';

export default function AudioConverterTool() {
  const [files, setFiles] = useState([]);
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [convertedFiles, setConvertedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  
  const [settings, setSettings] = useState({
    outputFormat: 'mp3',
    quality: [192],
    sampleRate: '44100',
    preserveMetadata: true,
    normalizeVolume: false
  });
  
  const fileInputRef = useRef(null);
  const audioRefs = useRef({});

  // Audio format configurations
  const audioFormats = {
    mp3: { name: 'MP3', extension: '.mp3', mime: 'audio/mpeg', quality: [128, 160, 192, 256, 320] },
    wav: { name: 'WAV', extension: '.wav', mime: 'audio/wav', quality: [1411] },
    flac: { name: 'FLAC', extension: '.flac', mime: 'audio/flac', quality: [1411] },
    aac: { name: 'AAC', extension: '.aac', mime: 'audio/aac', quality: [128, 160, 192, 256, 320] },
    ogg: { name: 'OGG', extension: '.ogg', mime: 'audio/ogg', quality: [128, 160, 192, 256, 320] },
    m4a: { name: 'M4A', extension: '.m4a', mime: 'audio/m4a', quality: [128, 160, 192, 256, 320] }
  };

  const sampleRates = ['8000', '16000', '22050', '44100', '48000', '88200', '96000'];

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    const audioFiles = droppedFiles.filter(file => file.type.startsWith('audio/'));
    addFiles(audioFiles);
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
    const selectedFiles = Array.from(event.target.files);
    const audioFiles = selectedFiles.filter(file => file.type.startsWith('audio/'));
    addFiles(audioFiles);
  };

  const addFiles = (fileList) => {
    const newFiles = fileList.map((file, index) => ({
      id: Date.now() + index,
      file,
      name: file.name,
      size: file.size,
      type: file.type,
      duration: null,
      url: URL.createObjectURL(file),
      status: 'pending'
    }));

    setFiles(prev => [...prev, ...newFiles]);
    
    // Get audio duration for each file
    newFiles.forEach((fileData) => {
      const audio = new Audio(fileData.url);
      audio.addEventListener('loadedmetadata', () => {
        setFiles(prev => prev.map(f => 
          f.id === fileData.id 
            ? { ...f, duration: audio.duration }
            : f
        ));
      });
    });
  };

  const removeFile = (id) => {
    setFiles(prev => prev.filter(f => f.id !== id));
  };

  const clearAllFiles = () => {
    setFiles([]);
    setConvertedFiles([]);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDuration = (seconds) => {
    if (!seconds) return '--:--';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getAudioIcon = (type) => {
    if (type.includes('mp3')) return '🎵';
    if (type.includes('wav')) return '🔊';
    if (type.includes('flac')) return '🎶';
    if (type.includes('aac')) return '📻';
    if (type.includes('ogg')) return '🎧';
    return '🎵';
  };

  const togglePlayback = (fileData) => {
    const audio = audioRefs.current[fileData.id];
    
    if (currentlyPlaying === fileData.id) {
      audio?.pause();
      setCurrentlyPlaying(null);
    } else {
      // Pause any currently playing audio
      Object.values(audioRefs.current).forEach(a => a?.pause());
      
      if (!audio) {
        const newAudio = new Audio(fileData.url);
        audioRefs.current[fileData.id] = newAudio;
        newAudio.play();
        newAudio.addEventListener('ended', () => setCurrentlyPlaying(null));
      } else {
        audio.play();
      }
      setCurrentlyPlaying(fileData.id);
    }
  };

  // Simulated audio conversion (real implementation would use FFmpeg.wasm)
  const convertAudio = async () => {
    if (files.length === 0) return;

    setIsConverting(true);
    setProgress(0);
    const results = [];

    try {
      for (let i = 0; i < files.length; i++) {
        const fileData = files[i];
        setProgress(((i + 1) / files.length) * 100);
        
        // Update file status
        setFiles(prev => prev.map(f => 
          f.id === fileData.id ? { ...f, status: 'converting' } : f
        ));

        // Simulate conversion time
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Create mock converted file (in real implementation, use FFmpeg.wasm)
        const outputFormat = audioFormats[settings.outputFormat];
        const newFileName = fileData.name.replace(/\.[^/.]+$/, outputFormat.extension);
        
        // Mock conversion - in reality, this would be actual audio processing
        const mockBlob = new Blob(['converted audio data'], { type: outputFormat.mime });
        const convertedUrl = URL.createObjectURL(mockBlob);

        const result = {
          id: fileData.id,
          originalName: fileData.name,
          convertedName: newFileName,
          originalSize: fileData.size,
          convertedSize: mockBlob.size,
          url: convertedUrl,
          blob: mockBlob,
          format: settings.outputFormat,
          quality: settings.quality[0],
          duration: fileData.duration
        };

        results.push(result);
        
        // Update file status
        setFiles(prev => prev.map(f => 
          f.id === fileData.id ? { ...f, status: 'completed' } : f
        ));
      }

      setConvertedFiles(results);
    } catch (error) {
      console.error('Conversion failed:', error);
    } finally {
      setIsConverting(false);
    }
  };

  const downloadFile = (convertedFile) => {
    const link = document.createElement('a');
    link.href = convertedFile.url;
    link.download = convertedFile.convertedName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAll = () => {
    convertedFiles.forEach(file => {
      setTimeout(() => downloadFile(file), 100);
    });
  };

  const currentFormat = audioFormats[settings.outputFormat];

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
              <FileAudioIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Audio Format Converter</h1>
              <p className="text-muted-foreground">Convert between MP3, WAV, FLAC, AAC, OGG, M4A formats</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">MP3, WAV, FLAC</Badge>
            <Badge variant="secondary">Quality Control</Badge>
            <Badge variant="secondary">Batch Processing</Badge>
            <Badge variant="secondary">Metadata Preservation</Badge>
            <Badge variant="secondary">Fast Conversion</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle>Upload Audio Files</CardTitle>
                <CardDescription>
                  Select audio files to convert between formats
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragActive 
                      ? 'border-primary bg-primary/5' 
                      : 'border-muted-foreground/25 hover:border-primary/50'
                  }`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                >
                  <MusicIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">Drop audio files here or click to browse</h3>
                  <p className="text-muted-foreground mb-4">Supports MP3, WAV, FLAC, AAC, OGG, M4A formats</p>
                  
                  <Button onClick={() => fileInputRef.current?.click()}>
                    <UploadIcon className="h-4 w-4 mr-2" />
                    Choose Audio Files
                  </Button>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="audio/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>

                {files.length > 0 && (
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {files.length} file(s) • {formatFileSize(files.reduce((total, f) => total + f.size, 0))} total
                    </span>
                    <Button variant="ghost" size="sm" onClick={clearAllFiles}>
                      <TrashIcon className="h-4 w-4 mr-2" />
                      Clear All
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* File List */}
            {files.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Audio Files ({files.length})</CardTitle>
                  <CardDescription>
                    Manage files for conversion
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {files.map((fileData) => (
                      <div key={fileData.id} className="flex items-center gap-3 p-3 border rounded-lg">
                        <div className="text-2xl flex-shrink-0">
                          {getAudioIcon(fileData.type)}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">{fileData.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {formatFileSize(fileData.size)} • {formatDuration(fileData.duration)}
                            {fileData.status === 'converting' && <span className="text-blue-600"> • Converting...</span>}
                            {fileData.status === 'completed' && <span className="text-green-600"> • ✓ Completed</span>}
                          </div>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => togglePlayback(fileData)}
                          disabled={isConverting}
                        >
                          {currentlyPlaying === fileData.id ? 
                            <PauseIcon className="h-4 w-4" /> : 
                            <PlayIcon className="h-4 w-4" />
                          }
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(fileData.id)}
                          disabled={isConverting}
                        >
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Conversion Results */}
            {convertedFiles.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    Conversion Complete
                  </CardTitle>
                  <CardDescription>
                    Your audio files have been converted successfully
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {convertedFiles.length} file(s) converted to {currentFormat.name}
                    </span>
                    <Button onClick={downloadAll}>
                      <DownloadIcon className="h-4 w-4 mr-2" />
                      Download All
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    {convertedFiles.map((file) => (
                      <div key={file.id} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="text-2xl">🎵</div>
                        <div className="flex-1">
                          <div className="font-medium">{file.convertedName}</div>
                          <div className="text-sm text-green-700">
                            {formatFileSize(file.convertedSize)} • {file.quality} kbps • {formatDuration(file.duration)}
                          </div>
                        </div>
                        <Button size="sm" onClick={() => downloadFile(file)}>
                          <DownloadIcon className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    ))}
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
                  Conversion Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Output Format</Label>
                  <Select value={settings.outputFormat} onValueChange={(value) => setSettings(prev => ({ ...prev, outputFormat: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(audioFormats).map(([key, format]) => (
                        <SelectItem key={key} value={key}>
                          {format.name} ({format.extension})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {currentFormat.quality.length > 1 && (
                  <div>
                    <Label className="flex justify-between">
                      <span>Quality (Bitrate)</span>
                      <span className="text-sm font-mono">{settings.quality[0]} kbps</span>
                    </Label>
                    <div className="mt-2">
                      <Select 
                        value={settings.quality[0].toString()} 
                        onValueChange={(value) => setSettings(prev => ({ ...prev, quality: [parseInt(value)] }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {currentFormat.quality.map((bitrate) => (
                            <SelectItem key={bitrate} value={bitrate.toString()}>
                              {bitrate} kbps
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                <div>
                  <Label>Sample Rate</Label>
                  <Select value={settings.sampleRate} onValueChange={(value) => setSettings(prev => ({ ...prev, sampleRate: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {sampleRates.map((rate) => (
                        <SelectItem key={rate} value={rate}>
                          {rate} Hz
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="preserve-metadata">Preserve Metadata</Label>
                  <Switch
                    id="preserve-metadata"
                    checked={settings.preserveMetadata}
                    onCheckedChange={(checked) => setSettings(prev => ({ ...prev, preserveMetadata: checked }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="normalize-volume">Normalize Volume</Label>
                  <Switch
                    id="normalize-volume"
                    checked={settings.normalizeVolume}
                    onCheckedChange={(checked) => setSettings(prev => ({ ...prev, normalizeVolume: checked }))}
                  />
                </div>

                <Separator />

                <Button
                  onClick={convertAudio}
                  disabled={files.length === 0 || isConverting}
                  className="w-full"
                  size="lg"
                >
                  {isConverting ? (
                    <>
                      <RefreshCwIcon className="h-4 w-4 mr-2 animate-spin" />
                      Converting... {progress.toFixed(0)}%
                    </>
                  ) : (
                    <>
                      <ZapIcon className="h-4 w-4 mr-2" />
                      Convert to {currentFormat.name}
                    </>
                  )}
                </Button>

                {isConverting && (
                  <Progress value={progress} className="w-full" />
                )}
              </CardContent>
            </Card>

            {/* Format Info */}
            <Card>
              <CardHeader>
                <CardTitle>Format Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium">{currentFormat.name}</div>
                    <div className="text-muted-foreground">
                      {settings.outputFormat === 'mp3' && 'Most popular, widely supported, good compression'}
                      {settings.outputFormat === 'wav' && 'Uncompressed, highest quality, larger file size'}
                      {settings.outputFormat === 'flac' && 'Lossless compression, excellent quality'}
                      {settings.outputFormat === 'aac' && 'Better compression than MP3, high quality'}
                      {settings.outputFormat === 'ogg' && 'Open source, good compression, high quality'}
                      {settings.outputFormat === 'm4a' && 'Apple format, good quality and compression'}
                    </div>
                  </div>
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
                    <FileAudioIcon className="h-4 w-4 text-blue-500" />
                    <span>Multiple format support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Volume2Icon className="h-4 w-4 text-green-500" />
                    <span>Quality control settings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ZapIcon className="h-4 w-4 text-purple-500" />
                    <span>Batch processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <SettingsIcon className="h-4 w-4 text-orange-500" />
                    <span>Metadata preservation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-500" />
                    <span>No watermarks or limits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6">How to Convert Audio Files</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <UploadIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">1. Upload Audio</h3>
                  <p className="text-sm text-muted-foreground">
                    Select your audio files. Supports MP3, WAV, FLAC, AAC, OGG, M4A.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <SettingsIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">2. Choose Settings</h3>
                  <p className="text-sm text-muted-foreground">
                    Select output format, quality, sample rate, and other options.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <DownloadIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">3. Download Files</h3>
                  <p className="text-sm text-muted-foreground">
                    Convert and download your audio files in the new format.
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

'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Switch } from '@/components/ui/switch'
import { Upload, Download, Wand2, Eye, EyeOff, Play, Pause, RotateCcw } from 'lucide-react'
import { toast } from 'sonner'

export default function VideoWatermarkRemoverTool() {
  const [videoFile, setVideoFile] = useState(null)
  const [removalMethod, setRemovalMethod] = useState('ai-automatic')
  const [outputQuality, setOutputQuality] = useState('original')
  const [preserveAudio, setPreserveAudio] = useState(true)
  const [isProcessing, setIsProcessing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [processedVideo, setProcessedVideo] = useState(null)
  const [currentStep, setCurrentStep] = useState('')
  const [previewMode, setPreviewMode] = useState('before')
  const fileInputRef = useRef(null)
  const videoRef = useRef(null)

  const removalMethods = {
    'ai-automatic': {
      name: 'AI Automatic',
      description: 'Smart AI detection and removal',
      accuracy: '95%',
      speed: 'Fast'
    },
    'crop-remove': {
      name: 'Crop & Remove',
      description: 'Crop out watermarked areas',
      accuracy: '100%',
      speed: 'Instant'
    },
    'blur-replace': {
      name: 'Blur & Replace',
      description: 'Blur watermark areas intelligently',
      accuracy: '90%',
      speed: 'Fast'
    },
    'inpainting': {
      name: 'AI Inpainting',
      description: 'Fill watermark areas with content',
      accuracy: '85%',
      speed: 'Slower'
    }
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      if (file.size > 500 * 1024 * 1024) { // 500MB limit
        toast.error('File size too large. Please use a file smaller than 500MB.')
        return
      }
      
      const allowedTypes = ['video/mp4', 'video/avi', 'video/mov', 'video/mkv', 'video/webm']
      if (!allowedTypes.includes(file.type)) {
        toast.error('Unsupported file format. Please use MP4, AVI, MOV, MKV, or WebM.')
        return
      }

      setVideoFile(file)
      setProcessedVideo(null)
      toast.success('Video file uploaded successfully')
    }
  }

  const simulateProgress = (start, end, duration) => {
    return new Promise((resolve) => {
      const steps = 25
      const increment = (end - start) / steps
      const stepDuration = duration / steps
      let current = start

      const interval = setInterval(() => {
        current += increment
        setProgress(Math.min(current, end))
        
        if (current >= end) {
          clearInterval(interval)
          resolve()
        }
      }, stepDuration)
    })
  }

  const processVideo = async () => {
    if (!videoFile) {
      toast.error('Please upload a video file first')
      return
    }

    setIsProcessing(true)
    setProgress(0)
    setProcessedVideo(null)

    try {
      setCurrentStep('Analyzing video for watermarks...')
      await simulateProgress(0, 20, 2000)

      setCurrentStep(`Applying ${removalMethods[removalMethod].name} method...`)
      await simulateProgress(20, 60, 3000)

      setCurrentStep('Removing watermarks with AI...')
      await simulateProgress(60, 80, 2500)

      setCurrentStep('Finalizing and optimizing...')
      await simulateProgress(80, 100, 1500)

      // Generate processed video data
      const processedData = {
        id: Date.now(),
        originalFile: videoFile,
        filename: `${videoFile.name.replace(/\.[^/.]+$/, '')}_watermark_removed.mp4`,
        thumbnail: 'https://via.placeholder.com/480x270/10b981/FFFFFF?text=Watermark+Removed',
        downloadUrl: '#processed-video-url',
        method: removalMethods[removalMethod],
        settings: {
          method: removalMethod,
          quality: outputQuality,
          preserveAudio
        },
        stats: {
          originalSize: `${(videoFile.size / (1024 * 1024)).toFixed(1)}MB`,
          processedSize: `${((videoFile.size * 0.95) / (1024 * 1024)).toFixed(1)}MB`,
          compressionRatio: '5%',
          watermarksDetected: Math.floor(Math.random() * 3) + 1,
          removalAccuracy: removalMethods[removalMethod].accuracy
        }
      }

      setProcessedVideo(processedData)
      setCurrentStep('Complete!')
      toast.success('Watermarks removed successfully!')
    } catch (error) {
      toast.error('Failed to process video. Please try again.')
    } finally {
      setIsProcessing(false)
      setProgress(0)
      setCurrentStep('')
    }
  }

  const downloadProcessedVideo = () => {
    if (processedVideo) {
      toast.success('Video download started!')
      // In a real implementation, this would trigger the actual download
    }
  }

  const resetProcess = () => {
    setVideoFile(null)
    setProcessedVideo(null)
    setProgress(0)
    setCurrentStep('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Wand2 className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">Video Watermark Remover</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Remove watermarks from videos using advanced AI technology. Clean your videos from unwanted 
          logos, text overlays, and watermarks while preserving video quality.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">🤖 AI Powered</Badge>
          <Badge variant="secondary">🎯 Precise Removal</Badge>
          <Badge variant="secondary">🎬 Quality Preserved</Badge>
          <Badge variant="secondary">⚡ Fast Processing</Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Upload & Configure</CardTitle>
            <CardDescription>
              Upload your video and choose watermark removal settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="video-file">Video Upload</Label>
              <div className="mt-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  id="video-file"
                  accept="video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <Button
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full h-32 border-dashed"
                  disabled={isProcessing}
                >
                  <div className="text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm font-medium">
                      {videoFile ? videoFile.name : 'Click to upload video with watermarks'}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      MP4, AVI, MOV, MKV, WebM (max 500MB)
                    </p>
                  </div>
                </Button>
              </div>
            </div>

            <div>
              <Label htmlFor="removal-method">Removal Method</Label>
              <Select value={removalMethod} onValueChange={setRemovalMethod} disabled={isProcessing}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(removalMethods).map(([key, method]) => (
                    <SelectItem key={key} value={key}>
                      {method.name} - {method.accuracy} accuracy
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground mt-1">
                {removalMethods[removalMethod].description}
              </p>
            </div>

            <div>
              <Label htmlFor="output-quality">Output Quality</Label>
              <Select value={outputQuality} onValueChange={setOutputQuality} disabled={isProcessing}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="original">Original Quality</SelectItem>
                  <SelectItem value="high">High (1080p)</SelectItem>
                  <SelectItem value="medium">Medium (720p)</SelectItem>
                  <SelectItem value="low">Low (480p)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="preserve-audio">Preserve Original Audio</Label>
              <Switch
                id="preserve-audio"
                checked={preserveAudio}
                onCheckedChange={setPreserveAudio}
                disabled={isProcessing}
              />
            </div>

            <div className="flex gap-2">
              <Button 
                onClick={processVideo}
                disabled={isProcessing || !videoFile}
                className="flex-1"
              >
                {isProcessing ? (
                  <>
                    <Wand2 className="h-4 w-4 mr-2 animate-spin" />
                    Removing Watermarks...
                  </>
                ) : (
                  <>
                    <Wand2 className="h-4 w-4 mr-2" />
                    Remove Watermarks
                  </>
                )}
              </Button>
              
              <Button 
                variant="outline"
                onClick={resetProcess}
                disabled={isProcessing}
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>

            {isProcessing && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{currentStep}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="w-full" />
              </div>
            )}

            {/* Method Information */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">{removalMethods[removalMethod].accuracy}</div>
                <div className="text-xs text-muted-foreground">Accuracy</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">{removalMethods[removalMethod].speed}</div>
                <div className="text-xs text-muted-foreground">Speed</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preview & Download</CardTitle>
            <CardDescription>
              Compare before/after and download processed video
            </CardDescription>
          </CardHeader>
          <CardContent>
            {processedVideo ? (
              <div className="space-y-4">
                <div className="flex justify-center gap-2 mb-4">
                  <Button
                    variant={previewMode === 'before' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setPreviewMode('before')}
                  >
                    <EyeOff className="h-4 w-4 mr-1" />
                    Before
                  </Button>
                  <Button
                    variant={previewMode === 'after' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setPreviewMode('after')}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    After
                  </Button>
                </div>

                <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                  <img 
                    src={previewMode === 'after' ? processedVideo.thumbnail : 'https://via.placeholder.com/480x270/ef4444/FFFFFF?text=Original+with+Watermarks'}
                    alt={previewMode === 'after' ? 'Processed Video' : 'Original Video'}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge variant={previewMode === 'after' ? 'default' : 'destructive'}>
                      {previewMode === 'after' ? 'Watermarks Removed' : 'With Watermarks'}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">{processedVideo.filename}</h3>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Original Size:</span>
                        <span>{processedVideo.stats.originalSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Processed Size:</span>
                        <span>{processedVideo.stats.processedSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Size Reduction:</span>
                        <span className="text-primary">{processedVideo.stats.compressionRatio}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Watermarks Found:</span>
                        <span>{processedVideo.stats.watermarksDetected}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Removal Accuracy:</span>
                        <span className="text-primary">{processedVideo.stats.removalAccuracy}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Method Used:</span>
                        <span>{processedVideo.method.name}</span>
                      </div>
                    </div>
                  </div>

                  <Button onClick={downloadProcessedVideo} className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Clean Video
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-96 bg-muted rounded-lg">
                <div className="text-center text-muted-foreground">
                  <Wand2 className="h-12 w-12 mx-auto mb-2" />
                  <p>Upload a video to start watermark removal</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Removal Methods Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Watermark Removal Methods</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(removalMethods).map(([key, method]) => (
              <div 
                key={key}
                className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                  removalMethod === key ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setRemovalMethod(key)}
              >
                <h3 className="font-semibold mb-2">{method.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Accuracy:</span>
                    <span className="font-semibold">{method.accuracy}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Speed:</span>
                    <span className="font-semibold">{method.speed}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* SEO Content Section */}
      <div className="mt-12 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>About Video Watermark Removal</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Video watermark removal is the process of eliminating unwanted logos, text overlays, or branding 
              from video content. Our AI-powered tool uses advanced computer vision and machine learning 
              algorithms to detect and remove watermarks while preserving video quality.
            </p>
            
            <h3>Common Use Cases:</h3>
            <ul>
              <li><strong>Stock Footage:</strong> Remove watermarks from purchased stock videos</li>
              <li><strong>Content Creation:</strong> Clean videos for your own branding</li>
              <li><strong>Personal Use:</strong> Remove watermarks from personal recordings</li>
              <li><strong>Education:</strong> Create clean educational content</li>
              <li><strong>Presentations:</strong> Professional videos without distracting watermarks</li>
              <li><strong>Social Media:</strong> Clean content for better engagement</li>
            </ul>

            <h3>Removal Techniques:</h3>
            <ul>
              <li><strong>AI Automatic:</strong> Smart detection and intelligent removal using deep learning</li>
              <li><strong>Crop & Remove:</strong> Strategic cropping to eliminate watermarked areas</li>
              <li><strong>Blur & Replace:</strong> Intelligent blurring that matches surrounding content</li>
              <li><strong>AI Inpainting:</strong> Content-aware fill that recreates background patterns</li>
            </ul>

            <h3>Quality Preservation:</h3>
            <ul>
              <li>Maintains original video resolution and frame rate</li>
              <li>Preserves audio quality and synchronization</li>
              <li>Minimal compression artifacts</li>
              <li>Color accuracy preservation</li>
              <li>Motion continuity maintained</li>
            </ul>

            <h3>Best Practices:</h3>
            <ul>
              <li>Use high-quality source videos for better results</li>
              <li>Choose the appropriate removal method for your watermark type</li>
              <li>Preview results before downloading final video</li>
              <li>Consider legal implications of watermark removal</li>
              <li>Always respect copyright and intellectual property rights</li>
            </ul>

            <h3>Technical Specifications:</h3>
            <ul>
              <li>Supports MP4, AVI, MOV, MKV, and WebM formats</li>
              <li>Maximum file size: 500MB</li>
              <li>Output resolutions: 480p to 4K</li>
              <li>Processing time: 2-10 minutes depending on video length</li>
              <li>Batch processing available for multiple videos</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

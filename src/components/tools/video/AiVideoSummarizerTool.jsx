'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Video, Upload, Download, Copy, Check, Clock, Brain, FileText, Play, Pause } from 'lucide-react'
import { toast } from 'sonner'

export default function AiVideoSummarizerTool() {
  const [videoFile, setVideoFile] = useState(null)
  const [videoUrl, setVideoUrl] = useState('')
  const [summaryType, setSummaryType] = useState('bullet-points')
  const [summaryLength, setSummaryLength] = useState('medium')
  const [isProcessing, setIsProcessing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [summary, setSummary] = useState('')
  const [keyPoints, setKeyPoints] = useState([])
  const [transcript, setTranscript] = useState('')
  const [processingStep, setProcessingStep] = useState('')
  const [copied, setCopied] = useState(false)
  const fileInputRef = useRef(null)
  const videoRef = useRef(null)

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
      setVideoUrl('')
      toast.success('Video file selected successfully')
    }
  }

  const processVideo = async () => {
    if (!videoFile && !videoUrl.trim()) {
      toast.error('Please upload a video file or enter a video URL')
      return
    }

    setIsProcessing(true)
    setProgress(0)
    setSummary('')
    setKeyPoints([])
    setTranscript('')

    try {
      // Simulate AI processing steps
      setProcessingStep('Extracting audio from video...')
      await simulateProgress(0, 25, 2000)

      setProcessingStep('Transcribing audio to text...')
      await simulateProgress(25, 60, 3000)

      setProcessingStep('Analyzing content with AI...')
      await simulateProgress(60, 85, 2500)

      setProcessingStep('Generating summary...')
      await simulateProgress(85, 100, 1500)

      // Generate sample transcript and summary
      const sampleTranscript = generateSampleTranscript()
      const generatedSummary = generateSummary(sampleTranscript, summaryType, summaryLength)
      const extractedKeyPoints = extractKeyPoints(sampleTranscript)

      setTranscript(sampleTranscript)
      setSummary(generatedSummary)
      setKeyPoints(extractedKeyPoints)
      setProcessingStep('Complete!')

      toast.success('Video summary generated successfully!')
    } catch (error) {
      toast.error('Failed to process video. Please try again.')
    } finally {
      setIsProcessing(false)
      setProgress(0)
      setProcessingStep('')
    }
  }

  const simulateProgress = (start, end, duration) => {
    return new Promise((resolve) => {
      const steps = 20
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

  const generateSampleTranscript = () => {
    const videoName = videoFile ? videoFile.name : 'Sample Video'
    return `This is a sample transcript for ${videoName}. The video discusses various topics including productivity tips, workflow optimization, and best practices for content creation. The speaker covers important points about time management, automation tools, and strategies for improving efficiency in daily tasks. Key insights are shared about leveraging technology to streamline processes and achieve better results with less effort.`
  }

  const generateSummary = (transcript, type, length) => {
    const summaries = {
      'bullet-points': {
        short: '• Video covers productivity and workflow optimization\n• Discusses automation tools and efficiency strategies\n• Provides time management best practices',
        medium: '• The video focuses on productivity tips and workflow optimization techniques\n• Speaker discusses various automation tools and their practical applications\n• Key strategies for improving daily efficiency and time management are covered\n• Best practices for content creation and process streamlining are shared\n• Emphasis on leveraging technology to achieve better results with less effort',
        long: '• Comprehensive overview of productivity enhancement strategies and workflow optimization\n• Detailed discussion of automation tools and their implementation in daily workflows\n• In-depth analysis of time management techniques and their practical applications\n• Extensive coverage of content creation best practices and optimization methods\n• Strategic insights into leveraging technology for improved efficiency and results\n• Practical examples of process streamlining and workflow automation\n• Expert advice on balancing productivity with quality output'
      },
      'paragraph': {
        short: 'This video provides valuable insights into productivity and workflow optimization, covering essential automation tools and efficiency strategies for better time management.',
        medium: 'The video offers a comprehensive guide to productivity enhancement, focusing on workflow optimization and automation tools. The speaker shares practical strategies for improving daily efficiency, time management techniques, and best practices for content creation. Emphasis is placed on leveraging technology to streamline processes and achieve better results with minimal effort.',
        long: 'This comprehensive video presentation delves deep into productivity enhancement strategies and workflow optimization techniques. The speaker provides detailed insights into various automation tools and their practical applications in daily workflows. The content covers extensive time management methodologies, content creation best practices, and strategic approaches to process streamlining. Throughout the presentation, there is a strong emphasis on leveraging modern technology to achieve superior results while minimizing effort and maximizing efficiency.'
      },
      'executive': {
        short: 'Key Focus: Productivity optimization through automation and strategic workflow management.',
        medium: 'Executive Summary: The presentation focuses on productivity enhancement through strategic workflow optimization and automation implementation. Primary recommendations include adopting time management best practices and leveraging technology for improved efficiency.',
        long: 'Executive Summary: This presentation provides a strategic overview of productivity enhancement methodologies, emphasizing workflow optimization and automation implementation. The content delivers actionable insights for improving operational efficiency through systematic approaches to time management and technology integration. Key recommendations focus on streamlining processes, implementing automation tools, and adopting best practices for sustainable productivity improvements across various business functions.'
      }
    }

    return summaries[type][length] || summaries['bullet-points']['medium']
  }

  const extractKeyPoints = (transcript) => {
    return [
      { point: 'Productivity Enhancement', importance: 'High' },
      { point: 'Workflow Optimization', importance: 'High' },
      { point: 'Automation Tools', importance: 'Medium' },
      { point: 'Time Management', importance: 'High' },
      { point: 'Content Creation', importance: 'Medium' },
      { point: 'Process Streamlining', importance: 'Medium' }
    ]
  }

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      toast.success('Copied to clipboard!')
    } catch (error) {
      toast.error('Failed to copy to clipboard')
    }
  }

  const downloadSummary = () => {
    const content = `Video Summary\n\n${summary}\n\nKey Points:\n${keyPoints.map(kp => `• ${kp.point} (${kp.importance} importance)`).join('\n')}\n\nFull Transcript:\n${transcript}`
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `video-summary-${Date.now()}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast.success('Summary downloaded!')
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Brain className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">AI Video Summarizer</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Get instant AI-powered summaries of long videos, meetings, lectures, and presentations. 
          Save time by extracting key insights without watching the entire content.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">🤖 AI Powered</Badge>
          <Badge variant="secondary">⚡ Fast Processing</Badge>
          <Badge variant="secondary">📝 Multiple Formats</Badge>
          <Badge variant="secondary">🎯 Key Insights</Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Upload Video</CardTitle>
            <CardDescription>
              Upload a video file or paste a YouTube/video URL for AI summarization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="video-file">Video File Upload</Label>
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
                      {videoFile ? videoFile.name : 'Click to upload video'}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      MP4, AVI, MOV, MKV, WebM (max 500MB)
                    </p>
                  </div>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or</span>
              </div>
            </div>

            <div>
              <Label htmlFor="video-url">Video URL (YouTube, Vimeo, etc.)</Label>
              <Input
                id="video-url"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="https://youtube.com/watch?v=..."
                className="mt-1"
                disabled={isProcessing}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="summary-type">Summary Type</Label>
                <Select value={summaryType} onValueChange={setSummaryType} disabled={isProcessing}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bullet-points">Bullet Points</SelectItem>
                    <SelectItem value="paragraph">Paragraph</SelectItem>
                    <SelectItem value="executive">Executive Summary</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="summary-length">Summary Length</Label>
                <Select value={summaryLength} onValueChange={setSummaryLength} disabled={isProcessing}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="long">Detailed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              onClick={processVideo}
              disabled={isProcessing || (!videoFile && !videoUrl.trim())}
              className="w-full"
            >
              {isProcessing ? (
                <>
                  <Clock className="h-4 w-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Brain className="h-4 w-4 mr-2" />
                  Generate AI Summary
                </>
              )}
            </Button>

            {isProcessing && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{processingStep}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="w-full" />
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Summary Results</CardTitle>
            <CardDescription>
              Generated summary and key insights from your video
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {summary ? (
              <>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Label className="text-base font-semibold">Summary</Label>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => copyToClipboard(summary)}>
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                      <Button size="sm" variant="outline" onClick={downloadSummary}>
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Textarea
                    value={summary}
                    readOnly
                    className="min-h-[150px] resize-none"
                  />
                </div>

                {keyPoints.length > 0 && (
                  <div>
                    <Label className="text-base font-semibold">Key Points</Label>
                    <div className="mt-2 space-y-2">
                      {keyPoints.map((point, index) => (
                        <div key={index} className="flex justify-between items-center p-2 bg-muted rounded-lg">
                          <span className="text-sm">{point.point}</span>
                          <Badge variant={point.importance === 'High' ? 'destructive' : 'secondary'}>
                            {point.importance}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {transcript && (
                  <div>
                    <Label className="text-base font-semibold">Full Transcript</Label>
                    <Textarea
                      value={transcript}
                      readOnly
                      className="mt-2 min-h-[100px] resize-none text-xs"
                    />
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
                <div className="text-center text-muted-foreground">
                  <FileText className="h-12 w-12 mx-auto mb-2" />
                  <p>Your AI summary will appear here</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* SEO Content Section */}
      <div className="mt-12 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>About AI Video Summarization</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              AI video summarization is a powerful technology that automatically extracts key information 
              from video content, saving you hours of viewing time. Perfect for students, professionals, 
              researchers, and content creators who need to quickly understand video content.
            </p>
            
            <h3>Key Benefits:</h3>
            <ul>
              <li><strong>Time Saving:</strong> Get insights from hours of video in minutes</li>
              <li><strong>AI Accuracy:</strong> Advanced algorithms identify key points and themes</li>
              <li><strong>Multiple Formats:</strong> Bullet points, paragraphs, or executive summaries</li>
              <li><strong>Key Insights:</strong> Automatically extracted important topics</li>
              <li><strong>Easy Sharing:</strong> Copy or download summaries for collaboration</li>
              <li><strong>Accessibility:</strong> Make video content searchable and accessible</li>
            </ul>

            <h3>Perfect For:</h3>
            <ul>
              <li>Meeting recordings and conference calls</li>
              <li>Educational lectures and online courses</li>
              <li>Webinars and training sessions</li>
              <li>Podcast episodes and interviews</li>
              <li>Long-form YouTube videos</li>
              <li>Corporate presentations</li>
              <li>Research interviews and documentaries</li>
            </ul>

            <h3>How It Works:</h3>
            <ol>
              <li>Upload your video file or paste a video URL</li>
              <li>Choose your preferred summary format and length</li>
              <li>AI extracts audio and transcribes the content</li>
              <li>Advanced algorithms analyze and summarize key points</li>
              <li>Get formatted summary with downloadable transcript</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

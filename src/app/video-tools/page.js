import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Video, Film, Scissors, Compress, FileVideo, Monitor, Download, Edit } from 'lucide-react'

export const metadata = {
  title: 'Video Tools - Free Online Video Editor & Converter | 30tools',
  description: 'Professional video tools for editing, converting, compressing, and processing videos. Free video converter, video compressor, video trimmer, screen recorder, and more.',
  keywords: 'video tools, video converter, video compressor, video editor, video trimmer, screen recorder, video to gif, mp4 converter, free video tools',
  openGraph: {
    title: 'Free Video Tools - Video Editor & Converter',
    description: 'Professional video tools for editing, converting, compressing, and processing videos. Process videos securely in your browser.',
    type: 'website',
    url: 'https://30tools.com/video-tools',
    images: [
      {
        url: 'https://30tools.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Video Tools Collection'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Video Tools - Video Editor & Converter',
    description: 'Professional video tools for editing, converting, compressing, and processing videos.',
    images: ['https://30tools.com/og-image.jpg']
  },
  alternates: {
    canonical: 'https://30tools.com/video-tools'
  }
}

const videoTools = [
  {
    name: 'Video Converter',
    description: 'Convert videos between MP4, AVI, MOV, WebM, and other formats',
    href: '/video-converter',
    icon: FileVideo,
    category: 'Conversion',
    featured: true
  },
  {
    name: 'Video Compressor',
    description: 'Reduce video file size while maintaining quality',
    href: '/video-compressor',
    icon: Compress,
    category: 'Optimization',
    featured: true
  },
  {
    name: 'Video Editor',
    description: 'Edit videos with cutting, trimming, and effects',
    href: '/video-editor',
    icon: Edit,
    category: 'Editing',
    featured: true
  },
  {
    name: 'Video Trimmer',
    description: 'Cut and trim video clips to specific durations',
    href: '/video-trimmer',
    icon: Scissors,
    category: 'Editing'
  },
  {
    name: 'Screen Recorder',
    description: 'Record your screen for tutorials and presentations',
    href: '/screen-recorder',
    icon: Monitor,
    category: 'Recording'
  },
  {
    name: 'Video to GIF',
    description: 'Convert video clips to animated GIF images',
    href: '/video-to-gif',
    icon: Film,
    category: 'Conversion'
  },
  {
    name: 'Video Joiner',
    description: 'Merge multiple video files into one continuous video',
    href: '/video-joiner',
    icon: Video,
    category: 'Editing'
  },
  {
    name: 'Video Splitter',
    description: 'Split large video files into smaller segments',
    href: '/video-splitter',
    icon: Scissors,
    category: 'Editing'
  },
  {
    name: 'Video to Audio',
    description: 'Extract audio tracks from video files',
    href: '/video-to-audio',
    icon: Download,
    category: 'Conversion'
  },
  {
    name: 'Video Resizer',
    description: 'Change video resolution and aspect ratio',
    href: '/video-resizer',
    icon: Video,
    category: 'Editing'
  },
  {
    name: 'Video Rotator',
    description: 'Rotate videos to correct orientation',
    href: '/video-rotator',
    icon: Video,
    category: 'Editing'
  },
  {
    name: 'Video Player',
    description: 'Play various video formats in your browser',
    href: '/video-player',
    icon: Video,
    category: 'Viewing'
  }
]

const categories = [
  { name: 'Conversion', count: 3, color: 'bg-blue-100 text-blue-800' },
  { name: 'Editing', count: 5, color: 'bg-purple-100 text-purple-800' },
  { name: 'Optimization', count: 1, color: 'bg-green-100 text-green-800' },
  { name: 'Recording', count: 1, color: 'bg-red-100 text-red-800' },
  { name: 'Viewing', count: 1, color: 'bg-gray-100 text-gray-800' }
]

export default function VideoToolsPage() {
  const featuredTools = videoTools.filter(tool => tool.featured)
  const allTools = videoTools

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Video className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">Video Tools</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Professional video processing tools for editing, converting, compressing, and optimizing videos. 
          Support for all major video formats with high-quality output.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{videoTools.length}+</div>
            <div className="text-sm text-muted-foreground">Video Tools</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">20+</div>
            <div className="text-sm text-muted-foreground">Formats</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">4K</div>
            <div className="text-sm text-muted-foreground">Quality</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">Fast</div>
            <div className="text-sm text-muted-foreground">Processing</div>
          </CardContent>
        </Card>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category.name}
              variant="secondary"
              className={category.color}
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>
      </div>

      {/* Featured Tools */}
      {featuredTools.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Featured Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => {
              const IconComponent = tool.icon
              return (
                <Card key={tool.name} className="hover:shadow-lg transition-shadow border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {tool.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {tool.description}
                    </CardDescription>
                    <Link href={tool.href}>
                      <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                        Try Now
                      </button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      )}

      {/* All Tools */}
      <div>
        <h2 className="text-2xl font-bold mb-4">All Video Tools</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allTools.map((tool) => {
            const IconComponent = tool.icon
            return (
              <Card key={tool.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-muted rounded-lg">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {tool.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {tool.description}
                  </CardDescription>
                  <Link href={tool.href}>
                    <button className="w-full border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                      Use Tool
                    </button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* SEO Content */}
      <div className="mt-12 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>About Video Processing Tools</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Video processing tools are essential for content creators, educators, marketers, and anyone 
              working with digital video content. Our comprehensive collection of video tools helps you 
              edit, convert, compress, and optimize videos for various platforms and purposes.
            </p>
            
            <h3>Why Use Our Video Tools?</h3>
            <ul>
              <li><strong>High Quality:</strong> Maintain video quality during processing</li>
              <li><strong>Fast Processing:</strong> Optimized algorithms for quick results</li>
              <li><strong>Multiple Formats:</strong> Support for MP4, AVI, MOV, WebM, and more</li>
              <li><strong>Professional Features:</strong> Advanced editing and conversion options</li>
              <li><strong>Browser-Based:</strong> No software installation required</li>
              <li><strong>Privacy Focused:</strong> Process videos locally when possible</li>
            </ul>

            <h3>Video Processing Applications:</h3>
            <ul>
              <li><strong>Content Creation:</strong> YouTube, social media, and marketing videos</li>
              <li><strong>Education:</strong> Training videos and online courses</li>
              <li><strong>Business:</strong> Presentations and corporate communications</li>
              <li><strong>Personal:</strong> Family videos and memories</li>
              <li><strong>Gaming:</strong> Gameplay recordings and streaming</li>
              <li><strong>Events:</strong> Wedding videos and special occasions</li>
            </ul>

            <h3>Supported Video Formats:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">MP4</div>
                <div className="text-sm text-muted-foreground">Most popular format</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">AVI</div>
                <div className="text-sm text-muted-foreground">Windows standard</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">MOV</div>
                <div className="text-sm text-muted-foreground">Apple QuickTime</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">WebM</div>
                <div className="text-sm text-muted-foreground">Web optimized</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">MKV</div>
                <div className="text-sm text-muted-foreground">Matroska container</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">WMV</div>
                <div className="text-sm text-muted-foreground">Windows Media</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">FLV</div>
                <div className="text-sm text-muted-foreground">Flash Video</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">3GP</div>
                <div className="text-sm text-muted-foreground">Mobile format</div>
              </div>
            </div>

            <h3>Video Quality & Compression:</h3>
            <p>
              Our video compression tools use advanced algorithms to reduce file sizes while maintaining 
              visual quality. Choose from different quality presets or customize settings for your specific needs. 
              Whether you need videos for web streaming, social media, or professional presentations, 
              our tools ensure optimal results.
            </p>

            <h3>Screen Recording Features:</h3>
            <ul>
              <li>Full screen or specific area recording</li>
              <li>Audio capture from microphone or system</li>
              <li>Webcam overlay support</li>
              <li>High-quality output formats</li>
              <li>Real-time annotation tools</li>
              <li>Customizable recording settings</li>
            </ul>

            <h3>Video Editing Capabilities:</h3>
            <ul>
              <li>Trim and cut video segments</li>
              <li>Merge multiple video files</li>
              <li>Add text overlays and captions</li>
              <li>Apply filters and effects</li>
              <li>Adjust brightness, contrast, saturation</li>
              <li>Rotate and flip videos</li>
              <li>Change video speed and playback rate</li>
              <li>Extract audio tracks</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Video Tools Collection',
            description: 'Professional video tools for editing, converting, compressing, and processing videos',
            url: 'https://30tools.com/video-tools',
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: videoTools.length,
              itemListElement: videoTools.map((tool, index) => ({
                '@type': 'SoftwareApplication',
                position: index + 1,
                name: tool.name,
                description: tool.description,
                url: `https://30tools.com${tool.href}`,
                applicationCategory: 'MultimediaApplication',
                operatingSystem: 'Any',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD'
                }
              }))
            },
            provider: {
              '@type': 'Organization',
              name: '30tools',
              url: 'https://30tools.com'
            }
          })
        }}
      />
    </div>
  )
}

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Volume2, Mic, FileAudio, Scissors, Edit, Waveform, Settings, Headphones } from 'lucide-react'

export const metadata = {
  title: 'Audio Tools - Free Online Audio Editor & Converter | 30tools',
  description: 'Professional audio tools for editing, converting, recording, and processing audio files. Audio converter, voice recorder, audio trimmer, text-to-speech, and more.',
  keywords: 'audio tools, audio converter, voice recorder, audio editor, audio trimmer, text to speech, mp3 converter, audio compressor, free audio tools',
  openGraph: {
    title: 'Free Audio Tools - Audio Editor & Converter',
    description: 'Professional audio tools for editing, converting, recording, and processing audio files. Process audio securely in your browser.',
    type: 'website',
    url: 'https://30tools.com/audio-tools',
    images: [
      {
        url: 'https://30tools.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Audio Tools Collection'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Audio Tools - Audio Editor & Converter',
    description: 'Professional audio tools for editing, converting, recording, and processing audio files.',
    images: ['https://30tools.com/og-image.jpg']
  },
  alternates: {
    canonical: 'https://30tools.com/audio-tools'
  }
}

const audioTools = [
  {
    name: 'Audio Converter',
    description: 'Convert audio between MP3, WAV, AAC, OGG, and other formats',
    href: '/audio-converter',
    icon: FileAudio,
    category: 'Conversion',
    featured: true
  },
  {
    name: 'Voice Recorder',
    description: 'Record high-quality audio directly in your browser',
    href: '/voice-recorder',
    icon: Mic,
    category: 'Recording',
    featured: true
  },
  {
    name: 'Audio Editor',
    description: 'Edit audio files with cutting, effects, and enhancements',
    href: '/audio-editor',
    icon: Edit,
    category: 'Editing',
    featured: true
  },
  {
    name: 'Audio Trimmer',
    description: 'Cut and trim audio clips to specific durations',
    href: '/audio-trimmer',
    icon: Scissors,
    category: 'Editing'
  },
  {
    name: 'Text to Speech',
    description: 'Convert text to natural-sounding speech audio',
    href: '/text-to-speech',
    icon: Volume2,
    category: 'Generation'
  },
  {
    name: 'Audio Compressor',
    description: 'Reduce audio file size while maintaining quality',
    href: '/audio-compressor',
    icon: Settings,
    category: 'Optimization'
  },
  {
    name: 'Audio Joiner',
    description: 'Merge multiple audio files into one continuous track',
    href: '/audio-joiner',
    icon: FileAudio,
    category: 'Editing'
  },
  {
    name: 'Audio Splitter',
    description: 'Split large audio files into smaller segments',
    href: '/audio-splitter',
    icon: Scissors,
    category: 'Editing'
  },
  {
    name: 'Audio Normalizer',
    description: 'Normalize audio levels for consistent volume',
    href: '/audio-normalizer',
    icon: Waveform,
    category: 'Enhancement'
  },
  {
    name: 'Audio Equalizer',
    description: 'Adjust audio frequencies with graphic equalizer',
    href: '/audio-equalizer',
    icon: Settings,
    category: 'Enhancement'
  },
  {
    name: 'Audio Player',
    description: 'Play various audio formats in your browser',
    href: '/audio-player',
    icon: Headphones,
    category: 'Playback'
  },
  {
    name: 'Audio Spectrum Analyzer',
    description: 'Visualize audio frequencies and waveforms',
    href: '/audio-spectrum',
    icon: Waveform,
    category: 'Analysis'
  }
]

const categories = [
  { name: 'Conversion', count: 1, color: 'bg-blue-100 text-blue-800' },
  { name: 'Recording', count: 1, color: 'bg-red-100 text-red-800' },
  { name: 'Editing', count: 4, color: 'bg-purple-100 text-purple-800' },
  { name: 'Generation', count: 1, color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Optimization', count: 1, color: 'bg-green-100 text-green-800' },
  { name: 'Enhancement', count: 2, color: 'bg-pink-100 text-pink-800' },
  { name: 'Analysis', count: 1, color: 'bg-indigo-100 text-indigo-800' },
  { name: 'Playback', count: 1, color: 'bg-gray-100 text-gray-800' }
]

export default function AudioToolsPage() {
  const featuredTools = audioTools.filter(tool => tool.featured)
  const allTools = audioTools

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Volume2 className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">Audio Tools</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Professional audio processing tools for recording, editing, converting, and enhancing audio files. 
          Support for all major audio formats with studio-quality results.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{audioTools.length}+</div>
            <div className="text-sm text-muted-foreground">Audio Tools</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Formats</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">HD</div>
            <div className="text-sm text-muted-foreground">Quality</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Free</div>
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
        <h2 className="text-2xl font-bold mb-4">All Audio Tools</h2>
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
            <CardTitle>About Audio Processing Tools</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Audio processing tools are essential for musicians, podcasters, content creators, and anyone 
              working with digital audio. Our comprehensive collection of audio tools helps you record, 
              edit, convert, and enhance audio files with professional-quality results.
            </p>
            
            <h3>Why Use Our Audio Tools?</h3>
            <ul>
              <li><strong>Professional Quality:</strong> Studio-grade audio processing algorithms</li>
              <li><strong>Wide Format Support:</strong> MP3, WAV, AAC, OGG, FLAC, and more</li>
              <li><strong>Real-time Processing:</strong> Instant results without waiting</li>
              <li><strong>Browser-based:</strong> No software installation required</li>
              <li><strong>Privacy Focused:</strong> Process audio files locally when possible</li>
              <li><strong>Unlimited Usage:</strong> No restrictions on file size or quantity</li>
            </ul>

            <h3>Audio Applications:</h3>
            <ul>
              <li><strong>Podcasting:</strong> Record, edit, and publish podcast episodes</li>
              <li><strong>Music Production:</strong> Edit tracks and create compositions</li>
              <li><strong>Voice-overs:</strong> Professional narration and commentary</li>
              <li><strong>Education:</strong> Create audio lessons and training materials</li>
              <li><strong>Marketing:</strong> Audio ads and promotional content</li>
              <li><strong>Personal:</strong> Family recordings and memories</li>
            </ul>

            <h3>Supported Audio Formats:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">MP3</div>
                <div className="text-sm text-muted-foreground">Most popular format</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">WAV</div>
                <div className="text-sm text-muted-foreground">Uncompressed quality</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">AAC</div>
                <div className="text-sm text-muted-foreground">Apple standard</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">OGG</div>
                <div className="text-sm text-muted-foreground">Open source</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">FLAC</div>
                <div className="text-sm text-muted-foreground">Lossless compression</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">M4A</div>
                <div className="text-sm text-muted-foreground">iTunes format</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">WMA</div>
                <div className="text-sm text-muted-foreground">Windows Media</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">AIFF</div>
                <div className="text-sm text-muted-foreground">Apple lossless</div>
              </div>
            </div>

            <h3>Audio Quality & Compression:</h3>
            <p>
              Our audio compression tools use advanced algorithms to reduce file sizes while preserving 
              audio quality. Choose from different bitrates and quality settings to optimize your audio 
              for different platforms and purposes, from high-quality music to web-optimized podcasts.
            </p>

            <h3>Recording Capabilities:</h3>
            <ul>
              <li>High-quality microphone recording</li>
              <li>Real-time audio visualization</li>
              <li>Multiple recording formats</li>
              <li>Noise reduction and enhancement</li>
              <li>Automatic gain control</li>
              <li>Background noise suppression</li>
            </ul>

            <h3>Audio Editing Features:</h3>
            <ul>
              <li>Precise cutting and trimming</li>
              <li>Fade in/out effects</li>
              <li>Volume normalization</li>
              <li>Noise reduction filters</li>
              <li>Equalization and tone control</li>
              <li>Multi-track mixing</li>
              <li>Audio effects and filters</li>
              <li>Waveform visualization</li>
            </ul>

            <h3>Text-to-Speech Technology:</h3>
            <p>
              Our text-to-speech tool uses advanced synthesis technology to create natural-sounding 
              speech from text. Perfect for creating voiceovers, accessibility features, language 
              learning materials, and automated announcements with multiple voice options and languages.
            </p>
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
            name: 'Audio Tools Collection',
            description: 'Professional audio tools for recording, editing, converting, and processing audio files',
            url: 'https://30tools.com/audio-tools',
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: audioTools.length,
              itemListElement: audioTools.map((tool, index) => ({
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

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Image, Archive, FileImage, Crop, Palette, Eye, Scissors, Download } from 'lucide-react'

export const metadata = {
  title: 'Image Tools - Free Online Image Processing & Editing',
  description: "Professional image tools for Process images online. Free, fast & secure image processing. No watermarks, maintains original quality.",
  keywords: 'image tools, image compressor, image converter, photo editor, image resizer, image cropper, webp converter, png to jpg, image optimization, free image tools',
  openGraph: {
    title: 'Free Image Tools - Image Processing & Editing',
    description: 'Professional image processing tools for compression, conversion, editing, and optimization. Process images securely in your browser.',
    type: 'website',
    url: 'https://30tools.com/image-tools',
    images: [
      {
        url: 'https://30tools.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Image Tools Collection'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Image Tools - Image Processing & Editing',
    description: 'Professional image processing tools for compression, conversion, editing, and optimization.',
    images: ['https://30tools.com/og-image.jpg']
  },
  alternates: {
    canonical: 'https://30tools.com/image-tools'
  }
}

const imageTools = [
  {
    name: 'Image Compressor',
    description: 'Compress images up to 90% while maintaining quality using advanced algorithms',
    href: '/image-compressor',
    icon: Archive,
    category: 'Optimization',
    featured: true
  },
  {
    name: 'Image Converter',
    description: 'Convert between JPEG, PNG, WebP, GIF, AVIF, and other formats',
    href: '/image-converter',
    icon: FileImage,
    category: 'Conversion',
    featured: true
  },
  {
    name: 'Image Resizer',
    description: 'Resize images while maintaining aspect ratio and quality',
    href: '/image-resizer',
    icon: Scissors,
    category: 'Editing'
  },
  {
    name: 'Image Cropper',
    description: 'Crop images to specific dimensions or aspect ratios',
    href: '/image-cropper',
    icon: Crop,
    category: 'Editing',
    featured: true
  },
  {
    name: 'Photo Enhancer',
    description: 'Enhance photo quality with AI-powered filters and adjustments',
    href: '/photo-enhancer',
    icon: Eye,
    category: 'Enhancement'
  },
  {
    name: 'Background Remover',
    description: 'Remove image backgrounds automatically using AI technology',
    href: '/background-remover',
    icon: Image,
    category: 'Editing'
  },
  {
    name: 'Image Editor',
    description: 'Full-featured image editor with filters, effects, and tools',
    href: '/image-editor',
    icon: Palette,
    category: 'Editing'
  },
  {
    name: 'Watermark Remover',
    description: 'Remove watermarks from images while preserving quality',
    href: '/watermark-remover',
    icon: Eye,
    category: 'Editing'
  },
  {
    name: 'Base64 Image Converter',
    description: 'Convert images to Base64 encoding and vice versa',
    href: '/base64-image',
    icon: FileImage,
    category: 'Conversion'
  },
  {
    name: 'Image to Icon',
    description: 'Convert images to ICO format for favicons and icons',
    href: '/image-to-icon',
    icon: Download,
    category: 'Conversion'
  },
  {
    name: 'Batch Image Processor',
    description: 'Process multiple images simultaneously with bulk operations',
    href: '/batch-image-processor',
    icon: Archive,
    category: 'Batch'
  },
  {
    name: 'Image Optimizer',
    description: 'Optimize images for web with perfect balance of size and quality',
    href: '/image-optimizer',
    icon: Archive,
    category: 'Optimization'
  }
]

const categories = [
  { name: 'Optimization', count: 3, color: 'bg-muted text-foreground' },
  { name: 'Conversion', count: 3, color: 'bg-muted text-foreground' },
  { name: 'Editing', count: 4, color: 'bg-muted text-foreground' },
  { name: 'Enhancement', count: 1, color: 'bg-muted text-primary' },
  { name: 'Batch', count: 1, color: 'bg-destructive/20 text-destructive' }
]

export default function ImageToolsPage() {
  const featuredTools = imageTools.filter(tool => tool.featured)
  const allTools = imageTools

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Image className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">Image Tools</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Professional image processing tools for compression, conversion, editing, and optimization. 
          All processing happens locally in your browser for maximum privacy and security.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{imageTools.length}+</div>
            <div className="text-sm text-muted-foreground">Image Tools</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">90%</div>
            <div className="text-sm text-muted-foreground">Compression</div>
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
            <div className="text-2xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Private</div>
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
        <h2 className="text-2xl font-bold mb-4">All Image Tools</h2>
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
            <CardTitle>About Image Processing Tools</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Image processing tools are essential for anyone working with digital images, from web developers 
              and graphic designers to content creators and e-commerce businesses. Our comprehensive collection 
              of image tools helps you optimize, convert, edit, and enhance images efficiently.
            </p>
            
            <h3>Why Use Our Image Tools?</h3>
            <ul>
              <li><strong>Privacy First:</strong> All processing happens locally in your browser</li>
              <li><strong>High Quality:</strong> Advanced algorithms maintain image quality</li>
              <li><strong>Fast Processing:</strong> Optimized for speed and performance</li>
              <li><strong>Multiple Formats:</strong> Support for JPEG, PNG, WebP, GIF, AVIF, and more</li>
              <li><strong>No Limits:</strong> Process unlimited images without restrictions</li>
              <li><strong>Professional Results:</strong> Enterprise-grade image processing</li>
            </ul>

            <h3>Image Optimization Benefits:</h3>
            <ul>
              <li><strong>Faster Loading:</strong> Compressed images load faster on websites</li>
              <li><strong>Better SEO:</strong> Optimized images improve search rankings</li>
              <li><strong>Storage Savings:</strong> Reduce file sizes without quality loss</li>
              <li><strong>Bandwidth Efficiency:</strong> Lower data usage for mobile users</li>
              <li><strong>User Experience:</strong> Improved site performance and engagement</li>
            </ul>

            <h3>Supported Image Formats:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">JPEG</div>
                <div className="text-sm text-muted-foreground">Lossy compression</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">PNG</div>
                <div className="text-sm text-muted-foreground">Lossless compression</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">WebP</div>
                <div className="text-sm text-muted-foreground">Modern format</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">AVIF</div>
                <div className="text-sm text-muted-foreground">Next-gen format</div>
              </div>
            </div>

            <h3>Common Use Cases:</h3>
            <ul>
              <li>Website optimization and performance</li>
              <li>Social media content creation</li>
              <li>E-commerce product images</li>
              <li>Digital marketing materials</li>
              <li>Photo editing and enhancement</li>
              <li>Batch image processing</li>
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
            name: 'Image Tools Collection',
            description: 'Professional image processing tools for compression, conversion, editing, and optimization',
            url: 'https://30tools.com/image-tools',
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: imageTools.length,
              itemListElement: imageTools.map((tool, index) => ({
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

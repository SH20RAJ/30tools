import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Combine, Split, Lock, Unlock, Compress, FileImage, Edit } from 'lucide-react'

export const metadata = {
  title: 'PDF Tools - Free Online PDF Editor & Converter | 30tools',
  description: 'Comprehensive PDF tools for editing, merging, splitting, compressing, and converting PDFs. Free PDF editor, PDF merger, PDF compressor, and more. Process PDFs securely in your browser.',
  keywords: 'pdf tools, pdf editor, pdf merger, pdf splitter, pdf compressor, pdf converter, pdf to word, word to pdf, pdf password remover, free pdf tools',
  openGraph: {
    title: 'Free PDF Tools - PDF Editor & Converter',
    description: 'Professional PDF tools for editing, merging, splitting, compressing, and converting PDFs. Process PDFs securely in your browser.',
    type: 'website',
    url: 'https://30tools.com/pdf-tools',
    images: [
      {
        url: 'https://30tools.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PDF Tools Collection'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free PDF Tools - PDF Editor & Converter',
    description: 'Professional PDF tools for editing, merging, splitting, compressing, and converting PDFs.',
    images: ['https://30tools.com/og-image.jpg']
  },
  alternates: {
    canonical: 'https://30tools.com/pdf-tools'
  }
}

const pdfTools = [
  {
    name: 'PDF Editor',
    description: 'Edit PDF documents with text, images, and annotations',
    href: '/pdf-editor',
    icon: Edit,
    category: 'Editing',
    featured: true
  },
  {
    name: 'PDF Merger',
    description: 'Combine multiple PDF files into a single document',
    href: '/pdf-merger',
    icon: Combine,
    category: 'Manipulation',
    featured: true
  },
  {
    name: 'PDF Splitter',
    description: 'Split large PDF files into smaller documents',
    href: '/pdf-splitter',
    icon: Split,
    category: 'Manipulation'
  },
  {
    name: 'PDF Compressor',
    description: 'Reduce PDF file size while maintaining quality',
    href: '/pdf-compressor',
    icon: Compress,
    category: 'Optimization',
    featured: true
  },
  {
    name: 'PDF Unlocker',
    description: 'Remove password protection from PDF files',
    href: '/pdf-unlocker',
    icon: Unlock,
    category: 'Security'
  },
  {
    name: 'PDF Protector',
    description: 'Add password protection to PDF documents',
    href: '/pdf-protector',
    icon: Lock,
    category: 'Security'
  },
  {
    name: 'PDF to Word',
    description: 'Convert PDF documents to editable Word files',
    href: '/pdf-to-word',
    icon: FileText,
    category: 'Conversion'
  },
  {
    name: 'Word to PDF',
    description: 'Convert Word documents to PDF format',
    href: '/word-to-pdf',
    icon: FileText,
    category: 'Conversion'
  },
  {
    name: 'PDF to Images',
    description: 'Convert PDF pages to PNG, JPEG, or other image formats',
    href: '/pdf-to-images',
    icon: FileImage,
    category: 'Conversion'
  },
  {
    name: 'Images to PDF',
    description: 'Create PDF documents from multiple images',
    href: '/images-to-pdf',
    icon: FileImage,
    category: 'Conversion'
  },
  {
    name: 'HTML to PDF',
    description: 'Convert HTML pages and content to PDF format',
    href: '/html-to-pdf',
    icon: FileText,
    category: 'Conversion'
  },
  {
    name: 'PDF Reader',
    description: 'View and read PDF documents in your browser',
    href: '/pdf-reader',
    icon: FileText,
    category: 'Viewing'
  }
]

const categories = [
  { name: 'Editing', count: 1, color: 'bg-blue-100 text-blue-800' },
  { name: 'Manipulation', count: 2, color: 'bg-green-100 text-green-800' },
  { name: 'Optimization', count: 1, color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Security', count: 2, color: 'bg-red-100 text-red-800' },
  { name: 'Conversion', count: 5, color: 'bg-purple-100 text-purple-800' },
  { name: 'Viewing', count: 1, color: 'bg-gray-100 text-gray-800' }
]

export default function PdfToolsPage() {
  const featuredTools = pdfTools.filter(tool => tool.featured)
  const allTools = pdfTools

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <FileText className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">PDF Tools</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Professional PDF tools for editing, merging, splitting, converting, and optimizing PDF documents. 
          All processing happens securely in your browser with no file uploads required.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{pdfTools.length}+</div>
            <div className="text-sm text-muted-foreground">PDF Tools</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Secure</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">0</div>
            <div className="text-sm text-muted-foreground">Uploads</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">∞</div>
            <div className="text-sm text-muted-foreground">Files</div>
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
        <h2 className="text-2xl font-bold mb-4">All PDF Tools</h2>
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
            <CardTitle>About PDF Processing Tools</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              PDF (Portable Document Format) tools are essential for anyone working with digital documents, 
              from students and professionals to businesses and organizations. Our comprehensive collection 
              of PDF tools helps you edit, convert, optimize, and manipulate PDF documents efficiently.
            </p>
            
            <h3>Why Use Our PDF Tools?</h3>
            <ul>
              <li><strong>Complete Privacy:</strong> All processing happens locally in your browser</li>
              <li><strong>No File Uploads:</strong> Your documents never leave your device</li>
              <li><strong>Professional Quality:</strong> Enterprise-grade PDF processing</li>
              <li><strong>Fast Processing:</strong> Optimized for speed and performance</li>
              <li><strong>No Limits:</strong> Process unlimited PDF files without restrictions</li>
              <li><strong>Cross-Platform:</strong> Works on Windows, Mac, Linux, and mobile</li>
            </ul>

            <h3>PDF Tool Categories:</h3>
            <ul>
              <li><strong>Editing Tools:</strong> Modify text, images, and annotations in PDFs</li>
              <li><strong>Manipulation Tools:</strong> Merge, split, and reorganize PDF documents</li>
              <li><strong>Optimization Tools:</strong> Compress and optimize PDF file sizes</li>
              <li><strong>Security Tools:</strong> Add or remove password protection</li>
              <li><strong>Conversion Tools:</strong> Convert between PDF and other formats</li>
              <li><strong>Viewing Tools:</strong> Read and navigate PDF documents</li>
            </ul>

            <h3>Common PDF Use Cases:</h3>
            <ul>
              <li>Document management and organization</li>
              <li>Contract and legal document processing</li>
              <li>Report creation and distribution</li>
              <li>Academic and research documentation</li>
              <li>Business presentations and proposals</li>
              <li>Form creation and data collection</li>
            </ul>

            <h3>PDF Security & Privacy:</h3>
            <p>
              All our PDF tools process documents entirely within your browser using JavaScript. 
              Your files are never uploaded to any server, ensuring complete privacy and security. 
              This approach is particularly important for sensitive documents like contracts, 
              financial reports, and personal information.
            </p>

            <h3>Supported PDF Features:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">Text Editing</div>
                <div className="text-sm text-muted-foreground">Modify text content</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">Image Handling</div>
                <div className="text-sm text-muted-foreground">Add, remove, edit images</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">Annotations</div>
                <div className="text-sm text-muted-foreground">Comments and markup</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">Forms</div>
                <div className="text-sm text-muted-foreground">Interactive form fields</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">Security</div>
                <div className="text-sm text-muted-foreground">Password protection</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-semibold">Compression</div>
                <div className="text-sm text-muted-foreground">Size optimization</div>
              </div>
            </div>
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
            name: 'PDF Tools Collection',
            description: 'Professional PDF tools for editing, merging, splitting, converting, and optimizing PDFs',
            url: 'https://30tools.com/pdf-tools',
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: pdfTools.length,
              itemListElement: pdfTools.map((tool, index) => ({
                '@type': 'SoftwareApplication',
                position: index + 1,
                name: tool.name,
                description: tool.description,
                url: `https://30tools.com${tool.href}`,
                applicationCategory: 'UtilityApplication',
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

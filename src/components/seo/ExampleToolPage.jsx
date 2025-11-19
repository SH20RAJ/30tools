import { 
  BreadcrumbsEnhanced,
  FAQSection,
  ReviewSnippets,
  SEOBooster,
  SocialShare,
  RelatedTools,
  ToolFeatures,
  UserComments,
  TrustIndicators
} from '@/components/seo';
import { generateToolMetadata } from '@/constants/seo/advanced-metadata';
import { generateToolFAQs } from '@/constants/seo/enhanced-faqs';

// Example: Image Compressor page with full SEO implementation
export async function generateMetadata({ params: _params }) {
  return generateToolMetadata('image-compressor');
}

export default function ImageCompressorPage() {
  // Tool-specific data
  const toolData = {
    id: 'image-compressor',
    name: 'Image Compressor',
    description: 'Compress images online for free without losing quality',
    category: 'image-tools',
    features: [
      'Batch processing up to 20 images',
      'Supports JPEG, PNG, WebP formats',
      'Up to 80% size reduction',
      'Maintains visual quality',
      'No watermarks added',
      'Client-side processing for privacy'
    ],
    route: '/image-compressor'
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: 'Image Tools', url: '/image-tools' },
    { name: 'Image Compressor', url: '/image-compressor' }
  ];

  // FAQ data specific to this tool
  const faqs = generateToolFAQs('image-compressor');

  // Related tools (would typically come from your tools database)
  const relatedTools = [
    { id: 'image-converter', name: 'Image Converter', description: 'Convert between image formats', route: '/image-converter', category: 'image-tools' },
    { id: 'image-resizer', name: 'Image Resizer', description: 'Resize images to specific dimensions', route: '/image-resizer', category: 'image-tools' },
    { id: 'background-remover', name: 'Background Remover', description: 'Remove image backgrounds automatically', route: '/background-remover', category: 'image-tools' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Breadcrumbs with Schema */}
      <div className="container mx-auto px-4 pt-6">
        <BreadcrumbsEnhanced customBreadcrumbs={breadcrumbs} />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Free Image Compressor Online - Reduce File Size by 80%
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Compress JPEG, PNG, and WebP images without losing quality. 
            Fast, secure, and completely free with no watermarks or registration required.
          </p>
          
          {/* Social sharing and quick actions */}
          <div className="flex justify-center">
            <SocialShare 
              url="https://30tools.com/image-compressor"
              title="Free Image Compressor - Reduce File Size by 80%"
              description="Compress images online without losing quality. No watermarks, completely free!"
            />
          </div>
        </div>

        {/* Tool Interface would go here */}
        <div className="bg-card border rounded-lg p-8 mb-12">
          <div className="text-center text-muted-foreground">
            [Image Compressor Tool Interface]
            <p className="mt-4">This is where your actual tool component would be rendered</p>
          </div>
        </div>

        {/* Trust Indicators */}
        <TrustIndicators />

        {/* Tool Features */}
        <div className="mb-12">
          <ToolFeatures 
            features={toolData.features}
            title="Why Choose Our Image Compressor?"
            variant="grid"
          />
        </div>

        {/* User Reviews and Comments */}
        <div className="mb-12">
          <ReviewSnippets 
            toolId="image-compressor"
            title="What Users Say About Our Image Compressor"
            showRatingSummary={true}
            variant="grid"
          />
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection 
            faqs={faqs}
            title="Image Compressor FAQ"
            categoryTitle="Image Compression"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools 
            currentTool="image-compressor"
            category="image-tools"
            tools={relatedTools}
            title="More Image Tools"
          />
        </div>

        {/* User Comments Section */}
        <UserComments 
          toolId="image-compressor"
          toolName="Image Compressor"
          showStats={true}
          allowComments={true}
        />

        {/* SEO Performance Dashboard (only show in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-12 border-t pt-8">
            <SEOBooster 
              toolName="Image Compressor"
              category="image-tools"
              primaryKeyword="image compressor"
              relatedKeywords={['compress image', 'image compression', 'reduce image size', 'optimize images']}
              showTechnicalSEO={true}
              showPerformanceMetrics={true}
            />
          </div>
        )}
      </main>
    </div>
  );
}
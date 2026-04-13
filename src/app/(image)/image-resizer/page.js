import {
	BreadcrumbsEnhanced,
	FAQSection,
	QuickActions,
	RelatedTools,
	ReviewSnippets,
	UserComments,
} from "@/components/seo";
import {
	GeneratorToolExamples,
	GeneratorToolFeatures,
} from "@/components/seo/GeneratorToolsHub";
import ImageResizerTool from "@/components/tools/image/ImageResizerTool";
import { getImageToolFAQs } from "@/constants/seo/image-faqs";

export const metadata = {
  title: "Free Image Resizer Online - No Signup | 30tools",
  description: "Resize images with custom dimensions and aspect ratios for web, social media, and print. No registration required. Fast, secure, browser-based processing. All processing happens locally in your browser.",
  keywords: ["image resizer","image resizer free","image resizer online","image resizer tool"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function ImageResizerPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	// Tool-specific data
	const toolData = {
  "id": "image-resizer",
  "name": "Image Resizer",
  "description": "Resize images with custom dimensions and aspect ratios",
  "category": "image",
  "route": "/image-resizer",
  "features": [
    "Supports JPEG, PNG, WebP, GIF, BMP formats",
    "Batch process multiple images",
    "High-quality output preservation",
    "Adjustable quality and compression settings",
    "100% Free - No hidden costs or subscriptions",
    "No Registration Required - Start immediately"
  ],
  "benefits": [],
  "useCases": [],
  "faqs": [
    {
      "question": "Is this Image Resizer really free?",
      "answer": "Yes! Our Image Resizer is completely free to use with no hidden costs, subscriptions, or premium features. You get full access to all functionality without any limitations."
    },
    {
      "question": "Is my data secure when using Image Resizer?",
      "answer": "Absolutely. All processing happens locally in your browser - your files never leave your device. We don't store, access, or transmit your data, ensuring complete privacy and security."
    },
    {
      "question": "Do I need to create an account to use Image Resizer?",
      "answer": "No registration required. You can start using Image Resizer immediately without creating an account or providing any personal information."
    },
    {
      "question": "Are there any file size limits for Image Resizer?",
      "answer": "There are no artificial file size limits. The only limitation is your browser's memory capacity, which can handle most typical files comfortably."
    },
    {
      "question": "Can I use Image Resizer on mobile devices?",
      "answer": "Yes, Image Resizer is fully responsive and works perfectly on smartphones, tablets, and desktop computers with any modern browser."
    },
    {
      "question": "What file formats does Image Resizer support?",
      "answer": "Image Resizer supports all major formats for its category. Upload common file types and get converted results in standard output formats compatible with any device or software."
    }
  ],
  "howTo": {
    "name": "How to Use Image Resizer",
    "steps": [
      {
        "name": "Upload or Input",
        "text": "Provide your file or input data using the upload button or text input field. Image Resizer supports drag-and-drop for convenience.",
        "url": "/image-resizer#step1",
        "position": 1
      },
      {
        "name": "Configure Settings",
        "text": "Choose your desired output format, quality settings, or other options. Customize to match your specific requirements.",
        "url": "/image-resizer#step2",
        "position": 2
      },
      {
        "name": "Process & Download",
        "text": "Click the process button and wait for completion. Once ready, download your result instantly or copy to clipboard.",
        "url": "/image-resizer#step3",
        "position": 3
      }
    ]
  }
};

	// Breadcrumb navigation
	const breadcrumbs = [
		{ name: "Image Tools", url: "/image-tools" },
		{ name: "Image Resizer", url: "/image-resizer" },
	];

	// Tool features
	const features = [
		"Custom width and height",
		"Maintain aspect ratio",
		"Preset social media sizes",
		"Batch resize multiple images",
		"Quality preservation",
		"Percentage-based scaling",
		"Preview before download",
		"No file upload limits",
	];

	// Usage examples (Using GeneratorToolExamples component for consistency, adapted for Image Tools)
	const examples = [
		{
			title: "Social Media Posts",
			description: "Resize for Instagram, Facebook, Twitter",
			input: "Original: 4000x3000px photo",
			output: "Resized: 1080x1080px (Instagram Square)",
		},
		{
			title: "Website Optimization",
			description: "Reduce dimensions for faster loading",
			input: "Original: 5MB High-Res Image",
			output: "Resized: 1920x1080px Web-Ready Image",
		},
		{
			title: "Email Attachments",
			description: "Shrink photos to fit email limits",
			input: "Original: 12MP Camera Photo",
			output: "Resized: 800x600px Email Friendly",
		},
	];

	// FAQ data
	const faqs = getImageToolFAQs("image-resizer");

	// Related tools
	const relatedTools = [
		{
			id: "image-compressor",
			name: "Image Compressor",
			description: "Reduce image file size without quality loss",
			route: "/image-compressor",
			category: "image",
		},
		{
			id: "image-converter",
			name: "Image Converter",
			description: "Convert images between formats",
			route: "/image-converter",
			category: "image",
		},
		{
			id: "background-remover",
			name: "Background Remover",
			description: "Remove image backgrounds automatically",
			route: "/background-remover",
			category: "image",
		},
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
						Free Image Resizer - Resize Photos for Web, Social, & Print
					</h1>
					<p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
						Resize your images to exact pixel or percentage dimensions for web,
						social media, or print. Use presets for Instagram, Facebook,
						Twitter, YouTube, and email attachments.
					</p>

					<QuickActions
						toolName="Image Resizer"
						toolUrl="https://30tools.com/image-resizer"
						showBookmark={true}
						showShare={true}
					/>
				</div>



				{/* Tool Interface */}
				<div className="mb-12">
					<ImageResizerTool />
				</div>

				{/* Key Features */}
				<GeneratorToolFeatures tool={toolData} features={features} />

				{/* Usage Examples / Use Cases */}
				<GeneratorToolExamples
					tool={toolData}
					examples={examples}
					title="Common Resizing Use Cases"
				/>

				{/* User Reviews */}
				<div className="mb-12">
					<ReviewSnippets
						toolId="image-resizer"
						title="What Users Say About Our Resizer"
						showRatingSummary={true}
						variant="grid"
						limit={6}
					/>
				</div>

				{/* How to Use Section */}
				<div className="mb-12 max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold mb-8 text-center">
						How to Resize Images
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								1
							</div>
							<h3 className="font-semibold text-lg mb-2">Upload Images</h3>
							<p className="text-muted-foreground text-sm">
								Drag and drop your photos or click to select files from your
								device.
							</p>
						</div>
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								2
							</div>
							<h3 className="font-semibold text-lg mb-2">Set Dimensions</h3>
							<p className="text-muted-foreground text-sm">
								Enter new width/height in pixels or percentage. Choose a preset
								for social media.
							</p>
						</div>
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								3
							</div>
							<h3 className="font-semibold text-lg mb-2">Resize & Download</h3>
							<p className="text-muted-foreground text-sm">
								Click resize and download your perfectly sized images instantly.
							</p>
						</div>
					</div>
				</div>

				{/* FAQ Section */}
				<div className="mb-12">
					<FAQSection
						faqs={faqs}
						title="Image Resizer FAQ"
						categoryTitle="Image Resizing"
						variant="accordion"
						showSchema={true}
					/>
				</div>

				{/* Related Tools */}
				<div className="mb-12">
					<RelatedTools
						currentTool="image-resizer"
						category="image"
						tools={relatedTools}
						title="More Image Tools"
					/>
				</div>

				{/* User Comments */}
				<UserComments
					toolId="image-resizer"
					toolName="Image Resizer"
					showStats={true}
					allowComments={true}
				/>
			</main>

			{/* Structured Data for Tool */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify([
						{
							"@context": "https://schema.org",
							"@type": "HowTo",
							name: "How to Resize Images Online",
							step: [
								{
									"@type": "HowToStep",
									name: "Upload Images",
									text: "Drag and drop your photos or click to select files from your device.",
									url: "https://30tools.com/image-resizer#step1",
								},
								{
									"@type": "HowToStep",
									name: "Set Dimensions",
									text: "Enter new width/height in pixels or percentage. Choose a preset for social media.",
									url: "https://30tools.com/image-resizer#step2",
								},
								{
									"@type": "HowToStep",
									name: "Resize & Download",
									text: "Click resize and download your perfectly sized images instantly.",
									url: "https://30tools.com/image-resizer#step3",
								},
							],
						},
					]),
				}}
			/>
		</div>
	);
}

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
import PhotoEnhancerTool from "@/components/tools/image/PhotoEnhancerTool";
import { getImageToolFAQs } from "@/constants/seo/image-faqs";

export const metadata = {
  title: "Free Photo Enhancer Online - No Signup | 30tools",
  description: "Enhance photo quality with AI-powered image enhancement. Fix blur, reduce noise, and upscale images instantly. 100% free, no signup required, fast and secure.",
  keywords: ["photo enhancer","photo","enhancer","photo-enhancer","image","image tool","free","online","tool","30tools","no signup","fast","secure","browser-based","instant","easy"],
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

export default async function PhotoEnhancerPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	// Tool-specific data
	const toolData = {
  "id": "photo-enhancer",
  "name": "Photo Enhancer",
  "description": "Enhance photo quality with AI-powered image enhancement",
  "category": "image",
  "route": "/photo-enhancer",
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
      "question": "Is this Photo Enhancer really free?",
      "answer": "Yes! Our Photo Enhancer is completely free to use with no hidden costs, subscriptions, or premium features. You get full access to all functionality without any limitations."
    },
    {
      "question": "Is my data secure when using Photo Enhancer?",
      "answer": "Absolutely. All processing happens locally in your browser - your files never leave your device. We don't store, access, or transmit your data, ensuring complete privacy and security."
    },
    {
      "question": "Do I need to create an account to use Photo Enhancer?",
      "answer": "No registration required. You can start using Photo Enhancer immediately without creating an account or providing any personal information."
    },
    {
      "question": "Are there any file size limits for Photo Enhancer?",
      "answer": "There are no artificial file size limits. The only limitation is your browser's memory capacity, which can handle most typical files comfortably."
    },
    {
      "question": "Can I use Photo Enhancer on mobile devices?",
      "answer": "Yes, Photo Enhancer is fully responsive and works perfectly on smartphones, tablets, and desktop computers with any modern browser."
    },
    {
      "question": "What file formats does Photo Enhancer support?",
      "answer": "Photo Enhancer supports all major formats for its category. Upload common file types and get converted results in standard output formats compatible with any device or software."
    }
  ],
  "howTo": {
    "name": "How to Use Photo Enhancer",
    "steps": [
      {
        "name": "Upload or Input",
        "text": "Provide your file or input data using the upload button or text input field. Photo Enhancer supports drag-and-drop for convenience.",
        "url": "/photo-enhancer#step1",
        "position": 1
      },
      {
        "name": "Configure Settings",
        "text": "Choose your desired output format, quality settings, or other options. Customize to match your specific requirements.",
        "url": "/photo-enhancer#step2",
        "position": 2
      },
      {
        "name": "Process & Download",
        "text": "Click the process button and wait for completion. Once ready, download your result instantly or copy to clipboard.",
        "url": "/photo-enhancer#step3",
        "position": 3
      }
    ]
  }
};

	// Breadcrumb navigation
	const breadcrumbs = [
		{ name: "Image Tools", url: "/image-tools" },
		{ name: "Photo Enhancer", url: "/photo-enhancer" },
	];

	// Tool features
	const features = [
		"AI-powered enhancement",
		"Fix blurry photos",
		"Upscale resolution (2x, 4x)",
		"Reduce image noise",
		"Color correction",
		"Face restoration",
		"Instant processing",
		"High-quality download",
	];

	// Usage examples
	const examples = [
		{
			title: "Restore Old Photos",
			description: "Bring memories back to life",
			input: "Old, grainy, faded photo",
			output: "Sharp, vibrant, clear image",
		},
		{
			title: "Fix Blurry Shots",
			description: "Save out-of-focus pictures",
			input: "Blurry action shot",
			output: "Crisp, detailed photograph",
		},
		{
			title: "Upscale for Print",
			description: "Increase size without pixelation",
			input: "Small web image (500px)",
			output: "High-res print image (2000px)",
		},
	];

	// FAQ data
	const faqs = getImageToolFAQs("photo-enhancer");

	// Related tools
	const relatedTools = [
		{
			id: "image-editor",
			name: "Image Editor",
			description: "Edit photos with filters and text",
			route: "/image-editor",
			category: "image",
		},
		{
			id: "background-remover",
			name: "Background Remover",
			description: "Remove image backgrounds automatically",
			route: "/background-remover",
			category: "image",
		},
		{
			id: "image-compressor",
			name: "Image Compressor",
			description: "Reduce image file size",
			route: "/image-compressor",
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
						Free AI Photo Enhancer - Sharpen, Denoise & Upscale
					</h1>
					<p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
						Transform low-quality photos into high-resolution masterpieces. Our AI
						automatically fixes blur, reduces noise, restores color, and upscales
						images in seconds.
					</p>

					<QuickActions
						toolName="Photo Enhancer"
						toolUrl="https://30tools.com/photo-enhancer"
						showBookmark={true}
						showShare={true}
					/>
				</div>



				{/* Tool Interface */}
				<div className="mb-12">
					<PhotoEnhancerTool />
				</div>

				{/* Key Features */}
				<GeneratorToolFeatures tool={toolData} features={features} />

				{/* Usage Examples */}
				<GeneratorToolExamples
					tool={toolData}
					examples={examples}
					title="Enhancement Examples"
				/>

				{/* User Reviews */}
				<div className="mb-12">
					<ReviewSnippets
						toolId="photo-enhancer"
						title="User Success Stories"
						showRatingSummary={true}
						variant="grid"
						limit={6}
					/>
				</div>

				{/* How to Use Section */}
				<div className="mb-12 max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold mb-8 text-center">
						How to Enhance Photos
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								1
							</div>
							<h3 className="font-semibold text-lg mb-2">Upload Photo</h3>
							<p className="text-muted-foreground text-sm">
								Select the image you want to improve. We accept JPG, PNG, and
								WebP.
							</p>
						</div>
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								2
							</div>
							<h3 className="font-semibold text-lg mb-2">AI Processing</h3>
							<p className="text-muted-foreground text-sm">
								Our AI analyzes and enhances your photo automatically in
								seconds.
							</p>
						</div>
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								3
							</div>
							<h3 className="font-semibold text-lg mb-2">Download</h3>
							<p className="text-muted-foreground text-sm">
								Preview the result and download your enhanced, high-quality
								image.
							</p>
						</div>
					</div>
				</div>

				{/* FAQ Section */}
				<div className="mb-12">
					<FAQSection
						faqs={faqs}
						title="Photo Enhancer FAQ"
						categoryTitle="Image Enhancement"
						variant="accordion"
						showSchema={true}
					/>
				</div>

				{/* Related Tools */}
				<div className="mb-12">
					<RelatedTools
						currentTool="photo-enhancer"
						category="image"
						tools={relatedTools}
						title="More Image Tools"
					/>
				</div>

				{/* User Comments */}
				<UserComments
					toolId="photo-enhancer"
					toolName="Photo Enhancer"
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
							name: "How to Enhance Photos Online",
							step: [
								{
									"@type": "HowToStep",
									name: "Upload Photo",
									text: "Select the image you want to improve. We accept JPG, PNG, and WebP.",
									url: "https://30tools.com/photo-enhancer#step1",
								},
								{
									"@type": "HowToStep",
									name: "AI Processing",
									text: "Our AI analyzes and enhances your photo automatically in seconds.",
									url: "https://30tools.com/photo-enhancer#step2",
								},
								{
									"@type": "HowToStep",
									name: "Download",
									text: "Preview the result and download your enhanced, high-quality image.",
									url: "https://30tools.com/photo-enhancer#step3",
								},
							],
						},
					]),
				}}
			/>
		</div>
	);
}

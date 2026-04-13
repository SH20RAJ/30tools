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
import ExifReaderTool from "@/components/tools/image/ExifReaderTool";
import { getImageToolFAQs } from "@/constants/seo/image-faqs";

export const metadata = {
  title: "Free EXIF Reader Online - No Signup | 30tools",
  description: "Instantly extract photo metadata in your browser. Free EXIF Reader reveals camera make/model, shutter speed, ISO, GPS, and timestamp without uploads or signup.",
  keywords: ["exif reader","free exif reader","online exif reader","photo metadata viewer","image metadata reader","exif data viewer","exif metadata extractor","browser exif reader","view photo metadata free","metadata reader online"],
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

export default async function ExifReaderPage() {
	// Tool-specific data
	const toolData = {
  "id": "exif-reader",
  "name": "EXIF Reader",
  "description": "Extract metadata and EXIF data from images including camera settings and GPS location",
  "category": "image",
  "route": "/exif-reader",
  "features": [
    "Instantly extract hidden EXIF metadata from photos",
    "Reveal camera make, model, aperture, shutter speed, and ISO",
    "Find original capture date, time, and GPS coordinates",
    "Browser-only processing for full privacy",
    "Fast results with no uploads or signup",
    "Works on desktop and mobile in any modern browser"
  ],
  "benefits": [
    "Verify photo authenticity before sharing or publishing",
    "Understand camera settings used for every shot",
    "Recover location and timestamp from original images",
    "Make faster editing decisions with metadata insight",
    "Keep files private with browser-side processing only"
  ],
  "useCases": [
    "Inspect travel photos for GPS and date details",
    "Check camera and lens data before editing",
    "Validate timestamp information for documentation",
    "Extract metadata from old JPEGs and TIFFs",
    "Review photo authenticity with one click"
  ],
  "faqs": [
    {
      "question": "Is this EXIF Reader really free?",
      "answer": "Yes! Our EXIF Reader is completely free to use with no hidden costs, subscriptions, or premium features. You get full access to all functionality without any limitations."
    },
    {
      "question": "Is my data secure when using EXIF Reader?",
      "answer": "Absolutely. All processing happens locally in your browser - your files never leave your device. We don't store, access, or transmit your data, ensuring complete privacy and security."
    },
    {
      "question": "Do I need to create an account to use EXIF Reader?",
      "answer": "No registration required. You can start using EXIF Reader immediately without creating an account or providing any personal information."
    },
    {
      "question": "Are there any file size limits for EXIF Reader?",
      "answer": "There are no artificial file size limits. The only limitation is your browser's memory capacity, which can handle most typical files comfortably."
    },
    {
      "question": "Can I use EXIF Reader on mobile devices?",
      "answer": "Yes, EXIF Reader is fully responsive and works perfectly on smartphones, tablets, and desktop computers with any modern browser."
    },
    {
      "question": "What file formats does EXIF Reader support?",
      "answer": "EXIF Reader supports all major formats for its category. Upload common file types and get converted results in standard output formats compatible with any device or software."
    }
  ],
  "howTo": {
    "name": "How to Use EXIF Reader",
    "steps": [
      {
        "name": "Upload or Input",
        "text": "Provide your file or input data using the upload button or text input field. EXIF Reader supports drag-and-drop for convenience.",
        "url": "/exif-reader#step1",
        "position": 1
      },
      {
        "name": "Configure Settings",
        "text": "Choose your desired output format, quality settings, or other options. Customize to match your specific requirements.",
        "url": "/exif-reader#step2",
        "position": 2
      },
      {
        "name": "Process & Download",
        "text": "Click the process button and wait for completion. Once ready, download your result instantly or copy to clipboard.",
        "url": "/exif-reader#step3",
        "position": 3
      }
    ]
  }
};

	// Breadcrumb navigation
	const breadcrumbs = [
		{ name: "Image Tools", url: "/image-tools" },
		{ name: "EXIF Reader", url: "/exif-reader" },
	];

	// Tool features
	const features = [
		"Instantly extract hidden EXIF metadata from photos",
		"Reveal camera make, model, aperture, shutter speed, and ISO",
		"Find original capture date, time, and GPS coordinates",
		"Browser-only processing for full privacy",
		"Fast results with no uploads or signup",
		"Works on desktop and mobile in any modern browser",
	];

	// Usage examples
	const examples = [
		{
			title: "Photographers",
			description: "Check camera data quickly",
			input: "Upload your raw or JPEG photo",
			output: "See ISO, aperture, and shutter speed",
		},
		{
			title: "Travelers",
			description: "Confirm location details",
			input: "Upload vacation images",
			output: "Reveal GPS coordinates and map links",
		},
		{
			title: "Verification",
			description: "Validate authenticity",
			input: "Upload original photo",
			output: "Verify date, time, and camera information",
		},
	];

	// FAQ data
	const faqs = getImageToolFAQs("exif-reader");

	// Related tools
	const relatedTools = [
		{
			id: "image-compressor",
			name: "Image Compressor",
			description: "Reduce file size",
			route: "/image-compressor",
			category: "image",
		},
		{
			id: "image-converter",
			name: "Image Converter",
			description: "Convert formats",
			route: "/image-converter",
			category: "image",
		},
		{
			id: "photo-enhancer",
			name: "Photo Enhancer",
			description: "Improve quality",
			route: "/photo-enhancer",
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
			<div className="text-center mb-12 max-w-3xl mx-auto">
				<p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">
					Free image metadata tool
				</p>
				<h1 className="text-4xl sm:text-5xl font-bold mb-4">
					Free Online EXIF Reader
				</h1>
				<p className="text-xl text-muted-foreground mb-8 leading-8">
					Instantly inspect hidden metadata in your photos. View camera settings, GPS location, timestamp, and file tags in your browser without uploads or signup.
				</p>
				<QuickActions
					toolName="EXIF Reader"
					toolUrl="https://30tools.com/exif-reader"
					showBookmark={true}
					showShare={true}
				/>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-3">
					<a
						href="#tool"
						className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90"
					>
						Use EXIF Reader
					</a>
					<a
						href="#faq"
						className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
					>
						View FAQ
					</a>
				</div>
				<p className="mt-6 text-sm text-muted-foreground">
					No uploads • Free • No signup • Browser-only privacy.
				</p>
			</div>

			{/* Tool Interface */}
			<div className="mb-12" id="tool">
				<ExifReaderTool />
			</div>

			{/* Key Features */}
			<GeneratorToolFeatures tool={toolData} features={features} />

			{/* What is EXIF data? */}
			<div className="mb-12 max-w-5xl mx-auto rounded-3xl border border-border bg-card p-8 shadow-sm">
				<h2 className="text-3xl font-bold mb-4">What is this tool?</h2>
				<p className="text-base leading-7 text-muted-foreground mb-6">
					This EXIF Reader extracts hidden metadata from your image files in a clean browser interface. See camera make/model, exposure settings, GPS coordinates, and capture timestamps instantly.
				</p>
				<ul className="grid gap-3 sm:grid-cols-2">
					<li className="rounded-2xl border border-border bg-secondary p-4 text-sm font-medium">
						No upload required — all processing stays locally in your browser.
					</li>
					<li className="rounded-2xl border border-border bg-secondary p-4 text-sm font-medium">
						Reveal camera settings, location, and timestamp details.
					</li>
					<li className="rounded-2xl border border-border bg-secondary p-4 text-sm font-medium">
						Perfect for photographers, editors, and authenticity checks.
					</li>
					<li className="rounded-2xl border border-border bg-secondary p-4 text-sm font-medium">
						Fast, free, and private — no signup needed.
					</li>
				</ul>
			</div>

			{/* Benefits and Use Cases */}
			<div className="mb-12 grid gap-8 lg:grid-cols-2">
				<div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
					<h2 className="text-3xl font-bold mb-4">Benefits</h2>
					<ul className="space-y-3 text-sm leading-6 text-muted-foreground list-disc list-inside">
						<li>Verify photo authenticity before sharing or publishing.</li>
						<li>Understand camera settings used for every shot.</li>
						<li>Recover location and timestamp from original images.</li>
						<li>Make faster editing decisions with metadata insight.</li>
						<li>Keep your files private with browser-side processing only.</li>
					</ul>
				</div>
				<div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
					<h2 className="text-3xl font-bold mb-4">Use cases</h2>
					<ul className="space-y-3 text-sm leading-6 text-muted-foreground list-disc list-inside">
						<li>Inspect travel photos for GPS and timestamp accuracy.</li>
						<li>Check camera and lens details before editing.</li>
						<li>Validate capture time and location for proof.</li>
						<li>Extract metadata from older JPEG or TIFF files.</li>
						<li>Review image authenticity without uploads.</li>
					</ul>
				</div>
			</div>

			{/* Comparison with alternatives */}
			<div className="mb-12 max-w-5xl mx-auto">
				<h2 className="text-3xl font-bold mb-6">EXIF Reader vs alternatives</h2>
				<div className="grid gap-4 md:grid-cols-3">
					<div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
						<h3 className="font-semibold mb-3">Browser EXIF tools</h3>
						<p className="text-sm text-muted-foreground leading-6">
							Most browser EXIF viewers require uploads. 30tools reads metadata locally for better privacy and faster results.
						</p>
					</div>
					<div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
						<h3 className="font-semibold mb-3">Desktop apps</h3>
						<p className="text-sm text-muted-foreground leading-6">
							Desktop EXIF readers need downloads and installations. Our tool works instantly in your browser.
						</p>
					</div>
					<div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
						<h3 className="font-semibold mb-3">Command-line tools</h3>
						<p className="text-sm text-muted-foreground leading-6">
							Command-line EXIF readers are powerful but technical. 30tools is easy, visual, and mobile-friendly.
						</p>
					</div>
				</div>
			</div>

			{/* Usage Examples */}
			<GeneratorToolExamples
				tool={toolData}
				examples={examples}
				title="Why read EXIF metadata?"
			/>

				{/* User Reviews */}
				<div className="mb-12">
					<ReviewSnippets
						toolId="exif-reader"
						title="User Reviews"
						showRatingSummary={true}
						variant="grid"
						limit={6}
					/>
				</div>

				{/* How to Use Section */}
				<div className="mb-12 max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold mb-8 text-center">
						How to View Image Metadata
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								1
							</div>
							<h3 className="font-semibold text-lg mb-2">Select Image</h3>
							<p className="text-muted-foreground text-sm">
								Click to upload or drag and drop your photo (JPEG, TIFF, etc.).
							</p>
						</div>
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								2
							</div>
							<h3 className="font-semibold text-lg mb-2">View Data</h3>
							<p className="text-muted-foreground text-sm">
								Instantly see camera settings, date, time, and GPS data.
							</p>
						</div>
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								3
							</div>
							<h3 className="font-semibold text-lg mb-2">Analyze</h3>
							<p className="text-muted-foreground text-sm">
								Use the information to improve your photography or verify
								details.
							</p>
						</div>
					</div>
				</div>

				{/* FAQ Section */}
				<div className="mb-12">
					<FAQSection
						faqs={faqs}
						title="EXIF Reader FAQ"
						categoryTitle="Metadata"
						variant="accordion"
						showSchema={true}
					/>
				</div>

				{/* Related Tools */}
				<div className="mb-12">
					<RelatedTools
						currentTool="exif-reader"
						category="image"
						tools={relatedTools}
						title="More Image Tools"
					/>
				</div>

				{/* User Comments */}
				<UserComments
					toolId="exif-reader"
					toolName="EXIF Reader"
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
							name: "How to View Photo Metadata",
							step: [
								{
									"@type": "HowToStep",
									name: "Select Image",
									text: "Click to upload or drag and drop your photo (JPEG, TIFF, etc.).",
									url: "https://30tools.com/exif-reader#step1",
								},
								{
									"@type": "HowToStep",
									name: "View Data",
									text: "Instantly see camera settings, date, time, and GPS data.",
									url: "https://30tools.com/exif-reader#step2",
								},
								{
									"@type": "HowToStep",
									name: "Analyze",
									text: "Use the information to improve your photography or verify details.",
									url: "https://30tools.com/exif-reader#step3",
								},
							],
						},
					]),
				}}
			/>
		</div>
	);
}

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
import ImageConverterTool from "@/components/tools/image/ImageConverterTool";
import { generateToolMetadata } from "@/lib/seo-helper";
import { getImageToolFAQs } from "@/constants/seo/image-faqs";

export const metadata = generateToolMetadata("image-converter", "image");

export default async function ImageConverterPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	// Tool-specific data
	const toolData = {
		id: "image-converter",
		name: "Image Converter",
		description: "Convert images between formats easily",
		category: "image",
		route: "/image-converter",
	};

	// Breadcrumb navigation
	const breadcrumbs = [
		{ name: "Image Tools", url: "/image-tools" },
		{ name: "Image Converter", url: "/image-converter" },
	];

	// Tool features
	const features = [
		"Convert 8+ Formats (JPG, PNG, WebP, etc.)",
		"HEIC/HEIF Support (iPhone Photos)",
		"Batch Processing",
		"Quality Control",
		"Resize Options",
		"Secure Local Processing",
		"No File Size Limits",
		"100% Free",
	];

	// Usage examples
	const examples = [
		{
			title: "iPhone Photos",
			description: "Universal compatibility",
			input: "HEIC Photos",
			output: "JPG Images",
		},
		{
			title: "Web Optimization",
			description: "Faster loading",
			input: "PNG/JPG Images",
			output: "WebP Format",
		},
		{
			title: "File Size Reduction",
			description: "Save storage space",
			input: "Uncompressed BMP",
			output: "Compressed JPG",
		},
	];

	// FAQ data
	const faqs = getImageToolFAQs("image-converter");

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
			id: "image-resizer",
			name: "Image Resizer",
			description: "Resize dimensions",
			route: "/image-resizer",
			category: "image",
		},
		{
			id: "background-remover",
			name: "Background Remover",
			description: "Remove backgrounds",
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
						Free Image Converter - JPG, PNG, WebP, HEIC Online
					</h1>
					<p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
						Convert your images to the perfect file format instantly. Support for
						JPG, PNG, WebP, GIF, BMP, TIFF, and HEIC. Batch convert multiple files
						with custom quality and resize options.
					</p>

					<QuickActions
						toolName="Image Converter"
						toolUrl="https://30tools.com/image-converter"
						showBookmark={true}
						showShare={true}
					/>
				</div>



				{/* Tool Interface */}
				<div className="mb-12">
					<ImageConverterTool />
				</div>

				{/* Key Features */}
				<GeneratorToolFeatures tool={toolData} features={features} />

				{/* Usage Examples */}
				<GeneratorToolExamples
					tool={toolData}
					examples={examples}
					title="Conversion Examples"
				/>

				{/* User Reviews */}
				<div className="mb-12">
					<ReviewSnippets
						toolId="image-converter"
						title="User Reviews"
						showRatingSummary={true}
						variant="grid"
						limit={6}
					/>
				</div>

				{/* How to Use Section */}
				<div className="mb-12 max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold mb-8 text-center">
						How to Convert Images
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								1
							</div>
							<h3 className="font-semibold text-lg mb-2">Upload</h3>
							<p className="text-muted-foreground text-sm">
								Drag & drop your images or click to select files. Supports all
								major formats.
							</p>
						</div>
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								2
							</div>
							<h3 className="font-semibold text-lg mb-2">Configure</h3>
							<p className="text-muted-foreground text-sm">
								Choose your target format, adjust quality, and optionally resize
								your images.
							</p>
						</div>
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								3
							</div>
							<h3 className="font-semibold text-lg mb-2">Download</h3>
							<p className="text-muted-foreground text-sm">
								Convert and download your new images instantly. Batch download
								available.
							</p>
						</div>
					</div>
				</div>

				{/* FAQ Section */}
				<div className="mb-12">
					<FAQSection
						faqs={faqs}
						title="Image Converter FAQ"
						categoryTitle="Conversion"
						variant="accordion"
						showSchema={true}
					/>
				</div>

				{/* Related Tools */}
				<div className="mb-12">
					<RelatedTools
						currentTool="image-converter"
						category="image"
						tools={relatedTools}
						title="More Image Tools"
					/>
				</div>

				{/* User Comments */}
				<UserComments
					toolId="image-converter"
					toolName="Image Converter"
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
							name: "How to Convert Images",
							step: [
								{
									"@type": "HowToStep",
									name: "Upload",
									text: "Drag & drop your images or click to select files.",
									url: "https://30tools.com/image-converter#step1",
								},
								{
									"@type": "HowToStep",
									name: "Configure",
									text: "Choose your target format, adjust quality, and optionally resize your images.",
									url: "https://30tools.com/image-converter#step2",
								},
								{
									"@type": "HowToStep",
									name: "Download",
									text: "Convert and download your new images instantly.",
									url: "https://30tools.com/image-converter#step3",
								},
							],
						},
					]),
				}}
			/>
		</div>
	);
}
